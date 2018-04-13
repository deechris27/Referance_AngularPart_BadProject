import { Routes } from '@angular/router';

import { ProlistComponent } from './prolist.component';

export const ProlistRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ProlistComponent
    }]
}
];
