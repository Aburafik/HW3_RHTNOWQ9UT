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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallpaper */ "./src/components/wallpaper.js");
var _jsxFileName = "C:\\Users\\fLAB\\Desktop\\trial\\src\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Header() {
  return __jsx("header", {
    className: "jsx-3694384677" + " " + "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3694384677" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-3694384677" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Mavel's Fearless"), __jsx("p", {
    className: "jsx-3694384677" + " " + "subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae molestias earum eveniet."), __jsx("div", {
    className: "jsx-3694384677" + " " + "search-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "search",
    placeholder: "Search",
    className: "jsx-3694384677",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })), __jsx(_wallpaper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3694384677",
    __self: this
  }, ".header.jsx-3694384677{width:100%;height:120vh;padding-top:15rem;padding-bottom:15rem;background-color:var(--color-primary);color:var(--color-secondary);position:relative;}.container.jsx-3694384677{width:124rem;max-width:100%;margin:0rem auto;}@media (max-width:1280px){.container.jsx-3694384677{padding:0rem 10rem;}}@media (max-width:768px){.container.jsx-3694384677{padding:0rem 4rem;}}.title.jsx-3694384677,.subtitle.jsx-3694384677{width:60rem;max-width:100%;}.title.jsx-3694384677{font-size:7.2rem;}.subtitle.jsx-3694384677{margin-bottom:3rem;}.search-bar.jsx-3694384677{width:30rem;max-width:100%;margin-bottom:8rem;border-bottom:2px solid var(--color-tertiary);position:relative;font-size:1.6rem;}.search-bar.jsx-3694384677 input.jsx-3694384677{width:100%;height:100%;border:0;outline:none;font-family:Roboto,-apple-system,BlinkMacSystemFont,\"Segoe UI\", Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZkxBQlxcRGVza3RvcFxcdHJpYWxcXHNyY1xcY29tcG9uZW50c1xcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHc0IsQUFTRSxBQU1RLEFBTUQsQUFLUixBQUtLLEFBSUUsQUFHUCxBQVVELFdBL0NFLEFBZ0RELENBdEJHLEFBWUEsQ0E3QkEsSUFzQmpCLENBVkUsQ0FOQSxBQW9CRixJQWNXLENBaERTLEdBMEJwQixBQVlxQixDQTdCRixJQXdDSixVQWhEUSxHQVN2QixBQXlDd0UsQ0FaeEIsaUJBckNSLDZCQXVDcEIsU0F0Q1csU0F1Q1osaUJBQ25CLEdBdkNvQixrQkFDcEIseUJBK0NBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZkxBQlxcRGVza3RvcFxcdHJpYWxcXHNyY1xcY29tcG9uZW50c1xcaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdhbGxwYXBlciBmcm9tIFwiLi93YWxscGFwZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5NYXZlbCdzIEZlYXJsZXNzPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gYmVhdGFlXHJcbiAgICAgICAgICBtb2xlc3RpYXMgZWFydW0gZXZlbmlldC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8V2FsbHBhcGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEyMHZoO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cmVtO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogMTI0cmVtO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcmVtIDEwcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHJlbSA0cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICAgIHdpZHRoOiA2MHJlbTtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDcuMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLWJhciB7XHJcbiAgICAgICAgICB3aWR0aDogMzByZW07XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcclxuXHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWFyY2gtYmFyIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\fLAB\\\\Desktop\\\\trial\\\\src\\\\components\\\\header.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
var _jsxFileName = "C:\\Users\\fLAB\\Desktop\\trial\\src\\components\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Layout(props) {
  return __jsx("div", {
    className: "layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(GlobalHeader, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

function GlobalHeader() {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Trial"), __jsx("link", {
    rel: "stylesheet",
    href: "/css/global.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\fLAB\\Desktop\\trial\\src\\components\\navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Navbar() {
  return __jsx("nav", {
    className: "jsx-2343520983" + " " + "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2343520983" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-2343520983",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "Hulk"), __jsx("a", {
    href: "#",
    className: "jsx-2343520983" + " " + "logo is-active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Mavel"), __jsx("a", {
    href: "#",
    className: "jsx-2343520983",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Venom")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2343520983",
    __self: this
  }, ".navbar.jsx-2343520983{width:100%;height:8rem;background-color:var(--color-secondary);position:fixed;color:white;left:0;top:0;z-index:99;box-shadow:0px 6px 8px rgba(0,0,0,0.5);}.navbar.jsx-2343520983 .container.jsx-2343520983{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.navbar.jsx-2343520983 a.jsx-2343520983{color:#ffffff;text-transform:uppercase;-webkit-letter-spacing:0.5rem;-moz-letter-spacing:0.5rem;-ms-letter-spacing:0.5rem;letter-spacing:0.5rem;text-align:center;height:100%;padding:2rem;display:grid;place-content:center;}.navbar.jsx-2343520983 a.is-active.jsx-2343520983{border-bottom:4px solid #ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZkxBQlxcRGVza3RvcFxcdHJpYWxcXHNyY1xcY29tcG9uZW50c1xcbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFTLEFBR3dCLEFBV0MsQUFNUixBQWFrQixXQTdCVixDQVdDLEVBTUUsU0FoQnlCLFNBNkJwRCxPQVp3Qix3QkFoQkcsZUFDSCxRQVNPLElBUlosT0FDRCxNQUNLLFdBQytCLDhCQVlsQyxTQVhWLFNBYUksWUFDQyxLQVQwQixRQVcxQixhQUNRLHFCQUN2QixpRkFaVSIsImZpbGUiOiJDOlxcVXNlcnNcXGZMQUJcXERlc2t0b3BcXHRyaWFsXFxzcmNcXGNvbXBvbmVudHNcXG5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPkh1bGs8L2E+XHJcblxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibG9nbyBpcy1hY3RpdmVcIj5cclxuICAgICAgICAgIE1hdmVsXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+VmVub208L2E+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2YmFyIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdmJhciBhIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXIgYS5pcy1hY3RpdmUge1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\fLAB\\\\Desktop\\\\trial\\\\src\\\\components\\\\navbar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/wallpaper.js":
/*!*************************************!*\
  !*** ./src/components/wallpaper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\fLAB\\Desktop\\trial\\src\\components\\wallpaper.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Wallpaper() {
  return __jsx("div", {
    className: "jsx-3725974824" + " " + "sample-wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "jsx-3725974824" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/image/venom-1.jpg",
    alt: "Wallpaper #1",
    className: "jsx-3725974824" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  })), __jsx("article", {
    className: "jsx-3725974824" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "image/hulk-1.jpg",
    alt: "Wallpaper #1",
    className: "jsx-3725974824" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })), __jsx("article", {
    className: "jsx-3725974824" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "image/venom-2.jpg",
    alt: "Wallpaper #1",
    className: "jsx-3725974824" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3725974824",
    __self: this
  }, ".sample-wallpaper.jsx-3725974824{width:100%;display:grid;grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));gap:4rem;}.wallpaper.jsx-3725974824{height:25rem;box-shadow:0px 10px 10px rgba(0,0,0,0.5);}.wallpaper.jsx-3725974824>img.jsx-3725974824{width:100%;height:100%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZkxBQlxcRGVza3RvcFxcdHJpYWxcXHNyY1xcY29tcG9uZW50c1xcd2FsbHBhcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCUyxBQUd3QixBQVFFLEFBS0YsV0FYRSxBQVlELEVBTGdDLFVBTTNCLENBWjBDLGdCQWFwQyxjQU56QixTQU9BLGtCQWJXLFNBQ1giLCJmaWxlIjoiQzpcXFVzZXJzXFxmTEFCXFxEZXNrdG9wXFx0cmlhbFxcc3JjXFxjb21wb25lbnRzXFx3YWxscGFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBXYWxscGFwZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2FtcGxlLXdhbGxwYXBlclwiPlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ3YWxscGFwZXJcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2UvdmVub20tMS5qcGdcIlxyXG4gICAgICAgICAgYWx0PVwiV2FsbHBhcGVyICMxXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIndhbGxwYXBlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ3YWxscGFwZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImltYWdlL2h1bGstMS5qcGdcIiBhbHQ9XCJXYWxscGFwZXIgIzFcIiBjbGFzc05hbWU9XCJ3YWxscGFwZXJcIiAvPlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndhbGxwYXBlclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UvdmVub20tMi5qcGdcIiBhbHQ9XCJXYWxscGFwZXIgIzFcIiBjbGFzc05hbWU9XCJ3YWxscGFwZXJcIiAvPlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5zYW1wbGUtd2FsbHBhcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcclxuICAgICAgICAgICAgZ2FwOiA0cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC53YWxscGFwZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cmVtO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAud2FsbHBhcGVyID4gaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdhbGxwYXBlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\fLAB\\\\Desktop\\\\trial\\\\src\\\\components\\\\wallpaper.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Wallpaper);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
var _jsxFileName = "C:\\Users\\fLAB\\Desktop\\trial\\src\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 10
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2FsbHBhcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiR2xvYmFsSGVhZGVyIiwiTmF2YmFyIiwiV2FsbHBhcGVyIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFD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QTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsb0JBRE47QUFFRSxPQUFHLEVBQUMsY0FGTjtBQUFBLHdDQUdZLFdBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFRRTtBQUFBLHdDQUFtQixXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsT0FBRyxFQUFDLGNBQWhDO0FBQUEsd0NBQXlELFdBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLEVBV0U7QUFBQSx3Q0FBbUIsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLE9BQUcsRUFBQyxjQUFqQztBQUFBLHdDQUEwRCxXQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FYRjtBQUFBO0FBQUE7QUFBQSxtK0VBREY7QUF3Q0Q7O0FBQ2NBLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7O0FBQ0EsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLFNBQU8sTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFHRDs7QUFDY0EsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNOQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFdhbGxwYXBlciBmcm9tIFwiLi93YWxscGFwZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5NYXZlbCdzIEZlYXJsZXNzPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gYmVhdGFlXHJcbiAgICAgICAgICBtb2xlc3RpYXMgZWFydW0gZXZlbmlldC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8V2FsbHBhcGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEyMHZoO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cmVtO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogMTI0cmVtO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcmVtIDEwcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHJlbSA0cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICAgIHdpZHRoOiA2MHJlbTtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDcuMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLWJhciB7XHJcbiAgICAgICAgICB3aWR0aDogMzByZW07XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcclxuXHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWFyY2gtYmFyIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxyXG4gICAgICA8R2xvYmFsSGVhZGVyIC8+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgKTtcclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuZnVuY3Rpb24gR2xvYmFsSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPlRyaWFsPC90aXRsZT5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2dsb2JhbC5jc3NcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuIiwiZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+SHVsazwvYT5cclxuXHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsb2dvIGlzLWFjdGl2ZVwiPlxyXG4gICAgICAgICAgTWF2ZWxcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5WZW5vbTwvYT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXZiYXIgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2YmFyIGEge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciBhLmlzLWFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZmZmZmY7XHJcbn1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImZ1bmN0aW9uIFdhbGxwYXBlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzYW1wbGUtd2FsbHBhcGVyXCI+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndhbGxwYXBlclwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIi9pbWFnZS92ZW5vbS0xLmpwZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJXYWxscGFwZXIgIzFcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwid2FsbHBhcGVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndhbGxwYXBlclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UvaHVsay0xLmpwZ1wiIGFsdD1cIldhbGxwYXBlciAjMVwiIGNsYXNzTmFtZT1cIndhbGxwYXBlclwiIC8+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwid2FsbHBhcGVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJpbWFnZS92ZW5vbS0yLmpwZ1wiIGFsdD1cIldhbGxwYXBlciAjMVwiIGNsYXNzTmFtZT1cIndhbGxwYXBlclwiIC8+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnNhbXBsZS13YWxscGFwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xyXG4gICAgICAgICAgICBnYXA6IDRyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLndhbGxwYXBlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVyZW07XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC53YWxscGFwZXIgPiBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV2FsbHBhcGVyO1xyXG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiA8TGF5b3V0PlxyXG4gICAgXHJcbiAgPC9MYXlvdXQ+O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=