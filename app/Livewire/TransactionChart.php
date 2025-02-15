<?php

namespace App\Livewire;

use Filament\Widgets\ChartWidget;
use App\Models\Transaction; // Pastikan model Transaction ada
use Illuminate\Support\Facades\DB;

class TransactionChart extends ChartWidget
{
    protected static ?string $heading = 'Monthly Transactions';

    protected function getData(): array
    {
        // Ambil data transaksi per bulan
        $transactions = Transaction::select(
            DB::raw('MONTH(created_at) as month'),
            DB::raw('SUM(total) as total')
        )
            ->groupBy('month')
            ->orderBy('month')
            ->get();

        // Mapping data untuk chart
        $labels = [];
        $data = [];

        foreach ($transactions as $transaction) {
            $labels[] = date("F", mktime(0, 0, 0, $transaction->month, 1)); // Nama bulan
            $data[] = $transaction->total; // Total transaksi per bulan
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
        return 'bar'; // Bisa diganti dengan 'bar', 'pie', dll.
    }
}
