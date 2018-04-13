import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';

import { OwnerpropComponent } from './ownerprop.component';
import { OwnerpropRoutes } from './ownerprop.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(OwnerpropRoutes),
        FormsModule,
        MdModule
    ],
    declarations: [OwnerpropComponent]
})

export class OwnerpropModule {}
