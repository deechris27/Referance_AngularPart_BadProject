import { Routes } from '@angular/router';

import { LandlordHomeComponent } from './landlordhome.component';

export const LandlordHomeRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: LandlordHomeComponent
    }]
}
];
