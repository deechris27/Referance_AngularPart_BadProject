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
    selector: 'ticket-list',
    templateUrl: 'tickets.component.html'
})

export class TicketsComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;
    private userId: any;
    public tickets: any;

    constructor(private router: Router, private http: Http) { 
        this.userId = localStorage.getItem("userId");
        
        this.http.get('/api/mytickets/'+this.userId)
            .toPromise()
            .then(result => {
                this.tickets = result.json().data.tickets;
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

    ngOnInit() {}

    ngAfterViewInit() {
        $('[rel="tooltip"]').tooltip();
    }
}

