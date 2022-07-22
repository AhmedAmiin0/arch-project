<?php

namespace App\Http\Controllers;

use App\Http\Resources\HomeResource;
use App\Http\Services\CollectionService;
use App\Http\Traits\AttachImagesTrait;
use App\Models\Home;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class HomePageController extends Controller
{
    use AttachImagesTrait;

    public function index()
    {
        $home =  Home::find(1);
        if ($home != null) {
            $home->home_images = $home->getMedia('home_images')->map(function ($item) {
                return [
                    'src' => $item->getFullUrl(),
                    'alt' => $item->name,
                    'id' => $item->id,
                ];
            });
            unset($home->media);
        }
        return HomeResource::make($home);
    }

    public function show()
    {
        $collectionService = new CollectionService();
        $home = Home::first();
        $home->home_gallery = $home?->getMedia('home_images')->map(function ($item) {
            $item->src = $item->getFullUrl();
            $item->alt = $item->name;
            unset($item['media']);
            return $item;
        }) ?? [];
        $home->projects = $collectionService->projectsCollection();
        $home->services = $collectionService->serviceCollection();
        $home->feedbacks = $collectionService->feedbackCollection();
        $home->corporates = $collectionService->corporateCollection();
        $home->banners = $collectionService->bannerCollection();
        unset($home['media']);
        return HomeResource::make($home);
    }

    public function store(Request $request)
    {
        try {
            $data = [
                'title' =>$request->title,
                'subtitle' => $request->subtitle,
                'description' =>$request->description,
                'keywords' => $request->keywords,
                'slug' =>  Str::slug($request->title  ?? ''),
                'sentence_title' =>  $request->sentence_title ?? '',
                'sentence_subtitle' => $request->sentence_subtitle ?? '' ,
                'sentence_description' => $request->sentence_description ?? '',
            ];
            $homePage = Home::first();
            $homePage == null ? $homePage = Home::create($data) : $homePage->update($data);
            if ($request->hasFile('home_images')) {
                $homePage->addMultipleMediaFromRequest(['home_images'])->each(fn ($item) => $item->toMediaCollection('home_images'));
            }
            return response()->json(['success' => true], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    public function attachImage()
    {
        $home = Home::find(1);
        try {
            $this->attachImages($home, 'home_images');
            $home->home_images = $home->getMedia('home_images')->map(fn ($media) => [
                'src' => $media->getUrl() ?? '',
                'alt' => $media->name ?? '',
                'id' => $media->id ?? '',
            ]);
            return response()->json(
                [
                    'message' => 'success',
                    'images' => $home->home_images
                ],
                200
            );
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }
}
