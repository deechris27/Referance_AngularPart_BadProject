import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;
declare var swal: any;

@Component({
    selector: 'taglist-list',
    templateUrl: 'taglist.component.html'
})

export class TaglistComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;
    public tagList: any;
    public detailsData : any;

    constructor(private router: Router, private http: Http) { 
        
        this.http.get('/api/tagRequest')
        .toPromise()
        .then(result => {
            this.tagList = result.json().data.tagging;
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

    tagTenant(id:any){
        let userId = localStorage.getItem("userId");
        this.http.post('/api/tagTenant/' + id + '/user/' + userId, '')
        .toPromise()
        .then(result => {
            let tagResult = result.json().data.tagging;
            swal({
                title: 'Tag Tenant!',
                text: 'Tenant tagged to the property',
                type: 'success',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            }).then(function() {
                this.http.get('/api/tagRequest')
                .toPromise()
                .then(result => {
                    this.tagList = result.json().data.tagging;
                });
            });
        });
    }

    invite(id:any){
        this.http.get('/api/invite/' + id)
        .toPromise()
        .then(result => {
            swal({
                title: 'Invite Tenant!',
                text: 'Tag invitation sent tenant',
                type: 'success',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            }).then(function() {

            });
        });
    }

}

