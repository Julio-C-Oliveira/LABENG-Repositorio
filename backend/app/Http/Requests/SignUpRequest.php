<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends FormRequest
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
        /*
        Retirei a validação do e-mail, ela não está funcionando, nem para @gmail.com, nem para @icen.ufpa.br
        */
        \Log::info($this->all()); // <-- loga tudo que chega no request
        
        return [
            "username" => "required|string|max:255|unique:users,username",
            "email" => "required|string|max:255|unique:users,email", 
            "password" => "required|string|min:8|confirmed",
        ];
    }
}
