<?php

namespace App\Http\Controllers;

use App\Http\Resources\AboutPageResource;
use App\Http\Services\CollectionService;
use App\Models\AboutPage;
use App\Models\AboutPageSection;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AboutPageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $about = AboutPage::find(1);
        if ($about != null) {
            $about->first_section_image = [
                'src' => $about->getFirstMediaUrl('first_section_image'),
                'alt' => $about->getFirstMedia('first_section_image')->name,
                'id' => $about->getFirstMedia('first_section_image')->id,
            ];
            $about->video_background = [
                'src' => $about->getFirstMediaUrl('video_background'),
                'alt' => $about->getFirstMedia('video_background')->name ?? '',
                'id' => $about->getFirstMedia('video_background')->id,
            ];
        }
        return new AboutPageResource($about);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public
    function store(Request $request)
    {
        try {
            $aboutPage = AboutPage::first();
            $data = [
                'title' => $request->title ?? '',
                'subtitle' => $request->subtitle ?? '',
                'description' => $request->description ?? '',
                'keywords' => $request->keywords ?? '',
                'slug' => Str::slug($request->title ?? ''),
                'sentence_title' => $request->sentence_title ?? '',
                'sentence_subtitle' => $request->sentence_subtitle ?? '',
                'sentence_description' => $request->sentence_description ?? '',
                'first_section_title' => $request->first_section_title ?? '',
                'first_section_subtitle' => $request->first_section_subtitle ?? '',
                'first_section_description' => $request->first_section_description ?? '',
                'video_url' => $request->video_url ?? '',
            ];
            if ($aboutPage == null) {
                $aboutPage = AboutPage::create($data);
            } else {
                $aboutPage->update($data);
            }
            if ($request->hasFile('video_background')) {
                $aboutPage->addMedia($request->file('video_background'))->toMediaCollection('video_background');
            }
            if ($request->hasFile('first_section_image')) {
                $aboutPage->addMedia($request->file('first_section_image'))->toMediaCollection('first_section_image');
            }
            return response()->json(['message' => 'success'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
