<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = "projects";
    protected $primaryKey = "project_id";
    public $incrementing = true;
    protected $keyType = "int";

    protected $fillable = [
        "title",
        "slug",
        "keywords",
        "co_authors",
        "author",
        "description",
        "published_at",
        "type",
        "pdf_url",
        "zip_url",
        "github_url",
        "status",
    ];

    public function users()
    {
        return $this->belongsToMany(
            User::class,
            "project_user",
            "project_id",
            "user_id",
        )
            ->withPivot("role")
            ->withTimestamps();
    }

    public function relatedFields()
    {
        return $this->belongsToMany(
            RelatedField::class,
            "project_related",
            "project_id",
            "related_id"
        );
    }
}
