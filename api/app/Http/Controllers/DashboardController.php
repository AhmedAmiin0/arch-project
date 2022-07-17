<?php

namespace App\Http\Controllers;

use App\Models\Corporate;
use App\Models\Feedback;
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
        $latestFeedbacks = Feedback::latest()->take(5)->get();
        return response()->json([
            'users' => $users,
            'projects' => $projects,
            'feedbacks' => $feedbacks,
            'corporates' => $corporates,
            'latestContacts' => $latestFeedbacks,
        ]);

    }
}
