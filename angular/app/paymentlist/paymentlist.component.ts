import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, } from '@angular/router';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
    selector: 'paymentlist-list',
    templateUrl: 'paymentlist.component.html'
})

export class PaymentlistComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;
    private userId: any;
    public payments: any;
    public paymentStatusVal: any;
    private paymentId : any;
    private statusType : any;

    constructor(private router: Router, private http: Http, private toastr: ToastrService,) { 
        this.userId = localStorage.getItem("userId");
        
        this.http.get('/api/payment')
        .toPromise()
        .then(result => {
            this.payments = result.json().data.payments;
        });

        setTimeout(
            function(){
                $(function(){
                     const table = $('#datatables').DataTable({
                        'pagingType': 'full_numbers',
                        'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
                        responsive: true,
                        language: {
                        search: '_INPUT_',
                        searchPlaceholder: 'Search records',
                        }
                    });
                });

            }, 1000
        );        
    }  
    ngOnInit() { 
        $.material.options.autofill = true;
        $.material.init();
    }

    ngAfterViewInit() {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    }

    onChange(payId, statusType){
        this.paymentId = payId;
        this.statusType = statusType;

        $('#statusModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    }

    onStatusChange(stat){
        this.paymentStatusVal = stat;
    }

    onSubmit(form:NgForm){
        var data = {
            paymentStatus : '',
            id : '',
            flarowStatus : ''
        };
        data.id = this.paymentId;
        if(this.statusType === 'P'){
            data.paymentStatus = this.paymentStatusVal;
        }else{
            data.flarowStatus = this.paymentStatusVal;
        }
        
        this.http.post('/api/paymentStatus', data)
            .toPromise()
            .then(result => {
                this.toastr.success('Status updated', 'Flarow!');
            });
    }

}

