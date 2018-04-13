import { Routes } from '@angular/router';

import { VisitsComponent } from './visits.component';

export const VisitsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: VisitsComponent
    }]
}
];
