import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreatescComponent } from './createsc.component';
import { CreatescRoutes } from './createsc.routing';
import { MdInputModule, MdFormFieldModule, MdDatepickerModule, 
    MdNativeDateModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CreatescRoutes),
        FormsModule,
        MdInputModule,
        MdFormFieldModule,
        MdDatepickerModule,
        MdNativeDateModule
    ],
    declarations: [CreatescComponent],
    providers: [
        {provide: LOCALE_ID, useValue: 'en-IN'},
    ]
})

export class CreatescModule {}
