webpackJsonp(["login.module"],{

/***/ "../../../../../angular/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n        <nav class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\n                <div class=\"container\">\n                    <div class=\"navbar-header\">\n                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu\">\n                            <span class=\"sr-only\">Toggle navigation</span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                        </button>\n                        <a class=\"navbar-brand\" href=\"/#/home\">FLAROW</a>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"menu\">\n                        <ul class=\"nav navbar-nav navbar-right\">\n                            <li class=\"active\">\n                                <a href=\"/#/register\">\n                                    <i class=\"material-icons\">person_add</i>Register\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n    <div class=\"full-page login-page\" filter-color=\"black\">\n        <!--  you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                        <form  #f=\"ngForm\">\n                            <div class=\"card card-login card-hidden\">\n                                <div class=\"card-header text-center\" data-background-color=\"red\">\n                                    <i class=\"material-icons\">home</i>\n                                    <h4 class=\"card-title\">Login</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">email</i>\n                                        </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Email address</label>\n                                            <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n                                        </div>\n                                    </div>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">lock_outline</i>\n                                        </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Password</label>\n                                            <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"footer text-center\">\n                                    <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" (click)=\"onSignin(f)\">Login</button>\n                                    <a href=\"#/forget\" class=\"btn btn-rose btn-simple btn-wd btn-lg\">Forget password?</a>\n                                    <a href=\"#/register\" class=\"btn btn-rose btn-simple btn-wd btn-lg\">New Here? Register</a>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"full-page-background\" style=\"background-image: url(//studphotos.s3.amazonaws.com/img/apartment.jpg) \"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../angular/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(element, authService, router) {
        this.element = element;
        this.authService = authService;
        this.router = router;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    ;
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent.prototype.onSignin = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        this.authService.login(email, password)
            .subscribe(function (result) {
            console.log(result);
            if (result === true) {
                // login successful
                _this.router.navigate(['/dashboard']);
            }
            else {
                // login failed
                console.log("login failed");
                //this.error = 'Username or password is incorrect';
                //this.loading = false;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login-cmp',
            template: __webpack_require__("../../../../../angular/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../angular/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../angular/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_routing__ = __webpack_require__("../../../../../angular/app/login/login.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__login_routing__["a" /* LoginRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../angular/app/login/login.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../angular/app/login/login.component.ts");

var LoginRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__login_component__["a" /* LoginComponent */]
            }]
    }
];
//# sourceMappingURL=login.routing.js.map

/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map