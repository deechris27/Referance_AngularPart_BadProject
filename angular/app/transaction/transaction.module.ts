import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TransactionComponent } from './transaction.component';
import { TransactionRoutes } from './transaction.routing';
import { MdInputModule, MdFormFieldModule, MdDatepickerModule, 
    MdNativeDateModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TransactionRoutes),
        FormsModule,
        MdInputModule,
        MdFormFieldModule,
        MdDatepickerModule,
        MdNativeDateModule
    ],
    declarations: [TransactionComponent],
    providers: [
        {provide: LOCALE_ID, useValue: 'en-IN'},
    ]
})

export class TransactionModule {}
