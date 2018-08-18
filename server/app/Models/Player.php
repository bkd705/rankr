<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Player extends Pivot
{
    public function getRank()
    {
        $allPlayers = Player::orderBy('points', 'asc')->get();

        $rank = $allPlayers->search(function ($player) {
            return $player->id == $this->member_id;
        });

        return $rank || 0;
    }

    public function increasePoints($pointsToAdd)
    {
        $this->points += $pointsToAdd;

        $this->save();
    }

    public function decreasePoints($pointsToRemove)
    {
        if ($this->points <= 0) {
            return;
        }

        $this->points -= $pointsToRemove;

        $this->save();
    }
}
