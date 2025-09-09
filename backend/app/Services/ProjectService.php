<?php

namespace App\Services;

use App\Models\Project;
use Illuminate\Support\Str;

class ProjectService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getAllProjects(
        int $perPage = 10,
        int $page = 1,
        ?string $search,
    ) {
        /*
        return Project::with(["user"])
            ->orderBy("published_at", "desc")
            ->when($search, function ($query, $search) {
                $query
                    ->where("title", "like", "%" . $search . "%")
                    ->orWhere("description", "like", "%" . $search . "%");
            })
            ->paginate($perPage, ["*"], "page", $page); */
        return Project::orderBy("published_at", "desc")
            ->when($search, function ($query, $search) {
                $query
                    ->where("title", "like", "%" . $search . "%")
                    ->orWhere("description", "like", "%" . $search . "%");
            })
            ->paginate($perPage, ["*"], "page", $page);
    }

    public function getProjectBySlug(string $slug)
    {
        return Project::with('relatedFields')->where('slug', $slug)->first();
    }

    public function createProject(array $data)
    {
        $project = new Project();

        $project->title = $data["title"];
        $project->slug = Str::slug($data["title"]) . "-" . uniqid();
        $project->description = $data["description"];
        $project->zip_url = $data["zip_url"] ?? null;  
        $project->status = $data["status"];
        $project->pdf_url = $data['pdf_url'] ?? null;
        $project->github_url = $data["github_url"] ?? null;
        $project->keywords = $data["keywords"];
        $project->co_authors = $data["co_authors"] ?? null;
        $project->author = $data["author"];
        $project->type = $data["type"];
        $project->published_at = $data["published_at"];

        $project->save();

        $project->users()->attach($data['user_id'], [
            'role' => 'admin'
        ]);

        return $project;
    }

    public function getUserProjectById(int $user_id, int $project_id)
    {
        // return Project::where("id", $project_id)
        //     ->where("user_id", $user_id)
        //     ->first();
        return Project::first();
    }

    public function deleteProject(Project $project)
    {
        return $project->delete();
    }
}
