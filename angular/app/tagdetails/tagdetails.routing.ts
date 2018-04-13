import { Routes } from '@angular/router';

import { TagDetailsComponent } from './tagdetails.component';

export const TagDetailsRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: '',
        component: TagDetailsComponent
        }]
    }
];
