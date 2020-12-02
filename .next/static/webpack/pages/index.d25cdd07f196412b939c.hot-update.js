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
        alert('você Ganhou!');
      } else {
        var hpbar = [];

        for (var i = 1; i > newHp; i++) {
          hpbar.push(i);
        }

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
          lineNumber: 48,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_10___default.a.bar,
          children: this.state.hpLength.map(function (hp) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              className: _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_10___default.a.hp
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 33
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbmVteS5qcyJdLCJuYW1lcyI6WyJFbmVteSIsInByb3BzIiwiaGl0IiwibmV3SHAiLCJzdGF0ZSIsImhwIiwic2V0U3RhdGUiLCJhbGVydCIsImhwYmFyIiwiaSIsInB1c2giLCJocExlbmd0aCIsImF0dGFjayIsInN0cmVuZ2h0IiwiaGFzSGl0dGVkIiwibG9zZUhwIiwiaGl0UG9pbnQiLCJmaW5pc2hIaXQiLCJzdHlsZSIsImJveCIsImJhciIsIm1hcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFHcUJBLEs7Ozs7O0FBRWpCLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsaVVBU1YsVUFBQUMsR0FBRyxFQUFJO0FBQ1osVUFBSUMsS0FBSyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsRUFBWCxHQUFnQkgsR0FBNUI7O0FBQ0EsWUFBS0ksUUFBTCxDQUFjO0FBQ1ZELFVBQUUsRUFBRUY7QUFETSxPQUFkOztBQUlBLFVBQUdBLEtBQUssSUFBSSxDQUFaLEVBQWU7QUFDWEksYUFBSyxDQUFDLGNBQUQsQ0FBTDtBQUNILE9BRkQsTUFFTztBQUNILFlBQUlDLEtBQUssR0FBRyxFQUFaOztBQUNBLGFBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sS0FBcEIsRUFBMkJNLENBQUMsRUFBNUIsRUFBZ0M7QUFDNUJELGVBQUssQ0FBQ0UsSUFBTixDQUFXRCxDQUFYO0FBQ0g7O0FBQ0QsY0FBS0gsUUFBTCxDQUFjO0FBQUNLLGtCQUFRLEVBQUVIO0FBQVgsU0FBZDtBQUNIO0FBQ0osS0F4QmtCOztBQUFBLGlVQTBCVixZQUFNO0FBQ1gsWUFBS1AsS0FBTCxDQUFXVyxNQUFYLENBQWtCLE1BQUtSLEtBQUwsQ0FBV1MsUUFBN0I7QUFDSCxLQTVCa0I7O0FBRWYsVUFBS1QsS0FBTCxHQUFhO0FBQ1RDLFFBQUUsRUFBRSxFQURLO0FBRVRNLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEVBQTVCLENBRkQ7QUFHVEUsY0FBUSxFQUFFLE1BQUtaLEtBQUwsQ0FBV1k7QUFIWixLQUFiO0FBRmU7QUFPbEI7Ozs7NkJBdUJRO0FBQUE7O0FBRUwsVUFBRyxLQUFLWixLQUFMLENBQVdhLFNBQWQsRUFBd0I7QUFDcEJQLGFBQUssQ0FBQyxrQkFBRCxDQUFMO0FBQ0EsYUFBS1EsTUFBTCxDQUFZLEtBQUtkLEtBQUwsQ0FBV2UsUUFBdkI7QUFDQSxhQUFLZixLQUFMLENBQVdnQixTQUFYO0FBQ0g7O0FBRUQsMEJBQ0k7QUFBSyxpQkFBUyxFQUFFQyxpRUFBSyxDQUFDQyxHQUF0QjtBQUFBLGdDQUNJLHFFQUFDLGlEQUFEO0FBQU8sYUFBRyxFQUFDLFVBQVg7QUFBc0IsYUFBRyxFQUFDLEtBQTFCO0FBQWdDLGVBQUssRUFBRSxHQUF2QztBQUE0QyxnQkFBTSxFQUFFO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFHSTtBQUFLLG1CQUFTLEVBQUVELGlFQUFLLENBQUNFLEdBQXRCO0FBQUEsb0JBRVEsS0FBS2hCLEtBQUwsQ0FBV08sUUFBWCxDQUFvQlUsR0FBcEIsQ0FBd0IsVUFBQWhCLEVBQUUsRUFBSTtBQUMxQixnQ0FDSTtBQUFHLHVCQUFTLEVBQUVhLGlFQUFLLENBQUNiO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREo7QUFHSCxXQUpEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWVIOzs7O0VBdkQ4QmlCLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDI1Y2RkMDdmMTk2NDEyYjkzOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvRW5lbXkubW9kdWxlLnNhc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaHA6IDEwLFxyXG4gICAgICAgICAgICBocExlbmd0aDogWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSxcclxuICAgICAgICAgICAgc3RyZW5naHQ6IHRoaXMucHJvcHMuc3RyZW5naHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9zZUhwID0gaGl0ID0+IHtcclxuICAgICAgICBsZXQgbmV3SHAgPSB0aGlzLnN0YXRlLmhwIC0gaGl0XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGhwOiBuZXdIcFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKG5ld0hwIDw9IDApIHtcclxuICAgICAgICAgICAgYWxlcnQoJ3ZvY8OqIEdhbmhvdSEnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBocGJhciA9IFtdXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpID4gbmV3SHA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaHBiYXIucHVzaChpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hwTGVuZ3RoOiBocGJhcn0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmF0dGFjayh0aGlzLnN0YXRlLnN0cmVuZ2h0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5oYXNIaXR0ZWQpe1xyXG4gICAgICAgICAgICBhbGVydCgnaW5pbWlnbyBhdGluZ2lkbycpXHJcbiAgICAgICAgICAgIHRoaXMubG9zZUhwKHRoaXMucHJvcHMuaGl0UG9pbnQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmluaXNoSGl0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvbWV0LnBuZycgYWx0PSdtZXQnIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5iYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ocExlbmd0aC5tYXAoaHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLmhwfT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=