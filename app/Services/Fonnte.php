<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class Fonnte
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public static function sendWa($noWa, $message)
    {
        Http::withHeader("Authorization", env('TOKEN_WA'))->post("https://api.fonnte.com/send", [
            'target' => $noWa,
            'message' => $message,
            'countryCode' => '62', //optional
        ]);
    }
}
