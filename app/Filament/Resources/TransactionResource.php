<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TransactionResource\Pages;
use App\Filament\Resources\TransactionResource\RelationManagers;
use App\Filament\Resources\TransactionResource\RelationManagers\CartsRelationManager;
use App\Models\Transaction;
use App\Models\User;
use Filament\Facades\Filament;
use Filament\Forms;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TransactionResource extends Resource
{
    protected static ?string $model = Transaction::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Radio::make('status')->options([
                    'PENDING' => 'PENDING',
                    'SUCCESS' => 'SUCCESS',
                    'DIANTARKAN' => 'DIANTARKAN',
                    'SELESAI' => 'SELESAI',
                ])->inline()->required()->columnSpanFull(),
                Select::make('courier_id')->options(User::where('role', 'kurir')->get()->pluck('name', 'id'))
            ]);
    }
    public static function canAccess(): bool
    {
        $user = Filament::auth()->user();

        // Hanya role 'admin' yang bisa mengakses
        return $user && $user->role === 'admin' || $user->role === 'kurir';
    }
    public static function table(Table $table): Table
    {
        $user = Filament::auth()->user();
        $query = Transaction::orderBy('created_at', 'DESC');

        if ($user->role === 'kurir') {
            $query->where('courier_id', auth()->id());
        }

        if (request()->user())
            return $table
                ->query($query)
                ->columns([
                    TextColumn::make('created_at'),
                    TextColumn::make('invoice')->searchable(),
                    TextColumn::make('user.name')->searchable(),
                    TextColumn::make('status')->badge(),
                ])
                ->filters([
                    //
                ])
                ->actions([
                    Tables\Actions\ViewAction::make(),
                    Tables\Actions\DeleteAction::make()->visible(request()->user()->role === 'admin'),
                    Tables\Actions\EditAction::make()->visible(request()->user()->role === 'admin'),
                ])
                ->bulkActions([
                    Tables\Actions\BulkActionGroup::make([
                        Tables\Actions\DeleteBulkAction::make(),
                    ]),
                ]);
    }

    public static function getRelations(): array
    {
        return [
            CartsRelationManager::class,
        ];
    }




    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTransactions::route('/'),
            'create' => Pages\CreateTransaction::route('/create'),
            'view' => Pages\ViewTransaction::route('/{record}'),
            'edit' => Pages\EditTransaction::route('/{record}/edit'),
        ];
    }
}
