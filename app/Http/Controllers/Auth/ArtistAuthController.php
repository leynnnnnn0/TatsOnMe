<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Artist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class ArtistAuthController extends Controller
{
    /**
     * Show login form
     */
    public function showLoginForm()
    {
        return Inertia::render('Artist/Auth/Login');
    }

    /**
     * Handle login with rate limiting
     */
    public function login(Request $request)
    {

        $this->checkTooManyFailedAttempts($request);

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);


        if (Auth::guard('artist')->attempt(
            $credentials,
            $request->boolean('remember')
        )) {
            $request->session()->regenerate();
            RateLimiter::clear($this->throttleKey($request));

            return redirect()->intended(route('home'));
        }

        RateLimiter::hit($this->throttleKey($request));

        throw ValidationException::withMessages([
            'email' => __('auth.failed'),
        ]);
    }

    /**
     * Check if too many failed login attempts
     */
    protected function checkTooManyFailedAttempts(Request $request): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey($request), 5)) {
            return;
        }

        $seconds = RateLimiter::availableIn($this->throttleKey($request));

        throw ValidationException::withMessages([
            'email' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key
     */
    protected function throttleKey(Request $request): string
    {
        return strtolower($request->input('email')) . '|' . $request->ip();
    }


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

    /**
     * Handle logout
     */
    public function logout(Request $request)
    {
        Auth::guard('artist')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();


        return redirect()->route('home');
    }
}
