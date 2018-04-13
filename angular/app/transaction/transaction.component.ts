import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-payrent-cmp',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit{

  private userId: any;
  public transaction : any;
  private sub : any;

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

        this.transaction ={
            'status':'',
            'firstname':'',
            'amount':'',
            'txnid':'',
            'posted_hash':'',
            'key':'',
            'productinfo':'',
            'email':'',
            'hashMatch':false,
            'description':'',
            'payment_id':''
        };

        this.http.get('/api/paymentdetails/'+ localStorage.getItem('txnid'))
        .toPromise()
        .then(result => {
            this.transaction = result.json().data.results[0];
        });       
    }
    
}