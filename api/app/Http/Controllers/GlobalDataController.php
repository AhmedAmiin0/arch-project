<?php

namespace App\Http\Controllers;

use App\Models\GlobalData;
use Illuminate\Http\Request;

class GlobalDataController extends Controller
{


    /**
     * Display the specified resource.
     *
     * @param \App\Models\GlobalData $globalData
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $globalData = GlobalData::first();
        $logo = $globalData->getFirstMedia('logo');
        $globalData->ico = $logo->getFullUrl('ico');
        $globalData->logo = [
            'src' => $logo->getFullUrl('logo'),
            'alt' => $logo->alt ?? '',
        ];
        unset($globalData['media']);
        return $globalData;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\GlobalData $globalData
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $data = $request->only('facebook_link', 'twitter_link', 'instagram_link', 'youtube_link', 'address', 'phone', 'email', 'map_link', 'agency_message', 'agency_name', 'agency_domain');
            $globalData = GlobalData::first();
            $globalData == null ? GlobalData::create($data) : $globalData->update($data);
            if ($request->hasFile('logo')) {
                $globalData->addMedia($request->file('logo'))->toMediaCollection('logo');
            }
            return response()->json(['success' => true], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

}
