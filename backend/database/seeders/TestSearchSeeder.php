<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\User;

use Illuminate\Support\Str;
use Carbon\Carbon;



class TestSearchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Garante pelo menos um usuário para associar os projetos
        $user = User::first() ?? User::factory()->create([
            'username' => 'usuario_seed',
            'email' => 'seed@example.com',
            'password' => bcrypt('password123'),
        ]);

        $projects = [
            ['title' => 'Aplicação de Redes Neurais para Reconhecimento de Imagens', 'type' => 'Article'],
            ['title' => 'Desenvolvimento de um Sistema de Gestão Acadêmica', 'type' => 'TCC'],
            ['title' => 'Algoritmos Genéticos Aplicados à Otimização', 'type' => 'Article'],
            ['title' => 'Plataforma Web para Controle de Projetos Científicos', 'type' => 'TCC'],
            ['title' => 'Estudo de Machine Learning em Diagnósticos Médicos', 'type' => 'Article'],
            ['title' => 'Prototipagem de Aplicativo Educacional para Matemática', 'type' => 'TCC'],
            ['title' => 'Análise de Big Data em Ambientes Cloud', 'type' => 'Article'],
            ['title' => 'Sistema de Recomendação Baseado em Deep Learning', 'type' => 'TCC'],
            ['title' => 'Implementação de Blockchain em Cadeias de Suprimentos', 'type' => 'Article'],
            ['title' => 'Ferramenta para Gerenciamento de Tarefas Acadêmicas', 'type' => 'TCC'],
            ['title' => 'Uso de Robótica em Educação Infantil', 'type' => 'Article'],
            ['title' => 'Modelo de Previsão de Séries Temporais com LSTM', 'type' => 'TCC'],
            ['title' => 'Integração de IoT com Sistemas de Agricultura Inteligente', 'type' => 'Article'],
            ['title' => 'Sistema de Chatbot para Atendimento Universitário', 'type' => 'TCC'],
            ['title' => 'Desenvolvimento de API para Serviços de Saúde', 'type' => 'Article'],
        ];

        foreach ($projects as $index => $proj) {
            Project::create([
                'title'        => $proj['title'],
                'slug'         => Str::slug($proj['title']).'-'.Str::random(4),
                'published_at' => Carbon::now()->subDays(rand(10, 500)),
                'type'         => $proj['type'],
                'link'         => null, // pode colocar links falsos se quiser
                'user_id'      => $user->id,
            ]);
        }
    }
}
