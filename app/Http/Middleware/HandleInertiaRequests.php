<?php

namespace App\Http\Middleware;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        $user = $request->user();
        $role = null;


        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $user ? UserResource::make($user) : null,
                'role' => $role && count($role) > 0 ? $role[0] : null
            ],
            'app' => [
                'name' => config('app.name'),
                'url' => config('app.url'),
            ],
            // 'ziggy' => function () {
            //         return (new Ziggy)->toArray();
            //     },
        ]);
    }
}
