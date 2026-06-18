"use strict";
(self["webpackChunkux"] = self["webpackChunkux"] || []).push([["src_app_pages_cms_cms_module_ts"],{

/***/ 40171:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/cms/cms-culturalevents-page/cms-culturalevents-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsCulturalEventsPageComponent": () => (/* binding */ CmsCulturalEventsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _cms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cms.service */ 48385);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.component */ 96197);
/* harmony import */ var _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-header.directive */ 7755);
/* harmony import */ var _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-content.directive */ 89354);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);




















function CmsCulturalEventsPageComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsCulturalEventsPageComponent_div_34_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.removeEvent(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 30)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Title (shown on card)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 31)(10, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-form-field", 30)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Image URL (card image)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input", 33)(15, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Card ", i_r2 + 1, "");
} }
const _c0 = function () { return ["CMS", "Cultural Events"]; };
class CmsCulturalEventsPageComponent {
    constructor(fb, cmsService, authService) {
        this.fb = fb;
        this.cmsService = cmsService;
        this.authService = authService;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('fullwidth');
        this.existingId = '';
    }
    ngOnInit() {
        this.buildForm();
        this.subscription = this.cmsService.culturalevents_listChanged
            .subscribe((list) => {
            if (list && list.length > 0) {
                this.populateForm(list[0]);
            }
        });
        const list = this.cmsService.getCulturalEventsList();
        if (list && list.length > 0) {
            this.populateForm(list[0]);
        }
    }
    buildForm() {
        this.form = this.fb.group({
            page_description: '',
            status: '1',
            cultural_events: this.fb.array([])
        });
    }
    populateForm(data) {
        this.existingId = data._id || '';
        this.form.patchValue({
            page_description: data.page_description || '',
            status: data.status || '1'
        });
        this.culturalEvents.clear();
        (data.cultural_events || []).forEach((item) => this.addEvent(item));
    }
    get culturalEvents() {
        return this.form.get('cultural_events');
    }
    addEvent(event) {
        this.culturalEvents.push(this.fb.group({
            title: event?.title || '',
            image1: event?.image1 || '',
            sort_order: event?.sort_order || this.culturalEvents.length
        }));
    }
    removeEvent(index) {
        this.culturalEvents.removeAt(index);
    }
    save() {
        const data = this.form.value;
        data.culturalevents_id = this.existingId || '';
        data.loggedin_id = this.authService.getLoggedInID();
        data.status = data.status || '1';
        this.cmsService.saveCulturalEvents(data);
    }
}
CmsCulturalEventsPageComponent.ɵfac = function CmsCulturalEventsPageComponent_Factory(t) { return new (t || CmsCulturalEventsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cms_service__WEBPACK_IMPORTED_MODULE_1__.CmsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CmsCulturalEventsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CmsCulturalEventsPageComponent, selectors: [["ux-cms-culturalevents-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: {
                    appearance: 'standard'
                }
            }
        ])], decls: 40, vars: 14, consts: [[1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1", 2, "display", "block", "font-size", "30px", "font-weight", "600"], [3, "crumbs"], [1, "-mt-6"], [1, "card", "-mt-16", "p-6"], [3, "formGroup", "ngSubmit"], [1, "font-semibold", "text-lg", "mb-2"], [1, "w-full", "mt-2"], ["formControlName", "page_description", "matInput", "", "rows", "6"], [1, "my-4"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex-auto"], ["formControlName", "status"], ["value", "1"], ["value", "0"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-semibold", "text-lg", "m-0"], ["color", "primary", "mat-stroked-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:add", 1, "mr-1"], ["formArrayName", "cultural_events"], ["class", "border rounded p-4 mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["color", "primary", "mat-flat-button", "", "type", "submit"], ["svgIcon", "mat:save", 1, "mr-2"], [1, "border", "rounded", "p-4", "mb-4", 3, "formGroupName"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "text-base"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove Card", 3, "click"], ["svgIcon", "mat:delete"], [1, "w-full"], ["formControlName", "title", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:title", 1, "mr-3"], ["formControlName", "image1", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:image", 1, "mr-3"]], template: function CmsCulturalEventsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Cultural Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ux-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ux-page-layout-content", 4)(8, "div", 5)(9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CmsCulturalEventsPageComponent_Template_form_ngSubmit_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Page Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 8)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Description (shown at top of page)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 11)(18, "mat-form-field", 12)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-select", 13)(22, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 16)(28, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Event Cards (displayed in grid)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsCulturalEventsPageComponent_Template_button_click_30_listener() { return ctx.addEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " Add Event Card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, CmsCulturalEventsPageComponent_div_34_Template, 16, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 22)(37, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.culturalEvents.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.existingId ? "Update" : "Save", " Cultural Events ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__.PageLayoutComponent, _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutHeaderDirective, _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutContentDirective, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbXMtY3VsdHVyYWxldmVudHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [_ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms] } });


/***/ }),

/***/ 17410:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/cms/cms-exhibitions-page/cms-exhibitions-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsExhibitionsPageComponent": () => (/* binding */ CmsExhibitionsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _cms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cms.service */ 48385);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.component */ 96197);
/* harmony import */ var _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-header.directive */ 7755);
/* harmony import */ var _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-content.directive */ 89354);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);




















function CmsExhibitionsPageComponent_div_39_div_19_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50)(1, "mat-form-field", 14)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsExhibitionsPageComponent_div_39_div_19_div_22_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const k_r8 = restoredCtx.index; const j_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.removeImage(i_r2, j_r5, k_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const k_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Image ", k_r8 + 1, " URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControlName", k_r8);
} }
function CmsExhibitionsPageComponent_div_39_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39)(1, "div", 18)(2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsExhibitionsPageComponent_div_39_div_19_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const j_r5 = restoredCtx.index; const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.removeExhibition(i_r2, j_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 8)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Exhibition Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field", 8)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Title Image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 43)(14, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 45)(16, "div", 18)(17, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Gallery Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsExhibitionsPageComponent_div_39_div_19_Template_button_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const j_r5 = restoredCtx.index; const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.addImage(i_r2, j_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, CmsExhibitionsPageComponent_div_39_div_19_div_22_Template, 7, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const j_r5 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", j_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Exhibition ", j_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.getImages(i_r2, j_r5).controls);
} }
function CmsExhibitionsPageComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsExhibitionsPageComponent_div_39_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const i_r2 = restoredCtx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.removeYear(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 8)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Exhibition Year (e.g., 2025 - 2026)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 32)(10, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "mat-divider", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 18)(13, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsExhibitionsPageComponent_div_39_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const i_r2 = restoredCtx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.addExhibition(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Add Exhibition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, CmsExhibitionsPageComponent_div_39_div_19_Template, 23, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const year_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Year ", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Exhibitions in ", year_r1.value.exhibition_year || "this year", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.getExhibitions(i_r2).controls);
} }
const _c0 = function () { return ["CMS", "Exhibitions"]; };
class CmsExhibitionsPageComponent {
    constructor(fb, cmsService, authService) {
        this.fb = fb;
        this.cmsService = cmsService;
        this.authService = authService;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('fullwidth');
        this.existingId = '';
    }
    ngOnInit() {
        this.buildForm();
        this.subscription = this.cmsService.exhibitions_listChanged
            .subscribe((list) => {
            if (list && list.length > 0) {
                this.populateForm(list[0]);
            }
        });
        const list = this.cmsService.getExhibitionsList();
        if (list && list.length > 0) {
            this.populateForm(list[0]);
        }
    }
    buildForm() {
        this.form = this.fb.group({
            title: '',
            description: '',
            status: '1',
            years: this.fb.array([])
        });
    }
    populateForm(data) {
        this.existingId = data._id || '';
        this.form.patchValue({
            title: data.title || '',
            description: data.description || '',
            status: data.status || '1'
        });
        this.years.clear();
        (data.years || []).forEach((year) => this.addYear(year));
    }
    get years() {
        return this.form.get('years');
    }
    addYear(year) {
        const yearGroup = this.fb.group({
            exhibition_year: year?.exhibition_year || '',
            exhibitions: this.fb.array([])
        });
        if (year?.exhibitions) {
            const exhibitionsArray = yearGroup.get('exhibitions');
            year.exhibitions.forEach((exhibition) => {
                exhibitionsArray.push(this.fb.group({
                    title: exhibition.title || '',
                    title_image: exhibition.title_image || '',
                    images: this.fb.array(exhibition.images?.map((img) => this.fb.control(img)) || [])
                }));
            });
        }
        this.years.push(yearGroup);
    }
    removeYear(index) {
        this.years.removeAt(index);
    }
    getExhibitions(yearIndex) {
        return this.years.at(yearIndex).get('exhibitions');
    }
    addExhibition(yearIndex) {
        const exhibitions = this.getExhibitions(yearIndex);
        exhibitions.push(this.fb.group({
            title: '',
            title_image: '',
            images: this.fb.array([])
        }));
    }
    removeExhibition(yearIndex, exhibitionIndex) {
        const exhibitions = this.getExhibitions(yearIndex);
        exhibitions.removeAt(exhibitionIndex);
    }
    getImages(yearIndex, exhibitionIndex) {
        const exhibitions = this.getExhibitions(yearIndex);
        return exhibitions.at(exhibitionIndex).get('images');
    }
    addImage(yearIndex, exhibitionIndex) {
        const images = this.getImages(yearIndex, exhibitionIndex);
        images.push(this.fb.control(''));
    }
    removeImage(yearIndex, exhibitionIndex, imageIndex) {
        const images = this.getImages(yearIndex, exhibitionIndex);
        images.removeAt(imageIndex);
    }
    save() {
        const data = this.form.value;
        data.exhibitions_id = this.existingId || '';
        data.loggedin_id = this.authService.getLoggedInID();
        data.status = data.status || '1';
        this.cmsService.saveExhibitions(data);
    }
}
CmsExhibitionsPageComponent.ɵfac = function CmsExhibitionsPageComponent_Factory(t) { return new (t || CmsExhibitionsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cms_service__WEBPACK_IMPORTED_MODULE_1__.CmsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CmsExhibitionsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CmsExhibitionsPageComponent, selectors: [["ux-cms-exhibitions-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: {
                    appearance: 'standard'
                }
            }
        ])], decls: 45, vars: 14, consts: [[1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1", 2, "display", "block", "font-size", "30px", "font-weight", "600"], [3, "crumbs"], [1, "-mt-6"], [1, "card", "-mt-16", "p-6"], [3, "formGroup", "ngSubmit"], [1, "font-semibold", "text-lg", "mb-2"], [1, "w-full"], ["formControlName", "title", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:title", 1, "mr-3"], ["formControlName", "description", "matInput", "", "rows", "4"], [1, "my-4"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex-auto"], ["formControlName", "status"], ["value", "1"], ["value", "0"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-semibold", "text-lg", "m-0"], ["color", "primary", "mat-stroked-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:add", 1, "mr-1"], ["formArrayName", "years"], ["class", "border-2 rounded p-4 mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["color", "primary", "mat-flat-button", "", "type", "submit"], ["svgIcon", "mat:save", 1, "mr-2"], [1, "border-2", "rounded", "p-4", "mb-4", 3, "formGroupName"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "text-lg"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove Year", 3, "click"], ["svgIcon", "mat:delete"], ["formControlName", "exhibition_year", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:calendar_today", 1, "mr-3"], [1, "my-3"], [1, "font-semibold", "m-0"], ["color", "accent", "mat-stroked-button", "", "type", "button", 3, "click"], ["formArrayName", "exhibitions"], ["class", "border rounded p-3 mb-3 bg-gray-50", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "border", "rounded", "p-3", "mb-3", "bg-gray-50", 3, "formGroupName"], [1, "font-medium", "text-sm"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove Exhibition", 3, "click"], ["svgIcon", "mat:close"], ["formControlName", "title_image", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:image", 1, "mr-3"], [1, "mt-3"], ["color", "primary", "mat-icon-button", "", "type", "button", "matTooltip", "Add Image", 3, "click"], ["svgIcon", "mat:add_photo_alternate"], ["formArrayName", "images"], ["class", "flex gap-2 mb-2", 4, "ngFor", "ngForOf"], [1, "flex", "gap-2", "mb-2"], ["matInput", "", 3, "formControlName"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove Image", 3, "click"]], template: function CmsExhibitionsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Exhibitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ux-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ux-page-layout-content", 4)(8, "div", 5)(9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CmsExhibitionsPageComponent_Template_form_ngSubmit_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Page Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 8)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Page Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 9)(16, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-form-field", 8)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Page Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "mat-divider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 13)(23, "mat-form-field", 14)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-select", 15)(27, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-divider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 18)(33, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Exhibition Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsExhibitionsPageComponent_Template_button_click_35_listener() { return ctx.addYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, " Add Year ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, CmsExhibitionsPageComponent_div_39_Template, 20, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "mat-divider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 24)(42, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.years.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.existingId ? "Update" : "Save", " Exhibitions ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__.PageLayoutComponent, _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutHeaderDirective, _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutContentDirective, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbXMtZXhoaWJpdGlvbnMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [_ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms] } });


/***/ }),

