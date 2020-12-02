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
          virusPosition: _this.props.dificult === 'easy' ? Math.floor(Math.random() * (3 - 1)) + 1 : _this.props.dificult === 'medium' ? Math.floor(Math.random() * (5 - 1)) + 1 : _this.props.dificult === 'hard' ? Math.floor(Math.random() * (10 - 1)) + 1 : null,
          chance: _this.props.dificult === 'easy' ? 0 : _this.props.dificult === 'medium' ? 1 : _this.props.dificult === 'hard' ? 2 : 0
        });
      } else {
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
            lineNumber: 53,
            columnNumber: 25
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWVsZC5qcyJdLCJuYW1lcyI6WyJGaWVsZCIsInByb3BzIiwicG9zIiwic3RhdGUiLCJ2aXJ1c1Bvc2l0aW9uIiwiaGl0Iiwic2V0U3RhdGUiLCJkaWZpY3VsdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNoYW5jZSIsImNvbnNvbGUiLCJsb2ciLCJmaWVsZCIsInN0eWxlIiwiZmllbGQzIiwiZmllbGQyIiwibWFwIiwiZiIsImkiLCJhcmVhIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFJTUEsSzs7Ozs7QUFFRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDhUQWdCYixVQUFBQyxHQUFHLEVBQUk7QUFDVCxVQUFHLE1BQUtDLEtBQUwsQ0FBV0MsYUFBWCxLQUE2QkYsR0FBaEMsRUFBcUM7QUFDakMsY0FBS0QsS0FBTCxDQUFXSSxHQUFYLENBQWUsSUFBZjs7QUFDQSxjQUFLQyxRQUFMLENBQWM7QUFDVkYsdUJBQWEsRUFBRSxNQUFLSCxLQUFMLENBQVdNLFFBQVgsS0FBd0IsTUFBeEIsR0FBaUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUIsSUFBSSxDQUFyQixDQUFYLElBQXNDLENBQXZFLEdBQ1gsTUFBS1QsS0FBTCxDQUFXTSxRQUFYLEtBQXdCLFFBQXhCLEdBQW1DQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLElBQUksQ0FBckIsQ0FBWCxJQUFzQyxDQUF6RSxHQUNBLE1BQUtULEtBQUwsQ0FBV00sUUFBWCxLQUF3QixNQUF4QixHQUFpQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixLQUFLLENBQXRCLENBQVgsSUFBdUMsQ0FB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QUF0QixDQUFYLElBQXVDLENBQXhFLEdBQTRFLElBUG5GO0FBU1RDLFlBQU0sRUFBRSxNQUFLVixLQUFMLENBQVdNLFFBQVgsS0FBd0IsTUFBeEIsR0FBaUMsQ0FBakMsR0FBcUMsTUFBS04sS0FBTCxDQUFXTSxRQUFYLEtBQXdCLFFBQXhCLEdBQW1DLENBQW5DLEdBQXVDLE1BQUtOLEtBQUwsQ0FBV00sUUFBWCxLQUF3QixNQUF4QixHQUFpQyxDQUFqQyxHQUFxQztBQVRoSCxLQUFiO0FBRmU7QUFjbEI7Ozs7NkJBeUJRO0FBQUE7O0FBRUwsMEJBQ0k7QUFBSyxpQkFBUyxFQUFFLEtBQUtOLEtBQUwsQ0FBV00sUUFBWCxLQUF3QixNQUF4QixHQUFpQ1EsK0RBQUssQ0FBQ0MsTUFBdkMsR0FBZ0RELCtEQUFLLENBQUNFLE1BQXRFO0FBQUEsa0JBQ0ssS0FBS2QsS0FBTCxDQUFXVyxLQUFYLENBQWlCSSxHQUFqQixDQUFxQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUM1Qiw4QkFDSTtBQUFXLHFCQUFTLEVBQUVMLCtEQUFLLENBQUNNLElBQTVCO0FBQ0ksbUJBQU8sRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ2hCLEdBQUwsQ0FBU2MsQ0FBVCxDQUFOO0FBQUE7QUFEYixhQUFRQyxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREo7QUFNSCxTQVBBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBWUg7Ozs7RUF2RGVFLDRDQUFLLENBQUNDLFM7O0FBMERYdkIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDNmMGZhOGEwYjljNTU2YWJjYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9GaWVsZC5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcblxyXG5jbGFzcyBGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBmaWVsZDogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2hhcmQnID8gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnbWVkaXVtJyA/IFsxLCAyLCAzLCA0XSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2Vhc3knID8gWzEsIDJdIDogW10sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2aXJ1c1Bvc2l0aW9uOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnZWFzeScgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMyAtIDEpKSArIDEgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ21lZGl1bScgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNSAtIDEpKSArIDEgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2hhcmQnID8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkpICsgMSA6IG51bGwsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjaGFuY2U6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdlYXN5JyA/IDAgOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnbWVkaXVtJyA/IDEgOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyAyIDogMCxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpdCA9IHBvcyA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS52aXJ1c1Bvc2l0aW9uID09PSBwb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXQodHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB2aXJ1c1Bvc2l0aW9uOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnZWFzeScgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMyAtIDEpKSArIDEgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdtZWRpdW0nID8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUgLSAxKSkgKyAxIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSkgKyAxIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNoYW5jZTogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2Vhc3knID8gMCA6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdtZWRpdW0nID8gMSA6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdoYXJkJyA/IDIgOiAwLH0pXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGl0KGZhbHNlKVxyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmNoYW5jZSA+IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjaGFuY2U6IHRoaXMuc3RhdGUuY2hhbmNlIC0gMX0pXHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuY2hhbmNlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2aXJ1c1Bvc2l0aW9uOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnZWFzeScgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMyAtIDEpKSArIDEgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdtZWRpdW0nID8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUgLSAxKSkgKyAxIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSkgKyAxIDogbnVsbCx9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hhbmNlOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnZWFzeScgPyAwIDogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ21lZGl1bScgPyAxIDogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2hhcmQnID8gMiA6IDAsfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyBzdHlsZS5maWVsZDMgOiBzdHlsZS5maWVsZDJ9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmllbGQubWFwKChmLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGUuYXJlYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGl0KGYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZCJdLCJzb3VyY2VSb290IjoiIn0=