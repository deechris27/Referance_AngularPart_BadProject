import { Routes } from '@angular/router';

import { OtpComponent } from './otp.component';

export const OtpRoutes: Routes = [
    {

      path: '',
        children: [ {
            path: '',
            component: OtpComponent
        }]
    }
];
