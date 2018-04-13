import { Routes } from '@angular/router';

import { ScComponent } from './sc.component';

export const ScRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ScComponent
    }]
}
];