/***/ 23416:
/*!****************************************************************************!*\
  !*** ./src/app/pages/cms/cms-folkarts-page/cms-folkarts-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsFolkArtsPageComponent": () => (/* binding */ CmsFolkArtsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _cms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cms.service */ 48385);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.component */ 96197);
/* harmony import */ var _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-header.directive */ 7755);
/* harmony import */ var _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-content.directive */ 89354);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);




















function CmsFolkArtsPageComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsFolkArtsPageComponent_div_34_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.removeItem(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 30)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Title (shown on card)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 31)(10, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-form-field", 30)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Image URL (card image)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input", 33)(15, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Card ", i_r2 + 1, "");
} }
const _c0 = function () { return ["CMS", "Folk & Performing Arts"]; };
class CmsFolkArtsPageComponent {
    constructor(fb, cmsService, authService) {
        this.fb = fb;
        this.cmsService = cmsService;
        this.authService = authService;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('fullwidth');
        this.existingId = '';
    }
    ngOnInit() {
        this.buildForm();
        this.subscription = this.cmsService.folkarts_listChanged
            .subscribe((list) => {
            if (list && list.length > 0) {
                this.populateForm(list[0]);
            }
        });
        const list = this.cmsService.getFolkArtsList();
        if (list && list.length > 0) {
            this.populateForm(list[0]);
        }
    }
    buildForm() {
        this.form = this.fb.group({
            page_description: '',
            status: '1',
            folkarts_items: this.fb.array([])
        });
    }
    populateForm(data) {
        this.existingId = data._id || '';
        this.form.patchValue({
            page_description: data.page_description || '',
            status: data.status || '1'
        });
        this.folkArtsItems.clear();
        (data.folkarts_items || []).forEach((item) => this.addItem(item));
    }
    get folkArtsItems() {
        return this.form.get('folkarts_items');
    }
    addItem(item) {
        this.folkArtsItems.push(this.fb.group({
            title: item?.title || '',
            image1: item?.image1 || '',
            sort_order: item?.sort_order || this.folkArtsItems.length
        }));
    }
    removeItem(index) {
        this.folkArtsItems.removeAt(index);
    }
    save() {
        const data = this.form.value;
        data.folkarts_id = this.existingId || '';
        data.loggedin_id = this.authService.getLoggedInID();
        data.status = data.status || '1';
        this.cmsService.saveFolkArts(data);
    }
}
CmsFolkArtsPageComponent.ɵfac = function CmsFolkArtsPageComponent_Factory(t) { return new (t || CmsFolkArtsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cms_service__WEBPACK_IMPORTED_MODULE_1__.CmsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CmsFolkArtsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CmsFolkArtsPageComponent, selectors: [["ux-cms-folkarts-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: {
                    appearance: 'standard'
                }
            }
        ])], decls: 40, vars: 14, consts: [[1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1", 2, "display", "block", "font-size", "30px", "font-weight", "600"], [3, "crumbs"], [1, "-mt-6"], [1, "card", "-mt-16", "p-6"], [3, "formGroup", "ngSubmit"], [1, "font-semibold", "text-lg", "mb-2"], [1, "w-full", "mt-2"], ["formControlName", "page_description", "matInput", "", "rows", "6"], [1, "my-4"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex-auto"], ["formControlName", "status"], ["value", "1"], ["value", "0"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-semibold", "text-lg", "m-0"], ["color", "primary", "mat-stroked-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:add", 1, "mr-1"], ["formArrayName", "folkarts_items"], ["class", "border rounded p-4 mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["color", "primary", "mat-flat-button", "", "type", "submit"], ["svgIcon", "mat:save", 1, "mr-2"], [1, "border", "rounded", "p-4", "mb-4", 3, "formGroupName"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "text-base"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove Card", 3, "click"], ["svgIcon", "mat:delete"], [1, "w-full"], ["formControlName", "title", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:title", 1, "mr-3"], ["formControlName", "image1", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:image", 1, "mr-3"]], template: function CmsFolkArtsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Folk & Performing Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ux-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ux-page-layout-content", 4)(8, "div", 5)(9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CmsFolkArtsPageComponent_Template_form_ngSubmit_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Page Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 8)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Description (shown at top of page)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 11)(18, "mat-form-field", 12)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-select", 13)(22, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 16)(28, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Folk Art Cards (displayed in grid)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsFolkArtsPageComponent_Template_button_click_30_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " Add Folk Art Card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, CmsFolkArtsPageComponent_div_34_Template, 16, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 22)(37, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.folkArtsItems.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.existingId ? "Update" : "Save", " Folk & Performing Arts ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__.PageLayoutComponent, _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutHeaderDirective, _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutContentDirective, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbXMtZm9sa2FydHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [_ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms] } });


/***/ }),

/***/ 69347:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/cms/cms-handicrafts-page/cms-handicrafts-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsHandicraftsPageComponent": () => (/* binding */ CmsHandicraftsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _cms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cms.service */ 48385);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.component */ 96197);
/* harmony import */ var _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-header.directive */ 7755);
/* harmony import */ var _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-content.directive */ 89354);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);




















