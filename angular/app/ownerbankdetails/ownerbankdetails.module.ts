import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OwnerBankDetailsComponent } from './ownerbankdetails.component';
import { OwnerBankDetailsRoutes } from './ownerbankdetails.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(OwnerBankDetailsRoutes),
        FormsModule
    ],
    declarations: [OwnerBankDetailsComponent]
})

export class OwnerBankDetailsModule {}
