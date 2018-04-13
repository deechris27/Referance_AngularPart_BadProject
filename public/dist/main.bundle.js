webpackJsonp(["main"],{

/***/ "../../../../../angular/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bookingdetails/bookingdetails.module": [
		"../../../../../angular/app/bookingdetails/bookingdetails.module.ts",
		"common",
		"bookingdetails.module"
	],
	"./bookinglist/bookinglist.module": [
		"../../../../../angular/app/bookinglist/bookinglist.module.ts",
		"bookinglist.module"
	],
	"./createsc/createsc.module": [
		"../../../../../angular/app/createsc/createsc.module.ts",
		"common",
		"createsc.module"
	],
	"./dashboard/dashboard.module": [
		"../../../../../angular/app/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./deposit/deposit.module": [
		"../../../../../angular/app/deposit/deposit.module.ts",
		"deposit.module"
	],
	"./details/details.module": [
		"../../../../../angular/app/details/details.module.ts",
		"common",
		"details.module"
	],
	"./forgetpwd/forgetpwd.module": [
		"../../../../../angular/app/forgetpwd/forgetpwd.module.ts",
		"forgetpwd.module"
	],
	"./home/home.module": [
		"../../../../../angular/app/home/home.module.ts",
		"common",
		"home.module"
	],
	"./invite/invite.module": [
		"../../../../../angular/app/invite/invite.module.ts",
		"invite.module"
	],
	"./kyc/kyc.module": [
		"../../../../../angular/app/kyc/kyc.module.ts",
		"kyc.module"
	],
	"./kyclist/kyclist.module": [
		"../../../../../angular/app/kyclist/kyclist.module.ts",
		"kyclist.module"
	],
	"./kycverify/kycverify.module": [
		"../../../../../angular/app/kycverify/kycverify.module.ts",
		"kycverify.module"
	],
	"./landlordhome/landlordhome.module": [
		"../../../../../angular/app/landlordhome/landlordhome.module.ts",
		"common",
		"landlordhome.module"
	],
	"./login/login.module": [
		"../../../../../angular/app/login/login.module.ts",
		"login.module"
	],
	"./np/np.module": [
		"../../../../../angular/app/np/np.module.ts",
		"np.module",
		"common"
	],
	"./nt/nt.module": [
		"../../../../../angular/app/nt/nt.module.ts",
		"nt.module"
	],
	"./otp/otp.module": [
		"../../../../../angular/app/otp/otp.module.ts",
		"otp.module"
	],
	"./ownerbankdetails/ownerbankdetails.module": [
		"../../../../../angular/app/ownerbankdetails/ownerbankdetails.module.ts",
		"ownerbankdetails.module"
	],
	"./ownerprop/ownerprop.module": [
		"../../../../../angular/app/ownerprop/ownerprop.module.ts",
		"ownerprop.module"
	],
	"./ownerslist/ownerslist.module": [
		"../../../../../angular/app/ownerslist/ownerslist.module.ts",
		"ownerslist.module"
	],
	"./paymentlist/paymentlist.module": [
		"../../../../../angular/app/paymentlist/paymentlist.module.ts",
		"paymentlist.module"
	],
	"./payrent/payrent.module": [
		"../../../../../angular/app/payrent/payrent.module.ts",
		"common",
		"payrent.module"
	],
	"./ph/ph.module": [
		"../../../../../angular/app/ph/ph.module.ts",
		"ph.module"
	],
	"./pimglist/pimglist.module": [
		"../../../../../angular/app/pimglist/pimglist.module.ts",
		"pimglist.module"
	],
	"./prolist/prolist.module": [
		"../../../../../angular/app/prolist/prolist.module.ts",
		"prolist.module"
	],
	"./propertylist/propertylist.module": [
		"../../../../../angular/app/propertylist/propertylist.module.ts",
		"common",
		"propertylist.module"
	],
	"./register/register.module": [
		"../../../../../angular/app/register/register.module.ts",
		"register.module"
	],
	"./sc/sc.module": [
		"../../../../../angular/app/sc/sc.module.ts",
		"sc.module"
	],
	"./sclist/sclist.module": [
		"../../../../../angular/app/sclist/sclist.module.ts",
		"sclist.module"
	],
	"./tag/tag.module": [
		"../../../../../angular/app/tag/tag.module.ts",
		"common",
		"tag.module"
	],
	"./tagdetails/tagdetails.module": [
		"../../../../../angular/app/tagdetails/tagdetails.module.ts",
		"tagdetails.module"
	],
	"./taglist/taglist.module": [
		"../../../../../angular/app/taglist/taglist.module.ts",
		"taglist.module"
	],
	"./tenantdetails/tenantdetails.module": [
		"../../../../../angular/app/tenantdetails/tenantdetails.module.ts",
		"tenantdetails.module"
	],
	"./tenanthome/tenanthome.module": [
		"../../../../../angular/app/tenanthome/tenanthome.module.ts",
		"common",
		"tenanthome.module"
	],
	"./tenantlist/tenantlist.module": [
		"../../../../../angular/app/tenantlist/tenantlist.module.ts",
		"tenantlist.module"
	],
	"./tenants/tenants.module": [
		"../../../../../angular/app/tenants/tenants.module.ts",
		"tenants.module"
	],
	"./ticketdetails/ticketdetails.module": [
		"../../../../../angular/app/ticketdetails/ticketdetails.module.ts",
		"ticketdetails.module"
	],
	"./tickets/tickets.module": [
		"../../../../../angular/app/tickets/tickets.module.ts",
		"tickets.module"
	],
	"./tph/tph.module": [
		"../../../../../angular/app/tph/tph.module.ts",
		"tph.module"
	],
	"./transaction/transaction.module": [
		"../../../../../angular/app/transaction/transaction.module.ts",
		"common",
		"transaction.module"
	],
	"./userpage/user.module": [
		"../../../../../angular/app/userpage/user.module.ts",
		"user.module"
	],
	"./visits/visits.module": [
		"../../../../../angular/app/visits/visits.module.ts",
		"visits.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../angular/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../angular/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../angular/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(elRef) {
        this.elRef = elRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        $.material.init();
        var body = document.getElementsByTagName('body')[0];
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            body.classList.add('perfect-scrollbar-on');
        }
        else {
            body.classList.add('perfect-scrollbar-off');
        }
        $.material.init();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-my-app',
            template: __webpack_require__("../../../../../angular/app/app.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../angular/app/app.error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppErrorHandler = (function () {
    function AppErrorHandler(ngZone, injector) {
        this.ngZone = ngZone;
        this.injector = injector;
    }
    Object.defineProperty(AppErrorHandler.prototype, "toastr", {
        get: function () {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]);
        },
        enumerable: true,
        configurable: true
    });
    AppErrorHandler.prototype.handleError = function (error) {
        console.log(error);
        if (String(error).indexOf('cancel') === -1) {
            var errorTitle = 'Error';
            var errMsg = 'An unexpected error ocurred';
            if (String(error).indexOf('409') !== -1 &&
                String(error).indexOf('addProperty') !== -1) {
                errMsg = "Property already exists";
                errorTitle = "Duplicate property";
            }
            else if (String(error).indexOf('422') !== -1 &&
                String(error).indexOf('Unprocessable') !== -1) {
                errMsg = "The email has already been taken";
                errorTitle = "User already exists";
            }
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
                console.log(error);
                var contentType = error.headers.get("Content-Type");
                if (contentType && contentType == "application/json") {
                    var body = error.json();
                    console.log(body);
                    //errorTitle = body.message[0] || errorTitle;
                    errorTitle = error.statusText;
                    errMsg = body.errors.message[0];
                }
                else {
                    errMsg = error.text();
                }
            }
            this.toastr.error(errMsg, errorTitle);
        }
    };
    AppErrorHandler = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */]) === "function" && _b || Object])
    ], AppErrorHandler);
    return AppErrorHandler;
    var _a, _b;
}());

