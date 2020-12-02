webpackHotUpdate_N_E("pages/index",{

/***/ "./components/enemy.js":
/*!*****************************!*\
  !*** ./components/enemy.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Enemy.module.sass */ "./styles/Enemy.module.sass");
/* harmony import */ var _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "C:\\Users\\Victor\\Desktop\\Projects\\megaman_pet\\components\\enemy.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Enemy = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Enemy, _React$Component);

  var _super = _createSuper(Enemy);

  function Enemy(props) {
    var _this;

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Enemy);

    _this = _super.call(this, props);

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "loseHp", function (hit) {
      var newHp = _this.state.hp - hit;

      _this.setState({
        hp: newHp
      });

      if (newHp <= 0) {
        _this.setState({
          hpLength: []
        });

        alert('você Ganhou!');
      } else {
        var hpbar = [];

        for (var i = 0; i <= newHp; i++) {
          hpbar.push(i);
        }

        console.log(hpbar);

        _this.setState({
          hpLength: hpbar
        });
      }
    });

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "attack", function () {
      _this.props.attack(_this.state.strenght);
    });

    _this.state = {
      hp: 10,
      hpLength: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      strenght: _this.props.strenght
    };
    return _this;
  }

  Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Enemy, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.hasHitted) {
        alert('inimigo atingido');
        this.loseHp(this.props.hitPoint);
        this.props.finishHit();
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_10___default.a.box,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
          src: "/met.png",
          alt: "met",
          width: 100,
          height: 100
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_10___default.a.bar,
          children: this.state.hpLength.map(function (hp) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              className: _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_10___default.a.hp
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 33
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this);
    }
  }]);

  return Enemy;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbmVteS5qcyJdLCJuYW1lcyI6WyJFbmVteSIsInByb3BzIiwiaGl0IiwibmV3SHAiLCJzdGF0ZSIsImhwIiwic2V0U3RhdGUiLCJocExlbmd0aCIsImFsZXJ0IiwiaHBiYXIiLCJpIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJhdHRhY2siLCJzdHJlbmdodCIsImhhc0hpdHRlZCIsImxvc2VIcCIsImhpdFBvaW50IiwiZmluaXNoSGl0Iiwic3R5bGUiLCJib3giLCJiYXIiLCJtYXAiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBR3FCQSxLOzs7OztBQUVqQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLGlVQVNWLFVBQUFDLEdBQUcsRUFBSTtBQUNaLFVBQUlDLEtBQUssR0FBRyxNQUFLQyxLQUFMLENBQVdDLEVBQVgsR0FBZ0JILEdBQTVCOztBQUNBLFlBQUtJLFFBQUwsQ0FBYztBQUNWRCxVQUFFLEVBQUVGO0FBRE0sT0FBZDs7QUFJQSxVQUFHQSxLQUFLLElBQUksQ0FBWixFQUFlO0FBQ1gsY0FBS0csUUFBTCxDQUFjO0FBQUNDLGtCQUFRLEVBQUU7QUFBWCxTQUFkOztBQUNBQyxhQUFLLENBQUMsY0FBRCxDQUFMO0FBQ0gsT0FIRCxNQUdPO0FBQ0gsWUFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsYUFBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLElBQUlQLEtBQXBCLEVBQTJCTyxDQUFDLEVBQTVCLEVBQWdDO0FBQzVCRCxlQUFLLENBQUNFLElBQU4sQ0FBV0QsQ0FBWDtBQUNIOztBQUNERSxlQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjs7QUFDQSxjQUFLSCxRQUFMLENBQWM7QUFBQ0Msa0JBQVEsRUFBRUU7QUFBWCxTQUFkO0FBQ0g7QUFDSixLQTFCa0I7O0FBQUEsaVVBNEJWLFlBQU07QUFDWCxZQUFLUixLQUFMLENBQVdhLE1BQVgsQ0FBa0IsTUFBS1YsS0FBTCxDQUFXVyxRQUE3QjtBQUNILEtBOUJrQjs7QUFFZixVQUFLWCxLQUFMLEdBQWE7QUFDVEMsUUFBRSxFQUFFLEVBREs7QUFFVEUsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsRUFBNUIsQ0FGRDtBQUdUUSxjQUFRLEVBQUUsTUFBS2QsS0FBTCxDQUFXYztBQUhaLEtBQWI7QUFGZTtBQU9sQjs7Ozs2QkF5QlE7QUFBQTs7QUFFTCxVQUFHLEtBQUtkLEtBQUwsQ0FBV2UsU0FBZCxFQUF3QjtBQUNwQlIsYUFBSyxDQUFDLGtCQUFELENBQUw7QUFDQSxhQUFLUyxNQUFMLENBQVksS0FBS2hCLEtBQUwsQ0FBV2lCLFFBQXZCO0FBQ0EsYUFBS2pCLEtBQUwsQ0FBV2tCLFNBQVg7QUFDSDs7QUFFRCwwQkFDSTtBQUFLLGlCQUFTLEVBQUVDLGlFQUFLLENBQUNDLEdBQXRCO0FBQUEsZ0NBQ0kscUVBQUMsaURBQUQ7QUFBTyxhQUFHLEVBQUMsVUFBWDtBQUFzQixhQUFHLEVBQUMsS0FBMUI7QUFBZ0MsZUFBSyxFQUFFLEdBQXZDO0FBQTRDLGdCQUFNLEVBQUU7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdJO0FBQUssbUJBQVMsRUFBRUQsaUVBQUssQ0FBQ0UsR0FBdEI7QUFBQSxvQkFFUSxLQUFLbEIsS0FBTCxDQUFXRyxRQUFYLENBQW9CZ0IsR0FBcEIsQ0FBd0IsVUFBQWxCLEVBQUUsRUFBSTtBQUMxQixnQ0FDSTtBQUFHLHVCQUFTLEVBQUVlLGlFQUFLLENBQUNmO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREo7QUFHSCxXQUpEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWVIOzs7O0VBekQ4Qm1CLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTAyNjFmYTk4YTc3NTgzZTM2NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvRW5lbXkubW9kdWxlLnNhc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaHA6IDEwLFxyXG4gICAgICAgICAgICBocExlbmd0aDogWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSxcclxuICAgICAgICAgICAgc3RyZW5naHQ6IHRoaXMucHJvcHMuc3RyZW5naHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9zZUhwID0gaGl0ID0+IHtcclxuICAgICAgICBsZXQgbmV3SHAgPSB0aGlzLnN0YXRlLmhwIC0gaGl0XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGhwOiBuZXdIcFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKG5ld0hwIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aHBMZW5ndGg6IFtdfSlcclxuICAgICAgICAgICAgYWxlcnQoJ3ZvY8OqIEdhbmhvdSEnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBocGJhciA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gbmV3SHA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaHBiYXIucHVzaChpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhwYmFyKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtocExlbmd0aDogaHBiYXJ9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hdHRhY2sodGhpcy5zdGF0ZS5zdHJlbmdodClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaGFzSGl0dGVkKXtcclxuICAgICAgICAgICAgYWxlcnQoJ2luaW1pZ28gYXRpbmdpZG8nKVxyXG4gICAgICAgICAgICB0aGlzLmxvc2VIcCh0aGlzLnByb3BzLmhpdFBvaW50KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmZpbmlzaEhpdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib3h9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL21ldC5wbmcnIGFsdD0nbWV0JyB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaHBMZW5ndGgubWFwKGhwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5ocH0+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9