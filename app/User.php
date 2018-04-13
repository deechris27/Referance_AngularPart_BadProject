<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use DB;
use Illuminate\Support\Facades\Log;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'userid','email', 'mobile', 'password', 'type'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public static function userCheck($email) {
        $result = DB::table('users')
                ->where('email', $email)
                ->count(); 
        return $result;
    }

    public static function getUserbyEmail($email) {
        $result = DB::table('users')
                ->where('email', $email)
                ->get(['mobile']); 
        return $result;
    }
}
