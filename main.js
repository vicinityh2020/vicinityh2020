(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/httprequest.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/httprequest.service.ts ***!
  \**************************************************/
/*! exports provided: httprequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httprequestService", function() { return httprequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httprequestService = /** @class */ (function () {
    function httprequestService(http) {
        this.http = http;
    }
    httprequestService.prototype.sendGet = function (url) {
        return this.http.get('https://api.vicinity.bavenir.eu/api/' + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            // console.log(response)
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    httprequestService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: true });
    };
    ;
    httprequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], httprequestService);
    return httprequestService;
}());



/***/ }),

/***/ "./src/app/_templates/documentation/documentation.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/_templates/documentation/documentation.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_templates/documentation/documentation.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/_templates/documentation/documentation.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id='documentation' class='pt90 pb90 bg-faded'>\n    <div class=\"container bg-faded\">\n\n        <!-- <h6 class=\"text-dark-gray text-center\">Have a look on our documentation</h6> -->\n        <h3 class=\"text-center title-font mb50\">Learn more</h3>\n\n        <a href=\"https://github.com/vicinityh2020\" class=\"btn btn-social btn-border-o btn-icon btn-block btn-dark mr-2 mb-2\">\n          <img align=\"left\" src=\"./assets/images/vcnt-github-logo-light.png\" alt=\"\" class=\"img-fluid\" width=\"20\"> GitHub Documentation\n        </a>\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/_templates/documentation/documentation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/_templates/documentation/documentation.component.ts ***!
  \*********************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/_templates/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.css */ "./src/app/_templates/documentation/documentation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/_templates/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/_templates/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_templates/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/_templates/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 ml-auto mr-auto\">\n          <div class=\"row\">\n            <div class=\"col-md-3 ml-auto mr-auto\">\n              <img src=\"./assets/images/logo_eu_big.png\" alt=\"\"  width=\"100\" height=\"75\">\n            </div>\n            <div class=\"col-md-9 ml-auto mr-auto \">\n              <p>\n                This project has received funding from the European Union’s Horizon 2020 Framework Programme for Research and Innovation under grant agreement no 688467.\n              </p>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"col-lg-3 ml-auto mr-auto mb30\">\n          <img src=\"./assets/images/IoT-EPI-logo.png\" alt=\"\" width=\"175\" height=\"75\">\n        </div> -->\n         <div class=\"col-md-4 mr-auto ml-auto text-right\">\n            <!-- <h4>Useful links</h4>\n            <ul class=\"list-inline pb20\">\n                <li class=\"list-inline-item\">\n                    <a href=\"https://www.bavenir.eu/\">About us</a>\n                </li>\n                <li class=\"list-inline-item\">\n                    <a href=\"https://vicinity2020.eu/vicinity/newsletter/vicinity-newsletter\">Newsletter</a>\n                </li>\n                <li class=\"list-inline-item\">\n                    <a href=\"#\">Terms & conditions</a>\n                </li>\n            </ul> -->\n            <br>\n            <span>bAvenir &copy; Copyright 2018. All Right Reserved.</span>\n        </div>\n    </div>\n</div>\n\n<!-- <div class=\"container\">\n    <div class=\"row align-items-end\">\n      <div class=\"col-lg-4\">\n        <div class=\"row\"> -->\n\n        <!-- </div>\n      </div>\n      <div class=\"col-lg-8 text-right\">\n          <div class=\"row\">\n              <div class=\"col-lg-4 mb20\">\n                  <h5 class=\" mb20\">Call Us</h5>\n                  <p class=\"lead\">987654321</p>\n              </div>\n              <div class=\"col-lg-4 mb20\">\n                  <h5 class=\" mb20\">Mail Us</h5>\n                  <p class=\"lead\">support@bavenir.eu</p>\n              </div>\n          </div><hr class=\"mb20\">\n          <div class=\"social-buttons\">\n              <span>\n                  <a href=\"#\" class=\"social-icon si-dark si-facebook si-dark-round\">\n                      <i class=\"fa fa-facebook\"></i>\n                  </a>\n                  <a href=\"#\" class=\"social-icon si-dark si-twitter si-dark-round\">\n                      <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"#\" class=\"social-icon si-dark si-g-plus si-dark-round\">\n                      <i class=\"fa fa-google-plus\"></i>\n                  </a>\n                  <a href=\"#\" class=\"social-icon si-dark si-skype si-dark-round\">\n                      <i class=\"fa fa-skype\"></i>\n                  </a>\n              </span>\n          </div>\n          <ul class=\"list-inline pb20\">\n              <li class=\"list-inline-item\">\n                  <a href=\"https://www.bavenir.eu/\">About us</a>\n              </li>\n              <li class=\"list-inline-item\">\n                  <a href=\"#\">News</a>\n              </li>\n              <li class=\"list-inline-item\">\n                  <a href=\"#\">Terms & conditions</a>\n              </li>\n              <li class=\"list-inline-item\">\n                  bAvenir &copy; Copyright 2018\n              </li>\n          </ul>\n      </div>\n\n\n    </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/_templates/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/_templates/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/_templates/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/_templates/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/_templates/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/_templates/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_templates/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/_templates/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"parallax-hero\" data-jarallax='{\"speed\": 0.2}' style='background-image: url(\"./assets/images/vcnt_scaled.png\")'>\n    <div class=\"parallax-overlay\"></div>\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-lg-6\">\n            <img src=\"./assets/images/vcnt_big.png\" alt=\"\" class=\"img-fluid\">\n          </div>\n          <div class=\"col-lg-6 pb50\">\n            <br>\n            <h5 class=\"text-white text-center font400 text-uppercase\"></h5>\n            <h3 class=\"mb20 text-white title-font text-capitalize text-center h1\">VICINITY IoT Platform</h3>\n            <p class=\"text-white-gray text-center mb30 lead\">\n                Open virtual neighbourhood network to connect IoT infrastructures and smart objects\n            </p>\n\n            <div class=\"mb40 text-center\">\n                <a href=\"https://vicinity2020.eu/vicinity/\" class=\"btn btn-white-outline\">About us</a>\n            </div>\n          </div>\n        </div>\n    </div>\n</div><!--hero-->\n"

