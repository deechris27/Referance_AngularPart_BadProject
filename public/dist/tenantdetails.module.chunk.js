webpackJsonp(["tenantdetails.module"],{

/***/ "../../../../../angular/app/tenantdetails/tenantdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".square-box{\n    width:200px;\n    height: 125px;\n}\n\n#profile-input { display: none; }\n\n.profile-input-hide {\n     position: relative;\n     left: -6em;\n}\n\n.bring-forward {\n     z-index:10;\n}\n \nimg {\n  background-image: url(\"//studphotos.s3.amazonaws.com/img/800x500.jpg\");\n  overflow: hidden;\n}\n\nimg:before {\n  content: \" \";\n  font-size: 1000px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/tenantdetails/tenantdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" #prfPreview src=\"http://studphotos.s3.amazonaws.com/img/400x400.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"card-title\">{{visit.name}}</h4>\n                        </div>\n                    </div>\n                </div>            \n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">perm_identity</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Visitor -\n                            <small class=\"category\">status</small>\n                        </h4>\n                        <form (ngSubmit)=\"changeStatus(f);\" #f=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Propery</label>\n                                        <p>{{visit.title}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Tenant contact</label>\n                                        <p>{{visit.phone}}</p>\n                                    </div>\n                                </div>\n                            </div>  \n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Tenant email</label>\n                                        <p>{{visit.email}}</p>\n                                    </div>\n                                </div>\n                            </div>    \n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Visit date</label>\n                                        <p>{{visit.date}}</p>\n                                    </div>\n                                </div>\n                            </div>                                                                                                                  \n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <div class=\"radio\">\n                                                <label>\n                                                    <input type=\"radio\" [value]=\"0\" \n                                                    [checked]=\"visit.status===0\"\n                                                    (change)=\"onStatusChange(1)\"\n                                                    name=\"status\">\n                                                    Not Visited Yet\n                                                </label>\n                                            </div>\n                                            <div class=\"radio\">\n                                                <label>\n                                                    <input type=\"radio\" [value]=\"1\" \n                                                    [checked]=\"visit.status===1\"\n                                                    (change)=\"onStatusChange(1)\"\n                                                    name=\"status\" checked=\"true\">\n                                                    Visited\n                                                </label>\n                                            </div>\n                                            <div class=\"radio\">\n                                                <label>\n                                                    <input type=\"radio\" [value]=\"2\" \n                                                    [checked]=\"visit.status===3\"\n                                                    (change)=\"onStatusChange(2)\"\n                                                    name=\"status\">\n                                                    Booked\n                                                </label>\n                                            </div>\n                                            <div class=\"radio\">\n                                                <label>\n                                                    <input type=\"radio\" [value]=\"3\" \n                                                    [checked]=\"visit.status===4\"\n                                                    (change)=\"onStatusChange(3)\"\n                                                    name=\"status\">\n                                                    Cancelled\n                                                </label>\n                                            </div>\n                                    </div>\n                                </div>\n                            </div>\n                           \n                            <button type=\"submit\" class=\"btn btn-rose pull-right\">Update Status</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../angular/app/tenantdetails/tenantdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantdetailsComponent; });
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




var TenantdetailsComponent = (function () {
    function TenantdetailsComponent(http, el, toastr, router) {
        this.http = http;
        this.el = el;
        this.toastr = toastr;
        this.router = router;
    }
    TenantdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.visitId = this.router.snapshot.paramMap.get('id');
        this.visit = {
            name: '',
            title: '',
            phone: '',
            email: '',
            date: '',
            status: ''
        };
        this.http.get('/api/visitordetails/' + this.visitId)
            .toPromise()
            .then(function (result) {
            _this.visit = result.json().data.visit;
            var imgPrv = _this.prfPreview.nativeElement;
            imgPrv.src = "http://studphotos.s3.amazonaws.com/" + _this.visit.tenantId + ".jpg";
        });
    };
    TenantdetailsComponent.prototype.onStatusChange = function (stat) {
        this.visit.status = stat;
    };
    TenantdetailsComponent.prototype.changeStatus = function (form) {
        var _this = this;
        var data = {
            ownerId: localStorage.getItem("userId"),
            propertyId: this.visit.propertyId,
            tenantId: this.visit.tenantId,
            status: this.visit.status
        };
        console.log(data.status);
        this.http.post('/api/visitorstatus/' + this.visitId, data)
            .toPromise()
            .then(function (result) {
            _this.toastr.success('Status updated', 'Flarow!');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("profileinput"),
        __metadata("design:type", Object)
    ], TenantdetailsComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("prfPreview"),
        __metadata("design:type", Object)
    ], TenantdetailsComponent.prototype, "prfPreview", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("uploadButton"),
        __metadata("design:type", Object)
    ], TenantdetailsComponent.prototype, "uploadButton", void 0);
    TenantdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-td-cmp',
            template: __webpack_require__("../../../../../angular/app/tenantdetails/tenantdetails.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/tenantdetails/tenantdetails.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
    ], TenantdetailsComponent);
    return TenantdetailsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=tenantdetails.component.js.map

/***/ }),

/***/ "../../../../../angular/app/tenantdetails/tenantdetails.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantdetailsModule", function() { return TenantdetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tenantdetails_component__ = __webpack_require__("../../../../../angular/app/tenantdetails/tenantdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tenantdetails_routing__ = __webpack_require__("../../../../../angular/app/tenantdetails/tenantdetails.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TenantdetailsModule = (function () {
    function TenantdetailsModule() {
    }
    TenantdetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__tenantdetails_routing__["a" /* TenantdetailsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__tenantdetails_component__["a" /* TenantdetailsComponent */]]
        })
    ], TenantdetailsModule);
    return TenantdetailsModule;
}());

//# sourceMappingURL=tenantdetails.module.js.map

/***/ }),

/***/ "../../../../../angular/app/tenantdetails/tenantdetails.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantdetailsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tenantdetails_component__ = __webpack_require__("../../../../../angular/app/tenantdetails/tenantdetails.component.ts");

var TenantdetailsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__tenantdetails_component__["a" /* TenantdetailsComponent */]
            }]
    }
];
//# sourceMappingURL=tenantdetails.routing.js.map

/***/ })

});
//# sourceMappingURL=tenantdetails.module.chunk.js.map