import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare const $: any;

@Component({
    selector: 'kycverify-list',
    templateUrl: 'kycverify.component.html'
})

export class KycverifyComponent implements OnInit, AfterViewInit {

    userId : any;
    kycId : any;
    kycStatus : any;
    tenantId : any;
    ownerView : any;
 
    @ViewChild("aadhar") aadhar;
    @ViewChild("voterid") voterid;
    @ViewChild("passport") passport;    

    constructor(private http: Http,
      private toastr: ToastrService,
      private router: ActivatedRoute,
      private rout:Router
    ) { 
      this.userId = localStorage.getItem("userId");
    }    

    ngOnInit() {
      $.material.options.autofill = true;
      $.material.init();

       this.kycStatus ={
        tenant_id:'',
        voter_id:'',
        aadhar:'',
        passport:'',
        a_stat:'',
        v_stat:'',
        p_stat:'',
        status:''
      };

      this.kycId = this.router.snapshot.paramMap.get('id');

      if(this.router.snapshot.paramMap.get('srcId')){
          this.ownerView = 1;
      }

      let aadharPrv = this.aadhar.nativeElement;
      let voteridPrv = this.voterid.nativeElement;
      let passportPrv = this.passport.nativeElement;

        this.http.get('/api/kycStatus/'+this.kycId)
        .toPromise()
        .then(result => {
            let stat = result.json().data.kycStatus;
            this.kycStatus.a_stat = stat.a_stat;
            this.kycStatus.v_stat = stat.v_stat;
            this.kycStatus.pass_stat = stat.pass_stat;
            this.tenantId = stat.tenant_id;
            aadharPrv.src = "http://studphotos.s3.amazonaws.com/" +stat.tenant_id + "_kyc" + ".jpg"; 
            voteridPrv.src = "http://studphotos.s3.amazonaws.com/" +stat.tenant_id + "_vid" + ".jpg"; 
            passportPrv.src = "http://studphotos.s3.amazonaws.com/" +stat.tenant_id + "_pp" + ".jpg"; 
        });

    }

    onAadharStatusChange(stat){
      this.kycStatus.a_stat = stat;
    }

    onVoterIdStatusChange(stat){
      this.kycStatus.v_stat = stat;
    }

    onPassportStatusChange(stat){
      this.kycStatus.pass_stat = stat;
    }   

    onStatusChange(stat){
      this.kycStatus.status = stat;
    }    
    
    update(){
      let data = {
        vid:this.kycStatus.v_stat,
        aadhar:this.kycStatus.a_stat,
        pp:this.kycStatus.pass_stat,
        status:this.kycStatus.status
      };

      this.http
        .post('/api/tenantKyc/' +this.tenantId, data)
        .subscribe(result => {   
          this.toastr.success('KYC status updated', 'Flarow!');
        });

    }

    ngAfterViewInit() {
       
    }
}

