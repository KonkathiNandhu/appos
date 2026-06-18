"use strict";
(self["webpackChunkux"] = self["webpackChunkux"] || []).push([["src_app_pages_dashboards_dashboard-analytics_dashboard-analytics_module_ts"],{

/***/ 69442:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAnalyticsRoutingModule": () => (/* binding */ DashboardAnalyticsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-analytics.component */ 27043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_0__.DashboardAnalyticsComponent
    }
];
class DashboardAnalyticsRoutingModule {
}
DashboardAnalyticsRoutingModule.ɵfac = function DashboardAnalyticsRoutingModule_Factory(t) { return new (t || DashboardAnalyticsRoutingModule)(); };
DashboardAnalyticsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardAnalyticsRoutingModule });
DashboardAnalyticsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardAnalyticsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 27043:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAnalyticsComponent": () => (/* binding */ DashboardAnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications/notifications.component */ 38274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _setup_unitmaster_unitmaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../setup/unitmaster/unitmaster.service */ 80514);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ux_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ux/components/secondary-toolbar/secondary-toolbar.component */ 86155);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);








function DashboardAnalyticsComponent_mat_card_3_p_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardAnalyticsComponent_mat_card_3_p_4_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const unit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.onOpenNotifications(unit_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](unit_r1.notifications.length);
} }
function DashboardAnalyticsComponent_mat_card_3_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](unit_r1.notifications.length);
} }
function DashboardAnalyticsComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "div", 4)(2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DashboardAnalyticsComponent_mat_card_3_p_4_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DashboardAnalyticsComponent_mat_card_3_p_5_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const unit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](unit_r1.unit_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", unit_r1.notifications.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", unit_r1.notifications.length === 0);
} }
const _c0 = function () { return ["Dashboards", "Analytics"]; };
class DashboardAnalyticsComponent {
    constructor(unitService, dialog) {
        this.unitService = unitService;
        this.dialog = dialog;
        this.unitnotifications_list = [];
    }
    ngOnInit() {
        this.unitService.getAllUnitNotifications();
        this.unitSubscription = this.unitService.unitnotificationsChanged
            .subscribe((units) => {
            this.unitnotifications_list = units;
            console.log(this.unitnotifications_list);
        });
    }
    onOpenNotifications(notificationinfo) {
        this.dialog.open(_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_0__.NotificationsComponent, {
            height: '70%',
            width: '70%',
            data: {
                notificationinfo: notificationinfo
            }
        }).afterClosed().subscribe((data) => {
        });
    }
}
DashboardAnalyticsComponent.ɵfac = function DashboardAnalyticsComponent_Factory(t) { return new (t || DashboardAnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_setup_unitmaster_unitmaster_service__WEBPACK_IMPORTED_MODULE_1__.UnitmasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
DashboardAnalyticsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardAnalyticsComponent, selectors: [["ux-dashboard-analytics"]], decls: 4, vars: 3, consts: [["current", "Dashboard"], [1, "flex-auto", 3, "crumbs"], [1, "container", "p-gutter", "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-4", "gap-4"], [4, "ngFor", "ngForOf"], [1, "w3-center"], [1, "headline", "font-bold", "m-0", "w3-padding"], ["class", "w3-xxxlarge w3-padding w3-text-red", "style", "font-weight: 600; cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "w3-xxxlarge w3-padding w3-text-green", "style", "font-weight: 600;", 4, "ngIf"], [1, "caption", "text-secondary", "m-0"], [1, "w3-xxxlarge", "w3-padding", "w3-text-red", 2, "font-weight", "600", "cursor", "pointer", 3, "click"], [1, "w3-xxxlarge", "w3-padding", "w3-text-green", 2, "font-weight", "600"]], template: function DashboardAnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ux-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ux-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DashboardAnalyticsComponent_mat_card_3_Template, 8, 3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.unitnotifications_list);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _ux_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarComponent, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 22848:
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAnalyticsModule": () => (/* binding */ DashboardAnalyticsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-analytics-routing.module */ 69442);
/* harmony import */ var _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-analytics.component */ 27043);
/* harmony import */ var _ux_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ux/components/chart/chart.module */ 97858);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ux_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/secondary-toolbar/secondary-toolbar.module */ 73271);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.module */ 39784);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.module */ 43492);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications/notifications.module */ 67658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);












class DashboardAnalyticsModule {
}
DashboardAnalyticsModule.ɵfac = function DashboardAnalyticsModule_Factory(t) { return new (t || DashboardAnalyticsModule)(); };
DashboardAnalyticsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DashboardAnalyticsModule });
DashboardAnalyticsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardAnalyticsRoutingModule,
        _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_6__.NotificationsModule,
        _ux_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__.ChartModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _ux_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DashboardAnalyticsModule, { declarations: [_dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_1__.DashboardAnalyticsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardAnalyticsRoutingModule,
        _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_6__.NotificationsModule,
        _ux_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__.ChartModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _ux_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule] }); })();


/***/ }),

/***/ 38274:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard-analytics/notifications/notifications.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 71528);









function NotificationsComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 7)(6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "OPEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](notification_r1.created_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](notification_r1.notification_description);
} }
class NotificationsComponent {
    constructor(defaults, dialogRef, authService, sharedService) {
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.sharedService = sharedService;
    }
    ngOnInit() {
        console.log(this.defaults);
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService)); };
NotificationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["ux-notifications"]], decls: 16, vars: 2, consts: [["mat-dialog-title", "", 1, "flex", "items-center"], [1, "headline", "m-0", "flex-auto"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "-mx-6", "text-border"], [1, "flex", "flex-col"], [1, "w3-table-all"], [2, "width", "20%"], [2, "width", "60%"], [4, "ngFor", "ngForOf"], ["mat-flat-button", "", "type", "button", 1, "w3-red"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-dialog-content", 5)(7, "table", 6)(8, "tr")(9, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Notification Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NotificationsComponent_tr_15_Template, 8, 2, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.defaults.notificationinfo.unit_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.defaults.notificationinfo.notifications);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 67658:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard-analytics/notifications/notifications.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsModule": () => (/* binding */ NotificationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.component */ 38274);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);












class NotificationsModule {
}
NotificationsModule.ɵfac = function NotificationsModule_Factory(t) { return new (t || NotificationsModule)(); };
NotificationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotificationsModule });
NotificationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationsModule, { declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_0__.NotificationsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule], exports: [_notifications_component__WEBPACK_IMPORTED_MODULE_0__.NotificationsComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboards_dashboard-analytics_dashboard-analytics_module_ts.js.map