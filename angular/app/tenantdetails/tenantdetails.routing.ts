import { Routes } from '@angular/router';

import { TenantdetailsComponent } from './tenantdetails.component';

export const TenantdetailsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TenantdetailsComponent
    }]
}
];
