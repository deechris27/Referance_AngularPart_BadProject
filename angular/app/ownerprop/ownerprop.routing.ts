import { Routes } from '@angular/router';
import { OwnerpropComponent } from './ownerprop.component';

export const OwnerpropRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: OwnerpropComponent
        }]
    }
];
