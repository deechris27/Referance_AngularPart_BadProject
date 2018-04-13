import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

declare const $: any;
declare var swal: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit, AfterViewInit {

    private userId: any;
    public property: any;
    public tit: any;
    public userType : any;
    public ownerData : any;
    public thisMonth : any;

    monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
   constructor(private router: Router, private http: Http) { 
        this.ownerData = {
            'rent':0,
            'tickets':0,
            'visits':0,
            'tenants':0,
            'registration':0,
            'owners':0
        }

        let d = new Date();
        this.thisMonth = this.monthNames[d.getMonth()];
   }  

    onClick(){
        this.router.navigateByUrl('/property');
    }

    ngOnInit(){
        $.material.options.autofill = true;
        $.material.init();

        this.userId = localStorage.getItem("userId");

        let apiUrl: any;
        this.userType = JSON.parse(localStorage.getItem('currentUserType'));

        console.log(this.userType);

        if(this.userType == 2){
            apiUrl = '/api/adminDashboardInfo';
        }else if(this.userType == 1){
            apiUrl = '/api/ownerDashboardInfo/'+this.userId;
        }

        if(this.userType != 0){
            console.log(this.userType);
            this.http.get(apiUrl)
            .toPromise()
            .then(result => {
                this.ownerData = result.json().data.ownerData;
            });
        }

        
        this.http.get('/api/propertyByApproval/'+this.userId)
        .toPromise()
        .then(result => {
            this.property = result.json().data.property;
        });
    }


    onDelete(id){
        var self = this;
        swal({
            title: 'Are you sure?',
            text: 'You want to remove this property?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes, delete it!',
            buttonsStyling: false
        }).then(function() {

            self.removeProp(id);
            swal({
                title: 'Deleted!',
                text: 'Property has been deleted.',
                type: 'success',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            });
        });  

    }

    removeProp(id){
        this.http.delete('/api/property/' + id)
        .toPromise()
        .then(result => {
            this.http.get('/api/property/'+this.userId)
                .toPromise()
                .then(result => {
                    this.property = result.json().data.property;
            });
        });
    }

   ngAfterViewInit() {
       const breakCards = true;
       if (breakCards === true) {
           // We break the cards headers if there is too much stress on them :-)
           $('[data-header-animation="true"]').each(function(){
               const $fix_button = $(this);
               const $card = $(this).parent('.card');
               $card.find('.fix-broken-card').click(function(){
                   const $header = $(this).parent().parent().siblings('.card-header, .card-image');
                   $header.removeClass('hinge').addClass('fadeInDown');

                   $card.attr('data-count', 0);

                   setTimeout(function(){
                       $header.removeClass('fadeInDown animate');
                   }, 480);
               });

               $card.mouseenter(function(){
                   const $this = $(this);
                   const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                   $this.attr('data-count', hover_count);
                   if (hover_count >= 20) {
                       $(this).children('.card-header, .card-image').addClass('hinge animated');
                   }
               });
           });
       }
       //  Activate the tooltips
       $('[rel="tooltip"]').tooltip();
   }
}