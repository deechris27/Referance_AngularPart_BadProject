import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaglistComponent } from './taglist.component';
import { TaglistRoutes } from './taglist.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TaglistRoutes),
        FormsModule
    ],
    declarations: [TaglistComponent]
})

export class TaglistModule {}
