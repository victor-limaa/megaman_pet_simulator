webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_enemy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/enemy */ "./components/enemy.js");
/* harmony import */ var _components_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/field */ "./components/field.js");
/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/player */ "./components/player.js");
/* harmony import */ var _components_Battle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Battle */ "./components/Battle.js");









var _jsxFileName = "C:\\Users\\Victor\\Desktop\\Projects\\megaman_pet\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var App = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = _super.call(this);

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getVirus", function () {
      _this.setState({
        hasVirus: true
      });
    });

    _this.state = {
      hasVirus: false,
      canCount: false,
      dificult: '',
      turn: null
    };
    return _this;
  }

  Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
            onChange: function onChange(e) {
              return _this2.setState({
                dificult: e.target.value
              });
            },
            type: "radio",
            name: "dificult",
            id: "easy",
            value: "easy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            "for": "easy",
            children: "F\xE1cil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
            onChange: function onChange(e) {
              return _this2.setState({
                dificult: e.target.value
              });
            },
            type: "radio",
            name: "dificult",
            id: "medium",
            value: "medium"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            "for": "medium",
            children: "M\xE9dio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
            onChange: function onChange(e) {
              return _this2.setState({
                dificult: e.target.value
              });
            },
            type: "radio",
            name: "dificult",
            id: "hard",
            value: "hard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            "for": "hard",
            children: "Dif\xEDcil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          onClick: this.getVirus,
          children: "Verificar V\xEDrus"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, this), this.state.hasVirus ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Battle__WEBPACK_IMPORTED_MODULE_12__["default"], {
            hasVirus: this.state.hasVirus,
            dificult: this.state.dificult
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this)
        }, void 0, false) : null]
      }, void 0, true);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwic2V0U3RhdGUiLCJoYXNWaXJ1cyIsInN0YXRlIiwiY2FuQ291bnQiLCJkaWZpY3VsdCIsInR1cm4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRWaXJ1cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEc7Ozs7O0FBRUYsaUJBQWE7QUFBQTs7QUFBQTs7QUFDVDs7QUFEUyxtVUFXRixZQUFNO0FBQ2IsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLGdCQUFRLEVBQUU7QUFBWCxPQUFkO0FBQ0gsS0FiWTs7QUFFVCxVQUFLQyxLQUFMLEdBQWE7QUFDVEQsY0FBUSxFQUFFLEtBREQ7QUFFVEUsY0FBUSxFQUFFLEtBRkQ7QUFHVEMsY0FBUSxFQUFFLEVBSEQ7QUFJVEMsVUFBSSxFQUFFO0FBSkcsS0FBYjtBQUZTO0FBUVo7Ozs7NkJBVU87QUFBQTs7QUFFSiwwQkFDSTtBQUFBLGdDQUNJO0FBQUEsa0NBQ0k7QUFBTyxvQkFBUSxFQUFFLGtCQUFBQyxDQUFDO0FBQUEscUJBQUksTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBQ0ksd0JBQVEsRUFBRUUsQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQXBCLGVBQWQsQ0FBSjtBQUFBLGFBQWxCO0FBQWlFLGdCQUFJLEVBQUMsT0FBdEU7QUFBOEUsZ0JBQUksRUFBQyxVQUFuRjtBQUE4RixjQUFFLEVBQUMsTUFBakc7QUFBd0csaUJBQUssRUFBQztBQUE5RztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBTyxtQkFBSSxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBSUk7QUFBTyxvQkFBUSxFQUFFLGtCQUFBRixDQUFDO0FBQUEscUJBQUksTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBQ0ksd0JBQVEsRUFBRUUsQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQXBCLGVBQWQsQ0FBSjtBQUFBLGFBQWxCO0FBQWlFLGdCQUFJLEVBQUMsT0FBdEU7QUFBOEUsZ0JBQUksRUFBQyxVQUFuRjtBQUE4RixjQUFFLEVBQUMsUUFBakc7QUFBMEcsaUJBQUssRUFBQztBQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0k7QUFBTyxtQkFBSSxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLGVBT0k7QUFBTyxvQkFBUSxFQUFFLGtCQUFBRixDQUFDO0FBQUEscUJBQUksTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBQ0ksd0JBQVEsRUFBRUUsQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQXBCLGVBQWQsQ0FBSjtBQUFBLGFBQWxCO0FBQWlFLGdCQUFJLEVBQUMsT0FBdEU7QUFBOEUsZ0JBQUksRUFBQyxVQUFuRjtBQUE4RixjQUFFLEVBQUMsTUFBakc7QUFBd0csaUJBQUssRUFBQztBQUE5RztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKLGVBUUk7QUFBTyxtQkFBSSxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVdJO0FBQVEsaUJBQU8sRUFBRSxLQUFLQyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSixFQWNRLEtBQUtQLEtBQUwsQ0FBV0QsUUFBWCxnQkFDQTtBQUFBLGlDQUNJLHFFQUFDLDJEQUFEO0FBQVEsb0JBQVEsRUFBRSxLQUFLQyxLQUFMLENBQVdELFFBQTdCO0FBQXVDLG9CQUFRLEVBQUUsS0FBS0MsS0FBTCxDQUFXRTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseUJBREEsR0FJRSxJQWxCVjtBQUFBLHNCQURKO0FBd0JIOzs7O0VBOUNhTSw0Q0FBSyxDQUFDQyxTOztBQWlEVFosa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2U0OTliYjVkZDkxYTM3ZjFhYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEVuZW15IGZyb20gJy4uL2NvbXBvbmVudHMvZW5lbXknXHJcbmltcG9ydCBGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL2ZpZWxkJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvcGxheWVyJ1xyXG5pbXBvcnQgQmF0dGxlIGZyb20gJy4uL2NvbXBvbmVudHMvQmF0dGxlJ1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBoYXNWaXJ1czogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbkNvdW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZGlmaWN1bHQ6ICcnLFxyXG4gICAgICAgICAgICB0dXJuOiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0VmlydXMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGFzVmlydXM6IHRydWV9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtkaWZpY3VsdDogZS50YXJnZXQudmFsdWV9KX0gdHlwZT0ncmFkaW8nIG5hbWU9J2RpZmljdWx0JyBpZD0nZWFzeScgdmFsdWU9J2Vhc3knPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0nZWFzeSc+RsOhY2lsPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe2RpZmljdWx0OiBlLnRhcmdldC52YWx1ZX0pfSB0eXBlPSdyYWRpbycgbmFtZT0nZGlmaWN1bHQnIGlkPSdtZWRpdW0nIHZhbHVlPSdtZWRpdW0nPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0nbWVkaXVtJz5Nw6lkaW88L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZGlmaWN1bHQ6IGUudGFyZ2V0LnZhbHVlfSl9IHR5cGU9J3JhZGlvJyBuYW1lPSdkaWZpY3VsdCcgaWQ9J2hhcmQnIHZhbHVlPSdoYXJkJz48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9J2hhcmQnPkRpZsOtY2lsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdldFZpcnVzfT5WZXJpZmljYXIgVsOtcnVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGFzVmlydXMgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYXR0bGUgaGFzVmlydXM9e3RoaXMuc3RhdGUuaGFzVmlydXN9IGRpZmljdWx0PXt0aGlzLnN0YXRlLmRpZmljdWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAiXSwic291cmNlUm9vdCI6IiJ9