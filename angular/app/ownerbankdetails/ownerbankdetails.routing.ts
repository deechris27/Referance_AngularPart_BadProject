import { Routes } from '@angular/router';

import { OwnerBankDetailsComponent } from './ownerbankdetails.component';

export const OwnerBankDetailsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: OwnerBankDetailsComponent
    }]
}
];
