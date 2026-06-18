"use strict";
(self["webpackChunkux"] = self["webpackChunkux"] || []).push([["src_app_pages_productmanagement_posmanagement_posmanagement_module_ts"],{

/***/ 74558:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/productmanagement/posmanagement/posmanagement-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosmanagementRoutingModule": () => (/* binding */ PosmanagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _posmanagement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posmanagement.component */ 16081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _posmanagement_component__WEBPACK_IMPORTED_MODULE_0__.PosmanagementComponent,
        data: {
            toolbarShadowEnabled: false
        }
    }
];
class PosmanagementRoutingModule {
}
PosmanagementRoutingModule.ɵfac = function PosmanagementRoutingModule_Factory(t) { return new (t || PosmanagementRoutingModule)(); };
PosmanagementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PosmanagementRoutingModule });
PosmanagementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PosmanagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 16081:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/productmanagement/posmanagement/posmanagement.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosmanagementComponent": () => (/* binding */ PosmanagementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _ux_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ux/animations/stagger.animation */ 85819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _posmanagement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posmanagement.service */ 80599);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _setup_activitymaster_activitymaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../setup/activitymaster/activitymaster.service */ 25925);
/* harmony import */ var _setup_unitmaster_unitmaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../setup/unitmaster/unitmaster.service */ 80514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.component */ 96197);
/* harmony import */ var _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-header.directive */ 7755);
/* harmony import */ var _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-content.directive */ 89354);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 68562);



























