<?php

namespace App\Helpers;

use App\Helpers\SentryExceptionHelper;

trait LoggerHelper
{

    public static function log($e)
    {
        SentryExceptionHelper::report($e);
    }
}