function CmsHandicraftsPageComponent_div_34_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39)(1, "div", 16)(2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsHandicraftsPageComponent_div_34_div_18_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const ii_r5 = restoredCtx.index; const si_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.removeImage(si_r2, ii_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 11)(7, "mat-form-field", 12)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-form-field", 12)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Navigation Route");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-form-field", 30)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Image Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 45)(19, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ii_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", ii_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Image ", ii_r5 + 1, "");
} }
function CmsHandicraftsPageComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsHandicraftsPageComponent_div_34_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const si_r2 = restoredCtx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.removeSection(si_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 30)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Section Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 31)(10, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 33)(12, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsHandicraftsPageComponent_div_34_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const si_r2 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.addImage(si_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Add Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, CmsHandicraftsPageComponent_div_34_div_18_Template, 20, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const si_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", si_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Section ", si_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formArrayName", "images");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.getSectionImages(si_r2).controls);
} }
const _c0 = function () { return ["CMS", "Handicrafts"]; };
class CmsHandicraftsPageComponent {
    constructor(fb, cmsService, authService) {
        this.fb = fb;
        this.cmsService = cmsService;
        this.authService = authService;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('fullwidth');
        this.existingId = '';
    }
    ngOnInit() {
        this.buildForm();
        this.subscription = this.cmsService.handicrafts_listChanged
            .subscribe((list) => {
            if (list && list.length > 0) {
                this.populateForm(list[0]);
            }
        });
        const list = this.cmsService.getHandicraftsList();
        if (list && list.length > 0) {
            this.populateForm(list[0]);
        }
    }
    buildForm() {
        this.form = this.fb.group({
            description: '',
            status: '1',
            gallery_sections: this.fb.array([])
        });
    }
    populateForm(data) {
        this.existingId = data._id || '';
        this.form.patchValue({
            description: data.description || '',
            status: data.status || '1'
        });
        this.gallerySections.clear();
        (data.gallery_sections || []).forEach((section) => this.addSection(section));
    }
    // Gallery Sections
    get gallerySections() {
        return this.form.get('gallery_sections');
    }
    addSection(section) {
        const sectionGroup = this.fb.group({
            title: section?.title || '',
            sort_order: section?.sort_order || this.gallerySections.length,
            images: this.fb.array([])
        });
        this.gallerySections.push(sectionGroup);
        const sectionIndex = this.gallerySections.length - 1;
        if (section?.images && section.images.length > 0) {
            section.images.forEach((img) => this.addImage(sectionIndex, img));
        }
    }
    removeSection(index) {
        this.gallerySections.removeAt(index);
    }
    // Images within a section
    getSectionImages(sectionIndex) {
        return this.gallerySections.at(sectionIndex).get('images');
    }
    addImage(sectionIndex, img) {
        this.getSectionImages(sectionIndex).push(this.fb.group({
            name: img?.name || '',
            image_path: img?.image_path || '',
            navigation_route: img?.navigation_route || '',
            sort_order: img?.sort_order || this.getSectionImages(sectionIndex).length
        }));
    }
    removeImage(sectionIndex, imageIndex) {
        this.getSectionImages(sectionIndex).removeAt(imageIndex);
    }
    save() {
        const data = this.form.value;
        data.handicrafts_id = this.existingId || '';
        data.loggedin_id = this.authService.getLoggedInID();
        data.status = data.status || '1';
        this.cmsService.saveHandicrafts(data);
    }
}
CmsHandicraftsPageComponent.ɵfac = function CmsHandicraftsPageComponent_Factory(t) { return new (t || CmsHandicraftsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cms_service__WEBPACK_IMPORTED_MODULE_1__.CmsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CmsHandicraftsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CmsHandicraftsPageComponent, selectors: [["ux-cms-handicrafts-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: {
                    appearance: 'standard'
                }
            }
        ])], decls: 40, vars: 14, consts: [[1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1", 2, "display", "block", "font-size", "30px", "font-weight", "600"], [3, "crumbs"], [1, "-mt-6"], [1, "card", "-mt-16", "p-6"], [3, "formGroup", "ngSubmit"], [1, "font-semibold", "text-lg", "mb-2"], [1, "w-full", "mt-2"], ["formControlName", "description", "matInput", "", "rows", "6"], [1, "my-4"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex-auto"], ["formControlName", "status"], ["value", "1"], ["value", "0"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-semibold", "text-lg", "m-0"], ["color", "primary", "mat-stroked-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:add", 1, "mr-1"], ["formArrayName", "gallery_sections"], ["class", "border rounded p-4 mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["color", "primary", "mat-flat-button", "", "type", "submit"], ["svgIcon", "mat:save", 1, "mr-2"], [1, "border", "rounded", "p-4", "mb-4", 3, "formGroupName"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "text-base"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove Section", 3, "click"], ["svgIcon", "mat:delete"], [1, "w-full"], ["formControlName", "title", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:category", 1, "mr-3"], [1, "flex", "items-center", "justify-between", "mb-2", "mt-2"], [1, "font-medium", "text-sm"], ["color", "accent", "mat-stroked-button", "", "type", "button", 1, "text-sm", 3, "click"], ["svgIcon", "mat:add_photo_alternate", 1, "mr-1"], [3, "formArrayName"], ["class", "border rounded p-3 mb-2 bg-gray-50", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "border", "rounded", "p-3", "mb-2", "bg-gray-50", 3, "formGroupName"], [1, "text-sm", "font-medium"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove Image", 3, "click"], ["svgIcon", "mat:close", 1, "icon-sm"], ["formControlName", "name", "matInput", ""], ["formControlName", "navigation_route", "matInput", ""], ["formControlName", "image_path", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:image", 1, "mr-3"]], template: function CmsHandicraftsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Handicrafts");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ux-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ux-page-layout-content", 4)(8, "div", 5)(9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CmsHandicraftsPageComponent_Template_form_ngSubmit_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 8)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Handicrafts Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 11)(18, "mat-form-field", 12)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-select", 13)(22, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 16)(28, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Gallery Sections");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsHandicraftsPageComponent_Template_button_click_30_listener() { return ctx.addSection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " Add Section ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, CmsHandicraftsPageComponent_div_34_Template, 19, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 22)(37, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.gallerySections.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.existingId ? "Update" : "Save", " Handicrafts ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__.PageLayoutComponent, _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutHeaderDirective, _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutContentDirective, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbXMtaGFuZGljcmFmdHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [_ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms] } });


/***/ }),

/***/ 98194:
/*!******************************************************************************!*\
  !*** ./src/app/pages/cms/cms-handlooms-page/cms-handlooms-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsHandloomsPageComponent": () => (/* binding */ CmsHandloomsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _cms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cms.service */ 48385);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.component */ 96197);
/* harmony import */ var _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-header.directive */ 7755);
/* harmony import */ var _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-content.directive */ 89354);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);




















function CmsHandloomsPageComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsHandloomsPageComponent_div_34_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.removeItem(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 11)(7, "mat-form-field", 12)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 30)(11, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 12)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Detail URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field", 33)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 34)(20, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-form-field", 33)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Description 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field", 33)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Description 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-form-field", 33)(30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Description 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Item ", i_r2 + 1, "");
} }
const _c0 = function () { return ["CMS", "Handlooms"]; };
class CmsHandloomsPageComponent {
    constructor(fb, cmsService, authService) {
        this.fb = fb;
        this.cmsService = cmsService;
        this.authService = authService;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('fullwidth');
        this.existingId = '';
    }
    ngOnInit() {
        this.buildForm();
        this.subscription = this.cmsService.handlooms_listChanged
            .subscribe((list) => {
            if (list && list.length > 0) {
                this.populateForm(list[0]);
            }
        });
        const list = this.cmsService.getHandloomsList();
        if (list && list.length > 0) {
            this.populateForm(list[0]);
        }
    }
    buildForm() {
        this.form = this.fb.group({
            description: '',
            status: '1',
            gallery_sections: this.fb.array([])
        });
    }
    populateForm(data) {
        this.existingId = data._id || '';
        this.form.patchValue({
            description: data.description || '',
            status: data.status || '1'
        });
        this.gallerySections.clear();
        (data.gallery_sections || []).forEach((item) => this.addItem(item));
    }
    get gallerySections() {
        return this.form.get('gallery_sections');
    }
    addItem(item) {
        this.gallerySections.push(this.fb.group({
            name: item?.name || '',
            image_url: item?.image_url || '',
            detail_url: item?.detail_url || '',
            description1: item?.description1 || '',
            description2: item?.description2 || '',
            description3: item?.description3 || '',
            sort_order: item?.sort_order || this.gallerySections.length
        }));
    }
    removeItem(index) {
        this.gallerySections.removeAt(index);
    }
    save() {
        const data = this.form.value;
        data.handlooms_id = this.existingId || '';
        data.loggedin_id = this.authService.getLoggedInID();
        data.status = data.status || '1';
        this.cmsService.saveHandlooms(data);
    }
}
CmsHandloomsPageComponent.ɵfac = function CmsHandloomsPageComponent_Factory(t) { return new (t || CmsHandloomsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cms_service__WEBPACK_IMPORTED_MODULE_1__.CmsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CmsHandloomsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CmsHandloomsPageComponent, selectors: [["ux-cms-handlooms-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: {
                    appearance: 'standard'
                }
            }
        ])], decls: 40, vars: 14, consts: [[1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1", 2, "display", "block", "font-size", "30px", "font-weight", "600"], [3, "crumbs"], [1, "-mt-6"], [1, "card", "-mt-16", "p-6"], [3, "formGroup", "ngSubmit"], [1, "font-semibold", "text-lg", "mb-2"], [1, "w-full", "mt-2"], ["formControlName", "description", "matInput", "", "rows", "6"], [1, "my-4"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex-auto"], ["formControlName", "status"], ["value", "1"], ["value", "0"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-semibold", "text-lg", "m-0"], ["color", "primary", "mat-stroked-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:add", 1, "mr-1"], ["formArrayName", "gallery_sections"], ["class", "border rounded p-4 mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["color", "primary", "mat-flat-button", "", "type", "submit"], ["svgIcon", "mat:save", 1, "mr-2"], [1, "border", "rounded", "p-4", "mb-4", 3, "formGroupName"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "text-base"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove Item", 3, "click"], ["svgIcon", "mat:delete"], ["formControlName", "name", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:label", 1, "mr-3"], ["formControlName", "detail_url", "matInput", ""], [1, "w-full"], ["formControlName", "image_url", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:image", 1, "mr-3"], ["formControlName", "description1", "matInput", "", "rows", "3"], ["formControlName", "description2", "matInput", "", "rows", "3"], ["formControlName", "description3", "matInput", "", "rows", "3"]], template: function CmsHandloomsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Handlooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ux-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ux-page-layout-content", 4)(8, "div", 5)(9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CmsHandloomsPageComponent_Template_form_ngSubmit_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 8)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Handlooms Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 11)(18, "mat-form-field", 12)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-select", 13)(22, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 16)(28, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Handloom Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsHandloomsPageComponent_Template_button_click_30_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " Add Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, CmsHandloomsPageComponent_div_34_Template, 33, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 22)(37, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.gallerySections.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.existingId ? "Update" : "Save", " Handlooms ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__.PageLayoutComponent, _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutHeaderDirective, _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutContentDirective, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbXMtaGFuZGxvb21zLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [_ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms] } });


/***/ }),

