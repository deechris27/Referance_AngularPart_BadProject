import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KyclistComponent } from './kyclist.component';
import { KyclistRoutes } from './kyclist.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(KyclistRoutes),
        FormsModule
    ],
    declarations: [KyclistComponent]
})

export class KyclistModule {}
