<?php

namespace App\Mail;

use App\Models\GlobalData;
use App\Models\ThanksForContactingMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ThanksForContactingMail extends Mailable
{
	use Queueable, SerializesModels;

	/**
	 * Create a new message instance.
	 *
	 * @return void
	 */
	public $appLogo, $appName, $mailTitle, $mailMessage;
	public function __construct()
	{
		$globalData = GlobalData::first();
		$ThanksForContactingMessage = ThanksForContactingMessage::first();
		$this->appLogo = [
			'src' => $globalData?->getFirstMedia('logo')?->getUrl() ?? asset('logo.png'),
			'alt' => $globalData?->getFirstMedia('logo')?->name ?? 'logo',
		];
		$this->appName = $globalData->name ?? config('app.name');
		$this->mailTitle = $ThanksForContactingMessage->title ?? 'Thanks for contacting us';
		$this->mailMessage = $ThanksForContactingMessage->message ?? 'Thanks for contacting us';
	}

	/**
	 * Build the message.
	 *
	 * @return $this
	 */
	public function build()
	{
		return $this->markdown(
			'mails.thanksForContactingMail',
			[
				'appLogo' => $this->appLogo,
				'appName' => $this->appName,
				'mailTitle' => $this->mailTitle,
				'mailMessage' => $this->mailMessage,
			]
		);
	}
	public function failed(Exception $exception)
	{
		logger()->error($exception->getMessage());
	}
}
