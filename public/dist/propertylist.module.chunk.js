webpackJsonp(["propertylist.module"],{

/***/ "../../../../../angular/app/propertylist/propertylist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Landing-cover-d{\n    background-color: white;\n    background-image: url('http://studphotos.s3.amazonaws.com/img/slider-bg-01.jpg');\n    background-size: cover;\n    width: 100%;\n    height: 700px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/propertylist/propertylist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\n\t\t<div class=\"col-lg-9 col-md-8 padding-right-30\">\n\n\t\t\t<!-- Sorting / Layout Switcher -->\n\t\t\t<div class=\"row margin-bottom-25\">\n\n\t\t\t\t<div class=\"col-md-6 col-xs-6\">\n\t\t\t\t\t<!-- Layout Switcher -->\n\t\t\t\t\t<div class=\"layout-switcher\">\n\t\t\t\t\t\t<a href=\"listings-grid-with-sidebar-1.html\" class=\"grid\"><i class=\"fa fa-th\"></i></a>\n\t\t\t\t\t\t<a href=\"#\" class=\"list active\"><i class=\"fa fa-align-justify\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 col-xs-6\">\n\t\t\t\t\t<!-- Sort by -->\n\t\t\t\t\t<div class=\"sort-by\">\n\t\t\t\t\t\t<div class=\"sort-by-select\">\n\t\t\t\t\t\t\t<select data-placeholder=\"Default order\" class=\"chosen-select-no-single\">\n\t\t\t\t\t\t\t\t<option>Default Order</option>\t\n\t\t\t\t\t\t\t\t<option>Highest Rated</option>\n\t\t\t\t\t\t\t\t<option>Most Reviewed</option>\n\t\t\t\t\t\t\t\t<option>Newest Listings</option>\n\t\t\t\t\t\t\t\t<option>Oldest Listings</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Sorting / Layout Switcher / End -->\n\n\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<!-- Listing Item -->\n\t\t\t\t<div class=\"col-lg-12 col-md-12\">\n\t\t\t\t\t<div class=\"listing-item-container list-layout\">\n\t\t\t\t\t\t<a href=\"listings-single-page.html\" class=\"listing-item\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Image -->\n\t\t\t\t\t\t\t<div class=\"listing-item-image\">\n\t\t\t\t\t\t\t\t<img src=\"images/listing-item-01.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t<span class=\"tag\">Eat & Drink</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Content -->\n\t\t\t\t\t\t\t<div class=\"listing-item-content\">\n\t\t\t\t\t\t\t\t<div class=\"listing-badge now-open\">Now Open</div>\n\n\t\t\t\t\t\t\t\t<div class=\"listing-item-inner\">\n\t\t\t\t\t\t\t\t\t<h3>Tom's Restaurant</h3>\n\t\t\t\t\t\t\t\t\t<span>964 School Street, New York</span>\n\t\t\t\t\t\t\t\t\t<div class=\"star-rating\" data-rating=\"3.5\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-counter\">(12 reviews)</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<span class=\"like-icon\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Listing Item / End -->\n\n\t\t\t\t<!-- Listing Item -->\n\t\t\t\t<div class=\"col-lg-12 col-md-12\">\n\t\t\t\t\t<div class=\"listing-item-container list-layout\">\n\t\t\t\t\t\t<a href=\"listings-single-page.html\" class=\"listing-item\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Image -->\n\t\t\t\t\t\t\t<div class=\"listing-item-image\">\n\t\t\t\t\t\t\t\t<img src=\"images/listing-item-02.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t<span class=\"tag\">Events</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Content -->\n\t\t\t\t\t\t\t<div class=\"listing-item-content\">\n\n\t\t\t\t\t\t\t\t<div class=\"listing-item-inner\">\n\t\t\t\t\t\t\t\t<h3>Sticky Band</h3>\n\t\t\t\t\t\t\t\t<span>Bishop Avenue, New York</span>\n\t\t\t\t\t\t\t\t\t<div class=\"star-rating\" data-rating=\"5.0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-counter\">(23 reviews)</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<span class=\"like-icon\"></span>\n\n\t\t\t\t\t\t\t\t<div class=\"listing-item-details\">Friday, August 10</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Listing Item / End -->\n\n\t\t\t\t<!-- Listing Item -->\n\t\t\t\t<div class=\"col-lg-12 col-md-12\">\n\t\t\t\t\t<div class=\"listing-item-container list-layout\">\n\t\t\t\t\t\t<a href=\"listings-single-page.html\" class=\"listing-item\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Image -->\n\t\t\t\t\t\t\t<div class=\"listing-item-image\">\n\t\t\t\t\t\t\t\t<img src=\"images/listing-item-03.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t<span class=\"tag\">Hotels</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Content -->\n\t\t\t\t\t\t\t<div class=\"listing-item-content\">\n\n\t\t\t\t\t\t\t\t<div class=\"listing-item-inner\">\n\t\t\t\t\t\t\t\t<h3>Hotel Govendor</h3>\n\t\t\t\t\t\t\t\t<span>778 Country Street, New York</span>\n\t\t\t\t\t\t\t\t\t<div class=\"star-rating\" data-rating=\"2.0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-counter\">(17 reviews)</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<span class=\"like-icon\"></span>\n\n\t\t\t\t\t\t\t\t<div class=\"listing-item-details\">Starting from $59 per night</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Listing Item / End -->\n\n\t\t\t\t<!-- Listing Item -->\n\t\t\t\t<div class=\"col-lg-12 col-md-12\">\n\t\t\t\t\t<div class=\"listing-item-container list-layout\">\n\t\t\t\t\t\t<a href=\"listings-single-page.html\" class=\"listing-item\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Image -->\n\t\t\t\t\t\t\t<div class=\"listing-item-image\">\n\t\t\t\t\t\t\t\t<img src=\"images/listing-item-04.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t<span class=\"tag\">Eat & Drink</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Content -->\n\t\t\t\t\t\t\t<div class=\"listing-item-content\">\n\t\t\t\t\t\t\t\t<div class=\"listing-badge now-open\">Now Open</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"listing-item-inner\">\n\t\t\t\t\t\t\t\t<h3>Burger House</h3>\n\t\t\t\t\t\t\t\t<span>2726 Shinn Street, New York</span>\n\t\t\t\t\t\t\t\t\t<div class=\"star-rating\" data-rating=\"5.0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-counter\">(31 reviews)</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<span class=\"like-icon\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Listing Item / End -->\n\n\t\t\t\t<!-- Listing Item -->\n\t\t\t\t<div class=\"col-lg-12 col-md-12\">\n\t\t\t\t\t<div class=\"listing-item-container list-layout\">\n\t\t\t\t\t\t<a href=\"listings-single-page.html\" class=\"listing-item\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Image -->\n\t\t\t\t\t\t\t<div class=\"listing-item-image\">\n\t\t\t\t\t\t\t\t<img src=\"images/listing-item-05.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t<span class=\"tag\">Other</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Content -->\n\t\t\t\t\t\t\t<div class=\"listing-item-content\">\n\n\t\t\t\t\t\t\t\t<div class=\"listing-item-inner\">\n\t\t\t\t\t\t\t\t<h3>Airport</h3>\n\t\t\t\t\t\t\t\t<span>1512 Duncan Avenue, New York</span>\n\t\t\t\t\t\t\t\t\t<div class=\"star-rating\" data-rating=\"3.5\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-counter\">(46 reviews)</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<span class=\"like-icon\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Listing Item / End -->\n\n\t\t\t\t<!-- Listing Item -->\n\t\t\t\t<div class=\"col-lg-12 col-md-12\">\n\t\t\t\t\t<div class=\"listing-item-container list-layout\">\n\t\t\t\t\t\t<a href=\"listings-single-page.html\" class=\"listing-item\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Image -->\n\t\t\t\t\t\t\t<div class=\"listing-item-image\">\n\t\t\t\t\t\t\t\t<img src=\"images/listing-item-06.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t<span class=\"tag\">Eat & Drink</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Content -->\n\t\t\t\t\t\t\t<div class=\"listing-item-content\">\n\t\t\t\t\t\t\t\t<div class=\"listing-badge now-closed\">Now Closed</div>\n\n\t\t\t\t\t\t\t\t<div class=\"listing-item-inner\">\n\t\t\t\t\t\t\t\t<h3>Think Coffee</h3>\n\t\t\t\t\t\t\t\t<span>215 Terry Lane, New York</span>\n\t\t\t\t\t\t\t\t\t<div class=\"star-rating\" data-rating=\"5.0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-counter\">(31 reviews)</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<span class=\"like-icon\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Listing Item / End -->\n\n\t\t\t</div>\n\n\t\t\t<!-- Pagination -->\n\t\t\t<div class=\"clearfix\"></div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<!-- Pagination -->\n\t\t\t\t\t<div class=\"pagination-container margin-top-20 margin-bottom-40\">\n\t\t\t\t\t\t<nav class=\"pagination\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"current-page\">1</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">2</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">3</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"sl sl-icon-arrow-right\"></i></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Pagination / End -->\n\n\t\t</div>\n\n\n\t\t<!-- Sidebar\n\t\t================================================== -->\n\t\t<div class=\"col-lg-3 col-md-4\">\n\t\t\t<div class=\"sidebar\">\n\n\t\t\t\t<!-- Widget -->\n\t\t\t\t<div class=\"widget margin-bottom-40\">\n\t\t\t\t\t<h3 class=\"margin-top-0 margin-bottom-30\">Filters</h3>\n\n\t\t\t\t\t<!-- Row -->\n\t\t\t\t\t<div class=\"row with-forms\">\n\t\t\t\t\t\t<!-- Cities -->\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"What are you looking for?\" value=\"\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Row / End -->\n\n\n\t\t\t\t\t<!-- Row -->\n\t\t\t\t\t<div class=\"row with-forms\">\n\t\t\t\t\t\t<!-- Type -->\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<select data-placeholder=\"All Categories\" class=\"chosen-select\" >\n\t\t\t\t\t\t\t\t<option>All Categories</option>\t\n\t\t\t\t\t\t\t\t<option>Shops</option>\n\t\t\t\t\t\t\t\t<option>Hotels</option>\n\t\t\t\t\t\t\t\t<option>Restaurants</option>\n\t\t\t\t\t\t\t\t<option>Fitness</option>\n\t\t\t\t\t\t\t\t<option>Events</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Row / End -->\n\n\n\t\t\t\t\t<!-- Row -->\n\t\t\t\t\t<div class=\"row with-forms\">\n\t\t\t\t\t\t<!-- Cities -->\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t\t<div class=\"input-with-icon location\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Destination, city, address\" value=\"\"/>\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-dot-circle-o\"></i></a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Row / End -->\n\t\t\t\t\t<br>\n\n\t\t\t\t\t<!-- Area Range -->\n\t\t\t\t\t<div class=\"range-slider\">\n\t\t\t\t\t\t<input class=\"distance-radius\" type=\"range\" min=\"1\" max=\"100\" step=\"1\" value=\"50\" data-title=\"Radius around selected destination\">\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<!-- More Search Options -->\n\t\t\t\t\t<a href=\"#\" class=\"more-search-options-trigger margin-bottom-5 margin-top-20\" data-open-title=\"More Filters\" data-close-title=\"More Filters\"></a>\n\n\t\t\t\t\t<div class=\"more-search-options relative\">\n\n\t\t\t\t\t\t<!-- Checkboxes -->\n\t\t\t\t\t\t<div class=\"checkboxes one-in-row margin-bottom-15\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t<input id=\"check-a\" type=\"checkbox\" name=\"check\">\n\t\t\t\t\t\t\t<label for=\"check-a\">Elevator in building</label>\n\n\t\t\t\t\t\t\t<input id=\"check-b\" type=\"checkbox\" name=\"check\">\n\t\t\t\t\t\t\t<label for=\"check-b\">Friendly workspace</label>\n\n\t\t\t\t\t\t\t<input id=\"check-c\" type=\"checkbox\" name=\"check\">\n\t\t\t\t\t\t\t<label for=\"check-c\">Instant Book</label>\n\n\t\t\t\t\t\t\t<input id=\"check-d\" type=\"checkbox\" name=\"check\">\n\t\t\t\t\t\t\t<label for=\"check-d\">Wireless Internet</label>\n\n\t\t\t\t\t\t\t<input id=\"check-e\" type=\"checkbox\" name=\"check\" >\n\t\t\t\t\t\t\t<label for=\"check-e\">Free parking on premises</label>\n\n\t\t\t\t\t\t\t<input id=\"check-f\" type=\"checkbox\" name=\"check\" >\n\t\t\t\t\t\t\t<label for=\"check-f\">Free parking on street</label>\n\n\t\t\t\t\t\t\t<input id=\"check-g\" type=\"checkbox\" name=\"check\">\n\t\t\t\t\t\t\t<label for=\"check-g\">Smoking allowed</label>\t\n\n\t\t\t\t\t\t\t<input id=\"check-h\" type=\"checkbox\" name=\"check\">\n\t\t\t\t\t\t\t<label for=\"check-h\">Events</label>\n\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- Checkboxes / End -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- More Search Options / End -->\n\n\t\t\t\t\t<button class=\"button fullwidth margin-top-25\">Update</button>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Widget / End -->\n\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- Sidebar / End -->\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/propertylist/propertylist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertylistComponent; });
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



var PropertylistComponent = (function () {
    function PropertylistComponent(router, http) {
        this.router = router;
        this.http = http;
        this.items = [1];
    }
    PropertylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.property = [{
                title: '',
                address: '',
                city: '',
                state: '',
                country: '',
                zip: '',
                latitude: '',
                longtitude: '',
                about: '',
                owner_id: '',
                id: '',
                details: ''
            }];
        this.http.get('/api/property')
            .toPromise()
            .then(function (result) {
            _this.property = result.json().data.result;
        });
    };
    PropertylistComponent.prototype.ngAfterViewInit = function () {
        $('[rel="tooltip"]').tooltip();
    };
    PropertylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'propertylist',
            template: __webpack_require__("../../../../../angular/app/propertylist/propertylist.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/propertylist/propertylist.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], PropertylistComponent);
    return PropertylistComponent;
    var _a, _b;
}());

//# sourceMappingURL=propertylist.component.js.map

/***/ }),

/***/ "../../../../../angular/app/propertylist/propertylist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertylistModule", function() { return PropertylistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__propertylist_component__ = __webpack_require__("../../../../../angular/app/propertylist/propertylist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertylist_routing__ = __webpack_require__("../../../../../angular/app/propertylist/propertylist.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_carouselamos__ = __webpack_require__("../../../../ng2-carouselamos/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PropertylistModule = (function () {
    function PropertylistModule() {
    }
    PropertylistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__propertylist_routing__["a" /* PropertylistRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_carouselamos__["a" /* Ng2CarouselamosModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__propertylist_component__["a" /* PropertylistComponent */]]
        })
    ], PropertylistModule);
    return PropertylistModule;
}());

//# sourceMappingURL=propertylist.module.js.map

/***/ }),

/***/ "../../../../../angular/app/propertylist/propertylist.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertylistRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__propertylist_component__ = __webpack_require__("../../../../../angular/app/propertylist/propertylist.component.ts");

var PropertylistRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__propertylist_component__["a" /* PropertylistComponent */]
            }]
    }
];
//# sourceMappingURL=propertylist.routing.js.map

/***/ })

});
//# sourceMappingURL=propertylist.module.chunk.js.map