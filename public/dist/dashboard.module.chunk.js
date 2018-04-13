webpackJsonp(["dashboard.module"],{

/***/ "../../../../../angular/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content container-bk\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <button *ngIf=\"userType == 1\" type=\"button\" class=\"btn btn-rose pull-right\"\n                    id=\"right-panel-link\"\n                    href=\"property\"\n                    (click)=\"onClick()\"\n                    >\n                New Property\n            </button>\n        </div>\n        <div class=\"row\">\n            <div *ngIf=\"userType == 0\">\n                <div class=\"col-md-4 col-md-offset-4 col-sm-offset-3\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                            <i class=\"material-icons\">attach_money</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"card-title\">Pay your rent online\n                                <small class=\"category\">just like your other bills</small>\n                            </h4>\n                            <div class=\"row\">\n                                <div class=\"col-md-10\">\n                                    <div class=\"form-group text-center\">\n                                        <h5>Even if your landlord doesn’t live in the 21st century, you do.</h5> \n                                        <h6>Pay your rent online, and invite your landlord to flarow.com </h6>\n                                    </div>\n                                </div>                                           \n                            </div>\n                            <a href=\"#/invite\" class=\"btn btn-rose center-block\">Invite your Landlord</a>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                </div>    \n            </div>\n            <div *ngIf=\"userType == 1\">\n                <div class=\"col-lg-4 col-md-6 col-sm-4\">\n                    <div class=\"card card-stats\">\n                        <div class=\"card-header\" data-background-color=\"orange\">\n                            <i class=\"material-icons\">account_balance_wallet</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">{{thisMonth}}'s Rent</p>\n                            <table align=\"center\" cellpadding=\"0\" cellspacing=\"50\" border=\"0\">\n                                <tr>\n                                    <td style=\"width:45%\"><strong>Rs.{{ownerData.rent_due}}</strong>\n                                    </td>\n                                    <td style=\"width:45%\"><strong>Rs.{{ownerData.rent_collected}}</strong>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td align=\"center\">Due</td>\n                                    <td align=\"center\">Collected</td>\n                                </tr>\n                            </table>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">attach_money</i><a href=\"#/tph\">View all</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\" >\n                        <div class=\"card-header\" data-background-color=\"red\">\n                            <i class=\"material-icons\">bug_report</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">Properties Listed</p>\n                            <h3 class=\"title\">{{ownerData.property_count}}</h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">business</i>Properties\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\" >\n                        <div class=\"card-header\" data-background-color=\"green\">\n                            <i class=\"material-icons\">visibility</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">New Approvals</p>\n                            <h3 class=\"title\">{{ownerData.visits}}</h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">directions_walk</i>approvals\n                            </div>\n                        </div>\n                    </div>\n                </div>                \n            </div>\n            <div *ngIf=\"userType == 2\">\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\">\n                        <div class=\"card-header\" data-background-color=\"orange\">\n                            <i class=\"material-icons\">account_circle</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">New Tenants</p>\n                            <h3 class=\"title\">{{ownerData.tenants}}</h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">date_range</i> Current Month\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\">\n                        <div class=\"card-header\" data-background-color=\"red\">\n                            <i class=\"material-icons\">visibility</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">New Visits</p>\n                            <h3 class=\"title\">{{ownerData.visits}}</h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons text-danger\">directions_walk</i>Scheduled visits\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\">\n                        <div class=\"card-header\" data-background-color=\"red\">\n                            <i class=\"material-icons\">account_box</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">New Registration</p>\n                            <h3 class=\"title\">{{ownerData.registration}}</h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons text-danger\">account_box</i>New users\n                            </div>\n                        </div>\n                    </div>\n                </div> \n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\">\n                        <div class=\"card-header\" data-background-color=\"red\">\n                            <i class=\"material-icons\">event_seat</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">New Owners</p>\n                            <h3 class=\"title\">{{ownerData.owners}}</h3>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons text-danger\">event_seat</i>New owners\n                            </div>\n                        </div>\n                    </div>\n                </div>                               \n            </div>\n        </div>\n        \n        <div class=\"row\" *ngFor=\"let p of property; let i = index\" [ngSwitch]=\"i % 3\">\n            <div class=\"col-lg-4 col-md-6\" *ngSwitchCase=\"0\">\n                <div class=\"card card-product\">\n                    <div class=\"card-image\" data-header-animation=\"true\">\n                        <a href=\"#pablo\">\n                            <img class=\"img thumbnail\"\n                             src=\"http://studphotos.s3.amazonaws.com/{{property[i].owner_id}}_{{property[i].id}}.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <!-- <button type=\"button\" class=\"btn btn-default btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"View\">\n                                <i class=\"material-icons\">art_track</i>\n                            </button> -->\n                            <button type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" \n                              data-placement=\"bottom\" title=\"Edit\" \n                              [routerLink]=\"['/property', property[i]]\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" \n                                data-placement=\"bottom\" title=\"Tag Tenant\" \n                                [routerLink]=\"['/tagProp', property[i].id, property[i].title]\">\n                                <i class=\"material-icons\">group_add</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-danger btn-simple\" \n                                rel=\"tooltip\" data-placement=\"bottom\" title=\"Remove\"\n                                (click)=\"onDelete(property[i].id)\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">\n                            <a href=\"#pablo\" [textContent]=\"property[i].title\"></a>\n                        </h4>\n                        <div class=\"card-description\" [textContent]=\"property[i].details\"></div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"price\" *ngIf=\"property[i].status!==0\">\n                            <h4 [textContent]=\"property[i].rent\"></h4>\n                        </div>\n                        <div class=\"stats\" *ngIf=\"property[i].status==0\">\n                            <i class=\"material-icons text-danger\">warning</i>Pending Verification\n                        </div>\n                        <div class=\"stats pull-right\">\n                            <p class=\"category\" [textContent]=\"property[i].address\"><i class=\"material-icons\">place</i></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\" *ngSwitchCase=\"0\">\n                <span *ngIf=\"property?.length > i+1\">\n                <div class=\"card card-product\">\n                    <div class=\"card-image\" data-header-animation=\"true\">\n                        <a href=\"#pablo\">\n                                <img class=\"img thumbnail\"\n                                src=\"http://studphotos.s3.amazonaws.com/{{property[i+1].owner_id}}_{{property[i+1].id}}.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <!-- <button type=\"button\" class=\"btn btn-default btn-simple\" \n                               rel=\"tooltip\" data-placement=\"bottom\" title=\"View\">\n                                <i class=\"material-icons\">art_track</i>\n                            </button> -->\n                            <button type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" \n                                data-placement=\"bottom\" title=\"Edit\"\n                                [routerLink]=\"['/property', property[i+1]]\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" \n                                data-placement=\"bottom\" title=\"Tag Tenant\" \n                                [routerLink]=\"['/tagProp', property[i+1].id, property[i+1].title]\">\n                                <i class=\"material-icons\">group_add</i>\n                            </button>                            \n                            <button type=\"button\" class=\"btn btn-danger btn-simple\" \n                              rel=\"tooltip\" data-placement=\"bottom\" title=\"Remove\"\n                              (click)=\"onDelete(property[i+1].id)\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">\n                            <a href=\"#pablo\"[textContent]=\"property[i+1].title\"></a>\n                        </h4>\n                        <div class=\"card-description\" [textContent]=\"property[i+1].details\"></div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"price\" *ngIf=\"property[i+1].status!==0\">\n                            <h4 [textContent]=\"property[i+1].rent\"></h4>\n                        </div>\n                        <div class=\"stats\" *ngIf=\"property[i+1].status==0\">\n                            <i class=\"material-icons text-danger\">warning</i>Pending Verification\n                        </div>                        \n                        <div class=\"stats pull-right\">\n                            <p class=\"category\" [textContent]=\"property[i+1].address\"><i class=\"material-icons\">place</i></p>\n                        </div>\n                    </div>\n                </div>\n            </span>\n            </div>\n            <div class=\"col-lg-4 col-md-6\" *ngSwitchCase=\"0\">\n                <span *ngIf=\"property?.length > i+2\">\n                    <div class=\"card card-product\">\n                        <div class=\"card-image\" data-header-animation=\"true\">\n                            <a href=\"#pablo\">\n                                    <img class=\"img thumbnail\"\n                                    src=\"http://studphotos.s3.amazonaws.com/{{property[i+2].owner_id}}_{{property[i+2].id}}.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"card-actions\">\n                                <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                    <i class=\"material-icons\">build</i> Fix Header!\n                                </button>\n                                <!-- <button type=\"button\" class=\"btn btn-default btn-simple\" rel=\"tooltip\" \n                                        data-placement=\"bottom\" title=\"View\">\n                                    <i class=\"material-icons\">art_track</i>\n                                </button> -->\n                                <button type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" \n                                        data-placement=\"bottom\" title=\"Edit\" \n                                        [routerLink]=\"['/property', property[i+2]]\">\n                                    <i class=\"material-icons\">edit</i>\n                                </button>\n                                <button type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" \n                                    data-placement=\"bottom\" title=\"Tag Tenant\" \n                                    [routerLink]=\"['/tagProp', property[i+2].id, property[i+2].title]\">\n                                    <i class=\"material-icons\">group_add</i>\n                                </button>                                \n                                <button type=\"button\" class=\"btn btn-danger btn-simple\" \n                                   rel=\"tooltip\" data-placement=\"bottom\" title=\"Remove\"\n                                   (click)=\"onDelete(property[i+2].id)\">\n                                    <i class=\"material-icons\">close</i>\n                                </button>\n                            </div>\n                            <h4 class=\"card-title\">\n                                <a href=\"#pablo\"[textContent]=\"property[i+2].title\"></a>\n                            </h4>\n                            <div class=\"card-description\" [textContent]=\"property[i+2].details\"></div>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"price\" *ngIf=\"property[i+2].status!==0\">\n                                <h4 [textContent]=\"property[i+2].rent\"></h4>\n                            </div>\n                            <div class=\"stats\" *ngIf=\"property[i+2].status==0\">\n                                <i class=\"material-icons text-danger\">warning</i>Pending Verification\n                            </div>                            \n                            <div class=\"stats pull-right\">\n                                <p class=\"category\" [textContent]=\"property[i+2].address\"><i class=\"material-icons\">place</i></p>\n                            </div>\n                        </div>\n                    </div>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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



var DashboardComponent = (function () {
    function DashboardComponent(router, http) {
        this.router = router;
        this.http = http;
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        this.ownerData = {
            'rent': 0,
            'tickets': 0,
            'visits': 0,
            'tenants': 0,
            'registration': 0,
            'owners': 0
        };
        var d = new Date();
        this.thisMonth = this.monthNames[d.getMonth()];
    }
    DashboardComponent.prototype.onClick = function () {
        this.router.navigateByUrl('/property');
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.userId = localStorage.getItem("userId");
        var apiUrl;
        this.userType = JSON.parse(localStorage.getItem('currentUserType'));
        console.log(this.userType);
        if (this.userType == 2) {
            apiUrl = '/api/adminDashboardInfo';
        }
        else if (this.userType == 1) {
            apiUrl = '/api/ownerDashboardInfo/' + this.userId;
        }
        if (this.userType != 0) {
            console.log(this.userType);
            this.http.get(apiUrl)
                .toPromise()
                .then(function (result) {
                _this.ownerData = result.json().data.ownerData;
            });
        }
        this.http.get('/api/propertyByApproval/' + this.userId)
            .toPromise()
            .then(function (result) {
            _this.property = result.json().data.property;
        });
    };
    DashboardComponent.prototype.onDelete = function (id) {
        var self = this;
        swal({
            title: 'Are you sure?',
            text: 'You want to remove this property?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes, delete it!',
            buttonsStyling: false
        }).then(function () {
            self.removeProp(id);
            swal({
                title: 'Deleted!',
                text: 'Property has been deleted.',
                type: 'success',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            });
        });
    };
    DashboardComponent.prototype.removeProp = function (id) {
        var _this = this;
        this.http.delete('/api/property/' + id)
            .toPromise()
            .then(function (result) {
            _this.http.get('/api/property/' + _this.userId)
                .toPromise()
                .then(function (result) {
                _this.property = result.json().data.property;
            });
        });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var breakCards = true;
        if (breakCards === true) {
            // We break the cards headers if there is too much stress on them :-)
            $('[data-header-animation="true"]').each(function () {
                var $fix_button = $(this);
                var $card = $(this).parent('.card');
                $card.find('.fix-broken-card').click(function () {
                    var $header = $(this).parent().parent().siblings('.card-header, .card-image');
                    $header.removeClass('hinge').addClass('fadeInDown');
                    $card.attr('data-count', 0);
                    setTimeout(function () {
                        $header.removeClass('fadeInDown animate');
                    }, 480);
                });
                $card.mouseenter(function () {
                    var $this = $(this);
                    var hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                    $this.attr('data-count', hover_count);
                    if (hover_count >= 20) {
                        $(this).children('.card-header, .card-image').addClass('hinge animated');
                    }
                });
            });
        }
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../angular/app/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../angular/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../angular/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_routing__ = __webpack_require__("../../../../../angular/app/dashboard/dashboard.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__dashboard_routing__["a" /* DashboardRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../angular/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../angular/app/dashboard/dashboard.component.ts");

var DashboardRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */]
            }]
    }
];
//# sourceMappingURL=dashboard.routing.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map