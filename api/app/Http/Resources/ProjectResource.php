<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
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
            'name' => $this->getTranslation('name', app()->getLocale()),
            'slug' => $this->getTranslation('slug', app()->getLocale()),
            'keywords' => $this->keywords,
            'description' => $this->getTranslation('description', app()->getLocale()),
            'project_highlights_section1_title' => $this->getTranslation('project_highlights_section1_title', app()->getLocale()),
            'project_highlights_section1_description' => $this->getTranslation('project_highlights_section1_description', app()->getLocale()),
            'project_highlights_section2_title' => $this->getTranslation('project_highlights_section2_title', app()->getLocale()),
            'project_highlights_section2_description' => $this->getTranslation('project_highlights_section2_description', app()->getLocale()),
            'project_highlights_section3_title' => $this->getTranslation('project_highlights_section3_title', app()->getLocale()),
            'project_highlights_section3_description' => $this->getTranslation('project_highlights_section3_description', app()->getLocale()),
            'project_highlights_section4_title' => $this->getTranslation('project_highlights_section4_title', app()->getLocale()),
            'project_highlights_section4_description' => $this->getTranslation('project_highlights_section4_description', app()->getLocale()),
            'visible' => $this->visible,
            'is_featured' => $this->is_featured,
            'category' =>  new CategoryResource($this->whenLoaded('category')),
            'service' =>  new ServiceResource($this->whenLoaded('service')),
            'created_at' =>  $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' =>  $this->updated_at->format('Y-m-d H:i:s'),
            'project_thumb' => $this->whenLoaded('media', fn () => [
                'src' => $this->getFirstMedia('project_thumb')->getUrl(),
                'alt' => $this->getFirstMedia('project_thumb')->name,
                'id' => $this->getFirstMedia('project_thumb')->id,
            ]),
            'project_images' => $this->whenLoaded('media', fn () => $this->getMedia('project_images')->map(fn ($media)  => [
                    'src' => $media->getUrl(),
                    'alt' => $media->name,
                    'id' => $media->id,
                ]
            )),
        ];
    }
}
