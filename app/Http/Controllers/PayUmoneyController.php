<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Storage;
use Illuminate\Support\Facades\Log;
use App\TenantModel;
use Softon\Indipay\Facades\Indipay;
use Illuminate\Support\Facades\Redirect;

class PayUmoneyController extends Controller
{


    public function responseFromGateway(Request $request){
        // For default Gateway
        $response = Indipay::response($request);
        
        // For Otherthan Default Gateway
        $response = Indipay::gateway('PayUMoney')->response($request);

        Log::info($response);

        $data = array(
            'tenant_id' => $response['udf1'],
            'status' => $response['status'],
            'amount' => $response['amount'],
            'create_date' => $response['addedon'],
            'payment_id' => $response['txnid'],
            'description' => $response['field9']
        );

        TenantModel::paymentHistoryInsert($data);

        $base_url = url('/');
        $redirect_url = $base_url ."/#/payresponse";

        //dd($response);   
        return Redirect::to($redirect_url);              
    }

    /**
    * Manage Post Request
    *
    * @return void
    */
    public function tenantDetailswithHash(Request $request, $id)
    {
        $key = 'uxlAaZMp';
        // Generate random transaction id
        $txnid = substr(hash('sha256', mt_rand() . microtime()), 0, 20);

        $tenantData = TenantModel::TenantDetails($id);
        if(empty($tenantData)){
            return response()->success(compact('Not found')); 
        }

        $propertyData = TenantModel::propertyBookingByTenant($id);

        $tData  = $tenantData[0];
        $pData = $propertyData[0];

        $productInfo = json_encode(json_decode('[{"name":"rent","description":"monthly rent","value":' .$pData->rent.',"isRequired":"false"}]'));

        $hashData = array(
            'key' => $key,
            'txnid' => $txnid,
            'amount' => $pData->rent,
            'firstname' => $tData->fname,
            'email' => $tData->email,
            'productinfo' => $productInfo,
            'udf1' => $tData->id
        );

        $hash = $this->generateHash($hashData);

        $adress = $tData->address .','.$tData->city.','.$tData->state.','.$tData->zip;

        $paymentData = array(
            'key' => $key,
            'txnid' => $txnid,
            'amount' => $pData->rent,
            'productinfo' => $productInfo,             
            'firstname' => $tData->fname,
            'email' => $tData->email,
            'phone' => $tData->phone,
            'address' => $adress,
            'surl' => '',
            'furl' => '',
            'hash' => $hash,
            'ownerName' => $pData->ownerName
        );
          
        return response()->success(compact('paymentData'));    
    }

    private function generateHash($hashData){

        $SALT = 'LQ3Z9iP6c0';

        $hash = '';
        // Hash Sequence
        $hashSequence = "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";

        $hashVarsSeq = explode('|', $hashSequence);
        $hash_string = '';	
        foreach($hashVarsSeq as $hash_var) {
            $hash_string .= isset($hashData[$hash_var]) ? $hashData[$hash_var] : '';
            $hash_string .= '|';
        }
    
        $hash_string .= $SALT;
        Log::info($hash_string);
        $hash = strtolower(hash('sha512', $hash_string));

        return $hash;
    }

    private function responseHash(Request $request){
        $salt = 'LQ3Z9iP6c0';
        $key = 'uxlAaZMp';

        $status = $request->input('status');
        $email = $request->input('email');
        $firstname = $request->input('firstname');
        $productinfo = $request->input('productinfo');
        $amount = $request->input('amount');
        $txnid = $request->input('txnid');

        If (null !== $request->input('additionalCharges')) {
             $additionalCharges = $request->input('additionalCharges');
             $retHashSeq = $additionalCharges.'|'.$salt.'|'.$status.'|||||||||||'.$email.'|'.$firstname.'|'.$productinfo.'|'.$amount.'|'.$txnid.'|'.$key;  
        }else {	  
             $retHashSeq = $salt.'|'.$status.'|||||||||||'.$email.'|'.$firstname.'|'.$productinfo.'|'.$amount.'|'.$txnid.'|'.$key;
        }
        $hash = hash("sha512", $retHashSeq);

        return response()->success(compact('hash')); 
    }
}
