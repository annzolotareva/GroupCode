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

/***/ "./mainPage/index.js":
/*!***************************!*\
  !*** ./mainPage/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/smoothScroll.js */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_modalWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modalWindow.js */ \"./modules/modalWindow.js\");\n/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/sendForm.js */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_usersDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/usersDate.js */ \"./modules/usersDate.js\");\n/* harmony import */ var _modules_verificationForAuthorization_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/verificationForAuthorization.js */ \"./modules/verificationForAuthorization.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.usersDate = new _modules_usersDate_js__WEBPACK_IMPORTED_MODULE_3__.UsersDate;\r\n\r\nusersDate.getUsers().then(data => { \r\n    (0,_modules_verificationForAuthorization_js__WEBPACK_IMPORTED_MODULE_4__.verificationForAuthorization)(data);\r\n});\r\n\r\n(0,_modules_modalWindow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack:///./mainPage/index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modalWindow.js":
/*!********************************!*\
  !*** ./modules/modalWindow.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./modules/helpers.js\");\n\r\n\r\nconst modalWindow = () => {\r\n    const arrow = document.querySelector(\".up\");\r\n    const modalSignIn = document.querySelector('.modal-sign-in');\r\n    const modalSignUp = document.querySelector('.modal-sign-up');\r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const modalCloseBtnSignIn = document.querySelector('.modal__close-btn-sign-in');\r\n    const modalCloseBtnSignUp = document.querySelector('.modal__close-btn-sign-up');\r\n    const wrapper = document.querySelector(\".wrapper\");\r\n    const formSignIn = document.querySelector('[name=\"modal-sign-in__form\"]');\r\n    const formSignUp = document.querySelector('[name=\"modal-sign-up__form\"]');\r\n    const formElementsSignIn = formSignIn.querySelectorAll(\"input\");\r\n    const formElementsSignUp = formSignUp.querySelectorAll(\"input\");\r\n    const marquee = document.querySelector('marquee');\r\n    const video = document.querySelectorAll('video');\r\n    const signInText = document.querySelector('.sign-in-text');\r\n    const signUpText = document.querySelector('.sign-up-text');\r\n    let flag = 0;\r\n\r\n    const cleanData = (formElements) => {\r\n      formElements.forEach((input) => {\r\n              if (input.name == \"user-name\" || input.name == \"user-email\" || input.name == \"user-password\"){\r\n                  input.value = \"\";\r\n              }        \r\n            });\r\n    };\r\n\r\n    const visibleModalWindow = (modal) => {\r\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 500,\r\n          timing(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n          draw(progress) {\r\n            modal.style.opacity = progress;\r\n            modalOverlay.style.opacity = progress;\r\n          },\r\n        });\r\n        modal.style.display = 'block';\r\n        modalOverlay.style.display = 'block';\r\n    };\r\n\r\n    const unvisibleModalWindow = (modal) => {\r\n        modal.style.display = 'none';\r\n        modalOverlay.style.display = 'none';\r\n    };\r\n\r\n    const goToAnotherForm = (button) => {\r\n        button.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            if  (button == signInText) {\r\n                unvisibleModalWindow(modalSignUp);\r\n                visibleModalWindow(modalSignIn);\r\n                flag = 2;\r\n            } else if (button == signUpText) {\r\n                unvisibleModalWindow(modalSignIn);\r\n                visibleModalWindow(modalSignUp);\r\n                flag = 1;\r\n            }\r\n            if (flag == 1) {\r\n                cleanData(formElementsSignUp);\r\n            } else if (flag == 2) {\r\n                cleanData(formElementsSignIn);\r\n            }\r\n        });\r\n    };\r\n\r\n    const openModalWindow = (button) => {\r\n        button.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            if (e.target.matches(\".header__button_yellow\")) {\r\n                cleanData(formElementsSignUp);\r\n                visibleModalWindow(modalSignUp);\r\n                document.body.style.overflow = \"hidden\";\r\n                if (arrow.style.display = \"block\") {\r\n                    arrow.style.display = \"none\";\r\n                }\r\n                marquee.stop();\r\n                flag = 1;\r\n            } else if (e.target.matches(\".header__button_violet\") || e.target.matches(\".top-info__button\") || e.target.matches(\".crawl-line__text\")) {\r\n                cleanData(formElementsSignIn);\r\n                visibleModalWindow(modalSignIn);\r\n                document.body.style.overflow = \"hidden\";\r\n                if (arrow.style.display = \"block\") {\r\n                    arrow.style.display = \"none\";\r\n                }\r\n                marquee.stop();\r\n                flag = 2;\r\n            } \r\n        });\r\n    };\r\n\r\n    const closeModalWindow = (elem) => {\r\n        elem.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            if (flag == 1) {\r\n                unvisibleModalWindow(modalSignUp);\r\n            } else if (flag == 2) {\r\n                unvisibleModalWindow(modalSignIn);\r\n            }\r\n            document.body.style.overflow = \"\";\r\n            if (window.pageYOffset > 520) {\r\n                arrow.style.display = \"block\";\r\n            }\r\n            if (flag == 1) {\r\n                cleanData(formElementsSignUp);\r\n            } else if (flag == 2) {\r\n                cleanData(formElementsSignIn);\r\n            }\r\n            marquee.start();\r\n            flag = 0;\r\n        });\r\n    };\r\n    \r\n    openModalWindow(wrapper);\r\n    goToAnotherForm(signInText);\r\n    goToAnotherForm(signUpText);\r\n    closeModalWindow(modalOverlay);\r\n    closeModalWindow(modalCloseBtnSignIn);\r\n    closeModalWindow(modalCloseBtnSignUp);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n//# sourceURL=webpack:///./modules/modalWindow.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validationForms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationForms.js */ \"./modules/validationForms.js\");\n\r\n\r\nconst sendForm = () => {\r\n    const arrow = document.querySelector(\".up\");\r\n    const modalSignIn = document.querySelector('.modal-sign-in');\r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const statusBlock = document.createElement(\"div\");\r\n    const unvalidText = \"Данные не валидны\";\r\n    const errorText = \"Ошибка\";\r\n    const formSignIn = document.querySelector('[name=\"modal-sign-in__form\"]');\r\n    const formElementsSignIn = formSignIn.querySelectorAll(\"input\");\r\n    statusBlock.style.color = \"rgba(255, 255, 255, 0.5)\";\r\n    statusBlock.style.textAlign = \"center\";\r\n\r\n\r\n    const sendData = (data) => {\r\n        return fetch(\"http://localhost:3333/users\", {\r\n            method: \"POST\",\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n            },\r\n        }).then((res) => res.json);\r\n    };\r\n\r\n    const cleanData = (formElements) => {\r\n      formElements.forEach((input) => {\r\n              if (input.name == \"user-name\" || input.name == \"user-email\" || input.name == \"user-password\"){\r\n                  input.value = \"\";\r\n              }        \r\n            });\r\n    };\r\n\r\n    const submitForm = () => {\r\n      const formData = new FormData(formSignIn);\r\n      const formBody = {};\r\n      formSignIn.append(statusBlock);\r\n\r\n      formData.forEach((value, key) => {\r\n         formBody[key] = value;\r\n       });\r\n      if ((0,_validationForms_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\r\n        sendData(formBody)\r\n          .then(() => {\r\n                modalSignIn.style.display = \"none\";\r\n                modalOverlay.style.display = \"none\";\r\n                statusBlock.textContent = \"\";\r\n                document.body.style.overflow = \"\";\r\n                if (window.pageYOffset > 520) {\r\n                  arrow.style.display = \"block\";\r\n                }\r\n            cleanData(formElementsSignIn);\r\n          })\r\n          .catch(() => {\r\n            statusBlock.textContent = errorText;\r\n          });\r\n      } else {\r\n        statusBlock.textContent = unvalidText;\r\n        setTimeout(() => {\r\n                statusBlock.textContent = \"\";\r\n            }, 3000);\r\n      }\r\n    };\r\n\r\n    try {\r\n      if (!formSignIn) {\r\n        throw new Error(\"Верните форму на место!\");\r\n      }\r\n      formSignIn.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        submitForm();\r\n      });\r\n    } catch (error) {\r\n    console.log(error.message);\r\n    }\r\n    \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n    const arrow = document.querySelector(\".up\");\r\n    const elementsOfTopMenu = document.querySelectorAll(\".menu ul>li>a\");\r\n\r\n    const showArrow = () => {\r\n        window.addEventListener('scroll', (e) => {\r\n            e.target.value = scrollY;\r\n            if (e.target.value > 520) {\r\n                arrow.style.display = \"block\";\r\n            } else {\r\n                arrow.style.display = \"none\";\r\n            }\r\n        });\r\n    };\r\n\r\n    const scroll = (button) => {\r\n        button.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            const linkAddress = button.getAttribute(\"href\");\r\n            const section = document.querySelector(linkAddress);\r\n            if (section) {\r\n                section.scrollIntoView({\r\n                    behavior: \"smooth\",\r\n                    block: \"start\"\r\n                });\r\n            }\r\n        });\r\n    };\r\n\r\n    const scrollToHeader = (button) => {\r\n        button.setAttribute(\"href\", \".wrapper\");\r\n        scroll(button);\r\n    };\r\n\r\n    arrow.style.display = \"none\";\r\n    showArrow();\r\n    scrollToHeader(arrow);\r\n    elementsOfTopMenu.forEach((elem) => {\r\n        scroll(elem);\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ }),

