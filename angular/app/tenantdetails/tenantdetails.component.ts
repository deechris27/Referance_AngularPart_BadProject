import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var $: any;
declare interface Property{
  fname?: string;
  lname?: string;
  address?:string,
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  mobile?:string;
  email?:string;
  about?: string;
  pImage?: any;
}

@Component({
    selector: 'app-td-cmp',
    templateUrl: './tenantdetails.component.html',
    styleUrls: ['./tenantdetails.component.css']
})

export class TenantdetailsComponent implements OnInit{

  public property: Property;
  private imageId: any;
  private userId: any;
  public visit: any;
  private visitId : any;

  constructor(private http: Http,
    private el: ElementRef,
    private toastr: ToastrService,
    private router: ActivatedRoute
  ) { }

  @ViewChild("profileinput") fileInput;
  @ViewChild("prfPreview") prfPreview;
  @ViewChild("uploadButton") uploadButton;
 
  ngOnInit(){
        $.material.options.autofill = true;
        $.material.init();
        this.visitId = this.router.snapshot.paramMap.get('id');
        
        this.visit ={
            name:'',
            title:'',
            phone:'',
            email:'',
            date:'',
            status:''
        }
        
        this.http.get('/api/visitordetails/'+ this.visitId)
        .toPromise()
        .then(result => {
            this.visit = result.json().data.visit;
            let imgPrv = this.prfPreview.nativeElement;
            imgPrv.src = "http://studphotos.s3.amazonaws.com/" + this.visit.tenantId + ".jpg";
        });
    }

    onStatusChange(stat){
        this.visit.status = stat;
    }

    changeStatus(form: NgForm) {
        var data = {
            ownerId:localStorage.getItem("userId"),
            propertyId:this.visit.propertyId,
            tenantId:this.visit.tenantId,
            status:this.visit.status
        }
        
        console.log(data.status);
        
        this.http.post('/api/visitorstatus/' + this.visitId, data)
            .toPromise()
            .then(result => {
                this.toastr.success('Status updated', 'Flarow!');
            });
    }      

}
