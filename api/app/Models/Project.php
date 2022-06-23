<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\Translatable\HasTranslations;
use Spatie\MediaLibrary\InteractsWithMedia;

class Project extends Model implements HasMedia
{
    use HasFactory,HasTranslations ,InteractsWithMedia,Searchable;

    protected $fillable =
    [
    'name', 'slug', 'description', 'keywords',
    'project_highlights_section1_title',
    'project_highlights_section1_description',
    'project_highlights_section2_title',
    'project_highlights_section2_description',
    'project_highlights_section3_title',
    'project_highlights_section3_description',
    'project_highlights_section4_title',
    'project_highlights_section4_description',
    'visible', 'is_featured', 'category_id', 'service_id'
  ];

    public $translatable =
    [
    'name', 'slug', 'description', 'keywords',
    'project_highlights_section1_title',
    'project_highlights_section1_description',
    'project_highlights_section2_title',
    'project_highlights_section2_description',
    'project_highlights_section3_title',
    'project_highlights_section3_description',
    'project_highlights_section4_title',
    'project_highlights_section4_description'
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('project_thumb')->singleFile();
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function sections()
    {
        return $this->hasMany(ProjectSection::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    // public function setNameAttribute($value)
    // {
    //     $this->attributes['name'] = $value;
    //     $this->attributes['slug'] = Str::slug($value);
    // }

    // public function project_creation_highlights()
    // {
    //     return $this->hasMany(HighlightedSection::class);
    // }

}
