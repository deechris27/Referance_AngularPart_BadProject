import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { AuthService } from '../login/auth.service';

declare var $: any;
@Component({
    selector: 'app-otp-cmp',
    templateUrl: './otp.component.html'
})

export class OtpComponent implements OnInit {

    data: any;
    name:any;
    isDisabled: boolean;

    constructor(private http: Http, private router: Router, private toastr: ToastrService, private authService: AuthService) {}    

    ngOnInit() {
        this.isDisabled = false;
        setTimeout(function() {
            $('.card').removeClass('card-hidden');
        }, 700);        
    }

    onSubmit(element, form: NgForm){
        element.disabled = true;
        element.textContent = "Loading...";
        
        this.data = {
            name:localStorage.getItem('lname'),
            mobile:localStorage.getItem('lmobile'),
            email:localStorage.getItem('lemail'),
            password:localStorage.getItem('lpwd'),
            type:localStorage.getItem('ltype'),
            otp:form.value.uname
        } 

        this.http.post('/api/auth/register', this.data)
        .toPromise()
        .then(response => {        
            // login successful if there's a jwt token in the response
            if(response.json().data != undefined){
                let token = response.json() && response.json().data.token;
                let userType = response.json() && response.json().data.user.type;
                let userId = response.json() && response.json().data.user.id;
                let uname = response.json() && response.json().data.user.name;
                if (token) {

                    this.authService.login(this.data.email, this.data.password)
                    .subscribe(result => {
                        console.log(result);
                        if (result === true) {
                            // login successful
                            this.router.navigate(['/dashboard']);
                        } else {
                            // login failed
                            console.log("login failed");
                            //this.error = 'Username or password is incorrect';
                            //this.loading = false;
                        }
                    });

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    // localStorage.setItem('currentUser', JSON.stringify({ 'userId': userId, token: token }));
                    // localStorage.setItem('currentUserType', userType);
                    // localStorage.setItem('userId',userId);
                    // localStorage.setItem('name',uname);

                    //this.router.navigateByUrl('/dashboard'); 

                    //let that = this;
                    // this.zone.run(() => {
                    //     that.router.navigateByUrl('/dashboard');
                    // });
                    // console.log('got token');
                    // console.log(token);
                    // setTimeout(function () { that.router.navigate(['/dashboard']); }, 50);
                }
            }else{
                this.toastr.error('Invalid OTP', 'Flarow!');
            }
        });

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
