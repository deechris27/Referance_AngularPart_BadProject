import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-payrent-cmp',
    templateUrl: './payrent.component.html',
    styleUrls: ['./payrent.component.css']
})

export class PayrentComponent implements OnInit{

  userId: any;
  public payment : any;

  constructor(private http: Http,
    private el: ElementRef,
    private toastr: ToastrService,
    private router: ActivatedRoute,
    private rout:Router
  ) { 
    this.userId = localStorage.getItem("userId");
  }

  ngOnInit(){
        $.material.options.autofill = true;
        $.material.init();

        this.payment ={
            'key':'',
            'txnid':'',
            'amount':'',
            'productinfo':'',
            'firstname':'',
            'email':'',
            'phone':'',
            'surl':'',
            'furl':'',
            'address':'',
            'hash':'',
            'ownerName':''
        };
        
        this.http.get('/api/hashdetails/'+this.userId)
        .toPromise()
        .then(result => {
            if(result.json().data.paymentData){
                this.payment = result.json().data.paymentData;
            }
            localStorage.setItem('txnid', this.payment.txnid);
        });
    }
    
}