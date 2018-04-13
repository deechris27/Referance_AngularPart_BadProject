import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TicketsComponent } from './tickets.component';
import { TicketsRoutes } from './tickets.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TicketsRoutes),
        FormsModule
    ],
    declarations: [TicketsComponent]
})

export class TicketsModule {}
