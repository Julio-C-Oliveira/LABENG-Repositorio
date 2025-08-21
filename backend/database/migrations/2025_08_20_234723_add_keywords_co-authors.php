<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table("projects", function (Blueprint $table) {
            $table->text("keywords")->after("description");
            $table->text("co_authors")->after("keywords");
            $table->text("author")->after("co_authors");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("projects", function (Blueprint $table) {
            $table->dropColumn(["keywords", "co_authors"]);
        });
    }
};
