<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Spatie\Translatable\HasTranslations;


class Category extends Model
{
    use HasFactory,HasTranslations,Searchable;

    protected $fillable = ['name', 'slug', 'visible'];
    public $translatable = ['name', 'slug'];

    public function projects()
    {
        return $this->hasMany(Project::class);
    }
    // search by name only
    public function toSearchableArray()
    {
        return $this->only('name');
    }
}
