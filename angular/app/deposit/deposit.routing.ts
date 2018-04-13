import { Routes } from '@angular/router';

import { DepositComponent } from './deposit.component';

export const DepositRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: DepositComponent
    }]
}
];
