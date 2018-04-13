webpackJsonp(["forgetpwd.module"],{

/***/ "../../../../../angular/app/forgetpwd/forgetpwd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/#/home\">FLAROW</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li class=\"active\">\n                        <a href=\"/#/login\">\n                            <i class=\"material-icons\">fingerprint</i>Login\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page login-page\" filter-color=\"black\">\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                        <form #f=\"ngForm\">\n                            <div class=\"card card-login card-hidden\">\n                                <div class=\"card-header text-center\" data-background-color=\"red\">\n                                    <i class=\"fa fa-shield fa-3x\" aria-hidden=\"true\"></i>\n                                    <h4 class=\"card-title\">Forget Password</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">email</i>\n                                        </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Email address</label>\n                                            <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n                                        </div>\n                                    </div>\n                                    <div class=\"input-group\" *ngIf=\"present==1\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">security</i>\n                                        </span>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-7 col-sm-6\">\n                                                <div class=\"form-group label-floating\">\n                                                    <label class=\"control-label\">OTP</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"uname\" name=\"uname\" [ngModel]=\"name\" required #uname=\"ngModel\">\n                                                    <small [hidden]=\"uname.valid || (uname.pristine && !f.submitted)\" class=\"text-danger\">\n                                                        Please enter your otp\n                                                    </small>\n                                                </div>\n                                            </div>\n                                            <!-- <div class=\"col-md-7 col-sm-6\">\n                                                <div class=\"form-group label-floating\">\n                                                    <button class=\"btn btn-rose btn-simple btn-wd btn-lg pull-right\" (click)=\"resend()\">\n                                                        Resend OTP?\n                                                    </button>\n                                                </div>\n                                            </div> -->\n                                        </div>\n                                    </div>\n                                    <div class=\"input-group\" *ngIf=\"present==1\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">lock_outline</i>\n                                        </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">New Password</label>\n                                            <input type=\"password\" id=\"password\" \n                                            name=\"password\" ngModel class=\"form-control\" \n                                            [(ngModel)]=\"pwd\" minlength=\"8\" #password=\"ngModel\" required>\n                                            <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" \n                                            class=\"text-danger\">\n                                                    Password is invalid\n                                            </small>\n                                        </div>\n                                    </div>                                    \n                                </div>\n                                <div class=\"footer text-center\">\n                                    <button [disabled]=\"!f.valid\" (click)=\"onSubmit(f)\" class=\"btn btn-rose btn-simple btn-wd btn-lg\">Submit</button>\n                                    <a href=\"#/register\" class=\"btn btn-rose btn-simple btn-wd btn-lg\">Sign up</a>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"full-page-background\" style=\"background-image: url(//studphotos.s3.amazonaws.com/img/apartment.jpg) \"></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/forgetpwd/forgetpwd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPwdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgetPwdComponent = (function () {
    function ForgetPwdComponent(http, router, toastr) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
    }
    ForgetPwdComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    ForgetPwdComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(form.value.uname);
        if (form.value.uname !== undefined && form.value.uname !== null) {
            this.postData = {
                email: form.value.email,
                otp: form.value.uname,
                password: form.value.password
            };
            this.http.post('/api/auth/password/reset', this.postData, options)
                .toPromise()
                .then(function (response) {
                if (response.json().data != undefined) {
                    _this.toastr.success('Password reset done, Please login with new password ', 'Flarow!');
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastr.error('Invalid OTP ', 'Flarow!');
                }
            });
        }
        else {
            this.postData = {
                email: form.value.email
            };
            this.http.post('/api/checkUser', this.postData, options)
                .toPromise()
                .then(function (response) {
                _this.present = response.json().data.result;
                if (_this.present == 0) {
                    _this.toastr.error('Email Id doesnt exists ', 'Flarow!');
                }
                else {
                    var data = {
                        email: form.value.email
                    };
                    _this.http.post('/api/sendByEmail', data, options)
                        .toPromise()
                        .then(function (response) {
                    });
                }
            });
        }
    };
    ForgetPwdComponent.prototype.resend = function () {
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
    ForgetPwdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-fpwd-cmp',
            template: __webpack_require__("../../../../../angular/app/forgetpwd/forgetpwd.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object])
    ], ForgetPwdComponent);
    return ForgetPwdComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=forgetpwd.component.js.map

/***/ }),

/***/ "../../../../../angular/app/forgetpwd/forgetpwd.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPwdModule", function() { return ForgetPwdModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__md_md_module__ = __webpack_require__("../../../../../angular/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgetpwd_component__ = __webpack_require__("../../../../../angular/app/forgetpwd/forgetpwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgetpwd_routing__ = __webpack_require__("../../../../../angular/app/forgetpwd/forgetpwd.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ForgetPwdModule = (function () {
    function ForgetPwdModule() {
    }
    ForgetPwdModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__forgetpwd_routing__["a" /* ForgetPwdRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__md_md_module__["a" /* MdModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__forgetpwd_component__["a" /* ForgetPwdComponent */]]
        })
    ], ForgetPwdModule);
    return ForgetPwdModule;
}());

//# sourceMappingURL=forgetpwd.module.js.map

/***/ }),

/***/ "../../../../../angular/app/forgetpwd/forgetpwd.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPwdRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forgetpwd_component__ = __webpack_require__("../../../../../angular/app/forgetpwd/forgetpwd.component.ts");

var ForgetPwdRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__forgetpwd_component__["a" /* ForgetPwdComponent */]
            }]
    }
];
//# sourceMappingURL=forgetpwd.routing.js.map

/***/ })

});
//# sourceMappingURL=forgetpwd.module.chunk.js.map