import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookingdetailsComponent } from './bookingdetails.component';
import { BookingdetailsRoutes } from './bookingdetails.routing';
import { MdInputModule, MdFormFieldModule, MdDatepickerModule, 
    MdNativeDateModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(BookingdetailsRoutes),
        FormsModule,
        MdInputModule,
        MdFormFieldModule,
        MdDatepickerModule,
        MdNativeDateModule 
    ],
    declarations: [BookingdetailsComponent],
    providers: [
        {provide: LOCALE_ID, useValue: 'en-IN'},
    ]
})

export class BookingdetailsModule {}
