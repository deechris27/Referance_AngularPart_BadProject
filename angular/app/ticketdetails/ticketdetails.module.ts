import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TicketdetailsComponent } from './ticketdetails.component';
import { TicketdetailsRoutes } from './ticketdetails.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TicketdetailsRoutes),
        FormsModule
    ],
    declarations: [TicketdetailsComponent]
})

export class TicketdetailsModule {}
