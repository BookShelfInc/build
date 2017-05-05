webpackJsonp([1,5],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = (function () {
    function AuthComponent(authorizationService, dialogRef) {
        this.authorizationService = authorizationService;
        this.dialogRef = dialogRef;
        this.model = {};
        this.loading = false;
        this.error = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AuthComponent.prototype.login = function () {
        var _this = this;
        this.authorizationService.login(this.model.username, this.model.password).subscribe(function (data) {
            //this.closeDialog();
            _this.error = false;
        }, function (error) {
            _this.loading = false;
            _this.error = true;
        });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-auth-login',
        template: __webpack_require__(323),
        styles: [__webpack_require__(139)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _b || Object])
], AuthComponent);

var AuthRegisterComponent = (function () {
    function AuthRegisterComponent(authenticationService, dialogRef) {
        this.authenticationService = authenticationService;
        this.dialogRef = dialogRef;
        this.model = {};
        this.loading = false;
        this.error = false;
    }
    AuthRegisterComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AuthRegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        var user = {
            is_manager: false,
            username: this.model.username,
            first_name: this.model.first_name,
            last_name: this.model.last_name,
            phone: this.model.phone,
            password: this.model.password,
        };
        this.authenticationService.register(user)
            .subscribe(function (data) {
            _this.login();
            //this.closeDialog();
            _this.error = false;
        }, function (error) {
            _this.loading = false;
            _this.error = true;
        });
    };
    AuthRegisterComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.error = false;
        }, function (error) {
            _this.loading = false;
            _this.error = true;
        });
    };
    AuthRegisterComponent.prototype.ngOnInit = function () {
    };
    return AuthRegisterComponent;
}());
AuthRegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-auth-register',
        template: __webpack_require__(324),
        styles: [__webpack_require__(139)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _d || Object])
], AuthRegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bazaar_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BazaarListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BazaarDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BazaarListComponent = (function () {
    function BazaarListComponent(bazaarService, router, dialog) {
        this.bazaarService = bazaarService;
        this.router = router;
        this.dialog = dialog;
    }
    BazaarListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bazaarService.getAllAds().subscribe(function (data) {
            _this.ads = data;
            console.log(_this.ads);
        }, function (error) {
            console.log('bazaar ' + error);
        });
    };
    BazaarListComponent.prototype.openDialog = function (ad) {
        this.bazaarService.setChosenAd(ad);
        var dialogRef = this.dialog.open(BazaarDialog);
    };
    return BazaarListComponent;
}());
BazaarListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-bazaar-list',
        template: __webpack_require__(330),
        styles: [__webpack_require__(302)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_bazaar_service__["a" /* BazaarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_bazaar_service__["a" /* BazaarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _c || Object])
], BazaarListComponent);

var BazaarDialog = (function () {
    function BazaarDialog(dialogRef, bazaarService) {
        this.dialogRef = dialogRef;
        this.bazaarService = bazaarService;
    }
    BazaarDialog.prototype.ngOnInit = function () {
        this.ad = this.bazaarService.getChosenAd();
    };
    return BazaarDialog;
}());
BazaarDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'bazaar-dialog',
        template: __webpack_require__(329),
        styles: [__webpack_require__(301)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_bazaar_service__["a" /* BazaarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_bazaar_service__["a" /* BazaarService */]) === "function" && _e || Object])
], BazaarDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=bazaar-list.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".dialog-content {\n  width: 400px;\n}\n.full-width {\n  width: 100%;\n}\n.action_container {\n  float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 190;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(237);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(321),
        styles: [__webpack_require__(296)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_auth_auth_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_book_list_book_list_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_book_detail_book_detail_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_review_list_review_list_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_author_author_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authorization_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_book_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_author_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_blog_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_user_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_bazaar_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_navbar_navbar_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_blog_list_blog_list_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_post_detail_post_detail_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_post_create_post_create_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_author_list_author_list_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_user_user_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_wish_list_wish_list_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_quote_quote_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_add_quote_add_quote_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_bazaar_list_bazaar_list_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_bazaar_detail_bazaar_detail_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_bazaar_create_bazaar_create_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_froala_wysiwyg__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_custom_404_custom_404_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_user_posts_user_posts_component__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_auth_auth_component__["b" /* AuthRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_book_list_book_list_component__["a" /* BookListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_book_detail_book_detail_component__["a" /* BookDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_review_list_review_list_component__["a" /* ReviewListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_author_author_component__["a" /* AuthorComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_blog_list_blog_list_component__["a" /* BlogListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_post_detail_post_detail_component__["a" /* PostDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_post_create_post_create_component__["a" /* PostCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_author_list_author_list_component__["a" /* AuthorListComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_wish_list_wish_list_component__["a" /* WishListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_quote_quote_component__["a" /* QuoteComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_add_quote_add_quote_component__["a" /* AddQuoteComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_bazaar_list_bazaar_list_component__["a" /* BazaarListComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_bazaar_detail_bazaar_detail_component__["a" /* BazaarDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_bazaar_list_bazaar_list_component__["b" /* BazaarDialog */],
            __WEBPACK_IMPORTED_MODULE_31__components_bazaar_create_bazaar_create_component__["a" /* BazaarCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_book_list_book_list_component__["b" /* AddedComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_custom_404_custom_404_component__["a" /* Custom404Component */],
            __WEBPACK_IMPORTED_MODULE_34__components_user_posts_user_posts_component__["a" /* UserPostsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_32_angular2_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_32_angular2_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'book/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_book_detail_book_detail_component__["a" /* BookDetailComponent */] },
                { path: 'books', component: __WEBPACK_IMPORTED_MODULE_8__components_book_list_book_list_component__["a" /* BookListComponent */] },
                { path: 'author', component: __WEBPACK_IMPORTED_MODULE_24__components_author_list_author_list_component__["a" /* AuthorListComponent */] },
                { path: 'author/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_author_author_component__["a" /* AuthorComponent */] },
                { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_21__components_blog_list_blog_list_component__["a" /* BlogListComponent */] },
                { path: 'blog/post/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_post_detail_post_detail_component__["a" /* PostDetailComponent */] },
                { path: 'blog/create', component: __WEBPACK_IMPORTED_MODULE_23__components_post_create_post_create_component__["a" /* PostCreateComponent */] },
                { path: 'my_page', component: __WEBPACK_IMPORTED_MODULE_25__components_user_user_component__["a" /* UserComponent */] },
                { path: 'my_page/create-quote', component: __WEBPACK_IMPORTED_MODULE_28__components_add_quote_add_quote_component__["a" /* AddQuoteComponent */] },
                { path: 'bazaar', component: __WEBPACK_IMPORTED_MODULE_29__components_bazaar_list_bazaar_list_component__["a" /* BazaarListComponent */] },
                { path: 'bazaar/create', component: __WEBPACK_IMPORTED_MODULE_31__components_bazaar_create_bazaar_create_component__["a" /* BazaarCreateComponent */] },
                { path: '', redirectTo: 'books', pathMatch: 'full' },
                { path: '404', component: __WEBPACK_IMPORTED_MODULE_33__components_custom_404_custom_404_component__["a" /* Custom404Component */] },
                { path: '**', redirectTo: '404', pathMatch: 'full' },
            ])
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_7__components_auth_auth_component__["a" /* AuthComponent */], __WEBPACK_IMPORTED_MODULE_7__components_auth_auth_component__["b" /* AuthRegisterComponent */], __WEBPACK_IMPORTED_MODULE_29__components_bazaar_list_bazaar_list_component__["b" /* BazaarDialog */], __WEBPACK_IMPORTED_MODULE_29__components_bazaar_list_bazaar_list_component__["a" /* BazaarListComponent */], __WEBPACK_IMPORTED_MODULE_8__components_book_list_book_list_component__["a" /* BookListComponent */], __WEBPACK_IMPORTED_MODULE_8__components_book_list_book_list_component__["b" /* AddedComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_authorization_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_13__services_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_14__services_author_service__["a" /* AuthorService */], __WEBPACK_IMPORTED_MODULE_15__services_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_17__services_bazaar_service__["a" /* BazaarService */], __WEBPACK_IMPORTED_MODULE_16__services_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddQuoteComponent = (function () {
    function AddQuoteComponent(userService, bookSerive, router) {
        var _this = this;
        this.userService = userService;
        this.bookSerive = bookSerive;
        this.router = router;
        this.model = {};
        this.currentID = undefined;
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* FormControl */]();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
    }
    AddQuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookSerive.getAllBooks().subscribe(function (data) {
            _this.books = data;
        }, function (error) {
            console.log(error);
        });
    };
    AddQuoteComponent.prototype.filterStates = function (val) {
        // console.log('hello');
        var ans = val ? this.books.filter(function (s) { return new RegExp("^" + val, 'gi').test(s.title); })
            : this.books;
        if (ans.length == 0) {
            this.currentID = undefined;
        }
        else {
            this.currentID = ans[0].id;
        }
        return ans;
    };
    AddQuoteComponent.prototype.addQuote = function () {
        // alert(this.currentID);
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log('here');
            var quote = {
                quote: this.model.quote.toString(),
                user: currentUser.user.id,
                book: this.currentID,
            };
            console.log(quote);
            console.log(this.userService.addQuote(quote));
            this.router.navigate(['/my_page']);
        }
        console.log(this.model.review);
    };
    return AddQuoteComponent;
}());
AddQuoteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'add-quote',
        template: __webpack_require__(322),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AddQuoteComponent);

