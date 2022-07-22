<?php

namespace App\Http\Controllers;

use App\Http\Resources\MessageResource;
use App\Models\Corporate;
use App\Models\Feedback;
use App\Models\Message;
use App\Models\Project;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        $users = User::count();
        $projects = Project::count();
        $feedbacks = Feedback::count();
        $corporates = Corporate::count();
        $latestFeedbacks = Message::latest()->take(5)->get();
        return response()->json([
            'users' => $users ?? 0,
            'projects' => $projects ?? 0,
            'feedbacks' => $feedbacks ?? 0,
            'corporates' => $corporates ?? 0,
            'latestContacts' => MessageResource::collection($latestFeedbacks),
        ]);

    }
}