/***/ }),

/***/ "./src/app/_templates/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/_templates/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/_templates/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/_templates/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/_templates/integration/integration.component.css":
/*!******************************************************************!*\
  !*** ./src/app/_templates/integration/integration.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_templates/integration/integration.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/_templates/integration/integration.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id='integration' class='pt90 pb50 bg-faded'>\n    <div class='container bg-faded'>\n\n      <!-- <h6 class='text-dark-gray text-center'>14 Days free trail. No credit card required.</h6> -->\n      <h3 class='text-center title-font mb50'>Let’s get started</h3>\n\n\n      <a href=\"https://vicinity-get-started.readthedocs.io/\" class=\"btn btn-social btn-border-o btn-icon btn-block btn-white mr-2 mb-2\">\n          <img align=\"left\" src=\"./assets/images/vcnt-readthedocs.png\" alt=\"\" class=\"img-fluid\" width=\"20\"> Read The Docs Documentation\n      </a>\n\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/_templates/integration/integration.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/_templates/integration/integration.component.ts ***!
  \*****************************************************************/
/*! exports provided: IntegrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationComponent", function() { return IntegrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntegrationComponent = /** @class */ (function () {
    function IntegrationComponent() {
    }
    IntegrationComponent.prototype.ngOnInit = function () {
    };
    IntegrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-integration',
            template: __webpack_require__(/*! ./integration.component.html */ "./src/app/_templates/integration/integration.component.html"),
            styles: [__webpack_require__(/*! ./integration.component.css */ "./src/app/_templates/integration/integration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntegrationComponent);
    return IntegrationComponent;
}());



/***/ }),

/***/ "./src/app/_templates/kpis/kpis.component.css":
/*!****************************************************!*\
  !*** ./src/app/_templates/kpis/kpis.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_templates/kpis/kpis.component.html":
/*!*****************************************************!*\
  !*** ./src/app/_templates/kpis/kpis.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id='kpis' class='pt90 pb50 bg-faded'>\n    <div class='container bg-faded'>\n\n      <h6 class=\"text-dark-gray text-center\">Usage statistics</h6>\n      <h3 class=\"text-center title-font mb90\">Highlights</h3>\n\n        <div class='row'>\n            <div class='col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp' data-wow-delay='.1s'>\n                <i class='icon-user'></i>\n                <h4>{{statistics.organisations}} Organisations</h4>\n                <p>\n                    With {{statistics.users}} users connected\n                </p>\n            </div><!--col-->\n            <div class='col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp' data-wow-delay='.2s'>\n                <i class='icon-server'></i>\n                <h4>{{statistics.nodes}} IoT Infrastructures</h4>\n                <p>\n                    With {{statistics.devices}} smart devices connected\n                </p>\n            </div><!--col-->\n            <div class='col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp' data-wow-delay='.3s'>\n                <i class='icon-graph'></i>\n                <h4>{{statistics.services}} services available</h4>\n                <p>\n                    To analyze and make your smart devices smarter\n                </p>\n            </div><!--col-->\n            <div class='col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp' data-wow-delay='.4s'>\n                <i class='icon-briefcase'></i>\n                <h4>{{statistics.contracts}} contracts</h4>\n                <p>\n                    Allowing our users to use services that will take the most of their infrastructure\n                </p>\n            </div><!--col-->\n        </div>\n    </div>\n</section><!--features-->\n"

/***/ }),

