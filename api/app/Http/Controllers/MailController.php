<?php

namespace App\Http\Controllers;

use App\Jobs\SendAdsJob;
use App\Jobs\SendContactMailsJob;
use App\Models\Advertisement;
use App\Models\Email;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function sendContactMail(Request $request)
    {
        SendContactMailsJob::dispatch($request->email, $request->name, $request->message, $request->subject);
    }
}
