import { Routes } from '@angular/router';

import { CreatescComponent } from './createsc.component';

export const CreatescRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: CreatescComponent
    }]
}
];
