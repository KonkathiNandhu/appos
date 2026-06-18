"use strict";
(self["webpackChunkux"] = self["webpackChunkux"] || []).push([["src_app_pages_reports_ticketsalesreport_ticketsalesreport_module_ts"],{

/***/ 63429:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/reports/ticketsalesreport/ticketsalesreport-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsalesreportRoutingModule": () => (/* binding */ TicketsalesreportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);
/* harmony import */ var _ticketsalesreport_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticketsalesreport.component */ 48240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _ticketsalesreport_component__WEBPACK_IMPORTED_MODULE_0__.TicketsalesreportComponent
    }
];
class TicketsalesreportRoutingModule {
}
TicketsalesreportRoutingModule.ɵfac = function TicketsalesreportRoutingModule_Factory(t) { return new (t || TicketsalesreportRoutingModule)(); };
TicketsalesreportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TicketsalesreportRoutingModule });
TicketsalesreportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TicketsalesreportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 48240:
/*!********************************************************************************!*\
  !*** ./src/app/pages/reports/ticketsalesreport/ticketsalesreport.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsalesreportComponent": () => (/* binding */ TicketsalesreportComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngneat/until-destroy */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ticketsalesreport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticketsalesreport.service */ 36279);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _setup_unitmaster_unitmaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../setup/unitmaster/unitmaster.service */ 80514);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ux_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/secondary-toolbar/secondary-toolbar.component */ 86155);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.component */ 50662);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 59121);




















function TicketsalesreportComponent_mat_option_9_Template(rf, ctx) {
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

function TicketsalesreportComponent_mat_card_26_tr_22_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const order_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((order_r7 == null ? null : order_r7.unit_id == null ? null : order_r7.unit_id.unit_name) || (order_r7 == null ? null : order_r7.unit_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((order_r7 == null ? null : order_r7.activity_id == null ? null : order_r7.activity_id.activity_name) || (order_r7 == null ? null : order_r7.activity_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](order_r7 == null ? null : order_r7.serial_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](order_r7 == null ? null : order_r7.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((order_r7 == null ? null : order_r7.payment_mode) || "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u20B9", order_r7 == null ? null : order_r7.total_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 7, (order_r7 == null ? null : order_r7.system_order_date_time) || (order_r7 == null ? null : order_r7.created_date), "dd/MM/yyyy HH:mm"));
  }
}

function TicketsalesreportComponent_mat_card_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 2)(1, "div", 14)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "TOTAL RECORDS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "table", 15)(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Unit Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Receipt No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, TicketsalesreportComponent_mat_card_26_tr_22_Template, 16, 10, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "tr")(24, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.sales_orders_list.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.sales_orders_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u20B9", ctx_r3.filtered_total, "");
  }
}

function TicketsalesreportComponent_mat_card_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 2)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No records found for the selected date range.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

const _c0 = function () {
  return ["Reports", "Ticket Sales Report"];
};

