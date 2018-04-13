<?php

namespace App\Http\Controllers;

use Mail;
use Illuminate\Http\Request;
use App\OwnerAdminModel;
use App\PropertyModel;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\File as LaraFile;
use Illuminate\Support\Facades\Log;
use Response;

class PropertiesController extends Controller {

    /**
     * add a new property
     *
     * @return \Illuminate\Http\Response
     */
    public function AddProperty(Request $request) {

        if ($request->input('title')) {

            $count = PropertyModel::PropertyDetailsCheck($request->input('title'));
            if ($count != 0) {
                $data = array(
                    'code' => 409,
                    'message' => 'Property already exists',
                    'errors' => true
                );
                
                return response(compact('data'),409);
            }

            $arr = $request->input('facility');

            $amenity = array();
            for($i=0; $i <sizeof($arr); $i++ ){
                $amenity[array_keys($arr[$i])[0]] = array_keys($arr[$i])[0];
            }

            $inputdata = array(
                'title' => $request->input('title'),
                'owner_id' => $request->input('ownerId'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'country' => $request->input('country'),
                'zipcode' => $request->input('zipcode'),
                'latitude' => $request->input('latitude'),
                'longitude' => $request->input('longtitude'),
                'details' => $request->input('details'),
                'status' => '0',
                'type' => $request->input('type'),
                'rooms' => $request->input('rooms'),
                'area' => $request->input('area'),
                'garden_area' => $request->input('garden'),
                'landmark' => $request->input('landmark'),
                'nearby_school' => $request->input('schools'),
                'nearby_busstop' => $request->input('busstop'),
                'nearby_railway' => $request->input('station'),
                'kyc_check' => isset($amenity['kyc']) ? 1: 0,
                'profile_picture_needed' => isset($amenity['picture']) ? 1: 0,
                'bank_details_needed' => isset($amenity['bank']) ? 1 : 0,
                'smoking' => isset($amenity['smoking']) ? 1: 0,
                'allow_pets' => isset($amenity['pets']) ? 1: 0,
                'allow_parties' => isset($amenity['parties']) ? 1: 0,
                'additional_rules' => isset($amenity['additonal_rules']) ? 1 : 0,
                'move_in' => $request->input('movein'),
                'rent' => $request->input('rent'),
                'deposit' => $request->input('deposit'),
                'visit_days' => $request->input('visitdays'),
                'visit_timings' => $request->input('visittime'),
                'notice_period' => $request->input('notice'),
                'active' => $request->input('active')
            );

            $data = PropertyModel::InsertPropertyDetails($inputdata);

            Log::info($data);

            $amenitiesData = array(
                'owner_id' => $request->input('ownerId'),
                'property_id' => $data,
                'wifi' => isset($amenity['wifi']) ? 1: 0,
                'furnished' => isset($amenity['furnished']) ? 1: 0,
                'ac' => isset($amenity['ac']) ? 1: 0,
                'tv' => isset($amenity['tv']) ? 1: 0,
                'heater' => isset($amenity['heater']) ? 1: 0,
                'security' => isset($amenity['security']) ? 1: 0,
                'rainwater_harvesting' => isset($amenity['rain']) ? 1: 0,
                'metro_water' => isset($amenity['water']) ? 1: 0,
                'cable_connection' => isset($amenity['cable']) ? 1: 0,
                'three_phase' => isset($amenity['phase']) ? 1: 0,
                'inverter' => isset($amenity['power']) ? 1: 0,
                'parking_lot' => isset($amenity['parking']) ? 1: 0,
                'elevator' => isset($amenity['elevator']) ? 1: 0,
                'gym' => isset($amenity['gym']) ? 1: 0,
                'shared_parking' => isset($amenity['shared_parking']) ? 1: 0,
                'shared_elevator' => isset($amenity['shared_elevator']) ? 1: 0,
                'shared_backyard' => isset($amenity['shared_yard']) ? 1: 0,
                'shared_balcony' => isset($amenity['shared_balcony']) ? 1: 0,
                'shared_terrace' => isset($amenity['shared_terrace']) ? 1: 0,
                'shared_gym' => isset($amenity['shared_gym']) ? 1: 0,
            );

            $amenity = PropertyModel::InsertAmenities($amenitiesData);
            
            return response()->success(compact('data'));
             
        } 
    }

    public function PropertyList(Request $request, $id) {
        $result = PropertyModel::PropertyDetailsList($id);
        $property = json_decode(json_encode($result));

        return response()->success(compact('property'));
    }

    public function PropertyEdit(Request $request, $id) {

        if ($request->input('title')) {
            $datas = array(
                'title' => $request->input('title'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'country' => $request->input('country'),
                'zipcode' => $request->input('zipcode'),
                'latitude' => $request->input('latitude'),
                'longitude' => $request->input('longtitude'),                
                'details' => $request->input('details')
            );

            PropertyModel::UpdatePropertyData($datas, $id);
            $result = PropertyModel::PropertyDetails($id);

            return response()->success(compact('result'));
        } 
    }

    public function PropertyDelete(Request $request, $id) {
        if ($id) {
            PropertyModel::PropertyDelete($id);
        }
    }

    ///////////////////// Property Images Controller ///////////////

    public function PropertyImages(Request $request, $id) {
        if (empty($request->session()->get('_oadmin'))) {
            return Redirect::to('/owner/login');
        } else {
            $owner_id = $request->session()->get('_oadmin');
        }

        $resultss = PropertyModel::PropertyImagesLists($id);
        $datatable = json_decode(json_encode($resultss));
        $arr = '';
        $status = '';
        foreach ($datatable as $propertyListimages) {
            if ($propertyListimages->status == '1') {
                $status = 'Approved';
            } else {
                $status = 'Approval Pending';
            }

            $arr .= '<tr><td><img src="' . url('/public/admin/dist/property') . '/' . $propertyListimages->image . '" width="90" /></td>
                            <td>' . $status . '</td>
                            <td><span class="manipulate"><a href="' . url('/owner/edit-property-images/') . "/" . $propertyListimages->id . '" title="Edit"><i class="fa fa-pencil-square text-yellow" aria-hidden="true"></i></a></span> <span class="manipulate"><a href="javascript:;" title="delete" class="delete" id="delete_' . $propertyListimages->id . '"><i class="fa fa-trash text-red" aria-hidden="true"></i></a></span></td>
                        </tr>';
        }

        $results = OwnerAdminModel::OwnerDetails($owner_id[0]);
        $data = array(
            'name' => $results->name,
            'email' => $results->email,
            'image' => $results->image,
            'property_id' => $id,
        );

        $data['datatable'] = $arr;
        return view('owner.property-image-listing', $data);
    }

    public function addPropertyImages(Request $request, $ids) {

        if (empty($request->session()->get('_oadmin'))) {
            return Redirect::to('/owner/login');
        } else {
            $owner_id = $request->session()->get('_oadmin');
        }

        if ($request->input('property_id')) {
            try {
                $file = $request->file('image');
                $name = md5(rand(11111, 99999)) . '.' . $file->getClientOriginalExtension();
                $request->file('image')->move(public_path('admin/dist/property'), $name);
            } catch (Illuminate\Filesystem\FileNotFoundException $e) {
                print_r($e);
            }

            $inpData = array('pro_id' => $request->input('property_id'),
                'status' => 0,
                'image' => $name,
                'owner_id' => $owner_id[0],
            );

            OwnerAdminModel::InsertGalleryImage($inpData);

            $results = OwnerAdminModel::OwnerDetails($owner_id[0]);
            $data = array(
                'name' => $results->name,
                'email' => $results->email,
                'image' => $results->image,
                'validate_js' => '/jquery.validate.js',
                'msg' => 'Successfully uploaded and sent for verification from administrator!',
                'property_id' => $ids,
            );
            return view('owner.add-property-images', $data);
        } else {

            $results = OwnerAdminModel::OwnerDetails($owner_id[0]);
            $data = array(
                'name' => $results->name,
                'email' => $results->email,
                'image' => $results->image,
                'validate_js' => '/jquery.validate.js',
                'msg' => '',
                'property_id' => $ids,
            );

            return view('owner.add-property-images', $data);
        }
    }

    public function editPropertyImages(Request $request, $id) {

        if (empty($request->session()->get('_oadmin'))) {
            return Redirect::to('/owner/login');
        } else {
            $owner_id = $request->session()->get('_oadmin');
        }

        if ($request->input('property_id')) {
            $image = PropertyModel::PropertyImagesDetails($id);
            LaraFile::delete(public_path() . "\admin\dist\property\\" . $image->image);
            try {
                $file = $request->file('image');
                $name = md5(rand(11111, 99999)) . '.' . $file->getClientOriginalExtension();
                $request->file('image')->move(public_path('admin/dist/property'), $name);
            } catch (Illuminate\Filesystem\FileNotFoundException $e) {
                print_r($e);
            }

            $inpData = array(
                'status' => 0,
                'image' => $name,
            );

            OwnerAdminModel::UpdateGalleryImage($inpData, $id);
            $images = PropertyModel::PropertyImagesDetails($id);
            $results = OwnerAdminModel::OwnerDetails($owner_id[0]);
            $data = array(
                'name' => $results->name,
                'email' => $results->email,
                'image' => $results->image,
                'old_image' => $images->image,
                'validate_js' => '/jquery.validate.js',
                'msg' => 'Successfully uploaded and sent for verification from administrator!',
                'property_id' => $image->pro_id,
            );
            return view('owner.edit-property-images', $data);
        } else {

            $image = PropertyModel::PropertyImagesDetails($id);
            $results = OwnerAdminModel::OwnerDetails($owner_id[0]);
            $data = array(
                'name' => $results->name,
                'email' => $results->email,
                'image' => $results->image,
                'old_image' => $image->image,
                'validate_js' => '/jquery.validate.js',
                'msg' => '',
                'property_id' => $image->pro_id,
            );

            return view('owner.edit-property-images', $data);
        }
    }

    public function PropertyImagesDelete(Request $request) {
        if ($request->input('image_id')) {
            PropertyModel::PropertyImageDelete($request->input('image_id'));
        }
    }

    public function listOfProperty(Request $request){
        $result = PropertyModel::PropertyLists();
        return response()->success(compact('result'));
    }

    //0='Inactive',1='Active',2='Booked'
    public function propertyDetails(Request $request, $id) {
        $results = PropertyModel::PropertyDetails($id);
        $amenities = PropertyModel::getAmenities($id);
        $results->amenities = $amenities;
        return response()->success(compact('results'));
    }

    public function allPropertyLists(Request $request){
        $result = PropertyModel::allPropertyLists();
        return response()->success(compact('result'));
    }

    public function updStatus(Request $request, $id) {
        $results = PropertyModel::updateStatus($request->status, $id);
        return response()->success(compact('results'));
    }   

    public function propertyListedCount(Request $request, $id){
        $result = PropertyModel::propertyListed($id);
        return response()->success(compact('result'));
    }

    public function PropertyListByApproval(Request $request, $id) {
        $result = PropertyModel::PropertyDetailsListByApproval($id);
        $property = json_decode(json_encode($result));

        return response()->success(compact('property'));
    }

}
