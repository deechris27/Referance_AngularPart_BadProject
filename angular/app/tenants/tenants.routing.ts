import { Routes } from '@angular/router';

import { TenantsComponent } from './tenants.component';

export const TenantsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TenantsComponent
    }]
}
];
