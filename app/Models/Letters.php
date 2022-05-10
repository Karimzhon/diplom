<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Letters extends Model
{
    protected $fillable = [
        'id',
        'name',
        'code',
        'music',
    ];

    /**
     * @var array|string[]
     */
    protected array $fileFields = ['id'];

}
