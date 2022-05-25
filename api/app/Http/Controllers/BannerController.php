<?php

namespace App\Http\Controllers;

use App\Http\Resources\BannerResource;
use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BannerController extends Controller
{

    public function index(Request $request)
    {
        $limit = $request->limit ?? 10;
        $banner = Banner::search($request->q)
            ->paginate($limit);
        return BannerResource::collection($banner);
    }

    public function store(Request $request)
    {
        // return $request->all();
        try {

            $request->validate([
                'title_ar' => 'nullable',
                'title_en' => 'nullable',
                'subtitle_ar' => 'nullable',
                'subtitle_en' => 'nullable',
                'url' => 'required',
                'banner' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
            $banner = Banner::create([
                'title' => [
                    'en' => $request->title_en ?? '',
                    'ar' =>  $request->title_ar ?? '',
                ],
                'subtitle' => [
                    'en' => $request->subtitle_en ?? '',
                    'ar' => $request->subtitle_ar  ?? '',
                ],
                'url' => $request->url,
            ]);
            $banner->addMediaFromRequest('banner')->toMediaCollection('banner');
            return response()->json(['message' => 'Banner created successfully.', 'banner_id' => $banner->id], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    public function show(Banner $banner)
    {
        return  BannerResource::make($banner);
    }

    public function update(Request $request, Banner $banner)
    {
        $request->validate([
            'title' => 'nullable',
            'subtitle' => 'nullable',
            'url' => 'required',
            'banner' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $banner->update([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'url' => $request->url,
        ]);
        if ($request->hasFile('banner')) $banner->addMediaFromRequest('banner')->toMediaCollection('banner');
        return response()->json(['message' => 'Banner updated successfully.'], 200);
    }

    public function destroy(Banner $banner)
    {
        $banner->delete();
        return response()->noContent();
    }
}
