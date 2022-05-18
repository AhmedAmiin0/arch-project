<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectPage;
use Illuminate\Http\Request;

class ProjectPageController extends Controller
{
    public function index()
    {
        return ProjectPage::first();
    }

    public function store(Request $request)
    {
        try {
            $projectPage = ProjectPage::first();
            $projectPage == null ? ProjectPage::create($request->all()) : $projectPage->update($request->all());
            return response()->json(['message' => 'Service Page Created Successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }

    public function show()
    {
        $projectPage = ProjectPage::first();
        $projectPage->projects = Project::with('media')->get()->each(function ($item) {
            $media = $item->getFirstMedia('project_thumb');
            $item->src = $media->getUrl();
            $item->alt = $media->name;
            unset($item->media);
            return $item;
        });
        return $projectPage;
    }
}
