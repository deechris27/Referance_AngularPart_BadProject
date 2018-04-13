import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LandingLayoutComponent } from './layouts/landing/landing-layout.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './login/auth-guard.service';
import { LoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutes } from './app.routing';
import { AppErrorHandler } from './app.error-handler';

@NgModule({
    imports:      [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes, {useHash : true}),
        HttpModule,
        SidebarModule,
        NavbarModule,
        HeaderModule,
        FooterModule,
        LoadingModule,
        ToastrModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        LandingLayoutComponent
    ],
    providers: [ AuthService, AuthGuard, { provide: ErrorHandler, useClass: AppErrorHandler }],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
