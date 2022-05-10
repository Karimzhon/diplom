<?php

namespace App\Http\Controllers\Api;

use App\Models\Letters;

class LettersController
{
    public function index()
    {
        return [
            'items' => Letters::all()->map(fn (Letters $letters) => [
                'id'    => $letters->id,
                'name'  => $letters->name,
                'code'  => $letters->code,
                'music' => $letters->music,
            ])
        ];
    }


}
