<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('project_related', function (Blueprint $table) {
            $table->id('project_related_id');
            $table->foreignId('project_id')
                ->constrained('projects', 'project_id')
                ->onDelete('cascade');
            $table->foreignId('related_id')
                ->constrained('related_fields', 'related_id')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_related');
    }
};
