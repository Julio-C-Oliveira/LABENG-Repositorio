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
        string $search = null,
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
        // return Project::with(["user"])
        //     ->where("slug", $slug)
        //     ->first();
        return Project::where("slug", $slug)->first();
    }

    public function createProject(array $data)
    {
        //Os comentários nessa função foi feito para evitar com o uso de autenticação
        //Caso n usar mais pode descomentar
        $project = new Project();

        $project->title = $data["title"];
        $project->slug = Str::slug($data["title"]) . "-" . uniqid();
        $project->description = $data["description"];
        //$project->link = $data["link"];
        //$project->user_id = $data["user_id"];
        $project->status = $data["status"];
        //$project->pdf_link = $data['pdf_link'];
        $project->github_link = $data["github_link"];
        $project->keywords = $data["keywords"];
        $project->co_authors = $data["co_authors"];
        $project->author = $data["author"];
        $project->type = $data["type"];

        $project->save();

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
