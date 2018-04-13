import { Routes } from '@angular/router';

import { KycverifyComponent } from './kycverify.component';

export const KycverifyRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: KycverifyComponent
    }]
}
];