let TicketsalesreportComponent = class TicketsalesreportComponent {
  constructor(ticketsalesService, _snackBar, unitService, dialog) {
    this.ticketsalesService = ticketsalesService;
    this._snackBar = _snackBar;
    this.unitService = unitService;
    this.dialog = dialog;
    this.from_date = '';
    this.to_date = '';
    this.unit_id = '';
    this.sales_orders_list = [];
    this.units_list = [];
    this.filtered_total = 0;
    this.searched = false;
  }

  ngOnInit() {
    this.unitService.getAllUnitmaster().subscribe();
    this.unit_subscription = this.unitService.unitmasterChanged.subscribe(units => {
      this.units_list = units;
      console.log(this.units_list);
    });
  }

  onUnitChange(event) {
    console.log(event.value);
  }

  onSearchClick() {
    var _this = this;

    return (0,_Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.from_date && _this.to_date) {
        _this.sales_orders_list = [];
        _this.filtered_total = 0;
        _this.searched = true;
        let reportData = {
          fromdate: _this.from_date,
          todate: _this.to_date,
          unit_id: _this.unit_id
        };
        console.log(reportData);

        _this.ticketsalesService.getSalesReport(reportData).then(res => {
          console.log(res);
          _this.sales_orders_list = res.filteredorders || [];

          _this.sales_orders_list.forEach(element => {
            _this.filtered_total += Number(element.total_amount);
          });
        }).catch(err => {});
      } else {
        _this.openSnackBar('Information', 'Select From Date and To Date');
      }
    })();
  }

  openSnackBar(title, message) {
    this._snackBar.open(message, title, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

};

TicketsalesreportComponent.ɵfac = function TicketsalesreportComponent_Factory(t) {
  return new (t || TicketsalesreportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ticketsalesreport_service__WEBPACK_IMPORTED_MODULE_1__.TicketticketsalesreportService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_setup_unitmaster_unitmaster_service__WEBPACK_IMPORTED_MODULE_2__.UnitmasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
};

TicketsalesreportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: TicketsalesreportComponent,
  selectors: [["ux-ticketsalesreport"]],
  decls: 28,
  vars: 12,
  consts: [["current", "Reports"], [1, "flex-auto", 3, "crumbs"], [1, "w3-margin"], ["appearance", "standard", 2, "margin-bottom", "-1.3em", "padding", "0", "margin-right", "10px"], [3, "ngModel", "ngModelChange", "selectionChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["from_picker", ""], ["to_picker", ""], ["mat-stroked-button", "", 1, "w3-black", 3, "click"], ["class", "w3-margin", 4, "ngIf"], [3, "value"], [1, "w3-margin-bottom"], [1, "w3-table-all", "w3-small"], [4, "ngFor", "ngForOf"], ["colspan", "5"], [2, "text-align", "center", "color", "#888"]],
  template: function TicketsalesreportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ux-secondary-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ux-breadcrumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card", 2)(3, "mat-form-field", 3)(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Select Unit");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TicketsalesreportComponent_Template_mat_select_ngModelChange_6_listener($event) {
        return ctx.unit_id = $event;
      })("selectionChange", function TicketsalesreportComponent_Template_mat_select_selectionChange_6_listener($event) {
        return ctx.onUnitChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "All Units");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, TicketsalesreportComponent_mat_option_9_Template, 2, 2, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 3)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "From Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TicketsalesreportComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.from_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "mat-datepicker-toggle", 8)(15, "mat-datepicker", null, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field", 3)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "To Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TicketsalesreportComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.to_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "mat-datepicker-toggle", 8)(22, "mat-datepicker", null, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TicketsalesreportComponent_Template_button_click_24_listener() {
        return ctx.onSearchClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "SEARCH");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, TicketsalesreportComponent_mat_card_26_Template, 30, 3, "mat-card", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, TicketsalesreportComponent_mat_card_27_Template, 3, 0, "mat-card", 12);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sales_orders_list.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sales_orders_list.length === 0 && ctx.searched);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _ux_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarComponent, _ux_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWNrZXRzYWxlc3JlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"]
});
TicketsalesreportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__.UntilDestroy)()], TicketsalesreportComponent);


/***/ }),

/***/ 91125:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/reports/ticketsalesreport/ticketsalesreport.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsalesreportModule": () => (/* binding */ TicketsalesreportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ticketsalesreport_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticketsalesreport-routing.module */ 63429);
/* harmony import */ var _ticketsalesreport_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticketsalesreport.component */ 48240);
/* harmony import */ var _ux_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ux/components/chart/chart.module */ 97858);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ux_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ux/components/secondary-toolbar/secondary-toolbar.module */ 73271);
/* harmony import */ var _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ux/components/breadcrumbs/breadcrumbs.module */ 39784);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ux/components/page-layout/page-layout.module */ 43492);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);


















class TicketsalesreportModule {
}
TicketsalesreportModule.ɵfac = function TicketsalesreportModule_Factory(t) { return new (t || TicketsalesreportModule)(); };
TicketsalesreportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TicketsalesreportModule });
TicketsalesreportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ticketsalesreport_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketsalesreportRoutingModule,
        _ux_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__.ChartModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _ux_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TicketsalesreportModule, { declarations: [_ticketsalesreport_component__WEBPACK_IMPORTED_MODULE_1__.TicketsalesreportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ticketsalesreport_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketsalesreportRoutingModule,
        _ux_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_2__.ChartModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _ux_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_3__.SecondaryToolbarModule,
        _ux_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _ux_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule] }); })();


/***/ }),

/***/ 36279:
/*!******************************************************************************!*\
  !*** ./src/app/pages/reports/ticketsalesreport/ticketsalesreport.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketticketsalesreportService": () => (/* binding */ TicketticketsalesreportService)
/* harmony export */ });
/* harmony import */ var _Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);







class TicketticketsalesreportService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.groups = [];
    this.groupsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }

  getSalesReport(reportData) {
    var _this = this;

    return (0,_Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        _this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.baseUrl + '/api/postransactions/getordersbetweendates/', JSON.stringify(reportData), {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json')
        }).subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
      });
    })();
  }

}

TicketticketsalesreportService.ɵfac = function TicketticketsalesreportService_Factory(t) {
  return new (t || TicketticketsalesreportService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};

TicketticketsalesreportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: TicketticketsalesreportService,
  factory: TicketticketsalesreportService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reports_ticketsalesreport_ticketsalesreport_module_ts.js.map