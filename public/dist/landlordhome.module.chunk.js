webpackJsonp(["landlordhome.module"],{

/***/ "../../../../../angular/app/landlordhome/landlordhome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../angular/assets/css/icons.css"), "");

// module
exports.push([module.i, ".Landing-cover-lh{\n    background-color: white;\n    background-image: url('http://studphotos.s3.amazonaws.com/images/landlord.jpg');\n    background-size: cover;\n    width: 100%;\n    height: 700px;\n}\n\n/* h1, h2, h3, h5, h6 {\n\tcolor:black;\n} */\n.headline span i {\n    color: red;\n}\n.icon-box-2 i {\n    color:red;\n}\n\n.tabs-nav li a:hover, .tabs-nav li.active a {\n    color:red;\n}\n\n.listing-item{\n\tpadding:15px;\n}\n\n.plan.featured .plan-price{\n\tbackground-color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/landlordhome/landlordhome.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" class=\"Landing-cover-lh\" layout-align=\"center center\">\n    <div class=\"col-md-12 centered margin-top-80\" style=\"text-align:center;\">\n        <h1 class=\"Landing-heading divopaque\">\n            <strong>Manage your Properties from across the Globe</strong>\n        </h1>\n        <h3 class=\"Landing-heading divopaque\">\n            <strong>Why worry during every Month end?</strong>\n        </h3>\n        <h3 class=\"Landing-heading divopaque\">\n            <strong>Leave the Rental Collections, Tenant Agreements & Property Management to us.</strong>\n        </h3>\n    </div>\n</div>\n\n<div id=\"howitworks\"></div>\n<!-- Content\n    ================================================== -->\n<section class=\"fullwidth margin-top-65 padding-top-75 padding-bottom-70\" data-background-color=\"#f8f8f8\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <h3 class=\"headline centered margin-bottom-45\">\n                    What we Offer\n                    <span>Rented property management\n                        <i>services for free </i>from anywhere anytime</span>\n                </h3>\n            </div>\n\n            <div class=\"col-md-12\">\n                <!-- You can now use your library component in app.component.html -->\n                <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n                    <div ngxSlickItem *ngFor=\"let item of items\" class=\"carousel-item\">\n                        <div class=\"listing-item\">\n                            <a [routerLink]=\"['/propdetail', item.id]\">\n                                <img src={{item.imgSrc}} alt=\"\" width=\"100%\">\n                            </a>\n                            <div class=\"listing-item-content\">\n                                <h3>{{item.text}}</h3>\n                                <span></span>\n                            </div>\n                        </div>\n                    </div>\n                </ngx-slick>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Info Section / End -->\n\n\n<div class=\"container margin-bottom-60\">\n\n    <div class=\"row centered\">\n        <div class=\"col-md-12\" style=\"margin:0px auto;text-align:center;\">\n            <h3 class=\"headline centered margin-top-80 margin-bottom-40\">\n                <i class=\"im im-icon-Building\"></i> Features\n                <span style=\"border-bottom: 1px solid #f91942;width: 64px; margin: 0px auto;padding: 4px;\"></span>\n            </h3>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"style-2\">\n                <!-- Tabs Navigation -->\n                <ul class=\"tabs-nav\">\n                    <li class=\"active\">\n                        <a href=\"#tab1a\">\n                            <i class=\"im im-icon-Add-UserStar\"></i>Register</a>\n                    </li>\n                    <li>\n                        <a href=\"#tab2a\">\n                            <i class=\"im im-icon-Bulleted-List\"></i>List Your Properties</a>\n                    </li>\n                    <li>\n                        <a href=\"#tab3a\">\n                            <i class=\"im im-icon-Monitor-Analytics\"></i>Get Scheduled tenents Visits</a>\n                    </li>\n                    <li>\n                        <a href=\"#tab4a\">\n                            <i class=\"im im-icon-Handshake\"></i>Get Booked Your Properties</a>\n                    </li>\n                    <li>\n                        <a href=\"#tab5a\">\n                            <i class=\"im im-icon-Cloud-Tablet\"></i>Track Rents History</a>\n                    </li>\n\n                </ul>\n                <!-- Tabs Content -->\n                <div class=\"tabs-container\">\n                    <div class=\"tab-content\" id=\"tab1a\">\n                        Register as owner it will take one minute for lifetime. It will be interesting to manage your rented properties online.\n                    </div>\n\n                    <div class=\"tab-content\" id=\"tab2a\">Aenean dolor mi, luctus et laoreet hendrerit, condimentum faucibus mi. Nam et sem eros. Sed sed eros\n                        nec massa pellentesque accumsan in nec magna. Donec sollicitudin enim nec justo mollis bibendum.\n                        Nulla eleifend mollis velit. Ut sed risus eget metus egestas sagittis. Etiam vestibulum interdum\n                        turpis.\n                    </div>\n\n                    <div class=\"tab-content\" id=\"tab3a\">Suspendisse ut laoreet massa. Etiam vel dolor eu quam varius tempor eu eu mi. Duis auctor interdum ligula\n                        ut faucibus. Vivamus lorem ipsum dolor sit amet in tincidunt augue. Aenean at ligula justo, sed gravida\n                        metus. </div>\n\n                    <div class=\"tab-content\" id=\"tab4a\">Suspendisse ut laoreet massa. Etiam vel dolor eu quam varius tempor eu eu mi. Duis auctor interdum ligula\n                        ut faucibus. Vivamus lorem ipsum dolor sit amet in tincidunt augue. Aenean at ligula justo, sed gravida\n                        metus. </div>\n\n                    <div class=\"tab-content\" id=\"tab5a\">Suspendisse ut laoreet massa. Etiam vel dolor eu quam varius tempor eu eu mi. Duis auctor interdum ligula\n                        ut faucibus. Vivamus lorem ipsum dolor sit amet in tincidunt augue. Aenean at ligula justo, sed gravida\n                        metus. </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Container / Start -->\n<div class=\"container margin-top-65 padding-top-75 padding-bottom-70\">\n    <!-- Row / Start -->\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h3 class=\"headline centered margin-bottom-45\">\n                Pricing Schemes\n                <span>Outsource\n                    <i>your Headaches </i>by signing up with Us</span>\n            </h3>\n        </div>\n\n        <div class=\"col-md-12\">\n            <div class=\"pricing-container margin-top-30\">\n                <!-- Plan #1 -->\n                <div class=\"plan\">\n                    <div class=\"plan-price\">\n                        <h3>Basic</h3>\n                        <span class=\"value\">Free</span>\n                        <span class=\"period\">Free of charge one standard listing active for 90 days</span>\n                    </div>\n\n                    <div class=\"plan-features\">\n                        <ul>\n                            <li>One Listing</li>\n                            <li>90 Days Availability</li>\n                            <li>Non-Featured</li>\n                            <li>24/7 Support</li>\n                        </ul>\n                        * Free Trial for 30 Days\n                        <a class=\"btn btn-rose btn-round\" href=\"#\">Get Started</a>\n                    </div>\n                </div>\n                <!-- Plan #2 -->\n\n                <div class=\"plan\">\n                    <div class=\"plan-price\">\n                        <h3>Value Add</h3>\n                        <span class=\"value\">Rs 499/month</span>\n                        <span class=\"period\">All Basic Features included plus the following benefits</span>\n                    </div>\n                    <div class=\"plan-features\">\n                        <ul>\n                            <li>One Listing</li>\n                            <li>180 Days Availability</li>\n                            <li>Non-Featured</li>\n                            <li>24/7 Support</li>\n                        </ul>\n                        * Free Trial for 30 Days\n                        <a class=\"btn btn-rose btn-round\" href=\"#\">Get Started</a>\n                    </div>\n                </div>\n                <!-- Plan #3 -->\n                <div class=\"plan featured\">\n                    <div class=\"listing-badge\">\n                        <span class=\"featured\">Recommended</span>\n                    </div>\n\n                    <div class=\"plan-price\">\n                        <h3>Extended</h3>\n                        <span class=\"value\">Rs 999/month</span>\n                        <span class=\"period\">All Basic + Value Add Features included plus the following benefits</span>\n                    </div>\n                    <div class=\"plan-features\">\n                        <ul>\n                            <li>One Time Fee</li>\n                            <li>One Listing</li>\n                            <li>Lifetime Availability</li>\n                            <li>Featured In Search Results</li>\n                            <li>24/7 Support</li>\n                        </ul>\n                        * Free Trial for 30 Days\n                        <a class=\"btn btn-rose btn-round\" href=\"#\">Get Started</a>\n\n                    </div>\n                </div>\n\n                <!-- Plan #4 -->\n                <div class=\"plan\">\n                    <div class=\"plan-price\">\n                        <h3>Professional</h3>\n                        <span class=\"value\">Rs 1499/month</span>\n                        <span class=\"period\">All Extended Features included plus the following </span>\n                    </div>\n\n                    <div class=\"plan-features\">\n                        <ul>\n                            <li>Unlimited Listings</li>\n                            <li>Lifetime Availability</li>\n                            <li>Featured In Search Results</li>\n                            <li>24/7 Support</li>\n                        </ul>\n                        * Free Trial for 30 Days\n                        <a class=\"btn btn-rose btn-round\" href=\"#\">Get Started</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Row / End -->\n</div>\n<!-- Container / End -->"

/***/ }),

