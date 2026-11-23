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

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n\n\n\n\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"2026-11-26 23:59:59\");\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://3D-glo-academy/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/menu.js"
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuBtn = document.querySelector(\".menu\");\n  const menu = document.querySelector(\"menu\");\n  const closeBtn = menu.querySelector(\".close-btn\");\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\n\n  const handleMenu = () => {\n    menu.classList.toggle(\"active-menu\");\n  };\n\n  menuBtn.addEventListener(\"click\", handleMenu);\n\n  closeBtn.addEventListener(\"click\", handleMenu);\n\n  menuItems.forEach((item) => item.addEventListener(\"click\", handleMenu));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://3D-glo-academy/./src/modules/menu.js?\n}");

/***/ },

/***/ "./src/modules/modal.js"
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const modalWindow = document.querySelector(\".popup\");\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  const modalContent = modalWindow.querySelector(\".popup-content\");\n  const closeBtn = modalWindow.querySelector(\".popup-close\");\n  let animationFrame;\n\n  const resetAnimationStyles = () => {\n    modalWindow.style.opacity = \"\";\n    modalContent.style.opacity = \"\";\n    modalContent.style.transform = \"\";\n  };\n\n  const openModal = () => {\n    if (animationFrame) {\n      cancelAnimationFrame(animationFrame);\n      animationFrame = null;\n    }\n\n    resetAnimationStyles();\n    modalWindow.style.display = \"block\";\n\n    if (window.innerWidth < 768) {\n      return;\n    }\n\n    const duration = 400;\n    const contentTransform = window.getComputedStyle(modalContent).transform;\n    let startTime;\n\n    modalWindow.style.opacity = \"0\";\n    modalContent.style.opacity = \"0\";\n    modalContent.style.transform = `${contentTransform} translateY(20px)`;\n\n    const animate = (timestamp) => {\n      if (startTime === undefined) {\n        startTime = timestamp;\n      }\n\n      const progress = Math.min((timestamp - startTime) / duration, 1);\n      const easedProgress = 1 - (1 - progress) ** 3;\n\n      modalWindow.style.opacity = String(easedProgress);\n      modalContent.style.opacity = String(easedProgress);\n      modalContent.style.transform = `${contentTransform} translateY(${20 * (1 - easedProgress)}px)`;\n\n      if (progress < 1) {\n        animationFrame = requestAnimationFrame(animate);\n      } else {\n        animationFrame = null;\n        resetAnimationStyles();\n      }\n    };\n\n    animationFrame = requestAnimationFrame(animate);\n  };\n\n  buttons.forEach((btn) => {\n    btn.addEventListener(\"click\", openModal);\n  });\n\n  closeBtn.addEventListener(\"click\", () => {\n    if (animationFrame) {\n      cancelAnimationFrame(animationFrame);\n      animationFrame = null;\n    }\n\n    resetAnimationStyles();\n    modalWindow.style.display = \"none\";\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack://3D-glo-academy/./src/modules/modal.js?\n}");

/***/ },

/***/ "./src/modules/timer.js"
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n  const timeHours = document.getElementById(\"timer-hours\");\n  const timeMinutes = document.getElementById(\"timer-minutes\");\n  const timeSeconds = document.getElementById(\"timer-seconds\");\n\n  const getTimeRemaining = () => {\n    const dateNow = new Date().getTime();\n    const dateStop = new Date(deadline).getTime();\n    const timeRemaining = Math.max(0, (dateStop - dateNow) / 1000);\n\n    const seconds = Math.floor(timeRemaining % 60);\n    const minutes = Math.floor((timeRemaining / 60) % 60);\n    const hours = Math.floor(timeRemaining / 3600);\n\n    return { timeRemaining, hours, minutes, seconds };\n  };\n\n  const updateClock = () => {\n    const { timeRemaining, hours, minutes, seconds } = getTimeRemaining();\n\n    // console.log(\"updateClock tick\");\n\n    if (timeRemaining <= 0) {\n      timeHours.textContent = \"00\";\n      timeMinutes.textContent = \"00\";\n      timeSeconds.textContent = \"00\";\n      clearInterval(timerId);\n      return;\n    }\n\n    timeHours.textContent = String(hours).padStart(2, \"0\");\n    timeMinutes.textContent = String(minutes).padStart(2, \"0\");\n    timeSeconds.textContent = String(seconds).padStart(2, \"0\");\n  };\n\n  updateClock();\n  const timerId = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack://3D-glo-academy/./src/modules/timer.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperties(exports, { [Symbol.toStringTag]: { value: 'Module' }, __esModule: { value: true } });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;