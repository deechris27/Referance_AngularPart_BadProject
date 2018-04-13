<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use DB;

class PropertyModel extends Model {

    public static function PropertyDetailsCheck($inp) {

        $result = DB::table('tbl_properties')
                ->where('title', $inp)
                ->count();
        return $result;
    }

    public static function InsertPropertyDetails($inp = []) {
        $result = DB::table('tbl_properties')->insertGetId($inp);
        return $result;
    }

    public static function PropertyDetailsList($id = '') {
        $result = DB::table('tbl_properties')
                ->where('owner_id', $id)
                ->where('deleted', '0')
                ->get();
        return $result;
    }

    public static function PropertyLists() {
        $result = DB::table('tbl_properties')
                ->where('status', '<>', 0)
                ->where('deleted', '0')
                ->get();
        return $result;
    }

    public static function PropertyDetails($id = '') {
        DB::enableQueryLog();

        $result = DB::table('tbl_properties')
                ->where('id', $id)
                ->first();

        Log::info(DB::getQueryLog());        

        return $result;
    }

    public static function UpdatePropertyData($inp = [], $id = '') {
        $result = DB::table('tbl_properties')
                ->where('id', $id)
                ->update($inp);
        return $result;
    }

    public static function PropertyDelete($id = '') {

        $result = DB::table('tbl_properties')
                ->where('id', $id)
                ->update(array('deleted' => '1'));
        return $result;
    }

    public static function PropertyImagesLists($id = '') {

        $result = DB::table('tbl_property_images')
                ->where('pro_id', $id)
                ->where('deleted', '0')
                ->get();
        return $result;
    }

    public static function AllPropertyImagesLists($id = '') {

        $result = DB::table('tbl_property_images')
                ->where('deleted', '0')
                ->orderBy('status', 'ASC')
                ->get();
        return $result;
    }

    public static function PropertyImagesDetails($id = '') {
        $result = DB::table('tbl_property_images')
                ->where('id', $id)
                ->first();
        return $result;
    }

    public static function PropertyImageDelete($id = '') {

        $result = DB::table('tbl_property_images')
                ->where('id', $id)
                ->update(array('deleted' => '1'));
        return $result;
    }

    public static function allPropertyLists() {
        $result = DB::table('tbl_properties as p')
                ->join('user_profile as u ', 'p.owner_id', '=', 'u.user_id' )
                //->where('p.status', '<>', 0)
                ->where('p.deleted', '0')
                ->get(['u.user_id', 'u.fname', 'p.id', 'p.title', 'p.address', 'p.city', 'p.state', 'p.zipcode', 'p.status']);
        return $result;
    }

    public static function updateStatus($status, $id = '') {
        $result = DB::table('tbl_properties')
                ->where('id', $id)
                ->update(array('status' => $status));
        return $result;
    }

    public static function InsertAmenities($inp = []) {
        $result = DB::table('amenities')->insertGetId($inp);
        return $result;
    }

    public static function propertyListed($id) {
        $result = DB::table('tbl_properties')
                ->where('owner_id', '=', $id)
                ->where('status', '<>', 0)
                ->where('deleted', '0')
                ->count();
        return $result;
    }

    public static function PropertyDetailsListByApproval($id = '') {
        $result = DB::table('tbl_properties')
                ->where('owner_id', $id)
                ->where('deleted', '0')
                ->where('status', '0')
                ->get();
        return $result;
    }

    public static function getAmenities($id){
        $result = DB::table('amenities')
            ->where('property_id',$id)
            ->get(['wifi','furnished','ac','tv','heater','security','rainwater_harvesting as rain',
            'metro_water as water','cable_connection as cable','three_phase as phase','inverter as power','parking_lot as parking','elevator',
            'gym','shared_parking','shared_elevator','shared_backyard as shared_yard','shared_balcony', 'shared_terrace','shared_gym']);
        return $result;
    }

}