/***/ "./src/app/_templates/kpis/kpis.component.ts":
/*!***************************************************!*\
  !*** ./src/app/_templates/kpis/kpis.component.ts ***!
  \***************************************************/
/*! exports provided: KpisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpisComponent", function() { return KpisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_httprequest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/httprequest.service */ "./src/app/_services/httprequest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KpisComponent = /** @class */ (function () {
    function KpisComponent(httpService) {
        this.httpService = httpService;
        this.statistics = {}; //   public items : object[] = [];
    }
    KpisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.sendGet('public/statistics')
            .subscribe(function (data) {
            _this.statistics = data.message;
        }, function (error) {
            console.log(error);
        });
    };
    KpisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kpis',
            template: __webpack_require__(/*! ./kpis.component.html */ "./src/app/_templates/kpis/kpis.component.html"),
            styles: [__webpack_require__(/*! ./kpis.component.css */ "./src/app/_templates/kpis/kpis.component.css")]
        }),
        __metadata("design:paramtypes", [_services_httprequest_service__WEBPACK_IMPORTED_MODULE_1__["httprequestService"]])
    ], KpisComponent);
    return KpisComponent;
}());



/***/ }),

/***/ "./src/app/_templates/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/_templates/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1000px) {\n  /* CSS that should be displayed if width is equal to or less than 800px goes here */\n  img {\n      width: 40px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/_templates/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/_templates/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-white navbar-sticky\">\n    <div class=\"container-fluid\">\n        <a class=\"navbar-brand\" href=\"index.html\">\n            <img src=\"./assets/images/vcnt_logo.png\" alt=\"\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#landingkit-navbar\" aria-controls=\"landingkit-navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"landingkit-navbar\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" data-scroll href=\"#home\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-scroll href=\"#kpis\">Highlights</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-scroll href=\"#whyus\">Why us?</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-scroll href=\"#integration\">How to start?</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-scroll href=\"#users\">Who uses us?</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-scroll href=\"#documentation\">Learn more</a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-scroll href=\"#subscribe\">Get in touch</a>\n                </li> -->\n            </ul>\n\n            <ul class=\"navbar-nav ml-auto navbar-right\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link btn btn-primary\" target=\"_blank\" href=\"https://vicinity.bavenir.eu\">Login</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/_templates/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/_templates/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/_templates/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/_templates/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/_templates/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/_templates/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_templates/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/_templates/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"users\" class=\"border-btm1\">\n    <div class=\"container pt90 pb50\">\n\n\n      <!-- <h6 class=\"text-dark-gray text-center\">Frequently asked questions</h6> -->\n      <h3 class=\"title-font mb70 text-center\">Our demo sites</h3>\n\n<!-- Window width > 1000 -->\n\n        <div class=\"row\" [hidden]=\"!visible\">\n          <div class=\"col-lg-6 mb40 wow fadeInUp\" data-wow-delay=\".25s\">\n              <h5 class=\"mb10\"><b>Oslo Science Park Norway</b></h5>\n              <div class=\"row border-bottom\">\n                <span class=\"col-lg-6\">\n                  <h6>Smart buildings, neighbourhood and cities</h6>\n                  <br>\n                  <div class=\"mb40\">\n                      <a href=\"https://vicinity2020.eu/vicinity/content/oslo-science-park-no-buildings-and-smart-transport\" class=\"btn btn-outline-primary mr-3 mb-2\">Visit us</a>\n                  </div>\n                </span>\n                <div class='col-lg-6 mb40 wow fadeInUp' data-wow-delay=\".1s\">\n                    <img src='./assets/images/vcnt_buildings.png' alt='' class='img-fluid'>\n                </div>\n            </div>\n          </div><!--faq col-->\n          <div class=\"col-lg-6 mb40 wow fadeInUp\" data-wow-delay=\".25s\">\n              <h5 class=\"mb10\"><b>Tromso Norway</b></h5>\n              <div class=\"row border-bottom\">\n                <span class=\"col-lg-6\">\n                  <h6>Transport, parking, eHealth and assistive living</h6>\n                  <br>\n                  <div class=\"mb40\">\n                      <a href=\"https://vicinity2020.eu/vicinity/content/tromsø-no-–-neighbourhood-smart-parking-assisted-living-ecosystem\" class=\"btn btn-outline-primary mr-3 mb-2\">Visit us</a>\n                  </div>\n                </span>\n                <div class='col-lg-6 mb40 wow fadeInUp' data-wow-delay=\".1s\">\n                    <img src='./assets/images/vcnt_mobility.png' alt='' class='img-fluid'>\n                </div>\n            </div>\n          </div><!--faq col-->\n            <div class=\"col-lg-6 mb40 wow fadeInUp\" data-wow-delay=\".25s\">\n                <h5 class=\"mb10\"><b>Martim Longo Portugal</b></h5>\n                <div class=\"row\">\n                  <span class=\"col-lg-6\">\n                    <h6>Smart energy and buildings</h6>\n                    <br>\n                    <div class=\"mb40\">\n                        <a href=\"https://vicinity2020.eu/vicinity/content/martim-longo-po-neighbourhood-grid-ecosystem\" class=\"btn btn-outline-primary mr-3 mb-2\">Visit us</a>\n                    </div>\n                  </span>\n                  <div class='col-lg-6 mb40 wow fadeInUp' data-wow-delay=\".1s\">\n                      <img src='./assets/images/vcnt_energy.png' alt='' class='img-fluid'>\n                  </div>\n              </div>\n            </div><!--faq col-->\n            <div class=\"col-lg-6 mb40 wow fadeInUp\" data-wow-delay=\".25s\">\n                <h5 class=\"mb10\"><b>Pilea-Hortiatis Greece</b></h5>\n                <div class=\"row\">\n                  <span class=\"col-lg-6\">\n                    <h6>Assisted living and eHealth ecosystem</h6>\n                    <br>\n                    <div class=\"mb40\">\n                        <a href=\"https://vicinity2020.eu/vicinity/content/pilea-hortiatis-gr-–-ehealth-assisted-living\" class=\"btn btn-outline-primary mr-3 mb-2\">Visit us</a>\n                    </div>\n                  </span>\n                  <div class='col-lg-6 mb40 wow fadeInUp' data-wow-delay=\".1s\">\n                      <img src='./assets/images/vcnt_healthcare.png' alt='' class='img-fluid'>\n                  </div>\n              </div>\n            </div><!--faq col-->\n        </div>\n\n\n<!-- Window width < 1000 -->\n\n        <div [hidden]=\"visible\" align=\"center\">\n          <div class=\"mb40 wow fadeInUp\" data-wow-delay=\".25s\">\n            <h5 class=\"mb10\"><b>Oslo Science Park Norway</b></h5>\n              <div class=\"row border-bottom\">\n                  <div class='col-md-6 mb40 wow fadeInUp' data-wow-delay=\".1s\">\n                      <img src='./assets/images/vcnt_buildings.png' alt='' class='img-fluid'>\n                  </div>\n                  <div align=\"center\" class=\"col-md-6\">\n                    <h6>Smart buildings, neighbourhood and cities</h6>\n                    <div align=\"center\" class=\"mb40\">\n                        <a href=\"https://vicinity2020.eu/vicinity/content/oslo-science-park-no-buildings-and-smart-transport\" class=\"btn btn-outline-primary mr-3 mb-2\">Visit us</a>\n                    </div>\n                </div>\n            </div>\n          </div><!--faq col-->\n          <div class=\"mb40 wow fadeInUp\" data-wow-delay=\".25s\">\n            <h5 class=\"mb10\"><b>Tromso Norway</b></h5>\n              <div class=\"row border-bottom\">\n                  <div class='col-md-6 mb40 wow fadeInUp' data-wow-delay=\".1s\">\n                      <img src='./assets/images/vcnt_mobility.png' alt='' class='img-fluid'>\n                  </div>\n                  <div align=\"center\" class=\"col-md-6\">\n                    <h6>Transport, parking, eHealth and assistive living</h6>\n                  <div align=\"center\" class=\"mb40\">\n                      <a href=\"https://vicinity2020.eu/vicinity/content/tromsø-no-–-neighbourhood-smart-parking-assisted-living-ecosystem\" class=\"btn btn-outline-primary mr-3 mb-2\">Visit us</a>\n                  </div>\n                </div>\n            </div>\n          </div><!--faq col-->\n            <div class=\"mb40 wow fadeInUp\" data-wow-delay=\".25s\">\n              <h5 class=\"mb10\"><b>Martim Longo Portugal</b></h5>\n                <div class=\"row border-bottom\">\n                    <div class='col-md-6 mb40 wow fadeInUp' data-wow-delay=\".1s\">\n                        <img src='./assets/images/vcnt_energy.png' alt='' class='img-fluid'>\n                    </div>\n                    <div align=\"center\" class=\"col-md-6\">\n                      <h6>Smart energy and buildings</h6>\n                    <div align=\"center\" class=\"mb40\">\n                        <a href=\"https://vicinity2020.eu/vicinity/content/martim-longo-po-neighbourhood-grid-ecosystem\" class=\"btn btn-outline-primary mr-3 mb-2\">Visit us</a>\n                    </div>\n                  </div>\n              </div>\n            </div><!--faq col-->\n            <div class=\"mb40 wow fadeInUp\" data-wow-delay=\".25s\">\n              <h5 class=\"mb10\"><b>Pilea-Hortiatis Greece</b></h5>\n                <div class=\"row\">\n                    <div class='col-md-6 mb40 wow fadeInUp' data-wow-delay=\".1s\">\n                        <img src='./assets/images/vcnt_healthcare.png' alt='' class='img-fluid'>\n                    </div>\n                    <div align=\"center\" class=\"col-md-6\">\n                      <h6>Assisted living and eHealth ecosystem</h6>\n                      <div align=\"center\" class=\"mb40\">\n                          <a href=\"https://vicinity2020.eu/vicinity/content/pilea-hortiatis-gr-–-ehealth-assisted-living\" class=\"btn btn-outline-primary mr-3 mb-2\">Visit us</a>\n                      </div>\n                  </div>\n              </div>\n            </div><!--faq col-->\n        </div>\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/_templates/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/_templates/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
        this.visible = false;
        this.breakpoint = 1000;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        this.visible = this.innerWidth > this.breakpoint;
    };
    UsersComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        this.visible = this.innerWidth > this.breakpoint;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UsersComponent.prototype, "onResize", null);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/_templates/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/_templates/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/_templates/whyus/whyus.component.css":
