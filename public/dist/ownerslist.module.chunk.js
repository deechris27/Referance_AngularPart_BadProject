webpackJsonp(["ownerslist.module"],{

/***/ "../../../../../angular/app/ownerslist/ownerslist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Owners List</h4>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables table-responsive\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>Owner Name</th>\n                                        <th>Email</th>\n                                        <th>Phone</th>\n                                        <th>Status</th>\n                                        <th class=\"disabled-sorting text-right\">Actions</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                        <th>Owner Name</th>\n                                        <th>Email</th>\n                                        <th>Phone</th>\n                                        <th>Status</th>\n                                        <th class=\"disabled-sorting text-right\">Actions</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of owners\">\n                                        <td>{{row.fname}}</td>\n                                        <td>{{row.email}}</td>\n                                        <td>{{row.mobile}}</td>\n                                        <td>{{row.status}}</td>\n                                        <td class=\"text-right\">\n                                            <button class=\"btn btn-simple btn-warning btn-icon edit\" \n                                                rel=\"tooltip\" title=\"Edit\" data-placement=\"left\"\n                                                [routerLink]=\"['/ownerdetails', row.id, row.id ]\">\n                                                <i class=\"material-icons\">mode_edit</i>\n                                            </button>\n                                            <button class=\"btn btn-simple btn-danger btn-icon remove\" rel=\"tooltip\" title=\"Remove\" data-placement=\"left\">\n                                                <i class=\"material-icons\">close</i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular/app/ownerslist/ownerslist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerslistComponent; });
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



var OwnerslistComponent = (function () {
    function OwnerslistComponent(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.userId = localStorage.getItem("userId");
        this.http.get('/api/owners')
            .toPromise()
            .then(function (result) {
            _this.owners = result.json().data.ownerData;
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
    OwnerslistComponent.prototype.ngOnInit = function () { };
    OwnerslistComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    OwnerslistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'ownerslist-list',
            template: __webpack_require__("../../../../../angular/app/ownerslist/ownerslist.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], OwnerslistComponent);
    return OwnerslistComponent;
    var _a, _b;
}());

//# sourceMappingURL=ownerslist.component.js.map

/***/ }),

/***/ "../../../../../angular/app/ownerslist/ownerslist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerslistModule", function() { return OwnerslistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ownerslist_component__ = __webpack_require__("../../../../../angular/app/ownerslist/ownerslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ownerslist_routing__ = __webpack_require__("../../../../../angular/app/ownerslist/ownerslist.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OwnerslistModule = (function () {
    function OwnerslistModule() {
    }
    OwnerslistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__ownerslist_routing__["a" /* OwnerslistRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__ownerslist_component__["a" /* OwnerslistComponent */]]
        })
    ], OwnerslistModule);
    return OwnerslistModule;
}());

//# sourceMappingURL=ownerslist.module.js.map

/***/ }),

/***/ "../../../../../angular/app/ownerslist/ownerslist.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerslistRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ownerslist_component__ = __webpack_require__("../../../../../angular/app/ownerslist/ownerslist.component.ts");

var OwnerslistRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__ownerslist_component__["a" /* OwnerslistComponent */]
            }]
    }
];
//# sourceMappingURL=ownerslist.routing.js.map

/***/ })

});
//# sourceMappingURL=ownerslist.module.chunk.js.map