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
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.state);
    }
  }, {
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
          lineNumber: 36,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "fightBox",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_player__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
            src: "/vs.jpg",
            alt: "met",
            width: 100,
            height: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_enemy__WEBPACK_IMPORTED_MODULE_10__["default"], {
            hasHitted: this.props.enemyHitted,
            hitPoint: 3,
            finishHit: function finishHit() {
              return _this2.finishHit();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXR0bGUuanMiXSwibmFtZXMiOlsiQmF0dGxlIiwicHJvcHMiLCJoaXQiLCJzdGF0ZSIsInR1cm4iLCJzZXRTdGF0ZSIsImVuZW15SGl0dGVkIiwiYWxlcnQiLCJwbGF5ZXJIaXR0ZWQiLCJjb25zb2xlIiwibG9nIiwiaGFzVmlydXMiLCJkaWZpY3VsdCIsImhpdEZpZWxkIiwiZmluaXNoSGl0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTTs7Ozs7QUFFakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxtVUFVUixVQUFBQyxHQUFHLEVBQUk7QUFDZkEsU0FBRyxJQUFJLE1BQUtDLEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixDQUEzQixHQUErQixNQUFLQyxRQUFMLENBQWM7QUFBQ0MsbUJBQVcsRUFBRTtBQUFkLE9BQWQsQ0FBL0IsR0FBb0VDLEtBQUssQ0FBQyxpQkFBRCxDQUF6RTtBQUNGLEtBWmtCOztBQUFBLG9VQWNQLFlBQU07QUFDZCxZQUFLSixLQUFMLENBQVdDLElBQVgsS0FBb0IsQ0FBcEIsR0FBd0IsTUFBS0MsUUFBTCxDQUFjO0FBQUNDLG1CQUFXLEVBQUU7QUFBZCxPQUFkLENBQXhCLEdBQ0ksTUFBS0QsUUFBTCxDQUFjO0FBQUNHLG9CQUFZLEVBQUU7QUFBZixPQUFkLENBREo7QUFFSCxLQWpCa0I7O0FBRWYsVUFBS0wsS0FBTCxHQUFhO0FBQ1RHLGlCQUFXLEVBQUUsS0FESjtBQUVURSxrQkFBWSxFQUFFLEtBRkw7QUFHVEosVUFBSSxFQUFFO0FBSEcsS0FBYjtBQUZlO0FBT2xCOzs7O3dDQVltQjtBQUNoQkssYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS1AsS0FBakI7QUFDSDs7OzZCQUVRO0FBQUE7O0FBRUwsMEJBQ0k7QUFBQSxnQ0FDSSxxRUFBQywrQ0FBRDtBQUFPLGtCQUFRLEVBQUUsS0FBS0YsS0FBTCxDQUFXVSxRQUE1QjtBQUNJLGtCQUFRLEVBQUUsS0FBS1YsS0FBTCxDQUFXVyxRQUR6QjtBQUNtQyxhQUFHLEVBQUUsYUFBQVYsSUFBRztBQUFBLG1CQUFJLE1BQUksQ0FBQ1csUUFBTCxDQUFjWCxJQUFkLENBQUo7QUFBQTtBQUQzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDSSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUkscUVBQUMsa0RBQUQ7QUFBTyxlQUFHLEVBQUMsU0FBWDtBQUFxQixlQUFHLEVBQUMsS0FBekI7QUFBK0IsaUJBQUssRUFBRSxHQUF0QztBQUEyQyxrQkFBTSxFQUFFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSSxxRUFBQywrQ0FBRDtBQUFPLHFCQUFTLEVBQUUsS0FBS0QsS0FBTCxDQUFXSyxXQUE3QjtBQUEwQyxvQkFBUSxFQUFFLENBQXBEO0FBQXVELHFCQUFTLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNRLFNBQUwsRUFBTjtBQUFBO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUEsc0JBREo7QUFZSDs7OztFQXZDK0JDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODQ4ODRlMTM0NzYxNTA0OGFiNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcidcclxuaW1wb3J0IEVuZW15IGZyb20gJy4vZW5lbXknXHJcbmltcG9ydCBGaWVsZCBmcm9tICcuL2ZpZWxkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhdHRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBlbmVteUhpdHRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBsYXllckhpdHRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHR1cm46IDAsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoaXRGaWVsZCA9IGhpdCA9PiB7XHJcbiAgICAgICBoaXQgJiYgdGhpcy5zdGF0ZS50dXJuID09PSAwID8gdGhpcy5zZXRTdGF0ZSh7ZW5lbXlIaXR0ZWQ6IHRydWV9KSA6IGFsZXJ0KCdFcnJvdSBNaXNlcmF2aSEnKSBcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2hIaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS50dXJuID09PSAwID8gdGhpcy5zZXRTdGF0ZSh7ZW5lbXlIaXR0ZWQ6IGZhbHNlfSkgOlxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXJIaXR0ZWQ6IGZhbHNlfSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBoYXNWaXJ1cz17dGhpcy5wcm9wcy5oYXNWaXJ1c31cclxuICAgICAgICAgICAgICAgICAgICBkaWZpY3VsdD17dGhpcy5wcm9wcy5kaWZpY3VsdH0gaGl0PXtoaXQgPT4gdGhpcy5oaXRGaWVsZChoaXQpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWdodEJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYXllciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy92cy5qcGcnIGFsdD0nbWV0JyB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8RW5lbXkgaGFzSGl0dGVkPXt0aGlzLnByb3BzLmVuZW15SGl0dGVkfSBoaXRQb2ludD17M30gZmluaXNoSGl0PXsoKSA9PiB0aGlzLmZpbmlzaEhpdCgpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=