import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MdDatepickerModule } from '@angular/material';

declare var $: any;

@Component({
    selector: 'app-td-cmp',
    templateUrl: './bookingdetails.component.html',
    styleUrls: ['./bookingdetails.component.css']
})

export class BookingdetailsComponent implements OnInit{

  private imageId: any;
  private userId: any;
  public booking: any;
  private bookingId : any;
  public startDt : any;
  public endDt : any;

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
        this.bookingId = this.router.snapshot.paramMap.get('id');
        
        this.booking ={
            name:'',
            title:'',
            phone:'',
            email:'',
            date:''
        }
        
        this.http.get('/api/bookingDetails/'+ this.bookingId)
        .toPromise()
        .then(result => {
            let data = result.json().data.data;
            this.booking = data;
            this.booking.startDate = new Date(data.startDate);
            this.booking.endDate = new Date(data.endDate);

            let imgPrv = this.prfPreview.nativeElement;
            imgPrv.src = "http://studphotos.s3.amazonaws.com/" + this.booking.propertyId + ".jpg";
        });
    }

    onStatusChange(stat){
        this.booking.status = stat;
    }

    changeStatus(form: NgForm) {
        var data = {
            startDate:form.value.startDt,
            endDate:form.value.endDt,
            status:this.booking.status
        }
        
        this.http.post('/api/updateBooking/' + this.bookingId, data)
            .toPromise()
            .then(result => {
                this.toastr.success('Status updated', 'Flarow!');
            });
    }      

}