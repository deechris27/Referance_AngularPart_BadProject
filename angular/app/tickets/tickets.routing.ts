import { Routes } from '@angular/router';

import { TicketsComponent } from './tickets.component';

export const TicketsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TicketsComponent
    }]
}
];
