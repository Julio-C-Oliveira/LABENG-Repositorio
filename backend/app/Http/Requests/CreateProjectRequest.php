<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "title" => "required|string|max:255",
            "description" => "required|string",
            "type" => "required|in:Article,TCC",
            "author" => "required|string|max:255",
            "co_authors" => "required|string|max:255",
            "status" => "required|in:draft,published,archived",
            "related_fields" => "nullable|array",
            "related_fields.*" => "string|max:255",
            "pdf" => "required|file|mimes:pdf|max:40960",
            "github_link" => "nullable|string|max:255",
            "project" => "required|file|mimes:zip|max:40960",
            "keywords" => "required|string|max:255",
            "published_at" => "required|date"
        ];
    }
}
