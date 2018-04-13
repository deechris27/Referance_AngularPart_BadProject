import { Routes } from '@angular/router';

import { PimglistComponent } from './pimglist.component';

export const PimglistRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: PimglistComponent
    }]
}
];
