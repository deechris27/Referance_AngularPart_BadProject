webpackJsonp(["register.module"],{

/***/ "../../../../../angular/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/#/home\">FLAROW</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li class=\"active\">\n                        <a href=\"/#/login\">\n                            <i class=\"material-icons\">fingerprint</i> Login\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page login-page\" filter-color=\"black\">\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n                            <div class=\"card card-login card-hidden\">\n                                <div class=\"card-header text-center\" data-background-color=\"red\">\n                                    <!-- <i class=\"material-icons\">home</i> -->\n                                    <i class=\"fa fa-sign-in fa-3x\" aria-hidden=\"true\"></i>\n                                    <h4 class=\"card-title\">Register</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">perm_identity</i>\n                                        </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Name</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"uname\" name=\"uname\" [ngModel]=\"name\" required #uname=\"ngModel\">\n                                            <small [hidden]=\"uname.valid || (uname.pristine && !f.submitted)\" class=\"text-danger\">\n                                                Please enter your name\n                                            </small>\n                                        </div>\n                                    </div>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">email</i>\n                                            </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Email address</label>\n                                            <input type=\"email\" class=\"form-control\" id=\"email\" \n                                            name=\"email\" [ngModel]=\"emailId\" #email=\"ngModel\" \n                                            pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\"\n                                            required>\n                                            <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\" \n                                            class=\"text-danger\">\n                                                   Email id is invalid\n                                            </small>\n                                        </div>\n                                    </div>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">phone_android</i>\n                                            </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Mobile</label>\n                                            <input type=\"text\" id=\"mobile\" name=\"mobile\" \n                                            ngModel class=\"form-control\" [(ngModel)]=\"mobileNo\" \n                                            #mobile=\"ngModel\" pattern=\"[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]\"\n                                            minlength=\"10\" maxlength=\"10\" required>\n                                            <small [hidden]=\"mobile.valid || (mobile.pristine && !f.submitted)\" \n                                            class=\"text-danger\">\n                                                    Mobile number is invalid\n                                            </small>\n                                        </div>\n                                    </div>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">lock_outline</i>\n                                            </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Password</label>\n                                            <input type=\"password\" id=\"password\" \n                                            name=\"password\" ngModel class=\"form-control\" \n                                            [(ngModel)]=\"pwd\" #password=\"ngModel\" minlength=\"6\" required>\n                                            <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" \n                                            class=\"text-danger\">\n                                                    Password is invalid (should be minimum 6 characters)\n                                            </small>\n                                        </div>\n                                    </div>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                                    <!-- <i class=\"material-icons\">lock_outline</i> -->\n                                        </span>\n                                        <div class=\"form-group label-floating\">\n                                            <div class=\"radio\">\n                                                <label>\n                                                        <input type=\"radio\" name=\"userType\" \n                                                        [value]=\"1\"\n                                                        [checked]=\"userType===1\"\n                                                        (change)=\"onTypeChange(1)\" \n                                                        required>\n                                                        LandLord\n                                                </label>\n                                            </div>\n                                            <div class=\"radio\">\n                                                <label>\n                                                        <input type=\"radio\" name=\"userType\" \n                                                        [value]=\"0\"\n                                                        [checked]=\"userType===0\"\n                                                        (change)=\"onTypeChange(0)\" \n                                                        required> \n                                                        Tenant\n                                                </label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"footer text-center\">\n                                    <button [disabled]=\"!f.valid\" type=\"submit\" \n                                    class=\"btn btn-rose btn-simple btn-wd btn-lg\">Sign Up</button>\n                                    <a href=\"#/login\" \n                                    class=\"btn btn-rose btn-simple btn-wd btn-lg\">Already registered? Sign In</a>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"full-page-background\" style=\"background-image: url(//studphotos.s3.amazonaws.com/img/apartment.jpg) \"></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
        this.test = new Date();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    RegisterComponent.prototype.onTypeChange = function (val) {
        this.userType = val;
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var name = form.value.uname;
        var email = form.value.email;
        var mobile = form.value.mobile;
        var password = form.value.password;
        var userType = this.userType;
        this.data = {
            name: form.value.uname,
            mobile: form.value.mobile,
            email: form.value.email,
            password: form.value.password,
            type: this.userType,
            otp: 0
        };
        localStorage.setItem('lname', form.value.uname);
        localStorage.setItem('lmobile', form.value.mobile);
        localStorage.setItem('lemail', form.value.email);
        localStorage.setItem('lpwd', form.value.password);
        localStorage.setItem('ltype', userType + '');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post('/api/register', this.data, options)
            .toPromise()
            .then(function (response) {
            _this.router.navigate(['/otp']);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-register-cmp',
            template: __webpack_require__("../../../../../angular/app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../angular/app/register/register.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__md_md_module__ = __webpack_require__("../../../../../angular/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_component__ = __webpack_require__("../../../../../angular/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_routing__ = __webpack_require__("../../../../../angular/app/register/register.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RegisterModule = (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__register_routing__["a" /* RegisterRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__md_md_module__["a" /* MdModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__register_component__["a" /* RegisterComponent */]]
        })
    ], RegisterModule);
    return RegisterModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ "../../../../../angular/app/register/register.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__("../../../../../angular/app/register/register.component.ts");

var RegisterRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__register_component__["a" /* RegisterComponent */]
            }]
    }
];
//# sourceMappingURL=register.routing.js.map

/***/ })

});
//# sourceMappingURL=register.module.chunk.js.map