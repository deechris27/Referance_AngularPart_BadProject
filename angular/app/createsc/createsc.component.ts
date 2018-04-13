import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-createsc-cmp',
    templateUrl: './createsc.component.html',
    styleUrls: ['./createsc.component.css']
})

export class CreatescComponent implements OnInit{

  private imageId: any;
  private userId: any;
  public booking: any;
  private propertyId : any;
  public startDt : any;
  public endDt : any; 
  public tenant : any;
  public ownerId : any;

  options = {format: 'YYYY/MM/DD HH:mm', showClear: true};

  constructor(private http: Http,
    private el: ElementRef,
    private toastr: ToastrService,
    private router: ActivatedRoute,
    private rout:Router
  ) { 
    this.booking ={
        name:'',
        title:'',
        phone:'',
        email:'',
        aptDate:'',
        aptTime:'',
        details:''
    }

    this.userId = localStorage.getItem("userId");

  }

  @ViewChild("profileinput") fileInput;
  @ViewChild("prfPreview") prfPreview;
  @ViewChild("uploadButton") uploadButton;
 
  ngOnInit(){
        $.material.options.autofill = true;
        $.material.init();

        this.propertyId = this.router.snapshot.paramMap.get('id');
        this.ownerId = this.router.snapshot.paramMap.get('ownerId');   
        
        this.http.get('/api/tenantdetails/'+this.userId)
        .toPromise()
        .then(result => {
            this.tenant = result.json().data.tenantData;
            this.booking.phone = this.tenant[0].mobile;
        });
    }

    changeStatus(form: NgForm) {
        var data = {
            propertyId:this.propertyId,
            ownerId: this.ownerId,
            tenantId:this.userId,
            visitDate:form.value.aptDate,
            visitTime:form.value.aptTime,
            details:form.value.details
        }
        
        
        this.http.post('/api/addSchedule', data)
            .toPromise()
            .then(result => {
                this.toastr.success('Your Visit scheduled', 'Flarow!');
                this.rout.navigate(['/dashboard']);
            });
    }      

}