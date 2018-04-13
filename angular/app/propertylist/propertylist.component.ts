import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

declare const $: any;

declare interface Property{
    title?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
    latitude?:string;
    longtitude?:string;
    about?: string;
    pImage?: any;
    owner_id?:any;
    id?:any;
    details?:string;
}

@Component({
    selector: 'propertylist',
    templateUrl: 'propertylist.component.html',
    styleUrls:['propertylist.component.css']
})

export class PropertylistComponent implements OnInit, AfterViewInit {

    property : Property[];
    private sub: any;
    items : any;

    constructor(private router: ActivatedRoute, private http: Http) {

        this.items = [1];
     } 

    ngOnInit() {
        $.material.options.autofill = true;
        $.material.init();

        this.property = [{
            title:'',
            address:'',
            city:'',
            state:'',
            country:'',
            zip:'',
            latitude:'',
            longtitude:'',
            about:'',
            owner_id:'',
            id:'',
            details:''
        }]


        this.http.get('/api/property')
        .toPromise()
        .then(result => {
            this.property = result.json().data.result;
        });

    }

    ngAfterViewInit() {
        $('[rel="tooltip"]').tooltip();
    }
}

