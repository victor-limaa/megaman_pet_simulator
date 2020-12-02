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

  function Battle() {
    var _this;

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Battle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "hit", function (hit) {
      hit ? alert('Acertou Miseravi!!') : alert('Errou Miseravi!');
    });

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
          hit: function hit(h) {
            return _this2.hit(h);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "fightBox",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_player__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
            src: "/vs.jpg",
            alt: "met",
            width: 100,
            height: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_enemy__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXR0bGUuanMiXSwibmFtZXMiOlsiQmF0dGxlIiwiaGl0IiwiYWxlcnQiLCJwcm9wcyIsImhhc1ZpcnVzIiwiZGlmaWN1bHQiLCJoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs4VEFHWCxVQUFBQyxHQUFHLEVBQUk7QUFDVkEsU0FBRyxHQUFHQyxLQUFLLENBQUMsb0JBQUQsQ0FBUixHQUFpQ0EsS0FBSyxDQUFDLGlCQUFELENBQXpDO0FBQ0YsSzs7Ozs7Ozs2QkFFUTtBQUFBOztBQUVMLDBCQUNJO0FBQUEsZ0NBQ0kscUVBQUMsK0NBQUQ7QUFBTyxrQkFBUSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0MsUUFBNUI7QUFDSSxrQkFBUSxFQUFFLEtBQUtELEtBQUwsQ0FBV0UsUUFEekI7QUFDbUMsYUFBRyxFQUFFLGFBQUFDLENBQUM7QUFBQSxtQkFBSSxNQUFJLENBQUNMLEdBQUwsQ0FBU0ssQ0FBVCxDQUFKO0FBQUE7QUFEekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0kscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJLHFFQUFDLGtEQUFEO0FBQU8sZUFBRyxFQUFDLFNBQVg7QUFBcUIsZUFBRyxFQUFDLEtBQXpCO0FBQStCLGlCQUFLLEVBQUUsR0FBdEM7QUFBMkMsa0JBQU0sRUFBRTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0kscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQSxzQkFESjtBQVlIOzs7O0VBckIrQkMsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NDdjMDIzYjIyMjg2YjY2ZThmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJ1xyXG5pbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSdcclxuaW1wb3J0IEZpZWxkIGZyb20gJy4vZmllbGQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmF0dGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgaGl0ID0gaGl0ID0+IHtcclxuICAgICAgIGhpdCA/IGFsZXJ0KCdBY2VydG91IE1pc2VyYXZpISEnKSA6IGFsZXJ0KCdFcnJvdSBNaXNlcmF2aSEnKSBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgaGFzVmlydXM9e3RoaXMucHJvcHMuaGFzVmlydXN9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlmaWN1bHQ9e3RoaXMucHJvcHMuZGlmaWN1bHR9IGhpdD17aCA9PiB0aGlzLmhpdChoKX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlnaHRCb3gnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGF5ZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvdnMuanBnJyBhbHQ9J21ldCcgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVuZW15IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==