/***/ 34633:
/*!**********************************************************!*\
  !*** ./src/app/pages/cms/cms-page/cms-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsPageComponent": () => (/* binding */ CmsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _cms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cms.service */ 48385);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.component */ 96197);
/* harmony import */ var _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-header.directive */ 7755);
/* harmony import */ var _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-content.directive */ 89354);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);




















function CmsPageComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 21)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsPageComponent_div_53_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const i_r4 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.removeObjective(i_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 10)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Objective");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Objective ", i_r4 + 1, "");
} }
function CmsPageComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 21)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsPageComponent_div_62_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const i_r8 = restoredCtx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.removeMission(i_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 10)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Mission Statement");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Mission ", i_r8 + 1, "");
} }
function CmsPageComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 21)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsPageComponent_div_71_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const i_r12 = restoredCtx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.removeMember(i_r12)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 16)(7, "mat-form-field", 17)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 38)(11, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 17)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Designation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field", 10)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 41)(20, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Member ", i_r12 + 1, "");
} }
const _c0 = function () { return ["CMS", "About Us"]; };
class CmsPageComponent {
    constructor(fb, cmsService, authService) {
        this.fb = fb;
        this.cmsService = cmsService;
        this.authService = authService;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('fullwidth');
        this.existingId = '';
    }
    ngOnInit() {
        this.buildForm();
        this.subscription = this.cmsService.aboutus_listChanged
            .subscribe((list) => {
            if (list && list.length > 0) {
                this.populateForm(list[0]);
            }
        });
        const list = this.cmsService.getAboutUsList();
        if (list && list.length > 0) {
            this.populateForm(list[0]);
        }
    }
    buildForm() {
        this.form = this.fb.group({
            para1: '',
            para2: '',
            para3: '',
            para4: '',
            vision: '',
            status: '1',
            objectives: this.fb.array([]),
            mission: this.fb.array([]),
            members_list: this.fb.array([])
        });
    }
    populateForm(data) {
        this.existingId = data._id || '';
        this.form.patchValue({
            para1: data.para1 || '',
            para2: data.para2 || '',
            para3: data.para3 || '',
            para4: data.para4 || '',
            vision: data.vision || '',
            status: data.status || '1'
        });
        // Clear and repopulate arrays
        this.objectives.clear();
        (data.objectives || []).forEach((obj) => this.addObjective(obj));
        this.missionList.clear();
        (data.mission || []).forEach((m) => this.addMission(m));
        this.membersList.clear();
        (data.members_list || []).forEach((member) => this.addMember(member));
    }
    // Objectives
    get objectives() {
        return this.form.get('objectives');
    }
    addObjective(obj) {
        this.objectives.push(this.fb.group({
            objective: obj?.objective || '',
            sort_order: obj?.sort_order || this.objectives.length
        }));
    }
    removeObjective(index) {
        this.objectives.removeAt(index);
    }
    // Mission
    get missionList() {
        return this.form.get('mission');
    }
    addMission(m) {
        this.missionList.push(this.fb.group({
            mission: m?.mission || '',
            sort_order: m?.sort_order || this.missionList.length
        }));
    }
    removeMission(index) {
        this.missionList.removeAt(index);
    }
    // Members
    get membersList() {
        return this.form.get('members_list');
    }
    addMember(member) {
        this.membersList.push(this.fb.group({
            name: member?.name || '',
            designation: member?.designation || '',
            image: member?.image || '',
            sort_order: member?.sort_order || this.membersList.length
        }));
    }
    removeMember(index) {
        this.membersList.removeAt(index);
    }
    save() {
        const data = this.form.value;
        data.aboutus_id = this.existingId || '';
        data.loggedin_id = this.authService.getLoggedInID();
        data.status = data.status || '1';
        this.cmsService.saveAboutUs(data);
    }
}
CmsPageComponent.ɵfac = function CmsPageComponent_Factory(t) { return new (t || CmsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cms_service__WEBPACK_IMPORTED_MODULE_1__.CmsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CmsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CmsPageComponent, selectors: [["ux-cms-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: {
                    appearance: 'standard'
                }
            }
        ])], decls: 77, vars: 16, consts: [[1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1", 2, "display", "block", "font-size", "30px", "font-weight", "600"], [3, "crumbs"], [1, "-mt-6"], [1, "card", "-mt-16", "p-6"], [3, "formGroup", "ngSubmit"], [1, "font-semibold", "text-lg", "mb-2"], [1, "w-full", "mt-2"], ["formControlName", "para1", "matInput", "", "rows", "4"], [1, "w-full"], ["formControlName", "para2", "matInput", "", "rows", "4"], ["formControlName", "para3", "matInput", "", "rows", "4"], ["formControlName", "para4", "matInput", "", "rows", "4"], [1, "my-4"], ["formControlName", "vision", "matInput", "", "rows", "3"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex-auto"], ["formControlName", "status"], ["value", "1"], ["value", "0"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-semibold", "text-lg", "m-0"], ["color", "primary", "mat-stroked-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:add", 1, "mr-1"], ["formArrayName", "objectives"], ["class", "border rounded p-4 mb-3", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "mission"], ["formArrayName", "members_list"], [1, "flex", "justify-end"], ["color", "primary", "mat-flat-button", "", "type", "submit"], ["svgIcon", "mat:save", 1, "mr-2"], [1, "border", "rounded", "p-4", "mb-3", 3, "formGroupName"], [1, "font-medium"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove", 3, "click"], ["svgIcon", "mat:delete"], ["formControlName", "objective", "matInput", "", "rows", "2"], ["formControlName", "mission", "matInput", "", "rows", "2"], ["formControlName", "name", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:person", 1, "mr-3"], ["formControlName", "designation", "matInput", ""], ["formControlName", "image", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:image", 1, "mr-3"]], template: function CmsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ux-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ux-page-layout-content", 4)(8, "div", 5)(9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CmsPageComponent_Template_form_ngSubmit_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Content Paragraphs");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 8)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Paragraph 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field", 10)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Paragraph 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-form-field", 10)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Paragraph 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-form-field", 10)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Paragraph 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "mat-divider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-form-field", 10)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Vision Statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "mat-divider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 16)(37, "mat-form-field", 17)(38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-select", 18)(41, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "mat-divider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 21)(47, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Objectives");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsPageComponent_Template_button_click_49_listener() { return ctx.addObjective(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, " Add Objective ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, CmsPageComponent_div_53_Template, 10, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "mat-divider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 21)(56, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsPageComponent_Template_button_click_58_listener() { return ctx.addMission(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, " Add Mission ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, CmsPageComponent_div_62_Template, 10, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "mat-divider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 21)(65, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsPageComponent_Template_button_click_67_listener() { return ctx.addMember(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, " Add Member ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, CmsPageComponent_div_71_Template, 21, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "mat-divider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 29)(74, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.objectives.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.missionList.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.membersList.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.existingId ? "Update" : "Save", " About Us ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__.PageLayoutComponent, _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutHeaderDirective, _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutContentDirective, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbXMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [_ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms] } });


/***/ }),

/***/ 59036:
/*!***************************************************!*\
  !*** ./src/app/pages/cms/cms-resolver.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsResolverService": () => (/* binding */ AboutUsResolverService),
/* harmony export */   "CulturalEventsResolverService": () => (/* binding */ CulturalEventsResolverService),
/* harmony export */   "ExhibitionsResolverService": () => (/* binding */ ExhibitionsResolverService),
/* harmony export */   "FolkArtsResolverService": () => (/* binding */ FolkArtsResolverService),
/* harmony export */   "HandicraftsResolverService": () => (/* binding */ HandicraftsResolverService),
/* harmony export */   "HandloomsResolverService": () => (/* binding */ HandloomsResolverService),
/* harmony export */   "TendersResolverService": () => (/* binding */ TendersResolverService),
/* harmony export */   "VillageMuseumsResolverService": () => (/* binding */ VillageMuseumsResolverService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _cms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cms.service */ 48385);