//# sourceMappingURL=app.error-handler.js.map

/***/ }),

/***/ "../../../../../angular/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../angular/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_module__ = __webpack_require__("../../../../../angular/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_header_header_module__ = __webpack_require__("../../../../../angular/app/shared/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_footer_footer_module__ = __webpack_require__("../../../../../angular/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_navbar_navbar_module__ = __webpack_require__("../../../../../angular/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../angular/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../angular/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_landing_landing_layout_component__ = __webpack_require__("../../../../../angular/app/layouts/landing/landing-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_auth_service__ = __webpack_require__("../../../../../angular/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_auth_guard_service__ = __webpack_require__("../../../../../angular/app/login/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routing__ = __webpack_require__("../../../../../angular/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_error_handler__ = __webpack_require__("../../../../../angular/app/app.error-handler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // this is needed!


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_routing__["a" /* AppRoutes */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_navbar_navbar_module__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_loading__["a" /* LoadingModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_toastr__["a" /* ToastrModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layouts_landing_landing_layout_component__["a" /* LandingLayoutComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__login_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__login_auth_guard_service__["a" /* AuthGuard */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_19__app_error_handler__["a" /* AppErrorHandler */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../angular/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../angular/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../angular/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_landing_landing_layout_component__ = __webpack_require__("../../../../../angular/app/layouts/landing/landing-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__ = __webpack_require__("../../../../../angular/app/login/auth-guard.service.ts");




var AppRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'property',
                loadChildren: './np/np.module#NpModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'tickets',
                loadChildren: './tickets/tickets.module#TicketsModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'tenants',
                loadChildren: './tenants/tenants.module#TenantsModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'user',
                loadChildren: './userpage/user.module#UserModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'visits',
                loadChildren: './visits/visits.module#VisitsModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'sc',
                loadChildren: './sc/sc.module#ScModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'ph',
                loadChildren: './ph/ph.module#PhModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'kyc',
                loadChildren: './kyc/kyc.module#KycModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'nt',
                loadChildren: './nt/nt.module#NtModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'property/:id',
                loadChildren: './np/np.module#NpModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'visitor-details/:id',
                loadChildren: './tenantdetails/tenantdetails.module#TenantdetailsModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'booking-details/:id',
                loadChildren: './bookingdetails/bookingdetails.module#BookingdetailsModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'ticket-details/:id',
                loadChildren: './ticketdetails/ticketdetails.module#TicketdetailsModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'bookinglist',
                loadChildren: './bookinglist/bookinglist.module#BookinglistModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'ownerslist',
                loadChildren: './ownerslist/ownerslist.module#OwnerslistModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'pimglist',
                loadChildren: './pimglist/pimglist.module#PimglistModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'prolist',
                loadChildren: './prolist/prolist.module#ProlistModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'sclist',
                loadChildren: './sclist/sclist.module#SclistModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'tenantlist',
                loadChildren: './tenantlist/tenantlist.module#TenantlistModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'createsc/:id/:ownerId',
                loadChildren: './createsc/createsc.module#CreatescModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'kyclist',
                loadChildren: './kyclist/kyclist.module#KyclistModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'ownerdetails/:id/:updId',
                loadChildren: './userpage/user.module#UserModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'invite',
                loadChildren: './invite/invite.module#InviteModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'kycverify/:id',
                loadChildren: './kycverify/kycverify.module#KycverifyModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'kycview/:id/:srcId',
                loadChildren: './kycverify/kycverify.module#KycverifyModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'tenantdetails/:id/:updId',
                loadChildren: './userpage/user.module#UserModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'payrent',
                loadChildren: './payrent/payrent.module#PayrentModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'payresponse',
                loadChildren: './transaction/transaction.module#TransactionModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'ownerproperties',
                loadChildren: './ownerprop/ownerprop.module#OwnerpropModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'tph',
                loadChildren: './tph/tph.module#TphModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'tag',
                loadChildren: './tag/tag.module#TagModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'taglist',
                loadChildren: './taglist/taglist.module#TaglistModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'tagdetails/:id',
                loadChildren: './tagdetails/tagdetails.module#TagDetailsModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'tagProp/:id/:name',
                loadChildren: './tag/tag.module#TagModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'bank',
                loadChildren: './ownerbankdetails/ownerbankdetails.module#OwnerBankDetailsModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'deposit',
                loadChildren: './deposit/deposit.module#DepositModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }, {
                path: 'paymentlist',
                loadChildren: './paymentlist/paymentlist.module#PaymentlistModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__login_auth_guard_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
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
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_landing_landing_layout_component__["a" /* LandingLayoutComponent */],
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule',
            },
            {
                path: 'tenant',
                loadChildren: './tenanthome/tenanthome.module#TenanthomeModule',
            },
            {
                path: 'landlord',
                loadChildren: './landlordhome/landlordhome.module#LandlordHomeModule',
            },
            {
                path: 'propdetail/:id',
                loadChildren: './details/details.module#DetailsModule',
            },
            {
                path: 'properties',
                loadChildren: './propertylist/propertylist.module#PropertylistModule',
            }
        ]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../angular/app/layouts/admin/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-active-color=\"red\" data-background-color=\"white\" data-image=\"http://studphotos.s3.amazonaws.com/img/sidebar-1.jpg\">\n        <app-sidebar-cmp></app-sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(http://studphotos.s3.amazonaws.com/img/sidebar-1.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar-cmp></app-navbar-cmp>\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular/app/layouts/admin/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__md_md_module__ = __webpack_require__("../../../../../angular/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__ = __webpack_require__("../../../../../angular/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
        this.navItems = [
            { type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: 'pe-7s-mail', title: 'Messages' },
                    { iconClass: 'pe-7s-help1', title: 'Help Center' },
                    { iconClass: 'pe-7s-tools', title: 'Settings' },
                    'separator',
                    { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
                    { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Account' },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Log out' }
        ];
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
    ], AdminLayoutComponent.prototype, "navbar", void 0);
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../angular/app/layouts/admin/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=admin-layout.component.js.map

/***/ }),

/***/ "../../../../../angular/app/layouts/auth/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../angular/app/layouts/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../angular/app/layouts/auth/auth-layout.component.html")
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());

//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ "../../../../../angular/app/layouts/landing/landing-layout.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-header-cmp></app-header-cmp>\n  <router-outlet></router-outlet>\n  <app-footer-cmp></app-footer-cmp>"

/***/ }),

