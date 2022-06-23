<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        if (! auth()->attempt($credentials)) return response()->json(['message' => 'Invalid credentials'], 401);
        $token = auth()->user()->createToken('authToken')->plainTextToken;
        return response()->json([
                'message' => 'Login successful',
            ])->withCookie(cookie('token', $token , 60 * 24 * 30));
    }
    public function logout(Request $request)
    {
        try {
            $cookie = Cookie::forget('token');
            auth()->user()->currentAccessToken()->delete();
            return response()->json(['message' => 'Logout successful'])->withCookie($cookie);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    public function me()
    {
        $user = auth()->user() ;
        $user->avatar = [
            'src' => $user->getFirstMedia('avatar')->url ?? asset('download.png'),
            'id' => $user->getFirstMedia('avatar')->id ?? '',
            'alt' => $user->getFirstMedia('avatar')->name ?? 'avatar',
        ] ?? null;
        return response()->json(UserResource::make($user));
        // return response()->json(auth('sanctum')->user());
    }
}
