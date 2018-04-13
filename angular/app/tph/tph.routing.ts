import { Routes } from '@angular/router';

import { TphComponent } from './tph.component';

export const TphRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TphComponent
    }]
}
];
