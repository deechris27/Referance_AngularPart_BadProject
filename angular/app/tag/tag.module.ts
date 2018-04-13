import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MdFormFieldModule,
    MdSelectModule
  } from '@angular/material';


import { TagComponent } from './tag.component';
import { TagRoutes } from './tag.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TagRoutes),
        FormsModule,
        MdFormFieldModule,
        MdSelectModule
    ],
    declarations: [
        TagComponent     
       ],
     exports:[ 
        MdFormFieldModule,
        MdSelectModule]   
})

export class TagModule {}