var _a, _b, _c;
//# sourceMappingURL=add-quote.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_author_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorListComponent = (function () {
    function AuthorListComponent(authorService, router) {
        this.authorService = authorService;
        this.router = router;
    }
    AuthorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorService.getAllAuthors().subscribe(function (data) {
            _this.authors = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AuthorListComponent.prototype.goToDetail = function (author) {
        this.router.navigate(['/author', author.id]);
        console.log(author.id);
    };
    return AuthorListComponent;
}());
AuthorListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-author-list',
        template: __webpack_require__(325),
        styles: [__webpack_require__(297)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthorListComponent);

var _a, _b;
//# sourceMappingURL=author-list.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_author_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorComponent = (function () {
    function AuthorComponent(authorService, _route, router) {
        this.authorService = authorService;
        this._route = _route;
        this.router = router;
    }
    AuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .switchMap(function (params) { return _this.authorService.getAuthor(+params['id']); }).subscribe(function (data) {
            _this.author = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AuthorComponent.prototype.goToDetail = function (book) {
        this.router.navigate(['/book', book.id]);
        console.log(book.id);
    };
    return AuthorComponent;
}());
AuthorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-author',
        template: __webpack_require__(326),
        styles: [__webpack_require__(298)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AuthorComponent);

var _a, _b, _c;
//# sourceMappingURL=author.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bazaar_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BazaarCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BazaarCreateComponent = (function () {
    function BazaarCreateComponent(bazaarService, bookService, router) {
        this.bazaarService = bazaarService;
        this.bookService = bookService;
        this.router = router;
        this.error = false;
        this.model = {};
    }
    BazaarCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getAllBooks().subscribe(function (data) {
            _this.allBooks = data;
        }, function (error) {
            console.log(error);
        });
    };
    BazaarCreateComponent.prototype.createAd = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log('here');
            var ad = {
                book: this.selectedBookId,
                user: currentUser.user.id,
                price: this.model.price,
                publish_date: new Date().toDateString()
            };
            console.log(ad);
            this.bazaarService.createAd(ad).subscribe(function (data) {
                _this.router.navigate(['/bazaar']);
            }, function (error) {
                _this.error = true;
            });
        }
    };
    return BazaarCreateComponent;
}());
BazaarCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-bazaar-create',
        template: __webpack_require__(327),
        styles: [__webpack_require__(299)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_bazaar_service__["a" /* BazaarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bazaar_service__["a" /* BazaarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BazaarCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=bazaar-create.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bazaar_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BazaarDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BazaarDetailComponent = (function () {
    function BazaarDetailComponent(_route, bazaarService, _router) {
        this._route = _route;
        this.bazaarService = bazaarService;
        this._router = _router;
    }
    BazaarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .switchMap(function (params) { return _this.bazaarService.getAd(+params['id']); }).subscribe(function (data) {
            _this.ad = data;
            console.log(_this.ad);
        }, function (error) {
            console.log(error);
        });
    };
    return BazaarDetailComponent;
}());
BazaarDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-bazaar-detail',
        template: __webpack_require__(328),
        styles: [__webpack_require__(300)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_bazaar_service__["a" /* BazaarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bazaar_service__["a" /* BazaarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BazaarDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=bazaar-detail.component.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogListComponent = (function () {
    function BlogListComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
        this.postsIsLiked = [];
        this.can = false;
        this.getPosts();
    }
    BlogListComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    BlogListComponent.prototype.getPosts = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            this.can = true;
            this.blogService.getAllPosts().subscribe(function (data) {
                _this.posts = data;
                for (var i = 0; i < _this.posts.length; i++) {
                    var exist = false;
                    for (var j = 0; j < _this.posts[i].upvotes.length; j++) {
                        if (_this.posts[i].upvotes[j].author == currentUser.user.id) {
                            exist = true;
                            break;
                        }
                    }
                    var postIL = {
                        id: _this.posts[i].id,
                        title: _this.posts[i].title,
                        content: _this.posts[i].content,
                        publish_date: _this.posts[i].publish_date,
                        author: _this.posts[i].author,
                        comments: _this.posts[i].comments.length,
                        upvotes: _this.posts[i].upvotes.length,
                        is_liked: exist,
                    };
                    _this.postsIsLiked.unshift(postIL);
                }
                console.log(data);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.blogService.getAllPosts().subscribe(function (data) {
                _this.posts = data;
                for (var i = 0; i < _this.posts.length; i++) {
                    var exist = false;
                    var postIL = {
                        id: _this.posts[i].id,
                        title: _this.posts[i].title,
                        content: _this.posts[i].content,
                        publish_date: _this.posts[i].publish_date,
                        author: _this.posts[i].author,
                        comments: _this.posts[i].comments.length,
                        upvotes: _this.posts[i].upvotes.length,
                        is_liked: exist,
                    };
                    _this.postsIsLiked.unshift(postIL);
                }
                console.log(data);
            }, function (error) {
                console.log(error);
            });
        }
    };
    BlogListComponent.prototype.addUpvote = function (post) {
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log('here');
            var upvote = {
                author: currentUser.user.id,
                post: post.id,
                like: true
            };
            var upvotePush = {
                id: 1,
                author: currentUser.user.id,
                post: post.id,
                like: true
            };
            console.log(upvote);
            this.blogService.addUpvote(upvote).subscribe(function (data) {
                console.log(data);
                post.upvotes = post.upvotes + 1;
                post.is_liked = true;
            }, function (error) {
                console.log(error);
            });
        }
    };
    BlogListComponent.prototype.goToDetail = function (post) {
        this.router.navigate(['/blog/post/', post.id]);
        console.log(post.id);
    };
    BlogListComponent.prototype.goToCreatePost = function () {
        this.router.navigate(['/blog/create']);
    };
    return BlogListComponent;
}());
BlogListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-blog-list',
        template: __webpack_require__(331),
        styles: [__webpack_require__(303)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* trigger */])('fadeIn', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* animate */])('.5s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '1' })),
                ]),
            ]),
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], BlogListComponent);

