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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CustomHooks.ts":
/*!****************************!*\
  !*** ./src/CustomHooks.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar useSignUpForm = function (callback) {\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}), inputs = _a[0], setInputs = _a[1];\n    var handleSubmit = function (event) {\n        if (event) {\n            event.preventDefault();\n        }\n        if (callback) {\n            callback();\n        }\n    };\n    var handleInputChange = function (event) {\n        event.persist();\n        // https://scrapbox.io/onnanoko/React_Hooks%E3%81%A7%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%92%E4%BD%BF%E3%81%86\n        setInputs(function (inputs) {\n            var _a;\n            return (__assign({}, inputs, (_a = {}, _a[event.target.name] = event.target.value, _a)));\n        });\n    };\n    return {\n        handleSubmit: handleSubmit,\n        handleInputChange: handleInputChange,\n        inputs: inputs\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSignUpForm);\n\n\n//# sourceURL=webpack:///./src/CustomHooks.ts?");

/***/ }),

/***/ "./src/Signup.tsx":
/*!************************!*\
  !*** ./src/Signup.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CustomHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomHooks */ \"./src/CustomHooks.ts\");\n\n\nvar Signup = function () {\n    var _a = Object(_CustomHooks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), inputs = _a.inputs, handleInputChange = _a.handleInputChange, handleSubmit = _a.handleSubmit;\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"form\", { onSubmit: handleSubmit },\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", null, \"First Name\"),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: \"text\", name: \"firstName\", onChange: handleInputChange, value: inputs.firstName, required: true }),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", null, \"Last Name\"),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: \"text\", name: \"lastName\", onChange: handleInputChange, value: inputs.lastName, required: true })),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", null, \"Email Address\"),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: \"email\", name: \"email\", onChange: handleInputChange, value: inputs.email, required: true })),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", null, \"Password\"),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: \"password\", onChange: handleInputChange, value: inputs.password1, name: \"password1\" })),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", null, \"Re-enter Password\"),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", { type: \"password\", onChange: handleInputChange, value: inputs.passwrod2, name: \"password2\" })),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"button\", { type: \"submit\" }, \"Sign Up\")));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\n\n\n//# sourceURL=webpack:///./src/Signup.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Signup */ \"./src/Signup.tsx\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"](react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Signup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('root'));\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ })

/******/ });