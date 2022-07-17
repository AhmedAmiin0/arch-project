<?php

namespace App\Http\Controllers;

use App\Models\ThanksForContactingMessage;
use Illuminate\Http\Request;

class ThanksForContactingMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $thanksForContactingMessage = ThanksForContactingMessage::first();
        return response()->json(
            [
                'title' => $thanksForContactingMessage->title ?? '',
                'message' => $thanksForContactingMessage->message ?? '',
                'subject' => $thanksForContactingMessage->subject ?? '',
            ],
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $thanksForContactingMessage = ThanksForContactingMessage::first();
        $thanksForContactingMessage->title = $request->title;
        $thanksForContactingMessage->message = $request->message;
        $thanksForContactingMessage->subject = $request->subject;
        $thanksForContactingMessage->save();
        return response()->json(
            [
                'title' => $thanksForContactingMessage->title ?? '',
                'message' => $thanksForContactingMessage->message ?? '',
                'subject' => $thanksForContactingMessage->subject ?? '',
            ],
            200
        );
    }


}
