(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-view-user-view-user-module"],{

/***/ "./src/app/components/view-user/view-user-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/view-user/view-user-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ViewUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserRoutingModule", function() { return ViewUserRoutingModule; });
/* harmony import */ var _view_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-user.component */ "./src/app/components/view-user/view-user.component.ts");
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
        component: _view_user_component__WEBPACK_IMPORTED_MODULE_0__["ViewUserComponent"]
    }
];
var ViewUserRoutingModule = /** @class */ (function () {
    function ViewUserRoutingModule() {
    }
    ViewUserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ViewUserRoutingModule);
    return ViewUserRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/view-user/view-user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-image {\n  height: 200px;\n}\n\n.imgDiv {\n  display: block;\n  position: relative;\n}\n\n.imgCircle {\n  width: 150px !important;\n  height: 150px !important;\n  border-radius: 50% !important;\n  margin: 0 auto !important;\n  top: 20px !important;\n}\n\n.title {\n  font-size: 21px;\n  font-weight: 700;\n  margin-bottom: 0px !important;\n  bottom: 0 !important;\n}\n\n.cityName {\n  font-size: 14px;\n  line-height: 20px;\n  margin-top: -1px !important;\n}\n\n.post {\n  font-weight: bold;\n  color: #64b5f6;\n}\n\n.postImage {\n  width: 100% !important;\n  margin: 0 auto !important;\n  left: 20px !important;\n  top: 10px !important;\n}\n\n.card_image {\n  width: 200px;\n  height: auto !important;\n}\n\n.tabs a {\n  color: #64b5f6 !important;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.tabs .col .s4 {\n  text-align: center !important;\n  margin: 0 auto !important;\n}\n\n.tabs a .indicator {\n  background-color: #64b5f6 !important;\n}\n\n.collection {\n  border: none !important;\n}\n\n.collection-item {\n  border: none !important;\n}\n\n.button {\n  background: none !important;\n  border: none !important;\n  height: 10px;\n}\n\n.deleteBtn {\n  background: red !important;\n  border: none !important;\n  height: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LXVzZXIvdmlldy11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSw4QkFBOEI7RUFDOUIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UscUNBQXFDO0NBQ3RDOztBQUVEO0VBQ0Usd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0Usd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy11c2VyL3ZpZXctdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uaW1nRGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltZ0NpcmNsZSB7XG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB0b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jaXR5TmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xcHggIWltcG9ydGFudDtcbn1cblxuLnBvc3Qge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2NGI1ZjY7XG59XG5cbi5wb3N0SW1hZ2Uge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZF9pbWFnZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi50YWJzIGEge1xuICBjb2xvcjogIzY0YjVmNiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGFicyAuY29sIC5zNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG4udGFicyBhIC5pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xsZWN0aW9uIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xsZWN0aW9uLWl0ZW0ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweDtcbn1cblxuLmRlbGV0ZUJ0biB7XG4gIGJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/view-user/view-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n\n<div class=\"container\">\n  <div class=\"col s12 m12 l10\">\n    <ul class=\"tabs\">\n      <li class=\"tab col s4\" (click)=\"ChangeTab('posts')\">\n        <a href=\"#\" class=\"active\">\n          Posts\n        </a>\n      </li>\n      <li class=\"tab col s4\" (click)=\"ChangeTab('following')\">\n        <a href=\"#\">\n          Following\n        </a>\n      </li>\n      <li class=\"tab col s4\" (click)=\"ChangeTab('followers')\">\n        <a href=\"#\">\n          Followers\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"container\" style=\"margin-top: 30px\">\n  <div class=\"row\">\n    <div class=\"col s12 m4 l3\">\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <span class=\"title\">{{name}}</span>\n          <h2 class=\"cityName\" *ngIf=\"user\">{{user.city}}, {{user.country}}</h2>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s12 m8 l9\" style=\"background: white;\">\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <div class=\"row\" *ngIf=\"postsTab\">\n            <ul class=\"collection col s12 m12 l10\" *ngFor=\"let post of posts\">\n              <li class=\"collection-item avatar\">\n                <img class=\"circle\" src=\"http://res.cloudinary.com/vuongnguyen/image/upload/v{{user.picVersion}}/{{user.picId}}\">\n                <span class=\"post\">{{post.postId.username}}</span>\n                <span data-target=\"modal\" class=\"title secondary-content modal-trigger\" (click)=\"OpenEditModal(post)\">\n                  Edit\n                </span>\n                <p class=\"time\">{{TimeFromNow(post.postId.created)}}\n                  <br> @{{user.city}}, {{user.country}}\n                </p>\n              </li>\n              <div class=\"row\">\n                <div class=\"col s12\">\n                  <div class=\"card\">\n                    <div class=\"card-image card_image\" *ngIf=\"post.postId.imgId\">\n                      <img class=\"postImage\" src=\"http://res.cloudinary.com/vuongnguyen/image/upload/v{{post.postId.imgVersion}}/{{post.postId.imgId}}\">\n                    </div>\n                    <div class=\"card-content\">\n                      <p>{{post.postId.post}}</p>\n                    </div>\n                    <div class=\"card-action\">\n                      <i class=\"material-icons\">thumb_up</i>\n                      <span id=\"iconSpan\">\n                        {{post.postId.totalLikes}}\n                      </span>\n                      <i class=\"material-icons\">chat</i>\n                      <span id=\"iconSpan\">\n                        {{post.postId.comments.length}}\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ul>\n          </div>\n\n          <div class=\"row\" *ngIf=\"followingTab\">\n            <div class=\"col s12 m4 l4\" *ngFor=\"let user of following\">\n              <div class=\"card\">\n                <div class=\"card-image imgDiv\">\n                  <img class=\"imgCircle\" src=\"http://res.cloudinary.com/vuongnguyen/image/upload/v{{user.userFollowed.picVersion}}/{{user.userFollowed.picId}}\">\n                </div>\n                <div class=\"card-action\">\n                  <h3 class=\"card-title\">{{user.userFollowed.username}}</h3>\n                  <!-- <p>Country</p> -->\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" *ngIf=\"followersTab\">\n            <div class=\"col s12 m4 l4\" *ngFor=\"let user of followers\">\n              <div class=\"card\">\n                <div class=\"card-image imgDiv\">\n                  <img class=\"imgCircle\" src=\"http://res.cloudinary.com/vuongnguyen/image/upload/v{{user.follower.picVersion}}/{{user.follower.picId}}\">\n                </div>\n                <div class=\"card-action\">\n                  <h3 class=\"card-title\">{{user.follower.username}}</h3>\n                  <!-- <p>Country</p> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div id=\"modal\" class=\"modal\">\n    <div class=\"modal-content\">\n      <h4>\n        Edit Post\n        <button class=\"secondary-content deleteBtn btn\" (click)=\"DeletePost()\">\n          Delete\n        </button>\n      </h4>\n      <p *ngIf=\"postValue\">{{postValue.post}}</p>\n      <form [formGroup]=\"editForm\" novalidate>\n        <textarea formControlName=\"editedPost\" class=\"materialize-textarea\"></textarea>\n        <div class=\"modal-footer\">\n          <button class=\"button\" (click)=\"CloseModal()\">Close</button>&nbsp;\n          <button class=\"btn\" (click)=\"SubmitEditedPost()\">Save</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/view-user/view-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(route, usersService, postService, fb) {
        this.route = route;
        this.usersService = usersService;
        this.postService = postService;
        this.fb = fb;
        this.postsTab = false;
        this.followingTab = false;
        this.followersTab = false;
        this.posts = [];
        this.following = [];
        this.followers = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()('/');
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsTab = true;
        var tabs = document.querySelector('.tabs');
        materialize_css__WEBPACK_IMPORTED_MODULE_4__["Tabs"].init(tabs, {});
        this.tabElement = document.querySelector('.nav-content');
        this.modalElement = document.querySelector('.modal');
        materialize_css__WEBPACK_IMPORTED_MODULE_4__["Modal"].init(this.modalElement, {});
        this.route.params.subscribe(function (params) {
            _this.name = params.name;
            _this.GetUserData(_this.name);
        });
        this.socket.on('refreshPage', function (data) {
            _this.route.params.subscribe(function (params) {
                _this.name = params.name;
                _this.GetUserData(_this.name);
            });
        });
        this.InitEditForm();
    };
    ViewUserComponent.prototype.ngAfterViewInit = function () {
        this.tabElement.style.display = 'none';
    };
    ViewUserComponent.prototype.InitEditForm = function () {
        this.editForm = this.fb.group({
            editedPost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    };
    ViewUserComponent.prototype.GetUserData = function (name) {
        var _this = this;
        this.usersService.GetUserByName(name).subscribe(function (data) {
            _this.user = data.result;
            _this.posts = data.result.posts.reverse();
            _this.followers = data.result.followers;
            _this.following = data.result.following;
        }, function (err) { return console.log(err); });
    };
    ViewUserComponent.prototype.OpenEditModal = function (post) {
        this.postValue = post;
    };
    ViewUserComponent.prototype.SubmitEditedPost = function () {
        var _this = this;
        var body = {
            id: this.postValue.postId._id,
            post: this.editForm.value.editedPost
        };
        this.postService.EditPost(body).subscribe(function (data) {
            _this.socket.emit('refresh', {});
        }, function (err) { return console.log(err); });
        materialize_css__WEBPACK_IMPORTED_MODULE_4__["Modal"].getInstance(this.modalElement).close();
        this.editForm.reset();
    };
    ViewUserComponent.prototype.CloseModal = function () {
        materialize_css__WEBPACK_IMPORTED_MODULE_4__["Modal"].getInstance(this.modalElement).close();
        this.editForm.reset();
    };
    ViewUserComponent.prototype.DeletePost = function () {
        var _this = this;
        this.postService.DeletePost(this.postValue.postId._id).subscribe(function (data) {
            _this.socket.emit('refresh', {});
        }, function (err) { return console.log(err); });
        materialize_css__WEBPACK_IMPORTED_MODULE_4__["Modal"].getInstance(this.modalElement).close();
    };
    ViewUserComponent.prototype.ChangeTab = function (value) {
        if (value === 'posts') {
            this.postsTab = true;
            this.followersTab = false;
            this.followingTab = false;
        }
        if (value === 'following') {
            this.postsTab = false;
            this.followersTab = false;
            this.followingTab = true;
        }
        if (value === 'followers') {
            this.postsTab = false;
            this.followersTab = true;
            this.followingTab = false;
        }
    };
    ViewUserComponent.prototype.TimeFromNow = function (time) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(time).fromNow();
    };
    ViewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-view-user',
            template: __webpack_require__(/*! ./view-user.component.html */ "./src/app/components/view-user/view-user.component.html"),
            styles: [__webpack_require__(/*! ./view-user.component.css */ "./src/app/components/view-user/view-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ }),

/***/ "./src/app/components/view-user/view-user.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/view-user/view-user.module.ts ***!
  \**********************************************************/
/*! exports provided: ViewUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserModule", function() { return ViewUserModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-user-routing.module */ "./src/app/components/view-user/view-user-routing.module.ts");
/* harmony import */ var _view_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-user.component */ "./src/app/components/view-user/view-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ViewUserModule = /** @class */ (function () {
    function ViewUserModule() {
    }
    ViewUserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_view_user_component__WEBPACK_IMPORTED_MODULE_4__["ViewUserComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                _view_user_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewUserRoutingModule"]
            ]
        })
    ], ViewUserModule);
    return ViewUserModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-view-user-view-user-module.js.map