/***/ "./modules/usersDate.js":
/*!******************************!*\
  !*** ./modules/usersDate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UsersDate\": () => (/* binding */ UsersDate)\n/* harmony export */ });\nclass UsersDate {\r\n    getUsers() {\r\n        return fetch('http://localhost:3333/users').then(response => response.json());\r\n    }\r\n\r\n    getUser(id) {\r\n        return fetch(`http://localhost:3333/users/${id}`).then(response => response.json());\r\n    }\r\n\r\n    removeUsers(id) {\r\n        return fetch(`http://localhost:3333/users/${id}`, {\r\n            method: 'DELETE'\r\n        }).then(response => response.json());\r\n    }\r\n}\n\n//# sourceURL=webpack:///./modules/usersDate.js?");

/***/ }),

/***/ "./modules/validationForms.js":
/*!************************************!*\
  !*** ./modules/validationForms.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validationForms = () => {\r\n    const formSignIn = document.querySelector('.modal-sign-in__form');\r\n    const formSignInElements = formSignIn.querySelectorAll(\"input\");\r\n\r\n    const validate = (list) => {\r\n    let success = true;\r\n    list.forEach((input) => {\r\n      if (input.name == \"user-name\") {\r\n        if (/[^а-я]/gi.test(input.value.trim())) {\r\n          success = false;\r\n        }\r\n      }\r\n      \r\n      if (input.name == \"user-email\") {\r\n        if (/[^a-z@]/gi.test(input.value.trim())) {\r\n          success = false;\r\n        }\r\n      }\r\n\r\n      if (input.name == \"user-password\") {\r\n        if (/[^а-я]/gi.test(input.value.trim())) {\r\n          success = false;\r\n        }\r\n      }\r\n    });\r\n\r\n    return success;\r\n  };\r\n\r\n  return validate(formSignInElements);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationForms);\n\n//# sourceURL=webpack:///./modules/validationForms.js?");

/***/ }),

