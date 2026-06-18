"use strict";
(self["webpackChunkux"] = self["webpackChunkux"] || []).push([["src_app_pages_reports_activitywisereport_activitywisereport_module_ts"],{

/***/ 39563:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/reports/activitywisereport/activitywisereport-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitywisereportRoutingModule": () => (/* binding */ ActivitywisereportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _activitywisereport_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activitywisereport.component */ 2902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _activitywisereport_component__WEBPACK_IMPORTED_MODULE_0__.ActivitywisereportComponent
    }
];
class ActivitywisereportRoutingModule {
}
ActivitywisereportRoutingModule.ɵfac = function ActivitywisereportRoutingModule_Factory(t) { return new (t || ActivitywisereportRoutingModule)(); };
ActivitywisereportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ActivitywisereportRoutingModule });
ActivitywisereportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ActivitywisereportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 2902:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/reports/activitywisereport/activitywisereport.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitywisereportComponent": () => (/* binding */ ActivitywisereportComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _activitywisereport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activitywisereport.service */ 66527);
/* harmony import */ var _setup_unitmaster_unitmaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../setup/unitmaster/unitmaster.service */ 80514);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ux_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/secondary-toolbar/secondary-toolbar.component */ 86155);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);

















function ActivitywisereportComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const obj_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", obj_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", obj_r5.unit_name, " ");
  }
}

function ActivitywisereportComponent_mat_card_26_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r7.activity_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r7.orders == null ? null : row_r7.orders.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u20B9", row_r7.total, "");
  }
}

function ActivitywisereportComponent_mat_card_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 2)(1, "div", 14)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "TOTAL ACTIVITIES: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "table", 15)(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Activity Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Total Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ActivitywisereportComponent_mat_card_26_tr_16_Template, 9, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tr", 17)(18, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "GRAND TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.report_data.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.report_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.grand_orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u20B9", ctx_r3.grand_total, "");
  }
}

function ActivitywisereportComponent_mat_card_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 2)(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No records found for the selected date range.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

const _c0 = function () {
  return ["Reports", "Activity Wise Report"];
};

class ActivitywisereportComponent {
  constructor(activitywisereportService, unitService, _snackBar) {
    this.activitywisereportService = activitywisereportService;
    this.unitService = unitService;
    this._snackBar = _snackBar;
    this.from_date = '';
    this.to_date = '';
    this.unit_id = '';
    this.report_data = [];
    this.grand_total = 0;
    this.grand_orders = 0;
    this.searched = false;
    this.units_list = [];
  }

  ngOnInit() {
    this.unitService.getAllUnitmaster().subscribe();
    this.unit_subscription = this.unitService.unitmasterChanged.subscribe(units => {
      this.units_list = units;
    });
  }

  onSearchClick() {
    var _this = this;

    return (0,_Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.from_date && _this.to_date) {
        _this.report_data = [];
        _this.grand_total = 0;
        _this.grand_orders = 0;
        _this.searched = true;

        try {
          const res = yield _this.activitywisereportService.getActivityWiseReport({
            from_date: _this.from_date,
            to_date: _this.to_date,
            unit_id: _this.unit_id || undefined
          });

          if (res.messagecode === 100) {
            _this.report_data = res.grouped_by_activity;

            _this.report_data.forEach(row => {
              _this.grand_total += Number(row.total || 0);
              _this.grand_orders += Number(row.orders?.length || 0);
            });
          }
        } catch (err) {
          _this._snackBar.open('Failed to fetch report', 'Error', {
            duration: 3000
          });
        }
      } else {
        _this._snackBar.open('Select From Date and To Date', 'Information', {
          duration: 3000
        });
      }
    })();
  }

  ngOnDestroy() {
    this.unit_subscription?.unsubscribe();
  }

}

