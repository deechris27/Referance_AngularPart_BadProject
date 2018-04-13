import { Routes } from '@angular/router';

import { SclistComponent } from './sclist.component';

export const SclistRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: SclistComponent
    }]
}
];
