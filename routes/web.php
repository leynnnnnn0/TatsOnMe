<?php

use App\Http\Controllers\Auth\ArtistAuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware('guest:artist')->prefix('artist')->group(function () {
    Route::controller(ArtistAuthController::class)->group(function () {
        Route::get('register', 'showRegistrationForm');
        Route::post('register', 'register');
        Route::get('login', 'showLoginForm');
        Route::post('login', 'login');
    });
});

Route::post('artist/logout', [ArtistAuthController::class, 'logout'])
    ->middleware('auth:artist')
    ->name('artist.logout');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
