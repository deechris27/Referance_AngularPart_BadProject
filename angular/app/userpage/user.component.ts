import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var $: any;
declare interface Property {
    fname?: string;
    lname?: string;
    address?: string,
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
    mobile?: string;
    email?: string;
    about?: string;
    pImage?: any;
    status?: any;
}

@Component({
    selector: 'app-user-cmp',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

    public property: Property;
    private imageId: any;
    private userId: any;
    public updUser = false;
    public readOly = false;

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
            fname: '',
            lname: '',
            address: '',
            city: '',
            state: '',
            country: '',
            zip: '',
            mobile: '',
            email: '',
            about: '',
            status: ''
        }

        if (this.actrouter.snapshot.paramMap.get('id') != null
            && this.actrouter.snapshot.paramMap.get('updId') != null) {
            this.userId = this.actrouter.snapshot.paramMap.get('id');
            this.updUser = true;
        } else if (this.actrouter.snapshot.paramMap.get('id') != null) {
            this.userId = this.actrouter.snapshot.paramMap.get('id');
        }
        else {
            this.userId = localStorage.getItem("userId");
        }

        this.http.get('/api/getProfile/' + this.userId)
            .toPromise()
            .then(result => {
                var user = result.json().data.user;
                if (user !== undefined) {
                    this.property.fname = user.fname;
                    this.property.lname = user.lname;
                    this.property.email = user.email;
                    this.property.mobile = user.phone;
                    this.property.address = user.address;
                    this.property.city = user.city;
                    this.property.state = user.state;
                    this.property.country = user.country;
                    this.property.zip = user.zip;
                    this.property.about = user.about;
                    this.property.status = user.status;
                    let imgPrv = this.prfPreview.nativeElement;
                    imgPrv.src = "http://studphotos.s3.amazonaws.com/" + this.userId + ".jpg";
                }
                if(!this.updUser){
                    this.property.email = localStorage.getItem("email");
                    this.property.mobile = localStorage.getItem("mobile");
                }
            });
    }

    readUrl(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event: any) => {
                let imgPrv = this.prfPreview.nativeElement;
                imgPrv.src = event.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    profile(form: NgForm) {
        var data = {
            fname: form.value.fname,
            lname: form.value.lname,
            userId: localStorage.getItem("userId"),
            address: form.value.address,
            city: form.value.city,
            state: form.value.state,
            country: form.value.country,
            zip: form.value.zip,
            phone: form.value.mobile,
            email: form.value.email,
            about: form.value.about
        }

        this.http.post('/api/addProfile/' + data.userId, data)
            .toPromise()
            .then(result => {
                this.imageId = result.json().data.data;

                if (!result.json().errors) {

                    this.toastr.success('Profile updated', 'Flarow!');

                    this.imageId = data.userId;
                    let fileBrowser = this.fileInput.nativeElement;

                    if (fileBrowser.files.length === 0) { return; };

                    let files: FileList = fileBrowser.files;

                    const formData = new FormData();
                    for (let i = 0; i < files.length; i++) {
                        formData.append("image", files[i]);
                        formData.append("name", this.imageId);
                    }

                    this.http
                        .post('/api/s3upload', formData)
                        .subscribe(result => {
                            let imgPrv = this.prfPreview.nativeElement;
                        });
                }

            });
    }

    updateUserStatus() {
        var data = {
            status: this.property.status
        };

        this.http.post('/api/updTenantStatus/' + this.userId, data)
            .toPromise()
            .then(result => {
                this.toastr.success('User status updated', 'Flarow!');
            });
    }

    onStatusChange(stat) {
        this.property.status = stat;
    }

}
