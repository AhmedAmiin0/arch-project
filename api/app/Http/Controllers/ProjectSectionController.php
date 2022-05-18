<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectSectionResource;
use App\Models\Project;
use App\Models\ProjectSection;
use Illuminate\Http\Request;

class ProjectSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Project $project, Request $request)
    {
        $section =  ProjectSection::search($request->q)
            ->query(fn ($query) => $query->where('project_id', $project->id))
            ->paginate(20);
        $section->load('media');
        return ProjectSectionResource::collection($section);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Project $project, Request $request)
    {
        // return $request->all();
        try {
            $request->validate([
                'title_ar' => 'required|max:255',
                'title_en' => 'required|max:255',
                'subtitle_ar' => 'required|max:255',
                'subtitle_en' => 'required|max:255',
                'description_ar' => 'required|max:255',
                'description_en' => 'required|max:255',
                'section_photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            ]);
            $section = $project->sections()->create(
                [
                    'title' => [
                        'ar' => $request->title_ar,
                        'en' => $request->title_en,
                    ],
                    'subtitle' => [
                        'ar' =>  $request->subtitle_ar,
                        'en' => $request->subtitle_en,
                    ],
                    'description' => [
                        'ar' => $request->description_ar,
                        'en' => $request->description_en
                    ]
                ]
            );
            $section->addMediaFromRequest('section_photo')->toMediaCollection('section_photo');
            return response()->json(['message' => 'Section created successfully', 'section_id' => $section->id], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    public function show(Project $project, ProjectSection $section)
    {
        $section->load('media');
        return new ProjectSectionResource($section);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProjectSection  $projectSection
     * @return \Illuminate\Http\Response
     */
    public function update(Project $project,  $section_id, Request $request)
    {
        // return $projectSection;
        try {
            $request->validate([
                'title' => 'required|max:255',
                'subtitle' => 'required|max:255',
                'description' => 'required|max:255',
                'section_photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            ]);
            $projectSection = ProjectSection::find($section_id);
            $projectSection->update(
                [
                    'title' => $request->title,
                    'subtitle' => $request->subtitle,
                    'description' => $request->description,
                ]
            );
            if ($request->hasFile('section_photo')) {
                $projectSection->addMediaFromRequest('section_photo')->toMediaCollection('section_photo');
            }
            return response()->json(['message' => 'Section updated successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProjectSection  $projectSection
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project, $id)
    {
        try {
            $projectSection = ProjectSection::find($id)->delete();

            return response()->json(['message' => 'Section deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }
}
