import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare const $: any;

declare interface Property{
    title?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
    latitude?:string;
    longtitude?:string;
    about?: string;
    pImage?: any;
    owner_id?:any;
    id?:any;
    details?:string;
}

@Component({
    selector: 'propdetails',
    templateUrl: 'details.component.html',
    styleUrls:['details.component.css']
})

export class DetailsComponent implements OnInit, AfterViewInit {

    detail : Property;
    private sub: any;
    items : any;
    currUser : any;
    validMobile = false;
    showButton = false;
    mobileNo : any;

    constructor(private actrouter: ActivatedRoute, private http: Http, private router: Router) {

        this.items = [1];
     } 

    ngOnInit() {
        $.material.options.autofill = true;
        $.material.init();

        this.detail = {
            title:'',
            address:'',
            city:'',
            state:'',
            country:'',
            zip:'',
            latitude:'',
            longtitude:'',
            about:'',
            owner_id:'',
            id:'',
            details:''
        }


        this.sub = this.actrouter.params.subscribe(params =>{
            if(params['id'] !== undefined){
                this.http.get('/api/propDetails/' + params['id'])
                .toPromise()
                .then(result => {
                    var prop = result.json().data.results;
                    this.detail.title = prop.title;
                    this.detail.address = prop.address;
                    this.detail.city = prop.city;
                    this.detail.country = prop.country;
                    this.detail.owner_id= prop.owner_id;
                    this.detail.id = prop.id;
                    this.detail.details = prop.details;
                });     
            }
        });

        this.currUser = localStorage.getItem('currentUser');
        if(this.currUser === "null"){
            this.showButton = true;
        }
    }

    onBook(){
        if(this.currUser === "null"){
            $('#otpModal').modal({
                backdrop: 'static',
                keyboard: false
            });
        }else{
           // this.router.
        }
    }

    onSubmit(form: NgForm){
        const mobile = form.value.mobile;
        const otp = form.value.otpname;
        const pwd = form.value.password;
        
        let data = {
            mobile:form.value.mobile,
            password:form.value.password,
            type:0,
            otp:form.value.otpname
        } 

       if(otp != null && pwd != null){
            this.http.post('/api/auth/register', data)
            .toPromise()
            .then(response => {        
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().data.token;
                let userType = response.json() && response.json().data.user.type;
                let userId = response.json() && response.json().data.user.id;
                if (token) {
    
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ 'userId': userId, token: token }));
                    localStorage.setItem('currentUserType', userType);
                    localStorage.setItem('userId',userId);
                    this.router.navigate(['/createsc',this.detail.id, this.detail.owner_id]);
                    $('#otpModal').modal( 'hide' ).data( 'bs.modal', null );
                } 
            });
        }else{
            this.validMobile = true;
            this.http.post('/api/quickReg', data)
            .toPromise()
            .then(response => {
                console.log(response);
            }); 
        }

    

    }

    ngAfterViewInit() {
        $('[rel="tooltip"]').tooltip();
    }
}

