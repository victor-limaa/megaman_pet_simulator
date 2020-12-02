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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_12__);









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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_field__WEBPACK_IMPORTED_MODULE_10__["default"], {
            hasVirus: this.state.hasVirus,
            dificult: this.state.dificult
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "fightBox",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_player__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 26
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
              src: "/vs.jpg",
              alt: "met",
              width: 100,
              height: 100
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 26
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_enemy__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 26
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this)]
        }, void 0, true) : null]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwic2V0U3RhdGUiLCJoYXNWaXJ1cyIsInN0YXRlIiwiY2FuQ291bnQiLCJkaWZpY3VsdCIsInR1cm4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRWaXJ1cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxHOzs7OztBQUVGLGlCQUFhO0FBQUE7O0FBQUE7O0FBQ1Q7O0FBRFMsbVVBV0YsWUFBTTtBQUNiLFlBQUtDLFFBQUwsQ0FBYztBQUFDQyxnQkFBUSxFQUFFO0FBQVgsT0FBZDtBQUNILEtBYlk7O0FBRVQsVUFBS0MsS0FBTCxHQUFhO0FBQ1RELGNBQVEsRUFBRSxLQUREO0FBRVRFLGNBQVEsRUFBRSxLQUZEO0FBR1RDLGNBQVEsRUFBRSxFQUhEO0FBSVRDLFVBQUksRUFBRTtBQUpHLEtBQWI7QUFGUztBQVFaOzs7OzZCQVVPO0FBQUE7O0FBRUosMEJBQ0k7QUFBQSxnQ0FDSTtBQUFBLGtDQUNJO0FBQU8sb0JBQVEsRUFBRSxrQkFBQUMsQ0FBQztBQUFBLHFCQUFJLE1BQUksQ0FBQ04sUUFBTCxDQUFjO0FBQUNJLHdCQUFRLEVBQUVFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUFwQixlQUFkLENBQUo7QUFBQSxhQUFsQjtBQUFpRSxnQkFBSSxFQUFDLE9BQXRFO0FBQThFLGdCQUFJLEVBQUMsVUFBbkY7QUFBOEYsY0FBRSxFQUFDLE1BQWpHO0FBQXdHLGlCQUFLLEVBQUM7QUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU8sbUJBQUksTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUlJO0FBQU8sb0JBQVEsRUFBRSxrQkFBQUYsQ0FBQztBQUFBLHFCQUFJLE1BQUksQ0FBQ04sUUFBTCxDQUFjO0FBQUNJLHdCQUFRLEVBQUVFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUFwQixlQUFkLENBQUo7QUFBQSxhQUFsQjtBQUFpRSxnQkFBSSxFQUFDLE9BQXRFO0FBQThFLGdCQUFJLEVBQUMsVUFBbkY7QUFBOEYsY0FBRSxFQUFDLFFBQWpHO0FBQTBHLGlCQUFLLEVBQUM7QUFBaEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJO0FBQU8sbUJBQUksUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixlQU9JO0FBQU8sb0JBQVEsRUFBRSxrQkFBQUYsQ0FBQztBQUFBLHFCQUFJLE1BQUksQ0FBQ04sUUFBTCxDQUFjO0FBQUNJLHdCQUFRLEVBQUVFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUFwQixlQUFkLENBQUo7QUFBQSxhQUFsQjtBQUFpRSxnQkFBSSxFQUFDLE9BQXRFO0FBQThFLGdCQUFJLEVBQUMsVUFBbkY7QUFBOEYsY0FBRSxFQUFDLE1BQWpHO0FBQXdHLGlCQUFLLEVBQUM7QUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSixlQVFJO0FBQU8sbUJBQUksTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFXSTtBQUFRLGlCQUFPLEVBQUUsS0FBS0MsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEosRUFjUSxLQUFLUCxLQUFMLENBQVdELFFBQVgsZ0JBQ0E7QUFBQSxrQ0FDSSxxRUFBQywwREFBRDtBQUFPLG9CQUFRLEVBQUUsS0FBS0MsS0FBTCxDQUFXRCxRQUE1QjtBQUNDLG9CQUFRLEVBQUUsS0FBS0MsS0FBTCxDQUFXRTtBQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBSUk7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxvQ0FDQyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBRUMscUVBQUMsa0RBQUQ7QUFBTyxpQkFBRyxFQUFDLFNBQVg7QUFBcUIsaUJBQUcsRUFBQyxLQUF6QjtBQUErQixtQkFBSyxFQUFFLEdBQXRDO0FBQTJDLG9CQUFNLEVBQUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRCxlQUdDLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUEsd0JBREEsR0FXRSxJQXpCVjtBQUFBLHNCQURKO0FBK0JIOzs7O0VBckRhTSw0Q0FBSyxDQUFDQyxTOztBQXdEVFosa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTgwNGZiNmRiNDY3NzZiNjZkZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEVuZW15IGZyb20gJy4uL2NvbXBvbmVudHMvZW5lbXknXHJcbmltcG9ydCBGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL2ZpZWxkJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvcGxheWVyJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaGFzVmlydXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5Db3VudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpZmljdWx0OiAnJyxcclxuICAgICAgICAgICAgdHVybjogbnVsbCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFZpcnVzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2hhc1ZpcnVzOiB0cnVlfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZGlmaWN1bHQ6IGUudGFyZ2V0LnZhbHVlfSl9IHR5cGU9J3JhZGlvJyBuYW1lPSdkaWZpY3VsdCcgaWQ9J2Vhc3knIHZhbHVlPSdlYXN5Jz48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9J2Vhc3knPkbDoWNpbDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtkaWZpY3VsdDogZS50YXJnZXQudmFsdWV9KX0gdHlwZT0ncmFkaW8nIG5hbWU9J2RpZmljdWx0JyBpZD0nbWVkaXVtJyB2YWx1ZT0nbWVkaXVtJz48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9J21lZGl1bSc+TcOpZGlvPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe2RpZmljdWx0OiBlLnRhcmdldC52YWx1ZX0pfSB0eXBlPSdyYWRpbycgbmFtZT0nZGlmaWN1bHQnIGlkPSdoYXJkJyB2YWx1ZT0naGFyZCc+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdoYXJkJz5EaWbDrWNpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nZXRWaXJ1c30+VmVyaWZpY2FyIFbDrXJ1czwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhhc1ZpcnVzID9cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgaGFzVmlydXM9e3RoaXMuc3RhdGUuaGFzVmlydXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkaWZpY3VsdD17dGhpcy5zdGF0ZS5kaWZpY3VsdH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWdodEJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8UGxheWVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvdnMuanBnJyBhbHQ9J21ldCcgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8RW5lbXkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJzb3VyY2VSb290IjoiIn0=