<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Public API routes
Route::prefix('auth')->group(function () {
    Route::post('/signup', [\App\Http\Controllers\Auth\AuthController::class, 'signup'])
        ->name('auth.signup');
    Route::post('/login', [\App\Http\Controllers\Auth\AuthController::class, 'login'])
        ->name('auth.login');
});

Route::prefix('projects')->group(function () {
    Route::get('/', [\App\Http\Controllers\ProjectController::class, 'index'])
        ->name('projects.index');
    Route::get('/{slug}', [\App\Http\Controllers\ProjectController::class, 'show'])
        ->name('projects.show');

    // Vou colocar a busca aqui
    Route::post('/search', [\App\Http\Controllers\ProjectController::class, 'search'])
        ->name('projects.search');
});

// Authenticated API routes
Route::middleware('auth:sanctum')->group(function () {
    // Auth routes
    Route::prefix('auth')->group(function () {;
        Route::get('/me', [\App\Http\Controllers\Auth\AuthController::class, 'me'])
            ->name('auth.hello');
    });

    Route::prefix("projects", function() {
        Route::post("/", [
            \App\Http\Controllers\ProjectController::class,
            "store",
        ])->name("projects.store");
        Route::put("/{slug}", [
            \App\Http\Controllers\ProjectController::class,
            "update",
        ])->name("projects.update");
        Route::delete("/{slug}", [
            \App\Http\Controllers\ProjectController::class,
            "destroy",
        ])->name("projects.destroy");
    });
});

// Search projets API routes
//Route::prefix('search')->group(function () {
    // Busca literal por projetos
//    Route::post('');
    // Busca por filtro
//});
