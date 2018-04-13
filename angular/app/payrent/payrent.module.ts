import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PayrentComponent } from './payrent.component';
import { PayrentRoutes } from './payrent.routing';
import { MdInputModule, MdFormFieldModule, MdDatepickerModule, 
    MdNativeDateModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PayrentRoutes),
        FormsModule,
        MdInputModule,
        MdFormFieldModule,
        MdDatepickerModule,
        MdNativeDateModule
    ],
    declarations: [PayrentComponent],
    providers: [
        {provide: LOCALE_ID, useValue: 'en-IN'},
    ]
})

export class PayrentModule {}
