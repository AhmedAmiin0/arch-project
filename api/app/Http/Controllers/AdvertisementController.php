<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdvertisementResource;
use App\Jobs\SendAdsJob;
use App\Models\Advertisement;
use App\Models\Email;
use Illuminate\Http\Request;

class AdvertisementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $limit = request()->get('limit', 15);
        $data = Advertisement::search(request()->get('q'))->paginate($limit);
        return AdvertisementResource::collection($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Advertisement::create([
            'title'    => $request->title,
            'message' => $request->message,
            'subject' => $request->subject,
        ]);
        return Email::chunk(40, function ($emails) use ($request) {
            dispatch(new SendAdsJob($request->subject, $request->message, $request->title, $emails));
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Advertisement  $advertisement
     * @return \Illuminate\Http\Response
     */
    public function show(Advertisement $advertisement)
    {
        return AdvertisementResource::make($advertisement);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Advertisement  $advertisement
     * @return \Illuminate\Http\Response
     */
    public function destroy(Advertisement $advertisement)
    {
        $advertisement->delete();
        return response()->json(['message' => 'Advertisement deleted successfully.'], 204);
    }
}
