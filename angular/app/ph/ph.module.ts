import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhComponent } from './ph.component';
import { PhRoutes } from './ph.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PhRoutes),
        FormsModule
    ],
    declarations: [PhComponent]
})

export class PhModule {}
