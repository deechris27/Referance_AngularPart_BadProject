import { Routes } from '@angular/router';

import { KyclistComponent } from './kyclist.component';

export const KyclistRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: KyclistComponent
    }]
}
];
