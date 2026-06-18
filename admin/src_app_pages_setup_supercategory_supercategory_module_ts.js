"use strict";
(self["webpackChunkux"] = self["webpackChunkux"] || []).push([["src_app_pages_setup_supercategory_supercategory_module_ts"],{

/***/ 20546:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/setup/supercategory/supercategory-create-update/supercategory-create-update.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupercategoryCreateUpdateComponent": () => (/* binding */ SupercategoryCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _supercategory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../supercategory.service */ 7606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 71528);












function SupercategoryCreateUpdateComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.form.get("super_category_name").value);
} }
function SupercategoryCreateUpdateComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New Super Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupercategoryCreateUpdateComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Super Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupercategoryCreateUpdateComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update Super Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SupercategoryCreateUpdateComponent {
    constructor(defaults, dialogRef, fb, supercategoryService) {
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.supercategoryService = supercategoryService;
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
            super_category_id: this.defaults._id || '',
            super_category_name: this.defaults.super_category_name,
            super_category_code: [this.defaults.super_category_code || ''],
            super_category_description: [this.defaults.super_category_description || ''],
            status: this.defaults.status || '1'
        });
    }
    save() {
        if (this.mode === 'create') {
            this.createSupercategory();
        }
        else if (this.mode === 'update') {
            this.updateSupercategory();
        }
    }
    createSupercategory() {
        const supercategory = this.form.value;
        this.dialogRef.close(supercategory);
    }
    updateSupercategory() {
        const supercategory = this.form.value;
        supercategory._id = this.defaults._id;
        this.dialogRef.close(supercategory);
    }
    isCreateMode() {
        return this.mode === 'create';
    }
    isUpdateMode() {
        return this.mode === 'update';
    }
}
SupercategoryCreateUpdateComponent.ɵfac = function SupercategoryCreateUpdateComponent_Factory(t) { return new (t || SupercategoryCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_supercategory_service__WEBPACK_IMPORTED_MODULE_0__.SuperCategoryService)); };
SupercategoryCreateUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SupercategoryCreateUpdateComponent, selectors: [["ux-supercategory-create-update"]], decls: 44, vars: 6, consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["class", "headline m-0 flex-auto", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "text-secondary", 3, "matMenuTriggerFor"], ["svgIcon", "mat:more_vert"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "-mx-6", "text-border"], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row"], [1, "mt-6", "flex-auto"], ["cdkFocusInitial", "", "formControlName", "super_category_name", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:person", 1, "mr-3"], [1, "sm:mt-6", "sm:ml-6", "flex-auto"], ["formControlName", "super_category_code", "matInput", ""], [1, "flex-auto"], ["formControlName", "super_category_description", "matInput", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 4, "ngIf"], ["xPosition", "before", "yPosition", "below"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], ["svgIcon", "mat:print"], ["svgIcon", "mat:download"], ["svgIcon", "mat:delete"], [1, "headline", "m-0", "flex-auto"], ["color", "primary", "mat-flat-button", "", "type", "submit"]], template: function SupercategoryCreateUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SupercategoryCreateUpdateComponent_Template_form_ngSubmit_0_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SupercategoryCreateUpdateComponent_h2_2_Template, 2, 1, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SupercategoryCreateUpdateComponent_h2_3_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-dialog-content", 8)(10, "div", 9)(11, "mat-form-field", 10)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Super Category Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 11)(15, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 13)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Super Category Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 14)(20, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 15)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-dialog-actions", 17)(26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SupercategoryCreateUpdateComponent_button_28_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SupercategoryCreateUpdateComponent_button_29_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-menu", 20, 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "mat-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("super_category_name").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.form.get("super_category_name").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCreateMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUpdateMode());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlcmNhdGVnb3J5LWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 79939:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/setup/supercategory/supercategory-create-update/supercategory-create-update.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupercategoryCreateUpdateModule": () => (/* binding */ SupercategoryCreateUpdateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _supercategory_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supercategory-create-update.component */ 20546);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);












