<?php

use App\Http\Controllers\ProjectSentenceController;
use App\Http\Resources\CorporateResource;
use App\Models\Category;
use App\Models\Corporate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('LocaleMiddleware')->group(function () {
    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });
    Route::apiResource('/categories', \App\Http\Controllers\CategoryController::class);

    Route::apiResource('/services', \App\Http\Controllers\ServiceController::class);

    Route::resource('/projects', \App\Http\Controllers\ProjectController::class)
        ->except(['edit']);

    Route::apiResource('/projects.sections', \App\Http\Controllers\ProjectSectionController::class);

    Route::apiResource('/feedbacks', \App\Http\Controllers\FeedbackController::class);

    Route::apiResource('/corporates', \App\Http\Controllers\CorporateController::class);

    Route::apiResource('/emails', \App\Http\Controllers\EmailController::class);

    Route::apiResource('/banners', \App\Http\Controllers\BannerController::class);

    Route::get('/about', [\App\Http\Controllers\AboutPageController::class, 'show']);
    Route::get('/home', [\App\Http\Controllers\HomePageController::class, 'show']);
    Route::post('/contact', [\App\Http\Controllers\ContactPageController::class, 'sendMessage']);
    Route::get('/contact', [\App\Http\Controllers\ContactPageController::class, 'index']);
    Route::prefix('/page')
        ->group(function () {
            Route::controller(\App\Http\Controllers\HomePageController::class)->prefix('/home')->group(function () {
                Route::post('/', 'store');
                Route::get('/', 'index');
            });
            Route::controller(\App\Http\Controllers\AboutPageController::class)->prefix('/about')->group(function () {
                Route::post('/', 'store');
                Route::get('/', 'index');
            });
            Route::controller(\App\Http\Controllers\ServicePageController::class)->prefix('/contact')->group(function () {
                Route::post('/', 'store');
                Route::get('/', 'index');
            });
            Route::controller(\App\Http\Controllers\ProjectPageController::class)->prefix('/projects')->group(function () {
                Route::post('/', 'store');
                Route::get('/', 'index');
            });
            Route::controller(\App\Http\Controllers\ContactPageController::class)->prefix('/contact')->group(function () {
                Route::post('/', 'store');
                Route::get('/', 'index');
            });
        });
    Route::controller(\App\Http\Controllers\CorporateSectionController::class)->prefix('corporate_section')
        ->group(function () {
            Route::get('/', 'index');
            Route::post('/', 'store');
        });
    Route::controller(ProjectSentenceController::class)->prefix('project_sentence')->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
    });
    Route::controller(\App\Http\Controllers\GlobalDataController::class)->group(function () {
        Route::get('/global', 'show');
        Route::post('/global', 'store');
    });

    Route::prefix('/archive')->group(function () {
        //    Route::prefix('/services')->controller(\App\Http\Controllers\ServiceController::class)->group(function () {
        //        Route::get('/', 'archived');
        //        Route::get('/{service}', 'showArchived');
        //        Route::delete('/{service}', 'removePermanently');
        //        Route::post('/restore', 'restoreFromArchive');
        //    });
        //    Route::prefix('/categories')->controller(\App\Http\Controllers\CategoryController::class)->group(function () {
        //        Route::get('/', 'archived');
        //        Route::get('/{category}', 'showArchived');
        //        Route::delete('/{category}', 'removePermanently');
        //        Route::post('/restore', 'restoreFromArchive');
        //    });

        Route::prefix('/projects')->controller(\App\Http\Controllers\ProjectController::class)->group(function () {
            Route::get('/', 'archived');
            Route::get('/{project}', 'showArchived');
            Route::delete('/{project}', 'removePermanently');
            Route::post('/restore', 'restoreFromArchive');
        });
        //    Route::prefix('/feedbacks')->controller(\App\Http\Controllers\FeedbackController::class)->group(function () {
        //        Route::get('/', 'archived');
        //        Route::get('/{feedback}', 'showArchived');
        //        Route::delete('/{feedback}', 'removePermanently');
        //        Route::post('/restore', 'restoreFromArchive');
        //    });
        //    Route::prefix('/corporate')->controller(\App\Http\Controllers\CorporateController::class)->group(function () {
        //        Route::get('/', 'archived');
        //        Route::get('/{corporate}', 'showArchived');
        //        Route::delete('/{corporate}', 'removePermanently');
        //        Route::post('/restore', 'restoreFromArchive');
        //    });
    });
    Route::post('/detach_image', [\App\Http\Controllers\GalleryController::class, 'detachImage']);

    Route::prefix('/attach_image')->group(function () {
        Route::post('/service/{service}', [\App\Http\Controllers\ServiceController::class, 'attachImage']);
        Route::post('/project/{project}', [\App\Http\Controllers\ProjectController::class, 'attachImage']);
    });

    Route::get('/test', function () {
        $res = Category::all();
        return json_encode($res); // laravel syntax
    });
});

