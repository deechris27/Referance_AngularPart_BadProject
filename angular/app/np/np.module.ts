import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NpComponent } from './np.component';
import { NpRoutes } from './np.routing';
import { MdInputModule, MdFormFieldModule, MdDatepickerModule, 
    MdNativeDateModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(NpRoutes),
        FormsModule,
        MdInputModule,
        MdFormFieldModule,
        MdDatepickerModule,
        MdNativeDateModule
    ],
    declarations: [NpComponent]
})

export class NpModule {}
