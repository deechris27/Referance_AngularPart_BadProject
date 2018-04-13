import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var $: any;
declare interface Property {
    bname?: any;
    ahname?: any;
    anumber?: any;
    icode?: any;
    atype?: any;
}

@Component({
    selector: 'app-obd-cmp',
    templateUrl: './ownerbankdetails.component.html',
    styleUrls: ['./ownerbankdetails.component.css']
})

export class OwnerBankDetailsComponent implements OnInit {

    public property: Property;
    private imageId: any;
    private userId: any;
    public updUser = false;

    constructor(private http: Http,
        private el: ElementRef,
        private toastr: ToastrService,
        private actrouter: ActivatedRoute
    ) { }

    @ViewChild("profileinput") fileInput;
    @ViewChild("prfPreview") prfPreview;
    @ViewChild("uploadButton") uploadButton;

    ngOnInit() {
        $.material.options.autofill = true;
        $.material.init();

        this.property = {
            bname: '',
            ahname: '',
            anumber: '',
            icode: '',
            atype: ''
        }


        this.userId = localStorage.getItem("userId");

        this.http.get('/api/getBankDetails/' + this.userId)
            .toPromise()
            .then(result => {
                var user = result.json().data.user;
                if (user !== undefined) {
                    this.property.bname = user.bname;
                    this.property.ahname = user.ahname;
                    this.property.anumber = user.anumber;
                    this.property.icode = user.icode;
                    this.property.atype = user.atype;
                }
            });
    }

    update(form: NgForm) {
        var data = {
            bname: form.value.bname,
            ahname: form.value.ahname,
            userId: localStorage.getItem("userId"),
            anumber: form.value.anumber,
            icode: form.value.icode,
            atype: form.value.atype
        }

        this.http.post('/api/bankDetails/' + data.userId, data)
        .toPromise()
        .then(result => {
            this.imageId = result.json().data.data;
            if (!result.json().errors) {
                this.toastr.success('Bank details updated', 'Flarow!');
            }
        });
    }

}
