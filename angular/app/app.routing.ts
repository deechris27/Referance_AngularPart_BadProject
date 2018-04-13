import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LandingLayoutComponent } from './layouts/landing/landing-layout.component';
import { AuthGuard } from './login/auth-guard.service';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                canActivate: [AuthGuard]
            }, {
                path: 'property',
                loadChildren: './np/np.module#NpModule',
                canActivate: [AuthGuard]
            }, {
                path: 'tickets',
                loadChildren: './tickets/tickets.module#TicketsModule',
                canActivate: [AuthGuard]
            }, {
                path: 'tenants',
                loadChildren: './tenants/tenants.module#TenantsModule',
                canActivate: [AuthGuard]
            }, {
                path: 'user',
                loadChildren: './userpage/user.module#UserModule',
                canActivate: [AuthGuard]
            }, {
                path: 'visits',
                loadChildren: './visits/visits.module#VisitsModule',
                canActivate: [AuthGuard]
            }, {
                path: 'sc',
                loadChildren: './sc/sc.module#ScModule',
                canActivate: [AuthGuard]
            }, {
                path: 'ph',
                loadChildren: './ph/ph.module#PhModule',
                canActivate: [AuthGuard]
            }, {
                path: 'kyc',
                loadChildren: './kyc/kyc.module#KycModule',
                canActivate: [AuthGuard]
            }, {
                path: 'nt',
                loadChildren: './nt/nt.module#NtModule',
                canActivate: [AuthGuard]
            }, {
                path: 'property/:id',
                loadChildren: './np/np.module#NpModule',
                canActivate: [AuthGuard]
            }, {
                path: 'visitor-details/:id',
                loadChildren: './tenantdetails/tenantdetails.module#TenantdetailsModule',
                canActivate: [AuthGuard]
            }, {
                path: 'booking-details/:id',
                loadChildren: './bookingdetails/bookingdetails.module#BookingdetailsModule',
                canActivate: [AuthGuard]
            }, {
                path: 'ticket-details/:id',
                loadChildren: './ticketdetails/ticketdetails.module#TicketdetailsModule',
                canActivate: [AuthGuard]
            }, {
                path: 'bookinglist',
                loadChildren: './bookinglist/bookinglist.module#BookinglistModule',
                canActivate: [AuthGuard]
            }, {
                path: 'ownerslist',
                loadChildren: './ownerslist/ownerslist.module#OwnerslistModule',
                canActivate: [AuthGuard]
            }, {
                path: 'pimglist',
                loadChildren: './pimglist/pimglist.module#PimglistModule',
                canActivate: [AuthGuard]
            }, {
                path: 'prolist',
                loadChildren: './prolist/prolist.module#ProlistModule',
                canActivate: [AuthGuard]
            }, {
                path: 'sclist',
                loadChildren: './sclist/sclist.module#SclistModule',
                canActivate: [AuthGuard]
            }, {
                path: 'tenantlist',
                loadChildren: './tenantlist/tenantlist.module#TenantlistModule',
                canActivate: [AuthGuard]
            }, {
                path: 'createsc/:id/:ownerId',
                loadChildren: './createsc/createsc.module#CreatescModule',
                canActivate: [AuthGuard]
            }, {
                path: 'kyclist',
                loadChildren: './kyclist/kyclist.module#KyclistModule',
                canActivate: [AuthGuard]
            }, {
                path: 'ownerdetails/:id/:updId',
                loadChildren: './userpage/user.module#UserModule',
                canActivate: [AuthGuard]
            }, {
                path: 'invite',
                loadChildren: './invite/invite.module#InviteModule',
                canActivate: [AuthGuard]
            }, {
                path: 'kycverify/:id',
                loadChildren: './kycverify/kycverify.module#KycverifyModule',
                canActivate: [AuthGuard]
            }, {
                path: 'kycview/:id/:srcId',
                loadChildren: './kycverify/kycverify.module#KycverifyModule',
                canActivate: [AuthGuard]
            },{
                path: 'tenantdetails/:id/:updId',
                loadChildren: './userpage/user.module#UserModule',
                canActivate: [AuthGuard]
            }, {
                path: 'payrent',
                loadChildren: './payrent/payrent.module#PayrentModule',
                canActivate: [AuthGuard]
            }, {
                path: 'payresponse',
                loadChildren: './transaction/transaction.module#TransactionModule',
                canActivate: [AuthGuard]
            }, {
                path: 'ownerproperties',
                loadChildren: './ownerprop/ownerprop.module#OwnerpropModule',
                canActivate: [AuthGuard]
            }, {
                path: 'tph',
                loadChildren: './tph/tph.module#TphModule',
                canActivate: [AuthGuard]
            }, {
                path: 'tag',
                loadChildren: './tag/tag.module#TagModule',
                canActivate: [AuthGuard]
            }, {
                path: 'taglist',
                loadChildren: './taglist/taglist.module#TaglistModule',
                canActivate: [AuthGuard]
            }, {
                path: 'tagdetails/:id',
                loadChildren: './tagdetails/tagdetails.module#TagDetailsModule',
                canActivate: [AuthGuard]
            }, {
                path: 'tagProp/:id/:name',
                loadChildren: './tag/tag.module#TagModule',
                canActivate: [AuthGuard]
            }, {
                path: 'bank',
                loadChildren: './ownerbankdetails/ownerbankdetails.module#OwnerBankDetailsModule',
                canActivate: [AuthGuard]
            }, {
                path: 'deposit',
                loadChildren: './deposit/deposit.module#DepositModule',
                canActivate: [AuthGuard]
            }, {
                path: 'paymentlist',
                loadChildren: './paymentlist/paymentlist.module#PaymentlistModule',
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                loadChildren: './login/login.module#LoginModule'
            },
            {
                path: 'register',
                loadChildren: './register/register.module#RegisterModule'
            },
            {
                path: 'otp',
                loadChildren: './otp/otp.module#OtpModule'
            },
            {
                path: 'forget',
                loadChildren: './forgetpwd/forgetpwd.module#ForgetPwdModule'
            }            
        ]
    },
    {
        path: '',
        component: LandingLayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule',
                //canActivate: [AuthGuard]
            },
            {
                path: 'tenant',
                loadChildren: './tenanthome/tenanthome.module#TenanthomeModule',
                //canActivate: [AuthGuard]
            },
            {
                path: 'landlord',
                loadChildren: './landlordhome/landlordhome.module#LandlordHomeModule',
                //canActivate: [AuthGuard]
            },
            {
                path: 'propdetail/:id',
                loadChildren: './details/details.module#DetailsModule',
                //canActivate: [AuthGuard]
            },
            {
                path: 'properties',
                loadChildren: './propertylist/propertylist.module#PropertylistModule',
                //canActivate: [AuthGuard]
            }
        ]
    }
];
