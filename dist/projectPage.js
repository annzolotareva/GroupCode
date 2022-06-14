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

/***/ "./modules/projectRepo.js":
/*!********************************!*\
  !*** ./modules/projectRepo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectRepo\": () => (/* binding */ ProjectRepo)\n/* harmony export */ });\nclass ProjectRepo {\r\n    \r\n    getProjects() {\r\n        return fetch('http://localhost:3333/projects').then(response => response.json());\r\n    }\r\n\r\n    getProject(id) {\r\n        return fetch(`http://localhost:3333/projects/${id}`).then(response => response.json());\r\n    }\r\n\r\n    removeProject(id) {\r\n        return fetch(`http://localhost:3333/projects/${id}`, {\r\n            method: 'DELETE'\r\n        }).then(response => response.json());\r\n    }\r\n\r\n    sortProjectsByDefault(func) {\r\n        return fetch(`http://localhost:3333/projects?${func}`).then(response => response.json());\r\n    }\r\n\r\n    getSearchUsers(str) {\r\n        return fetch(`http://localhost:3333/projects?name_like=${str}`).then(response => response.json());\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/projectRepo.js?");

/***/ }),

/***/ "./modules/renderFiles.js":
/*!********************************!*\
  !*** ./modules/renderFiles.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderFiles\": () => (/* binding */ renderFiles)\n/* harmony export */ });\nconst renderFiles = (project) => {\r\n    const tbody = document.getElementById('project-field__table-body');\r\n\r\n        tbody.insertAdjacentHTML('beforeend', `\r\n            <tr data-key=\"${project.id}\">\r\n                <td>${project.name}</td>\r\n                <td>${project.dateOfChange}</td>\r\n                <td>${project.numberOfParticipants}</td>\r\n                ${project.id == role.project ? `<td>${role.roles}</td>`: null}\r\n                <td><img src=\"./img/repository-page/edit-icon.svg\" alt=\"\"></td>\r\n                <td><img  class=\"remove-project-btn\" src=\"./img/repository-page/delete-icon.svg\" alt=\"\"></td>\r\n            </tr>\r\n        `);\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/renderFiles.js?");

/***/ }),

/***/ "./projectPage/index.js":
/*!******************************!*\
  !*** ./projectPage/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_projectRepo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/projectRepo.js */ \"./modules/projectRepo.js\");\n/* harmony import */ var _modules_renderFiles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/renderFiles.js */ \"./modules/renderFiles.js\");\n\r\n\r\n\r\nwindow.projectRepo = new _modules_projectRepo_js__WEBPACK_IMPORTED_MODULE_0__.ProjectRepo;\r\n\r\n\r\nprojectRepo.getProject(id).then(data => {\r\n    (0,_modules_renderFiles_js__WEBPACK_IMPORTED_MODULE_1__.renderFiles)(data);\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./projectPage/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./projectPage/index.js");
/******/ 	
/******/ })()
;