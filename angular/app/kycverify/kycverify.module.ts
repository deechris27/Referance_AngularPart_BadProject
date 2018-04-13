import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KycverifyComponent } from './kycverify.component';
import { KycverifyRoutes } from './kycverify.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(KycverifyRoutes),
        FormsModule
    ],
    declarations: [KycverifyComponent]
})

export class KycverifyModule {}
