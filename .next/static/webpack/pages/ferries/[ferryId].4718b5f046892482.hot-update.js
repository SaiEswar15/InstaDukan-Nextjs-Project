"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ferries/[ferryId]",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\n\nconst store = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({\n    cartData: [],\n    userData: [],\n    passengerModal: false,\n    passengerDetailsModal: false,\n    summaryModal: false,\n    paymentModal: false,\n    practiceModal: true,\n    cartDataPractice: [],\n    userDataPractice: [],\n    setPassengerModal: (0,mobx__WEBPACK_IMPORTED_MODULE_0__.action)(function(el) {\n        store.passengerModal = el;\n    }),\n    setpassengerDetailsModal: (0,mobx__WEBPACK_IMPORTED_MODULE_0__.action)(function(el) {\n        store.passengerDetailsModal = el;\n    }),\n    setSummaryOpenModal: (0,mobx__WEBPACK_IMPORTED_MODULE_0__.action)(function(el) {\n        console.log(\"enterd\", el, \"element\");\n        store.summaryModal = el;\n    }),\n    setPaymentModal: (0,mobx__WEBPACK_IMPORTED_MODULE_0__.action)(function(el) {\n        store.paymentModal = el;\n    }),\n    addToCart: (0,mobx__WEBPACK_IMPORTED_MODULE_0__.action)(function(el) {\n        // console.log(el, \"object enetered\")\n        this.cartData.push(el);\n    }),\n    addToUserData: (0,mobx__WEBPACK_IMPORTED_MODULE_0__.action)(function(el) {\n        // console.log(el, \"object enetered\")\n        this.userData.push(el);\n    })\n});\nstore.cartDataPractice.push({\n    \"id\": 1,\n    \"title\": \"Ocean Serenity: The Ultimate Luxury Voyage\",\n    \"description\": \"Experience convenient and hassle-free sea travel with our state-of-the-art ferries, designed for a smooth and enjoyable journey.\",\n    \"image\": \"https://photos.inautia.com/barcosOcasion/9/9/1/2/ferretti-yachts-681-28102090232868655352696865514566i.jpg\",\n    \"price\": 2995,\n    \"duration\": \"1 Days /1 Nights\",\n    \"from\": \"Port Blair\",\n    \"to\": \"Havelock\",\n    \"round\": \"\",\n    \"amentities\": [\n        \"Wi-Fi and Connectivity\",\n        \"Restrooms\",\n        \"Entertainment\",\n        \"Desk-Space\",\n        \"Lounge Area\"\n    ]\n});\nstore.userDataPractice.push;\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOztBQUEwQztBQUUxQyxNQUFNRSxRQUFRRixnREFBVUEsQ0FBQztJQUVyQkcsVUFBVSxFQUFFO0lBQ1pDLFVBQVUsRUFBRTtJQUNaQyxnQkFBZ0I7SUFDaEJDLHVCQUF1QjtJQUN2QkMsY0FBYztJQUNkQyxjQUFjO0lBQ2RDLGVBQWU7SUFDZkMsa0JBQWtCLEVBQUU7SUFDcEJDLGtCQUFrQixFQUFFO0lBSXBCQyxtQkFBbUJYLDRDQUFNQSxDQUFDLFNBQVVZLEVBQUU7UUFFbENYLE1BQU1HLGNBQWMsR0FBR1E7SUFDM0I7SUFDQUMsMEJBQTBCYiw0Q0FBTUEsQ0FBQyxTQUFVWSxFQUFFO1FBQ3pDWCxNQUFNSSxxQkFBcUIsR0FBR087SUFDbEM7SUFDQUUscUJBQXFCZCw0Q0FBTUEsQ0FBQyxTQUFVWSxFQUFFO1FBQ3BDRyxRQUFRQyxHQUFHLENBQUMsVUFBVUosSUFBSTtRQUUxQlgsTUFBTUssWUFBWSxHQUFHTTtJQUN6QjtJQUNBSyxpQkFBaUJqQiw0Q0FBTUEsQ0FBQyxTQUFVWSxFQUFFO1FBQ2hDWCxNQUFNTSxZQUFZLEdBQUdLO0lBQ3pCO0lBSUFNLFdBQVdsQiw0Q0FBTUEsQ0FBQyxTQUFVWSxFQUFFO1FBQzFCLHFDQUFxQztRQUNyQyxJQUFJLENBQUNWLFFBQVEsQ0FBQ2lCLElBQUksQ0FBQ1A7SUFDdkI7SUFDQVEsZUFBZXBCLDRDQUFNQSxDQUFDLFNBQVVZLEVBQUU7UUFDOUIscUNBQXFDO1FBQ3JDLElBQUksQ0FBQ1QsUUFBUSxDQUFDZ0IsSUFBSSxDQUFDUDtJQUN2QjtBQUlKO0FBRUFYLE1BQU1RLGdCQUFnQixDQUFDVSxJQUFJLENBQUM7SUFBRSxNQUFNO0lBQUcsU0FBUztJQUE4QyxlQUFlO0lBQW9JLFNBQVM7SUFBOEcsU0FBUztJQUFNLFlBQVk7SUFBb0IsUUFBUTtJQUFjLE1BQU07SUFBWSxTQUFTO0lBQUksY0FBYztRQUFDO1FBQTBCO1FBQWE7UUFBaUI7UUFBYztLQUFjO0FBQUM7QUFHaGpCbEIsTUFBTVMsZ0JBQWdCLENBQUNTLElBQUk7QUFFM0IsK0RBQWVsQixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3N0b3JlLmpzPzM2NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgYWN0aW9uIH0gZnJvbSAnbW9ieCc7XHJcblxyXG5jb25zdCBzdG9yZSA9IG9ic2VydmFibGUoe1xyXG5cclxuICAgIGNhcnREYXRhOiBbXSxcclxuICAgIHVzZXJEYXRhOiBbXSxcclxuICAgIHBhc3Nlbmdlck1vZGFsOiBmYWxzZSxcclxuICAgIHBhc3NlbmdlckRldGFpbHNNb2RhbDogZmFsc2UsXHJcbiAgICBzdW1tYXJ5TW9kYWw6IGZhbHNlLFxyXG4gICAgcGF5bWVudE1vZGFsOiBmYWxzZSxcclxuICAgIHByYWN0aWNlTW9kYWw6IHRydWUsXHJcbiAgICBjYXJ0RGF0YVByYWN0aWNlOiBbXSxcclxuICAgIHVzZXJEYXRhUHJhY3RpY2U6IFtdLFxyXG5cclxuXHJcblxyXG4gICAgc2V0UGFzc2VuZ2VyTW9kYWw6IGFjdGlvbihmdW5jdGlvbiAoZWwpIHtcclxuXHJcbiAgICAgICAgc3RvcmUucGFzc2VuZ2VyTW9kYWwgPSBlbDtcclxuICAgIH0pLFxyXG4gICAgc2V0cGFzc2VuZ2VyRGV0YWlsc01vZGFsOiBhY3Rpb24oZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgc3RvcmUucGFzc2VuZ2VyRGV0YWlsc01vZGFsID0gZWw7XHJcbiAgICB9KSxcclxuICAgIHNldFN1bW1hcnlPcGVuTW9kYWw6IGFjdGlvbihmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyZFwiLCBlbCwgXCJlbGVtZW50XCIpXHJcblxyXG4gICAgICAgIHN0b3JlLnN1bW1hcnlNb2RhbCA9IGVsO1xyXG4gICAgfSksXHJcbiAgICBzZXRQYXltZW50TW9kYWw6IGFjdGlvbihmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBzdG9yZS5wYXltZW50TW9kYWwgPSBlbDtcclxuICAgIH0pLFxyXG5cclxuXHJcblxyXG4gICAgYWRkVG9DYXJ0OiBhY3Rpb24oZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWwsIFwib2JqZWN0IGVuZXRlcmVkXCIpXHJcbiAgICAgICAgdGhpcy5jYXJ0RGF0YS5wdXNoKGVsKTtcclxuICAgIH0pLFxyXG4gICAgYWRkVG9Vc2VyRGF0YTogYWN0aW9uKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsLCBcIm9iamVjdCBlbmV0ZXJlZFwiKVxyXG4gICAgICAgIHRoaXMudXNlckRhdGEucHVzaChlbCk7XHJcbiAgICB9KSxcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5zdG9yZS5jYXJ0RGF0YVByYWN0aWNlLnB1c2goeyBcImlkXCI6IDEsIFwidGl0bGVcIjogXCJPY2VhbiBTZXJlbml0eTogVGhlIFVsdGltYXRlIEx1eHVyeSBWb3lhZ2VcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkV4cGVyaWVuY2UgY29udmVuaWVudCBhbmQgaGFzc2xlLWZyZWUgc2VhIHRyYXZlbCB3aXRoIG91ciBzdGF0ZS1vZi10aGUtYXJ0IGZlcnJpZXMsIGRlc2lnbmVkIGZvciBhIHNtb290aCBhbmQgZW5qb3lhYmxlIGpvdXJuZXkuXCIsIFwiaW1hZ2VcIjogXCJodHRwczovL3Bob3Rvcy5pbmF1dGlhLmNvbS9iYXJjb3NPY2FzaW9uLzkvOS8xLzIvZmVycmV0dGkteWFjaHRzLTY4MS0yODEwMjA5MDIzMjg2ODY1NTM1MjY5Njg2NTUxNDU2NmkuanBnXCIsIFwicHJpY2VcIjogMjk5NSwgXCJkdXJhdGlvblwiOiBcIjEgRGF5cyAvMSBOaWdodHNcIiwgXCJmcm9tXCI6IFwiUG9ydCBCbGFpclwiLCBcInRvXCI6IFwiSGF2ZWxvY2tcIiwgXCJyb3VuZFwiOiBcIlwiLCBcImFtZW50aXRpZXNcIjogW1wiV2ktRmkgYW5kIENvbm5lY3Rpdml0eVwiLCBcIlJlc3Ryb29tc1wiLCBcIkVudGVydGFpbm1lbnRcIiwgXCJEZXNrLVNwYWNlXCIsIFwiTG91bmdlIEFyZWFcIl0gfSlcclxuXHJcblxyXG5zdG9yZS51c2VyRGF0YVByYWN0aWNlLnB1c2hcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyJdLCJuYW1lcyI6WyJvYnNlcnZhYmxlIiwiYWN0aW9uIiwic3RvcmUiLCJjYXJ0RGF0YSIsInVzZXJEYXRhIiwicGFzc2VuZ2VyTW9kYWwiLCJwYXNzZW5nZXJEZXRhaWxzTW9kYWwiLCJzdW1tYXJ5TW9kYWwiLCJwYXltZW50TW9kYWwiLCJwcmFjdGljZU1vZGFsIiwiY2FydERhdGFQcmFjdGljZSIsInVzZXJEYXRhUHJhY3RpY2UiLCJzZXRQYXNzZW5nZXJNb2RhbCIsImVsIiwic2V0cGFzc2VuZ2VyRGV0YWlsc01vZGFsIiwic2V0U3VtbWFyeU9wZW5Nb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJzZXRQYXltZW50TW9kYWwiLCJhZGRUb0NhcnQiLCJwdXNoIiwiYWRkVG9Vc2VyRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/store.js\n"));

/***/ })

});