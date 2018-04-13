import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';

import { ForgetPwdComponent } from './forgetpwd.component';
import { ForgetPwdRoutes } from './forgetpwd.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ForgetPwdRoutes),
        FormsModule,
        MdModule
    ],
    declarations: [ForgetPwdComponent]
})

export class ForgetPwdModule {}