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
        $aboutPage = AboutPage::find(1);
        if($aboutPage != null) {
            $aboutPage->load('media');
        }
        return new AboutPageResource($aboutPage);


        // $aboutPage->first_section_image = [
        //     'src' => $aboutPage->getFirstMediaUrl('first_section_image') ?? '',
        //     'alt' => $aboutPage->getFirstMedia('first_section_image')->name ?? '',
        //     'id' => $aboutPage->getFirstMedia('first_section_image')->id ?? null
        // ] ?? null;
        // $aboutPage->video_background = [
        //     'src' => $aboutPage->getFirstMediaUrl('video_background') ?? '',
        //     'alt' => $aboutPage->getFirstMedia('video_background')->name ?? '',
        //     'id' => $aboutPage->getFirstMedia('video_background')->id ?? null
        // ] ?? null;
        // unset($aboutPage->media);
        // return $aboutPage;
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
        // return $request->all();
        try {
            $aboutPage = AboutPage::first();
            // $request->validate([
            //     'title' => 'required|max:255',
            //     'subtitle' => 'nullable|max:255',
            //     'description' => 'nullable|max:255',
            //     'keywords' => 'nullable|max:255',
            //     'sentence_title' => 'nullable|max:255',
            //     'sentence_subtitle' => 'nullable|max:255',
            //     'sentence_description' => 'nullable|max:255',
            //     'video_url' => 'nullable|max:255',
            //     'first_section_title' => 'nullable|max:255',
            //     'first_section_subtitle' => 'nullable|max:255',
            //     'first_section_description' => 'nullable|max:255',
            //     'first_section_image' => 'nullable|image|max:2048',
            //     'video_background' => 'nullable|image|max:2048',
            // ]);
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
                $aboutPage->addMediaFromRequest('video_background')->toMediaCollection('video_background');
            }
            if ($request->hasFile('first_section_image')) {
                $aboutPage->addMediaFromRequest('first_section_image')->toMediaCollection('first_section_image');
            }
            return response()->json(['message' => 'success'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
