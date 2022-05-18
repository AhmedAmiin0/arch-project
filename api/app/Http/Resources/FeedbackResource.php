<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FeedbackResource extends JsonResource
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
            'position' => $this->getTranslation('position', app()->getLocale()),
            'feedback' => $this->getTranslation('feedback', app()->getLocale()),
            "visible" => $this->visible,
            'client_photo' => $this->whenLoaded('media', fn() => [
                'src' => $this->getFirstMediaUrl('client_photo'),
                'alt' => $this->getFirstMedia('client_photo')->name ?? '',
                'id' => $this->getFirstMedia('client_photo')->id ?? null,
            ] ?? null),
        ];
    }
}
