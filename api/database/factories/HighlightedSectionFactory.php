<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use phpDocumentor\Reflection\Project;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HighlightedSection>
 */
class HighlightedSectionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'details' => $this->faker->word,
            'project_id'=> $this->faker->numberBetween(1, 10),
        ];
    }
}
