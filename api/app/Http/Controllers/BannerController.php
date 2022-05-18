<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index()
    {
        return Banner::with('media')->get()->map(function ($banner) {
            $banner->src = $banner->getFirstMediaUrl('banner');
            $banner->alt = $banner->getFirstMedia('banner')->name;
            unset($banner->media);
            return $banner;
        });
    }

    public function store(Request $request)
    {
        $banner = Banner::create([
            'model_type' => $request->model_type ?? 'App\Models\Home',
            'model_id' => $request->model_id ?? 1,
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'slug' => $request->slug,
        ]);
        $banner->addMediaFromRequest('banner')->toMediaCollection('banner');
        return response()->json(['message' => 'Banner created successfully.'], 201);
    }


    public function show(Banner $banner)
    {
        $banner->src = $banner->getFirstMediaUrl('banner');
        $banner->alt = $banner->getFirstMedia('banner')->name;
        return $banner;

    }

    public function update(Request $request, Banner $banner)
    {
        $banner->update([
            'model_type' => $request->model_type ?? 'App\Models\Home',
            'model_id' => $request->model_id ?? 1,
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'slug' => $request->slug,
        ]);
        $banner->addMediaFromRequest('banner')->toMediaCollection('banner');
        return response()->json(['message' => 'Banner updated successfully.'], 200);
    }

    public function destroy(Banner $banner)
    {
        $banner->delete();
        return response()->noContent();
    }
}
