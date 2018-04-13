import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProlistComponent } from './prolist.component';
import { ProlistRoutes } from './prolist.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProlistRoutes),
        FormsModule
    ],
    declarations: [ProlistComponent]
})

export class ProlistModule {}
