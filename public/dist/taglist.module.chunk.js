webpackJsonp(["taglist.module"],{

/***/ "../../../../../angular/app/taglist/taglist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Tag Request</h4>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables table-responsive\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>Owner Id</th>\n                                        <th>Owner Name</th>\n                                        <th>Tenant Name</th>\n                                        <th>Mobile</th>\n                                        <th>Status</th>\n                                        <th>Request Date</th>\n                                        <th class=\"disabled-sorting text-right\">Action</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                        <th>Owner Id</th>\n                                        <th>Owner Name</th>\n                                        <th>Tenant Name</th>\n                                        <th>Mobile</th>\n                                        <th>Status</th>\n                                        <th>Request Date</th>\n                                        <th class=\"disabled-sorting text-right\">Action</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tagList\">\n                                        <td>{{row.owner_id}}</td>\n                                        <td>{{row.ownerName}}</td>\n                                        <td>{{row.tenantName}}</td>\n                                        <td>{{row.tenantMobile}}</td>\n                                        <td>\n                                            <div *ngIf=\"row.request_status == 1\">\n                                                Untagged\n                                            </div>\n                                            <div *ngIf=\"row.request_status == 5\">\n                                                Invited\n                                            </div>\n                                        </td>\n                                        <td>{{row.requestDate}}</td>\n                                        <td class=\"text-right\">\n                                            <button class=\"btn btn-simple btn-danger btn-icon remove\" \n                                                rel=\"tooltip\" title=\"View\" data-placement=\"left\" \n                                                [routerLink]=\"['/tagdetails', row.id ]\">\n                                                <i class=\"material-icons\">remove_red_eye</i>\n                                            </button>\n                                            <button class=\"btn btn-simple btn-warning btn-icon edit\" *ngIf=\"row.Action=='Tag'\" \n                                                rel=\"tooltip\" title=\"Tag\" data-placement=\"left\" (click)=\"tagTenant(row.id)\">\n                                                <i class=\"material-icons\">assignment_ind</i>\n                                            </button>\n                                            <button class=\"btn btn-simple btn-danger btn-icon remove\" *ngIf=\"row.Action=='Invite'\" \n                                                 rel=\"tooltip\" title=\"Invite\" data-placement=\"left\" (click)=\"invite(row.id)\">\n                                                <i class=\"material-icons\">send</i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/taglist/taglist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaglistComponent; });
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



var TaglistComponent = (function () {
    function TaglistComponent(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.http.get('/api/tagRequest')
            .toPromise()
            .then(function (result) {
            _this.tagList = result.json().data.tagging;
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
    TaglistComponent.prototype.ngOnInit = function () { };
    TaglistComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    TaglistComponent.prototype.tagTenant = function (id) {
        var userId = localStorage.getItem("userId");
        this.http.post('/api/tagTenant/' + id + '/user/' + userId, '')
            .toPromise()
            .then(function (result) {
            var tagResult = result.json().data.tagging;
            swal({
                title: 'Tag Tenant!',
                text: 'Tenant tagged to the property',
                type: 'success',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            }).then(function () {
                var _this = this;
                this.http.get('/api/tagRequest')
                    .toPromise()
                    .then(function (result) {
                    _this.tagList = result.json().data.tagging;
                });
            });
        });
    };
    TaglistComponent.prototype.invite = function (id) {
        this.http.get('/api/invite/' + id)
            .toPromise()
            .then(function (result) {
            swal({
                title: 'Invite Tenant!',
                text: 'Tag invitation sent tenant',
                type: 'success',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            }).then(function () {
            });
        });
    };
    TaglistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'taglist-list',
            template: __webpack_require__("../../../../../angular/app/taglist/taglist.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], TaglistComponent);
    return TaglistComponent;
    var _a, _b;
}());

//# sourceMappingURL=taglist.component.js.map

/***/ }),

/***/ "../../../../../angular/app/taglist/taglist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaglistModule", function() { return TaglistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taglist_component__ = __webpack_require__("../../../../../angular/app/taglist/taglist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__taglist_routing__ = __webpack_require__("../../../../../angular/app/taglist/taglist.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TaglistModule = (function () {
    function TaglistModule() {
    }
    TaglistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__taglist_routing__["a" /* TaglistRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__taglist_component__["a" /* TaglistComponent */]]
        })
    ], TaglistModule);
    return TaglistModule;
}());

//# sourceMappingURL=taglist.module.js.map

/***/ }),

/***/ "../../../../../angular/app/taglist/taglist.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaglistRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taglist_component__ = __webpack_require__("../../../../../angular/app/taglist/taglist.component.ts");

var TaglistRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__taglist_component__["a" /* TaglistComponent */]
            }]
    }
];
//# sourceMappingURL=taglist.routing.js.map

/***/ })

});
//# sourceMappingURL=taglist.module.chunk.js.map