import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PimglistComponent } from './pimglist.component';
import { PimglistRoutes } from './pimglist.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PimglistRoutes),
        FormsModule
    ],
    declarations: [PimglistComponent]
})

export class PimglistModule {}
