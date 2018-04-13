webpackJsonp(["visits.module"],{

/***/ "../../../../../angular/app/visits/visits.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Visit requests</h4>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables table-responsive\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>Title</th>\n                                        <th>Name</th>\n                                        <th>Status</th>\n                                        <th>Visit Date</th>\n                                        <th class=\"text-right\">Actions</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                        <th>Title</th>\n                                        <th>Name</th>\n                                        <th>Status</th>\n                                        <th>Visit Date</th>\n                                        <th class=\"text-right\">Actions</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of visits\">\n                                        <td>{{row.title}}</td>\n                                        <td>{{row.name}}</td>\n                                        <td>\n                                            <span *ngIf=\"row.status =='Visited' \">\n                                                <button class=\"btn btn-primary btn-round btn-xs\">{{row.status}}</button>\n                                            </span>\n                                            <span *ngIf=\"row.status =='Not Visited Yet' \">\n                                                <button class=\"btn btn-warning btn-round btn-xs\">{{row.status}}</button>\n                                            </span>    \n                                            <span *ngIf=\"row.status =='Booked' \">\n                                                <button class=\"btn btn-success btn-round btn-xs\">{{row.status}}</button>\n                                            </span>                                                                                      \n                                        </td>\n                                        <td>{{row.date}}</td>\n                                        <td class=\"text-right\">\n                                            <button class=\"btn btn-simple btn-warning btn-icon edit\" \n                                                rel=\"tooltip\" title=\"Edit\" data-placement=\"left\"\n                                                [routerLink]=\"['/visitor-details', row.id ]\">\n                                                <i class=\"material-icons\">mode_edit</i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/visits/visits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsComponent; });
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



var VisitsComponent = (function () {
    function VisitsComponent(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.userId = localStorage.getItem("userId");
        this.http.get('/api/schedule/' + this.userId)
            .toPromise()
            .then(function (result) {
            _this.visits = result.json().data.visits;
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
    VisitsComponent.prototype.ngOnInit = function () { };
    VisitsComponent.prototype.ngAfterViewInit = function () {
        $('[rel="tooltip"]').tooltip();
    };
    VisitsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'tenant-visit',
            template: __webpack_require__("../../../../../angular/app/visits/visits.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], VisitsComponent);
    return VisitsComponent;
    var _a, _b;
}());

//# sourceMappingURL=visits.component.js.map

/***/ }),

/***/ "../../../../../angular/app/visits/visits.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsModule", function() { return VisitsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visits_component__ = __webpack_require__("../../../../../angular/app/visits/visits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visits_routing__ = __webpack_require__("../../../../../angular/app/visits/visits.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VisitsModule = (function () {
    function VisitsModule() {
    }
    VisitsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__visits_routing__["a" /* VisitsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__visits_component__["a" /* VisitsComponent */]]
        })
    ], VisitsModule);
    return VisitsModule;
}());

//# sourceMappingURL=visits.module.js.map

/***/ }),

/***/ "../../../../../angular/app/visits/visits.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visits_component__ = __webpack_require__("../../../../../angular/app/visits/visits.component.ts");

var VisitsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__visits_component__["a" /* VisitsComponent */]
            }]
    }
];
//# sourceMappingURL=visits.routing.js.map

/***/ })

});
//# sourceMappingURL=visits.module.chunk.js.map