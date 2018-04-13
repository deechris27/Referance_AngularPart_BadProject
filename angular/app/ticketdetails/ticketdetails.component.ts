import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-td-cmp',
    templateUrl: './ticketdetails.component.html',
    styleUrls: ['./ticketdetails.component.css']
})

export class TicketdetailsComponent implements OnInit{

  private imageId: any;
  private userId: any;
  public ticket: any;
  private ticketId : any;

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
        this.ticketId = this.router.snapshot.paramMap.get('id');
        
        this.ticket ={
            name:'',
            title:'',
            phone:'',
            email:'',
            date:'',
            status:''
        }
        
        this.http.get('/api/myticketdetail/'+ this.ticketId)
        .toPromise()
        .then(result => {
            this.ticket = result.json().data.ticket;
            let imgPrv = this.prfPreview.nativeElement;
            imgPrv.src = "http://studphotos.s3.amazonaws.com/" + this.ticket.tenantId + ".jpg";
        });
    }

    onStatusChange(stat){
        this.ticket.status = stat;
    }

    changeStatus(form: NgForm) {
        var data = {
            ownerId:localStorage.getItem("userId"),
            propertyId:this.ticket.propertyId,
            tenantId:this.ticket.tenantId,
            status:this.ticket.status
        }
        
        console.log(data.status);
        
        this.http.post('/api/myticketstatus/' + this.ticketId, data)
            .toPromise()
            .then(result => {
                this.toastr.success('Ticket updated', 'Flarow!');
            });
    }      

}
