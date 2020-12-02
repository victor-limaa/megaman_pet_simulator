module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/Battle.js":
/*!******************************!*\
  !*** ./components/Battle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Battle; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./components/player.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemy */ "./components/enemy.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field */ "./components/field.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Victor\\Desktop\\Projects\\megaman_pet\\components\\Battle.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Battle extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "hitField", hit => {
      hit && this.state.turn === 0 ? this.setState({
        enemyHitted: true
      }) : alert('Errou Miseravi!');
      hit && this.state.turn === 1 ? this.setState({
        playerHitted: true
      }) : alert('Errou Miseravi!');
    });

    _defineProperty(this, "finishHit", () => {
      this.state.turn === 0 ? this.setState({
        enemyHitted: false
      }) : this.setState({
        playerHitted: false
      });
      alert('fim de turno');
    });

    this.state = {
      enemyHitted: false,
      playerHitted: false,
      turn: 0
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_field__WEBPACK_IMPORTED_MODULE_4__["default"], {
        hasVirus: this.props.hasVirus,
        dificult: this.props.dificult,
        hit: hit => this.hitField(hit)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "fightBox",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_player__WEBPACK_IMPORTED_MODULE_2__["default"], {
          hasHitted: this.state.playerHitted,
          hitPoint: 3,
          finishHit: this.finishHit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          src: "/vs.jpg",
          alt: "met",
          width: 100,
          height: 100
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_enemy__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

}

/***/ }),

/***/ "./components/enemy.js":
/*!*****************************!*\
  !*** ./components/enemy.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Enemy.module.sass */ "./styles/Enemy.module.sass");
/* harmony import */ var _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Victor\\Desktop\\Projects\\megaman_pet\\components\\enemy.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Enemy extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "loseHp", hit => {
      let newHp = this.state.hp - hit;
      this.setState({
        hp: newHp
      });

      if (newHp <= 0) {
        this.setState({
          hpLength: []
        });
        alert('você Ganhou!');
      } else {
        let hpbar = [];

        for (let i = 0; i <= newHp; i++) {
          hpbar.push(i);
        }

        console.log(hpbar);
        this.setState({
          hpLength: hpbar
        });
      }
    });

    _defineProperty(this, "attack", () => {
      this.props.attack(this.state.strenght);
    });

    this.state = {
      hp: 10,
      hpLength: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      strenght: this.props.strenght
    };
  }

  render() {
    if (this.props.hasHitted) {
      alert('inimigo atingido');
      this.loseHp(this.props.hitPoint);
      this.props.finishHit();
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.box,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: "/met.png",
        alt: "met",
        width: 100,
        height: 100
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.bar,
        children: this.state.hpLength.map(hp => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Enemy_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.hp
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 33
          }, this);
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

}

/***/ }),

/***/ "./components/field.js":
/*!*****************************!*\
  !*** ./components/field.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Field_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Field.module.css */ "./styles/Field.module.css");
