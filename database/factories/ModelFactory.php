<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name'  => $faker->name,
        'email' => $faker->safeEmail,
        //use bcrypt('password') if you want to assert for a specific password, but it might slow down your tests
        'password' => str_random(10),
    ];
});

$factory->define(App\PasswordReset::class, function (Faker\Generator $faker) {
    return [
        'email'  => $faker->safeEmail,
        'token' => str_random(10),
    ];
});

$factory->define(App\Branch::class, function (Faker\Generator $faker){
   return [
       'name' => $faker->name,
       'address1' => $faker->word,
       'address2' => $faker->word,
       'city' => $faker->name,
       'state' => $faker->name,
       'zip' => $faker->postcode,
       'landLine' => $faker->phoneNumber,
       'mobile' => $faker->phoneNumber,
       'emailId' => $faker->safeEmail,
       'contactPerson' => $faker->name,
       'designation' => $faker->jobTitle,
       'phoneNumber' => $faker->phoneNumber,
   ]; 
});


$factory->define(App\Test::class, function (Faker\Generator $faker){
   return [
       'name' => $faker->name,
       'noOfParameters' => $faker->randomAscii,
       'cost' => $faker->randomNumber(),
   ]; 
});

$factory->define(App\Tc::class, function (Faker\Generator $faker){
   return [
       'description' => $faker->text,
       'type' => $faker->randomDigitNotNull,
       'active' => $faker->boolean(),
   ]; 
});


$factory->define(App\Doctor::class, function (Faker\Generator $faker){
   return [
       'name' => $faker->name,
       'address' => $faker->address,
       'phoneNumber' => $faker->phoneNumber,
       'clinicAddress' => $faker->address,
       'clinicPhoneNumber' => $faker->phoneNumber,
       'commission' => $faker->randomDigit,
       'emailId' => $faker->safeEmail,
   ]; 
});


$factory->define(App\Patient::class, function (Faker\Generator $faker){
   return [
       'name' => $faker->name,
       'gender' => $faker->randomLetter,
       'maritalStatus' => $faker->randomLetter,
       'dob' => $faker->dateTimeBetween('-30 years'),
       'address' => $faker->address,
       'phoneNumber' => $faker->phoneNumber,
       'mobile' => $faker->phoneNumber,
       'emailId' => $faker->safeEmail,
   ]; 
});

$factory->define(App\Bill::class, function (Faker\Generator $faker){
   return [
      'billNo' => $faker->name,
      'billDate' => $faker->date(),
      'branchId' => '5',
      'patientId' => '3',
      'testIds' => '6,7,8',
      'totalCost' => $faker->randomNumber('2'),
      'tax' => $faker->randomNumber('2'),
      'discount' => $faker->randomNumber('2'),
      'remarks' => $faker->text(),
      'tcIds' => '2,3',
      'doctorId' => '3'
   ]; 
});

$factory->define(App\Student::class, function (Faker\Generator $faker){
   return [
       'fname' => $faker->name,
       'lname' => $faker->name,
       'regno' => ''.$faker->randomNumber('5') .'',
       'aadhar' => '544366758765',
       'gender' => $faker->randomLetter,
       'dob' => $faker->dateTimeBetween('-13 years'),
       'class' => 'IX',
       'section' => 'A'
   ]; 
});

