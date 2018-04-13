webpackJsonp(["tag.module"],{

/***/ "../../../../../angular/app/tag/tag.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".square-box{\n    width:200px;\n    height: 125px;\n}\n\n#file-input { display: none; }\n\n.file-input-hide {\n     position: relative;\n     left: -6em;\n}\n\n.bring-forward {\n     z-index:10;\n}\n \nimg {\n  background-image: url(\"//studphotos.s3.amazonaws.com/img/800x500.jpg\");\n  overflow: hidden;\n}\n\nimg:before {\n  content: \" \";\n  font-size: 1000px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/tag/tag.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                            <i class=\"material-icons\">group_add</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"card-title\">Tag -\n                                <small class=\"category\">Tag your property to tenant</small>\n                            </h4>\n                            <form (ngSubmit)=\"upload(f)\" #f=\"ngForm\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-5\" *ngIf=\"propertyName==='default'\">\n                                        <md-select id=\"countryString\" #prop name=\"countryString\" [(ngModel)]=\"propertyId\" placeholder=\"Choose Property\" required>\n                                            <md-option *ngFor=\"let row of property\" [value]=\"row.id\">{{row.title}}</md-option>\n                                        </md-select>                                     \n                                    </div>\n                                    <div class=\"col-md-5\" *ngIf=\"propertyName!=='default'\">\n                                        <label class=\"control-label\">Property Name</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"propName\" name=\"propName\" [(ngModel)]=\"propertyName\" #propName=\"ngModel\" readonly>                                    \n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-5\">\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Tenant Name</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"tName\" name=\"tName\" [(ngModel)]=\"tenantName\" #tName=\"ngModel\">\n                                            <small [hidden]=\"tName.valid || (tName.pristine && !f.submitted)\" class=\"text-danger\">\n                                                Please provide Tenant Name\n                                            </small>\n                                        </div>\n                                    </div>\n                                </div>                                \n                                <div class=\"row\">\n                                    <div class=\"col-md-5\">\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Mobile</label>\n                                            <input type=\"text\" id=\"mobile\" name=\"mobile\" \n                                            ngModel class=\"form-control\" [(ngModel)]=\"mobileNo\" \n                                            #mobile=\"ngModel\" pattern=\"[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]\"\n                                            minlength=\"10\" maxlength=\"10\" required>\n                                            <small [hidden]=\"mobile.valid || (mobile.pristine && !f.submitted)\" \n                                            class=\"text-danger\">\n                                                    Mobile number is invalid\n                                            </small>\n                                        </div>\n                                    </div>                                           \n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-5\">\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Email address</label>\n                                            <input type=\"email\" class=\"form-control\" id=\"email\" \n                                            name=\"email\" [ngModel]=\"emailId\" #email=\"ngModel\" \n                                            pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\"\n                                            required>\n                                            <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\" \n                                            class=\"text-danger\">\n                                                   Email id is invalid\n                                            </small>\n                                        </div>\n                                    </div>                                           \n                                </div>\n\n                                <button type=\"submit\" class=\"btn btn-rose pull-right\">Tag Tenant</button>\n                                <div class=\"clearfix\"></div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "../../../../../angular/app/tag/tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagComponent; });
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




var TagComponent = (function () {
    function TagComponent(http, toastr, actrouter, router) {
        this.http = http;
        this.toastr = toastr;
        this.actrouter = actrouter;
        this.router = router;
        this.multiple = false;
    }
    TagComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.property = [{
                title: ''
            }];
        this.propertyName = 'default';
        if (this.actrouter.snapshot.paramMap.get('id') != null
            && this.actrouter.snapshot.paramMap.get('name') != null) {
            this.propertyId = this.actrouter.snapshot.paramMap.get('id');
            this.propertyName = this.actrouter.snapshot.paramMap.get('name');
        }
        else {
            this.userId = localStorage.getItem("userId");
            this.http.get('/api/property/' + this.userId)
                .toPromise()
                .then(function (result) {
                _this.property = result.json().data.property;
            });
        }
        console.log(this.propertyName);
    };
    TagComponent.prototype.upload = function (form) {
        var _this = this;
        var data = {
            mobile: form.value.mobile,
            email: form.value.email,
            owner: localStorage.getItem("userId"),
            name: form.value.tName,
            propertyId: this.propertyId
        };
        this.http.post('/api/tag', data)
            .toPromise()
            .then(function (result) {
            var routerIns = _this.router;
            swal({
                title: 'Tag Tenant to property!',
                text: 'Tag tenant request sent, you will get notification once the tenant gets tagged',
                type: 'success',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            }).then(function () {
                routerIns.navigate(['/dashboard']);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TagComponent.prototype, "multiple", void 0);
    TagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-tag-cmp',
            template: __webpack_require__("../../../../../angular/app/tag/tag.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/tag/tag.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
    ], TagComponent);
    return TagComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=tag.component.js.map

/***/ }),

/***/ "../../../../../angular/app/tag/tag.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagModule", function() { return TagModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag_component__ = __webpack_require__("../../../../../angular/app/tag/tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tag_routing__ = __webpack_require__("../../../../../angular/app/tag/tag.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TagModule = (function () {
    function TagModule() {
    }
    TagModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__tag_routing__["a" /* TagRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdSelectModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__tag_component__["a" /* TagComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdSelectModule */]
            ]
        })
    ], TagModule);
    return TagModule;
}());

//# sourceMappingURL=tag.module.js.map

/***/ }),

/***/ "../../../../../angular/app/tag/tag.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_component__ = __webpack_require__("../../../../../angular/app/tag/tag.component.ts");

var TagRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__tag_component__["a" /* TagComponent */]
            }]
    }
];
//# sourceMappingURL=tag.routing.js.map

/***/ })

});
//# sourceMappingURL=tag.module.chunk.js.map