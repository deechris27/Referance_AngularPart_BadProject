import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VisitsComponent } from './visits.component';
import { VisitsRoutes } from './visits.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(VisitsRoutes),
        FormsModule
    ],
    declarations: [VisitsComponent]
})

export class VisitsModule {}
