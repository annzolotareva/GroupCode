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

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modalSort.js":
/*!******************************!*\
  !*** ./modules/modalSort.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"modalSort\": () => (/* binding */ modalSort)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./modules/helpers.js\");\n\r\n\r\nconst modalSort = () => {\r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const modalSort = document.querySelector('.modal-sort');\r\n    const modalSortCloseBtn = document.querySelector('.modal-sort__close-btn');\r\n    const wrapperRepo = document.querySelector(\".wrapper-repo\");\r\n\r\n    const visibleModalWindow = (modal) => {\r\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 500,\r\n          timing(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n          draw(progress) {\r\n            modal.style.opacity = progress;\r\n            modalOverlay.style.opacity = progress;\r\n          },\r\n        });\r\n        modal.style.display = 'block';\r\n        modalOverlay.style.display = 'block';\r\n    };\r\n\r\n    const unvisibleModalWindow = (modal) => {\r\n        modal.style.display = 'none';\r\n        modalOverlay.style.display = 'none';\r\n    };\r\n\r\n    const openModalWindowSort = (button) => {\r\n        button.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            if (e.target.closest(\".sort-button\")) {\r\n                visibleModalWindow(modalSort);\r\n                document.body.style.overflow = \"hidden\";\r\n            }  \r\n        });\r\n    };\r\n\r\n    const closeModalWindowSort = (elem) => {\r\n        elem.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            unvisibleModalWindow(modalSort);\r\n            document.body.style.overflow = \"\";\r\n        });\r\n    };\r\n    openModalWindowSort(wrapperRepo);\r\n    closeModalWindowSort(modalOverlay);\r\n    closeModalWindowSort(modalSortCloseBtn);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalSort);\n\n//# sourceURL=webpack:///./modules/modalSort.js?");

/***/ }),

/***/ "./modules/projectRepo.js":
/*!********************************!*\
  !*** ./modules/projectRepo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectRepo\": () => (/* binding */ ProjectRepo)\n/* harmony export */ });\nclass ProjectRepo {\r\n    \r\n    getProjects() {\r\n        return fetch('http://localhost:3333/projects').then(response => response.json());\r\n    }\r\n\r\n    getProject(id) {\r\n        return fetch(`http://localhost:3333/projects/${id}`).then(response => response.json());\r\n    }\r\n\r\n    removeProject(id) {\r\n        return fetch(`http://localhost:3333/projects/${id}`, {\r\n            method: 'DELETE'\r\n        }).then(response => response.json());\r\n    }\r\n\r\n    sortProjectsByDefault(func) {\r\n        return fetch(`http://localhost:3333/projects?${func}`).then(response => response.json());\r\n    }\r\n\r\n    getSearchUsers(str) {\r\n        return fetch(`http://localhost:3333/projects?name_like=${str}`).then(response => response.json());\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/projectRepo.js?");

/***/ }),

/***/ "./modules/removeProjects.js":
/*!***********************************!*\
  !*** ./modules/removeProjects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeProjects\": () => (/* binding */ removeProjects)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./modules/render.js\");\n\r\n\r\nconst removeProjects = (file) => {\r\n\r\n    const tbody = document.getElementById('projects-field__table-body');\r\n\r\n    tbody.addEventListener('click', (e) => {\r\n        if (e.target.matches(\".remove-project-btn\")) {\r\n            const tr = e.target.closest('tr');\r\n            const id = tr.dataset.key;\r\n            projectRepo.removeProject(id).then(response => {\r\n                projectRepo.getProjects().then(projects => {\r\n                    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(projects, rolesInProjectDate.rolesInProject);\r\n                });\r\n            });\r\n        };\r\n    });\r\n};\n\n//# sourceURL=webpack:///./modules/removeProjects.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst render = (projects, rolesInProject) => {\r\n    const tbody = document.getElementById('projects-field__table-body');\r\n\r\n\r\n    projects.forEach(project => {\r\n        tbody.insertAdjacentHTML('beforeend', `\r\n            <tr data-key=\"${project.id}\">\r\n                <td>${project.name}</td>\r\n                <td>${project.dateOfChange}</td>\r\n                <td>${project.numberOfParticipants}</td>\r\n                <td>${rolesInProject[project.id].roles}</td>\r\n                <td><img src=\"./img/repository-page/edit-icon.svg\" alt=\"\"></td>\r\n                <td><img  class=\"remove-project-btn\" src=\"./img/repository-page/delete-icon.svg\" alt=\"\"></td>\r\n            </tr>\r\n        `);\r\n});\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/render.js?");

/***/ }),

/***/ "./modules/rolesDate.js":
/*!******************************!*\
  !*** ./modules/rolesDate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RolesDate\": () => (/* binding */ RolesDate)\n/* harmony export */ });\nclass RolesDate {\r\n    _roles = [ \r\n        {\r\n      id: 0,\r\n      name: \"Администратор проекта\"\r\n    },\r\n    {\r\n      id: 1,\r\n      \"name\": \"Программист\"\r\n    },\r\n    {\r\n      id: 2,\r\n      \"name\": \"Просматривающий\"\r\n    }\r\n        \r\n    ]\r\n\r\n    get roles() {\r\n        return this._users;\r\n    }\r\n\r\n    set roles(roles) {\r\n        this._roles = roles;\r\n    }\r\n\r\n    logger() {\r\n        console.log(this.roles);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./modules/rolesDate.js?");

/***/ }),

