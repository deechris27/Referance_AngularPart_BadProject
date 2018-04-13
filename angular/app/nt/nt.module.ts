import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NtComponent } from './nt.component';
import { NtRoutes } from './nt.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(NtRoutes),
        FormsModule
    ],
    declarations: [NtComponent]
})

export class NtModule {}
