import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare const $: any;

@Component({
    selector: 'app-deposit-cmp',
    templateUrl: './deposit.component.html',
    styleUrls: ['./deposit.component.css']
})

export class DepositComponent implements OnInit{
    ramountText : any;
    rnumberText : any;

    ngOnInit(){}

    constructor(private http: Http,
                private toastr: ToastrService,
                private router: Router
    ) {}

    upload(form: NgForm) {
        var data = {
            refNo:form.value.rnumber,
            amount:form.value.ramount,
            id: localStorage.getItem("userId")
        }
        
        this.http.post('/api/netbanking', data)
            .toPromise()
            .then(result => {
                this.toastr.success('Payment details updated', 'Flarow!');
                this.router.navigate(['/ph']);
            });
    }
}
