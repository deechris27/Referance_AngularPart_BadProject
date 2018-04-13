import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InviteComponent } from './invite.component';
import { InviteRoutes } from './invite.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(InviteRoutes),
        FormsModule
    ],
    declarations: [InviteComponent]
})

export class InviteModule {}
