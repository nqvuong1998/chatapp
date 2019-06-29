(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-notifications-notifications-module"],{

/***/ "./src/app/components/notifications/notifications-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/notifications/notifications-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function() { return NotificationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.component */ "./src/app/components/notifications/notifications.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"],
    },
];
var NotificationsRoutingModule = /** @class */ (function () {
    function NotificationsRoutingModule() {
    }
    NotificationsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NotificationsRoutingModule);
    return NotificationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/notifications/notifications.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".material-icons {\n  color: #64b5f6 !important;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.time {\n  margin-bottom: 10px !important;\n  font-style: italic;\n}\n\n.text {\n  text-align: center;\n  font-size: 18px !important;\n}\n\n.disabled {\n  color: #c0c0c0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGVkIHtcbiAgY29sb3I6ICNjMGMwYzAgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n  <div class=\"row\">\n    <div class=\"col s12 m4 l3\">\n      <app-side></app-side>\n    </div>\n\n    <div class=\"col s12 m8 l9\">\n      <ul class=\"collection col s12 m10\" *ngIf=\"notifications.length > 0\">\n        <li class=\"collection-item avatar\" *ngFor=\"let data of notifications\">\n          <img class=\"circle\" src=\"http://res.cloudinary.com/vuongnguyen/image/upload/v{{data.senderId.picVersion}}/{{data.senderId.picId}}\"\n            alt=\"\">\n          <span class=\"title\">{{data.message}}</span>\n          <a class=\"secondary-content\">\n            <i *ngIf=\"!data.read\" class=\"material-icons\">brightness_1</i>\n            <i *ngIf=\"data.read\" class=\"material-icons\">panorama_fish_eye</i>\n          </a>\n          <p class=\"time\">{{TimeFromNow(data.created)}}</p>\n          <div>\n            <i class=\"material-icons\" (click)=\"MarkNotication(data)\" [ngClass]=\"data.read ? 'disabled': 'notDisbled'\">\n              check\n            </i>\n            <i class=\"material-icons\" (click)=\"DeleteNotification(data)\">\n              delete_forever\n            </i>\n          </div>\n        </li>\n      </ul>\n      <div class=\"row\" *ngIf=\"notifications.length <= 0\">\n        <h3 class=\"text\">You have no notification</h3>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(tokenService, usersService) {
        this.tokenService = tokenService;
        this.usersService = usersService;
        this.notifications = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()('/');
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.tokenService.GetPayload();
        this.GetUser();
        this.socket.on('refreshPage', function () {
            _this.GetUser();
        });
    };
    NotificationsComponent.prototype.GetUser = function () {
        var _this = this;
        this.usersService.GetUserById(this.user._id).subscribe(function (data) {
            _this.notifications = data.result.notifications.reverse();
        });
    };
    NotificationsComponent.prototype.MarkNotication = function (data) {
        var _this = this;
        this.usersService.MarkNotification(data._id).subscribe(function (value) {
            _this.socket.emit('refresh', {});
        });
    };
    NotificationsComponent.prototype.DeleteNotification = function (value) {
        var _this = this;
        this.usersService.MarkNotification(value._id, true).subscribe(function (data) {
            console.log(data);
            _this.socket.emit('refresh', {});
        });
    };
    NotificationsComponent.prototype.TimeFromNow = function (time) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(time).fromNow();
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/components/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/components/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _services_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/components/notifications/notifications.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/notifications/notifications.module.ts ***!
  \******************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/components/notifications/notifications-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_1__["NotificationsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                _notifications_routing_module__WEBPACK_IMPORTED_MODULE_4__["NotificationsRoutingModule"]
            ]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-notifications-notifications-module.js.map