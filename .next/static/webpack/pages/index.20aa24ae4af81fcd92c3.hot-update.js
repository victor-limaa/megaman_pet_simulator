webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Battle.js":
/*!******************************!*\
  !*** ./components/Battle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Battle; });
/* harmony import */ var C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player */ "./components/player.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enemy */ "./components/enemy.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./field */ "./components/field.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "C:\\Users\\Victor\\Desktop\\Projects\\megaman_pet\\components\\Battle.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Battle = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Battle, _React$Component);

  var _super = _createSuper(Battle);

  function Battle(props) {
    var _this;

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Battle);

    _this = _super.call(this, props);

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "hitField", function (hit) {
      hit && _this.state.turn === 0 ? _this.setState({
        enemyHitted: true
      }) : alert('Errou Miseravi!');
    });

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "finishHit", function () {
      _this.state.turn === 0 ? _this.setState({
        enemyHitted: false
      }) : _this.setState({
        playerHitted: false
      });
    });

    _this.state = {
      enemyHitted: false,
      playerHitted: false,
      turn: 0
    };
    return _this;
  }

  Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Battle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_field__WEBPACK_IMPORTED_MODULE_11__["default"], {
          hasVirus: this.props.hasVirus,
          dificult: this.props.dificult,
          hit: function hit(_hit) {
            return _this2.hitField(_hit);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "fightBox",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_player__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
            src: "/vs.jpg",
            alt: "met",
            width: 100,
            height: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_enemy__WEBPACK_IMPORTED_MODULE_10__["default"], {
            hasHitted: this.props.enemyHitted,
            hitPoint: 3,
            finishHit: function finishHit() {
              return _this2.finishHit();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this)]
      }, void 0, true);
    }
  }]);

  return Battle;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXR0bGUuanMiXSwibmFtZXMiOlsiQmF0dGxlIiwicHJvcHMiLCJoaXQiLCJzdGF0ZSIsInR1cm4iLCJzZXRTdGF0ZSIsImVuZW15SGl0dGVkIiwiYWxlcnQiLCJwbGF5ZXJIaXR0ZWQiLCJoYXNWaXJ1cyIsImRpZmljdWx0IiwiaGl0RmllbGQiLCJmaW5pc2hIaXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7OztBQUVqQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLG1VQVVSLFVBQUFDLEdBQUcsRUFBSTtBQUNmQSxTQUFHLElBQUksTUFBS0MsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLENBQTNCLEdBQStCLE1BQUtDLFFBQUwsQ0FBYztBQUFDQyxtQkFBVyxFQUFFO0FBQWQsT0FBZCxDQUEvQixHQUFvRUMsS0FBSyxDQUFDLGlCQUFELENBQXpFO0FBQ0YsS0Faa0I7O0FBQUEsb1VBY1AsWUFBTTtBQUNkLFlBQUtKLEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixDQUFwQixHQUF3QixNQUFLQyxRQUFMLENBQWM7QUFBQ0MsbUJBQVcsRUFBRTtBQUFkLE9BQWQsQ0FBeEIsR0FDSSxNQUFLRCxRQUFMLENBQWM7QUFBQ0csb0JBQVksRUFBRTtBQUFmLE9BQWQsQ0FESjtBQUVILEtBakJrQjs7QUFFZixVQUFLTCxLQUFMLEdBQWE7QUFDVEcsaUJBQVcsRUFBRSxLQURKO0FBRVRFLGtCQUFZLEVBQUUsS0FGTDtBQUdUSixVQUFJLEVBQUU7QUFIRyxLQUFiO0FBRmU7QUFPbEI7Ozs7NkJBWVE7QUFBQTs7QUFFTCwwQkFDSTtBQUFBLGdDQUNJLHFFQUFDLCtDQUFEO0FBQU8sa0JBQVEsRUFBRSxLQUFLSCxLQUFMLENBQVdRLFFBQTVCO0FBQ0ksa0JBQVEsRUFBRSxLQUFLUixLQUFMLENBQVdTLFFBRHpCO0FBQ21DLGFBQUcsRUFBRSxhQUFBUixJQUFHO0FBQUEsbUJBQUksTUFBSSxDQUFDUyxRQUFMLENBQWNULElBQWQsQ0FBSjtBQUFBO0FBRDNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGtDQUNJLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSxxRUFBQyxrREFBRDtBQUFPLGVBQUcsRUFBQyxTQUFYO0FBQXFCLGVBQUcsRUFBQyxLQUF6QjtBQUErQixpQkFBSyxFQUFFLEdBQXRDO0FBQTJDLGtCQUFNLEVBQUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJLHFFQUFDLCtDQUFEO0FBQU8scUJBQVMsRUFBRSxLQUFLRCxLQUFMLENBQVdLLFdBQTdCO0FBQTBDLG9CQUFRLEVBQUUsQ0FBcEQ7QUFBdUQscUJBQVMsRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ00sU0FBTCxFQUFOO0FBQUE7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQSxzQkFESjtBQVlIOzs7O0VBbkMrQkMsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMGFhMjRhZTRhZjgxZmNkOTJjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJ1xyXG5pbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSdcclxuaW1wb3J0IEZpZWxkIGZyb20gJy4vZmllbGQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmF0dGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGVuZW15SGl0dGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcGxheWVySGl0dGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgdHVybjogMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhpdEZpZWxkID0gaGl0ID0+IHtcclxuICAgICAgIGhpdCAmJiB0aGlzLnN0YXRlLnR1cm4gPT09IDAgPyB0aGlzLnNldFN0YXRlKHtlbmVteUhpdHRlZDogdHJ1ZX0pIDogYWxlcnQoJ0Vycm91IE1pc2VyYXZpIScpIFxyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaEhpdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXRlLnR1cm4gPT09IDAgPyB0aGlzLnNldFN0YXRlKHtlbmVteUhpdHRlZDogZmFsc2V9KSA6XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllckhpdHRlZDogZmFsc2V9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBoYXNWaXJ1cz17dGhpcy5wcm9wcy5oYXNWaXJ1c31cclxuICAgICAgICAgICAgICAgICAgICBkaWZpY3VsdD17dGhpcy5wcm9wcy5kaWZpY3VsdH0gaGl0PXtoaXQgPT4gdGhpcy5oaXRGaWVsZChoaXQpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWdodEJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYXllciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy92cy5qcGcnIGFsdD0nbWV0JyB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8RW5lbXkgaGFzSGl0dGVkPXt0aGlzLnByb3BzLmVuZW15SGl0dGVkfSBoaXRQb2ludD17M30gZmluaXNoSGl0PXsoKSA9PiB0aGlzLmZpbmlzaEhpdCgpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=