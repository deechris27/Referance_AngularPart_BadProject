import { Routes } from '@angular/router';

import { BookinglistComponent } from './bookinglist.component';

export const BookinglistRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: BookinglistComponent
    }]
}
];
