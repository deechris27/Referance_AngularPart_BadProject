webpackJsonp(["kyc.module"],{

/***/ "../../../../../angular/app/kyc/kyc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content container-bk\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Know Your Customer</h4>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Aadhar card (Mandatory)</label>\n                                    <span *ngIf=\"tenantKyc.a_stat == 'undefined' \">\n                                        <button class=\"btn btn-primary btn-round btn-xs\">Not yet uploaded</button>\n                                    </span>\n                                    <span *ngIf=\"tenantKyc.a_stat == 1 \">\n                                        <button class=\"btn btn-warning btn-round btn-xs\">sent for verification</button>\n                                    </span>    \n                                    <span *ngIf=\"tenantKyc.a_stat == 2 \">\n                                        <button class=\"btn btn-success btn-round btn-xs\">Approved</button>\n                                    </span>                                      \n                                    <span *ngIf=\"tenantKyc.a_stat == 3 \">\n                                        <button class=\"btn btn-failure btn-round btn-xs\">Document Invalid</button>\n                                    </span>   \n                                </div>\n                            </div>\n                            <div class=\"col-sm-6 col-sm-offset-1\">\n                                <img class=\"img\" id=\"aadhar\" #aadhar \n                                    src=\"http://studphotos.s3.amazonaws.com/img/800x500.jpg\"\n                                    onerror=\"this.src='http://studphotos.s3.amazonaws.com/img/800x500.jpg';\"/>\n                                <input #fileinput1 style=\"visibility: hidden; position: absolute;\" \n                                    id=\"file-input\" input-files=\"files\" type=\"file\" accept=\"image/*\"\n                                    (change)=\"readUrl($event)\" />\n\n                                <label for=\"file-input\" class=\"btn btn-primary btn-just-icon btn-round\" \n                                    #uploadButton id=\"uploadButton\">\n                                    <i class=\"material-icons\">file_upload</i>\n                                </label>\n                                <button class=\"btn btn-primary btn-just-icon btn-round pull-right\" (click)=\"uploadAadhar()\">\n                                        <i class=\"material-icons\">save</i>\n                                </button> \n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Voter ID (Non Mandatory)</label>\n                                    <span *ngIf=\"tenantKyc.v_stat == 'undefined' \">\n                                        <button class=\"btn btn-primary btn-round btn-xs\">Not yet uploaded</button>\n                                    </span>\n                                    <span *ngIf=\"tenantKyc.v_stat == 1 \">\n                                        <button class=\"btn btn-warning btn-round btn-xs\">sent for verification</button>\n                                    </span>    \n                                    <span *ngIf=\"tenantKyc.v_stat == 2 \">\n                                        <button class=\"btn btn-success btn-round btn-xs\">Approved</button>\n                                    </span>                                      \n                                    <span *ngIf=\"tenantKyc.v_stat == 3 \">\n                                        <button class=\"btn btn-failure btn-round btn-xs\">Document Invalid</button>\n                                    </span> \n                                </div>\n                            </div>\n                            <div class=\"col-sm-6 col-sm-offset-1\">\n                                <img class=\"img\" id=\"voterid\" #voterid \n                                    src=\"http://studphotos.s3.amazonaws.com/img/800x500.jpg\"\n                                    onerror=\"this.src='http://studphotos.s3.amazonaws.com/img/800x500.jpg';\"/>\n                                <input #fileinput2 style=\"visibility: hidden; position: absolute;\" \n                                    id=\"file-input1\" input-files=\"files\" type=\"file\" accept=\"image/*\"\n                                    (change)=\"readUrl1($event)\" />\n                                \n                                <label for=\"file-input1\" class=\"btn btn-primary btn-just-icon btn-round\" \n                                    #uploadButton id=\"uploadButton\">\n                                    <i class=\"material-icons\">file_upload</i>\n                                </label>\n                                <button class=\"btn btn-primary btn-just-icon btn-round pull-right\" (click)=\"uploadVoterId()\">\n                                    <i class=\"material-icons\">save</i>\n                                </button> \n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Passport (Optional)</label>\n                                    <span *ngIf=\"tenantKyc.pass_stat == 'undefined' \">\n                                        <button class=\"btn btn-primary btn-round btn-xs\">Not yet uploaded</button>\n                                    </span>\n                                    <span *ngIf=\"tenantKyc.pass_stat == 1 \">\n                                        <button class=\"btn btn-warning btn-round btn-xs\">sent for verification</button>\n                                    </span>    \n                                    <span *ngIf=\"tenantKyc.pass_stat == 2 \">\n                                        <button class=\"btn btn-success btn-round btn-xs\">Approved</button>\n                                    </span>                                      \n                                    <span *ngIf=\"tenantKyc.pass_stat == 3 \">\n                                        <button class=\"btn btn-failure btn-round btn-xs\">Document Invalid</button>\n                                    </span> \n                                </div>\n                            </div>\n                            <div class=\"col-sm-6 col-sm-offset-1\">\n                                <img class=\"img\" id=\"passport\" #passport \n                                    src=\"http://studphotos.s3.amazonaws.com/img/800x500.jpg\"\n                                    onerror=\"this.src='http://studphotos.s3.amazonaws.com/img/800x500.jpg';\"/>\n                                <input #fileinput3 style=\"visibility: hidden; position: absolute;\" \n                                    id=\"file-input2\" input-files=\"files\" type=\"file\" accept=\"image/*\"\n                                    (change)=\"readUrl2($event)\" />\n\n                                <label for=\"file-input2\" class=\"btn btn-primary btn-just-icon btn-round\" \n                                    #uploadButton id=\"uploadButton\">\n                                    <i class=\"material-icons\">file_upload</i>\n                                </label>\n                                <button class=\"btn btn-primary btn-just-icon btn-round pull-right\" (click)=\"uploadPassport()\">\n                                    <i class=\"material-icons\">save</i>\n                                </button> \n                            </div>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n                        <i class=\"material-icons\">share</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h6 class=\"card-title\">Like to share KYC documents to your owner?</h6>\n                        <div class=\"toolbar\">\n                            <div class=\"form-group label-floating\">\n                                <button class=\"btn btn-primary btn-round pull-right\" *ngIf=\"tenantKyc.share==0\" (click)=\"shareKyc(1)\">Share</button>\n                                <button class=\"btn btn-primary btn-round pull-right\" *ngIf=\"tenantKyc.share==1\" (click)=\"shareKyc(0)\">Unshare</button>  \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <!-- end row -->                   \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/kyc/kyc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KycComponent; });
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




var KycComponent = (function () {
    function KycComponent(http, toastr, router, rout) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.rout = rout;
    }
    KycComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.tenantKyc = {
            a_stat: '',
            v_stat: '',
            pass_stat: ''
        };
        this.userId = localStorage.getItem("userId");
        var aadharPrv = this.aadhar.nativeElement;
        var voteridPrv = this.voterid.nativeElement;
        var passportPrv = this.passport.nativeElement;
        this.http.get('/api/getKyc/' + this.userId)
            .toPromise()
            .then(function (result) {
            var data = result.json().data.kycData;
            if (data != null) {
                _this.tenantKyc = data;
                aadharPrv.src = "http://studphotos.s3.amazonaws.com/" + _this.userId + "_kyc" + ".jpg";
                voteridPrv.src = "http://studphotos.s3.amazonaws.com/" + _this.userId + "_vid" + ".jpg";
                passportPrv.src = "http://studphotos.s3.amazonaws.com/" + _this.userId + "_pp" + ".jpg";
            }
        });
    };
    KycComponent.prototype.readUrl = function (event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                $("#aadhar").attr("src", event.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    KycComponent.prototype.readUrl1 = function (event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                $("#voterid").attr("src", event.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    KycComponent.prototype.readUrl2 = function (event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                $("#passport").attr("src", event.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    KycComponent.prototype.uploadAadhar = function () {
        var _this = this;
        var fileBrowser = this.fileInput1.nativeElement;
        if (fileBrowser.files.length === 0) {
            return;
        }
        ;
        var files = fileBrowser.files;
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append("image", files[i]);
            formData.append("name", this.userId + '_kyc');
        }
        this.http
            .post('/api/s3upload', formData)
            .subscribe(function (result) {
            var data = {
                aadhar: 1
            };
            _this.http
                .post('/api/tenantKyc/' + _this.userId, data)
                .subscribe(function (result) {
                _this.tenantKyc.a_stat = 1;
            });
        });
    };
    KycComponent.prototype.uploadVoterId = function () {
        var _this = this;
        var fileBrowser = this.fileInput2.nativeElement;
        if (fileBrowser.files.length === 0) {
            return;
        }
        ;
        var files = fileBrowser.files;
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append("image", files[i]);
            formData.append("name", this.userId + '_vid');
        }
        this.http
            .post('/api/s3upload', formData)
            .subscribe(function (result) {
            var data = {
                vid: 1
            };
            _this.http
                .post('/api/tenantKyc/' + _this.userId, data)
                .subscribe(function (result) {
                _this.tenantKyc.v_stat = 1;
            });
        });
    };
    KycComponent.prototype.uploadPassport = function () {
        var _this = this;
        var fileBrowser = this.fileInput3.nativeElement;
        if (fileBrowser.files.length === 0) {
            return;
        }
        ;
        var files = fileBrowser.files;
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append("image", files[i]);
            formData.append("name", this.userId + '_pp');
        }
        this.http
            .post('/api/s3upload', formData)
            .subscribe(function (result) {
            var data = {
                pp: 1
            };
            _this.http
                .post('/api/tenantKyc/' + _this.userId, data)
                .subscribe(function (result) {
                _this.tenantKyc.pass_stat = 1;
            });
        });
    };
    KycComponent.prototype.shareKyc = function (shareData) {
        var _this = this;
        var data = {
            share: shareData
        };
        this.http
            .post('/api/updateKyc/' + this.userId, data)
            .subscribe(function (result) {
            _this.tenantKyc.share = shareData;
        });
    };
    KycComponent.prototype.ngAfterViewInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("fileinput1"),
        __metadata("design:type", Object)
    ], KycComponent.prototype, "fileInput1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("fileinput2"),
        __metadata("design:type", Object)
    ], KycComponent.prototype, "fileInput2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("fileinput3"),
        __metadata("design:type", Object)
    ], KycComponent.prototype, "fileInput3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("aadhar"),
        __metadata("design:type", Object)
    ], KycComponent.prototype, "aadhar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("voterid"),
        __metadata("design:type", Object)
    ], KycComponent.prototype, "voterid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("passport"),
        __metadata("design:type", Object)
    ], KycComponent.prototype, "passport", void 0);
    KycComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'kyc-list',
            template: __webpack_require__("../../../../../angular/app/kyc/kyc.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
    ], KycComponent);
    return KycComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=kyc.component.js.map

/***/ }),

/***/ "../../../../../angular/app/kyc/kyc.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycModule", function() { return KycModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kyc_component__ = __webpack_require__("../../../../../angular/app/kyc/kyc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kyc_routing__ = __webpack_require__("../../../../../angular/app/kyc/kyc.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var KycModule = (function () {
    function KycModule() {
    }
    KycModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__kyc_routing__["a" /* KycRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__kyc_component__["a" /* KycComponent */]]
        })
    ], KycModule);
    return KycModule;
}());

//# sourceMappingURL=kyc.module.js.map

/***/ }),

/***/ "../../../../../angular/app/kyc/kyc.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KycRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kyc_component__ = __webpack_require__("../../../../../angular/app/kyc/kyc.component.ts");

var KycRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__kyc_component__["a" /* KycComponent */]
            }]
    }
];
//# sourceMappingURL=kyc.routing.js.map

/***/ })

});
//# sourceMappingURL=kyc.module.chunk.js.map