<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HomeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            'title'=>$this->title?? '',
            'subtitle'=>$this->subtitle?? '',
            'description'=>$this->description?? '',
            'keywords'=>$this->keywords?? '',
            'slug'=>$this->slug?? '',
            'sentence_title'=>$this->sentence_title?? '',
            'sentence_description'=>$this->sentence_description?? '',
            'sentence_subtitle'=>$this->sentence_subtitle?? '',
            'home_images'=>$this->home_images ?? [],
        ];
    }
}
