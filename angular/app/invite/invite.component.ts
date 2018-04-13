import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare const $: any;

@Component({
    selector: 'app-invite-cmp',
    templateUrl: './invite.component.html',
    styleUrls: ['./invite.component.css']
})

export class InviteComponent implements OnInit{

    @Input() multiple: boolean = false;
    mobileNo : any;
    emailId : any;

    ngOnInit(){
    }

    constructor(private http: Http,
                private toastr: ToastrService,
                private router: Router
    ) {}

    upload(form: NgForm) {
        var data = {
            mobile:form.value.mobile,
            email:form.value.email,
            userId: localStorage.getItem("userId"),
            name:form.value.name,
        }
        
        this.http.post('/api/invite', data)
            .toPromise()
            .then(result => {
                this.toastr.success('Invitation sent', 'Flarow!');
                this.router.navigate(['/dashboard']);
            });
    }
}
