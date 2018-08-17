<?php

namespace Tests;

use App\Exceptions\Handler;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    protected function setUp()
    {
        parent::setUp();
        $this->disableExceptionHandling();
    }
    protected function signIn($auth = null, $verified = true)
    {
        $auth = $auth ? : create('App\Models\Auth');
        if (!$verified) {
            $auth->user->verified = false;
            $auth->user->save();
        }
        $this->actingAs($auth->user);
        return $this;
    }
    protected function disableExceptionHandling()
    {
        $this->oldExceptionHandler = $this->app->make(ExceptionHandler::class);
        $this->app->instance(
            ExceptionHandler::class,
            new class extends Handler {
                public function __construct()
                {
                }
                public function report(\Exception $e)
                {
                }
                public function render($request, \Exception $e)
                {
                    throw $e;
                }
            }
        );
    }
    protected function withExceptionHandling()
    {
        $this->app->instance(ExceptionHandler::class, $this->oldExceptionHandler);
        return $this;
    }
}
