<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;
class Service extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, Searchable,HasTranslations

    // ,SoftDeletes
    ;

    // not searchable visible

    protected $fillable = ['subtitle', 'title','excerpt' ,'description', 'slug', 'visible', 'is_featured'];
    public $translatable = ['title', 'description', 'subtitle', 'excerpt', 'slug'];
    public function registerMediaCollections() : void
    {
        $this->addMediaCollection('service_thumb')->singleFile();
    }

    public function projects()
    {
        return $this->hasMany(Project::class);
    }
    // public function setTitleAttribute($value)
    // {
    //     $this->attributes['title'] = $value;
    //     $this->attributes['slug'] = Str::slug($value);
    // }
    // public function getVisible()
    // {
    //     return $this->visible ? 'Visible' : 'Hidden';
    // }
    // public function getFeatured()
    // {
    //     return $this->is_featured ? 'Featured' : 'Not Featured';
    // }
    // public function getCreatedAtAttribute($value)
    // {
    //     return \Carbon\Carbon::parse($value)->diffForHumans();
    // }

    // public function getUpdatedAtAttribute($value)
    // {
    //     return \Carbon\Carbon::parse($value)->diffForHumans();
    // }

    // public function getDeletedAtAttribute($value)
    // {
    //     return \Carbon\Carbon::parse($value)->diffForHumans();
    // }


//    public function section()
//    {
//        return $this->morphOne(HasSection::class, 'sectionable');
//    }

}
