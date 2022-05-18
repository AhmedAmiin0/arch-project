<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CorporateResource extends JsonResource
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
            'name' => $this->name,
            'url' => $this->url,
            'corporate_logo' => $this->whenLoaded('media', fn() => [
                'src' => $this->getFirstMediaUrl('corporate_logo'),
                'alt' => $this->getFirstMedia('corporate_logo')->name ?? '',
                'id' => $this->getFirstMedia('corporate_logo')->id ?? null,
            ] ?? null),
        ];
    }
}
