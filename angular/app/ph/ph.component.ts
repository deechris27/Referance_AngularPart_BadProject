import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
    selector: 'ph-list',
    templateUrl: 'ph.component.html'
})

export class PhComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;
    paymentHistory : any;

    constructor(private router: Router, private http: Http) { 
        
        this.http.get('/api/paymenthistory/' + localStorage.getItem('userId'))
        .toPromise()
        .then(result => {
            this.paymentHistory = result.json().data.payments;
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
    }

    ngAfterViewInit() {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    }
}