/*!******************************************************!*\
  !*** ./src/app/_templates/whyus/whyus.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_templates/whyus/whyus.component.html":
/*!*******************************************************!*\
  !*** ./src/app/_templates/whyus/whyus.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id='whyus' class='pt90 pb50'>\n\n  <h6 class=\"text-dark-gray text-center\">Things that make us different</h6>\n  <h3 class=\"text-center title-font mb90\">Why us?</h3>\n\n  <div class='bg-white border-btm1'>\n      <div class='container pt30 pb50'>\n          <div class='row align-items-center'>\n              <div class='col-lg-5 mb40'>\n                  <h3 class='title-font mb20'>Security</h3>\n                  <p class='lead'>\n                      VICINITY aims to be privacy preserving platform with end-to-end security.\n                  </p>\n              </div>\n              <div class='col-lg-6 ml-auto mb40 wow fadeInUp' data-wow-delay=\".1s\">\n                <img src=\"./assets/images/vcnt-security.png\" alt=\"\" class=\"img-fluid center-img\">\n              </div>\n          </div>\n      </div>\n  </div><!--feature-->\n  <div class='bg-white border-btm1'>\n      <div class='container pt30 pb50'>\n          <div class='row align-items-center'>\n              <div class='col-lg-6 mb40 wow fadeInUp' data-wow-delay='.2s'>\n                <img src=\"./assets/images/vcnt-interoperability.png\" alt=\"\" class=\"img-fluid center-img\">\n              </div>\n              <div class='col-lg-5 mr-auto mb40'>\n                  <h3 class='title-font mb20'>Interoperability</h3>\n                  <p class='lead'>\n                      VICINITY enables to access your device and service technology agnostic way.\n                  </p>\n              </div>\n\n          </div>\n      </div>\n  </div><!--feature-->\n  <div class='bg-white'>\n      <div class='container pt30 pb50'>\n          <div class='row align-items-center'>\n              <div class='col-lg-5 ml-auto mb40'>\n                  <h3 class='title-font mb20'>Decentralization</h3>\n                  <p class='lead'>\n                    VICINITY provides peer-to-peer environment to facilitate exchange of data and service provision.\n                  </p>\n              </div>\n              <div class='col-lg-6 mr-auto mb40 wow zoomInUp' data-wow-delay=\".1s\">\n                <img src=\"./assets/images/vcnt-decentralized.png\" alt=\"\" class=\"img-fluid center-img\">\n              </div>\n          </div>\n      </div>\n  </div><!--feature-->\n</section>\n"

/***/ }),

