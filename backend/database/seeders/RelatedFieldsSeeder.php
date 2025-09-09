<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class RelatedFieldsSeeder extends Seeder
{
    public function run(): void
    {
        // Lista de áreas relacionadas
        $areas = [
            'Inteligência Artificial',
            'Ciência de Dados',
            'Desenvolvimento Web',
            'Desenvolvimento Mobile',
            'Segurança da Informação',
            'Redes de Computadores',
            'Sistemas Embarcados',
            'Outra',
        ];

        // Inserir na tabela related_fields
        foreach ($areas as $area) {
            DB::table('related_fields')->updateOrInsert(
                ['slug' => Str::slug($area)],
                [
                    'name' => $area,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
    }
}
