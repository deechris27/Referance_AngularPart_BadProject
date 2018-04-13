import { Routes } from '@angular/router';

import { TaglistComponent } from './taglist.component';

export const TaglistRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TaglistComponent
    }]
}
];
