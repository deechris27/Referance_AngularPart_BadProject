import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TenantsComponent } from './tenants.component';
import { TenantsRoutes } from './tenants.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TenantsRoutes),
        FormsModule
    ],
    declarations: [TenantsComponent]
})

export class TenantsModule {}