ActivitywisereportComponent.ɵfac = function ActivitywisereportComponent_Factory(t) {
  return new (t || ActivitywisereportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_activitywisereport_service__WEBPACK_IMPORTED_MODULE_1__.ActivitywisereportService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_setup_unitmaster_unitmaster_service__WEBPACK_IMPORTED_MODULE_2__.UnitmasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
};

ActivitywisereportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ActivitywisereportComponent,
  selectors: [["ux-activitywisereport"]],
  decls: 28,
  vars: 12,
  consts: [["current", "Reports"], [1, "flex-auto", 3, "crumbs"], [1, "w3-margin"], ["appearance", "standard", 2, "margin-bottom", "-1.3em", "padding", "0", "margin-right", "10px"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["from_picker", ""], ["to_picker", ""], ["mat-stroked-button", "", 1, "w3-black", 3, "click"], ["class", "w3-margin", 4, "ngIf"], [3, "value"], [1, "w3-margin-bottom"], [1, "w3-table-all", "w3-small"], [4, "ngFor", "ngForOf"], [2, "font-weight", "bold", "background", "#f5f5f5"], ["colspan", "2"], [2, "text-align", "center", "color", "#888"]],
  template: function ActivitywisereportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ux-secondary-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ux-breadcrumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card", 2)(3, "mat-form-field", 3)(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Select Unit");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ActivitywisereportComponent_Template_mat_select_ngModelChange_6_listener($event) {
        return ctx.unit_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "All Units");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ActivitywisereportComponent_mat_option_9_Template, 2, 2, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 3)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "From Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ActivitywisereportComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.from_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "mat-datepicker-toggle", 8)(15, "mat-datepicker", null, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field", 3)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "To Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ActivitywisereportComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.to_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "mat-datepicker-toggle", 8)(22, "mat-datepicker", null, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ActivitywisereportComponent_Template_button_click_24_listener() {
        return ctx.onSearchClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "SEARCH");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ActivitywisereportComponent_mat_card_26_Template, 24, 4, "mat-card", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ActivitywisereportComponent_mat_card_27_Template, 3, 0, "mat-card", 12);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.unit_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.units_list);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.from_date);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r2)("ngModel", ctx.to_date);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.report_data.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.report_data.length === 0 && ctx.searched);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _ux_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarComponent, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpdml0eXdpc2VyZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 52810:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/reports/activitywisereport/activitywisereport.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitywisereportModule": () => (/* binding */ ActivitywisereportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _activitywisereport_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activitywisereport-routing.module */ 39563);
/* harmony import */ var _activitywisereport_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activitywisereport.component */ 2902);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ux_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ux/components/secondary-toolbar/secondary-toolbar.module */ 73271);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.module */ 39784);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
















class ActivitywisereportModule {
}
ActivitywisereportModule.ɵfac = function ActivitywisereportModule_Factory(t) { return new (t || ActivitywisereportModule)(); };
ActivitywisereportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ActivitywisereportModule });
ActivitywisereportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _activitywisereport_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivitywisereportRoutingModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _ux_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ActivitywisereportModule, { declarations: [_activitywisereport_component__WEBPACK_IMPORTED_MODULE_1__.ActivitywisereportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _activitywisereport_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivitywisereportRoutingModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _ux_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_2__.SecondaryToolbarModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule] }); })();


/***/ }),

/***/ 66527:
/*!********************************************************************************!*\
  !*** ./src/app/pages/reports/activitywisereport/activitywisereport.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitywisereportService": () => (/* binding */ ActivitywisereportService)
/* harmony export */ });
/* harmony import */ var _Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class ActivitywisereportService {
  constructor(http) {
    this.http = http;
  }

  getActivityWiseReport(reportData) {
    var _this = this;

    return (0,_Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        _this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.baseUrl + '/api/postransactions/getordersbetweendatesbyactivity', JSON.stringify(reportData), {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/json')
        }).subscribe(res => resolve(res), err => reject(err));
      });
    })();
  }

}

ActivitywisereportService.ɵfac = function ActivitywisereportService_Factory(t) {
  return new (t || ActivitywisereportService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

ActivitywisereportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ActivitywisereportService,
  factory: ActivitywisereportService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 86155:
/*!****************************************************************************!*\
  !*** ./src/ux/components/secondary-toolbar/secondary-toolbar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryToolbarComponent": () => (/* binding */ SecondaryToolbarComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config.service */ 74471);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);





function SecondaryToolbarComponent_h1_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.current);
  }
}

const _c0 = function (a0, a1) {
  return {
    "fixed": a0,
    "w-full": a1
  };
};

const _c1 = ["*"];
class SecondaryToolbarComponent {
  constructor(configService) {
    this.configService = configService;
    this.fixed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(config => config.toolbar.fixed));
    this.isVerticalLayout$ = this.configService.select(config => config.layout).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(layout => layout === 'vertical'));
  }

}

