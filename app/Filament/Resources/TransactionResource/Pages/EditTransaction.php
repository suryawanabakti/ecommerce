<?php

namespace App\Filament\Resources\TransactionResource\Pages;

use App\Filament\Resources\TransactionResource;
use App\Services\Fonnte;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;

class EditTransaction extends EditRecord
{
    protected static string $resource = TransactionResource::class;

    protected function handleRecordUpdate(Model $record, array $data): Model
    {
        $record->update($data);

        Fonnte::sendWa($record->user->nohp, "Status Pesanan Anda : " . $data['status']);

        return $record;
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
