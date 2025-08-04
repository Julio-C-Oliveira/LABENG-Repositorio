<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table("users", function (Blueprint $table) {
            // Check if username column exists before trying to drop it
            if (Schema::hasColumn("users", "username")) {
                $table->dropColumn("username");
            }

            // Add the name column if it doesn't exist
            if (!Schema::hasColumn("users", "name")) {
                $table->string("name")->after("id");
            }
        });
    }

    public function down()
    {
        Schema::table("users", function (Blueprint $table) {
            // For rollback: add username back and remove name
            if (!Schema::hasColumn("users", "username")) {
                $table->string("username")->unique()->after("id");
            }

            if (Schema::hasColumn("users", "name")) {
                $table->dropColumn("name");
            }
        });
    }
};
