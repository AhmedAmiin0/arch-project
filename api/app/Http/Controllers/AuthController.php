<?php

namespace App\Http\Controllers;

use App\Http\Resources\GlobalDataResource;
use App\Http\Resources\UserResource;
use App\Models\GlobalData;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;



class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        if (!auth()->attempt($credentials)) return response()->json(['message' => 'Invalid credentials'], 401);
        $token = auth()->user()->createToken('authToken')->plainTextToken;
        return response()->json([
            'message' => 'Login successful',
        ])->withCookie(cookie()->forever('token', $token));
    }
    public function logout()
    {
        try {
            auth()->user()->currentAccessToken()->delete();
            return response()->json(['message' => 'logged out successfully'], 200)->withCookie(cookie()->forget('token'));
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    public function me()
    {
        return response()->json(UserResource::make(auth()->user()));
    }
    public function forget(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'exists:users,email'],
        ]);
        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status != Password::RESET_LINK_SENT) {
            throw ValidationException::withMessages([
                'email' => [__($status)],
            ]);
        }

        return response()->json(['message' => __($status)]);
    }
    public function reset(Request $request)
    {
        $request->validate([
            'token' => ['required'],
            'email' => ['required', 'email', 'exists:users,email'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        if ($status != Password::PASSWORD_RESET) {
            throw ValidationException::withMessages([
                'email' => [__($status)],
            ]);
        }

        return response()->json(['message' => __($status)]);
    }
    public function forgetPage($token)
    {

        $globalData = GlobalData::first();
        $globalData['logo'] = [
            'src' => $globalData?->getFirstMedia('logo')?->getUrl() ?? asset('logo.png'),
            'alt' => $globalData?->getFirstMedia('logo')?->name ?? 'logo',
        ];
        if (empty(request()->email && $token)) {
            abort(401);
        }
        $row =  \DB::table('password_resets')->where('email', request()->email);
        $rowCount = $row->count();
        if ($rowCount == 0 || Hash::check($token, $row->first()->token) == false) {
            abort(401);
        }

        return view('auth.reset_password', [
            'name' => $globalData->name ?? 'hojrat',
            'logo' => $globalData['logo'],
            'token' => $token,
        ]);
    }
}
