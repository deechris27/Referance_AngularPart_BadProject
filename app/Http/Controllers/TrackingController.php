<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Tracking;
use Log;

class TrackingController extends Controller
{
    public function create(Request $request){
                
        if($request->ip() == null){
            throw new \Exception("IP ADDRESS NOT SET");   
        } 
        
        $data = new Tracking();
        $data->ip = $request->ip();
        
        Log::error("request ip  " . $request->ip() );
        print($request->ip());
        
        $data->save();
        
        return response()->success(compact('data')); 
    }
    
    public function get(){
        return Tracking::all();
    }
}
