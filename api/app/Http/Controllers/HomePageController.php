<?php

namespace App\Http\Controllers;

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
        return $home;
    }

    public function show()
    {
        $collectionService = new CollectionService();
        $home = Home::first();
        $home->home_gallery = $home->getMedia('home_images')->map(function ($item) {
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
        return $home;
    }

    public function store(Request $request)
    {
        try {
            $data = [
                'title' => [
                    'en' => $request->title['en'] ?? '',
                    'ar' => $request->title['ar']  ?? '',
                ],
                'subtitle' => [
                    'en' => $request->subtitle['en'] ?? '',
                    'ar' => $request->subtitle['ar'] ?? '',
                ],
                'description' => [
                    'en' => $request->description['en'] ?? '',
                    'ar' => $request->description['ar']  ?? '',
                ],
                'keywords' => $request->keywords,
                'slug' => ['en' => Str::slug($request->title['en']  ?? ''), 'ar' => Str::slug($request->title['ar'] ?? '')],
                'sentence_title' => [
                    'en' => $request->sentence_title['en'] ?? '',
                    'ar' => $request->sentence_title['ar']  ?? '',
                ],
                'sentence_subtitle' => [
                    'en' => $request->sentence_subtitle['en'] ?? '',
                    'ar' => $request->sentence_subtitle['ar'] ?? '',
                ],
                'sentence_description' => [
                    'en' => $request->sentence_description['en'] ?? '',
                    'ar' => $request->sentence_description['ar'] ?? '',
                ],
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
