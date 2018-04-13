import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SclistComponent } from './sclist.component';
import { SclistRoutes } from './sclist.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SclistRoutes),
        FormsModule
    ],
    declarations: [SclistComponent]
})

export class SclistModule {}
