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
            "status" => "required|in:draft,published,archived",
            "keywords" => "required|string|max:255",
            "published_at" => "required|date",

            "co_authors" => "nullable|string|max:255",
            "project" => "nullable|file|mimes:zip|max:40960",
            "pdf" => "nullable|file|mimes:pdf|max:40960",
            "github_link" => "nullable|string|max:255",
            "related_fields" => "nullable|array",
            "related_fields.*" => "string|max:255",
        ];
    }
}
