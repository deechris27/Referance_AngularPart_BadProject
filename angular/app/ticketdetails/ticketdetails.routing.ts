import { Routes } from '@angular/router';

import { TicketdetailsComponent } from './ticketdetails.component';

export const TicketdetailsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TicketdetailsComponent
    }]
}
];
