<?php

namespace App\Filament\Pages;

use App\Filament\Widgets\StatsOverview;
use App\Livewire\TransactionChart;
use App\Livewire\TransactionWeek;
use App\Livewire\TransactionWeekWidgetsChart;
use Filament\Facades\Filament;
use Filament\Pages\Page;

class Report extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static string $view = 'filament.pages.report';

    public static function canAccess(): bool
    {
        return Filament::auth()->user()->role === 'pimpinan';
    }

    public function getWidgets(): array
    {
        return [
            StatsOverview::class,
            TransactionChart::class,
            TransactionWeek::class,
        ];
    }
}
