(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-people-people-module"],{

/***/ "./src/app/components/people/people-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/people/people-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PeopleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleRoutingModule", function() { return PeopleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _people_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people.component */ "./src/app/components/people/people.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _people_component__WEBPACK_IMPORTED_MODULE_2__["PeopleComponent"],
    },
];
var PeopleRoutingModule = /** @class */ (function () {
    function PeopleRoutingModule() {
    }
    PeopleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PeopleRoutingModule);
    return PeopleRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/people/people.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/people/people.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-image {\n  height: 200px;\n  border: 2px solid #e7e7e7;\n}\n\n.more {\n  margin-right: -18px !important;\n}\n\n.dropdown-content {\n  margin: 0;\n  display: none;\n  min-width: 150px;\n  max-height: auto;\n  margin-left: -1px;\n  overflow: hidden;\n  opacity: 0;\n  position: absolute;\n  white-space: nowrap;\n  z-index: 1;\n  will-change: width, height;\n}\n\n.collection-item {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.card-action {\n  height: 179px !important;\n  border: 1px solid #e7e7e7;\n}\n\n.imgDiv {\n  display: block;\n  position: relative;\n}\n\n.imgCircle {\n  width: 150px !important;\n  height: 150px !important;\n  border-radius: 50% !important;\n  margin: 0 auto !important;\n  top: 20px !important;\n}\n\n.active {\n  width: 350px !important;\n  height: 350px !important;\n  border-radius: none !important;\n  margin: -150px 0px 0px 120px !important;\n}\n\n.fa-circle {\n  color: rgb(21, 206, 21) !important;\n  font-size: 15px !important;\n}\n\n.following {\n  color: #64b5f6 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQix3Q0FBd0M7Q0FDekM7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWFnZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlN2U3ZTc7XG59XG5cbi5tb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMThweCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LWhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgei1pbmRleDogMTtcbiAgd2lsbC1jaGFuZ2U6IHdpZHRoLCBoZWlnaHQ7XG59XG5cbi5jb2xsZWN0aW9uLWl0ZW0ge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYWN0aW9uIHtcbiAgaGVpZ2h0OiAxNzlweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xufVxuXG4uaW1nRGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltZ0NpcmNsZSB7XG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB0b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSB7XG4gIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAtMTUwcHggMHB4IDBweCAxMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZmEtY2lyY2xlIHtcbiAgY29sb3I6IHJnYigyMSwgMjA2LCAyMSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb2xsb3dpbmcge1xuICBjb2xvcjogIzY0YjVmNiAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/people/people.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/people/people.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar (onlineUsers)=\"online($event)\"></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n    <div class=\"row\">\n        <div class=\"col s12 m4 l3\">\n            <app-side></app-side>\n        </div>\n\n        <div class=\"col s12 m8 l9\">\n            <div class=\"row\">\n                <div class=\"col s12 m6 l4 cardDiv\" *ngFor=\"let user of users\">\n                    <div class=\"card\">\n                        <a (click)=\"ViewUser(user)\">\n                            <div class=\"card-image imgDiv\">\n                                <img class=\"imgCircle responsive-img\" src=\"http://res.cloudinary.com/vuongnguyen/image/upload/v{{user.picVersion}}/{{user.picId}}\">\n                            </div>\n                        </a>\n                        <div class=\"card-action\">\n                            <h3 class=\"card-title\">\n                                {{user.username}}\n                                <i class=\"fa fa-circle\" *ngIf=\"CheckIfOnline(user.username)\"></i>\n                            </h3>\n                            <p *ngIf=\"user.city\">{{user.city}}, {{user.country}}</p>\n                            <button class=\"btn\" *ngIf=\"!CheckInArray(userArr, user._id)\" (click)=\"FollowUser(user)\">Follow</button>\n                            <button class=\"btn disabled following\" *ngIf=\"CheckInArray(userArr, user._id)\">Following</button>\n                            <a class=\"secondary-content\" [routerLink]=\"['/chat', user.username]\">\n                                <i class=\"material-icons\">chat</i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/people/people.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/people/people.component.ts ***!
  \*******************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(usersService, tokenService, router) {
        this.usersService = usersService;
        this.tokenService = tokenService;
        this.router = router;
        this.users = [];
        this.userArr = [];
        this.onlineusers = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()('/');
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.tokenService.GetPayload();
        this.GetUsers();
        this.GetUser();
        this.socket.on('refreshPage', function () {
            _this.GetUsers();
            _this.GetUser();
        });
    };
    PeopleComponent.prototype.GetUsers = function () {
        var _this = this;
        this.usersService.GetAllUsers().subscribe(function (data) {
            lodash__WEBPACK_IMPORTED_MODULE_3___default.a.remove(data.result, { username: _this.loggedInUser.username });
            _this.users = data.result;
        });
    };
    PeopleComponent.prototype.GetUser = function () {
        var _this = this;
        this.usersService.GetUserById(this.loggedInUser._id).subscribe(function (data) {
            _this.userArr = data.result.following;
        });
    };
    PeopleComponent.prototype.FollowUser = function (user) {
        var _this = this;
        this.usersService.FollowUser(user._id).subscribe(function (data) {
            _this.socket.emit('refresh', {});
        });
    };
    PeopleComponent.prototype.ViewUser = function (user) {
        var _this = this;
        this.router.navigate([user.username]);
        if (this.loggedInUser.username !== user.username) {
            this.usersService.ProfileNotifications(user._id).subscribe(function (data) {
                _this.socket.emit('refresh', {});
            }, function (err) { return console.log(err); });
        }
    };
    PeopleComponent.prototype.CheckInArray = function (arr, id) {
        var result = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(arr, ['userFollowed._id', id]);
        if (result) {
            return true;
        }
        else {
            return false;
        }
    };
    PeopleComponent.prototype.online = function (event) {
        this.onlineusers = event;
    };
    PeopleComponent.prototype.CheckIfOnline = function (name) {
        var result = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.indexOf(this.onlineusers, name);
        if (result > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    PeopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/components/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/components/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _services_token_service__WEBPACK_IMPORTED_MODULE_0__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/components/people/people.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/people/people.module.ts ***!
  \****************************************************/
/*! exports provided: PeopleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleModule", function() { return PeopleModule; });
/* harmony import */ var _people_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people.component */ "./src/app/components/people/people.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _people_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people-routing.module */ "./src/app/components/people/people-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PeopleModule = /** @class */ (function () {
    function PeopleModule() {
    }
    PeopleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_people_component__WEBPACK_IMPORTED_MODULE_0__["PeopleComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _people_routing_module__WEBPACK_IMPORTED_MODULE_3__["PeopleRoutingModule"]
            ]
        })
    ], PeopleModule);
    return PeopleModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-people-people-module.js.map