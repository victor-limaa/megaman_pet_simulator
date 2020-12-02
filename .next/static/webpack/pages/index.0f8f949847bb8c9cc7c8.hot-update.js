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
        alert('acertou');

        _this.props.hit(true);

        _this.setState({
          virusPosition: _this.props.dificult === 'easy' ? Math.floor(Math.random() * (3 - 1)) + 1 : _this.props.dificult === 'medium' ? Math.floor(Math.random() * (5 - 1)) + 1 : _this.props.dificult === 'hard' ? Math.floor(Math.random() * (10 - 1)) + 1 : null,
          chance: _this.props.dificult === 'easy' ? 0 : _this.props.dificult === 'medium' ? 1 : _this.props.dificult === 'hard' ? 2 : 0
        });
      } else {
        alert('errou');

        _this.props.hit(false);

        if (_this.state.chance > 0) _this.setState({
          chance: _this.state.chance - 1
        });

        if (_this.state.chance === 0) {
          _this.setState({
            virusPosition: _this.props.dificult === 'easy' ? Math.floor(Math.random() * (3 - 1)) + 1 : _this.props.dificult === 'medium' ? Math.floor(Math.random() * (5 - 1)) + 1 : _this.props.dificult === 'hard' ? Math.floor(Math.random() * (10 - 1)) + 1 : null
          });

          _this.setState({
            chance: _this.props.dificult === 'easy' ? 0 : _this.props.dificult === 'medium' ? 1 : _this.props.dificult === 'hard' ? 2 : 0
          });
        }
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
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.state);
    }
  }, {
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
            lineNumber: 58,
            columnNumber: 25
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWVsZC5qcyJdLCJuYW1lcyI6WyJGaWVsZCIsInByb3BzIiwicG9zIiwic3RhdGUiLCJ2aXJ1c1Bvc2l0aW9uIiwiYWxlcnQiLCJoaXQiLCJzZXRTdGF0ZSIsImRpZmljdWx0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhbmNlIiwiZmllbGQiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJmaWVsZDMiLCJmaWVsZDIiLCJtYXAiLCJmIiwiaSIsImFyZWEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUlNQSxLOzs7OztBQUVGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsOFRBZ0JiLFVBQUFDLEdBQUcsRUFBSTtBQUNULFVBQUcsTUFBS0MsS0FBTCxDQUFXQyxhQUFYLEtBQTZCRixHQUFoQyxFQUFxQztBQUNqQ0csYUFBSyxDQUFDLFNBQUQsQ0FBTDs7QUFDQSxjQUFLSixLQUFMLENBQVdLLEdBQVgsQ0FBZSxJQUFmOztBQUNBLGNBQUtDLFFBQUwsQ0FBYztBQUNWSCx1QkFBYSxFQUFFLE1BQUtILEtBQUwsQ0FBV08sUUFBWCxLQUF3QixNQUF4QixHQUFpQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixJQUFJLENBQXJCLENBQVgsSUFBc0MsQ0FBdkUsR0FDWCxNQUFLVixLQUFMLENBQVdPLFFBQVgsS0FBd0IsUUFBeEIsR0FBbUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUIsSUFBSSxDQUFyQixDQUFYLElBQXNDLENBQXpFLEdBQ0EsTUFBS1YsS0FBTCxDQUFXTyxRQUFYLEtBQXdCLE1BQXhCLEdBQWlDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxN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QUFDRSxNQUFMLE1BQWlCLEtBQUssQ0FBdEIsQ0FBWCxJQUF1QyxDQUF4RSxHQUE0RSxJQVBuRjtBQVNUQyxZQUFNLEVBQUUsTUFBS1gsS0FBTCxDQUFXTyxRQUFYLEtBQXdCLE1BQXhCLEdBQWlDLENBQWpDLEdBQXFDLE1BQUtQLEtBQUwsQ0FBV08sUUFBWCxLQUF3QixRQUF4QixHQUFtQyxDQUFuQyxHQUF1QyxNQUFLUCxLQUFMLENBQVdPLFFBQVgsS0FBd0IsTUFBeEIsR0FBaUMsQ0FBakMsR0FBcUM7QUFUaEgsS0FBYjtBQUZlO0FBY2xCOzs7O3dDQTBCbUI7QUFDaEJNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtaLEtBQWpCO0FBQ0g7Ozs2QkFFUTtBQUFBOztBQUVMLDBCQUNJO0FBQUssaUJBQVMsRUFBRSxLQUFLRixLQUFMLENBQVdPLFFBQVgsS0FBd0IsTUFBeEIsR0FBaUNRLCtEQUFLLENBQUNDLE1BQXZDLEdBQWdERCwrREFBSyxDQUFDRSxNQUF0RTtBQUFBLGtCQUNLLEtBQUtmLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQk0sR0FBakIsQ0FBcUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDNUIsOEJBQ0k7QUFBVyxxQkFBUyxFQUFFTCwrREFBSyxDQUFDTSxJQUE1QjtBQUNJLG1CQUFPLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNoQixHQUFMLENBQVNjLENBQVQsQ0FBTjtBQUFBO0FBRGIsYUFBUUMsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKO0FBTUgsU0FQQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQVlIOzs7O0VBNURlRSw0Q0FBSyxDQUFDQyxTOztBQStEWHhCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBmOGY5NDk4NDdiYjhjOWNjN2M4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvRmllbGQubW9kdWxlLmNzcydcclxuXHJcblxyXG5cclxuY2xhc3MgRmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZmllbGQ6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdoYXJkJyA/IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ21lZGl1bScgPyBbMSwgMiwgMywgNF0gOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdlYXN5JyA/IFsxLCAyXSA6IFtdLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmlydXNQb3NpdGlvbjogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2Vhc3knID8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDMgLSAxKSkgKyAxIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdtZWRpdW0nID8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUgLSAxKSkgKyAxIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdoYXJkJyA/IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpKSArIDEgOiBudWxsLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hhbmNlOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnZWFzeScgPyAwIDogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ21lZGl1bScgPyAxIDogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2hhcmQnID8gMiA6IDAsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaXQgPSBwb3MgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUudmlydXNQb3NpdGlvbiA9PT0gcG9zKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdhY2VydG91JylcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXQodHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB2aXJ1c1Bvc2l0aW9uOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnZWFzeScgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMyAtIDEpKSArIDEgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdtZWRpdW0nID8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUgLSAxKSkgKyAxIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSkgKyAxIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNoYW5jZTogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2Vhc3knID8gMCA6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdtZWRpdW0nID8gMSA6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdoYXJkJyA/IDIgOiAwLH0pXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdlcnJvdScpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGl0KGZhbHNlKVxyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmNoYW5jZSA+IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjaGFuY2U6IHRoaXMuc3RhdGUuY2hhbmNlIC0gMX0pXHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuY2hhbmNlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2aXJ1c1Bvc2l0aW9uOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnZWFzeScgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMyAtIDEpKSArIDEgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdtZWRpdW0nID8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUgLSAxKSkgKyAxIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSkgKyAxIDogbnVsbCx9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hhbmNlOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnZWFzeScgPyAwIDogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ21lZGl1bScgPyAxIDogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2hhcmQnID8gMiA6IDAsfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdoYXJkJyA/IHN0eWxlLmZpZWxkMyA6IHN0eWxlLmZpZWxkMn0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maWVsZC5tYXAoKGYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZS5hcmVhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oaXQoZil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkIl0sInNvdXJjZVJvb3QiOiIifQ==