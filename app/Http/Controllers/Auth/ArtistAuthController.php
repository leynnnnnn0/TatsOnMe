<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Artist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class ArtistAuthController extends Controller
{
    /**
     * Show registration form
     */
    public function showRegistrationForm()
    {
        return Inertia::render('Artist/Auth/Register');
    }

    /**
     * Handle registration
     */
    public function register(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string|max:255|unique:artists,username',
            'email' => 'required|email|unique:artists,email',
            'password' => 'required|min:8|confirmed',
        ]);

        $artist = Artist::create([
            'username' => $validated['username'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        Auth::guard('artist')->login($artist);

        return redirect()->route('home');
    }
}
