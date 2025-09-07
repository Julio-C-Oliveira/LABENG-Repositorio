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
        Schema::table('projects', function (Blueprint $table) {
            $table->string('status')->default('draft')->after('type'); // status of the project: draft, published, archived
            $table->string('related_fields')->nullable()->after('status');
            $table->string('pdf_url')->nullable()->after('related_fields');
            $table->string('github_url')->nullable()->after('pdf_url');
            $table->string('zip_url')->nullable()->after('github_url');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("projects", function (Blueprint $table) {
            $table->dropColumn(["status", "related_fields", "pdf_url", "github_url", "zip_url"]);
        });
    }
};
