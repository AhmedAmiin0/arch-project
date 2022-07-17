<?php

namespace App\Http\Controllers;

use App\Jobs\SendAdsJob;
use App\Jobs\SendContactMailsJob;
use App\Models\Email;
use App\Models\Message;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function sendContactMail(Request $request)
    {
        SendContactMailsJob::dispatch($request->email, $request->name, $request->message, $request->subject, 'RECEIVED');
    }
    public function sendAdvertisementMails(Request $request)
    {
        Message::create([
            'email'   => $request->email,
            'name'    => $request->name,
            'message' => $request->message,
            'subject' => $request->subject,
            'status'  => 'SENT',
        ]);
        return Email::chunk(40, function ($emails) use ($request) {
            dispatch(new SendAdsJob($request->subject, $request->message, $request->title, $emails));
        });
    }
}
