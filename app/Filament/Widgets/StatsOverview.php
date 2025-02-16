<?php

namespace App\Filament\Widgets;

use App\Models\Category;
use App\Models\Product;
use App\Models\Transaction;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        if (request()->user()->role === 'admin') {
            return [
                Stat::make('Jumlah Kategori', Category::count()),
                Stat::make('Jumlah Produk', Product::count()),
                Stat::make('Transaksi Sukses', Transaction::where('status', 'SUCCESS')->count()),
                Stat::make('Jumlah Customer', User::where('role', 'customer')->count()),
                Stat::make('Jumlah Kurir', User::where('role', 'kurir')->count()),
                Stat::make('Jumlah Supplier', User::where('role', 'supplier')->count()),
            ];
        }
        return [];
    }
}
