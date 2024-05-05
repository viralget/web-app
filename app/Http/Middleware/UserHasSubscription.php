<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UserHasSubscription 
{

   public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if ($user && !$user->getActiveSubscription($user)) {
            return redirect('pricing');
        }
 
        return $next($request);
    }
}