var _a, _b;
//# sourceMappingURL=blog-list.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_book_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authorization_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDetailComponent = (function () {
    function BookDetailComponent(_route, bookService, router, authService) {
        this._route = _route;
        this.bookService = bookService;
        this.router = router;
        this.authService = authService;
        this.error = false;
        this.model = {};
        this.can = false;
        this.editorContent = "";
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .switchMap(function (params) { return _this.bookService.getBook(+params['id']); }).subscribe(function (data) {
            _this.book = data;
            //
            _this.loggedIn();
            _this.isReviewed();
        }, function (error) {
            _this.error = true;
            console.log(error);
        });
    };
    BookDetailComponent.prototype.addReview = function () {
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log('here');
            var review = {
                user: currentUser.user.id,
                book: this.book.id,
                review: this.editorContent
            };
            console.log('curUSer' + currentUser.user);
            console.log('Review --- ' + review);
            console.log(this.bookService.addReview(review));
            this.isrev = true;
        }
        console.log(this.model.review);
    };
    BookDetailComponent.prototype.getAuthor = function (id) {
        this.router.navigate(['/author', id]);
    };
    BookDetailComponent.prototype.loggedIn = function () {
        this.loggedInBool = this.authService.isLoggedIn();
    };
    BookDetailComponent.prototype.isReviewed = function () {
        var _this = this;
        this.bookService.isReview(this.book.id).subscribe(function (data) {
            _this.isrev = data;
            console.log('is + ' + _this.isrev);
        });
    };
    return BookDetailComponent;
}());
BookDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'book-detail',
        template: __webpack_require__(332),
        styles: [__webpack_require__(304)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _d || Object])
], BookDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=book-detail.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authorization_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookListComponent = (function () {
    function BookListComponent(bookService, userService, router, snackBar, authService) {
        this.bookService = bookService;
        this.userService = userService;
        this.router = router;
        this.snackBar = snackBar;
        this.authService = authService;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getAllBooks().subscribe(function (data) {
            _this.books = data;
            //console.log(data);
            console.log(_this.books);
        }, function (error) {
            console.log(error);
        });
        this.loggedIn();
    };
    BookListComponent.prototype.goToDetail = function (book) {
        this.router.navigate(['/book', book.id]);
        console.log(book.id);
    };
    BookListComponent.prototype.addWishList = function (bookId) {
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log('here');
            var wishList = {
                user: currentUser.user.id,
                book: bookId,
                has_read: false,
            };
            console.log(wishList);
            console.log(this.userService.addWishList(wishList));
            console.log("Book successfully added");
            this.snackBar.openFromComponent(AddedComponent, {
                duration: 500,
            });
        }
    };
    BookListComponent.prototype.loggedIn = function () {
        this.loggedInBool = this.authService.isLoggedIn();
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'book-list',
        template: __webpack_require__(334),
        styles: [__webpack_require__(306)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* trigger */])('flyInOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* animate */])(700, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* animate */])(700, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                    ]))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _e || Object])
], BookListComponent);

var AddedComponent = (function () {
    function AddedComponent() {
    }
    return AddedComponent;
}());
AddedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'added',
        template: __webpack_require__(333),
        styles: [__webpack_require__(305)]
    })
], AddedComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=book-list.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Custom404Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Custom404Component = (function () {
    function Custom404Component() {
    }
    Custom404Component.prototype.ngOnInit = function () {
    };
    return Custom404Component;
}());
Custom404Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-custom-404',
        template: __webpack_require__(335),
        styles: [__webpack_require__(307)]
    }),
    __metadata("design:paramtypes", [])
], Custom404Component);

//# sourceMappingURL=custom-404.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authorization_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_book_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(dialog, authService, bookService) {
        this.dialog = dialog;
        this.authService = authService;
        this.bookService = bookService;
        this.checkUser();
    }
    NavbarComponent.prototype.checkUser = function () {
        if (this.authService.isLoggedIn()) {
            var currentUser = JSON.parse(localStorage.getItem('user'));
            this.username = currentUser.username;
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.loggedIn = function () {
        this.checkUser();
        return this.authService.isLoggedIn();
    };
    NavbarComponent.prototype.openLoginDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["a" /* AuthComponent */]);
    };
    NavbarComponent.prototype.openSignupDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["b" /* AuthRegisterComponent */]);
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.username = null;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(336),
        styles: [__webpack_require__(308)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_book_service__["a" /* BookService */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostCreateComponent = (function () {
    function PostCreateComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
        this.editorContent = 'My Document\'s Title';
        this.model = {};
    }
    PostCreateComponent.prototype.ngOnInit = function () {
    };
    PostCreateComponent.prototype.addPost = function () {
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log('here');
            var post = {
                title: this.model.title,
                content: this.editorContent,
                publish_date: new Date().toDateString(),
                author: currentUser.user.id,
            };
            console.log(post);
            console.log(this.blogService.addPost(post));
            this.router.navigate(['/blog']);
        }
        console.log(this.model.review);
    };
    return PostCreateComponent;
}());
PostCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-post-create',
        template: __webpack_require__(337),
        styles: [__webpack_require__(309)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PostCreateComponent);

var _a, _b;
//# sourceMappingURL=post-create.component.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostDetailComponent = (function () {
    function PostDetailComponent(_route, blogService, _router) {
        this._route = _route;
        this.blogService = blogService;
        this._router = _router;
        this.can = false;
        this.model = {};
        this.written = false;
        this.liked = false;
        this.canLike = true;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            this.can = true;
        }
        this._route.params.subscribe(function (params) {
            if (params['id']) {
                _this.getComments(params['id']);
            }
        });
    };
    PostDetailComponent.prototype.getComments = function (id) {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(2000, 1000);
        timer.subscribe(function (t) {
            _this.blogService.getPost(id).subscribe(function (data) {
                _this.post = data;
                _this.checkIsLiked(id);
            }, function (error) {
                console.log(error);
            });
        });
    };
    PostDetailComponent.prototype.addUpvote = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log('here');
            var upvote = {
                author: currentUser.user.id,
                post: this.post.id,
                like: true
            };
            var upvotePush_1 = {
                id: 1,
                author: currentUser.user.id,
                post: this.post.id,
                like: true
            };
            console.log(upvote);
            this.blogService.addUpvote(upvote).subscribe(function (data) {
                _this.liked = true;
                console.log(data);
                _this.post.upvotes.push(upvotePush_1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    PostDetailComponent.prototype.addComment = function () {
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log('here');
            var comment = {
                content: this.model.comment,
                publish_date: new Date().toDateString(),
                author: currentUser.user.id,
                post: this.post.id
            };
            var commentPush = {
                id: 1,
                content: this.model.comment,
                publish_date: new Date().toDateString(),
                author: currentUser.user.id,
                post: this.post.id
            };
            console.log(comment);
            console.log(this.blogService.postComment(comment));
            this.written = true;
            this.post.comments.push(commentPush);
            this.model.comment = '';
        }
        console.log(this.model.review);
    };
    PostDetailComponent.prototype.checkIsLiked = function (id) {
        var _this = this;
        this.blogService.isLiked(id).subscribe(function (data) {
            _this.canLike = false;
            console.log('checked ' + data);
        });
    };
    return PostDetailComponent;
}());
PostDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-post-detail',
        template: __webpack_require__(338),
        styles: [__webpack_require__(310)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PostDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=post-detail.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuoteComponent = (function () {
    function QuoteComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.pageTitle = "Quote";
        this.getQuote();
    }
    QuoteComponent.prototype.ngOnInit = function () {
        this.getQuote();
    };
    QuoteComponent.prototype.getQuote = function () {
        var _this = this;
        this.userService.getQuote().subscribe(function (data) {
            _this.quotes = data;
        }, function (error) {
            console.error(error);
        });
    };
    QuoteComponent.prototype.deleteQuote = function (id) {
        var _this = this;
        this.userService.deleteQuote(id).subscribe(function (data) {
            _this.getQuote();
        });
    };
    QuoteComponent.prototype.goToAddQuote = function () {
        this.router.navigate(['/my_page/create-quote']);
    };
    return QuoteComponent;
}());
QuoteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'quote',
        template: __webpack_require__(339)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], QuoteComponent);

