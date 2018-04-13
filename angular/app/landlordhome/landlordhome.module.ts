import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandlordHomeComponent } from './landlordhome.component';
import { LandlordHomeRoutes } from './landlordhome.routing';
import { SlickModule } from 'ngx-slick';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LandlordHomeRoutes),
        FormsModule,
        SlickModule.forRoot()
    ],
    declarations: [LandlordHomeComponent]
})

export class LandlordHomeModule {}
