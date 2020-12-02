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

  function Enemy() {
    var _this;

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Enemy);

    _this = _super.call(this);

    Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "loseHp", function (hit) {
      var newHp = _this.state.hp - hit;

      _this.setState({
        hp: newHp
      });

      if (newHp <= 0) {
        alert('você Ganhou!');
      } else {
        _this.setState({
          hpLength: []
        });

        for (var i = 1; i > newHp; i++) {
          _this.state.hpLength.push(i);
        }
      }
    });

    _this.state = {
      hp: 10,
      hpLength: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
    return _this;
  }

  Object(C_Users_Victor_Desktop_Projects_megaman_pet_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Enemy, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_10___default.a.box,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
          src: "/met.jpg",
          alt: "met",
          width: 100,
          height: 100
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_10___default.a.bar,
          children: this.state.hpLength.map(function (hp) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              className: _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_10___default.a.hp
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 33
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Enemy.module.sass":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Enemy.module.sass ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Enemy_bar__1VPLT {\n  background-color: #1acc03;\n  width: 100px;\n  height: 40px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.Enemy_hp__2yZyM {\n  background-color: #bfff76;\n  width: 6px;\n  height: 30px;\n}\n\n.Enemy_box__6y-Pr {\n  background-color: #1258da;\n  display: flex;\n  flex-direction: column;\n  width: 120px;\n  height: 180px;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n}", "",{"version":3,"sources":["webpack://Enemy.module.sass"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AACJ;;AACA;EACI,yBAAA;EACA,UAAA;EACA,YAAA;AAEJ;;AAAA;EACI,yBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAGJ","sourcesContent":[".bar\r\n    background-color: #1acc03\r\n    width: 100px\r\n    height: 40px\r\n    display: flex\r\n    justify-content: space-evenly\r\n    align-items: center\r\n\r\n.hp\r\n    background-color: #bfff76\r\n    width: 6px\r\n    height: 30px\r\n\r\n.box\r\n    background-color: #1258da\r\n    display: flex\r\n    flex-direction: column\r\n    width: 120px\r\n    height: 180px\r\n    justify-content: center\r\n    align-items: center\r\n    margin: 10px"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"bar": "Enemy_bar__1VPLT",
	"hp": "Enemy_hp__2yZyM",
	"box": "Enemy_box__6y-Pr"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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
            lineNumber: 31,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            "for": "easy",
            children: "F\xE1cil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
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
            lineNumber: 34,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            "for": "medium",
            children: "M\xE9dio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
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
            lineNumber: 37,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            "for": "hard",
            children: "Dif\xEDcil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          onClick: this.getVirus,
          children: "Verificar V\xEDrus"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, this), this.state.hasVirus ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_field__WEBPACK_IMPORTED_MODULE_10__["default"], {
            hasVirus: this.state.hasVirus,
            dificult: this.state.dificult
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_player__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_enemy__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 26
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

/***/ }),

/***/ "./styles/Enemy.module.sass":
/*!**********************************!*\
  !*** ./styles/Enemy.module.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Enemy.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Enemy.module.sass");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Enemy.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Enemy.module.sass",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Enemy.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Enemy.module.sass");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbmVteS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0VuZW15Lm1vZHVsZS5zYXNzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0VuZW15Lm1vZHVsZS5zYXNzPzc2NDgiXSwibmFtZXMiOlsiRW5lbXkiLCJoaXQiLCJuZXdIcCIsInN0YXRlIiwiaHAiLCJzZXRTdGF0ZSIsImFsZXJ0IiwiaHBMZW5ndGgiLCJpIiwicHVzaCIsInN0eWxlIiwiYm94IiwiYmFyIiwibWFwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJBcHAiLCJoYXNWaXJ1cyIsImNhbkNvdW50IiwiZGlmaWN1bHQiLCJ0dXJuIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VmlydXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUdxQkEsSzs7Ozs7QUFFakIsbUJBQWM7QUFBQTs7QUFBQTs7QUFDVjs7QUFEVSxpVUFRTCxVQUFBQyxHQUFHLEVBQUk7QUFDWixVQUFJQyxLQUFLLEdBQUcsTUFBS0MsS0FBTCxDQUFXQyxFQUFYLEdBQWdCSCxHQUE1Qjs7QUFDQSxZQUFLSSxRQUFMLENBQWM7QUFDVkQsVUFBRSxFQUFFRjtBQURNLE9BQWQ7O0FBSUEsVUFBR0EsS0FBSyxJQUFJLENBQVosRUFBZTtBQUNYSSxhQUFLLENBQUMsY0FBRCxDQUFMO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsY0FBS0QsUUFBTCxDQUFjO0FBQUNFLGtCQUFRLEVBQUU7QUFBWCxTQUFkOztBQUNBLGFBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sS0FBcEIsRUFBMkJNLENBQUMsRUFBNUIsRUFBZ0M7QUFDNUIsZ0JBQUtMLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkUsSUFBcEIsQ0FBeUJELENBQXpC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a0JBSkwsZUFNSyxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5MO0FBQUEsd0JBREEsR0FTRSxJQXZCVjtBQUFBLHNCQURKO0FBNkJIOzs7O0VBbkRhTCw0Q0FBSyxDQUFDQyxTOztBQXNEVEMsa0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsK2RBQW1SOztBQUVyVDs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwrZEFBbVI7QUFDelI7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQywrZEFBbVI7O0FBRTdTOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2Y0N2M5M2FiMWVkYTliODliZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvRW5lbXkubW9kdWxlLnNhc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBocDogMTAsXHJcbiAgICAgICAgICAgIGhwTGVuZ3RoOiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb3NlSHAgPSBoaXQgPT4ge1xyXG4gICAgICAgIGxldCBuZXdIcCA9IHRoaXMuc3RhdGUuaHAgLSBoaXRcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaHA6IG5ld0hwXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYobmV3SHAgPD0gMCkge1xyXG4gICAgICAgICAgICBhbGVydCgndm9jw6ogR2FuaG91IScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aHBMZW5ndGg6IFtdfSlcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPiBuZXdIcDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhwTGVuZ3RoLnB1c2goaSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib3h9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL21ldC5qcGcnIGFsdD0nbWV0JyB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaHBMZW5ndGgubWFwKGhwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5ocH0+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuRW5lbXlfYmFyX18xVlBMVCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFjYzAzO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkVuZW15X2hwX18yeVp5TSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZmZjc2O1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLkVuZW15X2JveF9fNnktUHIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyNThkYTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxODBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0VuZW15Lm1vZHVsZS5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFHSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmFyXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWNjMDNcXHJcXG4gICAgd2lkdGg6IDEwMHB4XFxyXFxuICAgIGhlaWdodDogNDBweFxcclxcbiAgICBkaXNwbGF5OiBmbGV4XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG5cXHJcXG4uaHBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmZmY3NlxcclxcbiAgICB3aWR0aDogNnB4XFxyXFxuICAgIGhlaWdodDogMzBweFxcclxcblxcclxcbi5ib3hcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyNThkYVxcclxcbiAgICBkaXNwbGF5OiBmbGV4XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXHJcXG4gICAgd2lkdGg6IDEyMHB4XFxyXFxuICAgIGhlaWdodDogMTgwcHhcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcclxcbiAgICBtYXJnaW46IDEwcHhcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJiYXJcIjogXCJFbmVteV9iYXJfXzFWUExUXCIsXG5cdFwiaHBcIjogXCJFbmVteV9ocF9fMnlaeU1cIixcblx0XCJib3hcIjogXCJFbmVteV9ib3hfXzZ5LVByXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vY29tcG9uZW50cy9lbmVteSdcclxuaW1wb3J0IEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvZmllbGQnXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wbGF5ZXInXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGhhc1ZpcnVzOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FuQ291bnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaWZpY3VsdDogJycsXHJcbiAgICAgICAgICAgIHR1cm46IG51bGwsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRWaXJ1cyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtoYXNWaXJ1czogdHJ1ZX0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe2RpZmljdWx0OiBlLnRhcmdldC52YWx1ZX0pfSB0eXBlPSdyYWRpbycgbmFtZT0nZGlmaWN1bHQnIGlkPSdlYXN5JyB2YWx1ZT0nZWFzeSc+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdlYXN5Jz5Gw6FjaWw8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZGlmaWN1bHQ6IGUudGFyZ2V0LnZhbHVlfSl9IHR5cGU9J3JhZGlvJyBuYW1lPSdkaWZpY3VsdCcgaWQ9J21lZGl1bScgdmFsdWU9J21lZGl1bSc+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdtZWRpdW0nPk3DqWRpbzwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtkaWZpY3VsdDogZS50YXJnZXQudmFsdWV9KX0gdHlwZT0ncmFkaW8nIG5hbWU9J2RpZmljdWx0JyBpZD0naGFyZCcgdmFsdWU9J2hhcmQnPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0naGFyZCc+RGlmw61jaWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZ2V0VmlydXN9PlZlcmlmaWNhciBWw61ydXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oYXNWaXJ1cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGhhc1ZpcnVzPXt0aGlzLnN0YXRlLmhhc1ZpcnVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlmaWN1bHQ9e3RoaXMuc3RhdGUuZGlmaWN1bHR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXllciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxFbmVteSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRW5lbXkubW9kdWxlLnNhc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRW5lbXkubW9kdWxlLnNhc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRW5lbXkubW9kdWxlLnNhc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==