<?php

namespace App\Http\Services;


class SentenceService
{
    public function retrive($model)
    {

        $sentence = $model::find(1);
        return $sentence ?? (object)[
            'title' => [
                'en' => '',
                'ar' => ''
            ],
            'subtitle' => [
                'en' => '',
                'ar' => ''
            ],
            'description' => [
                'en' => '',
                'ar' => ''
            ]
        ];
    }
    public function storeOrUpdate($request,$model)
    {
        $sentence = $model::find(1);
        $request->validate([
            'title.ar' => 'required',
            'title.en' => 'required',
            'subtitle.ar' => 'required',
            'subtitle.en' => 'required',
            'description.ar' => 'required',
            'description.en' => 'required',
        ]);
        $data = [
            'title' => [
                'en' => $request->title['en'] ?? '',
                'ar' => $request->title['ar'] ?? '',
            ],
            'subtitle' => [
                'en' => $request->subtitle['en'] ?? '',
                'ar' => $request->subtitle['ar'] ?? '',
            ],
            'description' => [
                'en' => $request->description['en'] ?? '',
                'ar' => $request->description['ar'] ?? '',
            ]
        ];
        $sentence != null ? $sentence->update($data) : $model::create($data);
    }
}
