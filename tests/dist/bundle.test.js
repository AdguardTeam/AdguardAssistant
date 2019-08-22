/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./tests/index.test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./tests/assisstant.test.js":
/*!**********************************!*\
  !*** ./tests/assisstant.test.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* global QUnit */\nvar _QUnit = QUnit,\n    test = _QUnit.test,\n    module = _QUnit.module;\nmodule('Assistant main');\ntest('Adguard is in the DOM', function (assert) {\n  assert.timeout(500);\n  var adguardEl = document.getElementsByClassName('adguard-alert')[0];\n  assert.ok(adguardEl);\n}); // it('Adguard is a child of the body', () => {\n//     var adguardEl = document.getElementsByClassName('adguard-alert')[0];\n//     expect(adguardEl).to.not.equal(null);\n//     expect(adguardEl).to.not.equal(undefined);\n//     expect(adguardEl.parentElement).to.equal(document.documentElement);\n// });\n// test('Adguard iframe', () => {\n//     before(() => {\n//         var button = document.getElementsByClassName('adguard-alert')[0];\n//         expect(button).to.not.equal(null);\n//         expect(button).to.not.equal(undefined);\n//         triggerEvent(button, 'mousedown');\n//         triggerEvent(button, 'mouseup');\n//     });\n//     test('Click on button - opening adguard iframe', (assert) => {\n//         var adguardEl = document.getElementById('adguard-assistant-dialog');\n//         expect(adguardEl).to.not.equal(null);\n//         expect(adguardEl).to.not.equal(undefined);\n//         expect(adguardEl.parentElement).to.equal(document.documentElement);\n//     });\n// });\n// test('Adguard touches events', () => {\n//     before(() => {\n//         var button = document.getElementsByClassName('adguard-alert')[0];\n//         expect(button).to.not.equal(null);\n//         expect(button).to.not.equal(undefined);\n//         triggerEvent(button, 'touchstart');\n//         triggerEvent(document, 'touchend');\n//     });\n//     test('Touch on button - opening adguard iframe', (done) => {\n//         var button = document.getElementsByClassName('adguard-alert')[0];\n//         setTimeout(function() {\n//             var adguardEl = document.getElementById('adguard-assistant-dialog');\n//             expect(adguardEl).to.not.equal(null);\n//             expect(adguardEl).to.not.equal(undefined);\n//             expect(adguardEl.parentElement).to.equal(document.documentElement);\n//             done();\n//         }, 150);\n//     });\n// });\n\n//# sourceURL=webpack:///./tests/assisstant.test.js?");

/***/ }),

/***/ "./tests/index.test.js":
/*!*****************************!*\
  !*** ./tests/index.test.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assisstant_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assisstant.test */ \"./tests/assisstant.test.js\");\n/* harmony import */ var _assisstant_test__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assisstant_test__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable no-unused-vars */\n\n\n//# sourceURL=webpack:///./tests/index.test.js?");

/***/ })

/******/ });