webpackJsonp(["ticketdetails.module"],{

/***/ "../../../../../angular/app/ticketdetails/ticketdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".square-box{\n    width:200px;\n    height: 125px;\n}\n\n#profile-input { display: none; }\n\n.profile-input-hide {\n     position: relative;\n     left: -6em;\n}\n\n.bring-forward {\n     z-index:10;\n}\n \nimg {\n  background-image: url(\"//studphotos.s3.amazonaws.com/img/800x500.jpg\");\n  overflow: hidden;\n}\n\nimg:before {\n  content: \" \";\n  font-size: 1000px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/ticketdetails/ticketdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" #prfPreview src=\"http://studphotos.s3.amazonaws.com/img/400x400.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"card-title\">{{ticket.name}}</h4>\n                        </div>\n                    </div>\n                </div>            \n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">perm_identity</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Ticket -\n                            <small class=\"category\">status</small>\n                        </h4>\n                        <form (ngSubmit)=\"changeStatus(f);\" #f=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Propery</label>\n                                        <p>{{ticket.title}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Tenant contact</label>\n                                        <p>{{ticket.phone}}</p>\n                                    </div>\n                                </div>\n                            </div>  \n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Tenant email</label>\n                                        <p>{{ticket.email}}</p>\n                                    </div>\n                                </div>\n                            </div>    \n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Ticket date</label>\n                                        <p>{{ticket.date}}</p>\n                                    </div>\n                                </div>\n                            </div>                                                                                                                  \n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <div class=\"radio\">\n                                            <label>\n                                                <input type=\"radio\" [value]=\"0\" \n                                                [checked]=\"ticket.status===0\"\n                                                (change)=\"onStatusChange(0)\"\n                                                name=\"status\">\n                                                Unread\n                                            </label>\n                                        </div>\n                                        <div class=\"radio\">\n                                            <label>\n                                                <input type=\"radio\" [value]=\"1\" \n                                                [checked]=\"ticket.status===1\"\n                                                (change)=\"onStatusChange(1)\"\n                                                name=\"status\" checked=\"true\">\n                                                Solved\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                           \n                            <button type=\"submit\" class=\"btn btn-rose pull-right\">Update Ticket</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../angular/app/ticketdetails/ticketdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketdetailsComponent; });
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




var TicketdetailsComponent = (function () {
    function TicketdetailsComponent(http, el, toastr, router) {
        this.http = http;
        this.el = el;
        this.toastr = toastr;
        this.router = router;
    }
    TicketdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.ticketId = this.router.snapshot.paramMap.get('id');
        this.ticket = {
            name: '',
            title: '',
            phone: '',
            email: '',
            date: '',
            status: ''
        };
        this.http.get('/api/myticketdetail/' + this.ticketId)
            .toPromise()
            .then(function (result) {
            _this.ticket = result.json().data.ticket;
            var imgPrv = _this.prfPreview.nativeElement;
            imgPrv.src = "http://studphotos.s3.amazonaws.com/" + _this.ticket.tenantId + ".jpg";
        });
    };
    TicketdetailsComponent.prototype.onStatusChange = function (stat) {
        this.ticket.status = stat;
    };
    TicketdetailsComponent.prototype.changeStatus = function (form) {
        var _this = this;
        var data = {
            ownerId: localStorage.getItem("userId"),
            propertyId: this.ticket.propertyId,
            tenantId: this.ticket.tenantId,
            status: this.ticket.status
        };
        console.log(data.status);
        this.http.post('/api/myticketstatus/' + this.ticketId, data)
            .toPromise()
            .then(function (result) {
            _this.toastr.success('Ticket updated', 'Flarow!');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("profileinput"),
        __metadata("design:type", Object)
    ], TicketdetailsComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("prfPreview"),
        __metadata("design:type", Object)
    ], TicketdetailsComponent.prototype, "prfPreview", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("uploadButton"),
        __metadata("design:type", Object)
    ], TicketdetailsComponent.prototype, "uploadButton", void 0);
    TicketdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-td-cmp',
            template: __webpack_require__("../../../../../angular/app/ticketdetails/ticketdetails.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/ticketdetails/ticketdetails.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
    ], TicketdetailsComponent);
    return TicketdetailsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=ticketdetails.component.js.map

/***/ }),

/***/ "../../../../../angular/app/ticketdetails/ticketdetails.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketdetailsModule", function() { return TicketdetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ticketdetails_component__ = __webpack_require__("../../../../../angular/app/ticketdetails/ticketdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ticketdetails_routing__ = __webpack_require__("../../../../../angular/app/ticketdetails/ticketdetails.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TicketdetailsModule = (function () {
    function TicketdetailsModule() {
    }
    TicketdetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__ticketdetails_routing__["a" /* TicketdetailsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__ticketdetails_component__["a" /* TicketdetailsComponent */]]
        })
    ], TicketdetailsModule);
    return TicketdetailsModule;
}());

//# sourceMappingURL=ticketdetails.module.js.map

/***/ }),

/***/ "../../../../../angular/app/ticketdetails/ticketdetails.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketdetailsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ticketdetails_component__ = __webpack_require__("../../../../../angular/app/ticketdetails/ticketdetails.component.ts");

var TicketdetailsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__ticketdetails_component__["a" /* TicketdetailsComponent */]
            }]
    }
];
//# sourceMappingURL=ticketdetails.routing.js.map

/***/ })

});
//# sourceMappingURL=ticketdetails.module.chunk.js.map