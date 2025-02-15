<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function store(Request $request)
    {
        $product = Product::find($request->product_id);

        Cart::create([
            'product_id' => $product->id,
            'user_id' => $request->user()->id,
            'qty' => 1,
            'total' => $product->price * 1,
        ]);

        return back();
    }
}
