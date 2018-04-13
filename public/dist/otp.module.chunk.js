webpackJsonp(["otp.module"],{

/***/ "../../../../../angular/app/otp/otp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/#/home\">FLAROW</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li class=\"active\">\n                        <a href=\"/#/login\">\n                            <i class=\"material-icons\">fingerprint</i> Login\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page login-page\" filter-color=\"black\">\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                        <form #f=\"ngForm\">\n                            <div class=\"card card-login card-hidden\">\n                                <div class=\"card-header text-center\" data-background-color=\"red\">\n                                    <i class=\"fa fa-shield fa-3x\" aria-hidden=\"true\"></i>\n                                    <h4 class=\"card-title\">OTP</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">security</i>\n                                        </span>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-5 col-sm-5\">\n                                                <div class=\"form-group label-floating\">\n                                                    <label class=\"control-label\">OTP</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"uname\" name=\"uname\" [ngModel]=\"name\" required #uname=\"ngModel\">\n                                                    <small [hidden]=\"uname.valid || (uname.pristine && !f.submitted)\" class=\"text-danger\">\n                                                        Please enter your otp\n                                                    </small>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-7 col-sm-6\">\n                                                <div class=\"form-group label-floating\">\n                                                    <button class=\"btn btn-rose btn-simple btn-wd btn-lg pull-right\" (click)=\"resend()\">\n                                                        Resend OTP?\n                                                    </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        \n                                    </div>\n\n                                </div>\n                                <div class=\"footer text-center\">\n                                    <button [disabled]=\"!f.valid\" (click)=\"onSubmit($event.target, f)\"  \n                                    class=\"btn btn-rose btn-simple btn-wd btn-lg\">Submit</button>\n                                    <a href=\"#/register\" \n                                    class=\"btn btn-rose btn-simple btn-wd btn-lg\">Sign up</a>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"full-page-background\" style=\"background-image: url(//studphotos.s3.amazonaws.com/img/apartment.jpg) \"></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/otp/otp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_auth_service__ = __webpack_require__("../../../../../angular/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OtpComponent = (function () {
    function OtpComponent(http, router, toastr, authService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.authService = authService;
    }
    OtpComponent.prototype.ngOnInit = function () {
        this.isDisabled = false;
        setTimeout(function () {
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    OtpComponent.prototype.onSubmit = function (element, form) {
        var _this = this;
        element.disabled = true;
        element.textContent = "Loading...";
        this.data = {
            name: localStorage.getItem('lname'),
            mobile: localStorage.getItem('lmobile'),
            email: localStorage.getItem('lemail'),
            password: localStorage.getItem('lpwd'),
            type: localStorage.getItem('ltype'),
            otp: form.value.uname
        };
        this.http.post('/api/auth/register', this.data)
            .toPromise()
            .then(function (response) {
            // login successful if there's a jwt token in the response
            if (response.json().data != undefined) {
                var token = response.json() && response.json().data.token;
                var userType = response.json() && response.json().data.user.type;
                var userId = response.json() && response.json().data.user.id;
                var uname = response.json() && response.json().data.user.name;
                if (token) {
                    _this.authService.login(_this.data.email, _this.data.password)
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
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    // localStorage.setItem('currentUser', JSON.stringify({ 'userId': userId, token: token }));
                    // localStorage.setItem('currentUserType', userType);
                    // localStorage.setItem('userId',userId);
                    // localStorage.setItem('name',uname);
                    //this.router.navigateByUrl('/dashboard'); 
                    //let that = this;
                    // this.zone.run(() => {
                    //     that.router.navigateByUrl('/dashboard');
                    // });
                    // console.log('got token');
                    // console.log(token);
                    // setTimeout(function () { that.router.navigate(['/dashboard']); }, 50);
                }
            }
            else {
                _this.toastr.error('Invalid OTP', 'Flarow!');
            }
        });
    };
    OtpComponent.prototype.resend = function () {
        this.data = {
            name: localStorage.getItem('lname'),
            mobile: localStorage.getItem('lmobile'),
            email: localStorage.getItem('lemail'),
            password: localStorage.getItem('lpwd'),
            type: localStorage.getItem('ltype'),
            otp: 0
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post('/api/reSend', this.data, options)
            .toPromise()
            .then(function (response) {
        });
    };
    OtpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-otp-cmp',
            template: __webpack_require__("../../../../../angular/app/otp/otp.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__login_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
    ], OtpComponent);
    return OtpComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=otp.component.js.map

/***/ }),

/***/ "../../../../../angular/app/otp/otp.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpModule", function() { return OtpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__md_md_module__ = __webpack_require__("../../../../../angular/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__otp_component__ = __webpack_require__("../../../../../angular/app/otp/otp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__otp_routing__ = __webpack_require__("../../../../../angular/app/otp/otp.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OtpModule = (function () {
    function OtpModule() {
    }
    OtpModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__otp_routing__["a" /* OtpRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__md_md_module__["a" /* MdModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__otp_component__["a" /* OtpComponent */]]
        })
    ], OtpModule);
    return OtpModule;
}());

//# sourceMappingURL=otp.module.js.map

/***/ }),

/***/ "../../../../../angular/app/otp/otp.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__otp_component__ = __webpack_require__("../../../../../angular/app/otp/otp.component.ts");

var OtpRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__otp_component__["a" /* OtpComponent */]
            }]
    }
];
//# sourceMappingURL=otp.routing.js.map

/***/ })

});
//# sourceMappingURL=otp.module.chunk.js.map