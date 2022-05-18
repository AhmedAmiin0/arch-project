<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use function Clue\StreamFilter\fun;

class AboutPageResource extends JsonResource
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
            'keywords' => $this->keywords ?? '',
            'slug' => $this->slug ?? '',
            'title' => $this->title ?? '',
            'subtitle' => $this->subtitle ?? '',
            'description' => $this->description ?? '',
            'sentence_title' => $this->sentence_title ?? '',
            'sentence_subtitle' => $this->sentence_subtitle ?? '',
            'sentence_description' => $this->sentence_description ?? '',
            'first_section_title' => $this->first_section_title ?? '',
            'first_section_subtitle' => $this->first_section_subtitle ?? '',
            'first_section_description' => $this->first_section_description ?? '',
            'video_url' => $this->video_url ?? '',
            'first_section_image' => $this->when($this != null, fn () => [
                'src' => $this->getFirstMediaUrl('first_section_image'),
                'alt' => $this->getFirstMedia('first_section_image')->name ?? '',
                'id' => $this->getFirstMedia('first_section_image')->id ?? null,
            ], []),
            'video_background' => $this->when($this != null, fn () => [
                'src' => $this->getFirstMediaUrl('video_background'),
                'alt' => $this->getFirstMedia('video_background')->name ?? '',
                'id' => $this->getFirstMedia('video_background')->id ?? null,
            ], []),
        ];
    }
}
