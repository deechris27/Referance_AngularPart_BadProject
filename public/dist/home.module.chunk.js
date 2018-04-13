webpackJsonp(["home.module"],{

/***/ "../../../../../angular/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../angular/assets/css/icons.css"), "");

// module
exports.push([module.i, ".img-slide-spacing {\n\tpadding: 15px;\n}\n\n.Landing{\n    height: 100%;\n}\n\n.Landing-cover{\n    background-color: white;\n    background-image: url('http://studphotos.s3.amazonaws.com/images/slider-bg-01.jpg');\n    background-size: cover;\n    width: 100%;\n    height: 700px;\n}\n\n.Landing-heading,\n.Landing-subtitle{\n    color: white;\n}\n\n.headline span i {\n    color: red;\n}\n.icon-box-2 i {\n    color:red;\n}\n\n.tabs-nav li a:hover, .tabs-nav li.active a {\n    color:red;\n}\n\n@media screen and (max-width: 500px) { \n    body { font-size: 12px;}\n}\n\n.center {\n    margin: auto;\n    width: 50%;\n    /* border: 3px solid white; */\n    padding: 10px;\n}\n\n.listing-item{\n    background: white;\n\tpadding:15px;\n}\n\n.slide{\n\tposition: relative;\n\ttext-align:center;\n}\n\n\n/* Slider */\n.slick-slider {\n    position: relative;\n    width: 100%;\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n\n.slick-list:focus {\n    outline: none;\n}\n\n.slick-list.dragging {\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n    position: relative;\n    top: 0;\n    left: 0;\n    display: block;\n  max-height: 731px;\n  overflow: hidden;\n}\n\n.slick-track:before,\n.slick-track:after {\n    display: table;\n\n    content: '';\n}\n\n.slick-track:after {\n    clear: both;\n}\n\n.slick-loading .slick-track {\n    visibility: hidden;\n}\n\n.slick-slide {\n    display: none;\n    float: left;\n    height: 100%;\n    min-height: 1px;\n    width: 100%;\n\n    &:focus,\n    &:hover {\n        outline: 0;\n    }\n}\n\n[dir='rtl'] .slick-slide {\n    float: right;\n}\n\n.slick-slide img {\n    display: block;\n    height: auto;\n    width: 100%;\n}\n\n.slick-slide.slick-loading img {\n    display: none;\n}\n\n.slick-slide.dragging img {\n    pointer-events: none;\n}\n\n.slick-initialized .slick-slide {\n    display: block;\n}\n\n.slick-loading .slick-slide {\n    visibility: hidden;\n}\n\n.slick-vertical .slick-slide {\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n    display: none;\n}\n\n/* Slider */\n\n/* Arrows */\n.slick-prev,\n.slick-next {\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 48px;\n    height: 48px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n    opacity: 1;\n}\n\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before {\n    font-family: 'FontAwesome';\n    font-size: 48px;\n  font-weight: bold;\n    line-height: 1;\n\n    opacity: .75;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  transition: opacity 0.25s;\n}\n\n.slick-prev {\n    left: 0;\n    z-index: 1;\n}\n\n[dir='rtl'] .slick-prev {\n    right: 0;\n    left: auto;\n}\n\n.slick-prev:before {\n    content: '\\F104';\n}\n\n[dir='rtl'] .slick-prev:before {\n    content: '\\F105';\n}\n\n.slick-next {\n    right: 0;\n}\n\n[dir='rtl'] .slick-next {\n    right: auto;\n    left: 0;\n}\n\n.slick-next:before {\n    content: '\\F105';\n}\n\n[dir='rtl'] .slick-next:before {\n    content: '\\F104';\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n    margin-bottom: 0;\n}\n\n.slick-dots {\n    position: absolute;\n    bottom: 16px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n\n.slick-dots li {\n    position: relative;\n\n    display: inline-block;\n\n    width: 16px;\n    height: 16px;\n    margin: 0 8px;\n    padding: 0;\n\n    cursor: pointer;\n}\n\n.slick-dots li button {\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 16px;\n    height: 16px;\n    padding: 8px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n\n.slick-dots li button:hover,\n.slick-dots li button:focus {\n    outline: none;\n}\n\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before {\n    opacity: 1;\n}\n\n.slick-dots li button:before {\n    font-family: 'FontAwesome';\n    font-size: 16px;\n    line-height: 1;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 16px;\n    height: 16px;\n\n    content: '\\F111';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    transition: opacity 0.25s;\n}\n\n.slick-dots li.slick-active button:before {\n    opacity: .75;\n    color: black;\n}\n\n/**\n * Photo\n */\n\n@-webkit-keyframes scale {\n    0% {\n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    }\n    100% {\n\t\t-webkit-transform: scale(1.1) rotate(0.01deg);\n\t\t        transform: scale(1.1) rotate(0.01deg); \n\t}\n}\n\n@keyframes scale {\n    0% {\n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    }\n    100% {\n\t\t-webkit-transform: scale(1.1) rotate(0.01deg);\n\t\t        transform: scale(1.1) rotate(0.01deg); \n\t}\n}\n\n/**\n * Wrapper\n */\n\n.wrapper {\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 45em;\n  width: 90%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-search-container dark-overlay\">\n    <div class=\"main-search-inner\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    \n                    <h2 class=\"text-center\"><strong>Switch to Smarter Renting</strong></h2>\n                    <br>\n                    <h4 class=\"text-center\"><strong>Modern Property & Rental Management Solution to Outsource your Headache of Managing</strong></h4>\n                    <h4 class=\"text-center\"><strong>Monthly Rentals, Due Dates, Tenant KYC Documents</strong></h4>\n                    <h4 class=\"text-center\"><strong>for HomeOwners, Property Managers & Tenants</strong></h4>\n                    \n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <br>\n                    <h4 class=\"text-center\">\n                        <a href=\"#/register\" *ngIf=\"!showReg\" class=\"btn btn-rose btn-round\">\n                            <h4><strong>Get Started. It's Free!!</strong></h4>\n                        </a>\n                        <a href=\"#/dashboard\" *ngIf=\"showReg\" class=\"btn btn-rose btn-round\">\n                            <h4><strong>Get Started. It's Free!!</strong></h4>\n                        </a>\n                        <br>\n                    </h4>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Video -->\n    <div class=\"video-container\">\n        <video poster=\"http://studphotos.s3.amazonaws.com/images/main-search-video-poster.jpg\" loop autoplay muted>\n            <source src=\"https://0.s3.envato.com/h264-video-previews/ab5c2b79-0c56-4a35-896f-7a53d6dc0fed/10691103.mp4\" type=\"video/mp4\">\n        </video>\n    </div>\n</div>\n\n\t\t<!-- Content\n================================================== -->\n\n<!-- how it works -->\n<div class=\"container\">\n        \n    <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n            <h2 class=\"headline centered margin-top-80\">\n                How Flarow Works\n                <span class=\"margin-top-25\"></span>\n            </h2>\n        </div>\n    </div>\n\n    <div class=\"row icons-container\">\n        <!-- Stage -->\n        <div class=\"col-md-3\">\n            <div class=\"icon-box-2 with-line\">\n                <i class=\"im im-icon-Map2\"></i>\n                <h3>List your Property</h3>\n                <p>Add your property on the Flarow Website with all the necessary details</p>\n            </div>\n        </div>\n\n        <!-- Stage -->\n        <div class=\"col-md-3\">\n            <div class=\"icon-box-2 with-line\">\n                <i class=\"im im-icon-Add-User\"></i>\n                <h3>Invite your Tenant/Landlord</h3>\n                <p>Invite your Landlord/Tenant and tag them to the property added</p>\n            </div>\n        </div>\n\n        <!-- Stage -->\n        <div class=\"col-md-3\">\n            <div class=\"icon-box-2 with-line\">\n                <i class=\"im im-icon-Upload-toCloud\"></i>\n                <h3>Upload your Documents</h3>\n                <p>Tenants need to upload their KYC documents, which will be verified</p>\n            </div>\n        </div>\n\n        <!-- Stage -->\n        <div class=\"col-md-3\">\n            <div class=\"icon-box-2\">\n                <i class=\"im im-icon-Happy\"></i>\n                <h3>Manage your Rentals</h3>\n                <p>Start managing your monthly Rentals, Rental Due Dates and loads more</p>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<!-- how it works end -->\n\n<hr>\n\n<section class=\"fullwidth margin-top-65 padding-top-75 padding-bottom-70\" data-background-color=\"#f8f8f8\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <h3 class=\"headline centered margin-top-75\">\n                    For HomeOwners/Property Managers\n                    <span>Access\n                        <i>the most desirable</i> Benefits</span>\n                </h3>\n            </div>\n\n            <div class=\"col-md-12\">\n                <!-- You can now use your library component in app.component.html -->\n                <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"ownerSlideConfig\" (afterChange)=\"afterChange($event)\">\n                    <div ngxSlickItem *ngFor=\"let item of ownerItems\" class=\"carousel-item\">\n                        <div class=\"listing-item\">\n                            <img src={{item.imgSrc}} alt=\"\" width=\"100%\">\n                            <div class=\"listing-item-content\">\n                                <h3>{{item.text}}</h3>\n                                <span></span>\n                            </div>\n                        </div>\n                    </div>\n                </ngx-slick>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <h3 class=\"headline centered margin-top-75\">\n                    For Tenants\n                    <span>Access\n                        <i>the most desirable</i> Benefits</span>\n                </h3>\n            </div>\n\n            <div class=\"col-md-12\">\n                <!-- You can now use your library component in app.component.html -->\n                <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"tenantSlideConfig\" (afterChange)=\"afterChange($event)\">\n                    <div ngxSlickItem *ngFor=\"let item of tenantItems\" class=\"carousel-item\">\n                        <div class=\"listing-item\">\n                            <img src={{item.imgSrc}} alt=\"\" width=\"100%\">\n                            <div class=\"listing-item-content\">\n                                <h3>{{item.text}}</h3>\n                                <span></span>\n                            </div>\n                        </div>\n                    </div>\n                </ngx-slick>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- <section class=\"fullwidth margin-top-65 padding-top-75 padding-bottom-70\" data-background-color=\"#f8f8f8\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <h3 class=\"headline centered margin-bottom-45\">\n                    Popular Stays\n                    <span>Plug-in at <i>the most desirable stays</i> in Chennai</span>\n\n                </h3>\n            </div>\n\n            <div class=\"col-md-12\">\n                <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\" (afterChange)=\"afterChange($event)\">\n                    <div ngxSlickItem *ngFor=\"let item of items\" class=\"carousel-item\">\n                        <div class=\"listing-item\">\n                            <a [routerLink]=\"['/propdetail', item.id]\">\n                                <img src=\"http://studphotos.s3.amazonaws.com/{{item.owner_id}}_{{item.id}}.jpg\" alt=\"\" width=\"100%\">\n                            </a>\n                            <div class=\"listing-badge now-open\">Now Available</div>\n                            <div class=\"listing-item-content\">\n                                <h3>2BHK</h3>\n                                <span>Andrews Dr, Pleasanton, 94588</span>\n                            </div>\n                        </div>\n                    </div>\n                </ngx-slick>\n            </div>\n            <div class=\"col-md-12 centered margin-top-40\" style=\"text-align:center;\">\n                <a [routerLink]=\"['/properties']\" class=\"btn btn-rose btn-round\"><strong>See All</strong></a>\n            </div>\n        </div>\n    </div>\n</section> -->\n\n\n<div class=\"row margin-top-40\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../angular/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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



var HomeComponent = (function () {
    function HomeComponent(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.rClicks = 0;
        this.rShow = true;
        this.showReg = 0;
        this.mainSlideConfig = {
            fade: true,
            arrows: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }, {
                    breakpoint: 300,
                    settings: "unslick" // destroys slick
                }]
        };
        this.ownerSlideConfig = {
            "slidesToShow": 3,
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
        this.tenantSlideConfig = {
            "slidesToShow": 3,
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
        this.slideConfig = {
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
        this.currentUser = localStorage.getItem("name");
        if (this.currentUser !== null && this.currentUser != 'null') {
            this.showReg = 1;
        }
        else {
            this.showReg = 0;
        }
        console.log(this.showReg);
        this.http.get('/api/property/')
            .toPromise()
            .then(function (result) {
            _this.items = result.json().data.result;
        });
        this.ownerItems = [{
                imgSrc: "http://studphotos.s3.amazonaws.com/images/properties.jpg",
                text: "Collect Rent Online"
            }, {
                imgSrc: "http://studphotos.s3.amazonaws.com/images/agreement.jpg",
                text: "Property Management"
            }, {
                imgSrc: "http://studphotos.s3.amazonaws.com/images/rental.jpg",
                text: "Verified Tenants"
            }];
        this.tenantItems = [{
                imgSrc: "http://studphotos.s3.amazonaws.com/images/properties.jpg",
                text: "Manage Monthly Rentals"
            }, {
                imgSrc: "http://studphotos.s3.amazonaws.com/images/agreement.jpg",
                text: "Upload once Use Forever"
            }, {
                imgSrc: "http://studphotos.s3.amazonaws.com/images/rental.jpg",
                text: "Enable Transparency"
            }];
    }
    HomeComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    HomeComponent.prototype.ngOnInit = function () {
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
    HomeComponent.prototype.onLeft = function () {
        this.rClicks = this.rClicks - 2;
        if (this.rClicks < this.items.length) {
            this.rShow = true;
        }
    };
    HomeComponent.prototype.onRight = function () {
        this.rClicks = this.rClicks + 2;
        if (this.rClicks >= this.items.length) {
            this.rShow = false;
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        $('[rel="tooltip"]').tooltip();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'home',
            template: __webpack_require__("../../../../../angular/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../angular/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../angular/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_routing__ = __webpack_require__("../../../../../angular/app/home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_slick__ = __webpack_require__("../../../../ngx-slick/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__home_routing__["a" /* HomeRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_slick__["a" /* SlickModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../angular/app/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../angular/app/home/home.component.ts");

var HomeRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */]
            }]
    }
];
//# sourceMappingURL=home.routing.js.map

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map