<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with(['category', 'user'])->get()->map(function ($data) {
            return [
                "id" => $data->id,
                "name" => $data->name,
                "category" => $data->category->name,
                "price" => $data->price,
                "image" => $data->image,
            ];
        });
        $categories = Category::all();

        return Inertia::render("products/page", ["products" => $products, "categories" => $categories]);
    }

    public function show(Product $product)
    {
        return Inertia::render("products/[id]/page", ["product" => $product]);
    }
}
