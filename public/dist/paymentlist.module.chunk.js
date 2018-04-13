webpackJsonp(["paymentlist.module"],{

/***/ "../../../../../angular/app/paymentlist/paymentlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Payments List</h4>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables table-responsive\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>Owner details</th>\n                                        <th>Tenant Name</th>\n                                        <th>Amount</th>\n                                        <th>Payment Status</th>\n                                        <th>Flarow transfer status</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                        <th>Owner details</th>\n                                        <th>Tenant Name</th>\n                                        <th>Amount</th>\n                                        <th>Payment Status</th>\n                                        <th>Flarow transfer status</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of payments\">\n                                        <td>{{row.ownerName}}\n                                            <br/> Bank: {{row.bankName}}\n                                            <br/> Payee: {{row.holderName}}\n                                            <br/> Account No.: {{row.accountNumber}}\n                                            <br/> IFSC: {{row.ifsc}}\n                                            <br/> Account Type: {{row.accountType}}</td>\n                                        <td>{{row.tenantName}}</td>\n                                        <td>{{row.amount}}</td>\n\n                                        <td>\n                                            <div *ngIf=\"row.paymentStatus == 0\">\n                                                Not Paid\n                                            </div>\n                                            <div *ngIf=\"row.paymentStatus == 1\">\n                                                Received\n                                            </div>\n                                            <div *ngIf=\"row.paymentStatus == 2\">\n                                                Pending Verification\n                                            </div>\n                                            <button class=\"btn btn-simple btn-warning btn-icon edit\" rel=\"tooltip\" title=\"Edit\" data-placement=\"left\" (click)=\"onChange(row.id,'P')\">\n                                                <i class=\"material-icons\">edit_mode</i>\n                                            </button>\n                                        </td>\n                                        <td>\n                                            <div *ngIf=\"row.flarowStatus == 0\">\n                                                Pending\n                                            </div>\n                                            <div *ngIf=\"row.flarowStatus == 1\">\n                                                Paid\n                                            </div>\n                                            <div *ngIf=\"row.flarowStatus == 2\">\n                                                Pending Verification\n                                            </div>\n                                            <button class=\"btn btn-simple btn-warning btn-icon edit\" rel=\"tooltip\" title=\"Edit\" data-placement=\"left\" (click)=\"onChange(row.id,'F')\">\n                                                <i class=\"material-icons\">edit_mode</i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"statusModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"otpModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"otpModalLabel\">Change Status</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n                <div class=\"modal-body\">\n                    <div class=\"col-sm-5 col-sm-offset-1\">\n                        <div class=\"form-group label-floating\">\n                            <div class=\"radio\">\n                                <label>\n                                    <input type=\"radio\" [value]=\"1\" [checked]=\"paymentStatusVal===1\" (change)=\"onStatusChange(1)\" name=\"status\"> Payment received\n                                </label>\n                            </div>\n                            <div class=\"radio\">\n                                <label>\n                                    <input type=\"radio\" [value]=\"2\" [checked]=\"paymentStatusVal===2\" (change)=\"onStatusChange(2)\" name=\"status\"> Payment rejected\n                                </label>\n                            </div>\n                            <div class=\"radio\">\n                                <label>\n                                    <input type=\"radio\" [value]=\"3\" [checked]=\"paymentStatusVal===3\" (change)=\"onStatusChange(3)\" name=\"status\"> Payment not received\n                                </label>\n                            </div>\n                            <div class=\"radio\">\n                                <label>\n                                    <input type=\"radio\" [value]=\"4\" [checked]=\"paymentStatusVal===4\" (change)=\"onStatusChange(4)\" name=\"status\">Transferred to Owner \n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary\">Update</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/paymentlist/paymentlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentlistComponent; });
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




var PaymentlistComponent = (function () {
    function PaymentlistComponent(router, http, toastr) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.userId = localStorage.getItem("userId");
        this.http.get('/api/payment')
            .toPromise()
            .then(function (result) {
            _this.payments = result.json().data.payments;
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
    PaymentlistComponent.prototype.ngOnInit = function () {
        $.material.options.autofill = true;
        $.material.init();
    };
    PaymentlistComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    PaymentlistComponent.prototype.onChange = function (payId, statusType) {
        this.paymentId = payId;
        this.statusType = statusType;
        $('#statusModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    };
    PaymentlistComponent.prototype.onStatusChange = function (stat) {
        this.paymentStatusVal = stat;
    };
    PaymentlistComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var data = {
            paymentStatus: '',
            id: '',
            flarowStatus: ''
        };
        data.id = this.paymentId;
        if (this.statusType === 'P') {
            data.paymentStatus = this.paymentStatusVal;
        }
        else {
            data.flarowStatus = this.paymentStatusVal;
        }
        this.http.post('/api/paymentStatus', data)
            .toPromise()
            .then(function (result) {
            _this.toastr.success('Status updated', 'Flarow!');
        });
    };
    PaymentlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'paymentlist-list',
            template: __webpack_require__("../../../../../angular/app/paymentlist/paymentlist.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object])
    ], PaymentlistComponent);
    return PaymentlistComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=paymentlist.component.js.map

/***/ }),

/***/ "../../../../../angular/app/paymentlist/paymentlist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentlistModule", function() { return PaymentlistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paymentlist_component__ = __webpack_require__("../../../../../angular/app/paymentlist/paymentlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__paymentlist_routing__ = __webpack_require__("../../../../../angular/app/paymentlist/paymentlist.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PaymentlistModule = (function () {
    function PaymentlistModule() {
    }
    PaymentlistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__paymentlist_routing__["a" /* PaymentlistRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__paymentlist_component__["a" /* PaymentlistComponent */]]
        })
    ], PaymentlistModule);
    return PaymentlistModule;
}());

//# sourceMappingURL=paymentlist.module.js.map

/***/ }),

/***/ "../../../../../angular/app/paymentlist/paymentlist.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentlistRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paymentlist_component__ = __webpack_require__("../../../../../angular/app/paymentlist/paymentlist.component.ts");

var PaymentlistRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__paymentlist_component__["a" /* PaymentlistComponent */]
            }]
    }
];
//# sourceMappingURL=paymentlist.routing.js.map

/***/ })

});
//# sourceMappingURL=paymentlist.module.chunk.js.map