<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Faker\Provider\ar_EG\Text;
use Filament\Facades\Filament;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('image')->required(),
                TextInput::make('name')->required(),
                Select::make('user_id')->label('Supplier')->options(User::where('role', 'supplier')->pluck('name', 'id'))->required(),
                Select::make('category_id')->label('Category')->options(Category::all()->pluck('name', 'id'))->required(),
                RichEditor::make('description')->nullable()->required(),
                TextInput::make('price')->numeric()->required(),
                TextInput::make('stock')->numeric()->required(),
            ]);
    }
    public static function canEdit(Model $record): bool
    {
        $user = Filament::auth()->user();
        // Hanya role 'admin' yang bisa mengakses
        return $user && $user->role === 'admin';
    }
    public static function canCreate(): bool
    {
        $user = Filament::auth()->user();
        // Hanya role 'admin' yang bisa mengakses
        return $user && $user->role === 'admin';
    }
    public static function canAccess(): bool
    {
        $user = Filament::auth()->user();

        // Hanya role 'admin' yang bisa mengakses
        return $user && $user->role === 'admin' || $user->role === 'supplier';
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name'),
                TextColumn::make('user.name'),
                TextColumn::make('category.name'),
                TextColumn::make('price'),
                TextColumn::make('stock'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make()->visible(Filament::auth()->user()->role === 'admin'),
                Tables\Actions\DeleteAction::make()->visible(Filament::auth()->user()->role === 'admin'),
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'view' => Pages\ViewProduct::route('/{record}'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
