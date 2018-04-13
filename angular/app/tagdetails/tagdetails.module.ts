import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TagDetailsComponent } from './tagdetails.component';
import { TagDetailsRoutes } from './tagdetails.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TagDetailsRoutes),
        FormsModule
    ],
    declarations: [TagDetailsComponent]
})

export class TagDetailsModule {}
