(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-images-images-module"],{

/***/ "./src/app/components/images/images-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/images/images-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ImagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesRoutingModule", function() { return ImagesRoutingModule; });
/* harmony import */ var _images_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.component */ "./src/app/components/images/images.component.ts");
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
        component: _images_component__WEBPACK_IMPORTED_MODULE_0__["ImagesComponent"]
    }
];
var ImagesRoutingModule = /** @class */ (function () {
    function ImagesRoutingModule() {
    }
    ImagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ImagesRoutingModule);
    return ImagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/images/images.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/images/images.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-img-wrap {\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n}\n\n.item-img-wrap img {\n  transition: all 200ms linear;\n  width: 100%;\n  height: 180px;\n}\n\n.imgCircle {\n  border-radius: 50%;\n}\n\n.imgCircle {\n  width: 160px !important;\n  height: 160px !important;\n  border-radius: 50%;\n  margin: 0 auto !important;\n}\n\n.imgBtn {\n  margin: 0 auto !important;\n  text-align: center !important;\n  margin-top: 5px !important;\n}\n\n.active {\n  width: 350px !important;\n  height: 350px !important;\n  border-radius: none !important;\n  margin: 50px 0px 0px 120px !important;\n}\n\n@media only screen and (max-width: 480px) {\n  .imgCircle {\n    width: 140px !important;\n    height: 140px !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUlFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osY0FBYztDQUNmOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QiwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixzQ0FBc0M7Q0FDdkM7O0FBRUQ7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qix5QkFBeUI7R0FDMUI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2VzL2ltYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0taW1nLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLml0ZW0taW1nLXdyYXAgaW1nIHtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuXG4uaW1nQ2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW1nQ2lyY2xlIHtcbiAgd2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTYwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG4uaW1nQnRuIHtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIHtcbiAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDUwcHggMHB4IDBweCAxMjBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5pbWdDaXJjbGUge1xuICAgIHdpZHRoOiAxNDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTQwcHggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/images/images.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/images/images.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n  <div class=\"row\">\n    <div class=\"col s12 m4 l3\">\n      <app-side></app-side>\n    </div>\n\n    <div class=\"col s12 m8 l9\">\n      <div class=\"row\">\n        <div class=\"col s6\">\n          <div class=\"file-field input-field\">\n            <div class=\"btn\">\n              <span>File</span>\n              <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" (onFileSelected)=\"OnFileSelected($event)\">\n            </div>\n            <div class=\"file-path-wrapper\">\n              <input class=\"file-path validate\" id=\"filePath\" type=\"text\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col s6\">\n          <div class=\"file-field input-field\">\n            <a class=\"waves-effect waves-light btn\" (click)=\"Upload()\">\n              <i class=\"material-icons left\">image</i>Upload Image\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 m6 l4\" *ngFor=\"let image of images\">\n          <div class=\"item-img-wrap imgDiv\">\n            <img class=\"imgCircle\" src=\"http://res.cloudinary.com/vuongnguyen/image/upload/v{{image.imgVersion}}/{{image.imgId}}\">\n            <button class=\"btn imgBtn\" (click)=\"SetProfileImage(image)\">Set AS Profile</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/images/images.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/images/images.component.ts ***!
  \*******************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'api/chatapp/upload-image';
var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(usersService, tokenService) {
        this.usersService = usersService;
        this.tokenService = tokenService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: URL,
            disableMultipart: true
        });
        this.images = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()('/');
    }
    ImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.tokenService.GetPayload();
        this.GetUser();
        this.socket.on('refreshPage', function () {
            _this.GetUser();
        });
    };
    ImagesComponent.prototype.GetUser = function () {
        var _this = this;
        this.usersService.GetUserById(this.user._id).subscribe(function (data) {
            _this.images = data.result.images;
        }, function (err) { return console.log(err); });
    };
    ImagesComponent.prototype.OnFileSelected = function (event) {
        var _this = this;
        var file = event[0];
        this.ReadAsBase64(file)
            .then(function (result) {
            _this.selectedFile = result;
        })
            .catch(function (err) { return console.log(err); });
    };
    ImagesComponent.prototype.Upload = function () {
        var _this = this;
        if (this.selectedFile) {
            this.usersService.AddImage(this.selectedFile).subscribe(function (data) {
                _this.socket.emit('refresh', {});
                var filePath = document.getElementById('filePath');
                filePath.value = '';
            }, function (err) { return console.log(err); });
        }
    };
    ImagesComponent.prototype.SetProfileImage = function (image) {
        var _this = this;
        this.usersService.SetDefaultImage(image.imgId, image.imgVersion).subscribe(function (data) {
            _this.socket.emit('refresh', {});
        }, function (err) { return console.log(err); });
    };
    ImagesComponent.prototype.ReadAsBase64 = function (file) {
        var reader = new FileReader();
        var fileValue = new Promise(function (resolve, reject) {
            reader.addEventListener('load', function () {
                resolve(reader.result);
            });
            reader.addEventListener('error', function (event) {
                reject(event);
            });
            reader.readAsDataURL(file);
        });
        return fileValue;
    };
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/components/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/components/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _services_token_service__WEBPACK_IMPORTED_MODULE_0__["TokenService"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/components/images/images.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/images/images.module.ts ***!
  \****************************************************/
/*! exports provided: ImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesModule", function() { return ImagesModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _images_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images-routing.module */ "./src/app/components/images/images-routing.module.ts");
/* harmony import */ var _images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images.component */ "./src/app/components/images/images.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ImagesModule = /** @class */ (function () {
    function ImagesModule() {
    }
    ImagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_images_component__WEBPACK_IMPORTED_MODULE_4__["ImagesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                _images_routing_module__WEBPACK_IMPORTED_MODULE_3__["ImagesRoutingModule"]
            ]
        })
    ], ImagesModule);
    return ImagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-images-images-module.js.map