<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckOutController extends Controller
{
    public function index()
    {
        return Inertia::render("checkout/page");
    }
}
