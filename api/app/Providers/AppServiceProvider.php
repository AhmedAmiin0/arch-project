<?php

namespace App\Providers;

use GuzzleHttp\Client;
use Illuminate\Support\ServiceProvider;
use MeiliSearch\MeiliSearch;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // if (class_exists(MeiliSearch::class)) {
        //     $client = app(Client::class);
        //     $config = config('scout.meilisearch.settings');
        //     collect($config)
        //         ->each(function ($settings, $class) use ($client) {
        //             $model = new $class;
        //             $index = $client->index($model->searchableAs());
        //             collect($settings)
        //                 ->each(function ($params, $method) use ($index) {
        //                     $index->{$method}($params);
        //                 });
        //         });
        // }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // if ($this->app->environment('local')) {
        //     $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
        //     $this->app->register(TelescopeServiceProvider::class);
        // }
    }
}