/***/ "./src/app/_templates/whyus/whyus.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/_templates/whyus/whyus.component.ts ***!
  \*****************************************************/
/*! exports provided: WhyusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyusComponent", function() { return WhyusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhyusComponent = /** @class */ (function () {
    function WhyusComponent() {
    }
    WhyusComponent.prototype.ngOnInit = function () {
    };
    WhyusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whyus',
            template: __webpack_require__(/*! ./whyus.component.html */ "./src/app/_templates/whyus/whyus.component.html"),
            styles: [__webpack_require__(/*! ./whyus.component.css */ "./src/app/_templates/whyus/whyus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhyusComponent);
    return WhyusComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".to-bottom{\n  position: absolute;\n  bottom: 0;\n}\n\n.to-left{\n  position: absolute;\n  left: 0;\n}\n\n.to-front{\n  z-index: 1000;\n}\n\n.footer-custom{\n  padding-top: 50px;\n  padding-bottom: 30px;\n  background-color: #fff;\n}\n\n.vertical-center {\n  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */\n  min-height: 100vh; /* These two lines are counted as one :-)       */\n\n  display: flex;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preloader\">\n    <div id=\"preloader-inner\"></div>\n</div><!--/preloader-->\n\n<!-- Navigation menu -->\n  <app-navigation></app-navigation>\n\n<!-- Default view -->\n  <app-home></app-home>\n\n<!-- All views -->\n<main class=\"main-content\">\n    <app-kpis></app-kpis>\n    <app-whyus></app-whyus>\n    <app-integration></app-integration>\n    <app-users></app-users>\n    <app-documentation></app-documentation>\n</main><!--main-content-->\n\n<footer class=\"footer-custom\">\n  <app-footer></app-footer>\n</footer>\n\n<!--back to top-->\n<a href=\"#\" class=\"back-to-top\" id=\"back-to-top\"><i class=\"icon-chevron-up\"></i></a>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vicinityh2020';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _templates_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_templates/footer/footer.component */ "./src/app/_templates/footer/footer.component.ts");
/* harmony import */ var _templates_whyus_whyus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_templates/whyus/whyus.component */ "./src/app/_templates/whyus/whyus.component.ts");
/* harmony import */ var _templates_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_templates/home/home.component */ "./src/app/_templates/home/home.component.ts");
/* harmony import */ var _templates_integration_integration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_templates/integration/integration.component */ "./src/app/_templates/integration/integration.component.ts");
/* harmony import */ var _templates_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_templates/documentation/documentation.component */ "./src/app/_templates/documentation/documentation.component.ts");
/* harmony import */ var _templates_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_templates/users/users.component */ "./src/app/_templates/users/users.component.ts");
/* harmony import */ var _templates_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_templates/navigation/navigation.component */ "./src/app/_templates/navigation/navigation.component.ts");
/* harmony import */ var _templates_kpis_kpis_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_templates/kpis/kpis.component */ "./src/app/_templates/kpis/kpis.component.ts");
/* harmony import */ var _services_httprequest_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/httprequest.service */ "./src/app/_services/httprequest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _templates_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _templates_whyus_whyus_component__WEBPACK_IMPORTED_MODULE_5__["WhyusComponent"],
                _templates_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _templates_integration_integration_component__WEBPACK_IMPORTED_MODULE_7__["IntegrationComponent"],
                _templates_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_8__["DocumentationComponent"],
                _templates_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
                _templates_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _templates_kpis_kpis_component__WEBPACK_IMPORTED_MODULE_11__["KpisComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [
                _services_httprequest_service__WEBPACK_IMPORTED_MODULE_12__["httprequestService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jorgealmela/Documents/projects/vicinity/vicinity_landing_page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map