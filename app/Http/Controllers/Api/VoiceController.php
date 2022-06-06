<?php

namespace App\Http\Controllers\Api;

use App\Models\Voice;

class VoiceController
{
    public function index()
    {
        return [
            'items' => Voice::all()
        ];
    }


}
