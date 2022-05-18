<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class ProjectSection extends Model implements HasMedia
{
    use HasFactory,HasTranslations,InteractsWithMedia,Searchable;
    protected $fillable = [
        'title', 'subtitle', 'description',
        'project_id'
    ];
    public $translatable = ['title', 'subtitle', 'description'];
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('section_photo')->singleFile();
    }
    public function project(){
        return $this->belongsTo(Project::class);
    }
}
