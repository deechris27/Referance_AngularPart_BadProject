/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(4);

	__webpack_require__(9);

	__webpack_require__(16);

	__webpack_require__(36);

	__webpack_require__(37);

	__webpack_require__(44);

	__webpack_require__(45);

	__webpack_require__(46);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	angular.module('app', ['app.run', 'app.filters', 'app.services', 'app.components', 'app.directives', 'app.routes', 'app.config', 'app.partials', 'app.mainView', 'sasrio.angular-material-sidenav', 'md.data.table', 'app.studentDialogView', 'app.teacherDialogView', 'angularMoment']);

	angular.module('app.run', []);
	angular.module('app.routes', []);
	angular.module('app.filters', []);
	angular.module('app.services', []);
	angular.module('app.config', []);
	angular.module('app.directives', []);
	angular.module('app.components', ['ui.router', 'ngMaterial', 'angular-loading-bar', 'restangular', 'ngStorage', 'satellizer', 'ngMessages', 'chart.js']);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(3);

	angular.module('app.run').run(_routes.RoutesRun);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	RoutesRun.$inject = ["$state", "$transitions"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesRun = RoutesRun;
	function RoutesRun($state, $transitions) {
	    'ngInject';

	    var requiresAuthCriteria = {
	        to: function to($state) {
	            return $state.data && $state.data.auth;
	        }
	    };

	    var redirectToLogin = function redirectToLogin($auth) {
	        'ngInject';

	        if (!$auth.isAuthenticated()) {
	            return $state.target('app.landing', undefined, { location: false });
	        }
	    };
	    redirectToLogin.$inject = ["$auth"];

	    $transitions.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 10 });
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(5);

	var _loading_bar = __webpack_require__(6);

	var _theme = __webpack_require__(7);

	var _satellizer = __webpack_require__(8);

	angular.module('app.config', ['sasrio.angular-material-sidenav', 'ngAnimate', 'ngAria', 'angularMoment']).config(_routes.RoutesConfig).config(_loading_bar.LoadingBarConfig).config(_theme.ThemeConfig).config(_satellizer.SatellizerConfig).config(["$mdIconProvider", function ($mdIconProvider) {
	    $mdIconProvider.defaultFontSet('FontAwesome').fontSet('fa', 'FontAwesome');
	}]).config(['$mdDateLocaleProvider', function ($mdDateLocaleProvider) {
	    $mdDateLocaleProvider.formatDate = function (date) {
	        return date ? moment(date).format('DD-MM-YYYY') : '';
	    };

	    $mdDateLocaleProvider.parseDate = function (dateString) {
	        var m = moment(dateString).format('DD-MM-YYYY', true);
	        return m.isValid() ? m.toDate() : new Date(NaN);
	    };
	}]).config(['$mdThemingProvider', 'ssSideNavSectionsProvider', function ($mdThemingProvider, ssSideNavSectionsProvider) {
	    $mdThemingProvider.theme('default').primaryPalette('green', {
	        'default': '700'
	    });

	    ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);
	    ssSideNavSectionsProvider.initWithSections([{
	        id: 'home',
	        name: 'Home',
	        state: 'app.home',
	        type: 'link',
	        icon: 'fa fa-home fa-lg'
	    }, {
	        id: 'toogle_students',
	        type: 'heading',
	        children: [{
	            name: 'Students',
	            icon: 'fa fa-graduation-cap fa-lg',
	            type: 'toggle',
	            pages: [{
	                id: 'new_student',
	                name: 'Register Student',
	                state: 'app.create_student'
	            }, {
	                id: 'list_student',
	                name: 'List Students',
	                state: 'app.list_student'
	            }]
	        }]
	    }, {
	        id: 'toogle_teachers',
	        type: 'heading',
	        children: [{
	            name: 'Teachers',
	            icon: 'fa fa-users fa-lg',
	            type: 'toggle',
	            pages: [{
	                id: 'new_teacher',
	                name: 'Register Teacher',
	                state: 'app.create_teacher'
	            }, {
	                id: 'list_teacher',
	                name: 'List Teacher',
	                state: 'app.list_teacher'
	            }]
	        }]
	    }, {
	        id: 'toogle_attendance',
	        type: 'heading',
	        children: [{
	            name: 'Attendance',
	            icon: 'fa fa-table fa-lg',
	            type: 'toggle',
	            pages: [{
	                id: 'manual_attendance',
	                name: 'Manual Attendance',
	                state: 'app.create_entry'
	            }, {
	                id: 'list_absentees',
	                name: 'List of Absentees',
	                state: 'app.list_absentees'
	            }, {
	                id: 'list_latecomers',
	                name: 'List of Latecomers',
	                state: 'app.list_latecomers'
	            }]
	        }]
	    }, {
	        id: 'reports',
	        type: 'heading',
	        children: [{
	            name: 'Reports',
	            icon: 'fa fa-bar-chart fa-lg',
	            type: 'toggle',
	            pages: [{
	                id: 'report',
	                name: 'Student Attendance',
	                state: 'app.reports'
	            }, {
	                id: 'report',
	                name: 'Teacher Attendance',
	                state: 'app.reports_teacher'
	            }, {
	                id: 'list_blood',
	                name: 'Blood donors',
	                state: 'app.list_blood'
	            }]
	        }]
	    }, {
	        id: 'smsblast',
	        type: 'heading',
	        children: [{
	            name: 'SMS',
	            icon: 'fa fa-comments fa-lg',
	            type: 'toggle',
	            pages: [{
	                id: 'blast',
	                name: 'Blast',
	                state: 'app.sms_blast'
	            }, {
	                id: 'individual',
	                name: 'Individual',
	                state: 'app.sms_individual'
	            }]
	        }]
	    }]);
	}]);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesConfig = RoutesConfig;
	function RoutesConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';

	    var getView = function getView(viewName) {
	        return './views/app/pages/' + viewName + '/' + viewName + '.page.html';
	    };

	    $urlRouterProvider.otherwise('/');
	    $stateProvider.state('app', {
	        abstract: true,
	        data: {}, //{auth: true} would require JWT auth
	        views: {
	            header: {
	                templateUrl: getView('header')
	            },
	            footer: {
	                templateUrl: getView('footer')
	            },
	            main: {}
	        }
	    }).state('app.landing', {
	        url: '/',
	        views: {
	            'main@': {
	                templateUrl: getView('login')
	            }
	        }
	    }).state('app.home', {
	        url: '/home',
	        data: { auth: true },
	        views: {
	            'main@': {
	                templateUrl: getView('landing')
	            }
	        }
	    }).state('app.register', {
	        url: '/register',
	        views: {
	            'main@': {
	                templateUrl: getView('register')
	            }
	        }
	    }).state('app.forgot_password', {
	        url: '/forgot-password',
	        views: {
	            'main@': {
	                templateUrl: getView('forgot-password')
	            }
	        }
	    }).state('app.reset_password', {
	        url: '/reset-password/:email/:token',
	        views: {
	            'main@': {
	                templateUrl: getView('reset-password')
	            }
	        }
	    }).state('app.create_branch', {
	        url: '/create-branch',
	        views: {
	            'main@': {
	                templateUrl: getView('create_branch')
	            }
	        }
	    }).state('app.list_branch', {
	        url: '/list-branch',
	        views: {
	            'main@': {
	                templateUrl: getView('list_branch')
	            }
	        }
	    }).state('app.create_entry', {
	        url: '/create-entry',
	        views: {
	            'main@': {
	                templateUrl: getView('create_entry')
	            }
	        }
	    }).state('app.list_absentees', {
	        url: '/list-absentees',
	        views: {
	            'main@': {
	                templateUrl: getView('list_absentees')
	            }
	        }
	    }).state('app.create_student', {
	        url: '/create-student',
	        views: {
	            'main@': {
	                templateUrl: getView('create_student')
	            }
	        }
	    }).state('app.list_student', {
	        url: '/list-student',
	        views: {
	            'main@': {
	                templateUrl: getView('list_student')
	            }
	        }
	    }).state('app.create_teacher', {
	        url: '/create-teacher',
	        views: {
	            'main@': {
	                templateUrl: getView('create_teacher')
	            }
	        }
	    }).state('app.list_teacher', {
	        url: '/list-teacher',
	        views: {
	            'main@': {
	                templateUrl: getView('list_teacher')
	            }
	        }
	    }).state('app.list_blood', {
	        url: '/list-blood',
	        views: {
	            'main@': {
	                templateUrl: getView('list_blood')
	            }
	        }
	    }).state('app.billing', {
	        url: '/create-bill',
	        views: {
	            'main@': {
	                templateUrl: getView('create_bill')
	            }
	        }
	    }).state('app.create_print', {
	        url: '/create-print/:id',
	        views: {
	            'main@': {
	                templateUrl: getView('create_print')
	            }
	        }
	    }).state('app.reports', {
	        url: '/reports',
	        views: {
	            'main@': {
	                templateUrl: getView('reports')
	            }
	        }
	    }).state('app.reports_teacher', {
	        url: '/reports-teacher',
	        views: {
	            'main@': {
	                templateUrl: getView('reports_teacher')
	            }
	        }
	    }).state('app.commission', {
	        url: '/commission',
	        views: {
	            'main@': {
	                templateUrl: getView('commission')
	            }
	        }
	    }).state('app.list_latecomers', {
	        url: '/list-latecomers',
	        views: {
	            'main@': {
	                templateUrl: getView('list_latecomers')
	            }
	        }
	    }).state('app.test_results', {
	        url: '/tresults',
	        views: {
	            'main@': {
	                templateUrl: getView('Test_results')
	            }
	        }
	    }).state('app.test_results_print', {
	        url: '/tpresults/:id',
	        views: {
	            'main@': {
	                templateUrl: getView('results_print')
	            }
	        }
	    }).state('app.sms_blast', {
	        url: '/create-sms',
	        views: {
	            'main@': {
	                templateUrl: getView('create_sms')
	            }
	        }
	    }).state('app.sms_individual', {
	        url: '/create-individualsms',
	        views: {
	            'main@': {
	                templateUrl: getView('create_isms')
	            }
	        }
	    }).state('app.list_tc', {
	        url: '/list-tc',
	        views: {
	            'main@': {
	                templateUrl: getView('list_tc')
	            }
	        }
	    });
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	LoadingBarConfig.$inject = ["cfpLoadingBarProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LoadingBarConfig = LoadingBarConfig;
	function LoadingBarConfig(cfpLoadingBarProvider) {
		'ngInject';

		cfpLoadingBarProvider.includeSpinner = false;
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	ThemeConfig.$inject = ["$mdThemingProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ThemeConfig = ThemeConfig;
	function ThemeConfig($mdThemingProvider) {
	    'ngInject';
	    /* For more info, visit https://material.angularjs.org/#/Theming/01_introduction */

	    $mdThemingProvider.theme('default').primaryPalette('blue', {
	        default: '600'
	    }).accentPalette('green').warnPalette('red');

	    $mdThemingProvider.theme('warn');
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	SatellizerConfig.$inject = ["$authProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SatellizerConfig = SatellizerConfig;
	function SatellizerConfig($authProvider) {
		'ngInject';

		$authProvider.httpInterceptor = function () {
			return true;
		};

		$authProvider.loginUrl = '/api/auth/login';
		$authProvider.signupUrl = '/api/auth/register';
		$authProvider.tokenRoot = 'data'; //compensates success response macro
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _capitalize = __webpack_require__(10);

	var _human_readable = __webpack_require__(11);

	var _truncate_characters = __webpack_require__(12);

	var _truncate_words = __webpack_require__(13);

	var _trust_html = __webpack_require__(14);

	var _ucfirst = __webpack_require__(15);

	angular.module('app.filters').filter('capitalize', _capitalize.CapitalizeFilter).filter('humanReadable', _human_readable.HumanReadableFilter).filter('truncateCharacters', _truncate_characters.TruncatCharactersFilter).filter('truncateWords', _truncate_words.TruncateWordsFilter).filter('trustHtml', _trust_html.TrustHtmlFilter).filter('ucfirst', _ucfirst.UcFirstFilter);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CapitalizeFilter = CapitalizeFilter;
	function CapitalizeFilter() {
		return function (input) {
			return input ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}) : '';
		};
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HumanReadableFilter = HumanReadableFilter;
	function HumanReadableFilter() {
		return function humanize(str) {
			if (!str) {
				return '';
			}
			var frags = str.split('_');
			for (var i = 0; i < frags.length; i++) {
				frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
			}
			return frags.join(' ');
		};
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncatCharactersFilter = TruncatCharactersFilter;
	function TruncatCharactersFilter() {
		return function (input, chars, breakOnWord) {
			if (isNaN(chars)) {
				return input;
			}
			if (chars <= 0) {
				return '';
			}
			if (input && input.length > chars) {
				input = input.substring(0, chars);

				if (!breakOnWord) {
					var lastspace = input.lastIndexOf(' ');
					// Get last space
					if (lastspace !== -1) {
						input = input.substr(0, lastspace);
					}
				} else {
					while (input.charAt(input.length - 1) === ' ') {
						input = input.substr(0, input.length - 1);
					}
				}
				return input + '...';
			}
			return input;
		};
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncateWordsFilter = TruncateWordsFilter;
	function TruncateWordsFilter() {
		return function (input, words) {
			if (isNaN(words)) {
				return input;
			}
			if (words <= 0) {
				return '';
			}
			if (input) {
				var inputWords = input.split(/\s+/);
				if (inputWords.length > words) {
					input = inputWords.slice(0, words).join(' ') + '...';
				}
			}
			return input;
		};
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TrustHtmlFilter = TrustHtmlFilter;
	function TrustHtmlFilter($sce) {
		return function (html) {
			return $sce.trustAsHtml(html);
		};
	}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UcFirstFilter = UcFirstFilter;
	function UcFirstFilter() {
		return function (input) {
			if (!input) {
				return null;
			}
			return input.substring(0, 1).toUpperCase() + input.substring(1);
		};
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _create_sms_form = __webpack_require__(17);

	var _create_isms_form = __webpack_require__(18);

	var _list_latecomers_form = __webpack_require__(19);

	var _results_print_form = __webpack_require__(20);

	var _reports_form = __webpack_require__(21);

	var _reports_teacher_form = __webpack_require__(22);

	var _landing_page = __webpack_require__(23);

	var _create_print_form = __webpack_require__(24);

	var _list_blood_form = __webpack_require__(25);

	var _create_teacher_form = __webpack_require__(26);

	var _create_student_form = __webpack_require__(27);

	var _list_student_form = __webpack_require__(28);

	var _list_teacher_form = __webpack_require__(29);

	var _list_absentees_form = __webpack_require__(30);

	var _create_entry_form = __webpack_require__(31);

	var _resetPassword = __webpack_require__(32);

	var _forgotPassword = __webpack_require__(33);

	var _loginForm = __webpack_require__(34);

	var _registerForm = __webpack_require__(35);

	angular.module('app.components').component('createSmsForm', _create_sms_form.CreateSmsFormComponent).component('createIsmsForm', _create_isms_form.CreateIsmsFormComponent).component('listLatecomersForm', _list_latecomers_form.ListLateComersFormComponent).component('resultsPrintForm', _results_print_form.ResultsPrintFormComponent).component('reportsForm', _reports_form.ReportsFormComponent).component('reportsTeacherForm', _reports_teacher_form.ReportsTeacherFormComponent).component('landingPage', _landing_page.LandingPageComponent).component('createPrintForm', _create_print_form.CreatePrintFormComponent).component('listBloodForm', _list_blood_form.ListBloodFormComponent).component('createTeacherForm', _create_teacher_form.CreateTeacherFormComponent).component('createStudentForm', _create_student_form.CreateStudentFormComponent).component('listStudentForm', _list_student_form.ListStudentFormComponent).component('listTeacherForm', _list_teacher_form.ListTeacherFormComponent).component('listAbsenteesForm', _list_absentees_form.ListAbsenteesFormComponent).component('createEntryForm', _create_entry_form.CreateEntryFormComponent).component('resetPassword', _resetPassword.ResetPasswordComponent).component('forgotPassword', _forgotPassword.ForgotPasswordComponent).component('loginForm', _loginForm.LoginFormComponent).component('registerForm', _registerForm.RegisterFormComponent);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateSmsFormController = function () {
	    CreateSmsFormController.$inject = ["API", "ToastService", "SessionService", "$scope", "StaticDataService"];
	    function CreateSmsFormController(API, ToastService, SessionService, $scope, StaticDataService) {
	        'ngInject';

	        var _this = this;

	        _classCallCheck(this, CreateSmsFormController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.SessionService = SessionService;
	        this.$scope = $scope;
	        //this.$scope.classes = StaticDataService.klassWithSection();

	        this.API.all('classes').getList('classes').then(function (response) {
	            _this.$scope.classes = response.plain();
	            console.log(_this.classes);
	        });
	    }

	    _createClass(CreateSmsFormController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            var data = {
	                to: this.class,
	                message: this.message,
	                createdBy: this.SessionService.get('userId'),
	                updatedBy: this.SessionService.get('userId')
	            };

	            this.API.all('smsblasts').post(data).then(function (response) {
	                _this2.$mdDialog.show(_this2.$mdDialog.alert().parent(angular.element(document.querySelector('#popupContainer'))).clickOutsideToClose(true).title('Success').textContent('SMS sent successfully').ariaLabel('Error').ok('Got it!'));

	                _this2.class = '';
	                _this2.message = '';
	            });
	        }
	    }]);

	    return CreateSmsFormController;
	}();

	var CreateSmsFormComponent = exports.CreateSmsFormComponent = {
	    templateUrl: './views/app/components/create_sms_form/create_sms_form.component.html',
	    controller: CreateSmsFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateIsmsFormController = function () {
	    CreateIsmsFormController.$inject = ["API", "ToastService", "SessionService", "$scope", "StaticDataService"];
	    function CreateIsmsFormController(API, ToastService, SessionService, $scope, StaticDataService) {
	        'ngInject';

	        _classCallCheck(this, CreateIsmsFormController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.SessionService = SessionService;
	        this.$scope = $scope;
	        this.$scope.classes = StaticDataService.klassWithSection();
	    }

	    _createClass(CreateIsmsFormController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            var data = {
	                to: this.mobile,
	                message: this.message,
	                createdBy: this.SessionService.get('userId'),
	                updatedBy: this.SessionService.get('userId')
	            };

	            this.API.all('isms').post(data).then(function (response) {
	                _this.$mdDialog.show(_this.$mdDialog.alert().parent(angular.element(document.querySelector('#popupContainer'))).clickOutsideToClose(true).title('Success').textContent('SMS sent successfully').ariaLabel('Error').ok('Got it!'));

	                _this.mobile = '';
	                _this.message = '';
	            });
	        }
	    }]);

	    return CreateIsmsFormController;
	}();

	var CreateIsmsFormComponent = exports.CreateIsmsFormComponent = {
	    templateUrl: './views/app/components/create_isms_form/create_isms_form.component.html',
	    controller: CreateIsmsFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListLateComersFormController = function () {
	    ListLateComersFormController.$inject = ["API", "$scope", "DialogService", "$mdEditDialog", "ToastService", "SessionService"];
	    function ListLateComersFormController(API, $scope, DialogService, $mdEditDialog, ToastService, SessionService) {
	        'ngInject';

	        _classCallCheck(this, ListLateComersFormController);

	        this.API = API;
	        this.commissions = [];
	        this.DialogService = DialogService;
	        this.ToastService = ToastService;
	        this.SessionService = SessionService;

	        $scope.selected = [];

	        $scope.query = {
	            order: 'name',
	            limit: 5,
	            page: 1
	        };

	        this.$scope = $scope;

	        this.$mdEditDialog = $mdEditDialog;

	        this.count = null;
	        $scope.getLateComers = function () {
	            API.one('latecomers').get($scope.query).then(function (response) {
	                var res = response.plain();
	                $scope.vm.latecomers = res;
	                $scope.vm.count = res.total;
	            });
	        };
	    }

	    _createClass(ListLateComersFormController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.$scope.getLateComers();
	        }
	    }]);

	    return ListLateComersFormController;
	}();

	var ListLateComersFormComponent = exports.ListLateComersFormComponent = {
	    templateUrl: './views/app/components/list_latecomers_form/list_latecomers_form.component.html',
	    controller: ListLateComersFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ResultsPrintFormController = function () {
	    ResultsPrintFormController.$inject = ["API", "ToastService", "$stateParams", "SessionService", "PrintService"];
	    function ResultsPrintFormController(API, ToastService, $stateParams, SessionService, PrintService) {
	        'ngInject';

	        _classCallCheck(this, ResultsPrintFormController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.$stateParams = $stateParams;
	        this.SessionService = SessionService;
	        this.PrintService = PrintService;

	        this.bill = null;
	        this.patient = null;
	        this.doctor = null;
	        this.billData = null;
	        this.billTotal = null;
	        this.results = null;
	    }

	    _createClass(ResultsPrintFormController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            var _this = this;

	            this.API.one('testResult', this.$stateParams.id).get().then(function (response) {
	                var tresult = response.plain();

	                _this.results = tresult;
	                _this.billDate = _this.results[0].reportDate;
	                _this.billNo = _this.results[0].billNo;

	                _this.API.one('patient', _this.results[0].patient_id).get().then(function (response) {
	                    var patient = response.plain();
	                    _this.patient = patient.patient;
	                });
	                _this.API.one('doctor', _this.results[0].doctor_id).get().then(function (response) {
	                    var doctor = response.plain();
	                    _this.doctor = doctor.doctor;
	                });
	            });

	            this.API.one('branchDetails', this.SessionService.get('branchId')).get().then(function (response) {
	                var branch = response.plain();
	                _this.branch = branch.branch;
	            });
	        }
	    }, {
	        key: 'print',
	        value: function print(printSectionId) {
	            this.PrintService.print(printSectionId);
	        }
	    }]);

	    return ResultsPrintFormController;
	}();

	var ResultsPrintFormComponent = exports.ResultsPrintFormComponent = {
	    templateUrl: './views/app/components/results_print_form/results_print_form.component.html',
	    controller: ResultsPrintFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ReportsFormController = function () {
	    ReportsFormController.$inject = ["API", "SessionService", "PrintService", "StaticDataService", "$scope"];
	    function ReportsFormController(API, SessionService, PrintService, StaticDataService, $scope) {
	        'ngInject';

	        var _this = this;

	        _classCallCheck(this, ReportsFormController);

	        this.API = API;
	        this.branches = [];
	        this.doctors = [];
	        this.tests = [];
	        this.from = null;
	        this.to = null;
	        this.branch = null;
	        this.doctor = null;
	        this.test = null;
	        this.billReport = null;
	        this.SessionService = SessionService;
	        this.PrintService = PrintService;
	        this.StaticDataService = StaticDataService;
	        this.$scope = $scope;

	        this.API.all('classes').getList('classes').then(function (response) {
	            _this.classes = response.plain();
	            console.log(_this.classes);
	        });

	        this.userType = this.SessionService.get('userType');
	    }

	    _createClass(ReportsFormController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            if (this.group == false) {
	                this.group = "T";
	            } else {
	                this.group = "M";
	            }
	            var data = {
	                from: this.from,
	                to: this.to,
	                klass: this.class,
	                grp: this.group
	            };

	            this.API.all('absentReport').post(data).then(function (response) {
	                _this2.report = response.plain();
	                var total = 0;
	                var totalCommission = null;
	                angular.forEach(_this2.report, function (br) {
	                    total = total + 1;
	                });
	                _this2.total = total;
	            });
	        }
	    }, {
	        key: 'print',
	        value: function print(id) {
	            this.PrintService.print(id);
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.from = '';
	            this.to = '';
	            this.class = '';
	        }
	    }]);

	    return ReportsFormController;
	}();

	var ReportsFormComponent = exports.ReportsFormComponent = {
	    templateUrl: './views/app/components/reports_form/reports_form.component.html',
	    controller: ReportsFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ReportsTeacherFormController = function () {
	    ReportsTeacherFormController.$inject = ["API", "SessionService", "PrintService", "StaticDataService", "$scope"];
	    function ReportsTeacherFormController(API, SessionService, PrintService, StaticDataService, $scope) {
	        'ngInject';

	        var _this = this;

	        _classCallCheck(this, ReportsTeacherFormController);

	        this.API = API;
	        this.branches = [];
	        this.doctors = [];
	        this.tests = [];
	        this.from = null;
	        this.to = null;
	        this.branch = null;
	        this.doctor = null;
	        this.test = null;
	        this.billReport = null;
	        this.SessionService = SessionService;
	        this.PrintService = PrintService;
	        this.StaticDataService = StaticDataService;
	        this.$scope = $scope;

	        this.API.all('classes').getList('classes').then(function (response) {
	            _this.classes = response.plain();
	            console.log(_this.classes);
	        });

	        this.userType = this.SessionService.get('userType');
	    }

	    _createClass(ReportsTeacherFormController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            if (this.group == false) {
	                this.group = "T";
	            } else {
	                this.group = "M";
	            }
	            var data = {
	                from: this.from,
	                to: this.to,
	                klass: this.class,
	                grp: this.group
	            };

	            this.API.all('teacherReport').post(data).then(function (response) {
	                _this2.report = response.plain();
	                var total = 0;
	                var totalCommission = null;
	                angular.forEach(_this2.report, function (br) {
	                    total = total + 1;
	                });
	                _this2.total = total;
	            });
	        }
	    }, {
	        key: 'print',
	        value: function print(id) {
	            this.PrintService.print(id);
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.from = '';
	            this.to = '';
	            this.class = '';
	        }
	    }]);

	    return ReportsTeacherFormController;
	}();

	var ReportsTeacherFormComponent = exports.ReportsTeacherFormComponent = {
	    templateUrl: './views/app/components/reports_teacher_form/reports_teacher_form.component.html',
	    controller: ReportsTeacherFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LandingPageController = function () {
	    LandingPageController.$inject = ["API", "$scope", "SessionService", "$log"];
	    function LandingPageController(API, $scope, SessionService, $log) {
	        'ngInject';

	        _classCallCheck(this, LandingPageController);

	        this.$scope = $scope;
	        this.API = API;
	        this.SessionService = SessionService;
	        this.$log = $log;
	    }

	    _createClass(LandingPageController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            var _this = this;

	            this.getLongAbsentees();
	            this.classwiseBreakup();
	            this.$scope.scLoaded = false;
	            this.$scope.tcLoaded = false;
	            this.$scope.sacLoaded = false;
	            this.$scope.tacLoaded = false;

	            this.API.one('studentsCount').get().then(function (response) {
	                _this.$scope.studentCount = response;
	                _this.$scope.scLoaded = true;
	            });

	            this.API.one('teachersCount').get().then(function (response) {
	                _this.$scope.teacherCount = response;
	                _this.$scope.tcLoaded = true;
	            });

	            this.API.one('absentCount').get().then(function (response) {
	                _this.$scope.studAbsentCount = response[0].cnt;
	                _this.$scope.sacLoaded = true;
	            });

	            this.API.one('absentTeacherCount').get().then(function (response) {
	                _this.$scope.teacherAbsentCount = response[0].cnt;
	                _this.$scope.tacLoaded = true;
	            });
	        }
	    }, {
	        key: 'getLongAbsentees',
	        value: function getLongAbsentees() {
	            var _this2 = this;

	            this.$scope.query = {
	                order: 'students.reg_no',
	                limit: 5,
	                page: 1
	            };

	            this.API.one('longAbsentees').get(this.$scope.query).then(function (response) {
	                var res = response.plain();
	                _this2.$scope.vm.labs = res.data;
	                _this2.$scope.vm.count = res.total;
	            });
	        }
	    }, {
	        key: 'classwiseBreakup',
	        value: function classwiseBreakup() {
	            var _this3 = this;

	            this.API.one('absentBreakup').get().then(function (response) {
	                _this3.breakupReport = response.plain();

	                _this3.$scope.doclabels = [];
	                _this3.$scope.docdata = [];
	                var docLabels = [];
	                var docData = [];
	                angular.forEach(_this3.breakupReport.students, function (dr) {
	                    docLabels.push(dr.class);
	                    docData.push(dr.absent);
	                });
	                _this3.$scope.doclabels = docLabels;
	                _this3.$scope.docdata = docData;
	            });
	            this.$scope.options = { legend: { display: true, labels: {
	                        fontColor: 'rgb(255, 99, 132)'
	                    } } };
	        }
	    }]);

	    return LandingPageController;
	}();

	var LandingPageComponent = exports.LandingPageComponent = {
	    templateUrl: './views/app/components/landing_page/landing_page.component.html',
	    controller: LandingPageController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreatePrintFormController = function () {
	    CreatePrintFormController.$inject = ["API", "ToastService", "$stateParams", "PrintService", "SessionService"];
	    function CreatePrintFormController(API, ToastService, $stateParams, PrintService, SessionService) {
	        'ngInject';

	        _classCallCheck(this, CreatePrintFormController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.$stateParams = $stateParams;
	        this.PrintService = PrintService;
	        this.SessionService = SessionService;

	        this.bill = null;
	        this.patient = null;
	        this.doctor = null;
	        this.billData = [];
	        this.billTotal = null;
	    }

	    _createClass(CreatePrintFormController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            var _this = this;

	            this.API.one('bill', this.$stateParams.id).get().then(function (response) {
	                var bill = response.plain();
	                _this.bill = bill.bill;
	                _this.API.one('patient', _this.bill.patientId).get().then(function (response) {
	                    var patient = response.plain();
	                    _this.patient = patient.patient;
	                });
	                _this.API.one('doctor', _this.bill.doctorId).get().then(function (response) {
	                    var doctor = response.plain();
	                    _this.doctor = doctor.doctor;
	                });

	                _this.API.one('branchDetails', _this.SessionService.get('branchId')).get().then(function (response) {
	                    var branch = response.plain();
	                    _this.branch = branch.branch;
	                });
	            });

	            var subTotal = 0;
	            this.API.all('tests').getList('tests').then(function (response) {
	                _this.tests = response.plain();
	                for (var i = 0; i < _this.bill.test_bills.length; i++) {
	                    for (var j = 0; j < _this.tests.length; j++) {
	                        if (_this.tests[j].id == _this.bill.test_bills[i].testId) {
	                            _this.billData.push({ 'testName': _this.tests[j].name, 'cost': _this.tests[j].cost, 'remarks': _this.tests[j].parameters });
	                            subTotal = subTotal + _this.tests[j].cost;
	                        }
	                    }
	                }
	                var total = Math.round(subTotal - _this.bill.discount);
	                _this.billTotal = { 'subTotal': subTotal, 'discount': _this.bill.discount, 'total': total };
	            });
	        }
	    }, {
	        key: 'print',
	        value: function print(printSectionId) {
	            this.PrintService.print(printSectionId);
	        }
	    }]);

	    return CreatePrintFormController;
	}();

	var CreatePrintFormComponent = exports.CreatePrintFormComponent = {
	    templateUrl: './views/app/components/create_print_form/create_print_form.component.html',
	    controller: CreatePrintFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListBloodFormController = function () {
	    ListBloodFormController.$inject = ["API", "SessionService", "$scope", "DialogService", "$mdEditDialog", "ToastService"];
	    function ListBloodFormController(API, SessionService, $scope, DialogService, $mdEditDialog, ToastService) {
	        'ngInject';

	        _classCallCheck(this, ListBloodFormController);

	        this.API = API;
	        this.doctors = [];
	        this.SessionService = SessionService;
	        this.DialogService = DialogService;
	        this.ToastService = ToastService;

	        $scope.selected = [];

	        $scope.query = {
	            order: 'name',
	            limit: 5,
	            page: 1
	        };

	        this.$scope = $scope;

	        this.groups = ["All", "O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];

	        this.$mdEditDialog = $mdEditDialog;

	        this.count = null;
	    }

	    _createClass(ListBloodFormController, [{
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            var data = {
	                group: this.group,
	                branchId: this.branchId,
	                doctorId: this.doctorId
	            };

	            this.API.all('blood').post(data).then(function (response) {
	                var res = response.plain();
	                _this.students = res;
	                var total = 0;
	                angular.forEach(_this.students, function (br) {
	                    total = total + 1;
	                });
	                _this.total = total;
	            });
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {
	            //this.$scope.getDoctors();
	        }
	    }]);

	    return ListBloodFormController;
	}();

	var ListBloodFormComponent = exports.ListBloodFormComponent = {
	    templateUrl: './views/app/components/list_blood_form/list_blood_form.component.html',
	    controller: ListBloodFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateTeacherFormController = function () {
	    CreateTeacherFormController.$inject = ["API", "ToastService", "SessionService", "moment", "$scope", "$http", "StaticDataService"];
	    function CreateTeacherFormController(API, ToastService, SessionService, moment, $scope, $http, StaticDataService) {
	        'ngInject';

	        _classCallCheck(this, CreateTeacherFormController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.SessionService = SessionService;
	        this.moment = moment;
	        this.$scope = $scope;
	        this.$http = $http;

	        var myDate = new Date();

	        this.minDate = new Date(myDate.getFullYear() - 60, myDate.getMonth(), myDate.getDate());

	        this.maxDate = new Date(myDate.getFullYear() - 20, myDate.getMonth(), myDate.getDate());

	        this.vm = $scope;

	        this.config = { headers: {
	                "Content-Type": undefined
	            }
	        };

	        $scope.form = [];
	        $scope.files = [];

	        $scope.uploadedFile = function (element) {
	            $scope.currentFile = element.files[0];
	            var reader = new FileReader();

	            reader.onload = function (event) {
	                $scope.image_source = event.target.result;
	                $scope.$apply(function ($scope) {
	                    $scope.files = element.files;
	                });
	            };
	            reader.readAsDataURL(element.files[0]);
	        };

	        $scope.bloodgrps = StaticDataService.bloodgroups();
	        $scope.extracurriculars = StaticDataService.excurriculars();
	    }

	    _createClass(CreateTeacherFormController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            var localDate, ndob, ndoa;

	            localDate = new Date(this.dob);
	            ndob = localDate.setHours(0, -localDate.getTimezoneOffset(), 0, 0);

	            localDate = new Date(this.doa);
	            ndoa = localDate.setHours(0, -localDate.getTimezoneOffset(), 0, 0);

	            var data = {
	                fname: this.fname,
	                lname: this.lname,
	                regno: this.regno,
	                aadhar: this.aadhar,
	                bloodgrp: this.bloodgrp,
	                gender: this.gender,
	                dob: this.moment(ndob).format('YYYY-MM-DD'),
	                qualification: this.qualification,
	                major: this.major,
	                institution: this.institution,
	                cocurricular: this.cocurricular,
	                father: this.father,
	                mother: this.mother,
	                address: this.address,
	                email: this.email,
	                mobile: this.mobile,
	                createdBy: this.SessionService.get('userId'),
	                updatedBy: this.SessionService.get('userId')
	            };

	            this.API.all('teachers').post(data).then(function (response) {

	                _this.ToastService.show('Teacher added successfully ');

	                var image = _this.vm.files[0];
	                var studNo = _this.regno;

	                _this.$http({
	                    method: 'POST',
	                    url: '/api/s3upload',
	                    processData: false,
	                    transformRequest: function transformRequest(data) {
	                        var formData = new FormData();
	                        formData.append("image", image);
	                        formData.append("regno", studNo);
	                        return formData;
	                    },
	                    data: _this.vm.form,
	                    headers: {
	                        'Content-Type': undefined
	                    }
	                }).success(function (data) {});

	                _this.name = '';
	                _this.gender = '';
	                _this.maritalStatus = '';
	                _this.dob = '';
	                _this.address = '';
	                _this.phoneNumber = '';
	                _this.mobile = '';
	                _this.emailId = '';
	            }).catch(this.failed.bind(this));
	        }
	    }, {
	        key: 'failed',
	        value: function failed(response) {
	            console.log(response.data);
	            this.ToastService.error(response.data.errors.message[0]);
	        }
	    }]);

	    return CreateTeacherFormController;
	}();

	var CreateTeacherFormComponent = exports.CreateTeacherFormComponent = {
	    templateUrl: './views/app/components/create_teacher_form/create_teacher_form.component.html',
	    controller: CreateTeacherFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateStudentFormController = function () {
	    CreateStudentFormController.$inject = ["API", "ToastService", "SessionService", "moment", "$scope", "$http", "StaticDataService"];
	    function CreateStudentFormController(API, ToastService, SessionService, moment, $scope, $http, StaticDataService) {
	        'ngInject';

	        _classCallCheck(this, CreateStudentFormController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.SessionService = SessionService;
	        this.moment = moment;
	        this.$scope = $scope;
	        this.$http = $http;

	        var myDate = new Date();

	        this.minDate = new Date(myDate.getFullYear() - 20, myDate.getMonth(), myDate.getDate());

	        this.maxDate = new Date(myDate.getFullYear() - 3, myDate.getMonth(), myDate.getDate());

	        this.vm = $scope;

	        this.config = { headers: {
	                "Content-Type": undefined
	            }
	        };

	        $scope.form = [];
	        $scope.files = [];

	        $scope.uploadedFile = function (element) {
	            $scope.currentFile = element.files[0];
	            var reader = new FileReader();

	            reader.onload = function (event) {
	                $scope.image_source = event.target.result;
	                $scope.$apply(function ($scope) {
	                    $scope.files = element.files;
	                });
	            };
	            reader.readAsDataURL(element.files[0]);
	        };

	        $scope.bloodgrps = StaticDataService.bloodgroups();
	        $scope.classes = StaticDataService.klasses();
	        $scope.sections = StaticDataService.sektions();
	        $scope.languages = StaticDataService.langs();
	        $scope.extracurriculars = StaticDataService.excurriculars();
	        $scope.sports = StaticDataService.sprts();
	        $scope.transportation = StaticDataService.transports();
	    }

	    _createClass(CreateStudentFormController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            var localDate, ndob, ndoa;

	            localDate = new Date(this.dob);
	            ndob = localDate.setHours(0, -localDate.getTimezoneOffset(), 0, 0);

	            localDate = new Date(this.doa);
	            ndoa = localDate.setHours(0, -localDate.getTimezoneOffset(), 0, 0);

	            var data = {
	                fname: this.fname,
	                lname: this.lname,
	                regno: this.regno,
	                aadhar: this.aadhar,
	                gender: this.gender,
	                dob: this.moment(ndob).format('YYYY-MM-DD'),
	                class: this.class,
	                section: this.section,
	                doa: this.moment(ndoa).format('YYYY-MM-DD'),
	                admitted: this.admitted,
	                year: this.year,
	                l2: this.l2,
	                l3: this.l3,
	                transport: this.transport,
	                type: this.type,
	                cocurricular: this.cocurricular,
	                bloodgrp: this.bloodgrp,
	                fees: this.fees,
	                sports: this.sports,
	                father: this.father,
	                mother: this.mother,
	                femail: this.femail,
	                memail: this.memail,
	                fmobile: this.fmobile,
	                mmobile: this.mmobile,
	                address: this.address,
	                createdBy: this.SessionService.get('userId'),
	                updatedBy: this.SessionService.get('userId')
	            };

	            this.API.all('students').post(data).then(function (response) {

	                _this.ToastService.show('Student added successfully ');

	                var image = _this.vm.files[0];
	                var studNo = _this.regno;

	                _this.$http({
	                    method: 'POST',
	                    url: '/api/s3upload',
	                    processData: false,
	                    transformRequest: function transformRequest(data) {
	                        var formData = new FormData();
	                        formData.append("image", image);
	                        formData.append("regno", studNo);
	                        return formData;
	                    },
	                    data: _this.vm.form,
	                    headers: {
	                        'Content-Type': undefined
	                    }
	                }).success(function (data) {});

	                _this.name = '';
	                _this.gender = '';
	                _this.maritalStatus = '';
	                _this.dob = '';
	                _this.address = '';
	                _this.phoneNumber = '';
	                _this.mobile = '';
	                _this.emailId = '';
	            }).catch(this.failed.bind(this));
	        }
	    }, {
	        key: 'failed',
	        value: function failed(response) {
	            console.log(response.data);
	            this.ToastService.error(response.data.errors.message[0]);
	        }
	    }]);

	    return CreateStudentFormController;
	}();

	var CreateStudentFormComponent = exports.CreateStudentFormComponent = {
	    templateUrl: './views/app/components/create_student_form/create_student_form.component.html',
	    controller: CreateStudentFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListStudentFormController = function () {
	    ListStudentFormController.$inject = ["API", "$mdEditDialog", "$scope", "DialogService", "ToastService", "SessionService"];
	    function ListStudentFormController(API, $mdEditDialog, $scope, DialogService, ToastService, SessionService) {
	        'ngInject';

	        _classCallCheck(this, ListStudentFormController);

	        this.API = API;
	        this.students = [];
	        this.DialogService = DialogService;
	        this.ToastService = ToastService;
	        this.SessionService = SessionService;

	        $scope.selected = [];

	        $scope.query = {
	            order: 'fname',
	            limit: 5,
	            page: 1
	        };

	        this.$scope = $scope;

	        this.$mdEditDialog = $mdEditDialog;

	        this.count = null;
	        $scope.getStudents = function () {
	            API.one('students').get($scope.query).then(function (response) {
	                var res = response.plain();
	                $scope.vm.students = res.data;
	                $scope.vm.count = res.total;
	            });
	        };

	        $scope.delete = function (event) {
	            event.stopPropagation();

	            var student = $scope.selected[0];
	            if (angular.isUndefined(student)) {
	                ToastService.show('Please select a Student to remove');
	                return;
	            }

	            var index = $scope.vm.students.indexOf(student);

	            if (index !== -1) {
	                API.one("student", student.id).remove().then(function (response) {
	                    $scope.vm.students.splice(index, 1);
	                    ToastService.show('Student deleted successfully ' + response.data);
	                });
	            }
	        };

	        $scope.edit = function (event) {
	            event.stopPropagation();

	            var s = $scope.selected[0];

	            if (angular.isUndefined(s)) {
	                ToastService.show('Please select a Student to update');
	                return;
	            }

	            var options = {
	                scope: $scope,
	                locals: { student: s },
	                controller: 'StudentDialogController',
	                preserveScope: true
	            };
	            DialogService.fromTemplate('student', options);
	        };
	    }

	    _createClass(ListStudentFormController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.$scope.getStudents();
	        }
	    }]);

	    return ListStudentFormController;
	}();

	var ListStudentFormComponent = exports.ListStudentFormComponent = {
	    templateUrl: './views/app/components/list_student_form/list_student_form.component.html',
	    controller: ListStudentFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListTeacherFormController = function () {
	    ListTeacherFormController.$inject = ["API", "$mdEditDialog", "$scope", "DialogService", "ToastService", "SessionService"];
	    function ListTeacherFormController(API, $mdEditDialog, $scope, DialogService, ToastService, SessionService) {
	        'ngInject';

	        _classCallCheck(this, ListTeacherFormController);

	        this.API = API;
	        this.teachers = [];
	        this.DialogService = DialogService;
	        this.ToastService = ToastService;
	        this.SessionService = SessionService;

	        $scope.selected = [];

	        $scope.query = {
	            order: 'fname',
	            limit: 5,
	            page: 1
	        };

	        this.$scope = $scope;

	        this.$mdEditDialog = $mdEditDialog;

	        this.count = null;
	        $scope.getTeachers = function () {
	            API.one('teachers').get($scope.query).then(function (response) {
	                var res = response.plain();
	                $scope.vm.teachers = res.data;
	                $scope.vm.count = res.total;
	            });
	        };

	        $scope.delete = function (event) {
	            // if you have auto row selection enabled you will want to stop the event from propagating
	            event.stopPropagation();

	            var teacher = $scope.selected[0];
	            if (angular.isUndefined(teacher)) {
	                ToastService.show('Please select a Teacher to remove');
	                return;
	            }

	            var index = $scope.vm.teachers.indexOf(teacher);

	            if (index !== -1) {
	                API.one("teacher", teacher.id).remove().then(function (response) {
	                    $scope.vm.teachers.splice(index, 1);
	                    ToastService.show('Teacher deleted successfully ' + response.data);
	                });
	            }
	        };

	        $scope.edit = function (event) {
	            event.stopPropagation();

	            var s = $scope.selected[0];

	            console.log(s);

	            if (angular.isUndefined(s)) {
	                ToastService.show('Please select a Teacher to update');
	                return;
	            }

	            var options = {
	                scope: $scope,
	                locals: { teacher: s },
	                controller: 'TeacherDialogController',
	                preserveScope: true
	            };
	            DialogService.fromTemplate('teacher', options);
	        };
	    }

	    _createClass(ListTeacherFormController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.$scope.getTeachers();
	        }
	    }]);

	    return ListTeacherFormController;
	}();

	var ListTeacherFormComponent = exports.ListTeacherFormComponent = {
	    templateUrl: './views/app/components/list_teacher_form/list_teacher_form.component.html',
	    controller: ListTeacherFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListAbsenteesFormController = function () {
	    ListAbsenteesFormController.$inject = ["API", "$scope", "DialogService", "$mdEditDialog", "ToastService", "SessionService"];
	    function ListAbsenteesFormController(API, $scope, DialogService, $mdEditDialog, ToastService, SessionService) {
	        'ngInject';

	        _classCallCheck(this, ListAbsenteesFormController);

	        this.API = API;
	        this.tests = [];
	        this.SessionService = SessionService;

	        $scope.selected = [];

	        $scope.query = {
	            order: 'fname',
	            limit: 5,
	            page: 1
	        };

	        this.$scope = $scope;

	        this.$mdEditDialog = $mdEditDialog;

	        this.count = null;
	        $scope.getTests = function () {
	            $scope.query.class = 'XXX';
	            $scope.query.section = '99';
	            API.one('getAbsentees').get($scope.query).then(function (response) {
	                var res = response.plain();
	                $scope.vm.absentees = res.data;
	                $scope.vm.count = res.total;
	            });
	        };

	        $scope.classChange = function (event) {
	            event.stopPropagation();

	            var p = $scope.selected[0];
	            p.updated_by = SessionService.get('userId');

	            if (angular.isUndefined(p)) {
	                ToastService.show('Please select a Test to update');
	                return;
	            }

	            var options = {
	                scope: $scope,
	                locals: { test: p },
	                controller: 'TestDialogController',
	                preserveScope: true
	            };
	            DialogService.fromTemplate('test', options);
	        };
	    }

	    _createClass(ListAbsenteesFormController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.$scope.getTests();
	        }
	    }]);

	    return ListAbsenteesFormController;
	}();

	var ListAbsenteesFormComponent = exports.ListAbsenteesFormComponent = {
	    templateUrl: './views/app/components/list_absentees_form/list_absentees_form.component.html',
	    controller: ListAbsenteesFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateEntryFormController = function () {
	  CreateEntryFormController.$inject = ["API", "ToastService", "SessionService", "$mdDialog"];
	  function CreateEntryFormController(API, ToastService, SessionService, $mdDialog) {
	    'ngInject';

	    _classCallCheck(this, CreateEntryFormController);

	    this.API = API;
	    this.ToastService = ToastService;
	    this.SessionService = SessionService;
	    this.$mdDialog = $mdDialog;
	  }

	  _createClass(CreateEntryFormController, [{
	    key: '$onInit',
	    value: function $onInit() {}
	  }, {
	    key: 'submit',
	    value: function submit() {
	      var _this = this;

	      var data = {
	        regno: this.regno,
	        reason: this.reason,
	        createdBy: this.SessionService.get('userId'),
	        updatedBy: this.SessionService.get('userId')
	      };

	      this.API.all('attendances').post(data).then(function (response) {
	        _this.$mdDialog.show(_this.$mdDialog.alert().parent(angular.element(document.querySelector('#popupContainer'))).clickOutsideToClose(true).title('Success').textContent('Attendance entry successful').ariaLabel('Success').ok('Got it!'));

	        _this.regno = '';
	        _this.reason = '';
	      }).catch(this.failed.bind(this));
	    }
	  }, {
	    key: 'teacherSubmit',
	    value: function teacherSubmit() {
	      var _this2 = this;

	      var data = {
	        regno: this.idno,
	        reason: this.reason,
	        createdBy: this.SessionService.get('userId'),
	        updatedBy: this.SessionService.get('userId')
	      };

	      this.API.all('staffAttendances').post(data).then(function (response) {
	        _this2.$mdDialog.show(_this2.$mdDialog.alert().parent(angular.element(document.querySelector('#popupContainer'))).clickOutsideToClose(true).title('Success').textContent('Attendance entry successful').ariaLabel('Success').ok('Got it!'));

	        _this2.regno = '';
	        _this2.reason = '';
	      }).catch(this.failed.bind(this));
	    }
	  }, {
	    key: 'failed',
	    value: function failed(response) {
	      console.log(response.data);
	      console.log(response.data.errors.message[0]);
	      //this.ToastService.error(response.data.errors.message[0]);

	      // Appending dialog to document.body to cover sidenav in docs app
	      // Modal dialogs should fully cover application
	      // to prevent interaction outside of dialog
	      this.$mdDialog.show(this.$mdDialog.alert().parent(angular.element(document.querySelector('#popupContainer'))).clickOutsideToClose(true).title('Error').textContent(response.data.errors.message[0]).ariaLabel('Error').ok('Got it!'));
	    }
	  }]);

	  return CreateEntryFormController;
	}();

	var CreateEntryFormComponent = exports.CreateEntryFormComponent = {
	  templateUrl: './views/app/components/create_entry_form/create_entry_form.component.html',
	  controller: CreateEntryFormController,
	  controllerAs: 'vm',
	  bindings: {}
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ResetPasswordController = function () {
	    ResetPasswordController.$inject = ["API", "ToastService", "$state"];
	    function ResetPasswordController(API, ToastService, $state) {
	        'ngInject';

	        _classCallCheck(this, ResetPasswordController);

	        this.API = API;
	        this.$state = $state;
	        this.ToastService = ToastService;
	    }

	    _createClass(ResetPasswordController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.password = '';
	            this.password_confirmation = '';
	            this.isValidToken = false;

	            this.verifyToken();
	        }
	    }, {
	        key: 'verifyToken',
	        value: function verifyToken() {
	            var _this = this;

	            var email = this.$state.params.email;
	            var token = this.$state.params.token;

	            this.API.all('auth/password').get('verify', {
	                email: email, token: token
	            }).then(function () {
	                _this.isValidToken = true;
	            }, function () {
	                _this.$state.go('app.landing');
	            });
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            var data = {
	                email: this.$state.params.email,
	                token: this.$state.params.token,
	                password: this.password,
	                password_confirmation: this.password_confirmation
	            };

	            this.API.all('auth/password/reset').post(data).then(function () {
	                _this2.ToastService.show('Password successfully changed');
	                _this2.$state.go('app.login');
	            });
	        }
	    }]);

	    return ResetPasswordController;
	}();

	var ResetPasswordComponent = exports.ResetPasswordComponent = {
	    templateUrl: './views/app/components/reset-password/reset-password.component.html',
	    controller: ResetPasswordController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ForgotPasswordController = function () {
	    ForgotPasswordController.$inject = ["API", "ToastService", "$state"];
	    function ForgotPasswordController(API, ToastService, $state) {
	        'ngInject';

	        _classCallCheck(this, ForgotPasswordController);

	        this.API = API;
	        this.$state = $state;
	        this.ToastService = ToastService;
	    }

	    _createClass(ForgotPasswordController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.email = '';
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            this.API.all('auth/password/email').post({
	                email: this.email
	            }).then(function () {
	                _this.ToastService.show('Please check your email for instructions on how to reset your password.');
	                _this.$state.go('app.landing');
	            });
	        }
	    }]);

	    return ForgotPasswordController;
	}();

	var ForgotPasswordComponent = exports.ForgotPasswordComponent = {
	    templateUrl: './views/app/components/forgot-password/forgot-password.component.html',
	    controller: ForgotPasswordController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginFormController = function () {
	        LoginFormController.$inject = ["$auth", "ToastService", "$state", "SessionService", "$rootScope"];
	        function LoginFormController($auth, ToastService, $state, SessionService, $rootScope) {
	                'ngInject';

	                _classCallCheck(this, LoginFormController);

	                this.$auth = $auth;
	                this.ToastService = ToastService;
	                this.$state = $state;
	                this.SessionService = SessionService;
	                this.$rootScope = $rootScope;
	        }

	        _createClass(LoginFormController, [{
	                key: '$onInit',
	                value: function $onInit() {
	                        this.email = '';
	                        this.password = '';
	                }
	        }, {
	                key: 'login',
	                value: function login() {
	                        var _this = this;

	                        var user = {
	                                email: this.email,
	                                password: this.password
	                        };

	                        this.$auth.login(user).then(function (response) {
	                                _this.$auth.setToken(response.data);
	                                console.log(response.data.data.user.name);
	                                _this.SessionService.set('user', response.data.data.user.name);
	                                _this.SessionService.set('userId', response.data.data.user.id);
	                                _this.SessionService.set('branchId', response.data.data.user.branch_id);
	                                _this.SessionService.set('userType', response.data.data.user.type);
	                                _this.$rootScope.loggeduser = response.data.data.user.name;

	                                if (response.data.data.user.type == 1) {
	                                        _this.$rootScope.items = [{ 'name': '', 'id': 0 }, { 'name': 'Add User', 'id': 1 }, { 'name': 'Change Password', 'id': 2 }, { 'name': 'Logout', 'id': 3 }];
	                                } else {
	                                        _this.$rootScope.items = [{ 'name': 'Logout', 'id': 3 }];
	                                }

	                                _this.$state.go('app.home');
	                        }).catch(this.failedLogin.bind(this));
	                }
	        }, {
	                key: 'failedLogin',
	                value: function failedLogin(response) {
	                        if (response.status === 422) {
	                                for (var error in response.data.errors) {
	                                        return this.ToastService.error(response.data.errors[error][0]);
	                                }
	                        }
	                        this.ToastService.error(response.statusText);
	                }
	        }]);

	        return LoginFormController;
	}();

	var LoginFormComponent = exports.LoginFormComponent = {
	        templateUrl: './views/app/components/login-form/login-form.component.html',
	        controller: LoginFormController,
	        controllerAs: 'vm',
	        bindings: {}
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RegisterFormController = function () {
	        RegisterFormController.$inject = ["$auth", "ToastService", "API"];
	        function RegisterFormController($auth, ToastService, API) {
	                'ngInject';

	                _classCallCheck(this, RegisterFormController);

	                this.$auth = $auth;
	                this.ToastService = ToastService;
	                this.API = API;
	        }

	        _createClass(RegisterFormController, [{
	                key: '$onInit',
	                value: function $onInit() {
	                        this.name = '';
	                        this.email = '';
	                        this.password = '';
	                }
	        }, {
	                key: 'register',
	                value: function register() {
	                        var _this = this;

	                        var user = {
	                                name: this.name,
	                                email: this.email,
	                                password: this.password
	                        };

	                        this.$auth.signup(user).then(function (response) {
	                                //remove this if you require email verification
	                                _this.$auth.setToken(response.data);
	                                _this.reset();
	                                _this.ToastService.show('Successfully registered.');
	                        }).catch(this.failedRegistration.bind(this));
	                }
	        }, {
	                key: 'reset',
	                value: function reset() {
	                        this.name = '';
	                        this.email = '';
	                        this.password = '';
	                }
	        }, {
	                key: 'failedRegistration',
	                value: function failedRegistration(response) {
	                        if (response.status === 422) {
	                                for (var error in response.data.errors) {
	                                        return this.ToastService.error(response.data.errors[error][0]);
	                                }
	                        }
	                        this.ToastService.error(response.statusText);
	                }
	        }]);

	        return RegisterFormController;
	}();

	var RegisterFormComponent = exports.RegisterFormComponent = {
	        templateUrl: './views/app/components/register-form/register-form.component.html',
	        controller: RegisterFormController,
	        controllerAs: 'vm',
	        bindings: {}
	};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';

	angular.module('app.directives');

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _API = __webpack_require__(38);

	var _dialog = __webpack_require__(39);

	var _toast = __webpack_require__(40);

	var _session = __webpack_require__(41);

	var _print = __webpack_require__(42);

	var _staticdata = __webpack_require__(43);

	angular.module('app.services').service('API', _API.APIService).service('DialogService', _dialog.DialogService).service('ToastService', _toast.ToastService).service('SessionService', _session.SessionService).service('PrintService', _print.PrintService).service('StaticDataService', _staticdata.StaticDataService);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var APIService = exports.APIService = ["Restangular", "ToastService", "$window", function APIService(Restangular, ToastService, $window) {
	  'ngInject';
	  //content negotiation

	  _classCallCheck(this, APIService);

	  var headers = {
	    'Content-Type': 'application/json',
	    'Accept': 'application/x.laravel.v1+json'
	  };

	  return Restangular.withConfig(function (RestangularConfigurer) {
	    RestangularConfigurer.setBaseUrl('/api/').setDefaultHeaders(headers).setErrorInterceptor(function (response) {
	      if (response.status === 422 || response.status === 401) {
	        for (var error in response.data.errors) {
	          return ToastService.error(response.data.errors[error][0]);
	        }
	      }
	      if (response.status === 500) {
	        return ToastService.error(response.statusText);
	      }
	    }).addFullRequestInterceptor(function (element, operation, what, url, headers) {
	      var token = $window.localStorage.satellizer_token;
	      if (token) {
	        headers.Authorization = 'Bearer ' + token;
	      }
	    }).addResponseInterceptor(function (data, operation) {
	      var extractedData;

	      // .. to look for getList operations
	      if (operation === "getList") {
	        // .. and handle the data and meta data
	        if (angular.isDefined(data.branches)) {
	          extractedData = data.branches;
	        } else if (angular.isDefined(data.tests)) {
	          extractedData = data.tests;
	        } else if (angular.isDefined(data.patients)) {
	          extractedData = data.patients;
	        } else if (angular.isDefined(data.doctors)) {
	          extractedData = data.doctors;
	        } else if (angular.isDefined(data.bills)) {
	          extractedData = data.bills;
	        } else {
	          extractedData = data;
	        }
	      } else {
	        extractedData = data;
	      }
	      return extractedData;
	    });
	  });
	}];

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DialogService = exports.DialogService = function () {
	    DialogService.$inject = ["$mdDialog"];
	    function DialogService($mdDialog) {
	        'ngInject';

	        _classCallCheck(this, DialogService);

	        this.$mdDialog = $mdDialog;
	    }

	    _createClass(DialogService, [{
	        key: 'fromTemplate',
	        value: function fromTemplate(template, options) {
	            if (!template) {
	                return false;
	            }

	            if (!options) {
	                options = {};
	            }

	            options.templateUrl = './views/dialogs/' + template + '/' + template + '.dialog.html';
	            return this.$mdDialog.show(options);
	        }
	    }, {
	        key: 'hide',
	        value: function hide(params) {
	            return this.$mdDialog.hide(params);
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel() {
	            return this.$mdDialog.cancel();
	        }
	    }, {
	        key: 'alert',
	        value: function alert(title, content, params) {
	            var alert = this.$mdDialog.alert(params).title(title).content(content).ariaLabel(content).ok('Ok');

	            this.$mdDialog.show(alert);
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm(title, content, params) {
	            var confirm = this.$mdDialog.confirm(params).title(title).content(content).ariaLabel(content).ok('Ok').cancel('Cancel');

	            return this.$mdDialog.show(confirm);
	        }
	    }, {
	        key: 'prompt',
	        value: function prompt(title, content, placeholder, params) {
	            var prompt = this.$mdDialog.prompt(params).title(title).textContent(content).placeholder(placeholder).ariaLabel(placeholder).ok('Ok').cancel('Cancel');

	            return this.$mdDialog.show(prompt);
	        }
	    }]);

	    return DialogService;
	}();

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ToastService = exports.ToastService = function () {
		ToastService.$inject = ["$mdToast"];
		function ToastService($mdToast) {
			'ngInject';

			_classCallCheck(this, ToastService);

			this.$mdToast = $mdToast;

			this.delay = 6000;
			this.position = 'top right';
			this.action = 'OK';
		}

		_createClass(ToastService, [{
			key: 'show',
			value: function show(content) {
				if (!content) {
					return false;
				}

				return this.$mdToast.show(this.$mdToast.simple().content(content).position(this.position).action(this.action).hideDelay(this.delay));
			}
		}, {
			key: 'error',
			value: function error(content) {
				console.log(content);
				if (!content) {
					return false;
				}

				return this.$mdToast.show(this.$mdToast.simple().content(content).position(this.position).theme('warn').action(this.action).hideDelay(this.delay));
			}
		}]);

		return ToastService;
	}();

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SessionService = exports.SessionService = function () {
	    SessionService.$inject = ["$window"];
	    function SessionService($window) {
	        'ngInject';

	        _classCallCheck(this, SessionService);

	        this.$window = $window;
	    }

	    _createClass(SessionService, [{
	        key: 'set',
	        value: function set(key, val) {
	            return this.$window.sessionStorage.setItem(key, val);
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            return this.$window.sessionStorage.getItem(key);
	        }
	    }, {
	        key: 'unset',
	        value: function unset(key) {
	            return this.$window.sessionStorage.removeItem(key);
	        }
	    }]);

	    return SessionService;
	}();

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PrintService = exports.PrintService = function () {
	    PrintService.$inject = ["$document", "$window"];
	    function PrintService($document, $window) {
	        'ngInject';

	        _classCallCheck(this, PrintService);

	        this.$document = $document;
	        this.$window = $window;
	    }

	    _createClass(PrintService, [{
	        key: 'print',
	        value: function print(printSectionId) {
	            var innerContents = this.$document[0].getElementById(printSectionId).innerHTML;
	            var popupWinindow = this.$window.open('', '_blank', 'width=0,height=0,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
	            popupWinindow.document.open();
	            popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="css/vendor.css" /><script>function loadPrint() {window.print(); setTimeout(function () { window.close(); }, 10);} </script></head><body onload="loadPrint()">' + innerContents + '</html>');
	            popupWinindow.document.close();
	        }
	    }]);

	    return PrintService;
	}();

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StaticDataService = exports.StaticDataService = function () {
	    function StaticDataService() {
	        'ngInject';

	        _classCallCheck(this, StaticDataService);
	    }

	    _createClass(StaticDataService, [{
	        key: 'excurriculars',
	        value: function excurriculars() {
	            var excurricular = 'Vocal Music, Instrumental Music, Dance, Art and Crafts';
	            return excurricular.split(/, +/g).map(function (excurricular) {
	                return {
	                    value: excurricular,
	                    display: excurricular
	                };
	            });
	        }
	    }, {
	        key: 'bloodgroups',
	        value: function bloodgroups() {
	            var grps = 'A+, A-, B+, B-, AB+, AB-, O+, O-';
	            return grps.split(/, +/g).map(function (grps) {
	                return {
	                    value: grps,
	                    display: grps
	                };
	            });
	        }
	    }, {
	        key: 'klasses',
	        value: function klasses() {
	            var klass = 'LKG, UKG, I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII';
	            return klass.split(/, +/g).map(function (klass) {
	                return {
	                    value: klass,
	                    display: klass
	                };
	            });
	        }
	    }, {
	        key: 'sektions',
	        value: function sektions() {
	            var sec = 'A, B, C, D';
	            return sec.split(/, +/g).map(function (sec) {
	                return {
	                    value: sec,
	                    display: sec
	                };
	            });
	        }
	    }, {
	        key: 'klassWithSection',
	        value: function klassWithSection() {
	            var klass = 'LKG A, UKG A, I A, II A, III A, III B, IV A, IV B, V, VI, VII, VIII, IX A, X A, XI, XII';
	            return klass.split(/, +/g).map(function (klass) {
	                return {
	                    value: klass,
	                    display: klass
	                };
	            });
	        }
	    }, {
	        key: 'langs',
	        value: function langs() {
	            var lang = 'Tamil, Hindi, French, German';
	            return lang.split(/, +/g).map(function (lang) {
	                return {
	                    value: lang,
	                    display: lang
	                };
	            });
	        }
	    }, {
	        key: 'sprts',
	        value: function sprts() {
	            var sport = 'Basketball, Football, Cricket, Track, Field, Kabadi, Tennis, Swimming';
	            return sport.split(/, +/g).map(function (sport) {
	                return {
	                    value: sport,
	                    display: sport
	                };
	            });
	        }
	    }, {
	        key: 'transports',
	        value: function transports() {
	            var transport = 'School Van, Private Van, Self';
	            return transport.split(/, +/g).map(function (transport) {
	                return {
	                    value: transport,
	                    display: transport
	                };
	            });
	        }
	    }]);

	    return StaticDataService;
	}();

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

	angular.module('app.mainView', []).controller('MainController', ['$scope', '$mdSidenav', '$mdDialog', 'ssSideNav', '$timeout', '$rootScope', '$state', 'ssSideNavSharedService', 'DialogService', 'SessionService', 'API', '$auth', function MainController($scope, $mdSidenav, $mdDialog, ssSideNav, $timeout, $rootScope, $state, ssSideNavSharedService, DialogService, SessionService, API, $auth) {
	    $scope.loaded = false;

	    if ($scope.isSidenavOpen === true) {
	        $mdSidenav('left').toggle();
	    }

	    $scope.isSidenavOpen = false;

	    $scope.openLeftMenu = function () {
	        $mdSidenav('left').toggle();
	    };

	    $scope.menu = ssSideNav;

	    $rootScope.$state = $state;

	    $scope.cancel = function () {
	        DialogService.cancel();
	    };

	    $rootScope.loggeduser = SessionService.get('user');
	    //$scope.loggedInuser = SessionService.get('user');

	    $scope.logout = function () {
	        API.one('auth/destroy').get().then(function (response) {
	            $auth.isAuthenticated = false;
	            SessionService.unset('auth');
	            $state.go('app.landing');
	        });
	    };

	    if (SessionService.get('userType') == 1) {
	        $rootScope.items = [{ 'name': '', 'id': 0 }, { 'name': 'Add User', 'id': 1 }, { 'name': 'Change Password', 'id': 2 }, { 'name': 'Logout', 'id': 3 }];
	    } else {
	        $rootScope.items = [{ 'name': 'Logout', 'id': 3 }];
	    }

	    $scope.menuItemClick = function (id) {
	        switch (id) {
	            case 1:
	                $state.go('app.register');
	                break;
	            case 2:
	                $state.go('app.forgot_password');
	                break;
	            case 3:
	                $scope.logout();
	                break;
	            default:
	        }
	    };
	}]);

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';

	angular.module('app.studentDialogView', []).controller('StudentDialogController', ['API', '$scope', 'DialogService', 'StaticDataService', 'moment', function StudentDialogController(API, $scope, DialogService, StaticDataService, moment) {
	    var vm = this;
	    vm.API = API;
	    this.moment = moment;

	    vm.student = $scope.selected[0];
	    vm.student.dob = new Date(vm.student.dob);
	    vm.student.doa = new Date(vm.student.doa);

	    $scope.bloodgrps = StaticDataService.bloodgroups();
	    $scope.classes = StaticDataService.klasses();
	    $scope.sections = StaticDataService.sektions();
	    $scope.languages = StaticDataService.langs();
	    $scope.extracurriculars = StaticDataService.excurriculars();
	    $scope.sports = StaticDataService.sprts();
	    $scope.transportation = StaticDataService.transports();

	    vm.cancel = function (event) {
	        event.stopPropagation();
	        DialogService.cancel();
	    };

	    vm.save = function () {
	        var localDate, ndob, ndoa;

	        localDate = new Date(vm.student.dob);
	        ndob = localDate.setHours(0, -localDate.getTimezoneOffset(), 0, 0);

	        localDate = new Date(vm.student.doa);
	        ndoa = localDate.setHours(0, -localDate.getTimezoneOffset(), 0, 0);

	        vm.student.dob = this.moment(ndob).format('YYYY-MM-DD');
	        vm.student.doa = this.moment(ndoa).format('YYYY-MM-DD');

	        API.one("student", vm.student.id).put(vm.student).then();
	        DialogService.hide();
	    };

	    $scope.image_source = vm.student.reg_no + '.jpg';
	}]);

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';

	angular.module('app.teacherDialogView', []).controller('TeacherDialogController', ['API', '$scope', 'DialogService', 'StaticDataService', 'moment', function TeacherDialogController(API, $scope, DialogService, StaticDataService, moment) {
	    var vm = this;
	    vm.API = API;
	    this.moment = moment;
	    vm.teacher = $scope.selected[0];

	    vm.teacher.dob = new Date(vm.teacher.dob);
	    $scope.bloodgrps = StaticDataService.bloodgroups();

	    vm.cancel = function (event) {
	        event.stopPropagation();
	        DialogService.cancel();
	    };

	    vm.save = function () {
	        var localDate, ndob;

	        localDate = new Date(vm.teacher.dob);
	        ndob = localDate.setHours(0, -localDate.getTimezoneOffset(), 0, 0);

	        vm.teacher.dob = this.moment(ndob).format('YYYY-MM-DD');

	        API.one("teacher", vm.teacher.id).put(vm.teacher).then();
	        DialogService.hide();
	    };

	    $scope.image_source = vm.teacher.id_no + '.jpg';
	}]);

/***/ })
/******/ ]);