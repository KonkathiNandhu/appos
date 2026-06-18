"use strict";
(self["webpackChunkux"] = self["webpackChunkux"] || []).push([["common"],{

/***/ 80599:
/*!********************************************************************************!*\
  !*** ./src/app/pages/productmanagement/posmanagement/posmanagement.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosmanagementService": () => (/* binding */ PosmanagementService)
/* harmony export */ });
/* harmony import */ var _Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);







class PosmanagementService {
  constructor(http, router, authService) {
    this.http = http;
    this.router = router;
    this.authService = authService;
  }

  getActivitiesByUnit(unit_id) {
    var _this = this;

    return (0,_Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.baseUrl + '/api/posadministration/getactivitiesbyunit/' + unit_id, {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json')
        }).subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
      });
    })();
  }

  savePOS(posdata) {
    var _this2 = this;

    return (0,_Users_apple_Downloads_aatreya_works_Shilparamam_SOURCE_CODE_aps_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        _this2.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.baseUrl + '/api/posadministration', JSON.stringify(posdata), {
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

PosmanagementService.ɵfac = function PosmanagementService_Factory(t) {
  return new (t || PosmanagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};

PosmanagementService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: PosmanagementService,
  factory: PosmanagementService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 85506:
/*!******************************************************!*\
  !*** ./src/ux/animations/scale-fade-in.animation.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleFadeIn400ms": () => (/* binding */ scaleFadeIn400ms),
/* harmony export */   "scaleFadeInAnimation": () => (/* binding */ scaleFadeInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);

function scaleFadeInAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleFadeIn', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(0.8)',
                opacity: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(1)',
                opacity: 1
            }))
        ])
    ]);
}
const scaleFadeIn400ms = scaleFadeInAnimation(400);


/***/ })

}]);
//# sourceMappingURL=common.js.map