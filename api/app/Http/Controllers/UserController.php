<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function create(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        if ($request->hasFile('avatar')) $user->addMediaFromRequest('avatar')->toMediaCollection('avatar');
        return response()->json(['message' => 'logged in successfully', 'user' => $user], 200);
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
