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
    selector: 'sc-list',
    templateUrl: 'sc.component.html'
})

export class ScComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;
    private userId: any;
    public visits: any;

    constructor(private router: Router, private http: Http) { }  
    ngOnInit() {
        this.userId = localStorage.getItem("userId");
        this.http.get('/api/schedule/'+this.userId)
        .toPromise()
        .then(result => {
            this.visits = result.json().data.visits;
        });

        this.dataTable = {
            headerRow: [ 'Property Name','Visit Date', 'Status',  'Date', 'Actions' ],
            footerRow: [ 'Property Name','Visit Date', 'Status',  'Date', 'Actions' ],

            dataRows: [
                ['Girls PG hostel', 'Priya', 'booked', '20-08-2017', ''],
                ['2BHK PG hostel', 'Raj', 'booked', '21-08-2017', ''],
                ['3BHK PG hostel', 'Ravi', 'booked', '22-08-2017', '']
            ] 
         };

    }

    ngAfterViewInit() {
        $('#datatables').DataTable({
            'pagingType': 'full_numbers',
            'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
            responsive: true,
            language: {
            search: '_INPUT_',
            searchPlaceholder: 'Search records',
            }

        });

        const table = $('#datatables').DataTable();

        // Edit record
        table.on( 'click', '.edit', function () {
            const $tr = $(this).closest('tr');

            const data = table.row($tr).data();
            alert( 'You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.' );
        } );

        // Delete a record
        table.on( 'click', '.remove', function (e: any) {
            const $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        } );

        // Like record
        table.on( 'click', '.like', function () {
            alert('You clicked on Like button');
        });

        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    }
}

