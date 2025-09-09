<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RelatedField extends Model
{
    use HasFactory;

    protected $table = 'related_fields';
    protected $primaryKey = 'related_id';
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'name',
        'slug',
    ];

    public function projects()
    {
        return $this->belongsToMany(
            Project::class,
            'project_related',
            'related_id',
            'project_id'
        );
    }
}