/***/ "../../../../../angular/app/layouts/landing/landing-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LandingLayoutComponent = (function () {
    function LandingLayoutComponent() {
    }
    LandingLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../angular/app/layouts/landing/landing-layout.component.html")
        })
    ], LandingLayoutComponent);
    return LandingLayoutComponent;
}());

//# sourceMappingURL=landing-layout.component.js.map

/***/ }),

/***/ "../../../../../angular/app/login/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../angular/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());

//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../angular/app/login/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        console.log('inside auth service ');
        var user = {
            email: username,
            password: password
        };
        return this.http.post('/api/auth/login', user)
            .map(function (response) {
            console.log(response.json());
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().data.token;
            var userType = response.json() && response.json().data.user.type;
            var userId = response.json() && response.json().data.user.id;
            var uname = response.json() && response.json().data.user.name;
            var email = response.json() && response.json().data.user.email;
            var mobile = response.json() && response.json().data.user.mobile;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                localStorage.setItem('userName', username);
                localStorage.setItem('currentUserType', userType);
                localStorage.setItem('userId', userId);
                localStorage.setItem('name', uname);
                localStorage.setItem('email', email);
                localStorage.setItem('mobile', mobile);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        })
            .catch(function (err) {
            console.log(err);
            // Do messaging and error handling here
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err);
        });
    };
    AuthService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.clear();
        // localStorage.setItem('userId', null);
        // localStorage.setItem('currentUser', null);
        // localStorage.setItem('userName', null);
        // localStorage.removeItem('currentUserType');
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../angular/app/md/md-chart/md-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/md/md-chart/md-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItems\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular/app/md/md-chart/md-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChartType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType || (ChartType = {}));
var MdChartComponent = (function () {
    function MdChartComponent() {
    }
    MdChartComponent_1 = MdChartComponent;
    MdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "md-chart-" + MdChartComponent_1.currentId++;
    };
    MdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    MdChartComponent.currentId = 1;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "chartClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], MdChartComponent.prototype, "chartType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "chartResponsive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerIconClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "legendItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MdChartComponent.prototype, "withHr", void 0);
    MdChartComponent = MdChartComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-md-chart',
            template: __webpack_require__("../../../../../angular/app/md/md-chart/md-chart.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/md/md-chart/md-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MdChartComponent);
    return MdChartComponent;
    var MdChartComponent_1;
}());

