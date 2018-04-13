import { Component, OnInit } from '@angular/core';

import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

declare const $: any;

// Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const LANDLORD_ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    },{
        path: '/tag',
        title: 'Add Tenant',
        type: 'link',
        icontype: 'group_add'
    },
    // {
    //     path: '/visits',
    //     title: 'Scheduled Visits',
    //     type: 'link',
    //     icontype: 'apps'
    // },
    {
        path: '/tenants',
        title: 'My Tenants',
        type: 'link',
        icontype: 'account_box'
    },
    {
        path: '/tickets',
        title: 'Tickets',
        type: 'link',
        icontype: 'grid_on'
    },
    {
        path: '/bank',
        title: 'Bank details',
        type: 'link',
        icontype: 'account_balance'
    },
    {
        path: '/invite',
        title: 'Invite Tenant',
        type: 'link',
        icontype: 'sms'
    },{
        path: '/ownerproperties',
        title: 'Properties',
        type: 'link',
        icontype: 'business'
    },{
        path: '/tph',
        title: 'Transaction History',
        type: 'link',
        icontype: 'attach_money'
    }
];

//Menu Items
export const TENANT_ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'dashboard'
},{
    path: '/kyc',
    title: 'KYC Verification',
    type: 'link',
    icontype: 'verified_user'
},
// {
//     path: '/sc',
//     title: 'Schedule',
//     type: 'link',
//     icontype: 'supervisor_account'
// },
{
    path: '/ph',
    title: 'Transaction History',
    type: 'link',
    icontype: 'attach_money'
},
{
    path: '/nt',
    title: 'Tickets',
    type: 'link',
    icontype: 'grid_on'
},
{
    path: '/invite',
    title: 'Invite Owner',
    type: 'link',
    icontype: 'sms'
},{
    path: '/payrent',
    title: 'Pay Rent',
    type: 'link',
    icontype: 'payment'
}
];

//Menu Items
export const ADMIN_ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'dashboard'
},{
    path: '/ownerslist',
    title: 'Owners',
    type: 'link',
    icontype: 'event_seat'
},{
    path: '/tenantlist',
    title: 'Tenants',
    type: 'link',
    icontype: 'account_box'
},,{
    path: '/paymentlist',
    title: 'Payments',
    type: 'link',
    icontype: 'payment'
},{
    path: '/taglist',
    title: 'Tag Requests',
    type: 'link',
    icontype: 'group_add'
},{
    path: '/prolist',
    title: 'Properties',
    type: 'link',
    icontype: 'home'
},
/*{
    path: '/pimglist',
    title: 'Property Images',
    type: 'link',
    icontype: 'grid_on'
},*/
{
    path: '/bookinglist',
    title: 'Bookings',
    type: 'link',
    icontype: 'book'
},{
    path: '/sclist',
    title: 'Scheduled Visits',
    type: 'link',
    icontype: 'supervisor_account'
},{
    path: '/kyclist',
    title: 'KYC Request',
    type: 'link',
    icontype: 'verified_user'
}
];

export const ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'dashboard'
},{
    path: '/ownerslist',
    title: 'Owners',
    type: 'link',
    icontype: 'event_seat'
},{
    path: '/tenantlist',
    title: 'Tenants',
    type: 'link',
    icontype: 'account_box'
},{
    path: '/paymentlist',
    title: 'Payments',
    type: 'link',
    icontype: 'payment'
},{
    path: '/taglist',
    title: 'Tag Requests',
    type: 'link',
    icontype: 'group_add'
},{
    path: '/prolist',
    title: 'Properties',
    type: 'link',
    icontype: 'home'
},
/*{
    path: '/pimglist',
    title: 'Property Images',
    type: 'link',
    icontype: 'grid_on'
},*/
{
    path: '/bookinglist',
    title: 'Bookings',
    type: 'link',
    icontype: 'book'
},{
    path: '/sclist',
    title: 'Scheduled Visits',
    type: 'link',
    icontype: 'supervisor_account'
},{
    path: '/kyclist',
    title: 'KYC Request',
    type: 'link',
    icontype: 'verified_user'
},{
    path: '/kyc',
    title: 'KYC Verification',
    type: 'link',
    icontype: 'verified_user'
},
// {
//     path: '/sc',
//     title: 'Schedule',
//     type: 'link',
//     icontype: 'supervisor_account'
// },
{
    path: '/ph',
    title: 'Transaction History',
    type: 'link',
    icontype: 'attach_money'
},
{
    path: '/nt',
    title: 'Tickets',
    type: 'link',
    icontype: 'grid_on'
},
{
    path: '/invite',
    title: 'Invite',
    type: 'link',
    icontype: 'sms'
},{
    path: '/payrent',
    title: 'Pay Rent',
    type: 'link',
    icontype: 'payment'
},{
    path: '/tag',
    title: 'Add Tenant',
    type: 'link',
    icontype: 'group_add'
},
// {
//     path: '/visits',
//     title: 'Scheduled Visits',
//     type: 'link',
//     icontype: 'apps'
// },
{
    path: '/tenants',
    title: 'My Tenants',
    type: 'link',
    icontype: 'account_box'
},
{
    path: '/tickets',
    title: 'Tickets',
    type: 'link',
    icontype: 'grid_on'
},
{
    path: '/bank',
    title: 'Bank details',
    type: 'link',
    icontype: 'account_balance'
},
{
    path: '/ownerproperties',
    title: 'Properties',
    type: 'link',
    icontype: 'business'
},{
    path: '/tph',
    title: 'Transaction History',
    type: 'link',
    icontype: 'attach_money'
}
];

@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    
    constructor(private authService: AuthService, private router: Router) { 
        
    }    

    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        let isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
           // if we are on windows OS we activate the perfectScrollbar function
            const $sidebar = $('.sidebar-wrapper');
            $sidebar.perfectScrollbar();
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        } else {
            $('html').addClass('perfect-scrollbar-off');
        }

        var currentUserType = JSON.parse(localStorage.getItem('currentUserType'));
        
        if(currentUserType == 1){
            this.menuItems = LANDLORD_ROUTES.filter(menuItem => menuItem);
        }else if(currentUserType == 0){
            this.menuItems = TENANT_ROUTES.filter(menuItem => menuItem);
        }else if(currentUserType == 2){
            this.menuItems = ADMIN_ROUTES.filter(menuItem => menuItem);
        }
        
    }

    onLogout(){
        this.authService.logout();
        this.router.navigate(['/home']);
    }


}
