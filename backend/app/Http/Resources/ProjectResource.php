<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->project_id,
            'title' => $this->title,
            'slug' => $this->slug,
            'published_at' => $this->published_at,
            'type' => $this->type,
            'link' => $this->link,
            'author' => $this->author,
            'co_authors' => $this->co_authors,
            'status' => $this->status,
            'zip_url' => $this->zip_url,
            'pdf_url' => $this->pdf_url,
            'github_url' => $this->github_url,
            'related_fields' => $this->whenLoaded('relatedFields')
                                    ->pluck('name'), // retorna só os nomes
            'user' => new UserResource($this->whenLoaded('user')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
