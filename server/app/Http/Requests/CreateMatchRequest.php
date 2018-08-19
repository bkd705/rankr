<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validate\Rule;

class CreateMatchRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $existsInLeaderboardRule = function ($attribute, $value, $fail) {
            $leaderboard = \App\Models\Leaderboard::find($this->input('leaderboard_id'));

            $player = $leaderboard->players()->find($value);

            if (!$player) {
                $fail(':attribute is not a player on this leaderboard.');
            }
        };

        return [
            'leaderboard_id' => 'required|exists:leaderboards,id',
            'winner_id' => ['required', $existsInLeaderboardRule],
            'loser_id' => ['required', $existsInLeaderboardRule],
            'winner_score' => 'required',
            'loser_score' => 'required'
        ];
    }
}