class SupercategoryCreateUpdateModule {
}
SupercategoryCreateUpdateModule.ɵfac = function SupercategoryCreateUpdateModule_Factory(t) { return new (t || SupercategoryCreateUpdateModule)(); };
SupercategoryCreateUpdateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SupercategoryCreateUpdateModule });
SupercategoryCreateUpdateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SupercategoryCreateUpdateModule, { declarations: [_supercategory_create_update_component__WEBPACK_IMPORTED_MODULE_0__.SupercategoryCreateUpdateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule], exports: [_supercategory_create_update_component__WEBPACK_IMPORTED_MODULE_0__.SupercategoryCreateUpdateComponent] }); })();


/***/ }),

/***/ 106:
/*!***************************************************************************!*\
  !*** ./src/app/pages/setup/supercategory/supercategory-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupercategoryRoutingModule": () => (/* binding */ SupercategoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _supercategory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supercategory.component */ 39639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _supercategory_component__WEBPACK_IMPORTED_MODULE_0__.SupercategoryComponent,
        data: {
            toolbarShadowEnabled: false
        }
    }
];
class SupercategoryRoutingModule {
}
SupercategoryRoutingModule.ɵfac = function SupercategoryRoutingModule_Factory(t) { return new (t || SupercategoryRoutingModule)(); };
SupercategoryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SupercategoryRoutingModule });
SupercategoryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SupercategoryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 39639:
/*!**********************************************************************!*\
  !*** ./src/app/pages/setup/supercategory/supercategory.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupercategoryComponent": () => (/* binding */ SupercategoryComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _supercategory_create_update_supercategory_create_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supercategory-create-update/supercategory-create-update.component */ 20546);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _ux_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/animations/stagger.animation */ 85819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _supercategory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supercategory.service */ 7606);
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
































function SupercategoryComponent_span_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function SupercategoryComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, SupercategoryComponent_span_11_span_2_Template, 2, 0, "span", 8);
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

function SupercategoryComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SupercategoryComponent_div_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.deleteSupercategories(ctx_r18.selection.selected));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function SupercategoryComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 41)(1, "mat-checkbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function SupercategoryComponent_th_23_Template_mat_checkbox_change_1_listener($event) {
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

function SupercategoryComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 43)(1, "mat-checkbox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function SupercategoryComponent_td_24_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const row_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event ? ctx_r23.selection.toggle(row_r22) : null);
    })("click", function SupercategoryComponent_td_24_Template_mat_checkbox_click_1_listener($event) {
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

function SupercategoryComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 41);
  }
}

function SupercategoryComponent_td_27_Template(rf, ctx) {
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

function SupercategoryComponent_ng_container_28_ng_container_1_th_1_Template(rf, ctx) {
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

function SupercategoryComponent_ng_container_28_ng_container_1_td_2_Template(rf, ctx) {
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

function SupercategoryComponent_ng_container_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SupercategoryComponent_ng_container_28_ng_container_1_th_1_Template, 2, 1, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, SupercategoryComponent_ng_container_28_ng_container_1_td_2_Template, 2, 2, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const column_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matColumnDef", column_r27.property);
  }
}

function SupercategoryComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SupercategoryComponent_ng_container_28_ng_container_1_Template, 3, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const column_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", column_r27.type === "text");
  }
}

function SupercategoryComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 53);
  }
}

function SupercategoryComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54)(1, "div", 55)(2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SupercategoryComponent_td_31_Template_a_click_2_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SupercategoryComponent_td_31_Template_a_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SupercategoryComponent_td_31_Template_a_click_6_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}

function SupercategoryComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 53);
  }
}

const _c0 = function (a0) {
  return {
    customer: a0
  };
};

function SupercategoryComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 62)(1, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SupercategoryComponent_td_34_Template_button_click_1_listener($event) {
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

function SupercategoryComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 65);
  }
}

function SupercategoryComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SupercategoryComponent_tr_36_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const row_r41 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r42.updateSupercategory(row_r41));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}

