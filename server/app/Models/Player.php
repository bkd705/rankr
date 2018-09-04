<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Player extends Pivot
{
    public function increasePointsBy($pointsToAdd)
    {
        $this->points += $pointsToAdd;

        $this->save();
    }

    public function decreasePointsBy($pointsToRemove)
    {
        if ($this->points <= 0) {
            return;
        }

        $this->points -= $pointsToRemove;

        $this->save();
    }
}
