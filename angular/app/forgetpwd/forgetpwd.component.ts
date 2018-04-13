import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

declare var $: any;
@Component({
    selector: 'app-fpwd-cmp',
    templateUrl: './forgetpwd.component.html'
})

export class ForgetPwdComponent implements OnInit {

    data: any;
    name:any;
    postData:any;
    present:any;

    constructor(private http: Http, private router: Router, private toastr: ToastrService) {}    

    ngOnInit() {
        setTimeout(function() {
            $('.card').removeClass('card-hidden');
        }, 700);        
    }

    onSubmit(form: NgForm){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log(form.value.uname);

        if(form.value.uname !== undefined && form.value.uname !== null){

            this.postData = {
                email:form.value.email,
                otp:form.value.uname,
                password:form.value.password
            }
        
            this.http.post('/api/auth/password/reset', this.postData, options)
                .toPromise()
                .then(response => {    
                    if(response.json().data != undefined){
                        this.toastr.success('Password reset done, Please login with new password ', 'Flarow!');
                        this.router.navigate(['/login']);
                    }else{
                        this.toastr.error('Invalid OTP ', 'Flarow!');
                    }
            });

        }else{

            this.postData = {
                email:form.value.email
            }
        
            this.http.post('/api/checkUser', this.postData, options)
                .toPromise()
                .then(response => {    
                    this.present = response.json().data.result;
                    if(this.present == 0){
                        this.toastr.error('Email Id doesnt exists ', 'Flarow!');
                    }else{
                        let data = {
                            email:form.value.email
                        };

                        this.http.post('/api/sendByEmail', data, options)
                        .toPromise()
                        .then(response => { 

                        });                        
                    }
            });
        }
    }

    resend(){
        this.data = {
            name:localStorage.getItem('lname'),
            mobile:localStorage.getItem('lmobile'),
            email:localStorage.getItem('lemail'),
            password:localStorage.getItem('lpwd'),
            type:localStorage.getItem('ltype'),
            otp:0
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post('/api/reSend', this.data, options)
        .toPromise()
        .then(response => {
        });
    }
}