function SupercategoryComponent_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SupercategoryComponent_button_40_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46);
      const column_r44 = restoredCtx.$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r45.toggleColumnVisibility(column_r44, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-checkbox", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SupercategoryComponent_button_40_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function SupercategoryComponent_button_40_Template_mat_checkbox_ngModelChange_1_listener($event) {
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

function SupercategoryComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SupercategoryComponent_ng_template_43_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const customer_r49 = restoredCtx.customer;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r50.updateSupercategory(customer_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Modify");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SupercategoryComponent_ng_template_43_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const customer_r49 = restoredCtx.customer;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r52.deleteSupercategory(customer_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

const _c1 = function () {
  return ["Setup", "Super Category"];
};

let SupercategoryComponent = class SupercategoryComponent {
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
      label: 'Super Category Code',
      property: 'super_category_code',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    }, {
      label: 'Super Category Name',
      property: 'super_category_name',
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
    this.super_categories_list = [];
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this.subscription = this.superCategoryService.super_categoriesChanged.subscribe(supercategories => {
      this.super_categories_list = supercategories;
      this.formatData();
      this.dataSource.data = this.super_categories_list;
    });
    this.super_categories_list = this.superCategoryService.getSuperCategories();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.formatData();
    this.supercategories = this.super_categories_list;
    this.dataSource.data = this.super_categories_list;
    this.searchCtrl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(value => this.onFilterChange(value));
  }

  formatData() {
    var _this = this;

    this.super_categories_list.forEach( /*#__PURE__*/function () {
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

  createSupercategory() {
    this.dialog.open(_supercategory_create_update_supercategory_create_update_component__WEBPACK_IMPORTED_MODULE_1__.SupercategoryCreateUpdateComponent).afterClosed().subscribe(supercategory => {
      if (supercategory) {
        //we will build the custom object here
        supercategory.loggedin_id = this.authService.getLoggedInID();
        this.superCategoryService.saveSuperCategory(supercategory);
      }
    });
  }

  updateSupercategory(supercategory) {
    this.dialog.open(_supercategory_create_update_supercategory_create_update_component__WEBPACK_IMPORTED_MODULE_1__.SupercategoryCreateUpdateComponent, {
      data: supercategory
    }).afterClosed().subscribe(updatedSupercategory => {
      if (updatedSupercategory) {
        updatedSupercategory.loggedin_id = this.authService.getLoggedInID();
        this.superCategoryService.saveSuperCategory(updatedSupercategory);
      }
    });
  }

  deleteSupercategory(supercategory) {
    this.superCategoryService.deleteSuperCategory(supercategory._id);
    this.supercategories.splice(this.supercategories.findIndex(existingSupercategory => existingSupercategory._id === supercategory._id), 1);
    this.selection.deselect(supercategory);
  }

  deleteSupercategories(supercategories) {
    supercategories.forEach(c => this.deleteSupercategory(c));
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

SupercategoryComponent.ɵfac = function SupercategoryComponent_Factory(t) {
  return new (t || SupercategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_supercategory_service__WEBPACK_IMPORTED_MODULE_4__.SuperCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService));
};

SupercategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: SupercategoryComponent,
  selectors: [["ux-supercategory"]],
  viewQuery: function SupercategoryComponent_Query(rf, ctx) {
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
  consts: [[1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1", 2, "display", "block", "font-size", "30px", "font-weight", "600"], [3, "crumbs"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], [1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l", "hidden", "sm:block", "flex-none"], [4, "ngIf"], ["class", "mr-4 pr-4 border-r flex-none", 4, "ngIf"], [1, "flex-1"], [1, "bg-foreground", "rounded-full", "border", "px-4", "max-w-[300px]", "flex-auto", "flex", "items-center", "border", "border-gray-300"], ["svgIcon", "mat:search", 1, "icon-sm", "text-secondary"], ["placeholder", "Search...", "type", "search", 1, "px-4", "py-2", "border-0", "outline-none", "w-full", "bg-transparent", 3, "formControl"], ["mat-icon-button", "", "matTooltip", "Filter Columns", "type", "button", 1, "ml-4", "flex-none", 3, "matMenuTriggerFor"], ["svgIcon", "mat:filter_list"], ["color", "primary", "mat-mini-fab", "", "matTooltip", "Add Super Category", "type", "button", 1, "ml-4", "flex-none", 3, "click"], ["svgIcon", "mat:add"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-4", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "image"], ["class", "w-8 min-w-8 pr-0", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "contact"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions"], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover trans-ease-out cursor-pointer", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], ["xPosition", "before", "yPosition", "below"], ["columnFilterMenu", "matMenu"], ["class", "checkbox-item mat-menu-item", 3, "click", 4, "ngFor", "ngForOf"], ["actionsMenu", "matMenu"], ["matMenuContent", ""], [1, "mr-4", "pr-4", "border-r", "flex-none"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Delete selected", "type", "button", 3, "click"], ["svgIcon", "mat:delete"], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", "", 1, "w-4"], ["color", "primary", 3, "checked", "change", "click"], ["mat-cell", "", 1, "w-8", "min-w-8", "pr-0"], [1, "avatar", "h-8", "w-8", "align-middle", 3, "src"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "hover:bg-hover", "text-primary", "bg-primary/10", 3, "click"], ["svgIcon", "mat:phone", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-teal", "bg-teal-light", 3, "click"], ["svgIcon", "mat:mail", 1, "icon-sm"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-green", "bg-green-light", 3, "click"], ["svgIcon", "mat:map", 1, "icon-sm"], ["mat-cell", "", 1, "w-10", "text-secondary"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerData", "matMenuTriggerFor", "click"], ["svgIcon", "mat:more_horiz"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "trans-ease-out", "cursor-pointer", 3, "click"], [1, "checkbox-item", "mat-menu-item", 3, "click"], ["color", "primary", 3, "ngModel", "click", "ngModelChange"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "mat:edit"]],
  template: function SupercategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Super Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ux-breadcrumbs", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ux-page-layout-content", 4)(8, "div", 5)(9, "div", 6)(10, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, SupercategoryComponent_span_11_Template, 4, 2, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, SupercategoryComponent_div_12_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "mat-icon", 12)(16, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SupercategoryComponent_Template_button_click_19_listener() {
        return ctx.createSupercategory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "mat-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "table", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](22, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, SupercategoryComponent_th_23_Template, 2, 2, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, SupercategoryComponent_td_24_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](25, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, SupercategoryComponent_th_26_Template, 1, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, SupercategoryComponent_td_27_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, SupercategoryComponent_ng_container_28_Template, 2, 1, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](29, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, SupercategoryComponent_th_30_Template, 1, 0, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, SupercategoryComponent_td_31_Template, 8, 0, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](32, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, SupercategoryComponent_th_33_Template, 1, 0, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, SupercategoryComponent_td_34_Template, 3, 4, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, SupercategoryComponent_tr_35_Template, 1, 0, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, SupercategoryComponent_tr_36_Template, 1, 1, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "mat-paginator", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "mat-menu", 33, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, SupercategoryComponent_button_40_Template, 3, 2, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "mat-menu", 33, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, SupercategoryComponent_ng_template_43_Template, 8, 0, "ng-template", 37);
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
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlcmNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"],
  data: {
    animation: [_ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms, _ux_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__.stagger40ms]
  }
});
SupercategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.UntilDestroy)()], SupercategoryComponent);


