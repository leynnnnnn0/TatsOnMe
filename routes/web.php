<?php

use App\Http\Controllers\Auth\ArtistAuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware('guest:artist')->prefix('artist')->group(function () {
    Route::controller(ArtistAuthController::class)->group(function () {
        Route::get('register', 'showRegistrationForm');
        Route::post('register', 'register');
    });
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
