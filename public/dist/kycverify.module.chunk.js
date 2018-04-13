webpackJsonp(["kycverify.module"],{

/***/ "../../../../../angular/app/kycverify/kycverify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Know Your Customer Document Verification</h4>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <p>Aadhar card</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <img class=\"img\" id=\"aadhar\" #aadhar src=\"http://studphotos.s3.amazonaws.com/img/800x500.jpg\"\n                                onerror=\"this.src='http://studphotos.s3.amazonaws.com/img/800x500.jpg';\"/>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Verification Status</label>\n                                    <span *ngIf=\"kycStatus.pass_stat == 'undefined' \">\n                                        <button class=\"btn btn-primary btn-round btn-xs\">Not yet uploaded</button>\n                                    </span>\n                                    <span *ngIf=\"kycStatus.pass_stat == 1 \">\n                                        <button class=\"btn btn-warning btn-round btn-xs\">sent for verification</button>\n                                    </span>    \n                                    <span *ngIf=\"kycStatus.pass_stat == 2 \">\n                                        <button class=\"btn btn-success btn-round btn-xs\">Approved</button>\n                                    </span>                                      \n                                    <span *ngIf=\"kycStatus.pass_stat == 3 \">\n                                        <button class=\"btn btn-failure btn-round btn-xs\">Document Invalid</button>\n                                    </span> \n                                </div>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" [value]=\"1\" \n                                            [checked]=\"kycStatus.a_stat==1\"\n                                            (change)=\"onAadharStatusChange(1)\"\n                                            name=\"astatus\" [(ngModel)]=\"kycStatus.a_stat\">\n                                            Verified\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" [value]=\"3\" \n                                            [checked]=\"kycStatus.a_stat==3\"\n                                            (change)=\"onAadharStatusChange(3)\"\n                                            name=\"astatus\" [(ngModel)]=\"kycStatus.a_stat\">\n                                            Invalid\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <p>Voter ID</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <img class=\"img\" id=\"voterid\" #voterid src=\"http://studphotos.s3.amazonaws.com/img/800x500.jpg\"\n                                onerror=\"this.src='http://studphotos.s3.amazonaws.com/img/800x500.jpg';\"/>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Verification Status</label>\n                                    <span *ngIf=\"kycStatus.v_stat == 'undefined' \">\n                                        <button class=\"btn btn-primary btn-round btn-xs\">Not yet uploaded</button>\n                                    </span>\n                                    <span *ngIf=\"kycStatus.v_stat == 1 \">\n                                        <button class=\"btn btn-warning btn-round btn-xs\">sent for verification</button>\n                                    </span>    \n                                    <span *ngIf=\"kycStatus.v_stat == 2 \">\n                                        <button class=\"btn btn-success btn-round btn-xs\">Approved</button>\n                                    </span>                                      \n                                    <span *ngIf=\"kycStatus.v_stat == 3 \">\n                                        <button class=\"btn btn-failure btn-round btn-xs\">Document Invalid</button>\n                                    </span> \n                                </div>\n                            </div>                            \n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" [value]=\"1\" \n                                            [checked]=\"kycStatus.v_stat===1\"\n                                            (change)=\"onVoterIdStatusChange(1)\"\n                                            name=\"vstatus\" checked=\"true\">\n                                            Verified\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" [value]=\"3\" \n                                            [checked]=\"kycStatus.v_stat===3\"\n                                            (change)=\"onVoterIdStatusChange(3)\"\n                                            name=\"vstatus\">\n                                            Invalid\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <p>Passport</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <img class=\"img\" id=\"passport\" #passport src=\"http://studphotos.s3.amazonaws.com/img/800x500.jpg\"\n                                onerror=\"this.src='http://studphotos.s3.amazonaws.com/img/800x500.jpg';\"/>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Verification Status</label>\n                                    <span *ngIf=\"kycStatus.pass_stat == 'undefined' \">\n                                        <button class=\"btn btn-primary btn-round btn-xs\">Not yet uploaded</button>\n                                    </span>\n                                    <span *ngIf=\"kycStatus.pass_stat == 1 \">\n                                        <button class=\"btn btn-warning btn-round btn-xs\">sent for verification</button>\n                                    </span>    \n                                    <span *ngIf=\"kycStatus.pass_stat == 2 \">\n                                        <button class=\"btn btn-success btn-round btn-xs\">Approved</button>\n                                    </span>                                      \n                                    <span *ngIf=\"kycStatus.pass_stat == 3 \">\n                                        <button class=\"btn btn-failure btn-round btn-xs\">Document Invalid</button>\n                                    </span> \n                                </div>\n                            </div>                            \n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <div class=\"radio\">\n                                        <label>\n                                                <input type=\"radio\" [value]=\"1\" \n                                                [checked]=\"kycStatus.pass_stat===1\"\n                                                (change)=\"onPassportStatusChange(1)\"\n                                                name=\"pstatus\" checked=\"true\">\n                                                Verified\n                                            </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                                <input type=\"radio\" [value]=\"3\" \n                                                [checked]=\"kycStatus.pass_stat===3\"\n                                                (change)=\"onPassportStatusChange(3)\"\n                                                name=\"pstatus\">\n                                                Invalid\n                                            </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <p>Full KYC Status</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group label-floating\">\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" [value]=\"1\" \n                                            [checked]=\"kycStatus.status===1\"\n                                            (change)=\"onStatusChange(1)\"\n                                            name=\"status\" checked=\"true\">\n                                            Verified\n                                        </label>\n                                    </div>\n                                    <div class=\"radio\">\n                                        <label>\n                                            <input type=\"radio\" [value]=\"3\" \n                                            [checked]=\"kycStatus.status===0\"\n                                            (change)=\"onStatusChange(3)\"\n                                            name=\"status\">\n                                            Invalid\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <button class=\"btn btn-primary pull-right\" *ngIf=\"ownerView!=1\" (click)=\"update()\">\n                            <i class=\"material-icons\">save</i> KYC Status\n                    </button> \n                </div>\n                <!-- end content-->\n            </div>\n            <!--  end card  -->\n        </div>\n        <!-- end col-md-12 -->\n    </div>\n    <!-- end row -->\n</div>"

/***/ }),