//# sourceMappingURL=md-chart.component.js.map

/***/ }),

/***/ "../../../../../angular/app/md/md-table/md-table.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"content table-responsive\">\n    <table class=\"table\">\n      <tbody>\n          <tr *ngFor=\"let row of data.dataRows\">\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\n            <td>\n                <div class=\"flag\">\n                    <img src=\"../../../assets/img/flags/{{row[0]}}.png\" alt=\"\">\n                </div>\n            </td>\n            <td>\n                {{row[1]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[2]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[3]}}\n            </td>\n          </tr>\n      </tbody>\n    </table>\n\n  </div>\n"

/***/ }),

/***/ "../../../../../angular/app/md/md-table/md-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdTableComponent = (function () {
    function MdTableComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MdTableComponent.prototype, "data", void 0);
    MdTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-md-table',
            template: __webpack_require__("../../../../../angular/app/md/md-table/md-table.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MdTableComponent);
    return MdTableComponent;
}());

//# sourceMappingURL=md-table.component.js.map

/***/ }),

/***/ "../../../../../angular/app/md/md.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__ = __webpack_require__("../../../../../angular/app/md/md-table/md-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__md_chart_md_chart_component__ = __webpack_require__("../../../../../angular/app/md/md-chart/md-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));
var MdModule = (function () {
    function MdModule() {
    }
    MdModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__["a" /* MdTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__md_chart_md_chart_component__["a" /* MdChartComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__["a" /* MdTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__md_chart_md_chart_component__["a" /* MdChartComponent */]
            ]
        })
    ], MdModule);
    return MdModule;
}());

//# sourceMappingURL=md.module.js.map

/***/ }),

