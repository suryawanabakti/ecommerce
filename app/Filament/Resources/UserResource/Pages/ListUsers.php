<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Actions;
use Filament\Resources\Components\Tab;
use Filament\Resources\Pages\ListRecords;

class ListUsers extends ListRecords
{
    protected static string $resource = UserResource::class;

    public function getTabs(): array
    {
        return [
            null => Tab::make('Semua'),
            'customer' => Tab::make()->query(fn($query) => $query->where('role', 'customer')),
            'kurir' => Tab::make()->query(fn($query) => $query->where('role', 'kurir')),
            'pimpinan' => Tab::make()->query(fn($query) => $query->where('role', 'pimpinan')),
            'supplier' => Tab::make()->query(fn($query) => $query->where('role', 'supplier')),
        ];
    }
    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
