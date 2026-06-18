"use strict";
(self["webpackChunkux"] = self["webpackChunkux"] || []).push([["src_app_pages_users_groups_groups_module_ts"],{

/***/ 1330:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/users/groups/groups-create-update/groups-create-update.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsCreateUpdateComponent": () => (/* binding */ GroupsCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../groups.service */ 25006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 71528);












function GroupsCreateUpdateComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.form.get("group_name").value);
} }
function GroupsCreateUpdateComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GroupsCreateUpdateComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GroupsCreateUpdateComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class GroupsCreateUpdateComponent {
    constructor(defaults, dialogRef, fb, groupsService) {
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.groupsService = groupsService;
        this.mode = 'create';
    }
    ngOnInit() {
        if (this.defaults) {
            this.mode = 'update';
        }
        else {
            this.defaults = {};
        }
        this.form = this.fb.group({
            group_id: this.defaults._id || '',
            group_name: this.defaults.group_name,
            group_description: [this.defaults.group_description || ''],
            status: this.defaults.status || '1',
            is_admin: this.defaults.is_admin || false
        });
    }
    save() {
        if (this.mode === 'create') {
            this.createGroups();
        }
        else if (this.mode === 'update') {
            this.updateGroups();
        }
    }
    createGroups() {
        const groups = this.form.value;
        this.dialogRef.close(groups);
    }
    updateGroups() {
        const groups = this.form.value;
        groups._id = this.defaults._id;
        this.dialogRef.close(groups);
    }
    isCreateMode() {
        return this.mode === 'create';
    }
    isUpdateMode() {
        return this.mode === 'update';
    }
}
GroupsCreateUpdateComponent.ɵfac = function GroupsCreateUpdateComponent_Factory(t) { return new (t || GroupsCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_groups_service__WEBPACK_IMPORTED_MODULE_0__.GroupsService)); };
GroupsCreateUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupsCreateUpdateComponent, selectors: [["ux-groups-create-update"]], decls: 25, vars: 5, consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["class", "headline m-0 flex-auto", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "-mx-6", "text-border"], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row"], [1, "mt-6", "flex-auto"], ["cdkFocusInitial", "", "formControlName", "group_name", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:person", 1, "mr-3"], [1, "flex-auto"], ["formControlName", "group_description", "matInput", ""], ["formControlName", "is_admin", 1, "checkbox-margin"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 4, "ngIf"], [1, "headline", "m-0", "flex-auto"], ["color", "primary", "mat-flat-button", "", "type", "submit"]], template: function GroupsCreateUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function GroupsCreateUpdateComponent_Template_form_ngSubmit_0_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GroupsCreateUpdateComponent_h2_2_Template, 2, 1, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GroupsCreateUpdateComponent_h2_3_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-dialog-content", 6)(8, "div", 7)(9, "mat-form-field", 8)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Group Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9)(13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 11)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Is Admin Group?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-dialog-actions", 14)(21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, GroupsCreateUpdateComponent_button_23_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, GroupsCreateUpdateComponent_button_24_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("group_name").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.form.get("group_name").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCreateMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUpdateMode());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider], styles: [".checkbox-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3Vwcy1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6Imdyb3Vwcy1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94LW1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9Il19 */"] });


/***/ }),

/***/ 29470:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/users/groups/groups-create-update/groups-create-update.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsCreateUpdateModule": () => (/* binding */ GroupsCreateUpdateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _groups_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups-create-update.component */ 1330);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);













class GroupsCreateUpdateModule {
}
GroupsCreateUpdateModule.ɵfac = function GroupsCreateUpdateModule_Factory(t) { return new (t || GroupsCreateUpdateModule)(); };
GroupsCreateUpdateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GroupsCreateUpdateModule });
GroupsCreateUpdateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GroupsCreateUpdateModule, { declarations: [_groups_create_update_component__WEBPACK_IMPORTED_MODULE_0__.GroupsCreateUpdateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule], exports: [_groups_create_update_component__WEBPACK_IMPORTED_MODULE_0__.GroupsCreateUpdateComponent] }); })();


/***/ }),

