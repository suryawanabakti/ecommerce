<?php

namespace App\Filament\Widgets;

use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use NunoMaduro\Collision\Adapters\Phpunit\State;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Jumlah Customer', User::where('role', 'customer')->count()),
            Stat::make('Jumlah Supplier', User::where('role', 'supplier')->count()),
            Stat::make('Jumlah Kurir', User::where('role', 'kurir')->count()),
        ];
    }
}
