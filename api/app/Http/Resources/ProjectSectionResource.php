<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectSectionResource extends JsonResource
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
            'description' => $this->getTranslation('description', app()->getLocale()),
            'section_photo' => $this->whenLoaded('media', fn()=>[
                'src' => $this->getFirstMedia('section_photo')->getUrl(),
                'alt' => $this->getFirstMedia('section_photo')->name,
                'id' => $this->getFirstMedia('section_photo')->id,
            ]),
        ];;
    }
}
