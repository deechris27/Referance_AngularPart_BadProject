import { Routes } from '@angular/router';

import { TenanthomeComponent } from './tenanthome.component';

export const TenanthomeRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TenanthomeComponent
    }]
}
];
