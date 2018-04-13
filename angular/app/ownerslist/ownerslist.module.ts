import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OwnerslistComponent } from './ownerslist.component';
import { OwnerslistRoutes } from './ownerslist.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(OwnerslistRoutes),
        FormsModule
    ],
    declarations: [OwnerslistComponent]
})

export class OwnerslistModule {}
