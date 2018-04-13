webpackJsonp(["deposit.module"],{

/***/ "../../../../../angular/app/deposit/deposit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".square-box{\n    width:200px;\n    height: 125px;\n}\n\n#file-input { display: none; }\n\n.file-input-hide {\n     position: relative;\n     left: -6em;\n}\n\n.bring-forward {\n     z-index:10;\n}\n \nimg {\n  background-image: url(\"//studphotos.s3.amazonaws.com/img/800x500.jpg\");\n  overflow: hidden;\n}\n\nimg:before {\n  content: \" \";\n  font-size: 1000px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/deposit/deposit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">account_balance</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Bank details -\n                            <small class=\"category\">Deposit your rent to FLAROW account</small>\n                        </h4>\n                        <!-- <div class=\"col-md-4 col-md-offset-4 col-sm-offset-3\"> -->\n                        <div class=\"row\">\n                            <div class=\"col-md-10\">\n                                <div class=\"form-group\">\n                                    <h5>Transfer your monthly rent to Flarow account through NEFT/RTGS/IMPS</h5>\n                                    <h6>Please transfer your rent to the below account </h6>\n\n                                    <table cellpadding=\"10\" cellspacing=\"50\" border=\"0\">\n                                        <tr>\n                                            <td>Bank Name</td>\n                                            <td></td>\n                                            <td>HDFC</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Account Holder Name</td>\n                                            <td><span>&nbsp;</span></td>\n                                            <td>ANAMIK ADHIKARY</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Account Number</td>\n                                            <td></td>\n                                            <td>50100028057950</td>\n                                        </tr>\n                                        <tr>\n                                            <td>IFSC Code</td>\n                                            <td></td>\n                                            <td>HDFC0001852</td>\n                                        </tr>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">account_balance_wallet</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">After Funds transfer -\n                            <small class=\"category\">Update your Funds Transfer Reference Number</small>\n                        </h4>\n                        <form (ngSubmit)=\"upload(f)\" #f=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Amount deposited</label>\n                                        <input type=\"text\" id=\"ramount\" name=\"ramount\" ngModel class=\"form-control\" [(ngModel)]=\"ramountText\" #ramount=\"ngModel\"\n                                            required>\n                                        <small [hidden]=\"ramount.valid || (ramount.pristine && !f.submitted)\" class=\"text-danger\">\n                                            Amount is invalid\n                                        </small>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Reference Number</label>\n                                        <input type=\"text\" id=\"rnumber\" name=\"rnumber\" ngModel class=\"form-control\" [(ngModel)]=\"rnumberText\" #rnumber=\"ngModel\"\n                                            required>\n                                        <small [hidden]=\"rnumber.valid || (rnumber.pristine && !f.submitted)\" class=\"text-danger\">\n                                            Reference number is invalid\n                                        </small>\n                                    </div>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-rose pull-right\">Update</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/deposit/deposit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositComponent; });
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




var DepositComponent = (function () {
    function DepositComponent(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
    }
    DepositComponent.prototype.ngOnInit = function () { };
    DepositComponent.prototype.upload = function (form) {
        var _this = this;
        var data = {
            refNo: form.value.rnumber,
            amount: form.value.ramount,
            id: localStorage.getItem("userId")
        };
        this.http.post('/api/netbanking', data)
            .toPromise()
            .then(function (result) {
            _this.toastr.success('Payment details updated', 'Flarow!');
            _this.router.navigate(['/ph']);
        });
    };
    DepositComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-deposit-cmp',
            template: __webpack_require__("../../../../../angular/app/deposit/deposit.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/deposit/deposit.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], DepositComponent);
    return DepositComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=deposit.component.js.map

/***/ }),

/***/ "../../../../../angular/app/deposit/deposit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositModule", function() { return DepositModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deposit_component__ = __webpack_require__("../../../../../angular/app/deposit/deposit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deposit_routing__ = __webpack_require__("../../../../../angular/app/deposit/deposit.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DepositModule = (function () {
    function DepositModule() {
    }
    DepositModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__deposit_routing__["a" /* DepositRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__deposit_component__["a" /* DepositComponent */]]
        })
    ], DepositModule);
    return DepositModule;
}());

//# sourceMappingURL=deposit.module.js.map

/***/ }),

/***/ "../../../../../angular/app/deposit/deposit.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deposit_component__ = __webpack_require__("../../../../../angular/app/deposit/deposit.component.ts");

var DepositRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__deposit_component__["a" /* DepositComponent */]
            }]
    }
];
//# sourceMappingURL=deposit.routing.js.map

/***/ })

});
//# sourceMappingURL=deposit.module.chunk.js.map