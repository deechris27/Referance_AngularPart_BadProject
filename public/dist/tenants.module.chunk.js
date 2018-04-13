webpackJsonp(["tenants.module"],{

/***/ "../../../../../angular/app/tenants/tenants.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.disabled {\n    /* Make the disabled links grayish*/\n    color: gray;\n    /* And disable the pointer events */\n    pointer-events: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/tenants/tenants.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Tenants</h4>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables table-responsive\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>Tenant Name</th>\n                                        <th>Tagged Propery</th>\n                                        <th>KYC Status</th>\n                                        <th>Tenant Status</th>\n                                        <th>Payment Status</th>\n                                        <th>View KYC</th>\n                                        <th class=\"text-right\">Actions</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                        <th>Tenant Name</th>\n                                        <th>Tagged Propery</th>\n                                        <th>KYC Status</th>\n                                        <th>Tenant Status</th>\n                                        <th>Payment Status</th>\n                                        <th>View KYC</th>\n                                        <th class=\"text-right\">Actions</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tenants\">\n                                        <td>{{row.name}}</td>\n                                        <td>{{row.title}}</td>\n                                        <td>\n                                            {{row.kyc_status}}                                                                                       \n                                        </td>\n                                        <td>{{row.tenant_status}}</td>\n                                        <td>{{row.payment_status}}</td>\n                                        <td>\n                                            <a *ngIf=\"row.kyc_share=='Available'\" [routerLink]=\"['/kycview', row.kyc_id, '1' ]\">{{row.kyc_share}}</a>\n                                            <a class=\"disabled\" *ngIf=\"row.kyc_share!='Available'\">{{row.kyc_share}}</a>\n                                        </td>                                        \n                                        <td class=\"text-right\">\n                                            <a class=\"btn btn-simple btn-warning btn-icon edit\" \n                                                rel=\"tooltip\" title=\"Edit\" data-placement=\"left\"\n                                                href=\"#/user;id={{row.id}}\">\n                                                <i class=\"material-icons\">remove_red_eye</i>\n                                            </a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular/app/tenants/tenants.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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



var TenantsComponent = (function () {
    function TenantsComponent(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.userId = localStorage.getItem("userId");
        this.http.get('/api/mytenants/' + this.userId)
            .toPromise()
            .then(function (result) {
            _this.tenants = result.json().data.tenants;
        });
        setTimeout(function () {
            $(function () {
                var table = $('#datatables').DataTable({
                    'pagingType': 'full_numbers',
                    'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
                    responsive: true,
                    language: {
                        search: '_INPUT_',
                        searchPlaceholder: 'Search records',
                    }
                });
            });
        }, 1000);
    }
    TenantsComponent.prototype.ngOnInit = function () { };
    TenantsComponent.prototype.ngAfterViewInit = function () {
        $('[rel="tooltip"]').tooltip();
    };
    TenantsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'tenant-list',
            template: __webpack_require__("../../../../../angular/app/tenants/tenants.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/tenants/tenants.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], TenantsComponent);
    return TenantsComponent;
    var _a, _b;
}());

//# sourceMappingURL=tenants.component.js.map

/***/ }),

/***/ "../../../../../angular/app/tenants/tenants.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantsModule", function() { return TenantsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tenants_component__ = __webpack_require__("../../../../../angular/app/tenants/tenants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tenants_routing__ = __webpack_require__("../../../../../angular/app/tenants/tenants.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TenantsModule = (function () {
    function TenantsModule() {
    }
    TenantsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__tenants_routing__["a" /* TenantsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__tenants_component__["a" /* TenantsComponent */]]
        })
    ], TenantsModule);
    return TenantsModule;
}());

//# sourceMappingURL=tenants.module.js.map

/***/ }),

/***/ "../../../../../angular/app/tenants/tenants.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tenants_component__ = __webpack_require__("../../../../../angular/app/tenants/tenants.component.ts");

var TenantsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__tenants_component__["a" /* TenantsComponent */]
            }]
    }
];
//# sourceMappingURL=tenants.routing.js.map

/***/ })

});
//# sourceMappingURL=tenants.module.chunk.js.map