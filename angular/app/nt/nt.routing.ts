import { Routes } from '@angular/router';

import { NtComponent } from './nt.component';

export const NtRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: NtComponent
    }]
}
];
