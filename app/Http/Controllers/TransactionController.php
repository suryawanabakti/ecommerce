<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Transaction;
use App\Services\Fonnte;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Midtrans\Snap;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with('user')->where('user_id', request()->user()->id)->get()->map(function ($data) {
            return [
                "id" => $data->invoice,
                "amount" => $data->total,
                "status" => $data->status,
                "email" => $data->user->email
            ];
        });
        return Inertia::render("transactions/page", ["transactions" => $transactions]);
    }

    public function handleNotification(Request $request)
    {

        $payload = $request->all();
        Log::info('incoming-midtrans', [
            'payload' => $payload
        ]);

        $transaction = $payload['transaction_status'];
        $orderId = $payload['order_id'];
        $statusCode = $payload['status_code'];
        $grossAmount = $payload['gross_amount'];

        $reqSignature = $payload['signature_key'];

        $signature = hash('sha512', $orderId . $statusCode . $grossAmount . config('midtrans.server_key'));

        if ($signature != $reqSignature) {
            return response()->json([
                'message' => 'Invalid signature'
            ], 401);
        }
        $myTransaction = Transaction::where('invoice', $orderId)->first();

        if (empty($myTransaction)) {
            return response()->json([
                'message' => 'Transaction not found'
            ], 404);
        }

        if ($transaction == 'capture' || $transaction == 'settlement') {
            // Pembayaran sukses, update database
            Transaction::where('invoice', $orderId)->update(["status" => "SUCCESS"]);
            Fonnte::sendWa($myTransaction->user->nohp, "Transaksi dengan invoice : " . $orderId . " Telah SUCCESS");
            Fonnte::sendWa(env('ADMIN_WA'), "Transaksi dengan invoice : " . $orderId . " Telah SUCCESS");
        } elseif ($transaction == 'pending') {
            // Pembayaran tertunda
            Transaction::where('invoice', $orderId)->update(["status" => "PENDING"]);
            Fonnte::sendWa($myTransaction->user->nohp, "Transaksi dengan invoice : " . $orderId . " Telah PENDING");
            Fonnte::sendWa(env('ADMIN_WA'), "Transaksi dengan invoice : " . $orderId . " Telah PENDING");
        } elseif ($transaction == 'deny' || $transaction == 'cancel' || $transaction == 'expire') {
            // Pembayaran 
            Transaction::where('invoice', $orderId)->update(["status" => "FAILED"]);
            Fonnte::sendWa($myTransaction->user->nohp, "Transaksi dengan invoice : " . $orderId . " Telah FAILED");
            Fonnte::sendWa(env('ADMIN_WA'), "Transaksi dengan invoice : " . $orderId . " Telah FAILED");
        }
    }
    public function store(Request $request)
    {
        // Fetch all cart items in one query
        $cartItems = Cart::whereIn('id', collect($request->carts)->pluck('id'))
            ->with('product')
            ->get();

        // Calculate total price
        $total = $cartItems->sum(fn($cart) => $cart->product->price * $cart->qty);

        // Create the transaction
        $inv = 'INV-' . now()->timestamp;
        $transaction = Transaction::create([
            'user_id' => $request->user()->id,
            'invoice' =>  $inv,
            'total' => $total,
            'status' => 'PENDING'
        ]);

        // Update all cart items with the transaction_id
        Cart::whereIn('id', $cartItems->pluck('id'))->update(['transaction_id' => $transaction->id]);

        Fonnte::sendWa(env('ADMIN_WA'), "Pesanan Baru (PENDING)\nNo.Invoice: {$transaction->invoice}\nNama:{$transaction->user?->name}\nNoHp:{$transaction->user?->nohp}");

        $transactionDetails = [
            'transaction_details' => [
                'order_id' => $inv,
                'gross_amount' => $total,
            ],
            'customer_details' => [
                'first_name' => $request->user()->name,
                'email' => $request->user()->email,
            ],
        ];

        try {
            $snapToken = Snap::getSnapToken($transactionDetails);
            return response()->json(['token' => $snapToken]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        // return redirect('/order-confirmation');
    }
}
