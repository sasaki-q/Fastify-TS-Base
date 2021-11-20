/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("fastify");

/***/ }),

/***/ "fastify-cors":
/*!*******************************!*\
  !*** external "fastify-cors" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("fastify-cors");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify */ "fastify");
/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fastify_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fastify-cors */ "fastify-cors");
/* harmony import */ var fastify_cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fastify_cors__WEBPACK_IMPORTED_MODULE_1__);


var server = fastify__WEBPACK_IMPORTED_MODULE_0___default()({
    logger: {
        level: 'error',
        prettyPrint: true,
    }
});
server.register((fastify_cors__WEBPACK_IMPORTED_MODULE_1___default()), {
    origin: [/localhost/, /.*.ngrok.io/]
});
server.listen(3000, '0.0.0.0', function (err, address) {
    if (err) {
        console.log("DEBUG: error message ==", err);
        process.exit(1);
    }
    console.log("DEBUG: server listening on port == ", address);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05tRDtBQUNaO0FBR3ZDLElBQU0sTUFBTSxHQUE2RCw4Q0FBTyxDQUFDO0lBQzdFLE1BQU0sRUFBRTtRQUNKLEtBQUssRUFBRSxPQUFPO1FBQ2QsV0FBVyxFQUFFLElBQUk7S0FDcEI7Q0FDSixDQUFDO0FBRUYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxxREFBVyxFQUFFO0lBQ3pCLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7Q0FDdkMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87SUFDeEMsSUFBRyxHQUFHLEVBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRSxPQUFPLENBQUM7QUFDL0QsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdGlmeS10cy1iYXNlL2V4dGVybmFsIGNvbW1vbmpzIFwiZmFzdGlmeVwiIiwid2VicGFjazovL2Zhc3RpZnktdHMtYmFzZS9leHRlcm5hbCBjb21tb25qcyBcImZhc3RpZnktY29yc1wiIiwid2VicGFjazovL2Zhc3RpZnktdHMtYmFzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWJhc2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmFzdGlmeS10cy1iYXNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWJhc2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWJhc2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWJhc2UvLi9zcmMvc2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdGlmeS1jb3JzXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZmFzdGlmeSwgeyBGYXN0aWZ5SW5zdGFuY2UgfSBmcm9tIFwiZmFzdGlmeVwiO1xuaW1wb3J0IGZhc3RpZnlDb3JzIGZyb20gXCJmYXN0aWZ5LWNvcnNcIjtcbmltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gXCJodHRwXCI7XG5cbmNvbnN0IHNlcnZlcjogRmFzdGlmeUluc3RhbmNlPFNlcnZlciwgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZT4gPSBmYXN0aWZ5KHtcbiAgICBsb2dnZXI6IHtcbiAgICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICAgIHByZXR0eVByaW50OiB0cnVlLFxuICAgIH1cbn0pXG5cbnNlcnZlci5yZWdpc3RlcihmYXN0aWZ5Q29ycywge1xuICAgIG9yaWdpbjogWy9sb2NhbGhvc3QvLCAvLioubmdyb2suaW8vXVxufSk7XG5cbnNlcnZlci5saXN0ZW4oMzAwMCwgJzAuMC4wLjAnLCAoZXJyLCBhZGRyZXNzKSA9PiB7XG4gICAgaWYoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJERUJVRzogZXJyb3IgbWVzc2FnZSA9PVwiLCBlcnIpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJERUJVRzogc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ID09IFwiLCBhZGRyZXNzKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=