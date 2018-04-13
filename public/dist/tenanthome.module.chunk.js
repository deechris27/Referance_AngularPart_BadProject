webpackJsonp(["tenanthome.module"],{

/***/ "../../../../../angular/app/tenanthome/tenanthome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Landing-cover-th{\n    background-color: white;\n    background-image: url('http://studphotos.s3.amazonaws.com/images/tenant.jpg');\n    background-size: cover;\n    width: 100%;\n    height: 700px;\n}\n/* h1, h2, h3, h4, h5, h6 {\n\tcolor:black;\n} */\n.headline span i {\n    color: red;\n}\n.icon-box-2 i {\n    color:red;\n}\n\n.tabs-nav li a:hover, .tabs-nav li.active a {\n    color:red;\n}\n\n.listing-item{\n\tpadding:15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/tenanthome/tenanthome.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" class=\"Landing-cover-th\" layout-align=\"center center\">\n    <div class=\"col-md-12 centered margin-top-20\" style=\"text-align:center;\">\n        <h1 class=\"Landing-heading divopaque\">\n            <strong>Find no broker rented property</strong>\n        </h1>\n        <h3 class=\"Landing-heading divopaque\">\n            <strong>Get trusted landlords associated with Flarow</strong>\n        </h3>\n        <h3 class=\"Landing-heading divopaque\">\n            <strong>Flarow will maintian your payment history you just relax</strong>\n        </h3>\n    </div>\n</div>\n\n<div id=\"howitworks\"></div>\n<!-- Content\n    ================================================== -->\n\n<section class=\"fullwidth margin-top-65 padding-top-75 padding-bottom-70\" data-background-color=\"#f8f8f8\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <h3 class=\"headline centered margin-bottom-45\">\n                    What we Offer to you\n                    <span>A platform to find\n                        <i>no broker property</i> schedule and visit rented properties</span>\n\n                </h3>\n            </div>\n\n            <div class=\"col-md-12\">\n                <!-- You can now use your library component in app.component.html -->\n                <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n                    <div ngxSlickItem *ngFor=\"let item of items\" class=\"carousel-item\">\n                        <div class=\"listing-item\">\n                            <a [routerLink]=\"['/propdetail', item.id]\">\n                                <img src={{item.imgSrc}} alt=\"\" width=\"100%\">\n                            </a>\n                            <div class=\"listing-item-content\">\n                                <h3>{{item.text}}</h3>\n                                <span></span>\n                            </div>\n                        </div>\n                    </div>\n                </ngx-slick>\n            </div>\n        </div>\n    </div>\n</section>\n\n<div class=\"container margin-bottom-60\">\n    <div class=\"row centered\">\n        <div class=\"col-md-12\" style=\"margin:0px auto;text-align:center;\">\n            <h3 class=\"headline centered margin-top-80 margin-bottom-40\">\n                <i class=\"im im-icon-Building\"></i> Features\n                <span style=\"border-bottom: 1px solid #f91942;width: 64px; margin: 0px auto;padding: 4px;\"></span>\n            </h3>\n\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n\n            <div class=\"style-2\">\n                <!-- Tabs Navigation -->\n                <ul class=\"tabs-nav\">\n                    <li class=\"active\">\n                        <a href=\"#tab1a\">\n                            <i class=\"im im-icon-Add-UserStar\"></i>Register</a>\n                    </li>\n                    <li>\n                        <a href=\"#tab2a\">\n                            <i class=\"im im-icon-Bulleted-List\"></i>Schedule Your visit</a>\n                    </li>\n                    <li>\n                        <a href=\"#tab3a\">\n                            <i class=\"im im-icon-Monitor-Analytics\"></i>Negotiate Rent</a>\n                    </li>\n                    <li>\n                        <a href=\"#tab4a\">\n                            <i class=\"im im-icon-Handshake\"></i>Get Booked Your Properties</a>\n                    </li>\n                    <li>\n                        <a href=\"#tab5a\">\n                            <i class=\"im im-icon-Cloud-Tablet\"></i>Track Rents History</a>\n                    </li>\n\n                </ul>\n                <!-- Tabs Content -->\n                <div class=\"tabs-container\">\n                    <div class=\"tab-content\" id=\"tab1a\">\n                        Register as owner it will take one minute for lifetime. It will be interesting to manage your rented properties online.\n                    </div>\n\n                    <div class=\"tab-content\" id=\"tab2a\">Aenean dolor mi, luctus et laoreet hendrerit, condimentum faucibus mi. Nam et sem eros. Sed sed eros\n                        nec massa pellentesque accumsan in nec magna. Donec sollicitudin enim nec justo mollis bibendum.\n                        Nulla eleifend mollis velit. Ut sed risus eget metus egestas sagittis. Etiam vestibulum interdum\n                        turpis.</div>\n\n                    <div class=\"tab-content\" id=\"tab3a\">Suspendisse ut laoreet massa. Etiam vel dolor eu quam varius tempor eu eu mi. Duis auctor interdum ligula\n                        ut faucibus. Vivamus lorem ipsum dolor sit amet in tincidunt augue. Aenean at ligula justo, sed gravida\n                        metus. </div>\n\n                    <div class=\"tab-content\" id=\"tab4a\">Suspendisse ut laoreet massa. Etiam vel dolor eu quam varius tempor eu eu mi. Duis auctor interdum ligula\n                        ut faucibus. Vivamus lorem ipsum dolor sit amet in tincidunt augue. Aenean at ligula justo, sed gravida\n                        metus. </div>\n\n                    <div class=\"tab-content\" id=\"tab5a\">Suspendisse ut laoreet massa. Etiam vel dolor eu quam varius tempor eu eu mi. Duis auctor interdum ligula\n                        ut faucibus. Vivamus lorem ipsum dolor sit amet in tincidunt augue. Aenean at ligula justo, sed gravida\n                        metus. </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/tenanthome/tenanthome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenanthomeComponent; });
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



var TenanthomeComponent = (function () {
    function TenanthomeComponent(router, http) {
        this.router = router;
        this.http = http;
        this.slideConfig = {
            arrows: false,
            "slidesToShow": 3, "slidesToScroll": 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false
                    }
                }, {
                    breakpoint: 300,
                    settings: "unslick" // destroys slick
                }]
        };
        this.items = [{
                imgSrc: "http://studphotos.s3.amazonaws.com/images/properties.jpg",
                text: "Rented Properties on your locality"
            }, {
                imgSrc: "http://studphotos.s3.amazonaws.com/images/agreement.jpg",
                text: "Online KYC, paperless"
            }, {
                imgSrc: "http://studphotos.s3.amazonaws.com/images/rental.jpg",
                text: "Direct Bank Transfer, Manage payment history"
            }];
    }
    TenanthomeComponent.prototype.ngOnInit = function () {
        $.material.options.autofill = true;
        $.material.init();
        var $tabsNav = $('.tabs-nav');
        var $tabsNavLis = $tabsNav.children('li');
        $tabsNav.each(function () {
            var $this = $(this);
            $this.next().children('.tab-content').stop(true, true).hide()
                .first().show();
            $this.children('li').first().addClass('active').stop(true, true).show();
        });
        $tabsNavLis.on('click', function (e) {
            var $this = $(this);
            $this.siblings().removeClass('active').end()
                .addClass('active');
            $this.parent().next().children('.tab-content').stop(true, true).hide()
                .siblings($this.find('a').attr('href')).fadeIn();
            e.preventDefault();
        });
        var hash = window.location.hash;
        var anchor = $('.tabs-nav a[href="' + hash + '"]');
        if (anchor.length === 0) {
            $(".tabs-nav li:first").addClass("active").show(); //Activate first tab
            $(".tab-content:first").show(); //Show first tab content
        }
        else {
            anchor.parent('li').click();
        }
    };
    TenanthomeComponent.prototype.ngAfterViewInit = function () {
        $('[rel="tooltip"]').tooltip();
    };
    TenanthomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'tenanthome',
            template: __webpack_require__("../../../../../angular/app/tenanthome/tenanthome.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/tenanthome/tenanthome.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], TenanthomeComponent);
    return TenanthomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=tenanthome.component.js.map

/***/ }),

/***/ "../../../../../angular/app/tenanthome/tenanthome.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenanthomeModule", function() { return TenanthomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tenanthome_component__ = __webpack_require__("../../../../../angular/app/tenanthome/tenanthome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tenanthome_routing__ = __webpack_require__("../../../../../angular/app/tenanthome/tenanthome.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_slick__ = __webpack_require__("../../../../ngx-slick/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TenanthomeModule = (function () {
    function TenanthomeModule() {
    }
    TenanthomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__tenanthome_routing__["a" /* TenanthomeRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_slick__["a" /* SlickModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__tenanthome_component__["a" /* TenanthomeComponent */]]
        })
    ], TenanthomeModule);
    return TenanthomeModule;
}());

//# sourceMappingURL=tenanthome.module.js.map

/***/ }),

/***/ "../../../../../angular/app/tenanthome/tenanthome.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenanthomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tenanthome_component__ = __webpack_require__("../../../../../angular/app/tenanthome/tenanthome.component.ts");

var TenanthomeRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__tenanthome_component__["a" /* TenanthomeComponent */]
            }]
    }
];
//# sourceMappingURL=tenanthome.routing.js.map

/***/ })

});
//# sourceMappingURL=tenanthome.module.chunk.js.map