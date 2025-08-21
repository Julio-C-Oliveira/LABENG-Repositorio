<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Services\ProjectService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ProjectService $projectService)
    {
        $perPage = request()->input("per_page", 10);
        $page = request()->input("page", 1);

        $projects = $projectService->getAllProjects(
            perPage: $perPage,
            page: $page,
        );

        return response()->json([
            "success" => true,
            "data" => $projects,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, ProjectService $projectService)
    {
        $validatedData = $request->validate([
            "title" => "required|string|max:255",
            "description" => "required|string",
            "type" => "required|in:Article,TCC",
            "author" => "required|string|max:255",
            "co_authors" => "required|string|max:255",
            "status" => "required|in:draft,published,archived",
            "related_fields" => "nullable|array",
            "related_fields.*" => "string|max:255",
            //"pdf" => "required|file|mimes:pdf|max:10240",
            "github_link" => "nullable|string|max:255",
            //"project" => "required|file|mimes:zip|max:10240",
            "keywords" => "required|string|max:255",
        ]);
        //Todos os comentários nessa seção foram feitos para que o post de projetos
        // fosse feito sem autenticação,
        /*
        $validatedData["link"] = $request
            ->file("project")
            ->store("projects/zips");
        $validatedData["pdf_link"] = $request
            ->file("pdf")
            ->store("projects/pdfs");

        $validatedData["user_id"] = Auth::user()->id; */
        $project = $projectService->createProject($validatedData);

        //$project->load("user");

        return response()->json(
            [
                "success" => true,
                "data" => new ProjectResource($project),
            ],
            201,
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug, ProjectService $projectService)
    {
        $project = $projectService->getProjectBySlug($slug);

        if (!$project) {
            return response()->json(
                [
                    "success" => false,
                    "message" => "Project not found",
                ],
                404,
            );
        }

        return response()->json([
            "success" => true,
            "data" => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        return response()->json(
            [
                "success" => false,
                "message" => "Not implemented yet",
            ],
            501,
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id, ProjectService $projectService)
    {
        $project = $projectService->getUserProjectById(Auth::user()->id, $id);

        if ($project) {
            $projectService->deleteProject($project);
        }

        return response()->json([
            "success" => true,
            "message" => "Project deleted successfully",
        ]);
    }

    /**
     * Realiza a busca de projetos
     */
    public function search(Request $request, ProjectService $projectService)
    {
        $request->validate([
            "query" => "required|string|min:3", // Pra pesquisar somente se houverem pelo menos 3 caracteres inseridos.
        ]);

        $query = $request->has("query") ? $request->input("query") : null;

        $projects = $projectService->getAllProjects(search: $query);

        return response()->json($projects);
    }
}
