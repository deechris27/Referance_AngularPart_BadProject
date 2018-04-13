import { Routes } from '@angular/router';

import { NpComponent } from './np.component';

export const NpRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: NpComponent
    }]
}
];
