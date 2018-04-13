import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TenantlistComponent } from './tenantlist.component';
import { TenantlistRoutes } from './tenantlist.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TenantlistRoutes),
        FormsModule
    ],
    declarations: [TenantlistComponent]
})

export class TenantlistModule {}
