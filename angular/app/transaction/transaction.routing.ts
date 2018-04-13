import { Routes } from '@angular/router';

import { TransactionComponent } from './transaction.component';

export const TransactionRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TransactionComponent
    }]
}
];
