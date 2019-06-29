(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-followers-followers-module"],{

/***/ "./src/app/components/followers/followers-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/followers/followers-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: FollowersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersRoutingModule", function() { return FollowersRoutingModule; });
/* harmony import */ var _followers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./followers.component */ "./src/app/components/followers/followers.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _followers_component__WEBPACK_IMPORTED_MODULE_0__["FollowersComponent"]
    }
];
var FollowersRoutingModule = /** @class */ (function () {
    function FollowersRoutingModule() {
    }
    FollowersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FollowersRoutingModule);
    return FollowersRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/followers/followers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/followers/followers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-image {\n  height: 200px;\n  border: 2px solid #e7e7e7;\n}\n\n.more {\n  margin-right: -18px !important;\n}\n\n.dropdown-content {\n  margin: 0;\n  display: none;\n  min-width: 150px;\n  max-height: auto;\n  margin-left: -1px;\n  overflow: hidden;\n  opacity: 0;\n  position: absolute;\n  white-space: nowrap;\n  z-index: 1;\n  will-change: width, height;\n}\n\n.collection-item {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.card-action {\n  height: 179px !important;\n  border: 1px solid #e7e7e7;\n}\n\n.imgDiv {\n  display: block;\n  position: relative;\n}\n\n.imgCircle {\n  width: 150px !important;\n  height: 150px !important;\n  border-radius: 50% !important;\n  margin: 0 auto !important;\n  top: 20px !important;\n}\n\n.active {\n  width: 350px !important;\n  height: 350px !important;\n  border-radius: none !important;\n  margin: -150px 0px 0px 120px !important;\n}\n\n.fa-circle {\n  color: rgb(21, 206, 21) !important;\n  font-size: 15px !important;\n}\n\n.following {\n  color: #64b5f6 !important;\n}\n\n.text {\n  text-align: center !important;\n  font-size: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb2xsb3dlcnMvZm9sbG93ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQix3Q0FBd0M7Q0FDekM7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9sbG93ZXJzL2ZvbGxvd2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTdlN2U3O1xufVxuXG4ubW9yZSB7XG4gIG1hcmdpbi1yaWdodDogLTE4cHggIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC1oZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHotaW5kZXg6IDE7XG4gIHdpbGwtY2hhbmdlOiB3aWR0aCwgaGVpZ2h0O1xufVxuXG4uY29sbGVjdGlvbi1pdGVtIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWFjdGlvbiB7XG4gIGhlaWdodDogMTc5cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNztcbn1cblxuLmltZ0RpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWdDaXJjbGUge1xuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmUge1xuICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogLTE1MHB4IDBweCAwcHggMTIwcHggIWltcG9ydGFudDtcbn1cblxuLmZhLWNpcmNsZSB7XG4gIGNvbG9yOiByZ2IoMjEsIDIwNiwgMjEpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uZm9sbG93aW5nIHtcbiAgY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcbn1cblxuLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/followers/followers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/followers/followers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n  <div class=\"row\">\n    <div class=\"col s12 m4 l3\">\n      <app-side></app-side>\n    </div>\n\n    <div class=\"col s12 m8 l9\">\n      <div class=\"row\" *ngIf=\"followers.length > 0\">\n        <div class=\"col s12 m6 l4 cardDiv\" *ngFor=\"let user of followers\">\n          <div class=\"card\">\n            <a>\n              <div class=\"card-image imgDiv\">\n                <img class=\"imgCircle responsive-img\" src=\"http://res.cloudinary.com/vuongnguyen/image/upload/v{{user.follower.picVersion}}/{{user.follower.picId}}\">\n              </div>\n            </a>\n            <div class=\"card-action \">\n              <h3 class=\"card-title \">\n                {{user.follower.username}}\n              </h3>\n              <p *ngIf=\"user.follower.city\">{{user.follower.city}}, {{user.follower.country}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row \" *ngIf=\"followers.length <=0 \">\n        <h4 class=\"text \">You have no follower</h4>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/followers/followers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/followers/followers.component.ts ***!
  \*************************************************************/
/*! exports provided: FollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersComponent", function() { return FollowersComponent; });
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FollowersComponent = /** @class */ (function () {
    function FollowersComponent(tokenService, usersService) {
        this.tokenService = tokenService;
        this.usersService = usersService;
        this.followers = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()('/');
    }
    FollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.tokenService.GetPayload();
        this.GetUser();
        this.socket.on('refreshPage', function () {
            _this.GetUser();
        });
    };
    FollowersComponent.prototype.GetUser = function () {
        var _this = this;
        this.usersService.GetUserById(this.user._id).subscribe(function (data) {
            _this.followers = data.result.followers;
        }, function (err) { return console.log(err); });
    };
    FollowersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-followers',
            template: __webpack_require__(/*! ./followers.component.html */ "./src/app/components/followers/followers.component.html"),
            styles: [__webpack_require__(/*! ./followers.component.css */ "./src/app/components/followers/followers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _services_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"]])
    ], FollowersComponent);
    return FollowersComponent;
}());



/***/ }),

/***/ "./src/app/components/followers/followers.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/followers/followers.module.ts ***!
  \**********************************************************/
/*! exports provided: FollowersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersModule", function() { return FollowersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _followers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./followers.component */ "./src/app/components/followers/followers.component.ts");
/* harmony import */ var _followers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./followers-routing.module */ "./src/app/components/followers/followers-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FollowersModule = /** @class */ (function () {
    function FollowersModule() {
    }
    FollowersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_followers_component__WEBPACK_IMPORTED_MODULE_2__["FollowersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _followers_routing_module__WEBPACK_IMPORTED_MODULE_3__["FollowersRoutingModule"]
            ]
        })
    ], FollowersModule);
    return FollowersModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-followers-followers-module.js.map