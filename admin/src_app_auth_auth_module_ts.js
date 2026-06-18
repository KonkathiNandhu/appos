"use strict";
(self["webpackChunkux"] = self["webpackChunkux"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 40431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 60980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../auth/login/login.module */ 28990)).then(m => m.LoginModule)
            },
            {
                path: 'resetpassword',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_resetpassword_resetpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./resetpassword/resetpassword.module */ 82219)).then(m => m.ResetPasswordModule)
            }
        ]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 60980:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["ux-auth"]], decls: 2, vars: 0, consts: [[1, "w-full", "h-full"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 71674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 60980);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-routing.module */ 40431);
/* harmony import */ var _pages_ui_icons_icons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/ui/icons/icons.module */ 25463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);












class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
        _pages_ui_icons_icons_module__WEBPACK_IMPORTED_MODULE_2__.IconsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
        _pages_ui_icons_icons_module__WEBPACK_IMPORTED_MODULE_2__.IconsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule] }); })();


/***/ }),

/***/ 21821:
/*!********************************************************!*\
  !*** ./src/app/pages/ui/icons/icons-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsRoutingModule": () => (/* binding */ IconsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.component */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _icons_component__WEBPACK_IMPORTED_MODULE_0__.IconsComponent,
        data: {
            scrollDisabled: true
        },
        children: [
            {
                path: '',
                redirectTo: 'ic',
                pathMatch: 'full'
            },
            {
                path: 'ic',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_icons_icons-ic_icons-ic_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./icons-ic/icons-ic.module */ 86592)).then(m => m.IconsIcModule)
            },
            {
                path: 'fa',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ui_icons_icons-fa_icons-fa_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./icons-fa/icons-fa.module */ 18850)).then(m => m.IconsFaModule)
            }
        ]
    }
];
class IconsRoutingModule {
}
IconsRoutingModule.ɵfac = function IconsRoutingModule_Factory(t) { return new (t || IconsRoutingModule)(); };
IconsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IconsRoutingModule });
IconsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 4058:
/*!***************************************************!*\
  !*** ./src/app/pages/ui/icons/icons.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsComponent": () => (/* binding */ IconsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ux_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ux/animations/scale-in.animation */ 5379);
/* harmony import */ var _ux_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-right.animation */ 57262);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);














function IconsComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const link_r1 = ctx.$implicit;

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("active", _r2.isActive)("disabled", link_r1.disabled)("routerLink", link_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", link_r1.label, " ");
  }
}

let IconsComponent = class IconsComponent {
  constructor(router) {
    this.router = router;
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl();
    this.colorCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl();
    this.color$ = this.colorCtrl.valueChanges;
    this.links = [{
      label: 'MATERIAL ICONS',
      route: 'ic'
    }, {
      label: 'FONT AWESOME',
      route: 'fa'
    }];
  }

  ngOnInit() {
    this.searchCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(20), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(search => this.router.navigate([], {
      queryParams: {
        search
      }
    }));
  }

};

IconsComponent.ɵfac = function IconsComponent_Factory(t) {
  return new (t || IconsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

IconsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: IconsComponent,
  selectors: [["ux-icons"]],
  decls: 17,
  vars: 8,
  consts: [[1, "h-full", "flex", "flex-col"], [1, "px-gutter", "pt-6", "pb-0", "bg-foreground", "shadow-b", "flex-none"], [1, "container"], [1, "display-1", "mt-0", "mb-4", "flex", "items-center"], [1, "w-12", "h-12", "rounded-full", "text-primary", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary/10"], ["svgIcon", "mat:star"], [1, "block"], [1, "flex", "items-center"], ["mat-tab-nav-bar", "", 1, "ux-tabs", "border-0", "flex-auto"], ["mat-tab-link", "", "queryParamsHandling", "preserve", "routerLinkActive", "", 3, "active", "disabled", "routerLink", 4, "ngFor", "ngForOf"], [1, "border", "rounded-full", "text-hint", "overflow-hidden", "bg-foreground", "ml-2", "flex-none", "items-center", "hidden", "sm:flex"], ["svgIcon", "mat:search", 1, "ml-4", "mr-3", "icon-sm"], ["placeholder", "Search Icons...", "type", "text", 1, "outline-none", "border-0", "h-10", "placeholder:text-secondary", "body-1", "bg-foreground", "flex-auto", 3, "formControl"], [1, "flex", "flex-col", "flex-auto"], ["mat-tab-link", "", "queryParamsHandling", "preserve", "routerLinkActive", "", 3, "active", "disabled", "routerLink"], ["rla", "routerLinkActive"]],
  template: function IconsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Icons");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "nav", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, IconsComponent_a_10_Template, 3, 4, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 11)(13, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scaleIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInRight", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.links);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.searchCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 6, ctx.color$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, ngx_quicklink__WEBPACK_IMPORTED_MODULE_8__["ɵɵLinkDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29ucy5jb21wb25lbnQuc2NzcyJ9 */"],
  data: {
    animation: [_ux_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleIn400ms, _ux_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInRight400ms]
  }
});
IconsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()], IconsComponent);


/***/ }),

/***/ 25463:
/*!************************************************!*\
  !*** ./src/app/pages/ui/icons/icons.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsModule": () => (/* binding */ IconsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons-routing.module */ 21821);
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons.component */ 4058);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);










class IconsModule {
}
IconsModule.ɵfac = function IconsModule_Factory(t) { return new (t || IconsModule)(); };
IconsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IconsModule });
IconsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconsRoutingModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.ScrollingModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IconsModule, { declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_1__.IconsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconsRoutingModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.ScrollingModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 57262:
/*!******************************************************!*\
  !*** ./src/ux/animations/fade-in-right.animation.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInRight400ms": () => (/* binding */ fadeInRight400ms),
/* harmony export */   "fadeInRightAnimation": () => (/* binding */ fadeInRightAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);

function fadeInRightAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInRight', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateX(-20px)',
                opacity: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateX(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInRight400ms = fadeInRightAnimation(400);


/***/ }),

/***/ 5379:
/*!*************************************************!*\
  !*** ./src/ux/animations/scale-in.animation.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleIn400ms": () => (/* binding */ scaleIn400ms),
/* harmony export */   "scaleInAnimation": () => (/* binding */ scaleInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);

function scaleInAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleIn', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(0)'
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(1)'
            }))
        ])
    ]);
}
const scaleIn400ms = scaleInAnimation(400);


/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map