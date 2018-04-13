import { Routes } from '@angular/router';

import { TenantlistComponent } from './tenantlist.component';

export const TenantlistRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TenantlistComponent
    }]
}
];
