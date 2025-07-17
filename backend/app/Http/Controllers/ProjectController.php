<?php

namespace App\Http\Controllers;

use App\Services\ProjectService;
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ProjectService $projectService)
    {
        $perPage = request()->input('per_page', 10);
        $page = request()->input('page', 1);

        $projects = $projectService->getAllProjects(
            perPage: $perPage,
            page: $page
        );

        return response()->json([
            'success' => true,
            'data' => $projects,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    /**
     * Realiza a busca de projetos
     */
    public function search(Request $request) {
        $request->validate([
            'query' => 'required|string|min:3', // Pra pesquisar somente se houverem pelo menos 3 caracteres inseridos.
        ]);
        
        $query = $request->input('query');

        $projects = Project::where('title', 'LIKE', "%{$query}%")
                                    //->orWhere('description', 'LIKE', "%{$query}%")
                                    ->get();

        return response()->json($projects);
    }
}