var _a, _b;
//# sourceMappingURL=quote.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_book_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_book__ = __webpack_require__(236);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewListComponent = (function () {
    function ReviewListComponent(_route, bookService) {
        this._route = _route;
        this.bookService = bookService;
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getReview(this.currentBook).subscribe(function (data) {
            _this.reviews = data;
            console.log(_this.reviews);
        });
    };
    return ReviewListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_book__["a" /* Book */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_book__["a" /* Book */]) === "function" && _a || Object)
], ReviewListComponent.prototype, "currentBook", void 0);
ReviewListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'review-list',
        template: __webpack_require__(340),
        styles: [__webpack_require__(311)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */]) === "function" && _c || Object])
], ReviewListComponent);

var _a, _b, _c;
//# sourceMappingURL=review-list.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPostsComponent = (function () {
    function UserPostsComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
        this.getUsersPost();
    }
    UserPostsComponent.prototype.ngOnInit = function () {
        this.getUsersPost();
    };
    UserPostsComponent.prototype.getUsersPost = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('user'));
        this.blogService.getUserPosts(currentUser.user.id).subscribe(function (data) {
            _this.posts = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    UserPostsComponent.prototype.goToDetail = function (post) {
        this.router.navigate(['/blog/post/', post.id]);
        console.log(post.id);
    };
    UserPostsComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.blogService.deletePost(id).subscribe(function (data) {
            _this.getUsersPost();
        });
    };
    return UserPostsComponent;
}());
UserPostsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-user-posts',
        template: __webpack_require__(341),
        styles: [__webpack_require__(312)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserPostsComponent);

