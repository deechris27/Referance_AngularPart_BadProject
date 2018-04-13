import { Routes } from '@angular/router';

import { TagComponent } from './tag.component';

export const TagRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TagComponent
    }]
}
];
