<?php

namespace App\Http\Controllers;

use App\Http\Resources\ServiceResource;
use App\Http\Traits\AttachImagesTrait;
use App\Models\Service;
use Illuminate\Http\Request;


class ServiceController extends Controller
{
    use AttachImagesTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $limit = $request->limit ?? 10;
        $service = Service::search($request->q)->paginate($limit);
        $service->load('media');
        return ServiceResource::collection($service);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreServiceRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->all();
        try {
            $request->validate([
                'description_ar' => 'required|max:255',
                'description_en' => 'required|max:255',
                'title_ar' => 'required|max:255',
                'title_en' => 'required|max:255',
                'subtitle_ar' => 'required|max:255',
                'subtitle_en' => 'required|max:255',
                'excerpt_ar' => 'nullable|max:255',
                'excerpt_en' => 'nullable|max:255',
                'service_thumb' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
                'service_images' => 'nullable|array|max:5',
                'service_images.*' => 'image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            ]);
            $service = Service::create([
                'description' => [
                    'en' => $request->description_en ?? '',
                    'ar' => $request->description_ar ?? '',
                ],
                'subtitle' => [
                    'en' => $request->subtitle_en ?? '',
                    'ar' => $request->subtitle_ar ?? '',
                ],
                'title' => [
                    'en' => $request->title_en ?? '',
                    'ar' => $request->title_ar ?? '',
                ],
                'excerpt' => [
                    'en' => $request->excerpt_en ?? '',
                    'ar' => $request->excerpt_ar ?? '',
                ],
                'slug' => [
                    'en' => \Str::slug($request->title_en ?? ''),
                    'ar' => \Str::slug($request->title_ar  ?? ''),
                ],
                'visible' => $request->visible ?? 'HIDDEN',
                'is_featured' => $request->is_featured ?? 'NOT_FEATURED',
            ]
        );
            $service->addMedia($request->file('service_thumb'))->toMediaCollection('service_thumb');
            if ($request->hasFile('service_images')) {
                $service
                    ->addMultipleMediaFromRequest(['service_images'])
                    ->each(fn($item) => $item->toMediaCollection('service_images'));
            }
            return response()->json(['message' => 'success','service_id'=>$service->id], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Service $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        $service->load('media');
        return response()->json(new ServiceResource($service));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateServiceRequest $request
     * @param \App\Models\Service $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {
        // return $request->all();
        try {
            $request->validate([
                'description' => 'required|max:255',
                'title' => 'required|max:255',
                'subtitle' => 'required|max:255',
                'excerpt' => 'nullable|max:255',
                'service_thumb' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            ]);
            $service->update([
                'description'=>$request->description,
                'title'=>$request->title,
                'subtitle'=>$request->subtitle,
                'excerpt'=>$request->excerpt,
                'slug'=>\Str::slug($request->title ?? ''),
                'visible' => $request->visible ?? 'HIDDEN',
                'is_featured' => $request->is_featured ?? 'NOT_FEATURED',
            ]);
            if ($request->hasFile('service_thumb')) {
                $service->addMedia($request->file('service_thumb'))->toMediaCollection('service_thumb');
            }
            return response()->json(['message' => 'success'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }


    public function attachImage(Service $service)
    {
        //   return response()->json(['message' => 'success'], 200);
        try {
            $this->attachImages($service, 'service_images');
            $service->service_images = $service->getMedia('service_images')->map(fn($media) => [
                'src' => $media->getUrl(),
                'alt' => $media->name,
                'id' => $media->id,
            ]);
            return response()->json(
                [
                    'message' => 'success',
                    'images' => $service->service_images
                ], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Service $service
     * @return \Illuminate\Http\Response
     */
    // public function archived()
    // {
    //     $limit = request()->get('limit', 10);
    //     $service = Service::onlyTrashed()
    //         ->paginate($limit);
    //     $service->map(function ($service) {
    //         $service['service_thumb'] = [
    //             'src' => $service->getFirstMedia('service_thumb')->getUrl(),
    //             'alt' => $service->getFirstMedia('service_thumb')->name,
    //         ];
    //         unset($service['media']);
    //         return $service;
    //     });
    //     return $service;
    // }

    // public function showArchived($id)
    // {
    //     $service = Service::onlyTrashed()->find($id)->load(['media']);
    //     $service['service_thumb'] = [
    //         'src' => $service->getFirstMedia('service_thumb')->getUrl(),
    //         'alt' => $service->getFirstMedia('service_thumb')->name
    //     ];
    //     $service['service_images'] = $service->getMedia('service_images')->map(fn($media) => [
    //         'src' => $media->getUrl(),
    //         'alt' => $media->name,
    //     ]);
    //     unset($service['media']);
    //     return $service;
    // }

    // public function restoreFromArchive(Request $request)
    // {
    //     try {
    //         $service = Service::onlyTrashed()->find($request->get('id'));
    //         $service->restore();
    //         return response()->json(['message' => 'success'], 200);
    //     } catch (\Exception $e) {
    //         return response()->json(['message' => $e->getMessage()], 400);
    //     }
    // }

    // public function removePermanently($id)
    // {
    //     $service = Service::onlyTrashed()->find($id);
    //     try {
    //         $service->forceDelete();
    //         return response()->json(['message' => 'success'], 200);
    //     } catch (\Exception $e) {
    //         return response()->json(['message' => $e->getMessage()], 400);
    //     }
    // }

    public function destroy(Service $service)
    {
        try {
            $service->delete();
//            return $service;
            return response()->json(['message' => 'success'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

}
