import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScComponent } from './sc.component';
import { ScRoutes } from './sc.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ScRoutes),
        FormsModule
    ],
    declarations: [ScComponent]
})

export class ScModule {}