class AboutUsResolverService {
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    resolve(route, state) {
        return this.cmsService.getAllAboutUs();
    }
}
AboutUsResolverService.ɵfac = function AboutUsResolverService_Factory(t) { return new (t || AboutUsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cms_service__WEBPACK_IMPORTED_MODULE_0__.CmsService)); };
AboutUsResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AboutUsResolverService, factory: AboutUsResolverService.ɵfac, providedIn: 'root' });
class HandicraftsResolverService {
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    resolve(route, state) {
        return this.cmsService.getAllHandicrafts();
    }
}
HandicraftsResolverService.ɵfac = function HandicraftsResolverService_Factory(t) { return new (t || HandicraftsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cms_service__WEBPACK_IMPORTED_MODULE_0__.CmsService)); };
HandicraftsResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HandicraftsResolverService, factory: HandicraftsResolverService.ɵfac, providedIn: 'root' });
class HandloomsResolverService {
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    resolve(route, state) {
        return this.cmsService.getAllHandlooms();
    }
}
HandloomsResolverService.ɵfac = function HandloomsResolverService_Factory(t) { return new (t || HandloomsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cms_service__WEBPACK_IMPORTED_MODULE_0__.CmsService)); };
HandloomsResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HandloomsResolverService, factory: HandloomsResolverService.ɵfac, providedIn: 'root' });
class FolkArtsResolverService {
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    resolve(route, state) {
        return this.cmsService.getAllFolkArts();
    }
}
FolkArtsResolverService.ɵfac = function FolkArtsResolverService_Factory(t) { return new (t || FolkArtsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cms_service__WEBPACK_IMPORTED_MODULE_0__.CmsService)); };
FolkArtsResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FolkArtsResolverService, factory: FolkArtsResolverService.ɵfac, providedIn: 'root' });
class CulturalEventsResolverService {
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    resolve(route, state) {
        return this.cmsService.getAllCulturalEvents();
    }
}
CulturalEventsResolverService.ɵfac = function CulturalEventsResolverService_Factory(t) { return new (t || CulturalEventsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cms_service__WEBPACK_IMPORTED_MODULE_0__.CmsService)); };
CulturalEventsResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CulturalEventsResolverService, factory: CulturalEventsResolverService.ɵfac, providedIn: 'root' });
class VillageMuseumsResolverService {
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    resolve(route, state) {
        return this.cmsService.getAllVillageMuseums();
    }
}
VillageMuseumsResolverService.ɵfac = function VillageMuseumsResolverService_Factory(t) { return new (t || VillageMuseumsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cms_service__WEBPACK_IMPORTED_MODULE_0__.CmsService)); };
VillageMuseumsResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VillageMuseumsResolverService, factory: VillageMuseumsResolverService.ɵfac, providedIn: 'root' });
class ExhibitionsResolverService {
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    resolve(route, state) {
        return this.cmsService.getAllExhibitions();
    }
}
ExhibitionsResolverService.ɵfac = function ExhibitionsResolverService_Factory(t) { return new (t || ExhibitionsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cms_service__WEBPACK_IMPORTED_MODULE_0__.CmsService)); };
ExhibitionsResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExhibitionsResolverService, factory: ExhibitionsResolverService.ɵfac, providedIn: 'root' });
class TendersResolverService {
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    resolve(route, state) {
        return this.cmsService.getAllTenders();
    }
}
TendersResolverService.ɵfac = function TendersResolverService_Factory(t) { return new (t || TendersResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cms_service__WEBPACK_IMPORTED_MODULE_0__.CmsService)); };
TendersResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TendersResolverService, factory: TendersResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37530:
/*!*************************************************!*\
  !*** ./src/app/pages/cms/cms-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsRoutingModule": () => (/* binding */ CmsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _cms_page_cms_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cms-page/cms-page.component */ 34633);
/* harmony import */ var _cms_handicrafts_page_cms_handicrafts_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cms-handicrafts-page/cms-handicrafts-page.component */ 69347);
/* harmony import */ var _cms_handlooms_page_cms_handlooms_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cms-handlooms-page/cms-handlooms-page.component */ 98194);
/* harmony import */ var _cms_folkarts_page_cms_folkarts_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cms-folkarts-page/cms-folkarts-page.component */ 23416);
/* harmony import */ var _cms_culturalevents_page_cms_culturalevents_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cms-culturalevents-page/cms-culturalevents-page.component */ 40171);
/* harmony import */ var _cms_villagemuseums_page_cms_villagemuseums_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cms-villagemuseums-page/cms-villagemuseums-page.component */ 75167);
/* harmony import */ var _cms_exhibitions_page_cms_exhibitions_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cms-exhibitions-page/cms-exhibitions-page.component */ 17410);
/* harmony import */ var _cms_tenders_page_cms_tenders_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cms-tenders-page/cms-tenders-page.component */ 59207);
/* harmony import */ var _cms_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cms-resolver.service */ 59036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);













const routes = [
    {
        path: 'aboutus',
        component: _cms_page_cms_page_component__WEBPACK_IMPORTED_MODULE_0__.CmsPageComponent,
        data: {
            toolbarShadowEnabled: false
        },
        resolve: [_cms_resolver_service__WEBPACK_IMPORTED_MODULE_8__.AboutUsResolverService]
    },
    {
        path: 'parks',
        component: _cms_page_cms_page_component__WEBPACK_IMPORTED_MODULE_0__.CmsPageComponent,
        data: {
            toolbarShadowEnabled: false,
            pageType: 'parks'
        }
    },
    {
        path: 'handicrafts',
        component: _cms_handicrafts_page_cms_handicrafts_page_component__WEBPACK_IMPORTED_MODULE_1__.CmsHandicraftsPageComponent,
        data: {
            toolbarShadowEnabled: false
        },
        resolve: [_cms_resolver_service__WEBPACK_IMPORTED_MODULE_8__.HandicraftsResolverService]
    },
    {
        path: 'handlooms',
        component: _cms_handlooms_page_cms_handlooms_page_component__WEBPACK_IMPORTED_MODULE_2__.CmsHandloomsPageComponent,
        data: {
            toolbarShadowEnabled: false
        },
        resolve: [_cms_resolver_service__WEBPACK_IMPORTED_MODULE_8__.HandloomsResolverService]
    },
    {
        path: 'folkarts',
        component: _cms_folkarts_page_cms_folkarts_page_component__WEBPACK_IMPORTED_MODULE_3__.CmsFolkArtsPageComponent,
        data: {
            toolbarShadowEnabled: false
        },
        resolve: [_cms_resolver_service__WEBPACK_IMPORTED_MODULE_8__.FolkArtsResolverService]
    },
    {
        path: 'culturalevents',
        component: _cms_culturalevents_page_cms_culturalevents_page_component__WEBPACK_IMPORTED_MODULE_4__.CmsCulturalEventsPageComponent,
        data: {
            toolbarShadowEnabled: false
        },
        resolve: [_cms_resolver_service__WEBPACK_IMPORTED_MODULE_8__.CulturalEventsResolverService]
    },
    {
        path: 'villagemuseums',
        component: _cms_villagemuseums_page_cms_villagemuseums_page_component__WEBPACK_IMPORTED_MODULE_5__.CmsVillageMuseumsPageComponent,
        data: {
            toolbarShadowEnabled: false
        },
        resolve: [_cms_resolver_service__WEBPACK_IMPORTED_MODULE_8__.VillageMuseumsResolverService]
    },
    {
        path: 'exhibitions',
        component: _cms_exhibitions_page_cms_exhibitions_page_component__WEBPACK_IMPORTED_MODULE_6__.CmsExhibitionsPageComponent,
        data: {
            toolbarShadowEnabled: false
        },
        resolve: [_cms_resolver_service__WEBPACK_IMPORTED_MODULE_8__.ExhibitionsResolverService]
    },
    {
        path: 'tenders',
        component: _cms_tenders_page_cms_tenders_page_component__WEBPACK_IMPORTED_MODULE_7__.CmsTendersPageComponent,
        data: {
            toolbarShadowEnabled: false
        },
        resolve: [_cms_resolver_service__WEBPACK_IMPORTED_MODULE_8__.TendersResolverService]
    }
];
class CmsRoutingModule {
}
CmsRoutingModule.ɵfac = function CmsRoutingModule_Factory(t) { return new (t || CmsRoutingModule)(); };
CmsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: CmsRoutingModule });
CmsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](CmsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__.QuicklinkModule] }); })();


/***/ }),

/***/ 59207:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cms/cms-tenders-page/cms-tenders-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsTendersPageComponent": () => (/* binding */ CmsTendersPageComponent)
/* harmony export */ });
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _cms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cms.service */ 48385);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.component */ 96197);
/* harmony import */ var _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-header.directive */ 7755);
/* harmony import */ var _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-content.directive */ 89354);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);



















function CmsTendersPageComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsTendersPageComponent_div_39_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.removeTender(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 8)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Tender Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 32)(10, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 34)(12, "mat-form-field", 14)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Date (DD-MM-YYYY)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 35)(16, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-form-field", 14)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Sort Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 37)(21, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-form-field", 8)(23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Document URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "input", 39)(26, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-form-field", 8)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "View URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 41)(31, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-form-field", 8)(33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Download URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 43)(36, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Tender ", i_r2 + 1, "");
} }
const _c0 = function () { return ["CMS", "Tenders"]; };
class CmsTendersPageComponent {
    constructor(fb, cmsService, authService) {
        this.fb = fb;
        this.cmsService = cmsService;
        this.authService = authService;
        this.existingId = '';
    }
    ngOnInit() {
        this.buildForm();
        this.subscription = this.cmsService.tenders_listChanged
            .subscribe((list) => {
            if (list && list.length > 0) {
                this.populateForm(list[0]);
            }
        });
        const list = this.cmsService.getTendersList();
        if (list && list.length > 0) {
            this.populateForm(list[0]);
        }
    }
    buildForm() {
        this.form = this.fb.group({
            page_title: '',
            page_description: '',
            status: '1',
            tenders: this.fb.array([])
        });
    }
    populateForm(data) {
        this.existingId = data._id || '';
        this.form.patchValue({
            page_title: data.page_title || '',
            page_description: data.page_description || '',
            status: data.status || '1'
        });
        this.tenders.clear();
        (data.tenders || []).forEach((tender) => this.addTender(tender));
    }
    get tenders() {
        return this.form.get('tenders');
    }
    addTender(tender) {
        this.tenders.push(this.fb.group({
            name: tender?.name || '',
            date: tender?.date || '',
            document_url: tender?.document_url || '',
            view_url: tender?.view_url || '',
            download_url: tender?.download_url || '',
            sort_order: tender?.sort_order || 0
        }));
    }
    removeTender(index) {
        this.tenders.removeAt(index);
    }
    save() {
        const data = this.form.value;
        data.tenders_id = this.existingId || '';
        data.loggedin_id = this.authService.getLoggedInID();
        data.status = data.status || '1';
        this.cmsService.saveTenders(data);
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
CmsTendersPageComponent.ɵfac = function CmsTendersPageComponent_Factory(t) { return new (t || CmsTendersPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cms_service__WEBPACK_IMPORTED_MODULE_1__.CmsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CmsTendersPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CmsTendersPageComponent, selectors: [["ux-cms-tenders-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: {
                    appearance: 'standard'
                }
            }
        ])], decls: 45, vars: 6, consts: [[1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between", "px-gutter"], [1, "title", "mt-0", "mb-1", 2, "display", "block", "font-size", "30px", "font-weight", "600"], [3, "crumbs"], [1, "px-gutter", "-mt-6"], [1, "card", "-mt-16", "p-6"], [3, "formGroup", "ngSubmit"], [1, "font-semibold", "text-lg", "mb-2"], [1, "w-full"], ["formControlName", "page_title", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:title", 1, "mr-3"], ["formControlName", "page_description", "matInput", "", "rows", "3"], [1, "my-4"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex-auto"], ["formControlName", "status"], ["value", "1"], ["value", "0"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-semibold", "text-lg", "m-0"], ["color", "primary", "mat-stroked-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:add", 1, "mr-1"], ["formArrayName", "tenders"], ["class", "border-2 rounded p-4 mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["color", "primary", "mat-flat-button", "", "type", "submit"], ["svgIcon", "mat:save", 1, "mr-2"], [1, "border-2", "rounded", "p-4", "mb-4", 3, "formGroupName"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "text-lg"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove Tender", 3, "click"], ["svgIcon", "mat:delete"], ["formControlName", "name", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:description", 1, "mr-3"], [1, "flex", "gap-4"], ["formControlName", "date", "matInput", "", "placeholder", "06-02-2026"], ["matPrefix", "", "svgIcon", "mat:calendar_today", 1, "mr-3"], ["formControlName", "sort_order", "matInput", "", "type", "number"], ["matPrefix", "", "svgIcon", "mat:sort", 1, "mr-3"], ["formControlName", "document_url", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:insert_drive_file", 1, "mr-3"], ["formControlName", "view_url", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:visibility", 1, "mr-3"], ["formControlName", "download_url", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:download", 1, "mr-3"]], template: function CmsTendersPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Tenders");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ux-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ux-page-layout-content", 4)(8, "div", 5)(9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CmsTendersPageComponent_Template_form_ngSubmit_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Page Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 8)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Page Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 9)(16, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-form-field", 8)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Page Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "mat-divider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 13)(23, "mat-form-field", 14)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-select", 15)(27, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-divider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 18)(33, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Tender Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsTendersPageComponent_Template_button_click_35_listener() { return ctx.addTender(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, " Add Tender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, CmsTendersPageComponent_div_39_Template, 37, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "mat-divider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 24)(42, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.tenders.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.existingId ? "Update" : "Save", " Tenders ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__.PageLayoutComponent, _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutHeaderDirective, _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutContentDirective, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbXMtdGVuZGVycy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [_ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms] } });


