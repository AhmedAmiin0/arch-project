<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeedbackResource;
use App\Models\Feedback;
use Illuminate\Http\Request;


class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $limit = request()->get('limit', 10);
        $feedbacks = Feedback::search(request()->get('q'))
            ->paginate($limit);
        $feedbacks->load('media');
        // return $feedbacks;
        return FeedbackResource::collection($feedbacks);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreFeedbackRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {

            $request->validate([
                'name_ar' => 'required|string|max:255',
                'name_en' => 'required|string|max:255',
                'position_ar' => 'nullable|string|max:255',
                'position_en' => 'nullable|string|max:255',
                'feedback_ar' => 'required|string|max:255',
                'feedback_en' => 'required|string|max:255',
                'client_photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:4128',
            ]);
            $feedback = Feedback::create([
                'name' => [
                    'en' => $request->name_en,
                    'ar' => $request->name_ar,
                ],
                'position' => [
                    'en' => $request->position_en,
                    'ar' => $request->position_ar,
                ],
                'feedback' => [
                    'en' => $request->feedback_en,
                    'ar' => $request->feedback_ar,
                ],
                'visible' => $request->visible ?? 'HIDDEN',
            ]);
            if ($request->file('client_photo')) {
                $feedback->addMediaFromRequest('client_photo')->toMediaCollection('client_photo');
            }
            return response()->json(['message' => 'success', 'feedback_id' => $feedback->id], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Feedback $feedback
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $feedback = Feedback::findOrFail($id);
        $feedback->load('media');
        return new FeedbackResource($feedback);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateFeedbackRequest $request
     * @param \App\Models\Feedback $feedback
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Feedback $feedback)
    {
        $feedback->update([
            'name' => $request->name,
            'position' => $request->position,
            'feedback' => $request->feedback,
            'visible' => $request->visible ?? 'HIDDEN',
        ]);
        if ($request->file('client_photo') != null) {
            $feedback->addMedia($request->file('client_photo'))->toMediaCollection('client_photo');
        }
        return response()->json(['message' => 'success'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Feedback $feedback
     * @return \Illuminate\Http\Response
     */
    // public function archived()
    // {
    //     $limit = request()->get('limit', 10);
    //     $feedback = Feedback::onlyTrashed()
    //         ->paginate($limit);
    //     $feedback->map(function ($item) {
    //         $item->src = $item->getFirstMediaUrl('client_photo');
    //         $item->alt = $item->getFirstMedia('client_photo')->name;
    //         unset($item['media']);
    //     });
    //     return $feedback;
    // }

    // public function showArchived($id)
    // {
    //     $feedback = Feedback::onlyTrashed()->find($id);
    //     $feedback->src = $feedback->getFirstMediaUrl('client_photo');
    //     $feedback->alt = $feedback->getFirstMedia('client_photo')->name;
    //     unset($feedback['media']);
    //     return $feedback;
    // }

    // public function restoreFromArchive(Request $request)
    // {
    //     try {
    //         $feedback = Feedback::onlyTrashed()->find($request->get('id'));
    //         $feedback->restore();
    //         return response()->json(['message' => 'success'], 200);
    //     } catch (\Exception $e) {
    //         return response()->json(['message' => $e->getMessage()], 400);
    //     }
    // }

    // public function removePermanently($id)
    // {
    //     $feedback = Feedback::onlyTrashed()->find($id);
    //     try {
    //         $feedback->forceDelete();
    //         return response()->json(['message' => 'success'], 200);
    //     } catch (\Exception $e) {
    //         return response()->json(['message' => $e->getMessage()], 400);
    //     }
    // }

    public function destroy(Feedback $feedback)
    {
        $feedback->delete();
        return response()->noContent();
    }
}
