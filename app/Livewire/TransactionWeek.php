<?php

namespace App\Livewire;

use App\Models\Transaction;
use Carbon\Carbon;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class TransactionWeek extends ChartWidget
{
    protected static ?string $heading = 'Last 7 Days Transactions';

    protected function getData(): array
    {
        $startDate = Carbon::now()->subDays(6)->startOfDay(); // 6 hari ke belakang + hari ini
        $endDate = Carbon::now()->endOfDay();

        // Ambil data transaksi dalam 7 hari terakhir
        $transactions = Transaction::select(
            DB::raw('DATE(created_at) as date'),
            DB::raw('SUM(total) as total')
        )
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // Mapping data untuk chart
        $labels = [];
        $data = [];

        // Buat array default untuk 7 hari terakhir
        $dates = collect(range(0, 6))->map(function ($day) {
            return Carbon::now()->subDays(6 - $day)->format('Y-m-d');
        });

        foreach ($dates as $date) {
            $labels[] = Carbon::parse($date)->format('d M'); // Format "01 Jan"
            $data[] = $transactions->firstWhere('date', $date)->total ?? 0;
        }

        return [
            'datasets' => [
                [
                    'label' => 'Total Transactions',
                    'data' => $data,
                    'borderColor' => '#3498db',
                    'backgroundColor' => 'rgba(52, 152, 219, 0.2)',
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'bar'; // Bisa diganti dengan 'line', 'pie', dll.
    }
}
