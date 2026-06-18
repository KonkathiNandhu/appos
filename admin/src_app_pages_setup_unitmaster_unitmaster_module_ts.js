"use strict";
(self["webpackChunkux"] = self["webpackChunkux"] || []).push([["src_app_pages_setup_unitmaster_unitmaster_module_ts"],{

/***/ 5367:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/setup/unitmaster/unitmaster-create-update/unitmaster-create-update.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitmasterCreateUpdateComponent": () => (/* binding */ UnitmasterCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _unitmaster_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../unitmaster.service */ 80514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);















function UnitmasterCreateUpdateComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.form.get("unit_name").value);
} }
function UnitmasterCreateUpdateComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UnitmasterCreateUpdateComponent_div_23_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Merchant ID is required when Paytm is enabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UnitmasterCreateUpdateComponent_div_23_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Merchant Key is required when Paytm is enabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UnitmasterCreateUpdateComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Paytm Unit-Specific Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22)(4, "mat-slide-toggle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Enable Paytm for this unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 24)(7, "mat-form-field", 11)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Merchant ID (MID) *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 25)(11, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Required when Paytm is enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UnitmasterCreateUpdateComponent_div_23_mat_error_14_Template, 2, 0, "mat-error", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 11)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Environment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-select", 28)(19, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Staging/Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 32)(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Merchant Key *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 33)(28, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitmasterCreateUpdateComponent_div_23_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.toggleMerchantKeyVisibility()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Required when Paytm is enabled. Keep this secure!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UnitmasterCreateUpdateComponent_div_23_mat_error_34_Template, 2, 0, "mat-error", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13)(36, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Advanced Settings (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Leave these as default unless instructed by Paytm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 24)(41, "mat-form-field", 11)(42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Hostname");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Default: securegw.paytm.in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field", 11)(48, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Client ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Default: C11");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 24)(54, "mat-form-field", 11)(55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Default: DEFAULT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-form-field", 11)(61, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Channel ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Default: WEB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-form-field", 32)(67, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Industry Type ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Default: Retail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 43)(73, "div", 44)(74, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 46)(77, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Security Notice:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Merchant credentials are sensitive. Only authorized personnel should configure these settings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.form.get("paytm_mid").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r2.showMerchantKey ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Toggle merchant key visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.showMerchantKey ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.form.get("paytm_merchant_key").hasError("required"));
} }
function UnitmasterCreateUpdateComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UnitmasterCreateUpdateComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UnitmasterCreateUpdateComponent {
    constructor(defaults, dialogRef, fb, unitmasterService) {
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.unitmasterService = unitmasterService;
        this.mode = 'create';
        this.showMerchantKey = false;
        this.showPaytmConfig = false;
    }
    ngOnInit() {
        if (this.defaults) {
            this.mode = 'update';
        }
        else {
            this.defaults = {};
        }
        // Initialize paytm_config if it doesn't exist
        const paytmConfig = this.defaults.paytm_config || {};
        this.form = this.fb.group({
            unit_id: this.defaults._id || '',
            unit_name: this.defaults.unit_name,
            unit_description: [this.defaults.unit_description || ''],
            status: this.defaults.status || '1',
            // Paytm Configuration Fields
            paytm_mid: [paytmConfig.mid || ''],
            paytm_merchant_key: [paytmConfig.merchant_key || ''],
            paytm_hostname: [paytmConfig.hostname || 'securegw.paytm.in'],
            paytm_client_id: [paytmConfig.client_id || 'C11'],
            paytm_website: [paytmConfig.website || 'DEFAULT'],
            paytm_channel_id: [paytmConfig.channel_id || 'WEB'],
            paytm_industry_type_id: [paytmConfig.industry_type_id || 'Retail'],
            paytm_is_enabled: [paytmConfig.is_enabled || false],
            paytm_environment: [paytmConfig.environment || 'production']
        });
        // Show Paytm config section if it's already configured
        if (paytmConfig.mid || paytmConfig.is_enabled) {
            this.showPaytmConfig = true;
        }
        // Add conditional validators for required fields when Paytm is enabled
        this.form.get('paytm_is_enabled').valueChanges.subscribe(isEnabled => {
            const midControl = this.form.get('paytm_mid');
            const merchantKeyControl = this.form.get('paytm_merchant_key');
            if (isEnabled) {
                midControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
                merchantKeyControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
            }
            else {
                midControl.clearValidators();
                merchantKeyControl.clearValidators();
            }
            midControl.updateValueAndValidity();
            merchantKeyControl.updateValueAndValidity();
        });
    }
    save() {
        if (this.mode === 'create') {
            this.createUnitmaster();
        }
        else if (this.mode === 'update') {
            this.updateUnitmaster();
        }
    }
    createUnitmaster() {
        const unitmaster = this.buildUnitmasterObject();
        this.dialogRef.close(unitmaster);
    }
    updateUnitmaster() {
        const unitmaster = this.buildUnitmasterObject();
        this.dialogRef.close(unitmaster);
    }
    buildUnitmasterObject() {
        const formValue = this.form.value;
        // Build the paytm_config object
        const paytmConfig = {
            mid: formValue.paytm_mid,
            merchant_key: formValue.paytm_merchant_key,
            hostname: formValue.paytm_hostname,
            client_id: formValue.paytm_client_id,
            website: formValue.paytm_website,
            channel_id: formValue.paytm_channel_id,
            industry_type_id: formValue.paytm_industry_type_id,
            is_enabled: formValue.paytm_is_enabled,
            environment: formValue.paytm_environment
        };
        // Build the complete unitmaster object
        const unitmaster = {
            unit_name: formValue.unit_name,
            unit_description: formValue.unit_description,
            status: formValue.status,
            paytm_config: paytmConfig
        };
        // Include _id if this is an update (mode will be set by calling method)
        if (this.mode === 'update' && this.defaults._id) {
            unitmaster._id = this.defaults._id;
        }
        return unitmaster;
    }
    togglePaytmConfig() {
        this.showPaytmConfig = !this.showPaytmConfig;
    }
    toggleMerchantKeyVisibility() {
        this.showMerchantKey = !this.showMerchantKey;
    }
    getMaskedMerchantKey() {
        const key = this.form.get('paytm_merchant_key').value;
        if (!key || key.length < 4) {
            return '****';
        }
        return '****' + key.slice(-4);
    }
    isCreateMode() {
        return this.mode === 'create';
    }
    isUpdateMode() {
        return this.mode === 'update';
    }
}
UnitmasterCreateUpdateComponent.ɵfac = function UnitmasterCreateUpdateComponent_Factory(t) { return new (t || UnitmasterCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_unitmaster_service__WEBPACK_IMPORTED_MODULE_0__.UnitmasterService)); };
UnitmasterCreateUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnitmasterCreateUpdateComponent, selectors: [["ux-unitmaster-create-update"]], decls: 29, vars: 7, consts: [["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["class", "headline m-0 flex-auto", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "-mx-6", "text-border"], [1, "flex", "flex-col"], [1, "flex", "flex-col", "sm:flex-row"], [1, "mt-6", "flex-auto"], ["cdkFocusInitial", "", "formControlName", "unit_name", "matInput", "", "autocomplete", "off"], ["matPrefix", "", "svgIcon", "mat:person", 1, "mr-3"], [1, "flex-auto"], ["formControlName", "unit_description", "matInput", "", "autocomplete", "off"], [1, "mt-4"], ["type", "button", "mat-stroked-button", "", 1, "w-full", 3, "click"], ["class", "mt-4 p-4 border rounded", 4, "ngIf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 4, "ngIf"], [1, "headline", "m-0", "flex-auto"], [1, "mt-4", "p-4", "border", "rounded"], [1, "text-lg", "font-medium", "mb-4"], [1, "flex", "items-center", "mb-4"], ["formControlName", "paytm_is_enabled", "color", "primary"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], ["formControlName", "paytm_mid", "matInput", "", "autocomplete", "off"], ["matPrefix", "", "svgIcon", "mat:credit_card"], [4, "ngIf"], ["formControlName", "paytm_environment"], ["value", "production"], ["value", "staging"], ["matPrefix", "", "svgIcon", "mat:cloud"], [1, "w-full"], ["formControlName", "paytm_merchant_key", "matInput", "", "autocomplete", "new-password", 3, "type"], ["matPrefix", "", "svgIcon", "mat:vpn_key"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "text-md", "font-medium", "mb-2"], [1, "text-sm", "text-gray-600", "mb-4"], ["formControlName", "paytm_hostname", "matInput", "", "autocomplete", "off"], ["formControlName", "paytm_client_id", "matInput", "", "autocomplete", "off"], ["formControlName", "paytm_website", "matInput", "", "autocomplete", "off"], ["formControlName", "paytm_channel_id", "matInput", "", "autocomplete", "off"], ["formControlName", "paytm_industry_type_id", "matInput", "", "autocomplete", "off"], [1, "mt-4", "p-3", "bg-yellow-50", "border", "border-yellow-200", "rounded"], [1, "flex", "items-start"], [1, "text-yellow-600", "mr-2"], [1, "text-sm"], ["color", "primary", "mat-flat-button", "", "type", "submit"]], template: function UnitmasterCreateUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UnitmasterCreateUpdateComponent_Template_form_ngSubmit_0_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UnitmasterCreateUpdateComponent_h2_2_Template, 2, 1, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UnitmasterCreateUpdateComponent_h2_3_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-dialog-content", 6)(8, "div", 7)(9, "mat-form-field", 8)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Unit Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9)(13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 11)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitmasterCreateUpdateComponent_Template_button_click_19_listener() { return ctx.togglePaytmConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Paytm Payment Configuration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UnitmasterCreateUpdateComponent_div_23_Template, 80, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-dialog-actions", 16)(25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UnitmasterCreateUpdateComponent_button_27_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UnitmasterCreateUpdateComponent_button_28_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("unit_name").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.form.get("unit_name").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showPaytmConfig ? "expand_less" : "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPaytmConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCreateMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUpdateMode());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bml0bWFzdGVyLWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 58206:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/setup/unitmaster/unitmaster-create-update/unitmaster-create-update.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitmasterCreateUpdateModule": () => (/* binding */ UnitmasterCreateUpdateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _unitmaster_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unitmaster-create-update.component */ 5367);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);













