<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('/signup', [\App\Http\Controllers\Auth\AuthController::class, 'signup'])
        ->name('auth.signup');
    Route::post('/login', [\App\Http\Controllers\Auth\AuthController::class, 'login'])
        ->name('auth.login');

    Route::get('/me', [\App\Http\Controllers\Auth\AuthController::class, 'me'])
        ->name('auth.hello')
        ->middleware('auth:sanctum');
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
