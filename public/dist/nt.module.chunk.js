webpackJsonp(["nt.module"],{

/***/ "../../../../../angular/app/nt/nt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".square-box{\n    width:200px;\n    height: 125px;\n}\n\n#file-input { display: none; }\n\n.file-input-hide {\n     position: relative;\n     left: -6em;\n}\n\n.bring-forward {\n     z-index:10;\n}\n \nimg {\n  background-image: url(\"//studphotos.s3.amazonaws.com/img/800x500.jpg\");\n  overflow: hidden;\n}\n\nimg:before {\n  content: \" \";\n  font-size: 1000px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/nt/nt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                            <i class=\"material-icons\">home</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"card-title\">Ticket -\n                                <small class=\"category\">Your ticket details</small>\n                            </h4>\n                            <form (ngSubmit)=\"upload(f); f.reset()\" #f=\"ngForm\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-5\">\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Title</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" \n                                            [ngModel]=\"ticket.title\"\n                                            required minlength=\"4\" #title=\"ngModel\">\n                                            <small [hidden]=\"title.valid || (title.pristine && !f.submitted)\" class=\"text-danger\">\n                                                Title should be more than 4 characters.\n                                            </small>\n                                        </div>\n                                    </div>                                           \n                                </div>\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Property Name</label>\n                                        <input type=\"text\" id=\"property\" name=\"property\" ngModel class=\"form-control\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Description</label>\n                                        <textarea class=\"form-control\" rows=\"5\" id=\"about\"\n                                        name=\"about\" [(ngModel)]=\"ticket.about\" #about=\"ngModel\"></textarea>\n                                    </div>\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-rose pull-right\">Create Ticket</button>\n                                <div class=\"clearfix\"></div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-product\">\n                        <div class=\"card-image\" data-header-animation=\"false\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" #imgPreview src=\"\">\n                            </a>\n                        </div>                    \n                        <div class=\"card-content\">\n                            <input #fileinput class=\"ng-hide\" id=\"file-input\" input-files=\"files\"\n                            type=\"file\"  accept=\"image/*\"\n                            (change)=\"readUrl($event)\"/>\n                            <label for=\"file-input\" class=\"btn btn-primary pull-right\" #uploadButton id=\"uploadButton\"\n                            >Upload Photo</label>                                           \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "../../../../../angular/app/nt/nt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NtComponent = (function () {
    function NtComponent(http, el, toastr, ngZone, injector) {
        this.http = http;
        this.el = el;
        this.toastr = toastr;
        this.ngZone = ngZone;
        this.injector = injector;
        this.multiple = false;
    }
    NtComponent.prototype.ngOnInit = function () {
        this.ticket = {
            title: '',
            property: '',
            problem: '',
            about: ''
        };
    };
    NtComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var imgPrv = _this.imgPreview.nativeElement;
                imgPrv.src = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    NtComponent.prototype.upload = function (form) {
        var _this = this;
        var data = {
            title: form.value.title,
            ownerId: localStorage.getItem("userId"),
            property: form.value.property,
            problem: form.value.problem,
        };
        this.http.post('/api/addProperty', data)
            .toPromise()
            .then(function (result) {
            _this.imageId = result.json().data.data;
            if (!result.json().errors) {
                _this.toastr.success('Property added', 'Flarow!');
                _this.imageId = data.ownerId + "_" + _this.imageId;
                var fileBrowser = _this.fileInput.nativeElement;
                if (fileBrowser.files.length === 0) {
                    return;
                }
                ;
                var files = fileBrowser.files;
                var formData = new FormData();
                for (var i = 0; i < files.length; i++) {
                    formData.append("image", files[i]);
                    formData.append("name", _this.imageId);
                }
                _this.http
                    .post('/api/s3upload', formData)
                    .subscribe(function (result) {
                    var imgPrv = _this.imgPreview.nativeElement;
                    imgPrv.src = "http://studphotos.s3.amazonaws.com/img/800x500.jpg";
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], NtComponent.prototype, "multiple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("fileinput"),
        __metadata("design:type", Object)
    ], NtComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("imgPreview"),
        __metadata("design:type", Object)
    ], NtComponent.prototype, "imgPreview", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("uploadButton"),
        __metadata("design:type", Object)
    ], NtComponent.prototype, "uploadButton", void 0);
    NtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-np-cmp',
            template: __webpack_require__("../../../../../angular/app/nt/nt.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/nt/nt.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */]) === "function" && _e || Object])
    ], NtComponent);
    return NtComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=nt.component.js.map

/***/ }),

/***/ "../../../../../angular/app/nt/nt.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtModule", function() { return NtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nt_component__ = __webpack_require__("../../../../../angular/app/nt/nt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nt_routing__ = __webpack_require__("../../../../../angular/app/nt/nt.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NtModule = (function () {
    function NtModule() {
    }
    NtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__nt_routing__["a" /* NtRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__nt_component__["a" /* NtComponent */]]
        })
    ], NtModule);
    return NtModule;
}());

//# sourceMappingURL=nt.module.js.map

/***/ }),

/***/ "../../../../../angular/app/nt/nt.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NtRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nt_component__ = __webpack_require__("../../../../../angular/app/nt/nt.component.ts");

var NtRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__nt_component__["a" /* NtComponent */]
            }]
    }
];
//# sourceMappingURL=nt.routing.js.map

/***/ })

});
//# sourceMappingURL=nt.module.chunk.js.map