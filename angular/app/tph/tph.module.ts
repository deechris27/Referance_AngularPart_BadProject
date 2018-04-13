import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TphComponent } from './tph.component';
import { TphRoutes } from './tph.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TphRoutes),
        FormsModule
    ],
    declarations: [TphComponent]
})

export class TphModule {}
