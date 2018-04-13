import { Routes } from '@angular/router';

import { PropertylistComponent } from './propertylist.component';

export const PropertylistRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: PropertylistComponent
    }]
}
];
