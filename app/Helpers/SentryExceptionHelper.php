<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;


class SentryExceptionHelper
{
    /**
     * Report an exception to sentry and log it
     *
     * @param \Exception $e
     * @param array $tags Extra key => value pairs to help
     * identify the error
     */
    public static function report(\Exception $e, $tags = null)
    {
        $context = [];
        if ($tags) {
            $context['tags'] = $tags;
        }
        if (!in_array(\App::environment(), ['local', 'staging'])) {
            static::sentry()->captureException($e, $context ?: null);
        }

        $fileAndLine = $e->getFile() . ':' . $e->getLine();
        Log::error($e->getMessage() . "\n$fileAndLine", $tags ?: []);
    }

    /**
     * @return \Sentry
     */
    public static function sentry()
    {
        static $sentry = null;
        return $sentry ?: ($sentry = app('sentry'));
    }
}
