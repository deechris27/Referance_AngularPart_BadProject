import { Routes } from '@angular/router';

import { PayrentComponent } from './payrent.component';

export const PayrentRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: PayrentComponent
    }]
}
];
