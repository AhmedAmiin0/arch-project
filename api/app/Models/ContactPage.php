<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class ContactPage extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, HasTranslations;

    protected $fillable = [
        'title',
        'subtitle',
        'contact_details',
        'location'
    ];
    public $translatable = ['title', 'subtitle', 'contact_details'];
    protected $hidden = ['created_at'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('contact_page_image')
            ->singleFile();
    }
}
