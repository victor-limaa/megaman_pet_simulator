webpackHotUpdate_N_E("pages/index",{

/***/ "./components/field.js":
/*!*****************************!*\
  !*** ./components/field.js ***!
  \*****************************/
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
/* harmony import */ var _styles_Field_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Field.module.css */ "./styles/Field.module.css");
/* harmony import */ var _styles_Field_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Field_module_css__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "C:\\Users\\Victor\\Desktop\\Projects\\megaman_pet\\components\\field.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Field = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Field, _React$Component);

  var _super = _createSuper(Field);

  function Field(props) {
    var _this;

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Field);

    _this = _super.call(this, props);

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "hit", function (pos) {
      if (_this.state.virusPosition === pos) {
        _this.props.hit(true);

        _this.setState({
          virusPosition: Math.floor(Math.random() * (10 - 1)) + 1,
          chance: _this.props.dificult === 'easy' ? 0 : _this.props.dificult === 'medium' ? 1 : _this.props.dificult === 'hard' ? 2 : 0
        });
      } else {
        _this.props.hit(false);

        if (_this.state.chance > 0) _this.setState({
          chance: _this.state.chance - 1
        });

        if (_this.state.chance === 0) {
          _this.setState({
            virusPosition: Math.floor(Math.random() * (10 - 1)) + 1
          });

          _this.setState({
            chance: _this.props.dificult === 'easy' ? 0 : _this.props.dificult === 'medium' ? 1 : _this.props.dificult === 'hard' ? 2 : 0
          });
        }

        console.log(_this.state);
      }
    });

    _this.state = {
      field: _this.props.dificult === 'hard' ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : _this.props.dificult === 'medium' ? [1, 2, 3, 4] : _this.props.dificult === 'easy' ? [1, 2] : [],
      virusPosition: _this.props.dificult === 'easy' ? Math.floor(Math.random() * (3 - 1)) + 1 : _this.props.dificult === 'medium' ? Math.floor(Math.random() * (5 - 1)) + 1 : _this.props.dificult === 'hard' ? Math.floor(Math.random() * (10 - 1)) + 1 : null,
      chance: _this.props.dificult === 'easy' ? 0 : _this.props.dificult === 'medium' ? 1 : _this.props.dificult === 'hard' ? 2 : 0
    };
    return _this;
  }

  Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Field, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: this.props.dificult === 'hard' ? _styles_Field_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.field3 : _styles_Field_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.field2,
        children: this.state.field.map(function (f, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: _styles_Field_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.area,
            onClick: function onClick() {
              return _this2.hit(f);
            }
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this);
    }
  }]);

  return Field;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Field);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWVsZC5qcyJdLCJuYW1lcyI6WyJGaWVsZCIsInByb3BzIiwicG9zIiwic3RhdGUiLCJ2aXJ1c1Bvc2l0aW9uIiwiaGl0Iiwic2V0U3RhdGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFuY2UiLCJkaWZpY3VsdCIsImNvbnNvbGUiLCJsb2ciLCJmaWVsZCIsInN0eWxlIiwiZmllbGQzIiwiZmllbGQyIiwibWFwIiwiZiIsImkiLCJhcmVhIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFJTUEsSzs7Ozs7QUFFRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDhUQWdCYixVQUFBQyxHQUFHLEVBQUk7QUFDVCxVQUFHLE1BQUtDLEtBQUwsQ0FBV0MsYUFBWCxLQUE2QkYsR0FBaEMsRUFBcUM7QUFDakMsY0FBS0QsS0FBTCxDQUFXSSxHQUFYLENBQWUsSUFBZjs7QUFDQSxjQUFLQyxRQUFMLENBQWM7QUFDVkYsdUJBQWEsRUFBRUcsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixLQUFLLENBQXRCLENBQVgsSUFBdUMsQ0FENUM7QUFFVkMsZ0JBQU0sRUFBRSxNQUFLVCxLQUFMLENBQVdVLFFBQVgsS0FBd0IsTUFBeEIsR0FBaUMsQ0FBakMsR0FBcUMsTUFBS1YsS0FBTCxDQUFXVSxRQUFYLEtBQXdCLFFBQXhCLEdBQW1DLENBQW5DLEdBQXVDLE1BQUtWLEtBQUwsQ0FBV1UsUUFBWCxLQUF3QixNQUF4QixHQUFpQyxDQUFqQyxHQUFxQztBQUYvRyxTQUFkO0FBSUgsT0FORCxNQU1PO0FBQ0gsY0FBS1YsS0FBTCxDQUFXSSxHQUFYLENBQWUsS0FBZjs7QUFDQSxZQUFHLE1BQUtGLEtBQUwsQ0FBV08sTUFBWCxHQUFv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QUFBQSxvQkFESjtBQU1ILFNBUEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFZSDs7OztFQW5EZUUsNENBQUssQ0FBQ0MsUzs7QUFzRFh2QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNWI1ZDZlNWVmNjI0ZGFiNjEyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL0ZpZWxkLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuXHJcbmNsYXNzIEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZpZWxkOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0gOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdtZWRpdW0nID8gWzEsIDIsIDMsIDRdIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnZWFzeScgPyBbMSwgMl0gOiBbXSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZpcnVzUG9zaXRpb246IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdlYXN5JyA/IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzIC0gMSkpICsgMSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnbWVkaXVtJyA/IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1IC0gMSkpICsgMSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSkgKyAxIDogbnVsbCxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNoYW5jZTogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2Vhc3knID8gMCA6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdtZWRpdW0nID8gMSA6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdoYXJkJyA/IDIgOiAwLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGl0ID0gcG9zID0+IHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnZpcnVzUG9zaXRpb24gPT09IHBvcykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpdCh0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZpcnVzUG9zaXRpb246IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpKSArIDEsXHJcbiAgICAgICAgICAgICAgICBjaGFuY2U6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdlYXN5JyA/IDAgOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnbWVkaXVtJyA/IDEgOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyAyIDogMCx9KVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpdChmYWxzZSlcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5jaGFuY2UgPiAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hhbmNlOiB0aGlzLnN0YXRlLmNoYW5jZSAtIDF9KVxyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmNoYW5jZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmlydXNQb3NpdGlvbjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkpICsgMX0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjaGFuY2U6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdlYXN5JyA/IDAgOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnbWVkaXVtJyA/IDEgOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyAyIDogMCx9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdoYXJkJyA/IHN0eWxlLmZpZWxkMyA6IHN0eWxlLmZpZWxkMn0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maWVsZC5tYXAoKGYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZS5hcmVhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oaXQoZil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkIl0sInNvdXJjZVJvb3QiOiIifQ==