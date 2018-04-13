import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaymentlistComponent } from './paymentlist.component';
import { PaymentlistRoutes } from './paymentlist.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PaymentlistRoutes),
        FormsModule
    ],
    declarations: [PaymentlistComponent]
})

export class PaymentlistModule {}
