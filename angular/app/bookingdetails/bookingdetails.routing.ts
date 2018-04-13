import { Routes } from '@angular/router';

import { BookingdetailsComponent } from './bookingdetails.component';

export const BookingdetailsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: BookingdetailsComponent
    }]
}
];
