<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::get('letters', [\App\Http\Controllers\Api\LettersController::class, 'index'])->name('api.letter.index');
Route::get('voices', [\App\Http\Controllers\Api\VoiceController::class, 'index'])->name('api.voices.index');

