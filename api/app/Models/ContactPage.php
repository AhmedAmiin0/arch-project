<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ContactPage extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'keywords',
        'slug',
        'sentence_title',
        'sentence_subtitle',
        'sentence_description'
    ];
    protected $hidden = ['created_at'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('contact_page_image')
            ->singleFile();
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
}
