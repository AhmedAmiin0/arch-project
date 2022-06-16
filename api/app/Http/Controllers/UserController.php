<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request){
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
        return response()->json($user);
    }
    public function update(Request $request, User $user)
    {
        $user->update($request->all());
        if ($request->hasFile('avatar')) $user->addMediaFromRequest('avatar')->toMediaCollection('avatar');
        return response()->json($user);
    }
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['message' => 'deleted successfully']);
    }

}
