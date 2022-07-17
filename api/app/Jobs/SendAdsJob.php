<?php

namespace App\Jobs;

use App\Mail\ThanksForContactingMail;
use App\Models\GlobalData;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendAdsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $appLogo, $appName,  $appMail;
    public function __construct(public $subject, public $message, public $title, public $emails)
    {
        $globalData = GlobalData::first();
        $this->appLogo = [
            'src' => $globalData?->getFirstMedia('logo')?->getUrl() ?? asset('logo.png'),
            'alt' => $globalData?->getFirstMedia('logo')?->name ?? 'logo',
        ];
        $this->appName = $globalData->name ?? config('app.name');
        $this->appMail = $globalData->email ?? env("TEMP_MAIL");
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->emails as $email) {
            Mail::to($email)->later(now()->addSecond(5),new ThanksForContactingMail(
                $this->appLogo,
                $this->appName,
                $this->title,
                $this->message,
                $this->subject,
                $this->appMail
            ));
        }
    }
    public function failed(Exception $exception)
    {
        logger()->error($exception->getMessage());
    }
}