function PosmanagementComponent_ux_page_layout_content_7_mat_card_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PosmanagementComponent_ux_page_layout_content_7_mat_card_13_Template_mat_card_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7); const unit_r4 = restoredCtx.$implicit; const i_r5 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r6.onSelectUnit(unit_r4, i_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r1.unitselected_index === i_r5 ? "w3-deep-orange w3-text-white" : "w3-light-grey w3-text-black");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", unit_r4.unit_name, " ");
} }
function PosmanagementComponent_ux_page_layout_content_7_div_14_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card", 23)(1, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function PosmanagementComponent_ux_page_layout_content_7_div_14_mat_card_5_Template_mat_checkbox_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12); const activity_r9 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](activity_r9.selected = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PosmanagementComponent_ux_page_layout_content_7_div_14_mat_card_5_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12); const activity_r9 = restoredCtx.$implicit; const i_r10 = restoredCtx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r13.onSetupClicked(activity_r9, i_r10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "SETUP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const activity_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", activity_r9.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", activity_r9.activity_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", !activity_r9.selected ? "w3-light-grey" : "w3-black")("disabled", !activity_r9.selected);
} }
function PosmanagementComponent_ux_page_layout_content_7_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 21)(1, "div", 14)(2, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Select Activities");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, PosmanagementComponent_ux_page_layout_content_7_div_14_mat_card_5_Template, 5, 4, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.activitymaster_list);
} }
function PosmanagementComponent_ux_page_layout_content_7_div_15_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36)(1, "mat-form-field", 37)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-form-field", 39)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Item Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "mat-form-field", 41)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PosmanagementComponent_ux_page_layout_content_7_div_15_div_8_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18); const i_r16 = restoredCtx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r17.onDeleteItem(i_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, " REMOVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r16);
} }
function PosmanagementComponent_ux_page_layout_content_7_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Add Billing Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 29)(6, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function PosmanagementComponent_ux_page_layout_content_7_div_15_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r19.onSavePos()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, PosmanagementComponent_ux_page_layout_content_7_div_15_div_8_Template, 15, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div")(10, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PosmanagementComponent_ux_page_layout_content_7_div_15_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r21.onAddNew()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "ADD NEW ROW");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 34)(13, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "SAVE PAGES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r3.posForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.poscontrols);
} }
function PosmanagementComponent_ux_page_layout_content_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ux-page-layout-content", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 10)(6, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 12)(8, "div", 13)(9, "div", 14)(10, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Select Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, PosmanagementComponent_ux_page_layout_content_7_mat_card_13_Template, 2, 2, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, PosmanagementComponent_ux_page_layout_content_7_div_14_Template, 6, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, PosmanagementComponent_ux_page_layout_content_7_div_15_Template, 15, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("container", ctx_r0.layoutCtrl.value === "boxed")("px-gutter", ctx_r0.layoutCtrl.value === "fullwidth");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx_r0.searchCtrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.unitmaster_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.unitselected_index != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.unitselected_index != undefined && ctx_r0.activityselected_index != undefined);
} }
const _c0 = function () { return ["Administration", "POS Administration"]; };
let PosmanagementComponent = class PosmanagementComponent {
    constructor(posmanagementService, authService, sharedService, dialog, _snackBar, activityService, unitService) {
        this.posmanagementService = posmanagementService;
        this.authService = authService;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.activityService = activityService;
        this.unitService = unitService;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl('fullwidth');
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__.SelectionModel(true, []);
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl();
        this.posmanagement_list = [];
        this.page_mode = 'Grid'; //Grid or AddEdit
        this.pos_list = [];
        this.activitymaster_list = [];
        this.unitmaster_list = [];
    }
    ngOnInit() {
        this.unitService.getAllUnits();
        this.unitSubscription = this.unitService.unitsChanged
            .subscribe((units) => {
            this.unitmaster_list = units;
            console.log(this.unitmaster_list);
        });
        this.activityService.getAllActivties();
        this.activitySubscription = this.activityService.activitiesChanged
            .subscribe((activities) => {
            this.activitymaster_list = activities;
            this.activitymaster_list.forEach(element => {
                element.selected = false;
                element.billing_items = [];
            });
        });
    }
    onSelectUnit(unit, index) {
        this.unitselected_index = undefined;
        this.activityselected_index = undefined;
        setTimeout(() => {
            this.unitselected_index = index;
            //get the activities for the selected unit
            this.getActivitiesByUnit(unit._id);
        }, 200);
    }
    getActivitiesByUnit(unit_id) {
        this.posmanagementService.getActivitiesByUnit(unit_id)
            .then((res) => {
            console.log(res);
            if (res.messagecode === 100) {
                if (res.posdata.activities.length > 0) {
                    let selected_activities = res.posdata.activities;
                    this.activitymaster_list.forEach(element => {
                        let objIdx = selected_activities.findIndex(x => x._id === element._id && x.selected === true);
                        if (objIdx != -1) {
                            element.selected = true;
                            element.billing_items = selected_activities[objIdx].billing_items;
                        }
                        else {
                            element.selected = false;
                            element.billing_items = [];
                        }
                    });
                }
                else {
                    //uncheck all selected activites and reset
                    this.activitymaster_list.forEach(element => {
                        element.selected = false;
                        element.billing_items = [];
                    });
                }
            }
        })
            .catch((err) => {
        });
    }
    onSetupClicked(activity, index) {
        console.log(activity);
        this.activityselected_index = undefined;
        setTimeout(() => {
            this.activityselected_index = index;
            //pages
            if (activity.billing_items.length > 0) {
                this.posnames = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormArray([]);
                for (let entity of activity.billing_items) {
                    this.posnames.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
                        'itemid': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(entity.itemid),
                        'itemname': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(entity.itemname),
                        'itemprice': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(entity.itemprice),
                        'itemdescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(entity.itemdescription)
                    }));
                }
                //we have to check if the count is more than 2, else we will push one empty entity
                if (this.posnames.length < 2) {
                    this.posnames.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
                        'itemid': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(''),
                        'itemname': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(''),
                        'itemprice': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(''),
                        'itemdescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('')
                    }));
                }
                this.posForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
                    'posnames': this.posnames
                });
            }
            else {
                this.posnames = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormArray([]);
                for (let index = 0; index < 2; index++) {
                    this.posnames.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
                        'itemid': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(''),
                        'itemname': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(''),
                        'itemprice': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(''),
                        'itemdescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('')
                    }));
                }
                ;
                this.posForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
                    'posnames': this.posnames
                });
            }
        }, 200);
    }
    get poscontrols() {
        return this.posForm.get('posnames').controls;
    }
    onAddNew() {
        this.posForm.get('posnames').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
            'itemid': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(''),
            'itemname': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(''),
            'itemprice': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(''),
            'itemdescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('')
        }));
    }
    onDeleteItem(index) {
        let objIdx = this.poscontrols.findIndex(x => x.value.itemid === this.posnames.value[index].itemid);
        this.poscontrols.splice(objIdx, 1);
        this.posnames.value.splice(index, 1);
    }
    onSavePos() {
        console.log(this.posnames);
        let billing_list = [];
        this.posnames.value.forEach(element => {
            if ((element.itemname != '' && element.itemname != null) && (element.itemprice != '' && element.itemprice != null)) {
                element.itemid = Guid.newGuid();
                billing_list.push(element);
            }
        });
        this.activitymaster_list[this.activityselected_index].billing_items = billing_list;
        console.log(this.activitymaster_list);
        let billData = {
            unit_id: this.unitmaster_list[this.unitselected_index]._id,
            activities: this.activitymaster_list
        };
        console.log(billData);
        this.posmanagementService.savePOS(billData)
            .then(res => {
            let resData = res;
            console.log(resData);
            if (resData.messagecode === 101) {
                //clear all data
                this.activityselected_index = undefined;
                this.unitselected_index = undefined;
            }
        })
            .catch(err => {
            console.log(err);
        });
    }
    openSnackBar(title, message) {
        this._snackBar.open(message, title, {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
    }
};
PosmanagementComponent.ɵfac = function PosmanagementComponent_Factory(t) { return new (t || PosmanagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_posmanagement_service__WEBPACK_IMPORTED_MODULE_2__.PosmanagementService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_setup_activitymaster_activitymaster_service__WEBPACK_IMPORTED_MODULE_5__.ActivitymasterService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_setup_unitmaster_unitmaster_service__WEBPACK_IMPORTED_MODULE_6__.UnitmasterService)); };
PosmanagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: PosmanagementComponent, selectors: [["ux-posmanagement"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: {
                    appearance: 'standard'
                }
            }
        ])], decls: 8, vars: 7, consts: [[1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1", 2, "display", "block", "font-size", "30px", "font-weight", "600"], [3, "crumbs"], ["class", "-mt-6", 3, "container", "px-gutter", 4, "ngIf"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], [1, "flex-1"], [1, "bg-foreground", "rounded-full", "border", "px-4", "max-w-[300px]", "flex-auto", "flex", "items-center", "border", "border-gray-300"], ["svgIcon", "mat:search", 1, "icon-sm", "text-secondary"], ["placeholder", "Search...", "type", "search", 1, "px-4", "py-2", "border-0", "outline-none", "w-full", "bg-transparent", 3, "formControl"], [1, "mt-2", "flex", "flex-col", "md:flex-row", "md:items-start"], [1, "card", "max-w-unset", "md:max-w-xs", "w-full", "flex-none", "mt-2", "md:mt-0"], [1, "px-6", "py-4", "border-b"], [1, "title", "m-0"], [2, "margin", "10px"], ["style", "margin-bottom: 5px; cursor: pointer;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "card max-w-unset md:max-w-xs w-full flex-none md:ltr:ml-6 md:rtl:mr-6 mt-2 md:mt-0 w3-animate-left", 4, "ngIf"], ["class", "flex-auto w3-animate-left", 4, "ngIf"], [2, "margin-bottom", "5px", "cursor", "pointer", 3, "ngClass", "click"], [1, "card", "max-w-unset", "md:max-w-xs", "w-full", "flex-none", "md:ltr:ml-6", "md:rtl:mr-6", "mt-2", "md:mt-0", "w3-animate-left"], ["style", "margin-bottom: 5px;", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "5px"], [1, "checkbox-margin", "w3-block", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "w3-margin-top", "w3-block", 3, "ngClass", "disabled", "click"], [1, "flex-auto", "w3-animate-left"], [1, "card", "md:ltr:ml-6", "md:rtl:mr-6"], [1, "px-gutter", "py-4", "border-b"], [1, "px-gutter", "py-4", "w3-margin-top"], [3, "formGroup", "ngSubmit"], ["formArrayName", "posnames"], ["style", "display:flex;align-items:center;", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", "mat-stroked-button", "", 1, "w3-text-blue", "w3-block", 3, "click"], [1, "w3-margin-top", "w3-margin-bottom"], ["mat-raised-button", "", "type", "submit", 1, "w3-green", "w3-block"], [2, "display", "flex", "align-items", "center", 3, "formGroupName"], ["appearance", "standard", 2, "width", "30%"], ["matInput", "", "placeholder", "Enter Item Name", "formControlName", "itemname", "autocomplete", "off"], ["appearance", "standard", 2, "width", "15%", "padding-left", "10px"], ["matInput", "", "placeholder", "Enter Item Price", "formControlName", "itemprice", "autocomplete", "off"], ["appearance", "standard", 2, "width", "35%", "padding-left", "10px"], ["matInput", "", "placeholder", "Enter Description", "formControlName", "itemdescription", "autocomplete", "off"], ["type", "button", "mat-raised-button", "", 1, "w3-text-red", "w3-right", 2, "width", "20%", 3, "click"]], template: function PosmanagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "POS Administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ux-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, PosmanagementComponent_ux_page_layout_content_7_Template, 16, 8, "ux-page-layout-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.page_mode === "Grid");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_7__.PageLayoutComponent, _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_8__.PageLayoutHeaderDirective, _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__.PageLayoutContentDirective, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__.BreadcrumbsComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormArrayName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput], styles: [".action-icons[_ngcontent-%COMP%] {\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.checkbox-margin[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc21hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJwb3NtYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbi1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDsgXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jaGVja2JveC1tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAwIDEycHg7XHJcbiAgfSJdfQ== */"], data: { animation: [
            _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms,
            _ux_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__.stagger40ms
        ] } });
PosmanagementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_24__.UntilDestroy)()
], PosmanagementComponent);

class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}


/***/ }),

/***/ 55794:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/productmanagement/posmanagement/posmanagement.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosmanagementModule": () => (/* binding */ PosmanagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _posmanagement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posmanagement-routing.module */ 74558);
/* harmony import */ var _posmanagement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posmanagement.component */ 16081);
/* harmony import */ var _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.module */ 43492);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.module */ 39784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);




















class PosmanagementModule {
}
PosmanagementModule.ɵfac = function PosmanagementModule_Factory(t) { return new (t || PosmanagementModule)(); };
PosmanagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PosmanagementModule });
PosmanagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _posmanagement_routing_module__WEBPACK_IMPORTED_MODULE_0__.PosmanagementRoutingModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__.MatButtonToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PosmanagementModule, { declarations: [_posmanagement_component__WEBPACK_IMPORTED_MODULE_1__.PosmanagementComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _posmanagement_routing_module__WEBPACK_IMPORTED_MODULE_0__.PosmanagementRoutingModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__.MatButtonToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_productmanagement_posmanagement_posmanagement_module_ts.js.map