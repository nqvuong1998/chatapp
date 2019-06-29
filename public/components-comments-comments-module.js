(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-comments-comments-module"],{

/***/ "./src/app/components/comments/comments-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/comments/comments-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CommentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsRoutingModule", function() { return CommentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.component */ "./src/app/components/comments/comments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _comments_component__WEBPACK_IMPORTED_MODULE_2__["CommentsComponent"],
    },
];
var CommentsRoutingModule = /** @class */ (function () {
    function CommentsRoutingModule() {
    }
    CommentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CommentsRoutingModule);
    return CommentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/comments/comments.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/comments/comments.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".postDiv {\n  background-color: #64b5f6;\n}\n\nform {\n  background-color: #fff;\n}\n\n.formDiv {\n  margin: 0px 20px 0px 20px;\n}\n\n.addImageBtn {\n  margin-bottom: 5px;\n}\n\n.postBtn {\n  margin-bottom: 5px;\n}\n\n.title {\n  font-weight: bold;\n  color: #64b5f6;\n}\n\n.time {\n  font-size: 14px;\n  color: #666565;\n}\n\n.postComment {\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0RGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcbn1cblxuZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5mb3JtRGl2IHtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMjBweDtcbn1cblxuLmFkZEltYWdlQnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucG9zdEJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNjRiNWY2O1xufVxuXG4udGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY1NjU7XG59XG5cbi5wb3N0Q29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/comments/comments.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/comments/comments.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n    <div class=\"row\">\n        <div class=\"col s12 m4 l3\">\n            <app-side></app-side>\n        </div>\n\n        <div class=\"col s12 m8 l9\">\n            <div class=\"col s12 m10\">\n                <div class=\"row\">\n                    <div class=\"card\">\n                        <ul class=\"collection\">\n                            <li class=\"collection-item\">\n                                <span class=\"post\">{{post}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"card\">\n                        <div class=\"card postDiv\">\n                            <div class=\"card-content\">\n                                <form [formGroup]=\"commmentForm\" (ngSubmit)=\"AddComment()\">\n                                    <div class=\"formDiv\">\n                                        <textarea formControlName=\"comment\" class=\"materialize-textarea\"></textarea>\n                                        <button class=\"btn postBtn\" [disabled]=\"!commmentForm.valid\">\n                                            Add Comment\n                                        </button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <ul class=\"collection col s12 m10\" *ngFor=\"let comment of commentsArray\">\n                <li class=\"collection-item avatar\">\n                    <img class=\"circle\" src=\"http://placehold.it/50x50\">\n                    <span class=\"title\">{{comment.username}}</span>\n                    <p class=\"time\">{{TimeFromNow(comment.createdAt)}}</p>\n                    <p class=\"postComment\">{{comment.comment}}</p>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/comments/comments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(fb, postService, route) {
        this.fb = fb;
        this.postService = postService;
        this.route = route;
        this.commentsArray = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()('/');
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolbarElement = document.querySelector('.nav-content');
        this.postId = this.route.snapshot.paramMap.get('id');
        this.init();
        this.GetPost();
        this.socket.on('refreshPage', function (data) {
            _this.GetPost();
        });
    };
    CommentsComponent.prototype.init = function () {
        this.commmentForm = this.fb.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CommentsComponent.prototype.ngAfterViewInit = function () {
        this.toolbarElement.style.display = 'none';
    };
    CommentsComponent.prototype.AddComment = function () {
        var _this = this;
        this.postService.addComment(this.postId, this.commmentForm.value.comment).subscribe(function (data) {
            _this.socket.emit('refresh', {});
            _this.commmentForm.reset();
        });
    };
    CommentsComponent.prototype.GetPost = function () {
        var _this = this;
        this.postService.getPost(this.postId).subscribe(function (data) {
            _this.post = data.post.post;
            _this.commentsArray = data.post.comments.reverse();
        });
    };
    CommentsComponent.prototype.TimeFromNow = function (time) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(time).fromNow();
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/components/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/components/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_post_service__WEBPACK_IMPORTED_MODULE_0__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/components/comments/comments.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/comments/comments.module.ts ***!
  \********************************************************/
/*! exports provided: CommentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsModule", function() { return CommentsModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _comments_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments-routing.module */ "./src/app/components/comments/comments-routing.module.ts");
/* harmony import */ var _comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments.component */ "./src/app/components/comments/comments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CommentsModule = /** @class */ (function () {
    function CommentsModule() {
    }
    CommentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_comments_component__WEBPACK_IMPORTED_MODULE_4__["CommentsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                _comments_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommentsRoutingModule"]
            ]
        })
    ], CommentsModule);
    return CommentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-comments-comments-module.js.map