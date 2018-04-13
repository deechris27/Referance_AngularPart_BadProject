import { Routes } from '@angular/router';

import { PaymentlistComponent } from './paymentlist.component';

export const PaymentlistRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: PaymentlistComponent
    }]
}
];
