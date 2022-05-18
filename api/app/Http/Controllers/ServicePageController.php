<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\ServicePage;
use Illuminate\Http\Request;

class ServicePageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ServicePage::first();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $servicePage = ServicePage::first();
            $servicePage == null ? ServicePage::create($request->all()) : $servicePage->update($request->all());
            return response()->json(['message' => 'Service Page Created Successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\ServicePage $servicePage
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $servicePage = ServicePage::first();
        $servicePage->services = Service::with('media')->get()->each(function ($item) {
            $media = $item->getFirstMedia('service_thumb');
            $item->src = $media->getUrl();
            $item->alt = $media->name;
            unset($item->media);
            return $item;
        });
        return $servicePage;
    }
}
