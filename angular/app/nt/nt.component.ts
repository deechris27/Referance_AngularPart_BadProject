import { Component, ElementRef, Input, ViewChild, OnInit, 
    ErrorHandler, Inject, Injector, NgZone, } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare const $: any;

declare interface Property{
    title?: string;
    property?: string;
    problem?: string;
    pImage?: any;
    about?: string;
}

@Component({
    selector: 'app-np-cmp',
    templateUrl: './nt.component.html',
    styleUrls: ['./nt.component.css']
})

export class NtComponent implements OnInit{

    @Input() multiple: boolean = false;
    private url: any;
    public ticket: Property;
    private imageId: any;

    ngOnInit(){
        this.ticket={
            title:'',
            property:'',
            problem:'',
            about:''
        }
    }

    constructor(private http: Http,
                private el: ElementRef,
                private toastr: ToastrService,
                @Inject(NgZone) private ngZone: NgZone, 
                @Inject(Injector) private injector: Injector
    ) {}

    @ViewChild("fileinput") fileInput;
    @ViewChild("imgPreview") imgPreview;
    @ViewChild("uploadButton") uploadButton;


    readUrl(event) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
      
          reader.onload = (event: any) => {
            let imgPrv = this.imgPreview.nativeElement;
            imgPrv.src = event.target.result;
          }
      
          reader.readAsDataURL(event.target.files[0]);
        }
      }

    upload(form: NgForm) {
        var data = {
            title:form.value.title,
            ownerId: localStorage.getItem("userId"),
            property:form.value.property,
            problem:form.value.problem,
        }
        
        this.http.post('/api/addProperty', data)
            .toPromise()
            .then(result => {
                this.imageId = result.json().data.data;

                if(!result.json().errors){

                    this.toastr.success('Property added', 'Flarow!');

                    this.imageId = data.ownerId + "_" + this.imageId;    
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
                            let imgPrv = this.imgPreview.nativeElement;
                            imgPrv.src = "http://studphotos.s3.amazonaws.com/img/800x500.jpg";           
                        });
                }

            });
    }
}
