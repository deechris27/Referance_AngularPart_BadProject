import { Routes } from '@angular/router';

import { OwnerslistComponent } from './ownerslist.component';

export const OwnerslistRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: OwnerslistComponent
    }]
}
];