/***/ }),

/***/ 75167:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/cms/cms-villagemuseums-page/cms-villagemuseums-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsVillageMuseumsPageComponent": () => (/* binding */ CmsVillageMuseumsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ux/animations/fade-in-up.animation */ 5870);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _cms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cms.service */ 48385);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.component */ 96197);
/* harmony import */ var _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-header.directive */ 7755);
/* harmony import */ var _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout-content.directive */ 89354);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);




















function CmsVillageMuseumsPageComponent_div_43_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43)(1, "div", 19)(2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsVillageMuseumsPageComponent_div_43_div_28_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const j_r5 = restoredCtx.index; const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.removeActivity(i_r2, j_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 47)(7, "mat-form-field", 15)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Activity Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-form-field", 15)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Activity Image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const j_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", j_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Activity ", j_r5 + 1, "");
} }
function CmsVillageMuseumsPageComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsVillageMuseumsPageComponent_div_43_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const i_r2 = restoredCtx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.removeLocation(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field", 8)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Location Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 33)(10, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-form-field", 8)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Location Image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "input", 35)(15, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field", 8)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Location Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "mat-divider", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 19)(22, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsVillageMuseumsPageComponent_div_43_Template_button_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const i_r2 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.addActivity(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " Add Activity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, CmsVillageMuseumsPageComponent_div_43_div_28_Template, 15, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const location_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Location ", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Activities at ", location_r1.value.name || "this location", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.getActivities(i_r2).controls);
} }
const _c0 = function () { return ["CMS", "Village Museums"]; };
class CmsVillageMuseumsPageComponent {
    constructor(fb, cmsService, authService) {
        this.fb = fb;
        this.cmsService = cmsService;
        this.authService = authService;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('fullwidth');
        this.existingId = '';
    }
    ngOnInit() {
        this.buildForm();
        this.subscription = this.cmsService.villagemuseums_listChanged
            .subscribe((list) => {
            if (list && list.length > 0) {
                this.populateForm(list[0]);
            }
        });
        const list = this.cmsService.getVillageMuseumsList();
        if (list && list.length > 0) {
            this.populateForm(list[0]);
        }
    }
    buildForm() {
        this.form = this.fb.group({
            title: '',
            description1: '',
            description2: '',
            status: '1',
            locations: this.fb.array([])
        });
    }
    populateForm(data) {
        this.existingId = data._id || '';
        this.form.patchValue({
            title: data.title || '',
            description1: data.description1 || '',
            description2: data.description2 || '',
            status: data.status || '1'
        });
        this.locations.clear();
        (data.locations || []).forEach((location) => this.addLocation(location));
    }
    get locations() {
        return this.form.get('locations');
    }
    addLocation(location) {
        const locationGroup = this.fb.group({
            name: location?.name || '',
            image: location?.image || '',
            description: location?.description || '',
            activities: this.fb.array([])
        });
        if (location?.activities) {
            const activitiesArray = locationGroup.get('activities');
            location.activities.forEach((activity) => {
                activitiesArray.push(this.fb.group({
                    name: activity.name || '',
                    image: activity.image || ''
                }));
            });
        }
        this.locations.push(locationGroup);
    }
    removeLocation(index) {
        this.locations.removeAt(index);
    }
    getActivities(locationIndex) {
        return this.locations.at(locationIndex).get('activities');
    }
    addActivity(locationIndex) {
        const activities = this.getActivities(locationIndex);
        activities.push(this.fb.group({
            name: '',
            image: ''
        }));
    }
    removeActivity(locationIndex, activityIndex) {
        const activities = this.getActivities(locationIndex);
        activities.removeAt(activityIndex);
    }
    save() {
        const data = this.form.value;
        data.villagemuseums_id = this.existingId || '';
        data.loggedin_id = this.authService.getLoggedInID();
        data.status = data.status || '1';
        this.cmsService.saveVillageMuseums(data);
    }
}
CmsVillageMuseumsPageComponent.ɵfac = function CmsVillageMuseumsPageComponent_Factory(t) { return new (t || CmsVillageMuseumsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cms_service__WEBPACK_IMPORTED_MODULE_1__.CmsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CmsVillageMuseumsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CmsVillageMuseumsPageComponent, selectors: [["ux-cms-villagemuseums-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: {
                    appearance: 'standard'
                }
            }
        ])], decls: 49, vars: 14, consts: [[1, "pb-10", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1", 2, "display", "block", "font-size", "30px", "font-weight", "600"], [3, "crumbs"], [1, "-mt-6"], [1, "card", "-mt-16", "p-6"], [3, "formGroup", "ngSubmit"], [1, "font-semibold", "text-lg", "mb-2"], [1, "w-full"], ["formControlName", "title", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:title", 1, "mr-3"], ["formControlName", "description1", "matInput", "", "rows", "4"], ["formControlName", "description2", "matInput", "", "rows", "4"], [1, "my-4"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex-auto"], ["formControlName", "status"], ["value", "1"], ["value", "0"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-semibold", "text-lg", "m-0"], ["color", "primary", "mat-stroked-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:add", 1, "mr-1"], ["formArrayName", "locations"], ["class", "border-2 rounded p-4 mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end"], ["color", "primary", "mat-flat-button", "", "type", "submit"], ["svgIcon", "mat:save", 1, "mr-2"], [1, "border-2", "rounded", "p-4", "mb-4", 3, "formGroupName"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "text-lg"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove Location", 3, "click"], ["svgIcon", "mat:delete"], ["formControlName", "name", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:location_on", 1, "mr-3"], ["formControlName", "image", "matInput", ""], ["matPrefix", "", "svgIcon", "mat:image", 1, "mr-3"], ["formControlName", "description", "matInput", "", "rows", "3"], [1, "my-3"], [1, "font-semibold", "m-0"], ["color", "accent", "mat-stroked-button", "", "type", "button", 3, "click"], ["formArrayName", "activities"], ["class", "border rounded p-3 mb-2 bg-gray-50", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "border", "rounded", "p-3", "mb-2", "bg-gray-50", 3, "formGroupName"], [1, "font-medium", "text-sm"], ["color", "warn", "mat-icon-button", "", "type", "button", "matTooltip", "Remove Activity", 3, "click"], ["svgIcon", "mat:close"], [1, "flex", "flex-col", "sm:flex-row", "gap-2"]], template: function CmsVillageMuseumsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ux-page-layout")(1, "ux-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Village Museums");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ux-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ux-page-layout-content", 4)(8, "div", 5)(9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CmsVillageMuseumsPageComponent_Template_form_ngSubmit_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Page Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 8)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Page Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 9)(16, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-form-field", 8)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Description 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-form-field", 8)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Description 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "mat-divider", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 14)(27, "mat-form-field", 15)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-select", 16)(31, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "In-Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "mat-divider", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 19)(37, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Museum Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CmsVillageMuseumsPageComponent_Template_button_click_39_listener() { return ctx.addLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " Add Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, CmsVillageMuseumsPageComponent_div_43_Template, 29, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "mat-divider", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 25)(46, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.locations.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.existingId ? "Update" : "Save", " Village Museums ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ux_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_3__.PageLayoutComponent, _ux_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutHeaderDirective, _ux_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutContentDirective, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbXMtdmlsbGFnZW11c2V1bXMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [_ux_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms] } });


/***/ }),

/***/ 57324:
/*!*****************************************!*\
  !*** ./src/app/pages/cms/cms.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsModule": () => (/* binding */ CmsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _cms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cms-routing.module */ 37530);
