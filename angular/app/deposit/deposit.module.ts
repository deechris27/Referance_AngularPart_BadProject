import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepositComponent } from './deposit.component';
import { DepositRoutes } from './deposit.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DepositRoutes),
        FormsModule
    ],
    declarations: [DepositComponent]
})

export class DepositModule {}
