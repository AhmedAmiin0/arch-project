<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $limit = $request->limit ?? 10;
        $user = User::search($request->q)
            ->paginate($limit);
        return UserResource::collection($user);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6',
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        if ($request->hasFile('avatar')) $user->addMediaFromRequest('avatar')->toMediaCollection('avatar');
        return response()->json(['message' => 'logged in successfully', 'user' => $user], 201);
    }
    public function show(User $user)
    {
        return response()->json(UserResource::make($user));
    }
    public function update(Request $request)
    {
        $user = User::find(auth()->user()->id);
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $user->id,
            'password' => 'nullable|min:6',
        ]);
        if ($request->hasFile('avatar')) $user->addMediaFromRequest('avatar')->toMediaCollection('avatar');
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();
        return response()->json(['message' => 'updated successfully', 'user' => UserResource::make($user)], 200);
    }
    public function updatePassword(Request $request)
    {
        $request->validate([
            'password' => 'required',
        ]);
        $user = User::find(auth()->user()->id);
        $user->password = bcrypt($request->password);
        $user->save();
        return response()->json(['message' => 'updated successfully'], 200);
    }
    public function destroy(User $user)
    {
        $user->delete();
        if ($user->id == auth()->user()->id) {
            auth()->user()->currentAccessToken()->delete();
            return response()->json(['message' => 'logged out successfully'], 200)->withCookie(cookie()->forget('token'));
        }
        return response()->json(['message' => 'deleted successfully']);
    }
}