/* harmony import */ var _cms_page_cms_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cms-page/cms-page.component */ 34633);
/* harmony import */ var _cms_handicrafts_page_cms_handicrafts_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cms-handicrafts-page/cms-handicrafts-page.component */ 69347);
/* harmony import */ var _cms_handlooms_page_cms_handlooms_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cms-handlooms-page/cms-handlooms-page.component */ 98194);
/* harmony import */ var _cms_folkarts_page_cms_folkarts_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cms-folkarts-page/cms-folkarts-page.component */ 23416);
/* harmony import */ var _cms_culturalevents_page_cms_culturalevents_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cms-culturalevents-page/cms-culturalevents-page.component */ 40171);
/* harmony import */ var _cms_villagemuseums_page_cms_villagemuseums_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cms-villagemuseums-page/cms-villagemuseums-page.component */ 75167);
/* harmony import */ var _cms_exhibitions_page_cms_exhibitions_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cms-exhibitions-page/cms-exhibitions-page.component */ 17410);
/* harmony import */ var _cms_tenders_page_cms_tenders_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cms-tenders-page/cms-tenders-page.component */ 59207);
/* harmony import */ var _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ux/components/page-layout/page-layout.module */ 43492);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ux/components/breadcrumbs/breadcrumbs.module */ 39784);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);




















class CmsModule {
}
CmsModule.ɵfac = function CmsModule_Factory(t) { return new (t || CmsModule)(); };
CmsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: CmsModule });
CmsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _cms_routing_module__WEBPACK_IMPORTED_MODULE_0__.CmsRoutingModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__.PageLayoutModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__.BreadcrumbsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CmsModule, { declarations: [_cms_page_cms_page_component__WEBPACK_IMPORTED_MODULE_1__.CmsPageComponent, _cms_handicrafts_page_cms_handicrafts_page_component__WEBPACK_IMPORTED_MODULE_2__.CmsHandicraftsPageComponent, _cms_handlooms_page_cms_handlooms_page_component__WEBPACK_IMPORTED_MODULE_3__.CmsHandloomsPageComponent, _cms_folkarts_page_cms_folkarts_page_component__WEBPACK_IMPORTED_MODULE_4__.CmsFolkArtsPageComponent, _cms_culturalevents_page_cms_culturalevents_page_component__WEBPACK_IMPORTED_MODULE_5__.CmsCulturalEventsPageComponent, _cms_villagemuseums_page_cms_villagemuseums_page_component__WEBPACK_IMPORTED_MODULE_6__.CmsVillageMuseumsPageComponent, _cms_exhibitions_page_cms_exhibitions_page_component__WEBPACK_IMPORTED_MODULE_7__.CmsExhibitionsPageComponent, _cms_tenders_page_cms_tenders_page_component__WEBPACK_IMPORTED_MODULE_8__.CmsTendersPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _cms_routing_module__WEBPACK_IMPORTED_MODULE_0__.CmsRoutingModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__.PageLayoutModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__.BreadcrumbsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule] }); })();


/***/ }),

/***/ 48385:
/*!******************************************!*\
  !*** ./src/app/pages/cms/cms.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmsService": () => (/* binding */ CmsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);







class CmsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // About Us
        this.aboutus_list = [];
        this.aboutus_listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // ==================== HANDICRAFTS ====================
        this.handicrafts_list = [];
        this.handicrafts_listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // ==================== HANDLOOMS ====================
        this.handlooms_list = [];
        this.handlooms_listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // ==================== FOLKARTS ====================
        this.folkarts_list = [];
        this.folkarts_listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // ==================== CULTURAL EVENTS ====================
        this.culturalevents_list = [];
        this.culturalevents_listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // ==================== VILLAGE MUSEUMS ====================
        this.villagemuseums_list = [];
        this.villagemuseums_listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // ==================== EXHIBITIONS ====================
        this.exhibitions_list = [];
        this.exhibitions_listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // ==================== TENDERS ====================
        this.tenders_list = [];
        this.tenders_listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    // ==================== ABOUT US ====================
    getAllAboutUs() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/aboutus/getall/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.aboutus_list || [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((list) => {
            this.setAboutUsList(list);
        }));
    }
    setAboutUsList(list) {
        this.aboutus_list = list;
        this.aboutus_listChanged.next(this.aboutus_list.slice());
    }
    getAboutUsList() {
        return this.aboutus_list.slice();
    }
    saveAboutUs(data) {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/aboutus/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                this.aboutus_list.unshift(response.aboutus);
                this.aboutus_listChanged.next(this.aboutus_list.slice());
            }
            else if (response.messagecode === 101) {
                let objIdx = this.aboutus_list.findIndex(x => x._id === response.aboutus._id);
                if (objIdx != -1) {
                    this.aboutus_list[objIdx] = response.aboutus;
                    this.aboutus_listChanged.next(this.aboutus_list.slice());
                }
            }
        });
    }
    deleteAboutUs(id) {
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/aboutus/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                let objIdx = this.aboutus_list.findIndex(x => x._id === id);
                if (objIdx != -1) {
                    this.aboutus_list.splice(objIdx, 1);
                    this.aboutus_listChanged.next(this.aboutus_list.slice());
                }
            }
        });
    }
    getAllHandicrafts() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/handicrafts/getall/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.handicrafts_list || [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((list) => {
            this.setHandicraftsList(list);
        }));
    }
    setHandicraftsList(list) {
        this.handicrafts_list = list;
        this.handicrafts_listChanged.next(this.handicrafts_list.slice());
    }
    getHandicraftsList() {
        return this.handicrafts_list.slice();
    }
    saveHandicrafts(data) {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/handicrafts/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                this.handicrafts_list.unshift(response.handicrafts);
                this.handicrafts_listChanged.next(this.handicrafts_list.slice());
            }
            else if (response.messagecode === 101) {
                let objIdx = this.handicrafts_list.findIndex(x => x._id === response.handicrafts._id);
                if (objIdx != -1) {
                    this.handicrafts_list[objIdx] = response.handicrafts;
                    this.handicrafts_listChanged.next(this.handicrafts_list.slice());
                }
            }
        });
    }
    deleteHandicrafts(id) {
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/handicrafts/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                let objIdx = this.handicrafts_list.findIndex(x => x._id === id);
                if (objIdx != -1) {
                    this.handicrafts_list.splice(objIdx, 1);
                    this.handicrafts_listChanged.next(this.handicrafts_list.slice());
                }
            }
        });
    }
    getAllHandlooms() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/handlooms/getall/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.handlooms_list || [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((list) => {
            this.setHandloomsList(list);
        }));
    }
    setHandloomsList(list) {
        this.handlooms_list = list;
        this.handlooms_listChanged.next(this.handlooms_list.slice());
    }
    getHandloomsList() {
        return this.handlooms_list.slice();
    }
    saveHandlooms(data) {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/handlooms/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                this.handlooms_list.unshift(response.handlooms);
                this.handlooms_listChanged.next(this.handlooms_list.slice());
            }
            else if (response.messagecode === 101) {
                let objIdx = this.handlooms_list.findIndex(x => x._id === response.handlooms._id);
                if (objIdx != -1) {
                    this.handlooms_list[objIdx] = response.handlooms;
                    this.handlooms_listChanged.next(this.handlooms_list.slice());
                }
            }
        });
    }
    deleteHandlooms(id) {
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/handlooms/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                let objIdx = this.handlooms_list.findIndex(x => x._id === id);
                if (objIdx != -1) {
                    this.handlooms_list.splice(objIdx, 1);
                    this.handlooms_listChanged.next(this.handlooms_list.slice());
                }
            }
        });
    }
    getAllFolkArts() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/folkarts/getall/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.folkarts_list || [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((list) => {
            this.setFolkArtsList(list);
        }));
    }
    setFolkArtsList(list) {
        this.folkarts_list = list;
        this.folkarts_listChanged.next(this.folkarts_list.slice());
    }
    getFolkArtsList() {
        return this.folkarts_list.slice();
    }
    saveFolkArts(data) {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/folkarts/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                this.folkarts_list.unshift(response.folkarts);
                this.folkarts_listChanged.next(this.folkarts_list.slice());
            }
            else if (response.messagecode === 101) {
                let objIdx = this.folkarts_list.findIndex(x => x._id === response.folkarts._id);
                if (objIdx != -1) {
                    this.folkarts_list[objIdx] = response.folkarts;
                    this.folkarts_listChanged.next(this.folkarts_list.slice());
                }
            }
        });
    }
    deleteFolkArts(id) {
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/folkarts/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                let objIdx = this.folkarts_list.findIndex(x => x._id === id);
                if (objIdx != -1) {
                    this.folkarts_list.splice(objIdx, 1);
                    this.folkarts_listChanged.next(this.folkarts_list.slice());
                }
            }
        });
    }
    getAllCulturalEvents() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/culturalevents/getall/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.culturalevents_list || [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((list) => {
            this.setCulturalEventsList(list);
        }));
    }
    setCulturalEventsList(list) {
        this.culturalevents_list = list;
        this.culturalevents_listChanged.next(this.culturalevents_list.slice());
    }
    getCulturalEventsList() {
        return this.culturalevents_list.slice();
    }
    saveCulturalEvents(data) {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/culturalevents/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                this.culturalevents_list.unshift(response.culturalevents);
                this.culturalevents_listChanged.next(this.culturalevents_list.slice());
            }
            else if (response.messagecode === 101) {
                let objIdx = this.culturalevents_list.findIndex(x => x._id === response.culturalevents._id);
                if (objIdx != -1) {
                    this.culturalevents_list[objIdx] = response.culturalevents;
                    this.culturalevents_listChanged.next(this.culturalevents_list.slice());
                }
            }
        });
    }
    deleteCulturalEvents(id) {
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/culturalevents/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                let objIdx = this.culturalevents_list.findIndex(x => x._id === id);
                if (objIdx != -1) {
                    this.culturalevents_list.splice(objIdx, 1);
                    this.culturalevents_listChanged.next(this.culturalevents_list.slice());
                }
            }
        });
    }
    getAllVillageMuseums() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/villagemuseums/getall/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.villagemuseums_list || [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((list) => {
            this.setVillageMuseumsList(list);
        }));
    }
    setVillageMuseumsList(list) {
        this.villagemuseums_list = list;
        this.villagemuseums_listChanged.next(this.villagemuseums_list.slice());
    }
    getVillageMuseumsList() {
        return this.villagemuseums_list.slice();
    }
    saveVillageMuseums(data) {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/villagemuseums/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                this.villagemuseums_list.unshift(response.villagemuseums);
                this.villagemuseums_listChanged.next(this.villagemuseums_list.slice());
            }
            else if (response.messagecode === 101) {
                let objIdx = this.villagemuseums_list.findIndex(x => x._id === response.villagemuseums._id);
                if (objIdx != -1) {
                    this.villagemuseums_list[objIdx] = response.villagemuseums;
                    this.villagemuseums_listChanged.next(this.villagemuseums_list.slice());
                }
            }
        });
    }
    deleteVillageMuseums(id) {
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/villagemuseums/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                let objIdx = this.villagemuseums_list.findIndex(x => x._id === id);
                if (objIdx != -1) {
                    this.villagemuseums_list.splice(objIdx, 1);
                    this.villagemuseums_listChanged.next(this.villagemuseums_list.slice());
                }
            }
        });
    }
    getAllExhibitions() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/exhibitions/getall/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.exhibitions_list || [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((list) => {
            this.setExhibitionsList(list);
        }));
    }
    setExhibitionsList(list) {
        this.exhibitions_list = list;
        this.exhibitions_listChanged.next(this.exhibitions_list.slice());
    }
    getExhibitionsList() {
        return this.exhibitions_list.slice();
    }
    saveExhibitions(data) {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/exhibitions/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                this.exhibitions_list.unshift(response.exhibitions);
                this.exhibitions_listChanged.next(this.exhibitions_list.slice());
            }
            else if (response.messagecode === 101) {
                let objIdx = this.exhibitions_list.findIndex(x => x._id === response.exhibitions._id);
                if (objIdx != -1) {
                    this.exhibitions_list[objIdx] = response.exhibitions;
                    this.exhibitions_listChanged.next(this.exhibitions_list.slice());
                }
            }
        });
    }
    deleteExhibitions(id) {
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/exhibitions/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                let objIdx = this.exhibitions_list.findIndex(x => x._id === id);
                if (objIdx != -1) {
                    this.exhibitions_list.splice(objIdx, 1);
                    this.exhibitions_listChanged.next(this.exhibitions_list.slice());
                }
            }
        });
    }
    getAllTenders() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/tenders/getall/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.tenders_list || [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((list) => {
            this.setTendersList(list);
        }));
    }
    setTendersList(list) {
        this.tenders_list = list;
        this.tenders_listChanged.next(this.tenders_list.slice());
    }
    getTendersList() {
        return this.tenders_list.slice();
    }
    saveTenders(data) {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/tenders/', data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                this.tenders_list.unshift(response.tenders);
                this.tenders_listChanged.next(this.tenders_list.slice());
            }
            else if (response.messagecode === 101) {
                let objIdx = this.tenders_list.findIndex(x => x._id === response.tenders._id);
                if (objIdx != -1) {
                    this.tenders_list[objIdx] = response.tenders;
                    this.tenders_listChanged.next(this.tenders_list.slice());
                }
            }
        });
    }
    deleteTenders(id) {
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.baseUrl + '/api/cms/tenders/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        })
            .subscribe((response) => {
            if (response.messagecode === 100) {
                let objIdx = this.tenders_list.findIndex(x => x._id === id);
                if (objIdx != -1) {
                    this.tenders_list.splice(objIdx, 1);
                    this.tenders_listChanged.next(this.tenders_list.slice());
                }
            }
        });
    }
}
CmsService.ɵfac = function CmsService_Factory(t) { return new (t || CmsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
CmsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CmsService, factory: CmsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5870:
/*!***************************************************!*\
  !*** ./src/ux/animations/fade-in-up.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInUp400ms": () => (/* binding */ fadeInUp400ms),
/* harmony export */   "fadeInUpAnimation": () => (/* binding */ fadeInUpAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);

function fadeInUpAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInUp', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ 89354:
/*!************************************************************************!*\
  !*** ./src/ux/components/page-layout/page-layout-content.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutContentDirective": () => (/* binding */ PageLayoutContentDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class PageLayoutContentDirective {
    constructor() { }
}
PageLayoutContentDirective.ɵfac = function PageLayoutContentDirective_Factory(t) { return new (t || PageLayoutContentDirective)(); };
PageLayoutContentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PageLayoutContentDirective, selectors: [["", "uxPageLayoutContent", ""], ["ux-page-layout-content"]], hostAttrs: [1, "ux-page-layout-content"] });


