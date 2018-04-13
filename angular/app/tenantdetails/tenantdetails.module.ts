import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TenantdetailsComponent } from './tenantdetails.component';
import { TenantdetailsRoutes } from './tenantdetails.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TenantdetailsRoutes),
        FormsModule
    ],
    declarations: [TenantdetailsComponent]
})

export class TenantdetailsModule {}