/***/ }),

/***/ 95248:
/*!*******************************************************************!*\
  !*** ./src/app/pages/setup/supercategory/supercategory.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupercategoryModule": () => (/* binding */ SupercategoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _supercategory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supercategory-routing.module */ 106);
/* harmony import */ var _supercategory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supercategory.component */ 39639);
/* harmony import */ var _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.module */ 43492);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.module */ 39784);
/* harmony import */ var _supercategory_create_update_supercategory_create_update_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supercategory-create-update/supercategory-create-update.module */ 79939);
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


















class SupercategoryModule {
}
SupercategoryModule.ɵfac = function SupercategoryModule_Factory(t) { return new (t || SupercategoryModule)(); };
SupercategoryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SupercategoryModule });
SupercategoryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _supercategory_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupercategoryRoutingModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _supercategory_create_update_supercategory_create_update_module__WEBPACK_IMPORTED_MODULE_4__.SupercategoryCreateUpdateModule,
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SupercategoryModule, { declarations: [_supercategory_component__WEBPACK_IMPORTED_MODULE_1__.SupercategoryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _supercategory_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupercategoryRoutingModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _supercategory_create_update_supercategory_create_update_module__WEBPACK_IMPORTED_MODULE_4__.SupercategoryCreateUpdateModule,
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
//# sourceMappingURL=src_app_pages_setup_supercategory_supercategory_module_ts.js.map