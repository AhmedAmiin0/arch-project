<?php

namespace App\Http\Controllers;

use App\Http\Resources\GlobalDataResource;
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
        $globalData = $this->getGlobalData();
        if (auth()->check()) {
            $avatar = auth()->user()->getFirstMedia('avatar');
            $globalData['user'] = [
                'id' => auth()->user()->id,
                'name' => auth()->user()->name,
                'email' => auth()->user()->email,
                'avatar' => [
                    'src' => !empty($avatar) ? $avatar->getUrl() :  asset('download.png'),
                    'alt' => $avatar->name ?? 'avatar',
                ],
            ];
        }
        // return $globalData;
        return GlobalDataResource::make($globalData);
    }

    private function getGlobalData()
    {
        $globalData = GlobalData::first();
        $globalData['logo'] = [
            'src' => $globalData?->getFirstMedia('logo')?->getUrl() ?? asset('logo.png'),
            'alt' => $globalData?->getFirstMedia('logo')?->name ?? 'logo',
        ];
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
        // return $request->all();
        try {
            $data = [
                'facebook_link' => $request->facebook_link,
                'twitter_link' => $request->twitter_link,
                'instagram_link' => $request->instagram_link,
                'youtube_link' => $request->youtube_link,
                'address' => $request->address,
                'phone' => $request->phone,
                'email' => $request->email,
                'email_app_secret' => $request->email_app_secret,
                'message' => $request->message,
                'name' => $request->name,
            ];
            $globalData = GlobalData::first();
            $globalData == null ? GlobalData::create($data) : $globalData->update($data);
            if ($request->hasFile('logo')) {
                $globalData->addMediaFromRequest('logo')->toMediaCollection('logo');
            }
            return response()->json(['success' => true, 'data' => GlobalDataResource::make($this->getGlobalData())], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
