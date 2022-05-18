<?php

namespace App\Http\Services;

use App\Http\Resources\CorporateResource;
use App\Models\Banner;
use App\Models\Corporate;
use App\Models\CorporateSection;
use App\Models\Feedback;
use App\Models\Project;
use App\Models\Service;

class CollectionService
{
    public function serviceCollection()
    {
        return Service::where('is_featured', 1)
            ->limit(3)
            ->get()
            ->map(function ($item) {
                $item->src = $item->getFirstMediaUrl('service_thumb');
                $item->alt = $item->getFirstMedia('service_thumb')->name;
                unset($item->media);
                return $item;
            });
    }

    public function corporateCollection()
    {
        $corporateSection = CorporateSection::find(1);
        $corporateSection =  $corporateSection == null  ?
            (object)[
                'title' => '',
                'subtitle' => '',
                'description' => ''
            ] :  [
                'title' => $corporateSection->getTranslation('title', app()->getLocale()) ?? '',
                'subtitle' => $corporateSection->getTranslation('subtitle', app()->getLocale()) ?? '',
                'description' => $corporateSection->getTranslation('description', app()->getLocale()) ?? '',
            ];
        $corporate = Corporate::with('media')->limit(6)->get();
        return response()->json([
            'corporate' => $corporate,
            'corporateSection' => CorporateResource::collection($corporate)
        ]);
    }

    public function feedbackCollection()
    {
        return Feedback::where('is_featured', 1)
            ->limit(6)
            ->get()
            ->map(function ($item) {
                $item->src = $item->getFirstMediaUrl('client_thumb');
                $item->alt = $item->getFirstMedia('client_thumb')->name;
                unset($item->media);

                return $item;
            });
    }

    public function projectsCollection()
    {
        return Project::where('is_featured', 1)
            ->limit(6)
            ->get()
            ->map(function ($item) {
                $item->src = $item->getFirstMediaUrl('project_thumb');
                $item->alt = $item->getFirstMedia('project_thumb')->name;
                unset($item->media);

                return $item;
            });
    }

    public function bannerCollection()
    {
        return Banner::with('media')
            ->limit(6)
            ->get()->map(function ($banner) {
                $banner->src = $banner->getFirstMediaUrl('banner');
                $banner->alt = $banner->getFirstMedia('banner')->name;
                unset($banner->media);
                return $banner;
            });
    }
}
