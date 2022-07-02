<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        if (! auth()->attempt($credentials)) return response()->json(['message' => 'Invalid credentials'], 401);
        $token = auth()->user()->createToken('authToken')->plainTextToken;
        return response()->json([
                'message' => 'Login successful',
            ])->withCookie( cookie()->forever('token', $token) );
        ;
    }
    public function logout()
    {
        try {
            auth()->user()->currentAccessToken()->delete();
            return response()->json(['message' => 'logged out successfully'], 200)->
            withCookie( cookie()->forget('token') );
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    public function me()
    {
        return response()->json(auth()->user());
    }
}
