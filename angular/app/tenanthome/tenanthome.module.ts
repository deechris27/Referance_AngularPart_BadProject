import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TenanthomeComponent } from './tenanthome.component';
import { TenanthomeRoutes } from './tenanthome.routing';
import { SlickModule } from 'ngx-slick';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TenanthomeRoutes),
        FormsModule,
        SlickModule.forRoot()
    ],
    declarations: [TenanthomeComponent]
})

export class TenanthomeModule {}
