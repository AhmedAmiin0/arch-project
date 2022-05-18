<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
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
            'id' => $this->id,
            'title' => $this->getTranslation('title', app()->getLocale()),
            'subtitle' => $this->getTranslation('subtitle', app()->getLocale()),
            'excerpt' => $this->getTranslation('excerpt', app()->getLocale()),
            'description' => $this->getTranslation('description', app()->getLocale()),
            'visible' => $this->visible,
            'is_featured' => $this->is_featured,
            'service_thumb' => $this->whenLoaded('media', fn () => [
                'src' => $this->getFirstMedia('service_thumb')->getUrl(),
                'alt' => $this->getFirstMedia('service_thumb')->name,
                'id' => $this->getFirstMedia('service_thumb')->id,
            ]),
            'service_images' => $this->whenLoaded('media', fn () => $this->getMedia('service_images')->map(fn ($media) => [
                    'src' => $media->getUrl(),
                    'alt' => $media->name,
                    'id' => $media->id,
                ]
            )),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
