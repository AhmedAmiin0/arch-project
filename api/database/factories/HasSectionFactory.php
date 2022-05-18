<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HasSection>
 */
class HasSectionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'sectionable_id' => $this->faker->numberBetween(1, 10),
            'sectionable_type' => $this->faker->randomElement(['App\Models\Project', 'App\Models\Project']),
            'subtitle' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'title' => $this->faker->sentence,
        ];
    }
}
