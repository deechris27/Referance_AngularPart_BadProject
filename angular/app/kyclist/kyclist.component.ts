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
    selector: 'kyclist-list',
    templateUrl: 'kyclist.component.html'
})

export class KyclistComponent implements AfterViewInit {
    public dataTable: DataTable;
    private userId: any;
    public kycList: any;

    constructor(private router: Router, private http: Http) { 
                
        this.http.get('/api/kycList')
        .toPromise()
        .then(result => {
            this.kycList = result.json().data.kycList;
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

    ngAfterViewInit() {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    }
}

