import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { SlickModule } from 'ngx-slick';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HomeRoutes),
        FormsModule,
        SlickModule.forRoot()
    ],
    declarations: [HomeComponent]
})

export class HomeModule {}
