<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'AngularController@serveApp');

    Route::get('/unsupported-browser', 'AngularController@unsupported');
});

//public API routes
$api->group(['middleware' => ['api']], function ($api) {

    // Authentication Routes...
    $api->post('auth/login', 'Auth\AuthController@login');
    $api->post('auth/register', 'Auth\AuthController@register');
    $api->get('auth/destroy', 'Auth\AuthController@logout');

    $api->post('register', 'OTPController@reg');
    $api->post('quickReg', 'OTPController@quickRegister');
    $api->post('reSend', 'OTPController@reSend');
    $api->post('sendByEmail', 'OTPController@sendByEmail');

    // Password Reset Routes...
    $api->post('auth/password/email', 'Auth\PasswordResetController@sendResetLinkEmail');
    $api->get('auth/password/verify', 'Auth\PasswordResetController@verify');
    $api->post('auth/password/reset', 'Auth\PasswordResetController@reset');
    
    //Admin
    $api->get('bookings','AdminController@adminBookingList');
    $api->get('scheduleList','AdminController@scheduleList');
    $api->get('kycList','AdminController@kycList');
    $api->get('kycStatus/{id}','AdminController@kycStatus');
    $api->get('bookingDetails/{id}','AdminController@bookingdetails');
    $api->post('updateBooking/{id}','AdminController@updateBooking');
    $api->get('tagRequest','AdminController@getTagging');
    $api->get('tagRequestDetails/{id}','AdminController@getTagDetailsById');
    $api->post('tagTenant/{id}/user/{userId}','AdminController@tagTenant');
    $api->get('payment','AdminController@payments');
    $api->post('paymentStatus','AdminController@updatePaymentStatus');

    // Property Routes
    $api->post('addProperty','PropertiesController@AddProperty');
    $api->get('property/{id}','PropertiesController@PropertyList');
    $api->delete('property/{id}','PropertiesController@PropertyDelete');
    $api->post('updateProperty/{id}','PropertiesController@PropertyEdit');
    $api->get('property','PropertiesController@listOfProperty');
    $api->get('propDetails/{id}','PropertiesController@propertyDetails');
    $api->get('allProperty','PropertiesController@allPropertyLists');
    $api->post('updPropStatus/{id}','PropertiesController@updStatus');
    $api->get('propertyListed/{id}','PropertiesController@propertyListedCount');
    $api->get('propertyByApproval/{id}','PropertiesController@PropertyListByApproval');

    // Tenant Routes
    $api->get('tenants','TenantController@tenants');
    $api->get('tenantdetails/{id}','TenantController@tenantdetails');
    $api->post('addSchedule','TenantController@tenantAddSchedule');
    $api->post('tenantKyc/{id}','TenantController@upsertKyc');
    $api->get('getKyc/{id}','TenantController@getKyc');
    $api->post('updTenantStatus/{id}','TenantController@updStatus');
    $api->get('paymentdetails/{id}','TenantController@getPaymentStatus');
    $api->get('paymenthistory/{id}','TenantController@paymentHistory');
    $api->post('updateKyc/{id}','TenantController@updateKyc');
    $api->post('netbanking','TenantController@netbankingPayment');
    

    // Owner Routes
    $api->get('schedule/{id}','OwnerController@tenantVisitRequests');
    $api->get('visitordetails/{id}','OwnerController@tenantdetails');
    $api->post('visitorstatus/{id}','OwnerController@updateVisitStatus');
    
    $api->get('mytenants/{id}','OwnerController@myTenants');
    $api->get('mytenantdetails/{id}','OwnerController@myTenantdetails');
    $api->post('mytenantstatus/{id}','OwnerController@myTenantsEdit');

   // $api->get('mytickets/{id}','OwnerController@tenantTickets');
    $api->get('ownergetTicket/{id}','OwnerController@ownergetTicket');
    $api->post('createTicket','TenantController@createTicket');     
    $api->get('tenantgetTicket/{id}','TenantController@tenantgetTicket');
    $api->post('updateTicket/{id}','TenantController@updateTicket');
    //$api->get('myticketdetail/{id}','OwnerController@ticketDetails');
    //$api->post('myticketstatus/{id}','OwnerController@updateTicketsData');
    $api->post('updateTicketStatus/{id}','TenantController@updateTicketStatus');
    $api->get('outstanding/{id}','OwnerController@getOutstandingRent');
    // $api->get('openTickets/{id}','OwnerController@getOpenTickets');
    $api->get('visits/{id}','OwnerController@getVisitCount');
    $api->get('ownerDashboardInfo/{id}','OwnerController@ownerDashboardInfo');
    $api->get('adminDashboardInfo','OwnerController@adminDashboardInfo');
    $api->get('owners','OwnerController@owners');
    $api->get('tenantpaymenthistory/{id}','OwnerController@paymentHistory');
    $api->post('tag','OwnerController@tagTenant');

    //PayUMoney routes
    $api->get('hashdetails/{id}','PayUmoneyController@tenantDetailswithHash');
    $api->post('responsehash','PayUmoneyController@responseHash');

    // Profile Routes
    $api->post('addProfile/{id}','UserProfileController@AddUserProfile');
    $api->get('getProfile/{id}','UserProfileController@GetUserProfile');
    $api->post('checkUser','UserProfileController@checkUserByEmail');
    
        
    $api->post('trackings','TrackingController@create');
    
    $api->post('s3upload','S3Controller@imageUploadPost');
     
    $api->post('details','AppController@details');
    $api->post('list','AppController@lists');
    $api->post('class','AppController@classes');
    $api->post('entry','AppController@entries');

    $api->post('invite','SMSController@individual');

    //Mail
    $api->get('sendMail', 'MailController@sendWelcomeMail');
    $api->get('invite/{id}', 'MailController@sendInvitationByAdmin');

    //Bank details
    $api->post('bankDetails/{id}','UserProfileController@addBankDetails');
    $api->get('getBankDetails/{id}','UserProfileController@getBankDetails');
         
});

//protected API routes with JWT (must be logged in)
$api->group(['middleware' => ['api', 'api.auth']], function ($api) {
});


Route::any('/transresponse','PayUmoneyController@responseFromGateway');

