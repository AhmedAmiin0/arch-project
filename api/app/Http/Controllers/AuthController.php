<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        if (!auth()->attempt($credentials)) return response()->json(['error' => 'Unauthorized'], 401);

        return $this->responseToken(auth()->user());
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

    protected function responseToken($user)
    {
        return response()->json([
            'user' => $user,
            'token' => $user->createToken('MyApp')->plainTextToken,
        ], 200);
    }
    public function me()
    {
        return response()->json(auth()->user());
    }
}
