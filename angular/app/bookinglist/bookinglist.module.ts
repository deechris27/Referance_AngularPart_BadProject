import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookinglistComponent } from './bookinglist.component';
import { BookinglistRoutes } from './bookinglist.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(BookinglistRoutes),
        FormsModule
    ],
    declarations: [BookinglistComponent]
})

export class BookinglistModule {}
