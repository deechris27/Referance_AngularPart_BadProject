import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetailsComponent } from './details.component';
import { DetailsRoutes } from './details.routing';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DetailsRoutes),
        FormsModule,
        Ng2CarouselamosModule
    ],
    declarations: [DetailsComponent]
})

export class DetailsModule {}
