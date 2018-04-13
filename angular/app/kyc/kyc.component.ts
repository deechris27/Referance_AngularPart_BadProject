import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

declare const $: any;

@Component({
    selector: 'kyc-list',
    templateUrl: 'kyc.component.html'
})

export class KycComponent implements OnInit, AfterViewInit {

    userId : any;
    tenantKyc : any;

    @ViewChild("fileinput1") fileInput1;
    @ViewChild("fileinput2") fileInput2;
    @ViewChild("fileinput3") fileInput3;  
    @ViewChild("aadhar") aadhar;
    @ViewChild("voterid") voterid;
    @ViewChild("passport") passport;

    constructor(private http: Http,
      private toastr: ToastrService,
      private router: ActivatedRoute,
      private rout:Router
    ) {}      

    ngOnInit() {
        $.material.options.autofill = true;
        $.material.init();

        this.tenantKyc ={
          a_stat:'',
          v_stat:'',
          pass_stat:''
        };

        this.userId = localStorage.getItem("userId");

        let aadharPrv = this.aadhar.nativeElement;
        let voteridPrv = this.voterid.nativeElement;
        let passportPrv = this.passport.nativeElement;

        this.http.get('/api/getKyc/'+ this.userId)
        .toPromise()
        .then(result => {
            let data = result.json().data.kycData;

            if(data != null){
              this.tenantKyc = data;
              aadharPrv.src = "http://studphotos.s3.amazonaws.com/" +this.userId + "_kyc" + ".jpg"; 
              voteridPrv.src = "http://studphotos.s3.amazonaws.com/" +this.userId + "_vid" + ".jpg"; 
              passportPrv.src = "http://studphotos.s3.amazonaws.com/" +this.userId + "_pp" + ".jpg";               
            }
        });
    }

    readUrl(event) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            $("#aadhar").attr("src", event.target.result); 
          }
          reader.readAsDataURL(event.target.files[0]);
        }
      } 
      
      readUrl1(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
              $("#voterid").attr("src", event.target.result);  
            }                
          reader.readAsDataURL(event.target.files[0]);
        }
      } 

      readUrl2(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
              $("#passport").attr("src", event.target.result);  
            }                
          reader.readAsDataURL(event.target.files[0]);
        }
      }

      uploadAadhar() {
        let fileBrowser = this.fileInput1.nativeElement;
        
        if (fileBrowser.files.length === 0) { return; };

        let files: FileList = fileBrowser.files;

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("image", files[i]);
            formData.append("name", this.userId+'_kyc');
        }

        this.http
            .post('/api/s3upload', formData)
            .subscribe(result => {   
              
              let data ={
                aadhar:1
              }; 

              this.http
                .post('/api/tenantKyc/' +this.userId, data)
                .subscribe(result => {   
                  this.tenantKyc.a_stat = 1;
                });

            });                    
     }  
     
     uploadVoterId() {
        let fileBrowser = this.fileInput2.nativeElement;
        
        if (fileBrowser.files.length === 0) { return; };

        let files: FileList = fileBrowser.files;

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("image", files[i]);
            formData.append("name", this.userId+'_vid');
        }

        this.http
            .post('/api/s3upload', formData)
            .subscribe(result => { 
              let data ={
                vid:1
              }; 

              this.http
                .post('/api/tenantKyc/' +this.userId, data)
                .subscribe(result => {   
                  this.tenantKyc.v_stat = 1;
                });                       
            });                    
      }

      uploadPassport() {
        let fileBrowser = this.fileInput3.nativeElement;
        
        if (fileBrowser.files.length === 0) { return; };

        let files: FileList = fileBrowser.files;

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("image", files[i]);
            formData.append("name", this.userId+'_pp');
        }

        this.http
            .post('/api/s3upload', formData)
            .subscribe(result => {   
              let data ={
                pp:1
              }; 

              this.http
                .post('/api/tenantKyc/' +this.userId, data)
                .subscribe(result => {   
                  this.tenantKyc.pass_stat = 1;
                });                      
            });                    
      }
      
    shareKyc(shareData){
      let data ={
        share:shareData
      }; 

      this.http
        .post('/api/updateKyc/' +this.userId, data)
        .subscribe(result => {  
          this.tenantKyc.share = shareData; 
      });      
    }  

    ngAfterViewInit() {}
}

