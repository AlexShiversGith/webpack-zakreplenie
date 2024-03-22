/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_keyHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/keyHandler.js */ \"./src/js/keyHandler.js\");\n/* harmony import */ var _js_btnHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/btnHandler.js */ \"./src/js/btnHandler.js\");\n\n\n(0,_js_keyHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_js_btnHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/js/btnHandler.js":
/*!******************************!*\
  !*** ./src/js/btnHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar btnHandler = function btnHandler() {\n  var btn = document.createElement('button');\n  btn.innerHTML = 'Нажми меня!';\n  btn.style.backgroundColor = 'red';\n  btn.style.padding = '10px';\n  btn.style.color = 'white';\n  document.body.appendChild(btn);\n  var res = document.createElement('span');\n  res.classList.add('.counter');\n  document.body.appendChild(res);\n  var result = 0;\n  btn.addEventListener('click', function () {\n    result++;\n    res.innerHTML = result;\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (btnHandler);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/btnHandler.js?");

/***/ }),

/***/ "./src/js/keyHandler.js":
/*!******************************!*\
  !*** ./src/js/keyHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar keyHandler = function keyHandler() {\n  var elem = document.createElement('span');\n  elem.classList.add('.hit');\n  document.body.appendChild(elem);\n  var result = 0;\n  document.body.onkeyup = function (evt) {\n    if (evt.code == 1, 2, 3, 4, 5, 6, 7, 8, 9, 10) {\n      result++;\n    }\n    elem.innerHTML = result;\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyHandler);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/keyHandler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;