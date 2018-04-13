import { Routes } from '@angular/router';

import { InviteComponent } from './invite.component';

export const InviteRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: InviteComponent
    }]
}
];