SecondaryToolbarComponent.ɵfac = function SecondaryToolbarComponent_Factory(t) {
  return new (t || SecondaryToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService));
};

SecondaryToolbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SecondaryToolbarComponent,
  selectors: [["ux-secondary-toolbar"]],
  inputs: {
    current: "current",
    crumbs: "crumbs"
  },
  ngContentSelectors: _c1,
  decls: 9,
  vars: 13,
  consts: [[1, "secondary-toolbar-placeholder"], [1, "secondary-toolbar", "shadow-b", "py-1", "z-40", "border-t", "flex", 3, "ngClass"], [1, "px-gutter", "flex", "items-center", "flex-auto"], ["class", "subheading-2 font-medium m-0 ltr:pr-3 rtl:pl-3 ltr:border-r rtl:border-l ltr:mr-3 rtl:ml-3 flex-none", 4, "ngIf"], [1, "subheading-2", "font-medium", "m-0", "ltr:pr-3", "rtl:pl-3", "ltr:border-r", "rtl:border-l", "ltr:mr-3", "rtl:ml-3", "flex-none"]],
  template: function SecondaryToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SecondaryToolbarComponent_h1_7_Template, 2, 1, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.fixed$), !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, ctx.fixed$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("container", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, ctx.isVerticalLayout$));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: [".secondary-toolbar[_ngcontent-%COMP%] {\n  background: var(--secondary-toolbar-background);\n  height: var(--secondary-toolbar-height);\n  margin-top: calc(var(--secondary-toolbar-height) * -1);\n}\n.secondary-toolbar.fixed[_ngcontent-%COMP%] {\n  width: var(--toolbar-width);\n}\n.secondary-toolbar-placeholder[_ngcontent-%COMP%] {\n  height: var(--secondary-toolbar-height);\n}\n  .is-mobile .fixed {\n  width: 100%;\n}\n  body .fixed {\n  width: calc(100% - var(--sidenav-width));\n}\n  ux-breadcrumbs {\n  display: none;\n}\n@media (min-width: 600px) {\n    ux-breadcrumbs {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHNEQUFBO0FBQ0Y7QUFDRTtFQUNFLDJCQUFBO0FBQ0o7QUFHQTtFQUNFLHVDQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7QUFBRjtBQUdBO0VBQ0Usd0NBQUE7QUFBRjtBQUtJO0VBQUE7QUFBQTtBQUdGO0VBRUk7SUFBQTtFQUFBO0FBRE4iLCJmaWxlIjoic2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vjb25kYXJ5LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS10b29sYmFyLWJhY2tncm91bmQpO1xyXG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcclxuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCkgKiAtMSk7XHJcblxyXG4gICYuZml4ZWQge1xyXG4gICAgd2lkdGg6IHZhcigtLXRvb2xiYXItd2lkdGgpO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY29uZGFyeS10b29sYmFyLXBsYWNlaG9sZGVyIHtcclxuICBoZWlnaHQ6IHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuaXMtbW9iaWxlIC5maXhlZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBib2R5IC5maXhlZCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXNpZGVuYXYtd2lkdGgpKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICB1eC1icmVhZGNydW1icyB7XHJcbiAgICBAYXBwbHkgaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgQHNjcmVlbiBzbSB7XHJcbiAgICB1eC1icmVhZGNydW1icyB7XHJcbiAgICAgIEBhcHBseSBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
});

/***/ }),

/***/ 73271:
/*!*************************************************************************!*\
  !*** ./src/ux/components/secondary-toolbar/secondary-toolbar.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryToolbarModule": () => (/* binding */ SecondaryToolbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secondary-toolbar.component */ 86155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs.module */ 39784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class SecondaryToolbarModule {
}
SecondaryToolbarModule.ɵfac = function SecondaryToolbarModule_Factory(t) { return new (t || SecondaryToolbarModule)(); };
SecondaryToolbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SecondaryToolbarModule });
SecondaryToolbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SecondaryToolbarModule, { declarations: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule], exports: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SecondaryToolbarComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_reports_activitywisereport_activitywisereport_module_ts.js.map