/***/ "../../../../../angular/app/kycverify/kycverify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KycverifyComponent; });
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




var KycverifyComponent = (function () {
    function KycverifyComponent(http, toastr, router, rout) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.rout = rout;
        this.userId = localStorage.getItem("userId");
    }
    KycverifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.kycStatus = {
            tenant_id: '',
            voter_id: '',
            aadhar: '',
            passport: '',
            a_stat: '',
            v_stat: '',
            p_stat: '',
            status: ''
        };
        this.kycId = this.router.snapshot.paramMap.get('id');
        if (this.router.snapshot.paramMap.get('srcId')) {
            this.ownerView = 1;
        }
        var aadharPrv = this.aadhar.nativeElement;
        var voteridPrv = this.voterid.nativeElement;
        var passportPrv = this.passport.nativeElement;
        this.http.get('/api/kycStatus/' + this.kycId)
            .toPromise()
            .then(function (result) {
            var stat = result.json().data.kycStatus;
            _this.kycStatus.a_stat = stat.a_stat;
            _this.kycStatus.v_stat = stat.v_stat;
            _this.kycStatus.pass_stat = stat.pass_stat;
            _this.tenantId = stat.tenant_id;
            aadharPrv.src = "http://studphotos.s3.amazonaws.com/" + stat.tenant_id + "_kyc" + ".jpg";
            voteridPrv.src = "http://studphotos.s3.amazonaws.com/" + stat.tenant_id + "_vid" + ".jpg";
            passportPrv.src = "http://studphotos.s3.amazonaws.com/" + stat.tenant_id + "_pp" + ".jpg";
        });
    };
    KycverifyComponent.prototype.onAadharStatusChange = function (stat) {
        this.kycStatus.a_stat = stat;
    };
    KycverifyComponent.prototype.onVoterIdStatusChange = function (stat) {
        this.kycStatus.v_stat = stat;
    };
    KycverifyComponent.prototype.onPassportStatusChange = function (stat) {
        this.kycStatus.pass_stat = stat;
    };
    KycverifyComponent.prototype.onStatusChange = function (stat) {
        this.kycStatus.status = stat;
    };
    KycverifyComponent.prototype.update = function () {
        var _this = this;
        var data = {
            vid: this.kycStatus.v_stat,
            aadhar: this.kycStatus.a_stat,
            pp: this.kycStatus.pass_stat,
            status: this.kycStatus.status
        };
        this.http
            .post('/api/tenantKyc/' + this.tenantId, data)
            .subscribe(function (result) {
            _this.toastr.success('KYC status updated', 'Flarow!');
        });
    };
    KycverifyComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("aadhar"),
        __metadata("design:type", Object)
    ], KycverifyComponent.prototype, "aadhar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("voterid"),
        __metadata("design:type", Object)
    ], KycverifyComponent.prototype, "voterid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("passport"),
        __metadata("design:type", Object)
    ], KycverifyComponent.prototype, "passport", void 0);
    KycverifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'kycverify-list',
            template: __webpack_require__("../../../../../angular/app/kycverify/kycverify.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
    ], KycverifyComponent);
    return KycverifyComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=kycverify.component.js.map

/***/ }),

/***/ "../../../../../angular/app/kycverify/kycverify.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycverifyModule", function() { return KycverifyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kycverify_component__ = __webpack_require__("../../../../../angular/app/kycverify/kycverify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kycverify_routing__ = __webpack_require__("../../../../../angular/app/kycverify/kycverify.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var KycverifyModule = (function () {
    function KycverifyModule() {
    }
    KycverifyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__kycverify_routing__["a" /* KycverifyRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__kycverify_component__["a" /* KycverifyComponent */]]
        })
    ], KycverifyModule);
    return KycverifyModule;
}());

//# sourceMappingURL=kycverify.module.js.map

/***/ }),

/***/ "../../../../../angular/app/kycverify/kycverify.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KycverifyRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kycverify_component__ = __webpack_require__("../../../../../angular/app/kycverify/kycverify.component.ts");

var KycverifyRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__kycverify_component__["a" /* KycverifyComponent */]
            }]
    }
];
//# sourceMappingURL=kycverify.routing.js.map

/***/ })

});
//# sourceMappingURL=kycverify.module.chunk.js.map