/***/ "../../../../../angular/app/landlordhome/landlordhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandlordHomeComponent; });
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



var LandlordHomeComponent = (function () {
    function LandlordHomeComponent(router, http) {
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
                text: "Manage Unlimited Rented Properties"
            }, {
                imgSrc: "http://studphotos.s3.amazonaws.com/images/agreement.jpg",
                text: "Get Verified Tenants"
            }, {
                imgSrc: "http://studphotos.s3.amazonaws.com/images/rental.jpg",
                text: "Hassle Free Rental Collection"
            }];
    }
    LandlordHomeComponent.prototype.ngOnInit = function () {
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
    LandlordHomeComponent.prototype.ngAfterViewInit = function () {
        $('[rel="tooltip"]').tooltip();
    };
    LandlordHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'landlordhome',
            template: __webpack_require__("../../../../../angular/app/landlordhome/landlordhome.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/landlordhome/landlordhome.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], LandlordHomeComponent);
    return LandlordHomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=landlordhome.component.js.map

/***/ }),

/***/ "../../../../../angular/app/landlordhome/landlordhome.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandlordHomeModule", function() { return LandlordHomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landlordhome_component__ = __webpack_require__("../../../../../angular/app/landlordhome/landlordhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landlordhome_routing__ = __webpack_require__("../../../../../angular/app/landlordhome/landlordhome.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_slick__ = __webpack_require__("../../../../ngx-slick/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LandlordHomeModule = (function () {
    function LandlordHomeModule() {
    }
    LandlordHomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__landlordhome_routing__["a" /* LandlordHomeRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_slick__["a" /* SlickModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__landlordhome_component__["a" /* LandlordHomeComponent */]]
        })
    ], LandlordHomeModule);
    return LandlordHomeModule;
}());

//# sourceMappingURL=landlordhome.module.js.map

/***/ }),

/***/ "../../../../../angular/app/landlordhome/landlordhome.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandlordHomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landlordhome_component__ = __webpack_require__("../../../../../angular/app/landlordhome/landlordhome.component.ts");

var LandlordHomeRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__landlordhome_component__["a" /* LandlordHomeComponent */]
            }]
    }
];
//# sourceMappingURL=landlordhome.routing.js.map

/***/ })

});
//# sourceMappingURL=landlordhome.module.chunk.js.map