class UnitmasterCreateUpdateModule {
}
UnitmasterCreateUpdateModule.ɵfac = function UnitmasterCreateUpdateModule_Factory(t) { return new (t || UnitmasterCreateUpdateModule)(); };
UnitmasterCreateUpdateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UnitmasterCreateUpdateModule });
UnitmasterCreateUpdateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UnitmasterCreateUpdateModule, { declarations: [_unitmaster_create_update_component__WEBPACK_IMPORTED_MODULE_0__.UnitmasterCreateUpdateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule], exports: [_unitmaster_create_update_component__WEBPACK_IMPORTED_MODULE_0__.UnitmasterCreateUpdateComponent] }); })();


/***/ }),

/***/ 79749:
/*!*********************************************************************!*\
  !*** ./src/app/pages/setup/unitmaster/unitmaster-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitmasterRoutingModule": () => (/* binding */ UnitmasterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _unitmaster_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unitmaster.component */ 42028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _unitmaster_component__WEBPACK_IMPORTED_MODULE_0__.UnitmasterComponent,
        data: {
            toolbarShadowEnabled: false
        }
    }
];
class UnitmasterRoutingModule {
}
UnitmasterRoutingModule.ɵfac = function UnitmasterRoutingModule_Factory(t) { return new (t || UnitmasterRoutingModule)(); };
UnitmasterRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UnitmasterRoutingModule });
UnitmasterRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UnitmasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 42028:
/*!****************************************************************!*\
  !*** ./src/app/pages/setup/unitmaster/unitmaster.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitmasterComponent": () => (/* binding */ UnitmasterComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _unitmaster_create_update_unitmaster_create_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unitmaster-create-update/unitmaster-create-update.component */ 5367);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _ux_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/animations/stagger.animation */ 85819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _unitmaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unitmaster.service */ 80514);
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
































