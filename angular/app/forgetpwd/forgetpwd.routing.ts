import { Routes } from '@angular/router';

import { ForgetPwdComponent } from './forgetpwd.component';

export const ForgetPwdRoutes: Routes = [
    {

      path: '',
        children: [ {
            path: '',
            component: ForgetPwdComponent
        }]
    }
];
