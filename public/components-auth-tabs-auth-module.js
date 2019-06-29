(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-auth-tabs-auth-module"],{

/***/ "./src/app/components/auth-tabs/auth-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/auth-tabs/auth-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-tabs.component */ "./src/app/components/auth-tabs/auth-tabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _auth_tabs_component__WEBPACK_IMPORTED_MODULE_2__["AuthTabsComponent"]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/auth-tabs/auth-tabs.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/auth-tabs/auth-tabs.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bodyDiv {\n  height: 100vh;\n}\n\ndiv.bodyContainer {\n  margin-top: 50px !important;\n}\n\n.tabs a {\n  color: #64b5f6;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.tabs .active {\n  background: inherit !important;\n}\n\n.auth-content {\n  height: 515px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoLXRhYnMvYXV0aC10YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLHlCQUF5QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC10YWJzL2F1dGgtdGFicy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHlEaXYge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5kaXYuYm9keUNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLnRhYnMgYSB7XG4gIGNvbG9yOiAjNjRiNWY2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFicyAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4uYXV0aC1jb250ZW50IHtcbiAgaGVpZ2h0OiA1MTVweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/auth-tabs/auth-tabs.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/auth-tabs/auth-tabs.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bodyDiv card-panel blue\">\n  <div class=\"container bodyContainer\">\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"card\">\n          <div class=\"card-tabs\">\n            <ul class=\"tabs tabs-fixed-width\">\n              <li class=\"tab\">\n                <a href=\"#login\" class=\"active\">Chat App Login</a>\n              </li>\n              <li class=\"tab\">\n                <a href=\"#signup\">Chat App Sign Up</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"card-content\">\n            <p style=\"text-align: center; font-size: 20px\">\n              Welcome to Chat App\n            </p>\n          </div>\n          <div class=\"card-content auth-content\">\n            <div id=\"login\">\n              <app-login></app-login>\n            </div>\n            <div id=\"signup\">\n              <app-signup></app-signup>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/auth-tabs/auth-tabs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/auth-tabs/auth-tabs.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTabsComponent", function() { return AuthTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthTabsComponent = /** @class */ (function () {
    function AuthTabsComponent() {
    }
    AuthTabsComponent.prototype.ngOnInit = function () {
        var tabs = document.querySelector('.tabs');
        materialize_css__WEBPACK_IMPORTED_MODULE_1__["Tabs"].init(tabs, {});
    };
    AuthTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-tabs',
            template: __webpack_require__(/*! ./auth-tabs.component.html */ "./src/app/components/auth-tabs/auth-tabs.component.html"),
            styles: [__webpack_require__(/*! ./auth-tabs.component.css */ "./src/app/components/auth-tabs/auth-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthTabsComponent);
    return AuthTabsComponent;
}());



/***/ }),

