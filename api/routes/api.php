<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProjectSentenceController;
use App\Http\Controllers\UserController;
use App\Http\Resources\CorporateResource;
use App\Jobs\SendContactMailsJob;
use App\Models\Category;
use App\Models\Corporate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Password;
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

Route::post('/login', [AuthController::class, 'login']);

Route::get('overview', [DashboardController::class, 'index']);

Route::middleware(['auth:sanctum', 'LocaleMiddleware'])->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/me', [AuthController::class, 'me']);

    Route::apiResource('/users', UserController::class)->except('update');

    Route::put('profile', [UserController::class, 'update']);

    Route::put('password_change', [UserController::class, 'updatePassword']);

    Route::apiResource('/categories', \App\Http\Controllers\CategoryController::class);

    Route::apiResource('/services', \App\Http\Controllers\ServiceController::class);

    Route::resource('/projects', \App\Http\Controllers\ProjectController::class)
        ->except(['edit']);
    Route::apiResource('/projects.sections', \App\Http\Controllers\ProjectSectionController::class);

    Route::apiResource('/feedbacks', \App\Http\Controllers\FeedbackController::class);

    Route::apiResource('/corporates', \App\Http\Controllers\CorporateController::class);

    Route::apiResource('/emails', \App\Http\Controllers\EmailController::class);

    Route::apiResource('/banners', \App\Http\Controllers\BannerController::class);

    Route::apiResource('/email', \App\Http\Controllers\EmailController::class);

    Route::apiResource('/messages', \App\Http\Controllers\MessageController::class)->except(['update', 'store']);

    Route::post('/contact', [\App\Http\Controllers\ContactPageController::class, 'sendMessage']);
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

    Route::post('/detach_image', [\App\Http\Controllers\GalleryController::class, 'detachImage']);

    Route::prefix('/attach_image')->group(function () {
        Route::post('/service/{service}', [\App\Http\Controllers\ServiceController::class, 'attachImage']);
        Route::post('/project/{project}', [\App\Http\Controllers\ProjectController::class, 'attachImage']);
        Route::post('/home', [\App\Http\Controllers\HomePageController::class, 'attachImage']);
    });
});

Route::post('/password/email', [AuthController::class, 'forget']);
Route::post('/password/reset', [AuthController::class, 'reset']);

Route::post('test', function (Request $request) {
    SendContactMailsJob::dispatch( $request->email );
});