/***/ "../../../../../angular/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*----------------------------------- */\n/* Footer\n------------------------------------- */\n#footer {\n\tpadding: 70px 0 0 0;\n\tbackground-color: #fff;\n\tborder-top: 1px solid rgba(0,0,0,0.09);\n\tfont-size: 16px;\n}\n\n#footer.sticky-footer { box-shadow: none; }\n#footer.dark { border-top: none; }\n\n#footer h4 {\n\tcolor: #333;\n\tfont-size: 21px;\n\tmargin-bottom: 25px;\n}\n\n.footer-shadow {\n\twidth: 100%;\n\tdisplay: block;\n\tbackground: #fff; \n\theight: 200px;\n\tmargin-top: -200px;\n\tposition: relative;\n\tz-index: -1;\n\tbox-shadow: 0 20px 40px -20px rgba(0,0,0,0.06);\n}\n\n.text-widget span { color: #707070; }\n.text-widget span.address { display: block; margin-bottom: 10px;}\n\n#footer a {\n\tcolor: #66676b;\n}\n\n/*  Links  */\n#footer ul.footer-links {\n\tmargin: 0 0 15px 0;\n\tpadding: 0;\n\twidth: 50%;\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\tfloat: left;\n}\n\n#footer .footer-links li { position: relative; list-style: none; }\n\n#footer .footer-links li a {\n\tpadding: 0 0 9px 16px;\n\tdisplay: inline-block;\n\ttransition: all 0.2s ease-in-out;\n\tcolor: #707070;\n\tline-height: 21px;\n}\n\n#footer .footer-links li a:hover {\n\tpadding-left:22px;\n\tcolor: #66676b;\n}\n\n#footer .footer-links li:before {\n\tfont-family: \"FontAwesome\";\n\tfont-size: 20px;\n\tcontent: \"\\F105\";\n\tposition: absolute;\n\tleft: 0;\n\ttop: -2px;\n\tpadding: 0 7px 0 0;\n\tcolor: #ccc;\n}\n\n\n/* Footer Bottom */\n.copyrights {\n\tcolor: #707070;\n\tborder-top: 1px solid rgba(0,0,0,0.09);\n\tmargin-top: 60px;\n\ttext-align: center;\n\tpadding: 40px 0;\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n\n#footer.alt .copyrights { \n\tmargin-top:0;\n\tborder: none;\n\tpadding: 25px;\n}\n\n.copyrights a { color: #707070; }\n\n\n/* Dark Styles */\n#footer.dark {\n\tbackground: #222;\n\tcolor: #aaa;\n}\n\n#footer.dark a,\n#footer.dark h4,\n#footer.dark a:hover {\n\tcolor: #fff;\n}\n\n#footer.dark .text-widget,\n#footer.dark .text-widget span,\n#footer.dark .footer-links li a {\n\tcolor: #aaa;\n}\n\n#footer.dark .footer-links li a:hover { color: #fff; }\n#footer.dark .footer-links li:before { color: #666; }\n\n#footer.dark .copyrights {\n\tcolor: #aaa;\n\tborder-top: 1px solid rgba(255,255,255,0.09);\n}\n\n#footer .social-icons li a {\n    opacity: 0.8;\n    transition: opacity 0.35s;\n}\n\n#footer .social-icons li a:hover { opacity: 1; }\n\n\n/* ---------------------------------- */\n/* Back to top\n------------------------------------- */\n#backtotop {\n\tposition: fixed;\n\tright: 0;\n\topacity: 0;\n\tvisibility: hidden;\n\tbottom: 25px;\n\tmargin: 0 25px 0 0;\n\tz-index: 9999;\n\ttransition: 0.35s;\n\t-webkit-transform: scale(0.7);\n\t        transform: scale(0.7);\n}\n\n#backtotop.visible {\n\topacity: 1;\n\tvisibility: visible;\n\t-webkit-transform: scale(1);\n\t        transform: scale(1);\n}\n\n#backtotop a {\n\ttext-decoration: none;\n\tborder: 0 none;\n\tdisplay: block;\n\twidth: 46px;\n\theight: 46px;\n\tbackground-color: #66676b;\n\topacity: 1;\n    transition: all 0.3s;\n    border-radius: 50%;\n    text-align: center;\n    font-size: 26px\n}\n\nbody #backtotop a { color: #fff; }\n\n#backtotop a:after {\n\tcontent: \"\\F106\";\n\tfont-family: \"FontAwesome\";\n\tposition: relative;\n\tdisplay: block;\n\ttop: 50%;\n\t-webkit-transform: translateY(-55%);\n\ttransform: translateY(-55%);\n}\n\n\n.social-icons li i {\n\tfont-family: \"fontello\";\n\tfont-style: normal;\n\tfont-weight: normal;\n\tspeak: none;\n\tdisplay: inline-block;\n\ttext-decoration: inherit;\n\ttext-align: center;\n\tfont-variant: normal;\n\ttext-transform: none;\n\tline-height: 16px;\n\tfont-size: 16px;\n\twidth: auto;\n}\n\n.icon-delicious:before { content: '#'; } /* '#' */\n.icon-paypal:before { content: '$'; } /* '$' */\n.icon-gplus:before { content: '\\F0D5'; } /* '+' */\n.icon-stumbleupon:before { content: '/'; } /* '/' */\n.icon-fivehundredpx:before { content: '0'; } /* '0' */\n.icon-pinterest:before { content: '1'; } /* '1' */\n.icon-forrst:before { content: ':'; } /* ':' */\n.icon-digg:before { content: ';'; } /* ';' */\n.icon-spotify:before { content: '='; } /* '=' */\n.icon-reddit:before { content: '>'; } /* '&gt;' */\n.icon-appstore:before { content: 'A'; } /* 'A' */\n.icon-blogger:before { content: 'B'; } /* 'B' */\n.icon-dribbble:before { content: 'D'; } /* 'D' */\n.icon-evernote:before { content: 'E'; } /* 'E' */\n.icon-flickr:before { content: 'F'; } /* 'F' */\n.icon-linkedin:before { content: 'L'; } /* 'L' */\n.icon-rss:before { content: 'R'; } /* 'R' */\n.icon-twitter:before { content: 'T'; } /* 'T' */\n.icon-youtube:before { content: 'U'; } /* 'U' */\n.icon-vimeo:before { content: 'V'; } /* 'V' */\n.icon-xing:before { content: 'X'; } /* 'X' */\n.icon-yahoo:before { content: 'Y'; } /* 'Y' */\n.icon-amazon:before { content: 'a'; } /* 'a' */\n.icon-steam:before { content: 'b'; } /* 'b' */\n.icon-dropbox:before { content: 'd'; } /* 'd' */\n.icon-facebook:before { content: 'f'; } /* 'f' */\n.icon-github:before { content: 'g'; } /* 'g' */\n.icon-lastfm:before { content: 'l'; } /* 'l' */\n.icon-tumblr:before { content: 't'; } /* 't' */\n.icon-wordpress:before { content: 'w'; } /* 'w' */\n.icon-linkedin-rect:before { content: '\\F31B'; } /* '?' */\n.icon-instagram:before { content: '\\F31F'; } /* '?' */\n\n/* Social Icons styles for footer\n------------------------------------- */\n.listing-share .social-icons li a,\n.agent .social-icons li a,\n#footer .social-icons li a {\n\twidth: 38px;\n\theight: 40px;\n\tbackground-color: transparent;\n}\n\n.agent .social-icons,\n#footer .social-icons { \n\tposition: relative;\n\tleft: -13px;\n}\n\n.agent .social-icons li,\n#footer .social-icons li {\n\tmargin: 0;\n\tpadding: 0;\n\tfloat: left;\n\tline-height: 0;\n}\n\n.listing-share .social-icons li a:before,\n.listing-share .social-icons li a i,\n.agent .social-icons li a:before,\n.agent .social-icons li a i,\n#footer .social-icons li a:before,\n#footer .social-icons li a i { font-size: 15px; color: #a0a0a0; }\n\n.listing-share .social-icons li .twitter:before,\n.listing-share .social-icons li .twitter i:before,\n.listing-share .social-icons li .vimeo:before,\n.listing-share .social-icons li .vimeo i:before,\n.agent .social-icons li .twitter:before,\n.agent .social-icons li .twitter i:before,\n.agent .social-icons li .vimeo:before,\n.agent .social-icons li .vimeo i:before,\n#footer .social-icons li .twitter:before,\n#footer .social-icons li .twitter i:before,\n#footer .social-icons li .vimeo:before,\n#footer .social-icons li .vimeo i:before { font-size: 13px; }\n\n.listing-share .social-icons li a:hover,\n.agent .social-icons li a:hover,\n#footer .social-icons li a:hover {\n\tbackground: transparent !important;\n\tborder-color: transparent; \n}\n\n.listing-share .social-icons li a:hover i,\n.agent .social-icons li a:hover i,\n#footer .social-icons li a:hover i {\n\tcolor: #66676b;\n}\n\n.facebook i, .facebook:before { margin: 13px 0 0 16px; }\n.facebook:before { content: \"f\"; top: 0; opacity:1; }\n.facebook:hover:before { top: 30px; opacity: 0; }\n.facebook:hover { background-color: #4a6d9d !important; }\n.social-icons.color .facebook,\n.social-icons.fixed .facebook:hover { background-color: #4a6d9d ; border-color: #4a6d9d ;}\n\n\n/* ---------------------------------- */\n/* Offsets\n------------------------------------- */\n\n/* Margin Top */\n.margin-top-0  { margin-top: 0 !important; }\n.margin-top-1  { margin-top: 1px !important; }\n.margin-top-2  { margin-top: 2px !important; }\n.margin-top-3  { margin-top: 3px !important; }\n.margin-top-4  { margin-top: 4px !important; }\n.margin-top-5  { margin-top: 5px !important; }\n.margin-top-6  { margin-top: 6px !important; }\n.margin-top-7  { margin-top: 7px !important; }\n.margin-top-8  { margin-top: 8px !important; }\n.margin-top-9  { margin-top: 9px !important; }\n.margin-top-10 { margin-top: 10px !important; }\n.margin-top-15 { margin-top: 15px !important; }\n.margin-top-20 { margin-top: 20px !important; }\n.margin-top-25 { margin-top: 25px !important; }\n.margin-top-30 { margin-top: 30px !important; }\n.margin-top-35 { margin-top: 35px !important; }\n.margin-top-40 { margin-top: 40px !important; }\n.margin-top-45 { margin-top: 45px !important; }\n.margin-top-50 { margin-top: 50px !important; }\n.margin-top-55 { margin-top: 55px !important; }\n.margin-top-60 { margin-top: 60px !important; }\n.margin-top-65 { margin-top: 0px !important;}\n.margin-top-70 { margin-top: 70px !important; }\n.margin-top-75 { margin-top: 75px !important; }\n.margin-top-80 { margin-top: 80px !important; }\n.margin-top-85 { margin-top: 85px !important; }\n.margin-top-90 { margin-top: 90px !important; }\n.margin-top-95 { margin-top: 95px !important; }\n.margin-top-100 { margin-top: 100px !important; }\n.margin-top-105 { margin-top: 105px !important; }\n.margin-top-110 { margin-top: 110px !important; }\n.margin-top-115 { margin-top: 115px !important; }\n.margin-top-120 { margin-top: 120px !important; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\" class=\"sticky-footer\">\n\t\t<!-- Main -->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5 col-sm-6\">\n\t\t\t\t\t<img class=\"footer-logo\" src=\"http://studphotos.s3.amazonaws.com/images/logo.png\" alt=\"\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<br> Flarow is a Smart Property & Rental Management Solution for the Urban Millenials.\n\t\t\t\t\t<br> Homeowners/Property Managers can invite their tenants, view their KYC Documents, Manage Monthly Rentals, Rental Due\n\t\t\t\t\tdates and much more.\n\t\t\t\t\t<br>Tenants can invite their Homeowners, upload KYC Documents once and use for future rentals, Manage Monthly Rentals, Rental\n\t\t\t\t\tDue dates and much more\n\t\t\t\t</div>\n\t\n\t\t\t\t<div class=\"col-md-4 col-sm-6 \">\n\t\t\t\t\t<h4><strong>Helpful Links</strong></h4>\n\t\t\t\t\t<ul class=\"footer-links\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Our Story</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Testimonials</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Work with Us</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Partner with Us</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Bug Bounty</a>\n\t\t\t\t\t\t</li>\n\t\n\t\t\t\t\t</ul>\n\t\n\t\t\t\t\t<ul class=\"footer-links\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Login</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Sign Up</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">FAQ</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">How It Works</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Privacy Policy</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t</div>\n\t\n\t\t\t\t<div class=\"col-md-3  col-sm-12\">\n\t\t\t\t\t<h4><strong>Contact Us</strong></h4>\n\t\t\t\t\t<div class=\"text-widget\">\n\t\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<i class=\"sl sl-icon-location-pin\"></i>2/4 Palm View Apartments Thoraipakkam, PTC, OMR Chennai - 600097</span>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i><span>&nbsp; Whatsapp:</span>\n\t\t\t\t\t\t<span>9042658569 </span>\n\t\t\t\t\t\t<br> E-Mail:\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<a href=\"#\">contact@flarow.com</a>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</div>\n\t\n\t\t\t\t\t<ul class=\"social-icons margin-top-20\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a class=\"facebook\" href=\"#\">\n\t\t\t\t\t\t\t\t<i class=\"icon-facebook\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a class=\"twitter\" href=\"#\">\n\t\t\t\t\t\t\t\t<i class=\"icon-twitter\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<!-- <li><a class=\"gplus\" href=\"#\"><i class=\"icon-gplus\"></i></a></li>\n\t\t\t\t\t\t\t<li><a class=\"vimeo\" href=\"#\"><i class=\"icon-vimeo\"></i></a></li> -->\n\t\t\t\t\t</ul>\n\t\n\t\t\t\t</div>\n\t\n\t\t\t</div>\n\t\n\t\t\t<!-- Copyright -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"copyrights\">© 2017 Flarow. All Rights Reserved.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- Footer / End -->\n\t\n\t\n\t<!-- Back To Top Button -->\n\t<div id=\"backtotop\">\n\t\t<a href=\"#\"></a>\n\t</div>"