/* harmony import */ var _styles_Field_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Field_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Victor\\Desktop\\Projects\\megaman_pet\\components\\field.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Field extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "hit", pos => {
      if (this.state.virusPosition === pos) {
        alert('acertou');
        this.props.hit(true);
        this.setState({
          virusPosition: this.props.dificult === 'easy' ? Math.floor(Math.random() * (3 - 1)) + 1 : this.props.dificult === 'medium' ? Math.floor(Math.random() * (5 - 1)) + 1 : this.props.dificult === 'hard' ? Math.floor(Math.random() * (10 - 1)) + 1 : null,
          chance: this.props.dificult === 'easy' ? 0 : this.props.dificult === 'medium' ? 1 : this.props.dificult === 'hard' ? 2 : 0
        });
      } else {
        alert('errou');
        this.props.hit(false);
        if (this.state.chance > 0) this.setState({
          chance: this.state.chance - 1
        });

        if (this.state.chance === 0) {
          this.setState({
            virusPosition: this.props.dificult === 'easy' ? Math.floor(Math.random() * (3 - 1)) + 1 : this.props.dificult === 'medium' ? Math.floor(Math.random() * (5 - 1)) + 1 : this.props.dificult === 'hard' ? Math.floor(Math.random() * (10 - 1)) + 1 : null
          });
          this.setState({
            chance: this.props.dificult === 'easy' ? 0 : this.props.dificult === 'medium' ? 1 : this.props.dificult === 'hard' ? 2 : 0
          });
        }
      }
    });

    this.state = {
      field: this.props.dificult === 'hard' ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : this.props.dificult === 'medium' ? [1, 2, 3, 4] : this.props.dificult === 'easy' ? [1, 2] : [],
      virusPosition: this.props.dificult === 'easy' ? Math.floor(Math.random() * (3 - 1)) + 1 : this.props.dificult === 'medium' ? Math.floor(Math.random() * (5 - 1)) + 1 : this.props.dificult === 'hard' ? Math.floor(Math.random() * (10 - 1)) + 1 : null,
      chance: this.props.dificult === 'easy' ? 0 : this.props.dificult === 'medium' ? 1 : this.props.dificult === 'hard' ? 2 : 0
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: this.props.dificult === 'hard' ? _styles_Field_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.field3 : _styles_Field_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.field2,
      children: this.state.field.map((f, i) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_Field_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.area,
          onClick: () => this.hit(f)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./components/player.js":
/*!******************************!*\
  !*** ./components/player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Player_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Player.module.sass */ "./styles/Player.module.sass");
/* harmony import */ var _styles_Player_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Player_module_sass__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Victor\\Desktop\\Projects\\megaman_pet\\components\\player.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Player extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "loseHp", hit => {
      let newHp = this.state.hp - hit;
      this.setState({
        hp: newHp
      });

      if (newHp <= 0) {
        alert('você perdeu!');
      } else {
        this.setState({
          hpLength: []
        });

        for (let i = 1; i > newHp; i++) {
          this.state.hpLength.push(i);
        }
      }
    });

    _defineProperty(this, "attack", () => {
      this.props.attack(this.state.strenght);
    });

    this.state = {
      hp: 10,
      hpLength: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      strenght: this.props.strenght
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Player_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.box,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: "/hero.jpg",
        alt: "hero",
        width: 100,
        height: 100
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Player_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.bar,
        children: this.state.hpLength.map(hp => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Player_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.hp
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 33
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set([width, width * 2, width * 3].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function callLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes
}) {
  if (unoptimized) {
    return {
      src
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  const srcSet = widths.map((w, i) => `${callLoader({
    src,
    quality,
    width: w
  })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ');

  if (!sizes && kind === 'w') {
    sizes = widths.map((w, i) => i === last ? `${w}px` : `(max-width: ${w}px) ${w}px`).join(', ');
  }

  src = callLoader({
    src,
    quality,
    width: widths[last]
  });
  return {
    src,
    sizes,
    srcSet
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })));
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width];
  let paramsString = '';

  if (quality) {
    params.push('q_' + quality);
  }

  if (params.length) {
    paramsString = params.join(',') + '/';
  }

  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/enemy */ "./components/enemy.js");
/* harmony import */ var _components_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/field */ "./components/field.js");
/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/player */ "./components/player.js");
/* harmony import */ var _components_Battle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Battle */ "./components/Battle.js");


var _jsxFileName = "C:\\Users\\Victor\\Desktop\\Projects\\megaman_pet\\pages\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "getVirus", () => {
      this.setState({
        hasVirus: true
      });
    });

    this.state = {
      hasVirus: false,
      canCount: false,
      dificult: '',
      turn: null
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: e => this.setState({
            dificult: e.target.value
          }),
          type: "radio",
          name: "dificult",
          id: "easy",
          value: "easy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          for: "easy",
          children: "F\xE1cil"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: e => this.setState({
            dificult: e.target.value
          }),
          type: "radio",
          name: "dificult",
          id: "medium",
          value: "medium"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          for: "medium",
          children: "M\xE9dio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: e => this.setState({
            dificult: e.target.value
          }),
          type: "radio",
          name: "dificult",
          id: "hard",
          value: "hard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          for: "hard",
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: this.getVirus,
        children: "Verificar V\xEDrus"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), this.state.hasVirus ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Battle__WEBPACK_IMPORTED_MODULE_5__["default"], {
          hasVirus: this.state.hasVirus,
          dificult: this.state.dificult
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, this)
      }, void 0, false) : null]
    }, void 0, true);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./styles/Enemy.module.sass":
/*!**********************************!*\
  !*** ./styles/Enemy.module.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bar": "Enemy_bar__1VPLT",
	"hp": "Enemy_hp__2yZyM",
	"box": "Enemy_box__6y-Pr"
};


/***/ }),

/***/ "./styles/Field.module.css":
/*!*********************************!*\
  !*** ./styles/Field.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"field3": "Field_field3__36XrL",
	"field2": "Field_field2__2PSc-",
	"area": "Field_area__1FzNt"
};


/***/ }),

/***/ "./styles/Player.module.sass":
/*!***********************************!*\
  !*** ./styles/Player.module.sass ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bar": "Player_bar__18VJg",
	"hp": "Player_hp__kKEF0",
	"box": "Player_box__3hWn6"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JhdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9FbmVteS5tb2R1bGUuc2FzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRmllbGQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUGxheWVyLm1vZHVsZS5zYXNzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQmF0dGxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaGl0Iiwic3RhdGUiLCJ0dXJuIiwic2V0U3RhdGUiLCJlbmVteUhpdHRlZCIsImFsZXJ0IiwicGxheWVySGl0dGVkIiwicmVuZGVyIiwiaGFzVmlydXMiLCJkaWZpY3VsdCIsImhpdEZpZWxkIiwiZmluaXNoSGl0IiwiRW5lbXkiLCJuZXdIcCIsImhwIiwiaHBMZW5ndGgiLCJocGJhciIsImkiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImF0dGFjayIsInN0cmVuZ2h0IiwiaGFzSGl0dGVkIiwibG9zZUhwIiwiaGl0UG9pbnQiLCJzdHlsZSIsImJveCIsImJhciIsIm1hcCIsIkZpZWxkIiwicG9zIiwidmlydXNQb3NpdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNoYW5jZSIsImZpZWxkIiwiY29tcG9uZW50RGlkTW91bnQiLCJmaWVsZDMiLCJmaWVsZDIiLCJmIiwiYXJlYSIsIlBsYXllciIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsImxheW91dCIsIndpZHRocyIsImtpbmQiLCJ3aWR0aCIsInciLCJwIiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyY1NldCIsImNhbGxMb2FkZXIiLCJzaXplcyIsInNyYyIsInBhcnNlSW50IiwidW5vcHRpbWl6ZWQiLCJwcmlvcml0eSIsImFsbCIsInJlc3QiLCJ1bnNpemVkIiwiQm9vbGVhbiIsIkpTT04iLCJsb2FkaW5nIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJzZXRSZWYiLCJlbCIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIkFwcCIsImNhbkNvdW50IiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0VmlydXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJ1xyXG5pbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSdcclxuaW1wb3J0IEZpZWxkIGZyb20gJy4vZmllbGQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmF0dGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGVuZW15SGl0dGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcGxheWVySGl0dGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgdHVybjogMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhpdEZpZWxkID0gaGl0ID0+IHtcclxuICAgICAgIGhpdCAmJiB0aGlzLnN0YXRlLnR1cm4gPT09IDAgPyB0aGlzLnNldFN0YXRlKHtlbmVteUhpdHRlZDogdHJ1ZX0pIDogYWxlcnQoJ0Vycm91IE1pc2VyYXZpIScpXHJcbiAgICAgICBoaXQgJiYgdGhpcy5zdGF0ZS50dXJuID09PSAxID8gdGhpcy5zZXRTdGF0ZSh7cGxheWVySGl0dGVkOiB0cnVlfSkgOiBhbGVydCgnRXJyb3UgTWlzZXJhdmkhJylcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2hIaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS50dXJuID09PSAwID9cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5lbXlIaXR0ZWQ6IGZhbHNlfSlcclxuICAgICAgICA6IHRoaXMuc2V0U3RhdGUoe3BsYXllckhpdHRlZDogZmFsc2V9KVxyXG4gICAgICAgIGFsZXJ0KCdmaW0gZGUgdHVybm8nKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBoYXNWaXJ1cz17dGhpcy5wcm9wcy5oYXNWaXJ1c31cclxuICAgICAgICAgICAgICAgICAgICBkaWZpY3VsdD17dGhpcy5wcm9wcy5kaWZpY3VsdH0gaGl0PXtoaXQgPT4gdGhpcy5oaXRGaWVsZChoaXQpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWdodEJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYXllciBoYXNIaXR0ZWQ9e3RoaXMuc3RhdGUucGxheWVySGl0dGVkfSBoaXRQb2ludD17M30gZmluaXNoSGl0PXt0aGlzLmZpbmlzaEhpdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvdnMuanBnJyBhbHQ9J21ldCcgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVuZW15IGhhc0hpdHRlZD17dGhpcy5zdGF0ZS5lbmVteUhpdHRlZH0gaGl0UG9pbnQ9ezN9IGZpbmlzaEhpdD17dGhpcy5maW5pc2hIaXR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9FbmVteS5tb2R1bGUuc2FzcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBocDogMTAsXHJcbiAgICAgICAgICAgIGhwTGVuZ3RoOiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdLFxyXG4gICAgICAgICAgICBzdHJlbmdodDogdGhpcy5wcm9wcy5zdHJlbmdodFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb3NlSHAgPSBoaXQgPT4ge1xyXG4gICAgICAgIGxldCBuZXdIcCA9IHRoaXMuc3RhdGUuaHAgLSBoaXRcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaHA6IG5ld0hwXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYobmV3SHAgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtocExlbmd0aDogW119KVxyXG4gICAgICAgICAgICBhbGVydCgndm9jw6ogR2FuaG91IScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGhwYmFyID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBuZXdIcDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBocGJhci5wdXNoKGkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coaHBiYXIpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hwTGVuZ3RoOiBocGJhcn0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmF0dGFjayh0aGlzLnN0YXRlLnN0cmVuZ2h0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5oYXNIaXR0ZWQpe1xyXG4gICAgICAgICAgICBhbGVydCgnaW5pbWlnbyBhdGluZ2lkbycpXHJcbiAgICAgICAgICAgIHRoaXMubG9zZUhwKHRoaXMucHJvcHMuaGl0UG9pbnQpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmluaXNoSGl0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvbWV0LnBuZycgYWx0PSdtZXQnIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5iYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ocExlbmd0aC5tYXAoaHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLmhwfT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9GaWVsZC5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcblxyXG5jbGFzcyBGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBmaWVsZDogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2hhcmQnID8gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnbWVkaXVtJyA/IFsxLCAyLCAzLCA0XSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2Vhc3knID8gWzEsIDJdIDogW10sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2aXJ1c1Bvc2l0aW9uOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnZWFzeScgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMyAtIDEpKSArIDEgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ21lZGl1bScgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNSAtIDEpKSArIDEgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2hhcmQnID8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkpICsgMSA6IG51bGwsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjaGFuY2U6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdlYXN5JyA/IDAgOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnbWVkaXVtJyA/IDEgOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyAyIDogMCxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpdCA9IHBvcyA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS52aXJ1c1Bvc2l0aW9uID09PSBwb3MpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ2FjZXJ0b3UnKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpdCh0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZpcnVzUG9zaXRpb246IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdlYXN5JyA/IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzIC0gMSkpICsgMSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ21lZGl1bScgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNSAtIDEpKSArIDEgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdoYXJkJyA/IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpKSArIDEgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2hhbmNlOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnZWFzeScgPyAwIDogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ21lZGl1bScgPyAxIDogdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2hhcmQnID8gMiA6IDAsfSlcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ2Vycm91JylcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXQoZmFsc2UpXHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuY2hhbmNlID4gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NoYW5jZTogdGhpcy5zdGF0ZS5jaGFuY2UgLSAxfSlcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5jaGFuY2UgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZpcnVzUG9zaXRpb246IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdlYXN5JyA/IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzIC0gMSkpICsgMSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ21lZGl1bScgPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNSAtIDEpKSArIDEgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdoYXJkJyA/IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpKSArIDEgOiBudWxsLH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjaGFuY2U6IHRoaXMucHJvcHMuZGlmaWN1bHQgPT09ICdlYXN5JyA/IDAgOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnbWVkaXVtJyA/IDEgOiB0aGlzLnByb3BzLmRpZmljdWx0ID09PSAnaGFyZCcgPyAyIDogMCx9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5kaWZpY3VsdCA9PT0gJ2hhcmQnID8gc3R5bGUuZmllbGQzIDogc3R5bGUuZmllbGQyfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZpZWxkLm1hcCgoZiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpfSBjbGFzc05hbWU9e3N0eWxlLmFyZWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhpdChmKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL1BsYXllci5tb2R1bGUuc2FzcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaHA6IDEwLFxyXG4gICAgICAgICAgICBocExlbmd0aDogWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSxcclxuICAgICAgICAgICAgc3RyZW5naHQ6IHRoaXMucHJvcHMuc3RyZW5naHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9zZUhwID0gaGl0ID0+IHtcclxuICAgICAgICBsZXQgbmV3SHAgPSB0aGlzLnN0YXRlLmhwIC0gaGl0XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGhwOiBuZXdIcFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKG5ld0hwIDw9IDApIHtcclxuICAgICAgICAgICAgYWxlcnQoJ3ZvY8OqIHBlcmRldSEnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hwTGVuZ3RoOiBbXX0pXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpID4gbmV3SHA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ocExlbmd0aC5wdXNoKGkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuYXR0YWNrKHRoaXMuc3RhdGUuc3RyZW5naHQpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaGVyby5qcGcnIGFsdD0naGVybycgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhwTGVuZ3RoLm1hcChocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuaHB9PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxMb2FkZXJWYWx1ZSwgKHByb3BzOiBMb2FkZXJQcm9wcykgPT4gc3RyaW5nPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiwgd2lkdGggKiAzXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgQ2FsbExvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxuZnVuY3Rpb24gY2FsbExvYWRlcihsb2FkZXJQcm9wczogQ2FsbExvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IFBpY2s8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NpemVzJyB8ICdzcmNTZXQnXG4+XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dClcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgY29uc3Qgc3JjU2V0ID0gd2lkdGhzXG4gICAgLm1hcChcbiAgICAgICh3LCBpKSA9PlxuICAgICAgICBgJHtjYWxsTG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgfSR7a2luZH1gXG4gICAgKVxuICAgIC5qb2luKCcsICcpXG5cbiAgaWYgKCFzaXplcyAmJiBraW5kID09PSAndycpIHtcbiAgICBzaXplcyA9IHdpZHRoc1xuICAgICAgLm1hcCgodywgaSkgPT4gKGkgPT09IGxhc3QgPyBgJHt3fXB4YCA6IGAobWF4LXdpZHRoOiAke3d9cHgpICR7d31weGApKVxuICAgICAgLmpvaW4oJywgJylcbiAgfVxuXG4gIHNyYyA9IGNhbGxMb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSlcblxuICByZXR1cm4geyBzcmMsIHNpemVzLCBzcmNTZXQgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMgJiYgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9IHVzZUludGVyc2VjdGlvbjxIVE1MSW1hZ2VFbGVtZW50Pih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHZpc2liaWxpdHk6IGlzVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nLFxuXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2Jsb2NrJyB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxudHlwZSBMb2FkZXJQcm9wcyA9IENhbGxMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKSB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QsIHNyYywgd2lkdGgsIHF1YWxpdHkgfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IExvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGgsIHF1YWxpdHkgfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0L3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxXycgKyBxdWFsaXR5KVxuICB9XG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICB9XG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCwgcXVhbGl0eSB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJZGxlQ2FsbGJhY2tcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbikge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxcbiAgc3RyaW5nLFxuICB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxuICB9XG4+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCkge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFbmVteSBmcm9tICcuLi9jb21wb25lbnRzL2VuZW15J1xyXG5pbXBvcnQgRmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9maWVsZCdcclxuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL3BsYXllcidcclxuaW1wb3J0IEJhdHRsZSBmcm9tICcuLi9jb21wb25lbnRzL0JhdHRsZSdcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaGFzVmlydXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5Db3VudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpZmljdWx0OiAnJyxcclxuICAgICAgICAgICAgdHVybjogbnVsbCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFZpcnVzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2hhc1ZpcnVzOiB0cnVlfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZGlmaWN1bHQ6IGUudGFyZ2V0LnZhbHVlfSl9IHR5cGU9J3JhZGlvJyBuYW1lPSdkaWZpY3VsdCcgaWQ9J2Vhc3knIHZhbHVlPSdlYXN5Jz48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9J2Vhc3knPkbDoWNpbDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtkaWZpY3VsdDogZS50YXJnZXQudmFsdWV9KX0gdHlwZT0ncmFkaW8nIG5hbWU9J2RpZmljdWx0JyBpZD0nbWVkaXVtJyB2YWx1ZT0nbWVkaXVtJz48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9J21lZGl1bSc+TcOpZGlvPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe2RpZmljdWx0OiBlLnRhcmdldC52YWx1ZX0pfSB0eXBlPSdyYWRpbycgbmFtZT0nZGlmaWN1bHQnIGlkPSdoYXJkJyB2YWx1ZT0naGFyZCc+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdoYXJkJz5EaWbDrWNpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nZXRWaXJ1c30+VmVyaWZpY2FyIFbDrXJ1czwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhhc1ZpcnVzID9cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmF0dGxlIGhhc1ZpcnVzPXt0aGlzLnN0YXRlLmhhc1ZpcnVzfSBkaWZpY3VsdD17dGhpcy5zdGF0ZS5kaWZpY3VsdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFyXCI6IFwiRW5lbXlfYmFyX18xVlBMVFwiLFxuXHRcImhwXCI6IFwiRW5lbXlfaHBfXzJ5WnlNXCIsXG5cdFwiYm94XCI6IFwiRW5lbXlfYm94X182eS1QclwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmllbGQzXCI6IFwiRmllbGRfZmllbGQzX18zNlhyTFwiLFxuXHRcImZpZWxkMlwiOiBcIkZpZWxkX2ZpZWxkMl9fMlBTYy1cIixcblx0XCJhcmVhXCI6IFwiRmllbGRfYXJlYV9fMUZ6TnRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhclwiOiBcIlBsYXllcl9iYXJfXzE4VkpnXCIsXG5cdFwiaHBcIjogXCJQbGF5ZXJfaHBfX2tLRUYwXCIsXG5cdFwiYm94XCI6IFwiUGxheWVyX2JveF9fM2hXbjZcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9