/***/ "./modules/rolesInProjectDate.js":
/*!***************************************!*\
  !*** ./modules/rolesInProjectDate.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RolesInProjectDate\": () => (/* binding */ RolesInProjectDate)\n/* harmony export */ });\nclass RolesInProjectDate {\r\n\r\n     getRolesInProject() {\r\n        return fetch('http://localhost:3333/rolesInProject').then(response => response.json());\r\n    }\r\n\r\n    getRoleInProject(id) {\r\n        return fetch(`http://localhost:3333/rolesInProject/${id}`).then(response => response.json());\r\n    }\r\n\r\n    removeRoleInProject(id) {\r\n        return fetch(`http://localhost:3333/rolesInProject/${id}`, {\r\n            method: 'DELETE'\r\n        }).then(response => response.json());\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/rolesInProjectDate.js?");

/***/ }),

/***/ "./modules/searchProjects.js":
/*!***********************************!*\
  !*** ./modules/searchProjects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchProjects\": () => (/* binding */ searchProjects)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./modules/render.js\");\n\r\n\r\nconst searchProjects = () => {\r\n    const searchInput = document.getElementById('search-input');\r\n\r\n    searchInput.addEventListener('input', (e) => {\r\n        projectRepo.getSearchUsers(searchInput.value).then( projects => {\r\n            (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(projects,rolesInProject);\r\n        });\r\n    });\r\n};\n\n//# sourceURL=webpack:///./modules/searchProjects.js?");

/***/ }),

/***/ "./modules/usersDate.js":
/*!******************************!*\
  !*** ./modules/usersDate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UsersDate\": () => (/* binding */ UsersDate)\n/* harmony export */ });\nclass UsersDate {\r\n    getUsers() {\r\n        return fetch('http://localhost:3333/users').then(response => response.json());\r\n    }\r\n\r\n    getUser(id) {\r\n        return fetch(`http://localhost:3333/users/${id}`).then(response => response.json());\r\n    }\r\n\r\n    removeUsers(id) {\r\n        return fetch(`http://localhost:3333/users/${id}`, {\r\n            method: 'DELETE'\r\n        }).then(response => response.json());\r\n    }\r\n}\n\n//# sourceURL=webpack:///./modules/usersDate.js?");

/***/ }),

/***/ "./projectRepo/index.js":
/*!******************************!*\
  !*** ./projectRepo/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/render.js */ \"./modules/render.js\");\n/* harmony import */ var _modules_projectRepo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/projectRepo.js */ \"./modules/projectRepo.js\");\n/* harmony import */ var _modules_usersDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/usersDate.js */ \"./modules/usersDate.js\");\n/* harmony import */ var _modules_rolesDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/rolesDate.js */ \"./modules/rolesDate.js\");\n/* harmony import */ var _modules_rolesInProjectDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/rolesInProjectDate.js */ \"./modules/rolesInProjectDate.js\");\n/* harmony import */ var _modules_removeProjects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/removeProjects.js */ \"./modules/removeProjects.js\");\n/* harmony import */ var _modules_searchProjects_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/searchProjects.js */ \"./modules/searchProjects.js\");\n/* harmony import */ var _modules_modalSort_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/modalSort.js */ \"./modules/modalSort.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n//import {sortProjects} from \"./modules/sortProjects.js\";\r\n\r\n\r\n\r\nwindow.projectRepo = new _modules_projectRepo_js__WEBPACK_IMPORTED_MODULE_1__.ProjectRepo;\r\nwindow.usersDate = new _modules_usersDate_js__WEBPACK_IMPORTED_MODULE_2__.UsersDate;\r\nwindow.rolesDate = new _modules_rolesDate_js__WEBPACK_IMPORTED_MODULE_3__.RolesDate;\r\nwindow.rolesInProjectDate = new _modules_rolesInProjectDate_js__WEBPACK_IMPORTED_MODULE_4__.RolesInProjectDate;\r\n\r\n\r\nprojectRepo.getProjects().then(dataFirst => {\r\n    rolesInProjectDate.getRolesInProject().then(dataSecond => {\r\n    (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(dataFirst, dataSecond);\r\n});\r\n});\r\n\r\n\r\n(0,_modules_removeProjects_js__WEBPACK_IMPORTED_MODULE_5__.removeProjects)();\r\n//sortProjects();\r\n(0,_modules_searchProjects_js__WEBPACK_IMPORTED_MODULE_6__.searchProjects)();\r\n(0,_modules_modalSort_js__WEBPACK_IMPORTED_MODULE_7__.modalSort)();\n\n//# sourceURL=webpack:///./projectRepo/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./projectRepo/index.js");
/******/ 	
/******/ })()
;