/***/ }),

/***/ "../../../../../angular/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer-cmp',
            template: __webpack_require__("../../../../../angular/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/shared/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../angular/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../angular/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
        })
    ], FooterModule);
    return FooterModule;
}());

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../angular/app/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.button.border {\n    color: red;\n    border: 1px solid red;\n}\n\na.button.border:hover {\n\tbackground-color: red;\n\tcolor: #fff;\n\topacity: 1;\n}\n\n.header-widget .button, .header-widget .button.border {\n\tmargin-right: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header Container\n================================================== -->\n<header id=\"header-container\">\n    <!-- Header -->\n    <div id=\"header\">\n        <div class=\"container\">\n            <!-- Left Side Content -->\n            <div class=\"left-side\">\n                <!-- Logo -->\n                <div id=\"logo\">\n                    <a href=\"/\">\n                        <img src=\"http://studphotos.s3.amazonaws.com/images/logo.png\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"clearfix\"></div>\n                <!-- Main Navigation / End -->\n            </div>\n            <!-- Left Side Content / End -->\n            <!-- Right Side Content / End -->\n            <div class=\"right-side\">\n                <div class=\"header-widget\">\n                    <!-- <a href=\"#/tenant\" class=\"sign-in\">Tenants</a> -->\n                    <!-- <a href=\"#/landlord\" class=\"sign-in\">Landlords</a> -->\n\n                    <a href=\"#/login\" *ngIf=\"!showLogin\" class=\"sign-in button border with-icon pull-right\">\n                        Sign In<i class=\"sl sl-icon-login\"></i>\n                    </a>\n                    <a href=\"#/dashboard\" *ngIf=\"showLogin\" class=\"sign-in popup-with-zoom-anim\">\n                        Hi {{ currentUser }}\n                    </a>\n\n                    <a href=\"#/register\" *ngIf=\"!showLogin\" class=\"button border with-icon\">Add Listing\n                        <i class=\"sl sl-icon-plus\"></i>\n                    </a>\n                    <a href=\"#/property\" *ngIf=\"showLogin\" class=\"button border with-icon\">Add Listing\n                        <i class=\"sl sl-icon-plus\"></i>\n                    </a>\n                </div>\n            </div>\n            <!-- Right Side Content / End -->\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "../../../../../angular/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.test = new Date();
        this.showLogin = 0;
        this.userId = localStorage.getItem("userId");
        this.currentUser = localStorage.getItem("name");
        if (this.currentUser !== null && this.currentUser != 'null') {
            this.showLogin = 1;
        }
        else {
            this.showLogin = 0;
            this.currentUser = 'Sign In';
        }
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $("#header").not("#header.not-sticky").clone(true).addClass('cloned unsticky').insertAfter("#header");
        $("#navigation.style-2").clone(true).addClass('cloned unsticky').insertAfter("#navigation.style-2");
        // Logo for header style 2
        $("#logo .sticky-logo").clone(true).prependTo("#navigation.style-2.cloned ul#responsive");
        // sticky header script
        var headerOffset = $("#header-container").height() * 2; // height on which the sticky header will shows
        $(window).scroll(function () {
            if ($(window).scrollTop() >= headerOffset) {
                $("#header.cloned").addClass('sticky').removeClass("unsticky");
                $("#navigation.style-2.cloned").addClass('sticky').removeClass("unsticky");
            }
            else {
                $("#header.cloned").addClass('unsticky').removeClass("sticky");
                $("#navigation.style-2.cloned").addClass('unsticky').removeClass("sticky");
            }
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-header-cmp',
            template: __webpack_require__("../../../../../angular/app/shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../angular/app/shared/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_component__ = __webpack_require__("../../../../../angular/app/shared/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__header_component__["a" /* HeaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__header_component__["a" /* HeaderComponent */]]
        })
    ], HeaderModule);
    return HeaderModule;
}());

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ "../../../../../angular/app/shared/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-bk{\n    background-color: #eee;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav #navbar class=\"navbar navbar-transparent navbar-absolute container-bk\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-minimize\">\n            <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\n                <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\n                <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\n            </button>\n        </div>\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}} </a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <div *ngIf=\"isMobileMenu()\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a routerLink=\"/dashboard\">\n                            <i class=\"material-icons\">dashboard</i>\n                            <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"material-icons\">person</i>\n                            <p class=\"hidden-lg hidden-md\">Profile</p>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a routerLink=\"/user\"> <i class=\"material-icons\">person</i>Profile</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"separator hidden-lg hidden-md\"></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../angular/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../angular/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_auth_service__ = __webpack_require__("../../../../../angular/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element, authService) {
        this.renderer = renderer;
        this.element = element;
        this.authService = authService;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        console.log(this.listTitles);
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ($('body').hasClass('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if ($('body').hasClass('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        $('#minimizeSidebar').click(function () {
            if (misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
        $('#hideSidebar').click(function () {
            if (misc.hide_sidebar_active === true) {
                setTimeout(function () {
                    $('body').removeClass('hide-sidebar');
                    misc.hide_sidebar_active = false;
                }, 300);
                setTimeout(function () {
                    $('.sidebar').removeClass('animation');
                }, 600);
                $('.sidebar').addClass('animation');
            }
            else {
                setTimeout(function () {
                    $('body').addClass('hide-sidebar');
                    // $('.sidebar').addClass('animation');
                    misc.hide_sidebar_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    ;
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee.substring(1, titlee.length)) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('app-navbar-cmp'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-navbar-cmp',
            template: __webpack_require__("../../../../../angular/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__login_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../angular/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../angular/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
        })
    ], NavbarModule);
    return NavbarModule;
}());

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../angular/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"/\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"//studphotos.s3.amazonaws.com/img/flarow-icon.png\"/>\n        </div>\n        FLAROW\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n                <!--If is a single link-->\n                <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n                    <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                    <p>{{menuitem.title}}</p>\n                </a>\n                <!--If it have a submenu-->\n                <a data-toggle=\"collapse\" href=\"#{{menuitem.title}}\" *ngIf=\"menuitem.type === 'sub'\">\n                    <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                    <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                </a>\n\n                <!--Display the submenu items-->\n                <div id=\"{{menuitem.title}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                    <ul class=\"nav\">\n                        <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\n                            <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                                <span class=\"sidebar-mini\">{{childitem.ab}}</span>\n                                <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </li>\n            <li routerLinkActive=\"active\">\n                    <a\n                    style=\"cursor: pointer;\"\n                    (click)=\"onLogout()\">\n                    <i class=\"material-icons\">exit_to_app</i>\n                    Logout</a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LANDLORD_ROUTES */
/* unused harmony export TENANT_ROUTES */
/* unused harmony export ADMIN_ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_auth_service__ = __webpack_require__("../../../../../angular/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Menu Items
var LANDLORD_ROUTES = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    }, {
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
    }, {
        path: '/ownerproperties',
        title: 'Properties',
        type: 'link',
        icontype: 'business'
    }, {
        path: '/tph',
        title: 'Transaction History',
        type: 'link',
        icontype: 'attach_money'
    }
];
//Menu Items
var TENANT_ROUTES = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    }, {
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
    }, {
        path: '/payrent',
        title: 'Pay Rent',
        type: 'link',
        icontype: 'payment'
    }
];
//Menu Items
var ADMIN_ROUTES = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/ownerslist',
        title: 'Owners',
        type: 'link',
        icontype: 'event_seat'
    }, {
        path: '/tenantlist',
        title: 'Tenants',
        type: 'link',
        icontype: 'account_box'
    }, , {
        path: '/paymentlist',
        title: 'Payments',
        type: 'link',
        icontype: 'payment'
    }, {
        path: '/taglist',
        title: 'Tag Requests',
        type: 'link',
        icontype: 'group_add'
    }, {
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
    }, {
        path: '/sclist',
        title: 'Scheduled Visits',
        type: 'link',
        icontype: 'supervisor_account'
    }, {
        path: '/kyclist',
        title: 'KYC Request',
        type: 'link',
        icontype: 'verified_user'
    }
];
var ROUTES = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/ownerslist',
        title: 'Owners',
        type: 'link',
        icontype: 'event_seat'
    }, {
        path: '/tenantlist',
        title: 'Tenants',
        type: 'link',
        icontype: 'account_box'
    }, {
        path: '/paymentlist',
        title: 'Payments',
        type: 'link',
        icontype: 'payment'
    }, {
        path: '/taglist',
        title: 'Tag Requests',
        type: 'link',
        icontype: 'group_add'
    }, {
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
    }, {
        path: '/sclist',
        title: 'Scheduled Visits',
        type: 'link',
        icontype: 'supervisor_account'
    }, {
        path: '/kyclist',
        title: 'KYC Request',
        type: 'link',
        icontype: 'verified_user'
    }, {
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
    }, {
        path: '/payrent',
        title: 'Pay Rent',
        type: 'link',
        icontype: 'payment'
    }, {
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
    }, {
        path: '/tph',
        title: 'Transaction History',
        type: 'link',
        icontype: 'attach_money'
    }
];
var SidebarComponent = (function () {
    function SidebarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $sidebar = $('.sidebar-wrapper');
            $sidebar.perfectScrollbar();
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        }
        else {
            $('html').addClass('perfect-scrollbar-off');
        }
        var currentUserType = JSON.parse(localStorage.getItem('currentUserType'));
        if (currentUserType == 1) {
            this.menuItems = LANDLORD_ROUTES.filter(function (menuItem) { return menuItem; });
        }
        else if (currentUserType == 0) {
            this.menuItems = TENANT_ROUTES.filter(function (menuItem) { return menuItem; });
        }
        else if (currentUserType == 2) {
            this.menuItems = ADMIN_ROUTES.filter(function (menuItem) { return menuItem; });
        }
    };
    SidebarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/home']);
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sidebar-cmp',
            template: __webpack_require__("../../../../../angular/app/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../angular/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../angular/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
        })
    ], SidebarModule);
    return SidebarModule;
}());

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../angular/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../angular/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../angular/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../angular/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../angular/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map