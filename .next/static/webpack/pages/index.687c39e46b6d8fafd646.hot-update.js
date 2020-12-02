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
      hit && _this.state.turn === 1 ? _this.setState({
        playerHitted: true
      }) : alert('Errou Miseravi!');
    });

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "finishHit", function () {
      _this.state.turn === 0 ? _this.setState({
        enemyHitted: false
      }) : _this.setState({
        playerHitted: false
      });
      alert('fim de turno');
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
          lineNumber: 35,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "fightBox",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_player__WEBPACK_IMPORTED_MODULE_9__["default"], {
            hasHitted: this.state.playerHitted,
            hitPoint: 3,
            finishHit: this.finishHit
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
            src: "/vs.jpg",
            alt: "met",
            width: 100,
            height: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_enemy__WEBPACK_IMPORTED_MODULE_10__["default"], {
            hasHitted: this.state.enemyHitted,
            hitPoint: 3,
            finishHit: this.finishHit
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXR0bGUuanMiXSwibmFtZXMiOlsiQmF0dGxlIiwicHJvcHMiLCJoaXQiLCJzdGF0ZSIsInR1cm4iLCJzZXRTdGF0ZSIsImVuZW15SGl0dGVkIiwiYWxlcnQiLCJwbGF5ZXJIaXR0ZWQiLCJoYXNWaXJ1cyIsImRpZmljdWx0IiwiaGl0RmllbGQiLCJmaW5pc2hIaXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7OztBQUVqQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLG1VQVVSLFVBQUFDLEdBQUcsRUFBSTtBQUNmQSxTQUFHLElBQUksTUFBS0MsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLENBQTNCLEdBQStCLE1BQUtDLFFBQUwsQ0FBYztBQUFDQyxtQkFBVyxFQUFFO0FBQWQsT0FBZCxDQUEvQixHQUFvRUMsS0FBSyxDQUFDLGlCQUFELENBQXpFO0FBQ0FMLFNBQUcsSUFBSSxNQUFLQyxLQUFMLENBQVdDLElBQVgsS0FBb0IsQ0FBM0IsR0FBK0IsTUFBS0MsUUFBTCxDQUFjO0FBQUNHLG9CQUFZLEVBQUU7QUFBZixPQUFkLENBQS9CLEdBQXFFRCxLQUFLLENBQUMsaUJBQUQsQ0FBMUU7QUFDRixLQWJrQjs7QUFBQSxvVUFlUCxZQUFNO0FBQ2QsWUFBS0osS0FBTCxDQUFXQyxJQUFYLEtBQW9CLENBQXBCLEdBQ0ksTUFBS0MsUUFBTCxDQUFjO0FBQUNDLG1CQUFXLEVBQUU7QUFBZCxPQUFkLENBREosR0FFRSxNQUFLRCxRQUFMLENBQWM7QUFBQ0csb0JBQVksRUFBRTtBQUFmLE9BQWQsQ0FGRjtBQUdBRCxXQUFLLENBQUMsY0FBRCxDQUFMO0FBQ0gsS0FwQmtCOztBQUVmLFVBQUtKLEtBQUwsR0FBYTtBQUNURyxpQkFBVyxFQUFFLEtBREo7QUFFVEUsa0JBQVksRUFBRSxLQUZMO0FBR1RKLFVBQUksRUFBRTtBQUhHLEtBQWI7QUFGZTtBQU9sQjs7Ozs2QkFlUTtBQUFBOztBQUVMLDBCQUNJO0FBQUEsZ0NBQ0kscUVBQUMsK0NBQUQ7QUFBTyxrQkFBUSxFQUFFLEtBQUtILEtBQUwsQ0FBV1EsUUFBNUI7QUFDSSxrQkFBUSxFQUFFLEtBQUtSLEtBQUwsQ0FBV1MsUUFEekI7QUFDbUMsYUFBRyxFQUFFLGFBQUFSLElBQUc7QUFBQSxtQkFBSSxNQUFJLENBQUNTLFFBQUwsQ0FBY1QsSUFBZCxDQUFKO0FBQUE7QUFEM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0kscUVBQUMsK0NBQUQ7QUFBUSxxQkFBUyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0ssWUFBOUI7QUFBNEMsb0JBQVEsRUFBRSxDQUF0RDtBQUF5RCxxQkFBUyxFQUFFLEtBQUtJO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSxxRUFBQyxrREFBRDtBQUFPLGVBQUcsRUFBQyxTQUFYO0FBQXFCLGVBQUcsRUFBQyxLQUF6QjtBQUErQixpQkFBSyxFQUFFLEdBQXRDO0FBQTJDLGtCQUFNLEVBQUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJLHFFQUFDLCtDQUFEO0FBQU8scUJBQVMsRUFBRSxLQUFLVCxLQUFMLENBQVdHLFdBQTdCO0FBQTBDLG9CQUFRLEVBQUUsQ0FBcEQ7QUFBdUQscUJBQVMsRUFBRSxLQUFLTTtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBLHNCQURKO0FBWUg7Ozs7RUF0QytCQyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY4N2MzOWU0NmI2ZDhmYWZkNjQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXHJcbmltcG9ydCBFbmVteSBmcm9tICcuL2VuZW15J1xyXG5pbXBvcnQgRmllbGQgZnJvbSAnLi9maWVsZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXR0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZW5lbXlIaXR0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwbGF5ZXJIaXR0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB0dXJuOiAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGl0RmllbGQgPSBoaXQgPT4ge1xyXG4gICAgICAgaGl0ICYmIHRoaXMuc3RhdGUudHVybiA9PT0gMCA/IHRoaXMuc2V0U3RhdGUoe2VuZW15SGl0dGVkOiB0cnVlfSkgOiBhbGVydCgnRXJyb3UgTWlzZXJhdmkhJylcclxuICAgICAgIGhpdCAmJiB0aGlzLnN0YXRlLnR1cm4gPT09IDEgPyB0aGlzLnNldFN0YXRlKHtwbGF5ZXJIaXR0ZWQ6IHRydWV9KSA6IGFsZXJ0KCdFcnJvdSBNaXNlcmF2aSEnKVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaEhpdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXRlLnR1cm4gPT09IDAgP1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlbmVteUhpdHRlZDogZmFsc2V9KVxyXG4gICAgICAgIDogdGhpcy5zZXRTdGF0ZSh7cGxheWVySGl0dGVkOiBmYWxzZX0pXHJcbiAgICAgICAgYWxlcnQoJ2ZpbSBkZSB0dXJubycpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGhhc1ZpcnVzPXt0aGlzLnByb3BzLmhhc1ZpcnVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpZmljdWx0PXt0aGlzLnByb3BzLmRpZmljdWx0fSBoaXQ9e2hpdCA9PiB0aGlzLmhpdEZpZWxkKGhpdCl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZ2h0Qm94Jz5cclxuICAgICAgICAgICAgICAgICAgICA8UGxheWVyIGhhc0hpdHRlZD17dGhpcy5zdGF0ZS5wbGF5ZXJIaXR0ZWR9IGhpdFBvaW50PXszfSBmaW5pc2hIaXQ9e3RoaXMuZmluaXNoSGl0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy92cy5qcGcnIGFsdD0nbWV0JyB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8RW5lbXkgaGFzSGl0dGVkPXt0aGlzLnN0YXRlLmVuZW15SGl0dGVkfSBoaXRQb2ludD17M30gZmluaXNoSGl0PXt0aGlzLmZpbmlzaEhpdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9