<?php

namespace App\Http\Traits;
trait AttachImagesTrait
{
    /**
     * Attach images to the model.
     *
     * @param array $images
     * @return void
     */
    public function attachImages($model, $collection)
    {
        request()->validate([$collection => 'required|array|max:5']);
        $model->addAllMediaFromRequest([$collection])
            ->each(fn($fileAdder) => $fileAdder->toMediaCollection($collection));
    }

    public function attachImage($model, $image)
    {
        $model->addMedia($image)
            ->toMediaCollection($image);
    }
}