var _a, _b;
//# sourceMappingURL=user-posts.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.pageTitle = "My page";
    }
    UserComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem('user'));
        this.user = currentUser.user;
        this.name = currentUser.first_name;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'user-page',
        template: __webpack_require__(342),
        styles: [__webpack_require__(313)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishListComponent = (function () {
    function WishListComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.pageTitle = 'My wishlist';
        this.getBooks();
    }
    WishListComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    WishListComponent.prototype.getBooks = function () {
        var _this = this;
        this.userService.getWishList().subscribe(function (data) {
            _this.books = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    WishListComponent.prototype.goToDetail = function (book) {
        this.router.navigate(['/book', book.id]);
        console.log(book.id);
    };
    WishListComponent.prototype.removeBook = function (id) {
        var _this = this;
        this.userService.deleteWishList(id).subscribe(function (data) {
            _this.getBooks();
        });
    };
    return WishListComponent;
}());
WishListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'wish-list',
        template: __webpack_require__(343),
        styles: [__webpack_require__(314)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], WishListComponent);

var _a, _b;
//# sourceMappingURL=wish-list.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book() {
    }
    return Book;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".wrapper {\n     display: -webkit-box;\n     display: -ms-flexbox;\n     display: flex;\n     -webkit-box-flex: 1;\n         -ms-flex: 1 0 auto;\n             flex: 1 0 auto;\n     height: 100%;\n     -webkit-box-orient: vertical;\n     -webkit-box-direction: normal;\n         -ms-flex-direction: column;\n             flex-direction: column;\n     overflow: hidden;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    margin-bottom: 70px;\n}\n\n.post-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    width: 100%;\n    margin-top: 30px;\n}\n\ndiv.image {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-right: 30px;\n}\n\nreview-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n}\n\n.post-container {\n    margin-top: 30px;\n    margin-left: 30px;\n    margin-right: 30px;\n    margin-bottom: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    margin-bottom: 70px;\n}\n\n.post-container {\n    margin-top: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".dialog-content {\n  width: 500px;\n}\n.full-width {\n  width: 100%;\n}\n.action_container {\n  float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    margin-bottom: 70px;\n}\n\n.post-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    width: 100%;\n    margin-top: 30px;\n}\n\ndiv.image {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    margin-bottom: 70px;\n}\n\n.post-container {\n    margin-top: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-right: 30px;\n}\n\nreview-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n}\n\n.post-container {\n    margin-top: 30px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.form {\n    width: 70%;    \n}\n.sendb button{\n    background-color: #FEE9E8;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".example-pizza-party {\n  color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    margin-bottom: 70px;\n}\n\n.post-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    width: 100%;\n    margin-top: 30px;\n}\n\ndiv.image {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".custom {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex\n}\n\n.img {\n    margin: auto\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "md-toolbar {\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  z-index: 10;\n  position: relative;\n  margin-bottom: 30px;\n\n}\n\n.button-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.auth {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.menu-button-margin {\n  margin-right: 16px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    margin-bottom: 70px;\n}\n\n.post-container {\n    margin-top: 30px;\n}\n\n#emoticons-1 {\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    margin-bottom: 70px;\n}\n\n.post-container {\n    margin-top: 30px;\n}\n\n.form button{\n    background-color: \t#FEE9E8;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    margin-bottom: 70px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    margin-bottom: 70px;\n}\n\n.post-container {\n    margin-top: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-right: 30px;\n}\n\nreview-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n}\n\n.post-container {\n    margin-top: 30px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.roundrect {\nborder-radius: 100px;\n}\n\n.commondiv {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    display: inline;\n}\n\n.div-image {\n    float: left;\n}\n\n.div-content {\n    margin-left: 270px;\n    border-left: 1px solid gray;\n    padding: 1em;\n    overflow: hidden;\n    height: 170px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n    margin-bottom: 70px;\n}\n\n.post-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    width: 100%;\n    margin-top: 30px;\n}\n\ndiv.image {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-navbar></app-navbar>\n</div>"

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "<div class=\"post-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" fxLayoutGap=\"15px\" fxFlex=\"60\" fxFlexOffset=\"20\">\n    <h2>Write Quote...</h2>\n    <div class=\"form\">\n        <md-input-container style=\"width: 100%;\">\n            <input type=\"text\" mdInput [(ngModel)]=\"model.quote\" placeholder=\"Write your quote\" required>\n        </md-input-container>\n        <div *ngIf=\"books\" style=\"margin-bottom: 10px\" style=\"margin-top: 20px\">\n            <!--<form>\n                <md-select placeholder=\"Choose Book\" [(ngModel)]=\"selectedBookId\" name=\"book\" required>\n                    <md-option *ngFor=\"let book of books\" [value]=\"book.id\">\n                        {{ book.title }}\n                    </md-option>\n                </md-select>\n            </form>-->\n\n            <md-input-container>\n                <input mdInput placeholder=\"State\" [mdAutocomplete]=\"auto\" [formControl]=\"stateCtrl\" [(ngModel)]=\"selectedBookId\">\n            </md-input-container>\n\n            <md-autocomplete #auto=\"mdAutocomplete\" >\n                <md-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.title\">\n                    {{ state.title }}\n                </md-option>\n            </md-autocomplete>\n\n            <div class=\"post-container\" style=\"margin-top: 20px\">\n                <button md-button md-raised-button color=\"warn\" (click)=\"addQuote()\">Add Quote</button>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title *ngIf=\"!error\"> Login </h1>\n<h1 md-dialog-title *ngIf=\"error\"> Failed to Login </h1>\n<form (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n  <div MdDialogContent class=\"dialog-content\">\n    <md-input-container class=\"full-width\">\n      <input mdInput type=\"Username\" placeholder=\"username\" class=\"form-control\" name=\"username\" \n        [(ngModel)]=\"model.username\" #username=\"ngModel\" required>\n    </md-input-container>\n    <br>\n    <md-input-container class=\"full-width\">\n      <input mdInput type=\"password\" placeholder=\"Password\" class=\"form-control\" name=\"password\" \n        [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\n    </md-input-container>\n  </div>\n\n  <div MdDialogActions class=\"action_container\">\n    <button color=\"accent\" md-button tabindex=\"-1\" (click)=\"closeDialog()\"> CANCEL </button>\n    <button color=\"accent\" md-button [disabled]=\"loading\" (click)=\"login()\"> LOG IN </button>\n  </div>\n</form>"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title *ngIf=\"!error\"> Register </h1>\n<h1 md-dialog-title *ngIf=\"error\"> Failed to Register </h1>\n<form (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n  <div MdDialogContent class=\"dialog-content\">\n    <md-input-container class=\"full-width\">\n      <input mdInput type=\"text\" placeholder=\"First name\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.first_name\" #username=\"ngModel\" required>\n    </md-input-container>\n    <br>\n    <md-input-container class=\"full-width\">\n      <input mdInput type=\"text\" placeholder=\"Last name\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.last_name\" #username=\"ngModel\" required>\n    </md-input-container>\n    <br>\n    <md-input-container class=\"full-width\">\n      <input mdInput type=\"text\" placeholder=\"Username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required>\n    </md-input-container>\n    <br>\n    <md-input-container class=\"full-width\">\n      <input mdInput type=\"Password\" placeholder=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\n    </md-input-container>\n    <br>\n    <md-input-container class=\"full-width\">\n      <input mdInput type=\"text\" placeholder=\"Phone number\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.phone\" #username=\"ngModel\" required>\n    </md-input-container>\n  </div>\n\n  <div MdDialogActions class=\"action_container\">\n    <button color=\"accent\" md-button tabindex=\"-1\" (click)=\"closeDialog()\"> CANCEL </button>\n    <button color=\"accent\" md-button [disabled]=\"loading\" (click)=\"register()\"> REGISTER </button>\n  </div>\n</form>"

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div fxLayoutAlign=\"space-around\" fxFlex=\"80\" fxFlexOffset=\"10\">\n        <img src=\"../../../assets/author.png\" alt=\"Author page\">\n    </div>\n</div>\n\n<div *ngIf=\"authors\" class=\"post-container\">\n  <div *ngFor=\"let author of authors\" fxLayoutAlign=\"space-around\" fxFlex=\"24\" fxFlexOffset=\"7\" style=\"margin-bottom:5px;\">\n    <md-card style=\"width: 100%;\">\n        <md-card-title>{{ author.first_name }} {{ author.last_name }}</md-card-title>\n        <div class=\"image\">\n          <img src=\"http://fit.kbtu.kz:8080{{ author.avatar }}\" style=\"width:250px; height:300px\" alt=\"author image}\">\n        </div>\n        <md-card-actions>\n            <button (click)=\"goToDetail(author)\" md-ripple=\"warn\" color=\"primary\" md-button>\n              Read more\n            </button>\n        </md-card-actions>\n    </md-card>\n  </div>\n</div>"

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"author\" class=\"post-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n    <md-card style=\"width: 100%; display: inline-block\">\n        <md-card-title> {{ author.first_name }} {{ author.last_name }} </md-card-title>\n        \n        <img src=\"http://fit.kbtu.kz:8080{{ author.avatar }}\" style=\"width: 400px; height: 500px;\" alt=\"author image\">\n        <md-card-content style=\"width: 700px; float: right; font-family: italic;\"> <strong>Description:</strong> <br> {{ author.biography }} </md-card-content>\n        \n    </md-card>\n    \n    <div style=\"margin-top: 30px\">\n        <h2>Books</h2>\n        <div *ngFor=\"let book of author.book_set\">\n            <md-card style=\"width: 100%;\">\n                <md-card-title> {{ book.title }} </md-card-title>\n                <img src=\"http://fit.kbtu.kz:8080{{ book.cover }}\" style=\"width:250px; height:300px\">\n                <br>\n                <button md-button color=\"warn\" (click)=\"goToDetail(book)\">Book Detail</button>\n            </md-card>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "<div class=\"post-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" fxLayoutGap=\"15px\" fxFlex=\"60\" fxFlexOffset=\"20\">\n  <h2>Create ad</h2>\n  <div class=\"form\">\n      <md-input-container style=\"width: 100%;\">\n        <input type=\"number\" mdInput [(ngModel)]=\"model.price\" placeholder=\"Price\" required>\n      </md-input-container>\n      <div *ngIf=\"allBooks\" style=\"margin-bottom: 10px\">\n        <form>\n            <md-select placeholder=\"Choose Book\" [(ngModel)]=\"selectedBookId\" name=\"book\" required>\n                <md-option *ngFor=\"let book of allBooks\" [value]=\"book.id\">\n                    {{ book.title }}\n                </md-option>\n            </md-select>\n        </form>\n      </div>\n      <div class=\"post-container\">\n          <button md-button md-raised-button color=\"warn\" (click)=\"createAd()\">Create</button>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ad\" class=\"post-container\" fxLayout=\"row\" fxLayoutAlign=\"space-around\" fxFlex=\"24\" fxFlexOffset=\"7\" fxLayoutGap=\"15px\">\n    <md-card style=\"width: 100%;\">\n        <md-card-title> {{ ad.book.title }} </md-card-title>\n        <md-card-subtitle>\n            Added by {{ ad.user.first_name }} {{ ad.user.last_name }}\n        </md-card-subtitle>\n        <img src=\"http://fit.kbtu.kz:8080{{ ad.book.cover }}\" style=\"width:120px; height:200px;\" alt=\"book image\">\n        <md-card-content> {{ ad.price }} </md-card-content>\n        <md-card-actions>\n            <button (click)=\"goToDetail(ad)\" md-ripple=\"white\" md-button>\n                Read more\n            </button>\n        </md-card-actions>\n    </md-card>\n</div>"

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ad\" class=\"post-container\">\n    <h1 md-dialog-title> {{ ad.book.title }} </h1>\n    <div MdDialogContent class=\"dialog-content\">\n        <img src=\"http://fit.kbtu.kz:8080{{ ad.book.cover }}\" style=\"width:120px; height:200px;\" alt=\"books image\">\n        <p> Added by {{ ad.user.first_name }} {{ ad.user.last_name }} </p>\n        <h1> {{ ad.price }} tenge</h1>\n        <h2>Contacts:</h2>\n        <p>{{ ad.user.phone }}</p>\n    </div>\n</div>"

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookService = (function () {
    function BookService(http) {
        this.http = http;
    }
    BookService.prototype.getAllBooks = function () {
        var url = 'http://fit.kbtu.kz:8080/book/all/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    BookService.prototype.getBook = function (id) {
        var url = 'http://fit.kbtu.kz:8080/book/' + id.toString() + '/';
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    BookService.prototype.getReview = function (book) {
        var url = 'http://fit.kbtu.kz:8080/book/review/' + book.id.toString() + '/';
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    BookService.prototype.addReview = function (review) {
        var url = 'http://fit.kbtu.kz:8080/book/review/';
        console.log(JSON.stringify(review));
        this.http.post(url, JSON.stringify(review), this.jwt()).subscribe();
    };
    BookService.prototype.isReview = function (id) {
        var url = 'http://fit.kbtu.kz:8080/book/isreview/' + id.toString() + '/';
        return this.http.get(url, this.jwt()).map(function (res) {
            if (res.status == 200) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    BookService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log(currentUser.token);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ads\" class=\"post-container\">\n    <div *ngFor=\"let ad of ads\" fxLayoutAlign=\"space-around\" fxFlex=\"24\" fxFlexOffset=\"7\" fxLayoutGap=\"15px\" style=\"margin-bottom: 5px;\">\n      <md-card style=\"width: 100%;\">\n          <md-card-title> {{ ad.book.title }} </md-card-title>\n          <md-card-subtitle>\n              Added by {{ ad.user.first_name }} {{ ad.user.last_name }}\n          </md-card-subtitle>\n          <div class=\"image\">\n            <img src=\"http://fit.kbtu.kz:8080{{ ad.book.cover }}\" style=\"width:120px; height:200px;\" alt=\"book image\">\n          </div>\n          <md-card-content> {{ ad.price }} Tenge</md-card-content>\n          <md-card-actions>\n              <button (click)=\"openDialog(ad)\" md-ripple=\"white\" md-button>\n                Read more\n              </button>\n          </md-card-actions>\n      </md-card>\n    </div>\n</div>"

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"postsIsLiked\" class=\"post-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" fxLayoutGap=\"15px\" fxFlex=\"60\" fxFlexOffset=\"20\">\n  <button *ngIf=\"can\" md-raised-button color=\"warn\" (click)=\"goToCreatePost()\">Write Post...</button>\n\n  <div [@fadeIn]=\"''\" *ngFor=\"let post of postsIsLiked\">\n    <md-card style=\"width: 100%;\">\n        <md-card-title> {{ post.title }} </md-card-title>\n        <md-card-subtitle>\n            By {{ post.author.first_name }} {{ post.author.last_name }} <br> {{ post.publish_date }}\n        </md-card-subtitle>\n        <!--<md-card-content> {{ post.content }} </md-card-content>-->\n        <div [froalaView]=\"post.content\"></div>\n        <md-card-actions>\n            <button md-ripple=\"white\" md-button *ngIf=\"!post.is_liked\" (click)=\"addUpvote(post)\">\n              <md-icon>favorite</md-icon>\n              {{ post.upvotes }}\n            </button>\n            <button md-ripple=\"white\" md-button *ngIf=\"post.is_liked\">\n              <md-icon style=\"color: red\">favorite</md-icon>\n              {{ post.upvotes }}\n            </button>\n            <button md-button>\n                <md-icon>comments</md-icon> {{ post.comments }}\n            </button>\n            <button (click)=\"goToDetail(post)\" md-ripple=\"white\" md-button>\n              Read more\n            </button>\n        </md-card-actions>\n    </md-card>\n  </div>\n</div>"

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"book\" class=\"post-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n    <md-card style=\"width: 100%; display: inline-block\">\n        <md-card-title> {{ book.title }} </md-card-title>\n        <md-card-subtitle>\n            Author {{ book.author.first_name }} {{ book.author.last_name }}\n        </md-card-subtitle>\n\n        <img src=\"http://fit.kbtu.kz:8080{{ book.cover }}\" style=\"width: 400px; height: 500px;\" alt=\"book image\">\n        <md-card-content style=\"width: 500px; float: right; font-family: italic;\"> <strong>Description:</strong> <br> {{ book.description }} </md-card-content>\n\n        <md-card-actions>\n        </md-card-actions>\n    </md-card>\n\n    <div *ngIf=\"loggedInBool && !isrev\" style=\"margin-bottom: 10px\">\n        <h2>Your Review:</h2>\n        <div class=\"form\">\n            <md-input-container style=\"width: 100%;\">\n                <input mdInput [(ngModel)]=\"model.review\" placeholder=\"Comment\">\n            </md-input-container>\n            <!--<div [froalaEditor] [(froalaModel)]=\"editorContent\"></div>-->\n            <div class=\"sendb\">\n                <button md-button color=\"warn\" (click)=\"addReview()\">Send</button>\n            </div>\n        </div>\n    </div>\n\n    <div style=\"margin-top: 20px\">\n        <h2>Reviews:</h2>\n        <review-list [currentBook]=\"book\"></review-list>\n    </div>\n</div>\n\n<div *ngIf=\"error\">\n    <h2>Ohh... What a book :)</h2>\n</div>"

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "<span class=\"example-pizza-party\">\n  <div style=\"text-align: center;\">Added!!!</div>\n</span>"

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div fxLayoutAlign=\"space-around\" fxFlex=\"80\" fxFlexOffset=\"10\">\n        <img src=\"../../../assets/BookVision.png\" alt=\"bookshelf\">\n    </div>\n</div>\n\n<div *ngIf=\"books\" class=\"post-container\">\n    <div *ngFor=\"let book of books\" \n        [@flyInOut]=\"'in'\"  fxLayoutAlign=\"space-around\" fxFlex=\"24\" fxFlexOffset=\"7\" style=\"margin-bottom:5px;\">\n      <md-card style=\"width: 100%\">\n        <md-card-header>\n            <md-card-title><h2>{{ book.title }}</h2></md-card-title>\n        </md-card-header>\n        <div class=\"image\">\n            <img src=\"http://fit.kbtu.kz:8080{{ book.cover }}\" style=\"width:120px; height:200px;\" alt=\"book image\">\n        </div>\n        \n        <md-card-content>\n            <h3>Author - {{ book.author.first_name }} {{ book.author.last_name }}</h3>\n            <h4>Genre - {{ book.genre }}</h4>\n        </md-card-content>\n            <button md-button color=\"warn\" (click)=\"goToDetail(book)\">Book Detail</button>\n            <button *ngIf=\"loggedInBool\" md-button color=\"warn\" (click)=\"addWishList(book.id)\" aria-label=\"Show an example snack-bar\">Add to Wish List</button>\n        </md-card>\n    </div>\n</div>"

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "<div class=\"custom\">\n  <img src=\"../../assets/not-found.jpg\" class=\"img\" alt=\"Not found\">\n</div>"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <div class=\"button-row\">\n    <button routerLink=\"/books\" md-button>Book List</button>\n    <button routerLink=\"/author\" md-button>Author</button>\n    <button routerLink=\"/blog\" md-button>Blogs</button>\n    <button *ngIf=\"loggedIn()\" routerLink=\"/my_page\" md-button>My Page</button>\n    <button md-button [mdMenuTriggerFor]=\"menu\">\n      Bazaar <md-icon>keyboard_arrow_down</md-icon>\n    </button>\n    <md-menu #menu=\"mdMenu\">\n      <button routerLink=\"/bazaar\" md-menu-item>\n        <span>Bazaar ads</span>\n      </button>\n      <button *ngIf=\"loggedIn()\" routerLink=\"/bazaar/create\" md-menu-item>\n        <span>Create ad</span>\n      </button>\n  </md-menu>\n  </div>\n  \n  <div class=\"auth\">\n    <div *ngIf=\"loggedIn()\" class=\"button-row\">\n      <button md-button>\n        I am, {{ username }}\n      </button>\n    </div>\n    <div class=\"button-row\">\n      <button *ngIf=\"!username\" md-button (click)=\"openSignupDialog()\">Register</button>\n      <button *ngIf=\"!username\" md-button (click)=\"openLoginDialog()\"> Log in</button>\n      <button *ngIf=\"username\" md-button (click)=\"logout()\">Log out</button>\n    </div>\n  </div>\n  \n</md-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<div class=\"post-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" fxLayoutGap=\"15px\" fxFlex=\"60\" fxFlexOffset=\"20\">\n  <h2>Write Post...</h2>\n  <div class=\"form\">\n      <md-input-container style=\"width: 100%;\">\n        <input type=\"text\" mdInput [(ngModel)]=\"model.title\" placeholder=\"Title\" required>\n      </md-input-container>\n      \n      <!--<md-input-container style=\"width: 100%;\">-->\n        <!--<textarea  [(ngModel)]=\"model.content\" mdInput mdTextareaAutosize placeholder=\"Content\" froala></textarea>-->\n        <p>Content</p>\n       <div [froalaEditor] [(froalaModel)]=\"editorContent\"></div>\n      <!--</md-input-container>-->\n      <div class=\"post-container\">\n          <button md-button md-raised-button color=\"warn\" (click)=\"addPost()\">Post</button>\n      </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\" class=\"post-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" fxLayoutGap=\"15px\" fxFlex=\"60\" fxFlexOffset=\"20\">\n    <md-card style=\"width: 100%;\">\n        <md-card-title> {{ post.title }} </md-card-title>\n        <md-card-subtitle>\n            By {{ post.author.first_name }} {{ post.author.last_name }} <br> {{ post.publish_date }}\n        </md-card-subtitle>\n        <!--<md-card-content> {{ post.content }} </md-card-content>-->\n        <div [froalaView]=\"post.content\"></div>\n        <md-card-actions>\n            <button *ngIf=\"canLike\" md-ripple=\"white\" md-button (click)=\"addUpvote()\">\n              <md-icon *ngIf=\"!liked\">favorite</md-icon>\n              <md-icon *ngIf=\"liked\" style=\"color: red\">favorite</md-icon>\n              {{ post.upvotes.length }}\n            </button>\n            <button *ngIf=\"!canLike\" disabled md-ripple=\"white\" md-button (click)=\"addUpvote()\">\n              <md-icon style=\"color: red\">favorite</md-icon>\n              {{ post.upvotes.length }}\n            </button>\n            <button md-button>\n                <md-icon>comments</md-icon> {{ post.comments.length }}\n            </button>\n        </md-card-actions>\n    </md-card>\n    <div *ngIf=\"can\">\n        <h2>Your \"Opinion\":</h2>\n        <div class=\"form\">\n            <md-input-container style=\"width: 100%;\">\n                    <input mdInput [(ngModel)]=\"model.comment\" placeholder=\"Comment\">\n                </md-input-container>\n                <button md-button style=\"margin-bottom: 10px\" (click)=\"addComment()\">Send</button>\n                <!--<button *ngIf=\"!written\" md-button style=\"margin-bottom: 10px\" (click)=\"addComment()\">Send</button>-->\n                <!--<button *ngIf=\"written\" disabled md-button style=\"margin-bottom: 10px\" (click)=\"addComment()\">Sended!</button>-->\n        </div>\n    </div>\n    <h2>Comments:</h2>\n    <div *ngFor=\"let comment of post.comments\">\n        <md-card style=\"width: 100%;\">\n            <md-card-subtitle>\n                {{ comment.author.first_name }} {{ comment.author.last_name }} <br> {{ comment.publish_date }}\n            </md-card-subtitle>\n            <md-card-content> {{ comment.content }} </md-card-content>\n        </md-card>\n    </div>\n</div>"

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<md-card style=\"width: 100%;\">\n<h1>{{ pageTitle }}</h1>\n    <div *ngIf=\"quotes\">\n        <div style=\"margin: 15px\">\n            <button md-button style=\"margin: auto;\" (click)=\"goToAddQuote()\">ADD QUOTE</button>\n        </div>\n        <div *ngFor=\"let quote of quotes\">\n            <div style=\"margin: 20px\">\n                <md-card>\n                <md-card-subtitle>{{ quote.user.first_name }} {{ quote.user.last_name }} | {{ quote.book.title }}</md-card-subtitle>\n                <div style=\"margin: 20px\">\n                    <p>{{ quote.quote}}</p>\n                </div>\n                <button md-raised-button color=\"warn\" (click)=\"deleteQuote(quote.id)\">Delete quote</button>\n            </md-card>\n            </div> \n        </div>\n    </div>\n</md-card>"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let review of reviews\">\n    <md-card style=\"width: 100%;\">\n        <md-card-subtitle>\n            {{ review.user.first_name }} {{ review.user.last_name }}\n        </md-card-subtitle>\n        <md-card-content> {{ review.review }} </md-card-content>\n    </md-card>\n</div>"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"posts\" class=\"post-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" fxLayoutGap=\"15px\" fxFlex=\"60\" fxFlexOffset=\"20\">\n  <div *ngFor=\"let post of posts\">\n    <md-card style=\"width: 100%;\">\n      <h1>{{post.title}}</h1>\n      <md-card-subtitle>\n        By {{ post.author.first_name }} {{ post.author.last_name }} <br> {{ post.publish_date }}\n      </md-card-subtitle>\n      <md-card-actions>\n            <button (click)=\"goToDetail(post)\" md-ripple=\"white\" md-button>Read more</button>\n            <button md-raised-button color=\"warn\" (click)=\"deletePost(post.id)\" md-ripple=\"white\" md-button>Delete post</button>\n        </md-card-actions>\n    </md-card>\n  </div>\n</div>"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<div class=\"post-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n    <md-card style=\"width: 100%;\">\n        <h1>{{ pageTitle }}</h1>\n        <div>\n            <div class=\"div-image\">\n                <img class=\"roundrect\" src=\"https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150\" width=\"200px\" height=\"200px\">        \n            </div>\n            <div class=\"div-content\">\n                 <md-card-subtitle>Username: {{ user.username }}</md-card-subtitle>\n                 <h2>{{ user.first_name }} {{ user.last_name }}</h2>\n            </div>\n        </div>\n    </md-card>\n    <md-tab-group>\n        <md-tab label=\"Wish List\"><wish-list></wish-list></md-tab>\n        <md-tab label=\"Quotes\"><quote></quote></md-tab>\n        <md-tab label=\"Posts\"><app-user-posts></app-user-posts></md-tab>\n    </md-tab-group>\n</div>\n    \n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<md-card style=\"width: 100%;\">\n    <h1>{{ pageTitle }}</h1>\n    <div *ngIf=\"books\" class=\"post-container\">\n        <div *ngFor=\"let book of books\" fxLayoutAlign=\"space-around\" fxFlex=\"24\" fxFlexOffset=\"7\" style=\"margin-bottom:5px;\">\n            <md-card style=\"width: 100%\">\n            <md-card-header>\n                <md-card-title><h2>{{ book.book.title }}</h2></md-card-title>\n            </md-card-header>\n            <div class=\"image\">\n                <img src=\"http://fit.kbtu.kz:8080{{ book.book.cover }}\" style=\"width:120px; height:200px;\">\n            </div>\n            \n            <md-card-content>\n                <h3>Author - {{ book.book.author.first_name }} {{ book.book.author.last_name }}</h3>\n                <h4>Genre - {{ book.book.genre }}</h4>\n            </md-card-content>\n                <button md-ripple=\"white\" md-button (click)=\"goToDetail(book.book)\">Book Detail</button>\n                <button md-raised-button color=\"warn\" (click)=\"removeBook(book.id)\">Remove</button>\n            </md-card>\n        </div>\n    </div>\n</md-card>"

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    //GET ALL WISH_LISTS AND QUOTES
    UserService.prototype.getQuote = function () {
        var url = 'http://fit.kbtu.kz:8080/profile/quotes/all/'; //GET
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        return this.http.get(url, this.jwt()).map(function (res) { return res.json(); });
    };
    UserService.prototype.getWishList = function () {
        var url = 'http://fit.kbtu.kz:8080/profile/wishlist/all/'; //GET
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        return this.http.get(url, this.jwt()).map(function (res) { return res.json(); });
    };
    //ADD [QUOTE] AND [BOOKS TO WISHLIST]
    UserService.prototype.addQuote = function (quote) {
        var url = 'http://fit.kbtu.kz:8080/profile/quotes/add/';
        this.http.post(url, JSON.stringify(quote), this.jwt()).subscribe();
    };
    UserService.prototype.addWishList = function (wishlist) {
        var url = 'http://fit.kbtu.kz:8080/profile/wishlist/add/';
        this.http.post(url, JSON.stringify(wishlist), this.jwt()).subscribe();
    };
    //DELETE [QUOTE] and [BOOKS TO WISHLIST]
    UserService.prototype.deleteQuote = function (id) {
        var url = 'http://fit.kbtu.kz:8080/profile/quotes/delete/' + id.toString() + '/';
        return this.http.post(url, this.jwt()).map(function (res) { return res; });
    };
    UserService.prototype.deleteWishList = function (id) {
        var url = 'http://fit.kbtu.kz:8080/profile/wishlist/delete/' + id.toString() + '/';
        return this.http.post(url, this.jwt()).map(function (res) { return res; });
    };
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log(currentUser.token);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + currentUser.token
            });
            console.log(headers);
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorizationService = (function () {
    function AuthorizationService(http) {
        this.http = http;
    }
    AuthorizationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = 'http://fit.kbtu.kz:8080/auth/login/';
        var body = JSON.stringify({ username: username, password: password });
        return this.http.post(url, body, options)
            .map(function (response) {
            console.log(response);
            console.log(response.status);
            var token = response.json() && response.json().token;
            if (token) {
                _this.token = token;
                localStorage.setItem('user', JSON.stringify({ token: token, username: username }));
                _this.getInfo().subscribe(function (data) {
                    var userInfo = data;
                    localStorage.removeItem('user');
                    localStorage.setItem('user', JSON.stringify({ token: token, username: username, user: userInfo }));
                    location.reload();
                });
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthorizationService.prototype.register = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = 'http://fit.kbtu.kz:8080/auth/register/';
        var body = JSON.stringify(user);
        console.log(body);
        return this.http.post(url, body, options)
            .map(function (response) {
            if (response.status == 200) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthorizationService.prototype.getInfo = function () {
        var url = 'http://fit.kbtu.kz:8080/auth/info/';
        console.log(this.jwt());
        return this.http.get(url, this.jwt()).map(function (res) { return res.json(); });
    };
    AuthorizationService.prototype.isLoggedIn = function () {
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthorizationService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('user');
        location.reload();
    };
    AuthorizationService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log(currentUser);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    return AuthorizationService;
}());
AuthorizationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AuthorizationService);

var _a;
//# sourceMappingURL=authorization.service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
    }
    BlogService.prototype.getAllPosts = function () {
        var url = 'http://fit.kbtu.kz:8080/blog/post/all/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    //TODO: Set button
    BlogService.prototype.deletePost = function (id) {
        var url = 'http://fit.kbtu.kz:8080/blog/post/delete/' + id.toString() + '/';
        return this.http.post(url, this.jwt()).map(function (res) { return res; });
    };
    //TODO: Set button
    BlogService.prototype.deleteComment = function (id) {
        var url = 'http://fit.kbtu.kz:8080/blog/post/comment/delete/' + id.toString() + '/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.post(url, this.jwt()).subscribe();
    };
    BlogService.prototype.getUserPosts = function (id) {
        var url = 'http://fit.kbtu.kz:8080/blog/post/user/' + id.toString() + '/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getPost = function (id) {
        var url = 'http://fit.kbtu.kz:8080/blog/post/' + id.toString() + '/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.postComment = function (comment) {
        var url = 'http://fit.kbtu.kz:8080/blog/post/comment/create/';
        this.http.post(url, JSON.stringify(comment), this.jwt()).subscribe();
    };
    BlogService.prototype.addPost = function (post) {
        var url = 'http://fit.kbtu.kz:8080/blog/post/create/';
        this.http.post(url, JSON.stringify(post), this.jwt()).subscribe();
    };
    BlogService.prototype.addUpvote = function (upvote) {
        var url = 'http://fit.kbtu.kz:8080/blog/post/upvote/create/';
        return this.http.post(url, JSON.stringify(upvote), this.jwt()).map(function (res) { return res.json(); });
    };
    BlogService.prototype.isLiked = function (id) {
        var url = 'http://fit.kbtu.kz:8080/blog/post/upvote/isliked/' + id.toString() + '/';
        return this.http.get(url, this.jwt()).map(function (res) { return res.status; });
    };
    BlogService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log(currentUser.token);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + currentUser.token
            });
            console.log(headers);
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    return BlogService;
}());
BlogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BlogService);

var _a;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BazaarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BazaarService = (function () {
    function BazaarService(http) {
        this.http = http;
    }
    BazaarService.prototype.getChosenAd = function () {
        return this.chosenAd;
    };
    BazaarService.prototype.setChosenAd = function (ad) {
        this.chosenAd = ad;
    };
    BazaarService.prototype.getAllAds = function () {
        var url = 'http://fit.kbtu.kz:8080/bazaar/all/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    BazaarService.prototype.getAd = function (id) {
        var url = 'http://fit.kbtu.kz:8080/bazaar/' + id.toString() + '/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    BazaarService.prototype.createAd = function (ad) {
        var url = 'http://fit.kbtu.kz:8080/bazaar/create/';
        return this.http.post(url, JSON.stringify(ad), this.jwt()).map(function (res) { return res.json(); });
    };
    BazaarService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.token) {
            console.log(currentUser.token);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json',
                'Authorization': 'JWT ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    return BazaarService;
}());
BazaarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BazaarService);

var _a;
//# sourceMappingURL=bazaar.service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorService = (function () {
    function AuthorService(http) {
        this.http = http;
    }
    AuthorService.prototype.getAuthor = function (id) {
        var url = 'http://fit.kbtu.kz:8080/book/author/' + id.toString() + '/';
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    AuthorService.prototype.getAllAuthors = function () {
        var url = 'http://fit.kbtu.kz:8080/book/author/all/';
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    return AuthorService;
}());
AuthorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AuthorService);

var _a;
//# sourceMappingURL=author.service.js.map

/***/ })

},[596]);
//# sourceMappingURL=main.bundle.js.map