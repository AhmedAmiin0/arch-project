<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GlobalDataResource extends JsonResource
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
            'facebook_link' => $this->facebook_link ?? null,
            'twitter_link' => $this->twitter_link ?? null,
            'instagram_link' => $this->instagram_link ?? null,
            'youtube_link' => $this->youtube_link ?? null,
            'address' => $this->address ?? null,
            'phone' => $this->phone ?? null,
            'email' => $this->email ?? null,
            'email_app_secret' => $this->email_app_secret ?? null,
            'message' => $this->message ?? '',
            'name' => $this->name ?? '',
            'logo' => $this->logo ?? '',
        ];
    }
}
