webpackJsonp(["tagdetails.module"],{

/***/ "../../../../../angular/app/tagdetails/tagdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content container-bk\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Tag request details</h4>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Requested by</label>\n                                    <p>{{tagging.createdBy}}</p>  \n                                </div>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Updated by</label>\n                                    <p>{{tagging.updatedBy}}</p>  \n                                </div>\n                            </div>\n                            <div class=\"col-md-2\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Request Status</label>\n                                    <span *ngIf=\"tagging.request_status == 1 \">\n                                        <button class=\"btn btn-primary btn-round btn-xs\">Untagged</button>\n                                    </span>\n                                    <span *ngIf=\"tagging.request_status == 4 \">\n                                        <button class=\"btn btn-warning btn-round btn-xs\">Approved</button>\n                                    </span> \n                                    <span *ngIf=\"tagging.request_status == 5 \">\n                                        <button class=\"btn btn-warning btn-round btn-xs\">Invitation sent</button>\n                                    </span>    \n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Owner Details</label> \n                                    <table>\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    {{tagging.ownerName}}\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    {{tagging.about}}\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    {{tagging.ownerEmail}}\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    {{tagging.ownerMobile}}\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    {{tagging.ownerAddress}}\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    {{tagging.ownerCity}} {{tagging.ownerState}} {{tagging.ownerZip}}\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Tenant Details</label> \n                                    <table>\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    {{tagging.tenantName}}\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    {{tagging.tenantMobile}}\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Property Details</label>\n                                    <table>\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    Property id {{tagging.property_id}}\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    {{tagging.title}}\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    {{tagging.propAddress}} {{tagging.propCity}} {{tagging.propState}} {{tagging.propZip}}\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group label-floating\">\n                                    <label class=\"control-label\">Rent Details</label>\n                                    <table>\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    {{tagging.rent}}\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->                   \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/tagdetails/tagdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagDetailsComponent; });
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




var TagDetailsComponent = (function () {
    function TagDetailsComponent(http, toastr, router, rout) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.rout = rout;
    }
    TagDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.tagging = {
            'createdBy': '',
            'updatedBy': '',
            'ownerName': '',
            'ownerEmail': '',
            'ownerMobile': '',
            'about': '',
            'ownerAddress': '',
            'ownerCity': '',
            'ownerState': '',
            'ownerZip': '',
            'tenantName': '',
            'tenantMobile': '',
            'property_id': '',
            'title': '',
            'rent': '',
            'propAddress': '',
            'propCity': '',
            'propState': '',
            'propZip': '',
            'status': ''
        };
        this.userId = localStorage.getItem("userId");
        if (this.router.snapshot.paramMap.get('id') != null) {
            this.tagId = this.router.snapshot.paramMap.get('id');
        }
        this.http.get('/api/tagRequestDetails/' + this.tagId)
            .toPromise()
            .then(function (result) {
            _this.tagging = result.json().data.tagging[0];
            console.log(_this.tagging);
        });
    };
    TagDetailsComponent.prototype.ngAfterViewInit = function () { };
    TagDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'tagdetails-list',
            template: __webpack_require__("../../../../../angular/app/tagdetails/tagdetails.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
    ], TagDetailsComponent);
    return TagDetailsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=tagdetails.component.js.map

/***/ }),

/***/ "../../../../../angular/app/tagdetails/tagdetails.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagDetailsModule", function() { return TagDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tagdetails_component__ = __webpack_require__("../../../../../angular/app/tagdetails/tagdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tagdetails_routing__ = __webpack_require__("../../../../../angular/app/tagdetails/tagdetails.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TagDetailsModule = (function () {
    function TagDetailsModule() {
    }
    TagDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__tagdetails_routing__["a" /* TagDetailsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__tagdetails_component__["a" /* TagDetailsComponent */]]
        })
    ], TagDetailsModule);
    return TagDetailsModule;
}());

//# sourceMappingURL=tagdetails.module.js.map

/***/ }),

/***/ "../../../../../angular/app/tagdetails/tagdetails.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagDetailsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagdetails_component__ = __webpack_require__("../../../../../angular/app/tagdetails/tagdetails.component.ts");

var TagDetailsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__tagdetails_component__["a" /* TagDetailsComponent */]
            }]
    }
];
//# sourceMappingURL=tagdetails.routing.js.map

/***/ })

});
//# sourceMappingURL=tagdetails.module.chunk.js.map