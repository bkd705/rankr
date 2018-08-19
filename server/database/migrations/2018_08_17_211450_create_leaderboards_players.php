<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeaderboardsPlayers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leaderboards_player', function (Blueprint $table) {
            $table->unsignedInteger('player_id');
            $table->unsignedInteger('leaderboard_id');
            $table->float('points')->default(0);
            $table->timestamps();

            $table->primary(['player_id', 'leaderboard_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leaderboards_player');
    }
}
