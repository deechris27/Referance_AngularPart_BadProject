import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, } from '@angular/router';

declare const $: any;
declare var swal: any;

@Component({
    selector: 'app-tag-cmp',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.css']
})

export class TagComponent implements OnInit{

    @Input() multiple: boolean = false;
    mobileNo : any;
    emailId : any;
    tName : any;
    property : any;
    userId : any;
    propertyId : any;
    tenantName : any;
    propertyName : any;

    ngOnInit(){
        $.material.options.autofill = true;
        $.material.init();
        
        this.property =[{
            title : ''
        }];

        this.propertyName = 'default';

        if (this.actrouter.snapshot.paramMap.get('id') != null
            && this.actrouter.snapshot.paramMap.get('name') != null) {
            this.propertyId = this.actrouter.snapshot.paramMap.get('id');
            this.propertyName = this.actrouter.snapshot.paramMap.get('name');
        }else{
            this.userId = localStorage.getItem("userId");
            this.http.get('/api/property/' + this.userId)
                .toPromise()
                .then(result => {
                    this.property = result.json().data.property;
                });
        }

        console.log(this.propertyName);

    }

    constructor(private http: Http,
                private toastr: ToastrService,
                private actrouter: ActivatedRoute,
                private router : Router
    ) {

    }

    upload(form: NgForm) {
        var data = {
            mobile:form.value.mobile,
            email:form.value.email,
            owner: localStorage.getItem("userId"),
            name:form.value.tName,
            propertyId : this.propertyId
        }
        
        this.http.post('/api/tag', data)
            .toPromise()
            .then(result => {
                let routerIns = this.router;
                swal({
                    title: 'Tag Tenant to property!',
                    text: 'Tag tenant request sent, you will get notification once the tenant gets tagged',
                    type: 'success',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                }).then(function() {
                    routerIns.navigate(['/dashboard']);
                });
            });
    }

}
