<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HighlightedSection extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'details', 'project_id'];
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
