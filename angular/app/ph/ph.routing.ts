import { Routes } from '@angular/router';

import { PhComponent } from './ph.component';

export const PhRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: PhComponent
    }]
}
];