function UnitmasterComponent_span_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function UnitmasterComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, UnitmasterComponent_span_11_span_2_Template, 2, 0, "span", 8);
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

function UnitmasterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnitmasterComponent_div_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.deleteSupercategories(ctx_r18.selection.selected));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

function UnitmasterComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 41)(1, "mat-checkbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function UnitmasterComponent_th_23_Template_mat_checkbox_change_1_listener($event) {
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

function UnitmasterComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 43)(1, "mat-checkbox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function UnitmasterComponent_td_24_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const row_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event ? ctx_r23.selection.toggle(row_r22) : null);
    })("click", function UnitmasterComponent_td_24_Template_mat_checkbox_click_1_listener($event) {
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

function UnitmasterComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 41);
  }
}

function UnitmasterComponent_td_27_Template(rf, ctx) {
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

function UnitmasterComponent_ng_container_28_ng_container_1_th_1_Template(rf, ctx) {
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

function UnitmasterComponent_ng_container_28_ng_container_1_td_2_Template(rf, ctx) {
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

function UnitmasterComponent_ng_container_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UnitmasterComponent_ng_container_28_ng_container_1_th_1_Template, 2, 1, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, UnitmasterComponent_ng_container_28_ng_container_1_td_2_Template, 2, 2, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const column_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matColumnDef", column_r27.property);
  }
}

function UnitmasterComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UnitmasterComponent_ng_container_28_ng_container_1_Template, 3, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const column_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", column_r27.type === "text");
  }
}

function UnitmasterComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 53);
  }
}

function UnitmasterComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 54)(1, "div", 55)(2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnitmasterComponent_td_31_Template_a_click_2_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnitmasterComponent_td_31_Template_a_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnitmasterComponent_td_31_Template_a_click_6_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}

function UnitmasterComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 53);
  }
}

const _c0 = function (a0) {
  return {
    customer: a0
  };
};

function UnitmasterComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 62)(1, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnitmasterComponent_td_34_Template_button_click_1_listener($event) {
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

function UnitmasterComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 65);
  }
}

function UnitmasterComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnitmasterComponent_tr_36_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const row_r41 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r42.updateUnitmaster(row_r41));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}

function UnitmasterComponent_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnitmasterComponent_button_40_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46);
      const column_r44 = restoredCtx.$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r45.toggleColumnVisibility(column_r44, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-checkbox", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnitmasterComponent_button_40_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function UnitmasterComponent_button_40_Template_mat_checkbox_ngModelChange_1_listener($event) {
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

function UnitmasterComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnitmasterComponent_ng_template_43_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const customer_r49 = restoredCtx.customer;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r50.updateUnitmaster(customer_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Modify");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnitmasterComponent_ng_template_43_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const customer_r49 = restoredCtx.customer;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r52.deleteUnitmaster(customer_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

const _c1 = function () {
  return ["Setup", "Unit Master"];
};

let UnitmasterComponent = class UnitmasterComponent {
  constructor(dialog, unitService, authService, sharedService) {
    this.dialog = dialog;
    this.unitService = unitService;
    this.authService = authService;
    this.sharedService = sharedService;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl('fullwidth');
    this.columns = [{
      label: 'Checkbox',
      property: 'checkbox',
      type: 'checkbox',
      visible: true
    }, {
      label: 'Unit Code',
      property: 'unit_code',
      type: 'text',
      visible: true,
      cssClasses: ['font-medium']
    }, {
      label: 'Unit Name',
      property: 'unit_name',
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
    this.unitmaster_list = [];
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this.subscription = this.unitService.unitmasterChanged.subscribe(unitmaster => {
      this.unitmaster_list = unitmaster;
      this.formatData();
      this.dataSource.data = this.unitmaster_list;
    });
    this.unitmaster_list = this.unitService.getUnitmaster();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.formatData();
    this.unitmaster = this.unitmaster_list;
    this.dataSource.data = this.unitmaster_list;
    this.searchCtrl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(value => this.onFilterChange(value));
  }

  formatData() {
    var _this = this;

    this.unitmaster_list.forEach( /*#__PURE__*/function () {
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

  createUnitmaster() {
    this.dialog.open(_unitmaster_create_update_unitmaster_create_update_component__WEBPACK_IMPORTED_MODULE_1__.UnitmasterCreateUpdateComponent, {
      height: '90vh',
      width: '800px',
      maxWidth: '95vw'
    }).afterClosed().subscribe(unitmaster => {
      if (unitmaster) {
        //we will build the custom object here
        unitmaster.loggedin_id = this.authService.getLoggedInID();
        this.unitService.saveUnitmaster(unitmaster);
      }
    });
  }

  updateUnitmaster(unitmaster) {
    this.dialog.open(_unitmaster_create_update_unitmaster_create_update_component__WEBPACK_IMPORTED_MODULE_1__.UnitmasterCreateUpdateComponent, {
      data: unitmaster,
      height: '90vh',
      width: '800px',
      maxWidth: '95vw'
    }).afterClosed().subscribe(updatedUnitmaster => {
      if (updatedUnitmaster) {
        updatedUnitmaster.loggedin_id = this.authService.getLoggedInID();
        this.unitService.saveUnitmaster(updatedUnitmaster);
      }
    });
  }

  deleteUnitmaster(unitmaster) {
    this.unitService.deleteGroup(unitmaster._id);
    this.unitmaster.splice(this.unitmaster.findIndex(existingUnitmaster => existingUnitmaster._id === unitmaster._id), 1);
    this.selection.deselect(unitmaster);
  }

  deleteSupercategories(unitmaster) {
    unitmaster.forEach(c => this.deleteUnitmaster(c));
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

UnitmasterComponent.ɵfac = function UnitmasterComponent_Factory(t) {
  return new (t || UnitmasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_unitmaster_service__WEBPACK_IMPORTED_MODULE_4__.UnitmasterService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService));
};

UnitmasterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: UnitmasterComponent,
  selectors: [["ux-unitmaster"]],
  viewQuery: function UnitmasterComponent_Query(rf, ctx) {
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
  template: function UnitmasterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Unit Master");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ux-breadcrumbs", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ux-page-layout-content", 4)(8, "div", 5)(9, "div", 6)(10, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, UnitmasterComponent_span_11_Template, 4, 2, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, UnitmasterComponent_div_12_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "mat-icon", 12)(16, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnitmasterComponent_Template_button_click_19_listener() {
        return ctx.createUnitmaster();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "mat-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "table", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](22, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, UnitmasterComponent_th_23_Template, 2, 2, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, UnitmasterComponent_td_24_Template, 2, 1, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](25, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, UnitmasterComponent_th_26_Template, 1, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, UnitmasterComponent_td_27_Template, 2, 1, "td", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, UnitmasterComponent_ng_container_28_Template, 2, 1, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](29, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, UnitmasterComponent_th_30_Template, 1, 0, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, UnitmasterComponent_td_31_Template, 8, 0, "td", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](32, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, UnitmasterComponent_th_33_Template, 1, 0, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, UnitmasterComponent_td_34_Template, 3, 4, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, UnitmasterComponent_tr_35_Template, 1, 0, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, UnitmasterComponent_tr_36_Template, 1, 1, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "mat-paginator", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "mat-menu", 33, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, UnitmasterComponent_button_40_Template, 3, 2, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "mat-menu", 33, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, UnitmasterComponent_ng_template_43_Template, 8, 0, "ng-template", 37);
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
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bml0bWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"],
  data: {
    animation: [_ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms, _ux_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__.stagger40ms]
  }
});
UnitmasterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.UntilDestroy)()], UnitmasterComponent);


/***/ }),

/***/ 89973:
/*!*************************************************************!*\
  !*** ./src/app/pages/setup/unitmaster/unitmaster.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitmasterModule": () => (/* binding */ UnitmasterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _unitmaster_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unitmaster-routing.module */ 79749);
/* harmony import */ var _unitmaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unitmaster.component */ 42028);
/* harmony import */ var _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.module */ 43492);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.module */ 39784);
/* harmony import */ var _unitmaster_create_update_unitmaster_create_update_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unitmaster-create-update/unitmaster-create-update.module */ 58206);
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


















class UnitmasterModule {
}
UnitmasterModule.ɵfac = function UnitmasterModule_Factory(t) { return new (t || UnitmasterModule)(); };
UnitmasterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: UnitmasterModule });
UnitmasterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _unitmaster_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnitmasterRoutingModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _unitmaster_create_update_unitmaster_create_update_module__WEBPACK_IMPORTED_MODULE_4__.UnitmasterCreateUpdateModule,
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UnitmasterModule, { declarations: [_unitmaster_component__WEBPACK_IMPORTED_MODULE_1__.UnitmasterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _unitmaster_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnitmasterRoutingModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _unitmaster_create_update_unitmaster_create_update_module__WEBPACK_IMPORTED_MODULE_4__.UnitmasterCreateUpdateModule,
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
//# sourceMappingURL=src_app_pages_setup_unitmaster_unitmaster_module_ts.js.map