/***/ }),

/***/ 7755:
/*!***********************************************************************!*\
  !*** ./src/ux/components/page-layout/page-layout-header.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutHeaderDirective": () => (/* binding */ PageLayoutHeaderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class PageLayoutHeaderDirective {
    constructor() { }
}
PageLayoutHeaderDirective.ɵfac = function PageLayoutHeaderDirective_Factory(t) { return new (t || PageLayoutHeaderDirective)(); };
PageLayoutHeaderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PageLayoutHeaderDirective, selectors: [["", "uxPageLayoutHeader", ""], ["ux-page-layout-header"]], hostAttrs: [1, "ux-page-layout-header"] });


/***/ }),

/***/ 96197:
/*!****************************************************************!*\
  !*** ./src/ux/components/page-layout/page-layout.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutComponent": () => (/* binding */ PageLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

const _c0 = ["*"];
class PageLayoutComponent {
    constructor() {
        this.mode = 'simple';
    }
    get isCard() {
        return this.mode === 'card';
    }
    get isSimple() {
        return this.mode === 'simple';
    }
}
PageLayoutComponent.ɵfac = function PageLayoutComponent_Factory(t) { return new (t || PageLayoutComponent)(); };
PageLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLayoutComponent, selectors: [["ux-page-layout"]], hostAttrs: [1, "ux-page-layout"], hostVars: 4, hostBindings: function PageLayoutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ux-page-layout-card", ctx.isCard)("ux-page-layout-simple", ctx.isSimple);
    } }, inputs: { mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function PageLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [".ux-page-layout {\n  display: block;\n}\n\n.ux-page-layout-simple .ux-page-layout-content {\n  padding-bottom: var(--padding-gutter);\n  padding-top: var(--padding-gutter);\n}\n\n.ux-page-layout-card {\n  padding-bottom: var(--padding);\n}\n\n.ux-page-layout-card .ux-page-layout-header {\n  margin-bottom: calc(var(--page-layout-toolbar-height) * -1);\n  padding-bottom: var(--page-layout-toolbar-height);\n}\n\n.ux-page-layout-card .ux-page-layout-content > * > .mat-tab-group .mat-tab-label,\n.ux-page-layout-card .ux-page-layout-content > .mat-tab-group .mat-tab-label {\n  height: var(--page-layout-toolbar-height);\n}\n\n.ux-page-layout-card .ux-page-layout-content > * > .mat-tab-group .mat-tab-label.mat-tab-label-active,\n.ux-page-layout-card .ux-page-layout-content > .mat-tab-group .mat-tab-label.mat-tab-label-active {\n  opacity: 1;\n}\n\n.ux-page-layout-header {\n  align-items: center;\n  background-color: rgba(var(--color-primary), 0.1);\n  box-sizing: content-box !important;\n  display: flex;\n  flex-direction: row;\n  height: calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  place-content: center flex-start;\n}\n\n.ux-page-layout-content {\n  box-sizing: border-box;\n  display: block;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUlFO0VBQ0UscUNBQUE7RUFDQSxrQ0FBQTtBQURKOztBQUtBO0VBQ0UsOEJBQUE7QUFGRjs7QUFJRTtFQUNFLDJEQUFBO0VBQ0EsaURBQUE7QUFGSjs7QUFNSTs7RUFFRSx5Q0FBQTtBQUpOOztBQU1NOztFQUNFLFVBQUE7QUFIUjs7QUFTQTtFQUNFLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtGQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBTkY7O0FBU0E7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0FBTkYiLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXgtcGFnZS1sYXlvdXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnV4LXBhZ2UtbGF5b3V0LXNpbXBsZSB7XG5cbiAgLnV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gICAgcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbiAgfVxufVxuXG4udXgtcGFnZS1sYXlvdXQtY2FyZCB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcblxuICAudXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KSAqIC0xKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xuICB9XG5cbiAgLnV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICAgID4gKiA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLFxuICAgID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG5cbiAgICAgICYubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQGFwcGx5IGJnLXByaW1hcnkvMTA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1wYWdlLWxheW91dC1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KSk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZyk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmcpO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcbn1cblxuLnV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 43492:
/*!*************************************************************!*\
  !*** ./src/ux/components/page-layout/page-layout.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutModule": () => (/* binding */ PageLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout.component */ 96197);
/* harmony import */ var _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout-header.directive */ 7755);
/* harmony import */ var _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layout-content.directive */ 89354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class PageLayoutModule {
}
PageLayoutModule.ɵfac = function PageLayoutModule_Factory(t) { return new (t || PageLayoutModule)(); };
PageLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PageLayoutModule });
PageLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PageLayoutModule, { declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutComponent, _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutHeaderDirective, _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__.PageLayoutContentDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutComponent, _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutHeaderDirective, _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__.PageLayoutContentDirective] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_cms_cms_module_ts.js.map