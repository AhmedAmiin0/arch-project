<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\ServiceResource;
// use App\Http\Services\SectionService;
use App\Http\Traits\AttachImagesTrait;
use App\Models\Category;
use App\Models\Project;
use App\Models\Service;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    use AttachImagesTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $limit = $request->get('limit', 10);
        $project = Project::search($request->q)->paginate($limit);
        $project->load('media');
        return ProjectResource::collection($project);
    }
    public function create()
    {
        $categories = CategoryResource::collection(Category::get());
        $service = ServiceResource::collection(Service::get());
        return [
            'categories' => $categories,
            'services' => $service,
        ];
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreProductRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->all();
        $request->validate([
            'name_ar' => 'nullable|max:255',
            'name_en' => 'nullable|max:255',
            'description_ar' => 'nullable',
            'description_en' => 'nullable',
            'keywords' => 'nullable|max:255',
            'project_thumb' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:4096',
            'project_highlights_section1_title_ar' => 'nullable|max:30',
            'project_highlights_section1_title_en' => 'nullable|max:30',
            'project_highlights_section1_description_ar' => 'nullable|max:255',
            'project_highlights_section1_description_en' => 'nullable|max:255',
            'project_highlights_section2_title_ar' => 'nullable|max:30',
            'project_highlights_section2_title_en' => 'nullable|max:30',
            'project_highlights_section2_description_ar' => 'nullable|max:255',
            'project_highlights_section2_description_en' => 'nullable|max:255',
            'project_highlights_section3_title_ar' => 'nullable|max:30',
            'project_highlights_section3_title_en' => 'nullable|max:30',
            'project_highlights_section3_description_ar' => 'nullable|max:255',
            'project_highlights_section3_description_en' => 'nullable|max:255',
            'project_highlights_section4_title_ar' => 'nullable|max:30',
            'project_highlights_section4_title_en' => 'nullable|max:30',
            'project_highlights_section4_description_ar' => 'nullable|max:255',
            'project_highlights_section4_description_en' => 'nullable|max:255',
            'category_id' => 'nullable|exists:categories,id',
            'service_id' => 'nullable|exists:services,id',
            'project_images' => 'nullable|array|max:5',
            'project_images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:4096',
        ]);
        $project = Project::create([
            'name' => [
                'en' => $request->name_en,
                'ar' => $request->name_ar,
            ],
            'description' => [
                'en' => $request->description_en,
                'ar' => $request->description_ar,
            ],
            'keywords' => $request->keywords,
            'category_id' => $request->category,
            'service_id' => $request->service,
            'slug' => [
                'en' => Str::slug($request->name_en ?? ''),
                'ar' => Str::slug($request->name_ar ?? ''),
            ],
            'project_highlights_section1_title' => [
                'en' => $request->project_highlights_section1_title_en,
                'ar' => $request->project_highlights_section1_title_ar,
            ],
            'project_highlights_section1_description' => [
                'en' => $request->project_highlights_section1_description_en,
                'ar' => $request->project_highlights_section1_description_ar,
            ],
            'project_highlights_section2_title' => [
                'en' => $request->project_highlights_section2_title_en,
                'ar' => $request->project_highlights_section2_title_ar,
            ],
            'project_highlights_section2_description' => [
                'en' => $request->project_highlights_section2_description_en,
                'ar' => $request->project_highlights_section2_description_ar,
            ],
            'project_highlights_section3_title' => [
                'en' => $request->project_highlights_section3_title_en,
                'ar' => $request->project_highlights_section3_title_ar,
            ],
            'project_highlights_section3_description' => [
                'en' => $request->project_highlights_section3_description_en,
                'ar' => $request->project_highlights_section3_description_ar,
            ],
            'project_highlights_section4_title' => [
                'en' => $request->project_highlights_section4_title_en,
                'ar' => $request->project_highlights_section4_title_ar,
            ],
            'project_highlights_section4_description' => [
                'en' => $request->project_highlights_section4_description_en,
                'ar' => $request->project_highlights_section4_description_ar,
            ],
            'visible' => $request->visible ?? "HIDDEN",
            'is_featured' => $request->is_featured ?? "NOT_FEATURED",

        ]);
        $project->addMedia($request->file('project_thumb'))->toMediaCollection('project_thumb');
        if ($request->hasFile('project_images')) {
            $project
                ->addMultipleMediaFromRequest(['project_images'])
                ->each(fn ($fileAdder) => $fileAdder->toMediaCollection('project_images'));
        }
        return response()->json(
            [
                'message' => 'project created',
                'project_id' => $project->id
            ],
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\Response
     */
    public
    function show(Project $project)
    {
        $project->load(['category', 'service', 'media']);
        return new ProjectResource($project);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateProductRequest $request
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\Response
     */
    public
    function update(Request $request, Project $project)
    {
        // return $request->all();
        $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'keywords' => 'nullable|max:255',
            'category' => 'nullable|exists:categories,id',
            'service' => 'nullable|exists:services,id',
            'project_thumb' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $project->update([
            'name' => $request->name,
            'description' => $request->description,
            'keywords' => $request->keywords,
            'category_id' => intval($request->category),
            'service_id' => intval($request->service),
            'slug' => Str::slug($request->name),
            'visible' => $request->visible ?? "HIDDEN",
            'is_featured' => $request->is_featured ?? "NOT_FEATURED",
            'project_highlights_section1_title' => $request->project_highlights_section1_title,
            'project_highlights_section1_description' => $request->project_highlights_section1_description,
            'project_highlights_section2_title' => $request->project_highlights_section2_title,
            'project_highlights_section2_description' => $request->project_highlights_section2_description,
            'project_highlights_section3_title' => $request->project_highlights_section3_title,
            'project_highlights_section3_description' => $request->project_highlights_section3_description,
            'project_highlights_section4_title' => $request->project_highlights_section4_title,
            'project_highlights_section4_description' => $request->project_highlights_section4_description,
        ]);
        if ($request->hasFile('project_thumb')) {
            $project->addMedia($request->file('project_thumb'))->toMediaCollection('project_thumb');
        }
        return response()->json(
            [
                'message' => 'project updated',
                'project_id' => $project->id
            ],
            201
        );
    }


    public function attachImage(Project $project)
    {
        //   return response()->json(['message' => 'success'], 200);
        try {
            $this->attachImages($project, 'project_images');
            $project->project_images = $project->getMedia('project_images')->map(fn ($media) => [
                'src' => $media->getUrl(),
                'alt' => $media->name,
                'id' => $media->id,
            ]);
            return response()->json(
                [
                    'message' => 'success',
                    'images' => $project->project_images
                ],
                200
            );
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }
    // public function archived()
    // {
    //     $limit = request()->get('limit', 10);
    //     $project = Project::onlyTrashed()
    //         ->paginate($limit);
    //     $project->map(function ($project) {
    //         $project->project_thumb = [
    //                 'src' => $project->getFirstMedia('project_thumb')->getFullUrl(),
    //                 'alt' => $project->getFirstMedia('project_thumb')->name,
    //             ] ?? null;
    //         unset($project['media']);
    //         return $project;
    //     });
    //     return $project;
    // }

    // public function showArchived($id)
    // {
    //     $project = Project::onlyTrashed()->find($id)->load(['sections', 'project_creation_highlights', 'category', 'service']);
    //     $project['project_thumb'] = [
    //             'src' => $project->getFirstMedia('project_thumb')->getFullUrl(),
    //             'alt' => $project->getFirstMedia('project_thumb')->name,
    //         ] ?? null;
    //     $project['project_images'] = $project->getMedia('project_images')->map(fn($media) => [
    //             'src' => $media->getFullUrl(),
    //             'alt' => $media->name,
    //         ] ?? null);
    //     unset($project['media']);
    //     return $project;
    // }

    // public function restoreFromArchive(Request $request)
    // {
    //     try {
    //         $project = Project::onlyTrashed()->find($request->get('id'));
    //         $project->restore();
    //         return response()->json(['message' => 'success'], 200);
    //     } catch (\Exception $e) {
    //         return response()->json(['message' => $e->getMessage()], 400);
    //     }
    // }

    // public function removePermanently($id)
    // {
    //     $project = Project::onlyTrashed()->find($id);
    //     try {
    //         $project->forceDelete();
    //         return response()->json(['message' => 'success'], 200);
    //     } catch (\Exception $e) {
    //         return response()->json(['message' => $e->getMessage()], 400);
    //     }
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\Response
     */
    public
    function destroy(Project $project)
    {
        try {
            $project->sections()->delete();

            $project->delete();
            return response()->noContent();
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }
}