/***/ "./src/app/components/auth-tabs/auth.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/auth-tabs/auth.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/components/auth-tabs/auth-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-tabs.component */ "./src/app/components/auth-tabs/auth-tabs.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [
                _auth_tabs_component__WEBPACK_IMPORTED_MODULE_5__["AuthTabsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
            ],
            providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#panel {\n  background-color: #ffffff;\n}\n\n#panel {\n  padding: 0px;\n}\n\n#loginbtn {\n  float: right;\n  margin-right: 10px;\n  background-color: #64b5f6;\n  font-weight: 500;\n}\n\n#title {\n  background-color: #64b5f6;\n  color: white;\n  padding: 8px;\n  margin-top: 0px;\n  font-weight: 700;\n  text-align: center;\n}\n\nform {\n  padding: 0px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  margin: 0px 20px 0px 20px;\n}\n\n.error {\n  color: red;\n}\n\n.indeterminate {\n  background-color: #64b5f6 !important;\n}\n\n.input-field {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n#errorMsg {\n  background: #f6b2b5;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n}\n\n#errorMsg span {\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  left: 50%;\n  position: relative;\n  float: left;\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUNEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7O0FBRUQ7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsU0FBUztFQUNULHlDQUFpQztVQUFqQyxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuI3BhbmVsIHtcbiAgcGFkZGluZzogMHB4O1xufVxuI2xvZ2luYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4jdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb3JtIHtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNiAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4jZXJyb3JNc2cge1xuICBiYWNrZ3JvdW5kOiAjZjZiMmI1O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNlcnJvck1zZyBzcGFuIHtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col s10 offset-s1\" id=\"panel\">\n            <div class=\"progress\" *ngIf=\"showSpinner\">\n                <div class=\"indeterminate\"></div>\n            </div>\n            <h3 id=\"title\">Login</h3>\n            <div id=\"errorMsg\" *ngIf=\"errorMessage\">\n                <span>{{errorMessage}}</span>\n            </div>\n            <form class=\"col s12\" [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"loginUser()\">\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"user-name\" type=\"text\" formControlName=\"username\" autocomplete=\"off\">\n                        <label for=\"user-name\">Username</label>\n                        <span class=\"error\" *ngIf=\"!loginForm.controls['username'].valid && loginForm.controls['username'].touched\">\n                            Username is required\n                        </span>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"password\" type=\"password\" formControlName=\"password\">\n                        <label for=\"password\">Password</label>\n                        <span class=\"error\" *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].touched\">\n                            Password is required\n                        </span>\n                    </div>\n                </div>\n                <button class=\"btn waves-effect\" id=\"loginbtn\" [disabled]=\"!loginForm.valid\">\n                    Login\n                </button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, tokenService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.tokenService = tokenService;
        this.showSpinner = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.init();
    };
    LoginComponent.prototype.init = function () {
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.showSpinner = true;
        this.authService.loginUser(this.loginForm.value).subscribe(function (data) {
            _this.tokenService.SetToken(data.token);
            _this.loginForm.reset();
            setTimeout(function () {
                _this.router.navigate(['streams']);
            }, 3000);
        }, function (err) {
            _this.showSpinner = false;
            if (err.error.message) {
                _this.errorMessage = err.error.message;
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_0__["TokenService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#panel {\n  background-color: #ffffff;\n}\n#signupbtn {\n  float: right;\n  margin-right: 10px;\n  background-color: #64b5f6;\n  font-weight: 500;\n}\n#title {\n  background-color: #64b5f6;\n  color: white;\n  padding: 8px;\n  margin-top: 0px;\n  font-weight: 700;\n  text-align: center;\n}\nform {\n  padding: 0px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  margin: 0px 20px 0px 20px;\n}\n.error {\n  color: red;\n}\n.indeterminate {\n  background-color: #64b5f6 !important;\n}\n.input-field {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n#errorMsg {\n  background: #f6b2b5;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n}\n#errorMsg span {\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  left: 50%;\n  position: relative;\n  float: left;\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsV0FBVztDQUNaO0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QiwrQkFBK0I7Q0FDaEM7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsU0FBUztFQUNULHlDQUFpQztVQUFqQyxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuI3NpZ251cGJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuI3RpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9ybSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2Vycm9yTXNnIHtcbiAgYmFja2dyb3VuZDogI2Y2YjJiNTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZXJyb3JNc2cgc3BhbiB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col s10 offset-s1\" id=\"panel\">\n            <div class=\"progress\" *ngIf=\"showSpinner\">\n                <div class=\"indeterminate\"></div>\n            </div>\n            <h3 id=\"title\">Sign Up</h3>\n            <div id=\"errorMsg\" *ngIf=\"errorMessage\">\n                <span>{{errorMessage}}</span>\n            </div>\n            <form class=\"col s12\" [formGroup]=\"signupForm\" novalidate (ngSubmit)=\"signupUser()\">\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"user_name\" type=\"text\" formControlName=\"username\" autocomplete=\"off\">\n                        <label for=\"user_name\">Username</label>\n                        <span class=\"error\" *ngIf=\"!signupForm.controls['username'].valid && signupForm.controls['username'].touched\">\n                            Username is required\n                        </span>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"email\" type=\"email\" formControlName=\"email\" autocomplete=\"off\">\n                        <label for=\"email\">Email</label>\n                        <span class=\"error\" *ngIf=\"!signupForm.controls['email'].valid && signupForm.controls['email'].touched\">\n                            Email is required\n                        </span>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input id=\"pass-word\" type=\"password\" formControlName=\"password\">\n                        <label for=\"pass-word\">Password</label>\n                        <span class=\"error\" *ngIf=\"!signupForm.controls['password'].valid && signupForm.controls['password'].touched\">\n                            Password is required\n                        </span>\n                    </div>\n                </div>\n                <button class=\"btn waves-effect\" id=\"signupbtn\" [disabled]=\"!signupForm.valid\">\n                    Sign Up\n                </button>\n            </form>\n\n            <!-- <div id=\"modal1\" class=\"modal\">\n                <div class=\"modal-content\">\n                    <h4>Sign Up Error</h4>\n                    <p>A bunch of text</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <a href=\"#!\" class=\"modal-close waves-effect waves-green btn-flat\">Agree</a>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, fb, router, tokenService) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.tokenService = tokenService;
        this.showSpinner = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.init();
    };
    SignupComponent.prototype.init = function () {
        this.signupForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    SignupComponent.prototype.signupUser = function () {
        var _this = this;
        this.showSpinner = true;
        this.authService.registerUser(this.signupForm.value).subscribe(function (data) {
            _this.tokenService.SetToken(data.token);
            _this.signupForm.reset();
            setTimeout(function () {
                _this.router.navigate(['streams']);
            }, 3000);
        }, function (err) {
            _this.showSpinner = false;
            if (err.error.msg) {
                _this.errorMessage = err.error.msg[0].message;
            }
            if (err.error.message) {
                _this.errorMessage = err.error.message;
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_0__["TokenService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BASEURL = '/api/chatapp';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (body) {
        return this.http.post(BASEURL + "/register", body);
    };
    AuthService.prototype.loginUser = function (body) {
        return this.http.post(BASEURL + "/login", body);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ })

}]);
//# sourceMappingURL=components-auth-tabs-auth-module.js.map