/***/ "./modules/verificationForAuthorization.js":
/*!*************************************************!*\
  !*** ./modules/verificationForAuthorization.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"verificationForAuthorization\": () => (/* binding */ verificationForAuthorization)\n/* harmony export */ });\nconst verificationForAuthorization = (users) => {\r\n    const modalSignUp = document.querySelector('.modal-sign-up');\r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const statusBlock = document.createElement(\"div\");\r\n    const unvalidText = \"Такого пользователя не существует!\";\r\n    const errorText = \"Ошибка\";\r\n    const formSignUp = document.querySelector('[name=\"modal-sign-up__form\"]');\r\n    const formElementsSignUp = formSignUp.querySelectorAll(\"input\");\r\n    statusBlock.style.color = \"rgba(255, 255, 255, 0.5)\";\r\n    statusBlock.style.textAlign = \"center\";\r\n\r\n\r\n    const cleanData = (formElements) => {\r\n      formElements.forEach((input) => {\r\n              if (input.name == \"user-email\" || input.name == \"user-password\"){\r\n                  input.value = \"\";\r\n              }        \r\n            });\r\n    };\r\n\r\n    const checkData = (formElements) => {\r\n      formElements.forEach((input) => {\r\n users.forEach(user => {\r\n        if ((input.name == \"user-email\" && user.email == input.value) && (input.name == \"user-password\" && user.password == input.value)) {\r\n            statusBlock.textContent = \"Мя\";\r\n        } \r\n});\r\n});  };\r\n\r\n    const submitForm = () => {\r\n      const formData = new FormData(formSignUp);\r\n      const formBody = {};\r\n      formSignUp.append(statusBlock);\r\n\r\n      formData.forEach((value, key) => {\r\n         formBody[key] = value;\r\n       });\r\n      checkData(formElementsSignUp)\r\n      .then(() => {\r\n                modalSignUp.style.display = \"none\";\r\n                modalOverlay.style.display = \"none\";\r\n                statusBlock.textContent = \"\";\r\n                document.body.style.overflow = \"\";\r\n            cleanData(formElementsSignUp);\r\n          })\r\n          .catch(() => {\r\n            statusBlock.textContent = errorText;\r\n          });\r\n\r\n    try {\r\n      if (!formSignIn) {\r\n        throw new Error(\"Верните форму на место!\");\r\n      }\r\n      formSignUp.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        submitForm();\r\n      });\r\n    } catch (error) {\r\n    console.log(error.message);\r\n    }\r\n\r\n    };\r\n   \r\n\r\n};\n\n//# sourceURL=webpack:///./modules/verificationForAuthorization.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./mainPage/index.js");
/******/ 	
/******/ })()
;