/***/ 853:
/*!*************************************************************!*\
  !*** ./src/app/pages/users/groups/groups-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsRoutingModule": () => (/* binding */ GroupsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups.component */ 59007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _groups_component__WEBPACK_IMPORTED_MODULE_0__.GroupsComponent,
        data: {
            toolbarShadowEnabled: false
        }
    }
];
class GroupsRoutingModule {
}
GroupsRoutingModule.ɵfac = function GroupsRoutingModule_Factory(t) { return new (t || GroupsRoutingModule)(); };
GroupsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GroupsRoutingModule });
GroupsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GroupsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 59007:
/*!********************************************************!*\
  !*** ./src/app/pages/users/groups/groups.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsComponent": () => (/* binding */ GroupsComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _groups_create_update_groups_create_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups-create-update/groups-create-update.component */ 1330);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _ux_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/animations/stagger.animation */ 85819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups.service */ 25006);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.service */ 77420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.component */ 96197);
/* harmony import */ var _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-header.directive */ 7755);
/* harmony import */ var _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-content.directive */ 89354);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
































function GroupsComponent_span_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function GroupsComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, GroupsComponent_span_11_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r0.selection.selected.length, " Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.selection.selected.length > 1);
  }
}

function GroupsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupsComponent_div_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.deleteSupercategories(ctx_r18.selection.selected));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function GroupsComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 41)(1, "mat-checkbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function GroupsComponent_th_23_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event ? ctx_r20.masterToggle() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
  }
}

function GroupsComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 43)(1, "mat-checkbox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function GroupsComponent_td_24_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const row_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event ? ctx_r23.selection.toggle(row_r22) : null);
    })("click", function GroupsComponent_td_24_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r22));
  }
}

function GroupsComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 41);
  }
}

function GroupsComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", row_r26["imageSrc"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}

function GroupsComponent_ng_container_28_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", column_r27.label, "");
  }
}

function GroupsComponent_ng_container_28_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r32 = ctx.$implicit;
    const column_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", column_r27.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r32[column_r27.property]);
  }
}

function GroupsComponent_ng_container_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, GroupsComponent_ng_container_28_ng_container_1_th_1_Template, 2, 1, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, GroupsComponent_ng_container_28_ng_container_1_td_2_Template, 2, 2, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const column_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matColumnDef", column_r27.property);
  }
}

function GroupsComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, GroupsComponent_ng_container_28_ng_container_1_Template, 3, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const column_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", column_r27.type === "text");
  }
}

function GroupsComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 53);
  }
}

function GroupsComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54)(1, "div", 55)(2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupsComponent_td_31_Template_a_click_2_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupsComponent_td_31_Template_a_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupsComponent_td_31_Template_a_click_6_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}

function GroupsComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 53);
  }
}

const _c0 = function (a0) {
  return {
    customer: a0
  };
};

function GroupsComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 62)(1, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupsComponent_td_34_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "mat-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](42);

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c0, row_r39))("matMenuTriggerFor", _r15);
  }
}

function GroupsComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 65);
  }
}

function GroupsComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupsComponent_tr_36_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const row_r41 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r42.updateGroups(row_r41));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}

function GroupsComponent_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupsComponent_button_40_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46);
      const column_r44 = restoredCtx.$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r45.toggleColumnVisibility(column_r44, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-checkbox", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupsComponent_button_40_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function GroupsComponent_button_40_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46);
      const column_r44 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](column_r44.visible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const column_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", column_r44.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", column_r44.label, " ");
  }
}

function GroupsComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupsComponent_ng_template_43_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const customer_r49 = restoredCtx.customer;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r50.updateGroups(customer_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Modify");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupsComponent_ng_template_43_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const customer_r49 = restoredCtx.customer;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r52.deleteGroups(customer_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

const _c1 = function () {
  return ["Users", "Group"];
};

let GroupsComponent = class GroupsComponent {
  constructor(dialog, superCategoryService, authService, sharedService) {
    this.dialog = dialog;
    this.superCategoryService = superCategoryService;
    this.authService = authService;
    this.sharedService = sharedService;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl('fullwidth');
    this.columns = [{
      label: 'Checkbox',
      property: 'checkbox',
      type: 'checkbox',
      visible: true
    }, {
      label: 'Group Code',
      property: 'group_code',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    }, {
      label: 'Group Name',
      property: 'group_name',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    }, {
      label: 'Status',
      property: 'status_display',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    }, {
      label: 'Created By',
      property: 'created_by_display',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Created Date',
      property: 'created_date_display',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Modified By',
      property: 'modified_by_display',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Modified Date',
      property: 'modified_date_display',
      type: 'text',
      visible: true,
      cssClasses: ['text-secondary', 'font-medium']
    }, {
      label: 'Actions',
      property: 'actions',
      type: 'button',
      visible: true
    }];
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 20, 50];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__.SelectionModel(true, []);
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl();
    this.groups_list = [];
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this.subscription = this.superCategoryService.groupsChanged.subscribe(groups => {
      this.groups_list = groups;
      this.formatData();
      this.dataSource.data = this.groups_list;
    });
    this.groups_list = this.superCategoryService.getGroups();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.formatData();
    this.groups = this.groups_list;
    this.dataSource.data = this.groups_list;
    this.searchCtrl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(value => this.onFilterChange(value));
  }

  formatData() {
    var _this = this;

    this.groups_list.forEach( /*#__PURE__*/function () {
      var _ref = (0,_Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (element) {
        if (element.created_by) {
          element.created_by_display = element.created_by.first_name + ' ' + element.created_by.last_name;
        }

        if (element.modified_by) {
          element.modified_by_display = element.modified_by.first_name + ' ' + element.modified_by.last_name;
        }

        if (element.created_date) {
          element.created_date_display = _this.sharedService.getUTCtoCurrentTime(element.created_date, yield _this.authService.getUserTimeZone(), _this.authService.getCompanyDateTimeFormat());
        }

        if (element.modified_date) {
          element.modified_date_display = _this.sharedService.getUTCtoCurrentTime(element.modified_date, yield _this.authService.getUserTimeZone(), _this.authService.getCompanyDateTimeFormat());
        }

        element.status_display = element.status === '1' ? 'Active' : 'In-Active';
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createGroups() {
    this.dialog.open(_groups_create_update_groups_create_update_component__WEBPACK_IMPORTED_MODULE_1__.GroupsCreateUpdateComponent).afterClosed().subscribe(groups => {
      if (groups) {
        //we will build the custom object here
        groups.loggedin_id = this.authService.getLoggedInID();
        this.superCategoryService.saveGroups(groups);
      }
    });
  }

  updateGroups(groups) {
    this.dialog.open(_groups_create_update_groups_create_update_component__WEBPACK_IMPORTED_MODULE_1__.GroupsCreateUpdateComponent, {
      data: groups
    }).afterClosed().subscribe(updatedGroups => {
      if (updatedGroups) {
        updatedGroups.loggedin_id = this.authService.getLoggedInID();
        this.superCategoryService.saveGroups(updatedGroups);
      }
    });
  }

  deleteGroups(groups) {
    this.superCategoryService.deleteGroup(groups._id);
    this.groups.splice(this.groups.findIndex(existingGroups => existingGroups._id === groups._id), 1);
    this.selection.deselect(groups);
  }

  deleteSupercategories(groups) {
    groups.forEach(c => this.deleteGroups(c));
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }

    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }
  /** Whether the number of selected elements matches the total number of rows. */


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */


  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackByProperty(index, column) {
    return column.property;
  }

};

GroupsComponent.ɵfac = function GroupsComponent_Factory(t) {
  return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_groups_service__WEBPACK_IMPORTED_MODULE_4__.GroupsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService));
};

GroupsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: GroupsComponent,
  selectors: [["ux-groups"]],
  viewQuery: function GroupsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  inputs: {
    columns: "columns"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'standard'
    }
  }])],
  decls: 44,
  vars: 23,
  consts: [[1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1", 2, "display", "block", "font-size", "30px", "font-weight", "600"], [3, "crumbs"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], [1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l", "hidden", "sm:block", "flex-none"], [4, "ngIf"], ["class", "mr-4 pr-4 border-r flex-none", 4, "ngIf"], [1, "flex-1"], [1, "bg-foreground", "rounded-full", "border", "px-4", "max-w-[300px]", "flex-auto", "flex", "items-center", "border", "border-gray-300"], ["svgIcon", "mat:search", 1, "icon-sm", "text-secondary"], ["placeholder", "Search...", "type", "search", 1, "px-4", "py-2", "border-0", "outline-none", "w-full", "bg-transparent", 3, "formControl"], ["mat-icon-button", "", "matTooltip", "Filter Columns", "type", "button", 1, "ml-4", "flex-none", 3, "matMenuTriggerFor"], ["svgIcon", "mat:filter_list"], ["color", "primary", "mat-mini-fab", "", "matTooltip", "Add Group", "type", "button", 1, "ml-4", "flex-none", 3, "click"], ["svgIcon", "mat:add"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-4", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "image"], ["class", "w-8 min-w-8 pr-0", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "contact"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover trans-ease-out cursor-pointer", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], ["xPosition", "before", "yPosition", "below"], ["columnFilterMenu", "matMenu"], ["class", "checkbox-item mat-menu-item", 3, "click", 4, "ngFor", "ngForOf"], ["actionsMenu", "matMenu"], ["matMenuContent", ""], [1, "mr-4", "pr-4", "border-r", "flex-none"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Delete selected", "type", "button", 3, "click"], ["svgIcon", "mat:delete"], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", "", 1, "w-4"], ["color", "primary", 3, "checked", "change", "click"], ["mat-cell", "", 1, "w-8", "min-w-8", "pr-0"], [1, "avatar", "h-8", "w-8", "align-middle", 3, "src"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "hover:bg-hover", "text-primary", "bg-primary/10", 3, "click"], ["svgIcon", "mat:phone", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-teal", "bg-teal-light", 3, "click"], ["svgIcon", "mat:mail", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-green", "bg-green-light", 3, "click"], ["svgIcon", "mat:map", 1, "icon-sm"], ["mat-cell", "", 1, "w-10", "text-secondary"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerData", "matMenuTriggerFor", "click"], ["svgIcon", "mat:more_horiz"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "trans-ease-out", "cursor-pointer", 3, "click"], [1, "checkbox-item", "mat-menu-item", 3, "click"], ["color", "primary", 3, "ngModel", "click", "ngModelChange"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "mat:edit"]],
  template: function GroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ux-breadcrumbs", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ux-page-layout-content", 4)(8, "div", 5)(9, "div", 6)(10, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, GroupsComponent_span_11_Template, 4, 2, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, GroupsComponent_div_12_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "mat-icon", 12)(16, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function GroupsComponent_Template_button_click_19_listener() {
        return ctx.createGroups();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "mat-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "table", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](22, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, GroupsComponent_th_23_Template, 2, 2, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, GroupsComponent_td_24_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](25, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, GroupsComponent_th_26_Template, 1, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, GroupsComponent_td_27_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, GroupsComponent_ng_container_28_Template, 2, 1, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](29, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, GroupsComponent_th_30_Template, 1, 0, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, GroupsComponent_td_31_Template, 8, 0, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](32, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, GroupsComponent_th_33_Template, 1, 0, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, GroupsComponent_td_34_Template, 3, 4, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, GroupsComponent_tr_35_Template, 1, 0, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, GroupsComponent_tr_36_Template, 1, 1, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "mat-paginator", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "mat-menu", 33, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, GroupsComponent_button_40_Template, 3, 2, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "mat-menu", 33, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, GroupsComponent_ng_template_43_Template, 8, 0, "ng-template", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](39);

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](22, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selection.hasValue());
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selection.hasValue());
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.searchCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matMenuTriggerFor", _r13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByProperty);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.columns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_7__.PageLayoutComponent, _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_8__.PageLayoutHeaderDirective, _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__.PageLayoutContentDirective, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__.BreadcrumbsComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatAnchor, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuContent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cHMuY29tcG9uZW50LnNjc3MifQ== */"],
  data: {
    animation: [_ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms, _ux_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__.stagger40ms]
  }
});
GroupsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.UntilDestroy)()], GroupsComponent);


/***/ }),

/***/ 16258:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/groups/groups.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsModule": () => (/* binding */ GroupsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _groups_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups-routing.module */ 853);
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups.component */ 59007);
/* harmony import */ var _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.module */ 43492);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.module */ 39784);
/* harmony import */ var _groups_create_update_groups_create_update_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups-create-update/groups-create-update.module */ 29470);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);


















class GroupsModule {
}
GroupsModule.ɵfac = function GroupsModule_Factory(t) { return new (t || GroupsModule)(); };
GroupsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GroupsModule });
GroupsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _groups_routing_module__WEBPACK_IMPORTED_MODULE_0__.GroupsRoutingModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _groups_create_update_groups_create_update_module__WEBPACK_IMPORTED_MODULE_4__.GroupsCreateUpdateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__.MatButtonToggleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GroupsModule, { declarations: [_groups_component__WEBPACK_IMPORTED_MODULE_1__.GroupsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _groups_routing_module__WEBPACK_IMPORTED_MODULE_0__.GroupsRoutingModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _groups_create_update_groups_create_update_module__WEBPACK_IMPORTED_MODULE_4__.GroupsCreateUpdateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__.MatButtonToggleModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_groups_groups_module_ts.js.map