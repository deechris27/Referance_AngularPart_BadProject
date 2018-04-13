webpackJsonp(["user.module"],{

/***/ "../../../../../angular/app/userpage/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".square-box{\n    width:200px;\n    height: 125px;\n}\n\n#profile-input { display: none; }\n\n.profile-input-hide {\n     position: relative;\n     left: -6em;\n}\n\n.bring-forward {\n     z-index:10;\n}\n \nimg {\n  background-image: url(\"//studphotos.s3.amazonaws.com/img/800x500.jpg\");\n  overflow: hidden;\n}\n\nimg:before {\n  content: \" \";\n  font-size: 1000px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/userpage/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">perm_identity</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Edit Profile -\n                            <small class=\"category\">Complete your profile</small>\n                        </h4>\n                        <form (ngSubmit)=\"profile(f);\" #f=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">First Name</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"fname\" \n                                        name=\"fname\" [(ngModel)]=\"property.fname\" #fname=\"ngModel\">\n                                        <!-- <small [hidden]=\"fname.valid || (fname.pristine && !f.submitted)\" class=\"text-danger\">\n                                                First Name is required\n                                        </small> -->\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Last Name</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"lname\"\n                                        name=\"lname\" [(ngModel)]=\"property.lname\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Address</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"address\"\n                                        name=\"address\" [(ngModel)]=\"property.address\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">City</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"city\"\n                                        name=\"city\" [(ngModel)]=\"property.city\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">State</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"state\"\n                                        name=\"state\" [(ngModel)]=\"property.state\">\n                                    </div>\n                                </div>                                \n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Country</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"country\"\n                                        name=\"country\" [(ngModel)]=\"property.country\">\n                                    </div>\n                                </div>                                \n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Postal Code</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"zip\"\n                                        name=\"zip\" [(ngModel)]=\"property.zip\" #zip=\"ngModel\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Mobile Number</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"mobile\"\n                                        name=\"mobile\" minlength=\"10\" maxlength=\"10\" \n                                        [(ngModel)]=\"property.mobile\"\n                                        #mobile=\"ngModel\" readonly>\n                                        <small [hidden]=\"mobile.valid || (mobile.pristine && !f.submitted)\" class=\"text-danger\">\n                                                Mobile number is invalid\n                                        </small>\n                                    </div>\n                                </div>    \n                                <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Email address</label>\n                                            <input type=\"email\" class=\"form-control\" id=\"email\"\n                                            name=\"email\" [(ngModel)]=\"property.email\" #email=\"ngModel\"\n                                            pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\" readonly>\n                                            <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\" class=\"text-danger\">\n                                                    Email id is invalid\n                                            </small>\n                                        </div>\n                                    </div>\n                                </div>                                                            \n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>About Me</label>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\"></label>\n                                            <textarea class=\"form-control\" rows=\"5\" id=\"about\"\n                                            name=\"about\" [(ngModel)]=\"property.about\" #about=\"ngModel\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"updUser\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Property Status</label>\n                                        <span *ngIf=\"property.status == 'undefined' \">\n                                            <button class=\"btn btn-primary btn-round btn-xs\">Not yet uploaded</button>\n                                        </span>\n                                        <span *ngIf=\"property.status == 0 \">\n                                            <button class=\"btn btn-warning btn-round btn-xs\">Inactive</button>\n                                        </span>    \n                                        <span *ngIf=\"property.status == 1 \">\n                                            <button class=\"btn btn-success btn-round btn-xs\">Active</button>\n                                        </span>                                      \n                                    </div>\n                                </div> \n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group label-floating\">\n                                        <div class=\"radio\">\n                                            <label>\n                                                    <input type=\"radio\" [value]=\"0\" \n                                                    [checked]=\"property.status===0\"\n                                                    (change)=\"onStatusChange(0)\"\n                                                    name=\"pstatus\">\n                                                    Inactive\n                                                </label>\n                                        </div>\n                                        <div class=\"radio\">\n                                            <label>\n                                                    <input type=\"radio\" [value]=\"1\" \n                                                    [checked]=\"property.status===1\"\n                                                    (change)=\"onStatusChange(1)\"\n                                                    name=\"pstatus\">\n                                                    Active\n                                                </label>\n                                        </div>                                           \n                                    </div>\n                                </div>\n                            </div>                             \n                            <button  *ngIf=\"!updUser\" type=\"submit\" class=\"btn btn-rose pull-right\">Update Profile</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                        <button *ngIf=\"updUser\" (click)=\"updateUserStatus()\" \n                        class=\"btn btn-rose pull-right\">Update Status</button>\n                        <div class=\"clearfix\"></div>                        \n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#pablo\">\n                            <img class=\"img\" #prfPreview src=\"http://studphotos.s3.amazonaws.com/img/400x400.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">{{property.fname}} {{property.lname}}</h4>\n                        <p class=\"description\">\n                            {{property.about}}\n                        </p>\n                        <input #profileinput class=\"ng-hide\" id=\"profile-input\" name=\"profile-input\" input-files=\"files\"\n                        type=\"file\"  accept=\"image/*\"\n                        (change)=\"readUrl($event)\"/>\n                        \n                        <label for=\"profile-input\" class=\"btn btn-rose pull-right\" #uploadButton id=\"uploadButton\"\n                        >Upload Photo</label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../angular/app/userpage/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(http, el, toastr, actrouter) {
        this.http = http;
        this.el = el;
        this.toastr = toastr;
        this.actrouter = actrouter;
        this.updUser = false;
        this.readOly = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.property = {
            fname: '',
            lname: '',
            address: '',
            city: '',
            state: '',
            country: '',
            zip: '',
            mobile: '',
            email: '',
            about: '',
            status: ''
        };
        if (this.actrouter.snapshot.paramMap.get('id') != null
            && this.actrouter.snapshot.paramMap.get('updId') != null) {
            this.userId = this.actrouter.snapshot.paramMap.get('id');
            this.updUser = true;
        }
        else if (this.actrouter.snapshot.paramMap.get('id') != null) {
            this.userId = this.actrouter.snapshot.paramMap.get('id');
        }
        else {
            this.userId = localStorage.getItem("userId");
        }
        this.http.get('/api/getProfile/' + this.userId)
            .toPromise()
            .then(function (result) {
            var user = result.json().data.user;
            if (user !== undefined) {
                _this.property.fname = user.fname;
                _this.property.lname = user.lname;
                _this.property.email = user.email;
                _this.property.mobile = user.phone;
                _this.property.address = user.address;
                _this.property.city = user.city;
                _this.property.state = user.state;
                _this.property.country = user.country;
                _this.property.zip = user.zip;
                _this.property.about = user.about;
                _this.property.status = user.status;
                var imgPrv = _this.prfPreview.nativeElement;
                imgPrv.src = "http://studphotos.s3.amazonaws.com/" + _this.userId + ".jpg";
            }
            if (!_this.updUser) {
                _this.property.email = localStorage.getItem("email");
                _this.property.mobile = localStorage.getItem("mobile");
            }
        });
    };
    UserComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var imgPrv = _this.prfPreview.nativeElement;
                imgPrv.src = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    UserComponent.prototype.profile = function (form) {
        var _this = this;
        var data = {
            fname: form.value.fname,
            lname: form.value.lname,
            userId: localStorage.getItem("userId"),
            address: form.value.address,
            city: form.value.city,
            state: form.value.state,
            country: form.value.country,
            zip: form.value.zip,
            phone: form.value.mobile,
            email: form.value.email,
            about: form.value.about
        };
        this.http.post('/api/addProfile/' + data.userId, data)
            .toPromise()
            .then(function (result) {
            _this.imageId = result.json().data.data;
            if (!result.json().errors) {
                _this.toastr.success('Profile updated', 'Flarow!');
                _this.imageId = data.userId;
                var fileBrowser = _this.fileInput.nativeElement;
                if (fileBrowser.files.length === 0) {
                    return;
                }
                ;
                var files = fileBrowser.files;
                var formData = new FormData();
                for (var i = 0; i < files.length; i++) {
                    formData.append("image", files[i]);
                    formData.append("name", _this.imageId);
                }
                _this.http
                    .post('/api/s3upload', formData)
                    .subscribe(function (result) {
                    var imgPrv = _this.prfPreview.nativeElement;
                });
            }
        });
    };
    UserComponent.prototype.updateUserStatus = function () {
        var _this = this;
        var data = {
            status: this.property.status
        };
        this.http.post('/api/updTenantStatus/' + this.userId, data)
            .toPromise()
            .then(function (result) {
            _this.toastr.success('User status updated', 'Flarow!');
        });
    };
    UserComponent.prototype.onStatusChange = function (stat) {
        this.property.status = stat;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("profileinput"),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("prfPreview"),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "prfPreview", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("uploadButton"),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "uploadButton", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-user-cmp',
            template: __webpack_require__("../../../../../angular/app/userpage/user.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/userpage/user.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
    ], UserComponent);
    return UserComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../angular/app/userpage/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_component__ = __webpack_require__("../../../../../angular/app/userpage/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_routing__ = __webpack_require__("../../../../../angular/app/userpage/user.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__user_routing__["a" /* UserRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__user_component__["a" /* UserComponent */]]
        })
    ], UserModule);
    return UserModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../angular/app/userpage/user.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_component__ = __webpack_require__("../../../../../angular/app/userpage/user.component.ts");

var UserRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__user_component__["a" /* UserComponent */]
            }]
    }
];
//# sourceMappingURL=user.routing.js.map

/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map