<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Storage;
use Illuminate\Support\Facades\Log;

class S3Controller extends Controller
{

    /**
    * Manage Post Request
    *
    * @return void
    */
    public function imageUploadPost(Request $request)
    {
        
    	$this->validate($request, [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        //$imageName = $request->input('name').'.'.$request->image->getClientOriginalExtension();
        $imageName = $request->input('name').'.jpg';
        $image = $request->file('image');
        $t = Storage::disk('s3')->put($imageName, file_get_contents($image), 'public');
        $imageName = Storage::disk('s3')->url($imageName);
      
    	$data = $imageName;

        Log::info($data);    
        
        return response()->success(compact('data'));    
    }
}
