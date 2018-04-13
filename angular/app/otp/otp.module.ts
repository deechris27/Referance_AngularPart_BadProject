import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';

import { OtpComponent } from './otp.component';
import { OtpRoutes } from './otp.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(OtpRoutes),
        FormsModule,
        MdModule
    ],
    declarations: [OtpComponent]
})

export class OtpModule {}