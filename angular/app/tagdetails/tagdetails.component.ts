import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'tagdetails-list',
  templateUrl: 'tagdetails.component.html'
})

export class TagDetailsComponent implements OnInit, AfterViewInit {

  userId: any;
  tagging: any;
  tagId : any;

  constructor(private http: Http,
    private toastr: ToastrService,
    private router: ActivatedRoute,
    private rout: Router
  ) { }

  ngOnInit() {
    $.material.options.autofill = true;
    $.material.init();

    this.tagging = {
      'createdBy': '',
      'updatedBy': '',
      'ownerName': '',
      'ownerEmail' : '',
      'ownerMobile' :'',
      'about':'',
      'ownerAddress':'',
      'ownerCity':'',
      'ownerState':'',
      'ownerZip':'',
      'tenantName':'',
      'tenantMobile':'',
      'property_id':'',
      'title':'',
      'rent':'',
      'propAddress':'',
      'propCity':'',
      'propState':'',
      'propZip':'',
      'status':''
    };

    this.userId = localStorage.getItem("userId");

    if(this.router.snapshot.paramMap.get('id') != null){
      this.tagId = this.router.snapshot.paramMap.get('id');    
    }

    this.http.get('/api/tagRequestDetails/' + this.tagId)
      .toPromise()
      .then(result => {
        this.tagging = result.json().data.tagging[0];
        console.log(this.tagging);
      });
  }

  ngAfterViewInit() { }
}

