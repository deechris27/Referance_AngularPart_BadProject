import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { AuthService } from '../login/auth.service';

declare var $: any;
@Component({
    selector: 'app-register-cmp',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    test: Date = new Date();
    emailId: string;
    mobileNo: number;
    pwd: string;
    userType: number;
    data: any;
    otp:any;
    name:any;

    constructor(private http: Http, private router: Router) {}    

    ngOnInit() {
        setTimeout(function() {
            $('.card').removeClass('card-hidden');
        }, 700);        
    }

    onTypeChange(val){
        this.userType = val;
    }

    onSubmit(form: NgForm) {
        const name = form.value.uname;
        const email = form.value.email;
        const mobile = form.value.mobile;
        const password = form.value.password;
        const userType = this.userType;

        this.data = {
            name:form.value.uname,
            mobile:form.value.mobile,
            email:form.value.email,
            password:form.value.password,
            type:this.userType,
            otp:0
        } 

        localStorage.setItem('lname',form.value.uname);
        localStorage.setItem('lmobile',form.value.mobile);
        localStorage.setItem('lemail',form.value.email);
        localStorage.setItem('lpwd',form.value.password);
        localStorage.setItem('ltype', userType +'');

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post('/api/register', this.data, options)
        .toPromise()
        .then(response => {
            this.router.navigate(['/otp']);
        });       

    }    

}
