<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        if (! auth()->attempt($credentials)) return response()->json(['message' => 'Invalid credentials'], 401);
        return response()->json([
                'message' => 'Login successful',
            ])->withCookie( cookie()->forever('token', auth('sanctum')->user()->id) );
        ;
    }
    public function logout()
    {
        try {
            auth('sanctum')->user()->currentAccessToken()->delete();
            return response()->json(['message' => 'logged out successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    public function me()
    {
        return response()->json(auth('sanctum')->user());
    }
}
