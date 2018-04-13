webpackJsonp(["details.module"],{

/***/ "../../../../../angular/app/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Landing-cover-d{\n    background-color: white;\n    background-image: url('http://studphotos.s3.amazonaws.com/img/slider-bg-01.jpg');\n    background-size: cover;\n    width: 100%;\n    height: 700px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row sticky-wrapper\">\n        <div class=\"col-lg-8 col-md-8 padding-right-30\">\n\n            <!-- Titlebar -->\n            <div id=\"titlebar\" class=\"listing-titlebar\">\n                <div class=\"listing-titlebar-title\">\n                    <h2>Burger House <span class=\"listing-tag\">Eat & Drink</span></h2>\n                    <span>\n                                <a href=\"#listing-location\" class=\"listing-address\">\n                                    <i class=\"fa fa-map-marker\"></i>\n                                    2726 Shinn Street, New York\n                                </a>\n                            </span>\n                    <div class=\"star-rating\" data-rating=\"5\">\n                        <div class=\"rating-counter\"><a href=\"#listing-reviews\">(31 reviews)</a></div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Listing Nav -->\n            <div id=\"listing-nav\" class=\"listing-nav-container\">\n                <ul class=\"listing-nav\">\n                    <li><a href=\"#listing-overview\" class=\"active\">Overview</a></li>\n                    <li><a href=\"#listing-pricing-list\">Pricing</a></li>\n                    <li><a href=\"#listing-location\">Location</a></li>\n                    <li><a href=\"#listing-reviews\">Reviews</a></li>\n                    <li><a href=\"#add-review\">Add Review</a></li>\n                </ul>\n            </div>\n\n            <!-- Overview -->\n            <div id=\"listing-overview\" class=\"listing-section\">\n\n                <!-- Description -->\n\n                <p>\n                    Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in\n                    mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus\n                    tellus, ut tristique elit risus at metus.\n                </p>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec\n                    a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam\n                    erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat.\n                    In fermentum facilisis massa, a consequat purus viverra.\n                </p>\n\n                <!-- Amenities -->\n                <h3 class=\"listing-desc-headline\">Amenities</h3>\n                <ul class=\"listing-features checkboxes margin-top-0\">\n                    <li>Elevator in building</li>\n                    <li>Friendly workspace</li>\n                    <li>Instant Book</li>\n                    <li>Wireless Internet</li>\n                    <li>Free parking on premises</li>\n                    <li>Free parking on street</li>\n                </ul>\n            </div>\n\n\n            <!-- Food Menu -->\n            <div id=\"listing-pricing-list\" class=\"listing-section\">\n                <h3 class=\"listing-desc-headline margin-top-70 margin-bottom-30\">Pricing</h3>\n\n                <div class=\"show-more\">\n                    <div class=\"pricing-list-container\">\n\n                        <!-- Food List -->\n                        <h4>Burgers</h4>\n                        <ul>\n                            <li>\n                                <h5>Classic Burger</h5>\n                                <p>Beef, salad, mayonnaise, spicey relish, cheese</p>\n                                <span>$6</span>\n                            </li>\n                            <li>\n                                <h5>Cheddar Burger</h5>\n                                <p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>\n                                <span>$6</span>\n                            </li>\n                            <li>\n                                <h5>Veggie Burger</h5>\n                                <p>Panko crumbed and fried, grilled peppers and mushroom</p>\n                                <span>$6</span>\n                            </li>\n                            <li>\n                                <h5>Chicken Burger</h5>\n                                <p>Cheese, chicken fillet, avocado, bacon, tomatoes, basil</p>\n                                <span>$6</span>\n                            </li>\n                        </ul>\n\n                        <!-- Food List -->\n                        <h4>Drinks</h4>\n                        <ul>\n                            <li>\n                                <h5>Frozen Shake</h5>\n                                <span>$4</span>\n                            </li>\n                            <li>\n                                <h5>Orange Juice</h5>\n                                <span>$4</span>\n                            </li>\n                            <li>\n                                <h5>Beer</h5>\n                                <span>$4</span>\n                            </li>\n                            <li>\n                                <h5>Water</h5>\n                                <span>Free</span>\n                            </li>\n                        </ul>\n\n                    </div>\n                </div>\n                <a href=\"#\" class=\"show-more-button\" data-more-title=\"Show More\" data-less-title=\"Show Less\"><i class=\"fa fa-angle-down\"></i></a>\n            </div>\n            <!-- Food Menu / End -->\n\n\n            <!-- Location -->\n            <div id=\"listing-location\" class=\"listing-section\">\n                <h3 class=\"listing-desc-headline margin-top-60 margin-bottom-30\">Location</h3>\n\n                <div id=\"singleListingMap-container\">\n                    <div id=\"singleListingMap\" data-latitude=\"40.70437865245596\" data-longitude=\"-73.98674011230469\" data-map-icon=\"im im-icon-Hamburger\"></div>\n                    <a href=\"#\" id=\"streetView\">Street View</a>\n                </div>\n            </div>\n\n            <!-- Reviews -->\n            <div id=\"listing-reviews\" class=\"listing-section\">\n                <h3 class=\"listing-desc-headline margin-top-75 margin-bottom-20\">Reviews <span>(12)</span></h3>\n\n                <div class=\"clearfix\"></div>\n\n                <!-- Reviews -->\n                <section class=\"comments listing-reviews\">\n\n                    <ul>\n                        <li>\n                            <div class=\"avatar\"><img src=\"http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70\" alt=\"\"\n                                /></div>\n                            <div class=\"comment-content\">\n                                <div class=\"arrow-comment\"></div>\n                                <div class=\"comment-by\">Kathy Brown<span class=\"date\">June 2017</span>\n                                    <div class=\"star-rating\" data-rating=\"5\"></div>\n                                </div>\n                                <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem,\n                                    eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>\n\n                                <div class=\"review-images mfp-gallery-container\">\n                                    <a href=\"images/review-image-01.jpg\" class=\"mfp-gallery\"><img src=\"images/review-image-01.jpg\" alt=\"\"></a>\n                                </div>\n                                <a href=\"#\" class=\"rate-review\"><i class=\"sl sl-icon-like\"></i> Helpful Review <span>12</span></a>\n                            </div>\n                        </li>\n\n                        <li>\n                            <div class=\"avatar\"><img src=\"http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70\" alt=\"\"\n                                /> </div>\n                            <div class=\"comment-content\">\n                                <div class=\"arrow-comment\"></div>\n                                <div class=\"comment-by\">John Doe<span class=\"date\">May 2017</span>\n                                    <div class=\"star-rating\" data-rating=\"4\"></div>\n                                </div>\n                                <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper\n                                    vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>\n                                <a href=\"#\" class=\"rate-review\"><i class=\"sl sl-icon-like\"></i> Helpful Review <span>2</span></a>\n                            </div>\n                        </li>\n\n                        <li>\n                            <div class=\"avatar\"><img src=\"http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70\" alt=\"\"\n                                /></div>\n                            <div class=\"comment-content\">\n                                <div class=\"arrow-comment\"></div>\n                                <div class=\"comment-by\">Kathy Brown<span class=\"date\">June 2017</span>\n                                    <div class=\"star-rating\" data-rating=\"5\"></div>\n                                </div>\n                                <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem,\n                                    eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>\n\n                                <div class=\"review-images mfp-gallery-container\">\n                                    <a href=\"images/review-image-02.jpg\" class=\"mfp-gallery\"><img src=\"images/review-image-02.jpg\" alt=\"\"></a>\n                                    <a href=\"images/review-image-03.jpg\" class=\"mfp-gallery\"><img src=\"images/review-image-03.jpg\" alt=\"\"></a>\n                                </div>\n                                <a href=\"#\" class=\"rate-review\"><i class=\"sl sl-icon-like\"></i> Helpful Review <span>4</span></a>\n                            </div>\n                        </li>\n\n                        <li>\n                            <div class=\"avatar\"><img src=\"http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70\" alt=\"\"\n                                /> </div>\n                            <div class=\"comment-content\">\n                                <div class=\"arrow-comment\"></div>\n                                <div class=\"comment-by\">John Doe<span class=\"date\">May 2017</span>\n                                    <div class=\"star-rating\" data-rating=\"5\"></div>\n                                </div>\n                                <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper\n                                    vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>\n                                <a href=\"#\" class=\"rate-review\"><i class=\"sl sl-icon-like\"></i> Helpful Review</a>\n                            </div>\n\n                        </li>\n                    </ul>\n                </section>\n\n                <!-- Pagination -->\n                <div class=\"clearfix\"></div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <!-- Pagination -->\n                        <div class=\"pagination-container margin-top-30\">\n                            <nav class=\"pagination\">\n                                <ul>\n                                    <li><a href=\"#\" class=\"current-page\">1</a></li>\n                                    <li><a href=\"#\">2</a></li>\n                                    <li><a href=\"#\"><i class=\"sl sl-icon-arrow-right\"></i></a></li>\n                                </ul>\n                            </nav>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n                <!-- Pagination / End -->\n            </div>\n\n\n            <!-- Add Review Box -->\n            <div id=\"add-review\" class=\"add-review-box\">\n\n                <!-- Add Review -->\n                <h3 class=\"listing-desc-headline margin-bottom-20\">Add Review</h3>\n\n                <span class=\"leave-rating-title\">Your rating for this listing</span>\n\n                <!-- Rating / Upload Button -->\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <!-- Leave Rating -->\n                        <div class=\"clearfix\"></div>\n                        <div class=\"leave-rating margin-bottom-30\">\n                            <input type=\"radio\" name=\"rating\" id=\"rating-1\" value=\"1\" />\n                            <label for=\"rating-1\" class=\"fa fa-star\"></label>\n                            <input type=\"radio\" name=\"rating\" id=\"rating-2\" value=\"2\" />\n                            <label for=\"rating-2\" class=\"fa fa-star\"></label>\n                            <input type=\"radio\" name=\"rating\" id=\"rating-3\" value=\"3\" />\n                            <label for=\"rating-3\" class=\"fa fa-star\"></label>\n                            <input type=\"radio\" name=\"rating\" id=\"rating-4\" value=\"4\" />\n                            <label for=\"rating-4\" class=\"fa fa-star\"></label>\n                            <input type=\"radio\" name=\"rating\" id=\"rating-5\" value=\"5\" />\n                            <label for=\"rating-5\" class=\"fa fa-star\"></label>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    </div>\n\n                    <div class=\"col-md-6\">\n                        <!-- Uplaod Photos -->\n                        <div class=\"add-review-photos margin-bottom-30\">\n                            <div class=\"photoUpload\">\n                                <span><i class=\"sl sl-icon-arrow-up-circle\"></i> Upload Photos</span>\n                                <input type=\"file\" class=\"upload\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Review Comment -->\n                <form id=\"add-comment\" class=\"add-comment\">\n                    <fieldset>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name:</label>\n                                <input type=\"text\" value=\"\" />\n                            </div>\n\n                            <div class=\"col-md-6\">\n                                <label>Email:</label>\n                                <input type=\"text\" value=\"\" />\n                            </div>\n                        </div>\n\n                        <div>\n                            <label>Review:</label>\n                            <textarea cols=\"40\" rows=\"3\"></textarea>\n                        </div>\n\n                    </fieldset>\n\n                    <button class=\"button\">Submit Review</button>\n                    <div class=\"clearfix\"></div>\n                </form>\n\n            </div>\n            <!-- Add Review Box / End -->\n\n\n        </div>\n\n\n        <!-- Sidebar\n                ================================================== -->\n        <div class=\"col-lg-4 col-md-4 margin-top-75 sticky\">\n\n            <!-- Contact -->\n            <div class=\"boxed-widget\">\n                <h3><i class=\"sl sl-icon-pin\"></i> Contact</h3>\n                <ul class=\"listing-details-sidebar\">\n                    <li><i class=\"sl sl-icon-phone\"></i> (123) 123-456</li>\n                    <li><i class=\"sl sl-icon-globe\"></i> <a href=\"#\">http://example.com</a></li>\n                    <li><i class=\"fa fa-envelope-o\"></i> <a href=\"#\">info@example.com</a></li>\n                </ul>\n\n                <ul class=\"listing-details-sidebar social-profiles\">\n                    <li><a href=\"#\" class=\"facebook-profile\"><i class=\"fa fa-facebook-square\"></i> Facebook</a></li>\n                    <li><a href=\"#\" class=\"twitter-profile\"><i class=\"fa fa-twitter\"></i> Twitter</a></li>\n                    <!-- <li><a href=\"#\" class=\"gplus-profile\"><i class=\"fa fa-google-plus\"></i> Google Plus</a></li> -->\n                </ul>\n\n                <!-- Reply to review popup -->\n                <div id=\"small-dialog\" class=\"zoom-anim-dialog mfp-hide\">\n                    <div class=\"small-dialog-header\">\n                        <h3>Send Message</h3>\n                    </div>\n                    <div class=\"message-reply margin-top-0\">\n                        <textarea cols=\"40\" rows=\"3\" placeholder=\"Your message to Burger House\"></textarea>\n                        <button class=\"button\">Send Message</button>\n                    </div>\n                </div>\n\n                <a href=\"#small-dialog\" class=\"send-message-to-owner button popup-with-zoom-anim\"><i class=\"sl sl-icon-envelope-open\"></i> Send Message</a>\n            </div>\n\n            <!-- Opening Hours -->\n            <div class=\"boxed-widget opening-hours margin-top-35\">\n                <div class=\"listing-badge now-open\">Now Open</div>\n                <h3><i class=\"sl sl-icon-clock\"></i> Opening Hours</h3>\n                <ul>\n                    <li>Monday <span>9 AM - 5 PM</span></li>\n                    <li>Tuesday <span>9 AM - 5 PM</span></li>\n                    <li>Wednesday <span>9 AM - 5 PM</span></li>\n                    <li>Thursday <span>9 AM - 5 PM</span></li>\n                    <li>Friday <span>9 AM - 5 PM</span></li>\n                    <li>Saturday <span>9 AM - 3 PM</span></li>\n                    <li>Sunday <span>Closed</span></li>\n                </ul>\n            </div>\n\n            <!-- Share / Like -->\n            <div class=\"listing-share margin-top-40 margin-bottom-40 no-border\">\n                <button class=\"like-button\"><span class=\"like-icon\"></span> Bookmark this listing</button>\n                <span>159 people bookmarked this place</span>\n\n                <!-- Share Buttons -->\n                <ul class=\"share-buttons margin-top-40 margin-bottom-0\">\n                    <li><a class=\"fb-share\" href=\"#\"><i class=\"fa fa-facebook\"></i> Share</a></li>\n                    <li><a class=\"twitter-share\" href=\"#\"><i class=\"fa fa-twitter\"></i> Tweet</a></li>\n                    <li><a class=\"gplus-share\" href=\"#\"><i class=\"fa fa-google-plus\"></i> Share</a></li>\n                    <!-- <li><a class=\"pinterest-share\" href=\"#\"><i class=\"fa fa-pinterest-p\"></i> Pin</a></li> -->\n                </ul>\n                <div class=\"clearfix\"></div>\n            </div>\n\n        </div>\n        <!-- Sidebar / End -->\n\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"otpModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"otpModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"otpModalLabel\">Quick Login</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n            </div>\n            <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n                <div class=\"modal-body\">\n                    <div class=\"form-group\">\n                        <label for=\"otpname\" class=\"form-control-label\">Mobile Number</label>\n                        <input type=\"text\" id=\"mobile\" name=\"mobile\" class=\"form-control\" placeholder=\"Enter mobile number\" [(ngModel)]=\"mobileNo\"\n                            #mobile=\"ngModel\" pattern=\"[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]\" minlength=\"10\" maxlength=\"10\"\n                            required>\n                        <small [hidden]=\"mobile.valid || (mobile.pristine && !f.submitted)\" class=\"text-danger\">\n                                    Mobile number is invalid\n                            </small>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"validMobile\">\n                        <label for=\"otpname\" class=\"form-control-label\">OTP</label>\n                        <input type=\"text\" class=\"form-control\" id=\"otpname\" name=\"otpname\" placeholder=\"Enter the OTP sent to your mobile\" [(ngModel)]=\"otp\"\n                            #otpname=\"ngModel\" required>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"validMobile\">\n                        <label for=\"otpname\" class=\"form-control-label\">Password</label>\n                        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Set password\" [(ngModel)]=\"password\"\n                            #pwd=\"ngModel\" required>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary\">Continue</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../angular/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
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



var DetailsComponent = (function () {
    function DetailsComponent(actrouter, http, router) {
        this.actrouter = actrouter;
        this.http = http;
        this.router = router;
        this.validMobile = false;
        this.showButton = false;
        this.items = [1];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.options.autofill = true;
        $.material.init();
        this.detail = {
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
        };
        this.sub = this.actrouter.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                _this.http.get('/api/propDetails/' + params['id'])
                    .toPromise()
                    .then(function (result) {
                    var prop = result.json().data.results;
                    _this.detail.title = prop.title;
                    _this.detail.address = prop.address;
                    _this.detail.city = prop.city;
                    _this.detail.country = prop.country;
                    _this.detail.owner_id = prop.owner_id;
                    _this.detail.id = prop.id;
                    _this.detail.details = prop.details;
                });
            }
        });
        this.currUser = localStorage.getItem('currentUser');
        if (this.currUser === "null") {
            this.showButton = true;
        }
    };
    DetailsComponent.prototype.onBook = function () {
        if (this.currUser === "null") {
            $('#otpModal').modal({
                backdrop: 'static',
                keyboard: false
            });
        }
        else {
            // this.router.
        }
    };
    DetailsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var mobile = form.value.mobile;
        var otp = form.value.otpname;
        var pwd = form.value.password;
        var data = {
            mobile: form.value.mobile,
            password: form.value.password,
            type: 0,
            otp: form.value.otpname
        };
        if (otp != null && pwd != null) {
            this.http.post('/api/auth/register', data)
                .toPromise()
                .then(function (response) {
                // login successful if there's a jwt token in the response
                var token = response.json() && response.json().data.token;
                var userType = response.json() && response.json().data.user.type;
                var userId = response.json() && response.json().data.user.id;
                if (token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ 'userId': userId, token: token }));
                    localStorage.setItem('currentUserType', userType);
                    localStorage.setItem('userId', userId);
                    _this.router.navigate(['/createsc', _this.detail.id, _this.detail.owner_id]);
                    $('#otpModal').modal('hide').data('bs.modal', null);
                }
            });
        }
        else {
            this.validMobile = true;
            this.http.post('/api/quickReg', data)
                .toPromise()
                .then(function (response) {
                console.log(response);
            });
        }
    };
    DetailsComponent.prototype.ngAfterViewInit = function () {
        $('[rel="tooltip"]').tooltip();
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'propdetails',
            template: __webpack_require__("../../../../../angular/app/details/details.component.html"),
            styles: [__webpack_require__("../../../../../angular/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], DetailsComponent);
    return DetailsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ "../../../../../angular/app/details/details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModule", function() { return DetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_component__ = __webpack_require__("../../../../../angular/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_routing__ = __webpack_require__("../../../../../angular/app/details/details.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_carouselamos__ = __webpack_require__("../../../../ng2-carouselamos/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DetailsModule = (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__details_routing__["a" /* DetailsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_carouselamos__["a" /* Ng2CarouselamosModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__details_component__["a" /* DetailsComponent */]]
        })
    ], DetailsModule);
    return DetailsModule;
}());

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ "../../../../../angular/app/details/details.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_component__ = __webpack_require__("../../../../../angular/app/details/details.component.ts");

var DetailsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__details_component__["a" /* DetailsComponent */]
            }]
    }
];
//# sourceMappingURL=details.routing.js.map

/***/ })

});
//# sourceMappingURL=details.module.chunk.js.map