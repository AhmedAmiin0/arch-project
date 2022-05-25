<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BannerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id ?? null,
            'title' => $this->title ?? '',
            'subtitle' => $this->subtitle ?? '',
            'url' => $this->url ?? '',
            'banner' => [
                'src' => $this->getFirstMediaUrl('banner'),
                'alt' => $this->getFirstMedia('banner')->name ?? '',
                'id' => $this->getFirstMedia('banner')->id ?? '',
            ],
        ];
    }
}
