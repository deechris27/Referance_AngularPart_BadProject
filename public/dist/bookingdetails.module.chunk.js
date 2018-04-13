webpackJsonp(["bookingdetails.module"],{

/***/ "../../../../../angular/app/bookingdetails/bookingdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".square-box{\n    width:200px;\n    height: 125px;\n}\n\n#profile-input { display: none; }\n\n.profile-input-hide {\n     position: relative;\n     left: -6em;\n}\n\n.bring-forward {\n     z-index:10;\n}\n \nimg {\n  background-image: url(\"//studphotos.s3.amazonaws.com/img/800x500.jpg\");\n  overflow: hidden;\n}\n\nimg:before {\n  content: \" \";\n  font-size: 1000px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/bookingdetails/bookingdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                    <div class=\"card card-product\">\n                        <a href=\"#pablo\">\n                            <img class=\"img\" #prfPreview src=\"http://studphotos.s3.amazonaws.com/img/400x400.jpg\"\n                            onerror=\"this.src='http://studphotos.s3.amazonaws.com/img/400x400.jpg';\"/>\n                        </a>\n                        <div class=\"card-content\">\n                            <h4 class=\"card-title\">{{booking.name}}</h4>\n                        </div>\n                    </div>\n                </div>            \n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">perm_identity</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Booking -\n                            <small class=\"category\">status</small>\n                        </h4>\n                        <form (ngSubmit)=\"changeStatus(f); f.reset()\" #f=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Propery</label>\n                                        <p>{{booking.title}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Owner Name</label>\n                                        <p>{{booking.owner}}</p>\n                                    </div>\n                                </div>\n                            </div>                             \n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Tenant Name</label>\n                                        <p>{{booking.tenant}}</p>\n                                    </div>\n                                </div>\n                            </div>  \n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <md-form-field>\n                                            <input mdInput name=\"startDt\" [(ngModel)]=\"booking.startDate\" [mdDatepicker]=\"picker1\" placeholder=\"Agreement start date\">\n                                            <md-datepicker-toggle mdSuffix [for]=\"picker1\"></md-datepicker-toggle>\n                                            <md-datepicker #picker1></md-datepicker>\n                                        </md-form-field>\n                                    </div>\n                                </div>\n                            </div>  \n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <md-form-field>\n                                            <input mdInput name=\"endDt\" [(ngModel)]=\"booking.endDate\" [mdDatepicker]=\"picker2\" placeholder=\"Agreement end date\">\n                                            <md-datepicker-toggle mdSuffix [for]=\"picker2\"></md-datepicker-toggle>\n                                            <md-datepicker #picker2></md-datepicker>\n                                        </md-form-field>\n                                    </div>\n                                </div>\n                            </div>   \n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Booking Status</label>\n                                        <span *ngIf=\"booking.status == 1 \">\n                                            <button class=\"btn btn-success btn-round btn-xs\">Booked</button>\n                                        </span>\n                                        <span *ngIf=\"booking.status == 3 \">\n                                            <button class=\"btn btn-failure btn-round btn-xs\">Left</button>\n                                        </span>    \n                                        <span *ngIf=\"booking.status == 2 \">\n                                            <button class=\"btn btn-warning btn-round btn-xs\">Booking Not Completed</button>\n                                        </span>                                      \n                                    </div>\n                                </div>  \n                            </div>                                                                                                                                            \n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <div class=\"radio\">\n                                            <label>\n                                                <input type=\"radio\" [value]=\"1\" \n                                                [checked]=\"booking.status===1\"\n                                                (change)=\"onStatusChange(1)\"\n                                                name=\"status\">\n                                                Booked\n                                            </label>\n                                        </div>\n                                        <div class=\"radio\">\n                                            <label>\n                                                <input type=\"radio\" [value]=\"3\" \n                                                [checked]=\"booking.status===3\"\n                                                (change)=\"onStatusChange(3)\"\n                                                name=\"status\">\n                                                Left\n                                            </label>\n                                        </div>\n                                        <div class=\"radio\">\n                                            <label>\n                                                <input type=\"radio\" [value]=\"2\" \n                                                [checked]=\"booking.status===2\"\n                                                (change)=\"onStatusChange(2)\"\n                                                name=\"status\">\n                                                Booking Not Completed\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                           \n                            <button type=\"submit\" class=\"btn btn-rose pull-right\">Update Status</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../angular/app/bookingdetails/bookingdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingdetailsComponent; });
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




var BookingdetailsComponent = (function () {
    function BookingdetailsComponent(http, el, toastr, router) {
        this.http = http;
        this.el = el;
        this.toastr = toastr;
        this.router = router;
    }
    BookingdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.bookingId = this.router.snapshot.paramMap.get('id');
        this.booking = {
            name: '',
            title: '',
            phone: '',
            email: '',
            date: ''
        };
        this.http.get('/api/bookingDetails/' + this.bookingId)
            .toPromise()
            .then(function (result) {
            var data = result.json().data.data;
            _this.booking = data;
            _this.booking.startDate = new Date(data.startDate);
            _this.booking.endDate = new Date(data.endDate);
            var imgPrv = _this.prfPreview.nativeElement;
            imgPrv.src = "http://studphotos.s3.amazonaws.com/" + _this.booking.propertyId + ".jpg";
        });
    };
    BookingdetailsComponent.prototype.onStatusChange = function (stat) {
        this.booking.status = stat;
    };
    BookingdetailsComponent.prototype.changeStatus = function (form) {
        var _this = this;
        var data = {
            startDate: form.value.startDt,
            endDate: form.value.endDt,
            status: this.booking.status
        };
        this.http.post('/api/updateBooking/' + this.bookingId, data)
            .toPromise()
            .then(function (result) {
            _this.toastr.success('Status updated', 'Flarow!');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("profileinput"),
        __metadata("design:type", Object)
    ], BookingdetailsComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("prfPreview"),
        __metadata("design:type", Object)
    ], BookingdetailsComponent.prototype, "prfPreview", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("uploadButton"),
        __metadata("design:type", Object)
    ], BookingdetailsComponent.prototype, "uploadButton", void 0);
    BookingdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-td-cmp',
            template: __webpack_require__("../../../../../angular/app/bookingdetails/bookingdetails.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/bookingdetails/bookingdetails.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
    ], BookingdetailsComponent);
    return BookingdetailsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=bookingdetails.component.js.map

/***/ }),

/***/ "../../../../../angular/app/bookingdetails/bookingdetails.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingdetailsModule", function() { return BookingdetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookingdetails_component__ = __webpack_require__("../../../../../angular/app/bookingdetails/bookingdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bookingdetails_routing__ = __webpack_require__("../../../../../angular/app/bookingdetails/bookingdetails.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BookingdetailsModule = (function () {
    function BookingdetailsModule() {
    }
    BookingdetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__bookingdetails_routing__["a" /* BookingdetailsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdNativeDateModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__bookingdetails_component__["a" /* BookingdetailsComponent */]],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* LOCALE_ID */], useValue: 'en-IN' },
            ]
        })
    ], BookingdetailsModule);
    return BookingdetailsModule;
}());

//# sourceMappingURL=bookingdetails.module.js.map

/***/ }),

/***/ "../../../../../angular/app/bookingdetails/bookingdetails.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingdetailsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bookingdetails_component__ = __webpack_require__("../../../../../angular/app/bookingdetails/bookingdetails.component.ts");

var BookingdetailsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__bookingdetails_component__["a" /* BookingdetailsComponent */]
            }]
    }
];
//# sourceMappingURL=bookingdetails.routing.js.map

/***/ })

});
//# sourceMappingURL=bookingdetails.module.chunk.js.map