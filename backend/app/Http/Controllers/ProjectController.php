<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\User;
use App\Services\ProjectService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ProjectService $projectService)
    {
        $perPage = request()->input("per_page", 10);
        $page = request()->input("page", 1);
        $query = request()->input('query', null);

        $projects = $projectService->getAllProjects(
            perPage: $perPage,
            page: $page,
            search: $query
        );

        return response()->json([
            "success" => true,
            "data" => $projects,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateProjectRequest $request, ProjectService $projectService)
    {
        $validatedData = $request->validated();

        $validatedData["link"] = $request
            ->file("project")
            ->store("projects/zips");
        $validatedData["pdf_link"] = $request
            ->file("pdf")
            ->store("projects/pdfs");

        $validatedData["user_id"] = Auth::user()->user_id;

        $project = $projectService->createProject($validatedData);

        $project->load("users");

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

        // Loga o que veio da requisição
        Log::info('Busca de projetos iniciada', [
            'query' => $query,
            'user_id' => $request->user()?->id,
        ]);

        //$projects = $projectService->getAllProjects(search: $query);

        $projects = $projectService->getAllProjects(
            perPage: 10, 
            page: 1,
            search: $query
        );

        Log::info('Resultados da busca', [
            'count' => count($projects),
        ]);

        return response()->json([
            "success" => true,
            "data" => $projects,
        ]);
    }
}
