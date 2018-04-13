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
    selector: 'ownerslist-list',
    templateUrl: 'ownerslist.component.html'
})

export class OwnerslistComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;
    private userId: any;
    public owners: any;

    constructor(private router: Router, private http: Http) { 
        this.userId = localStorage.getItem("userId");
        
        this.http.get('/api/owners')
        .toPromise()
        .then(result => {
            this.owners = result.json().data.ownerData;
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
    ngOnInit() { }

    ngAfterViewInit() {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    }
}

