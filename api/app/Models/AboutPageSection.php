<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class AboutPageSection extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'description',
        'title',
        'subtitle',
    ];
    public function registerMediaCollections() :void
    {
        $this->addMediaCollection('about_page_section_image')
            ->singleFile();
    }

}
