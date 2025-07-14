<?php

namespace App\Services;

use App\Models\Project;

class ProjectService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getAllProjects(int $perPage = 10, int $page = 1)
    {
        return Project::with(['user'])
            ->orderBy('published_at', 'desc')
            ->paginate($perPage, ['*'], 'page', $page);
    }
}
