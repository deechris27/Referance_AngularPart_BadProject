<?php

namespace App\Http\Controllers;

use File;

class AngularController extends Controller
{
    public function serveApp()
    {
        return File::get(public_path('dist/index.html'));
    }

    public function unsupported()
    {
        return view('unsupported_browser');
    }
}
