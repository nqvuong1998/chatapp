(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-chat-chat-module"],{

/***/ "./src/app/components/chat/chat-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/chat/chat-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.component */ "./src/app/components/chat/chat.component.ts");
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
        component: _chat_component__WEBPACK_IMPORTED_MODULE_0__["ChatComponent"]
    }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChatRoutingModule);
    return ChatRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/chat/chat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatRow {\n  bottom: 0 !important;\n  margin-bottom: 0px !important;\n  position: relative;\n  max-height: 700px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDZCQUE2QjtDQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdFJvdyB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar (onlineUsers)=\"online($event)\"></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n    <div class=\"row chatRow\">\n        <div class=\"col s12\">\n            <app-message [users]=\"online_users\"></app-message>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.online_users = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.tabElement = document.querySelector('.nav-content');
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        this.tabElement.style.display = 'none';
    };
    ChatComponent.prototype.online = function (event) {
        this.online_users = event;
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/chat/chat.module.ts ***!
  \************************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_emoji_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-emoji-picker */ "./node_modules/ng2-emoji-picker/esm5/ng2-emoji-picker.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/components/chat/chat-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../message/message.component */ "./src/app/components/message/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatRoutingModule"],
                ng2_emoji_picker__WEBPACK_IMPORTED_MODULE_2__["EmojiPickerModule"].forRoot()
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/components/message/message.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/message/message.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar-footer {\n  overflow: visible !important;\n}\n.bar-footer textarea {\n  resize: none;\n  height: 25px;\n}\nimg.profile-pic {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 10px;\n}\nimg.profile-pic.left {\n  left: 10px;\n}\nimg.profile-pic.right {\n  right: 10px;\n}\nimg.imgMsg {\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100px;\n}\n.message {\n  font-size: 16px;\n}\n.message-detail {\n  white-space: nowrap;\n  font-size: 14px;\n}\n.message-wrapper {\n  position: relative;\n  margin-top: 10px;\n  z-index: 1000 !important;\n}\n.chat-bubble {\n  border-radius: 10px;\n  display: inline-block;\n  padding: 10px 18px;\n  position: relative;\n  margin: 10px;\n  max-width: 80%;\n}\n.chat-bubble:before {\n  content: '\\00a0';\n  display: block;\n  height: 16px;\n  width: 9px;\n  position: absolute;\n  bottom: -7.5px;\n}\n.chat-bubble.left {\n  background: #f1f0f0;\n  float: left;\n  margin-left: 7px;\n}\n.chat-bubble.left:before {\n  background: #f1f0f0;\n  left: 10px;\n  z-index: -1;\n  border-radius: 10px;\n  -webkit-transform: rotate(70deg) skew(5deg);\n  transform: rotate(70deg) skew(5deg);\n}\n.chat-bubble.right {\n  background: #64b5f6;\n  color: #fff;\n  float: right;\n  margin-right: 7px;\n}\n.chat-bubble.right:before {\n  z-index: -1;\n  background: #64b5f6;\n  border-radius: 10px;\n  right: 10px;\n  -webkit-transform: rotate(118deg) skew(-5deg);\n  transform: rotate(118deg) skew(-5deg);\n}\n.chat-bubble.right a.autolinker {\n  color: #fff;\n  font-weight: bold;\n}\n.user-messages-top-icon {\n  font-size: 28px;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n  right: 5px;\n}\n.msg-header-username {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n}\ninput,\ntextarea,\n.item-input,\n.item-input-wrapper {\n  background: #64b5f6;\n  height: 38px;\n}\n.text-input {\n  background: transparent !important;\n}\n.bold {\n  font-weight: bold;\n  color: white;\n}\n.boldLeft {\n  color: red;\n}\n.cf {\n  clear: both !important;\n}\na.autolinker {\n  color: #3b88c3;\n  text-decoration: none;\n}\n.rowDiv {\n  background: #ffffff !important;\n  height: 61vh !important;\n  max-height: 62vh !important;\n  overflow-y: scroll !important;\n  top: 0px;\n  margin-top: -20px !important;\n}\n.footerDiv {\n  height: 38px;\n  bottom: 0px !important;\n}\n.inputField {\n  height: 38px;\n}\nemoji-picker {\n  width: 100% !important;\n  right: 6px;\n}\nemoji-content {\n  width: 100% !important;\n}\n.emojiBtn {\n  font-size: 20px !important;\n  background: inherit !important;\n  border: none !important;\n  text-align: center !important;\n  margin-left: -10px !important;\n}\n.emojiDiv {\n  width: 40px !important;\n  margin-bottom: 0px !important;\n}\n.imgCircle {\n  width: 50px !important;\n  height: 50px !important;\n  border-radius: 50% !important;\n  margin: 0 auto !important;\n  top: 20px !important;\n}\n.imgCol {\n  width: 50px !important;\n  margin-left: 20px !important;\n  margin-top: 5px !important;\n}\n.nameCol span {\n  font-size: 25px;\n  font-weight: 600 !important;\n  color: white !important;\n  padding: 0px !important;\n}\n.nameCol {\n  margin-left: 28px !important;\n  height: auto !important;\n  width: auto !important;\n  padding: 0px !important;\n}\n.card {\n  height: 60px;\n}\n.inputBox {\n  color: white;\n  padding: 10px;\n}\n.input-field {\n  top: -9px !important;\n}\n.inputRow {\n  margin: 0px 10px 0px 10px !important;\n}\n.isOnline {\n  color: white;\n  margin-top: -5px !important;\n  padding: 0px !important;\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtDQUMxQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNENBQTRDO0VBQzVDLG9DQUFvQztDQUNyQztBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osOENBQThDO0VBQzlDLHNDQUFzQztDQUN2QztBQUNEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0NBQ1o7QUFDRDtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWDtBQUNEOzs7O0VBSUUsb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsbUNBQW1DO0NBQ3BDO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtDQUN2QjtBQUVEO0VBQ0UsK0JBQStCO0VBQy9CLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCw2QkFBNkI7Q0FDOUI7QUFFRDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7Q0FDeEI7QUFFRDtFQUNFLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsdUJBQXVCO0NBQ3hCO0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsOEJBQThCO0NBQy9CO0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsOEJBQThCO0NBQy9CO0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIscUJBQXFCO0NBQ3RCO0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLDJCQUEyQjtDQUM1QjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsd0JBQXdCO0NBQ3pCO0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix3QkFBd0I7Q0FDekI7QUFFRDtFQUNFLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7Q0FDZjtBQUVEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFFRDtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyLWZvb3RlciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG4uYmFyLWZvb3RlciB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5pbWcucHJvZmlsZS1waWMge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuaW1nLnByb2ZpbGUtcGljLmxlZnQge1xuICBsZWZ0OiAxMHB4O1xufVxuaW1nLnByb2ZpbGUtcGljLnJpZ2h0IHtcbiAgcmlnaHQ6IDEwcHg7XG59XG5pbWcuaW1nTXNnIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWVzc2FnZS1kZXRhaWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tZXNzYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDAgIWltcG9ydGFudDtcbn1cbi5jaGF0LWJ1YmJsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG4uY2hhdC1idWJibGU6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMDBhMCc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiA5cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNy41cHg7XG59XG4uY2hhdC1idWJibGUubGVmdCB7XG4gIGJhY2tncm91bmQ6ICNmMWYwZjA7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuLmNoYXQtYnViYmxlLmxlZnQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2YxZjBmMDtcbiAgbGVmdDogMTBweDtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpIHNrZXcoNWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcwZGVnKSBza2V3KDVkZWcpO1xufVxuLmNoYXQtYnViYmxlLnJpZ2h0IHtcbiAgYmFja2dyb3VuZDogIzY0YjVmNjtcbiAgY29sb3I6ICNmZmY7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG4uY2hhdC1idWJibGUucmlnaHQ6YmVmb3JlIHtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6ICM2NGI1ZjY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExOGRlZykgc2tldygtNWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDExOGRlZykgc2tldygtNWRlZyk7XG59XG4uY2hhdC1idWJibGUucmlnaHQgYS5hdXRvbGlua2VyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnVzZXItbWVzc2FnZXMtdG9wLWljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG4gIHJpZ2h0OiA1cHg7XG59XG4ubXNnLWhlYWRlci11c2VybmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG5pbnB1dCxcbnRleHRhcmVhLFxuLml0ZW0taW5wdXQsXG4uaXRlbS1pbnB1dC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogIzY0YjVmNjtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuLnRleHQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJvbGRMZWZ0IHtcbiAgY29sb3I6IHJlZDtcbn1cbi5jZiB7XG4gIGNsZWFyOiBib3RoICFpbXBvcnRhbnQ7XG59XG5hLmF1dG9saW5rZXIge1xuICBjb2xvcjogIzNiODhjMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucm93RGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYxdmggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNjJ2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgdG9wOiAwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXJEaXYge1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuXG5lbW9qaS1waWNrZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICByaWdodDogNnB4O1xufVxuZW1vamktY29udGVudCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5lbW9qaUJ0biB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lbW9qaURpdiB7XG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaW1nQ2lyY2xlIHtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB0b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmltZ0NvbCB7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4ubmFtZUNvbCBzcGFuIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5hbWVDb2wge1xuICBtYXJnaW4tbGVmdDogMjhweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uaW5wdXRCb3gge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIHRvcDogLTlweCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRSb3cge1xuICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pc09ubGluZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogLTVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/message/message.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\" style=\"margin-bottom: 5px \">\n    <div class=\"row\">\n      <div class=\"card\">\n        <div class=\"valign-wrapper\" style=\"background: #64b5f6 !important; margin-bottom: 200px \">\n          <div class=\"col s12 imgCol\">\n            <img *ngIf=\"receiverData\" src=\"http://res.cloudinary.com/vuongnguyen/image/upload/v{{receiverData.picVersion}}/{{receiverData.picId}}\"\n              class=\"imgCircle\">\n          </div>\n          <div class=\"row\" style=\"height: 60px\">\n            <div class=\"col s10 nameCol\">\n              <span>\n                {{receiver}}\n                <p class=\"isOnline\" *ngIf=\"isOnline\">Online</p>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col s12 rowDiv\" ngx-auto-scroll lock-y-offset=\"10\" observe-attributes>\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"message-wrspper\" *ngFor=\"let message of messagesArray\">\n          <div class=\"left\" *ngIf=\"user.username !== receiver && user.username !== message.sendername\">\n            <div class=\"chat-bubble left slide-left\">\n              <div class=\"message\">{{message.body}}</div>\n            </div>\n          </div>\n\n          <div class=\"right\" *ngIf=\"user.username === message.sendername\">\n            <div class=\"chat-bubble right slide-right\">\n              <div class=\"message\">{{message.body}}</div>\n            </div>\n          </div>\n\n          <div class=\"cf\"></div>\n        </div>\n        <div class=\"left\" *ngIf=\"typing\">\n          <div class=\"chat-bubble left slide-left\">\n            <div class=\"message\">\n              {{receiver}} is typing...\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col s12\" style=\"margin: 0px\">\n    <div class=\"row\">\n      <div class=\"card\" style=\"height: 55px\">\n        <div class=\"inputRow\">\n          <form (ngSubmit)=\"SendMessage()\">\n            <div class=\"input-field inputField col s10\">\n              <textarea name=\"message\" [(ngModel)]=\"message\" (keypress)=\"IsTyping()\" class=\"materialize-textarea inputBox\"></textarea>\n            </div>\n            <div class=\"input-field col s1 emojiDiv\">\n              <button class=\"emojiBtn\" (click)=\"Toggled()\">😄</button>\n\n              <div class=\"emoji-content-editable\" (emojiPickerCaretEmitter)=\"HandleCurrentCaret($event)\" (input)=\"content = $event.target.textContent\"\n                [textContent]=\"content\" contenteditable=\"true\"></div>\n\n              <i class=\"emoji-toggle-button imgBtn\" [(emojiPickerIf)]=\"toggled\" [emojiPickerPreserveSelection]=\"false\" [emojiPickerDirection]=\"direction\"\n                [emojiPickerAutofocus]=\"true\" (emojiPickerSelect)=\"HandleSelection($event)\"></i>\n            </div>\n            <div class=\"input-field col s1\">\n              <button class=\"suffix btn\">Send</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessageComponent = /** @class */ (function () {
    function MessageComponent(tokenService, msgService, route, usersService) {
        this.tokenService = tokenService;
        this.msgService = msgService;
        this.route = route;
        this.usersService = usersService;
        this.messagesArray = [];
        this.typing = false;
        this.isOnline = false;
        this.direction = Math.random() > 0.5 ? (Math.random() > 0.5 ? 'top' : 'bottom') : Math.random() > 0.5 ? 'right' : 'left';
        this.toggled = false;
        this.content = ' ';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()('/');
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.tokenService.GetPayload();
        this.route.params.subscribe(function (params) {
            _this.receiver = params.name;
            _this.GetUserByUsername(_this.receiver);
            _this.socket.on('refreshPage', function () {
                _this.GetUserByUsername(_this.receiver);
            });
        });
        this.socket.on('is_typing', function (data) {
            if (data.sender === _this.receiver) {
                _this.typing = true;
            }
        });
        this.socket.on('has_stopped_typing', function (data) {
            if (data.sender === _this.receiver) {
                _this.typing = false;
            }
        });
    };
    MessageComponent.prototype.ngOnChanges = function (changes) {
        var title = document.querySelector('.nameCol');
        if (changes.users.currentValue.length > 0) {
            var result = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.indexOf(changes.users.currentValue, this.receiver);
            if (result > -1) {
                this.isOnline = true;
                title.style.marginTop = '10px';
            }
            else {
                this.isOnline = false;
                title.style.marginTop = '20px';
            }
        }
    };
    MessageComponent.prototype.ngAfterViewInit = function () {
        var params = {
            room1: this.user.username,
            room2: this.receiver
        };
        this.socket.emit('join chat', params);
    };
    MessageComponent.prototype.GetUserByUsername = function (name) {
        var _this = this;
        this.usersService.GetUserByName(name).subscribe(function (data) {
            _this.receiverData = data.result;
            _this.GetMessages(_this.user._id, data.result._id);
        });
    };
    MessageComponent.prototype.GetMessages = function (senderId, receiverId) {
        var _this = this;
        this.msgService.GetAllMessages(senderId, receiverId).subscribe(function (data) {
            _this.messagesArray = data.messages.message;
        });
    };
    MessageComponent.prototype.SendMessage = function () {
        var _this = this;
        if (this.message) {
            this.msgService
                .SendMessage(this.user._id, this.receiverData._id, this.receiverData.username, this.message)
                .subscribe(function (data) {
                _this.socket.emit('refresh', {});
                _this.message = '';
            });
        }
    };
    MessageComponent.prototype.HandleSelection = function (event) {
        this.content =
            this.content.slice(0, this._lastCaretEvent.caretOffset) +
                event.char +
                this.content.slice(this._lastCaretEvent.caretOffset);
        this.eventMock = JSON.stringify(event);
        this.message = this.content;
        this.toggled = !this.toggled;
        this.content = '';
    };
    MessageComponent.prototype.HandleCurrentCaret = function (event) {
        this._lastCaretEvent = event;
        this.eventPosMock = "{ caretOffset : " + event.caretOffset + ", caretRange: Range{...}, textContent: " + event.textContent + " }";
    };
    MessageComponent.prototype.Toggled = function () {
        this.toggled = !this.toggled;
    };
    MessageComponent.prototype.IsTyping = function () {
        var _this = this;
        this.socket.emit('start_typing', {
            sender: this.user.username,
            receiver: this.receiver
        });
        if (this.typingMessage) {
            clearTimeout(this.typingMessage);
        }
        this.typingMessage = setTimeout(function () {
            _this.socket.emit('stop_typing', {
                sender: _this.user.username,
                receiver: _this.receiver
            });
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "users", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/components/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-chat-chat-module.js.map