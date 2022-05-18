<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class AboutPage extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, HasTranslations;
    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'keywords',
        'slug',
        'sentence_title',
        'sentence_subtitle',
        'sentence_description',
        'first_section_title',
        'first_section_subtitle',
        'first_section_description',
        'video_url'
    ];
    protected $hidden = ['created_at'];
    public $translatable = [
        'title', 'subtitle', 'description',
        'slug',
        'first_section_title',
        'first_section_subtitle', 'first_section_description',
        'sentence_title',
        'sentence_subtitle', 'sentence_description'

    ];
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('video_background')
            ->singleFile();
        $this->addMediaCollection('first_section_image')
            ->singleFile();
    }
}
