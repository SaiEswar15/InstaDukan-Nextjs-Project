"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/practice",{

/***/ "./pages/practice.js":
/*!***************************!*\
  !*** ./pages/practice.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/modal */ \"./node_modules/antd/lib/modal/index.js\");\n\n\n\n\n\nfunction SummaryModal() {\n    const ferry = _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cartDataPractice;\n    const userData = _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].userDataPractice;\n    const handleOk = ()=>{\n    // store.setSummaryOpenModal(false);\n    // store.setPaymentModal(true);\n    };\n    const handleCancel = ()=>{\n    // store.setSummaryOpenModal(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: \"Summary Details\",\n        className: \"summary-modal\",\n        open: _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].practiceModal,\n        onOk: handleOk,\n        okText: \"Confirm Booking\",\n        onCancel: handleCancel,\n        children: ferry && userData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: ferry.image\n                }, void 0, false, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: ferry.title\n                }, void 0, false, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Ticket Price : \",\n                        JSON.parse(ferry.price)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"No of Passengers : \",\n                        userData.length\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Grand Total : \",\n                        ferry.price * userData.length\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Passenger List\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this),\n                userData && userData.map((el, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: el.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: el.age\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: el.gender\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                        lineNumber: 45,\n                        columnNumber: 28\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, this) : null\n    }, void 0, false, {\n        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c = SummaryModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(SummaryModal));\nvar _c, _c1;\n$RefreshReg$(_c, \"SummaryModal\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcmFjdGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDa0I7QUFDUjtBQUNOO0FBRTdCLFNBQVNJO0lBT0wsTUFBTUMsUUFBUUgscUVBQXNCO0lBQ3BDLE1BQU1LLFdBQVdMLHFFQUFzQjtJQUV2QyxNQUFNTyxXQUFXO0lBRWIsb0NBQW9DO0lBQ3BDLCtCQUErQjtJQUNuQztJQUVBLE1BQU1DLGVBQWU7SUFFakIsb0NBQW9DO0lBQ3hDO0lBQ0EscUJBQ0ksOERBQUNQLHNEQUFLQTtRQUNGUSxPQUFNO1FBQ05DLFdBQVU7UUFDVkMsTUFBTVgsa0VBQW1CO1FBQ3pCYSxNQUFNTjtRQUNOTyxRQUFPO1FBQ1BDLFVBQVVQO2tCQUVUTCxTQUFTRSx5QkFDViw4REFBQ1c7OzhCQUNHLDhEQUFDQztvQkFBSUMsS0FBT2YsTUFBTWdCLEtBQUs7Ozs7Ozs4QkFDdkIsOERBQUNDOzhCQUFHakIsTUFBTU0sS0FBSzs7Ozs7OzhCQUNmLDhEQUFDVzs7d0JBQUU7d0JBQWdCQyxLQUFLQyxLQUFLLENBQUNuQixNQUFNb0IsS0FBSzs7Ozs7Ozs4QkFDekMsOERBQUNIOzt3QkFBRTt3QkFBb0JmLFNBQVNtQixNQUFNOzs7Ozs7OzhCQUN0Qyw4REFBQ0o7O3dCQUFFO3dCQUFlakIsTUFBTW9CLEtBQUssR0FBR2xCLFNBQVNtQixNQUFNOzs7Ozs7OzhCQUUvQyw4REFBQ0o7OEJBQUU7Ozs7OztnQkFDRmYsWUFBWUEsU0FBU29CLEdBQUcsQ0FBQyxDQUFDQyxJQUFHQztvQkFDMUIscUJBQU8sOERBQUNYOzswQ0FDSiw4REFBQ0k7MENBQUdNLEdBQUdFLElBQUk7Ozs7OzswQ0FDWCw4REFBQ1I7MENBQUdNLEdBQUdHLEdBQUc7Ozs7OzswQ0FDViw4REFBQ1Q7MENBQUdNLEdBQUdJLE1BQU07Ozs7Ozs7dUJBSEVIOzs7OztnQkFLdkI7Ozs7OzttQkFFRzs7Ozs7O0FBSW5CO0tBbERTekI7QUFvRFQsK0RBQWUsTUFBQUgseURBQVFBLENBQUNHLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJhY3RpY2UuanM/NmIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuXHJcbmZ1bmN0aW9uIFN1bW1hcnlNb2RhbCgpIHtcclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgZmVycnkgPSBzdG9yZS5jYXJ0RGF0YVByYWN0aWNlO1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBzdG9yZS51c2VyRGF0YVByYWN0aWNlO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9rID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHN0b3JlLnNldFN1bW1hcnlPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIC8vIHN0b3JlLnNldFBheW1lbnRNb2RhbCh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHN0b3JlLnNldFN1bW1hcnlPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU3VtbWFyeSBEZXRhaWxzXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzdW1tYXJ5LW1vZGFsJ1xyXG4gICAgICAgICAgICBvcGVuPXtzdG9yZS5wcmFjdGljZU1vZGFsfVxyXG4gICAgICAgICAgICBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICAgICAgb2tUZXh0PVwiQ29uZmlybSBCb29raW5nXCJcclxuICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZmVycnkgJiYgdXNlckRhdGEgP1xyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmMgPSB7ZmVycnkuaW1hZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxwPntmZXJyeS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5UaWNrZXQgUHJpY2UgOiB7SlNPTi5wYXJzZShmZXJyeS5wcmljZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Tm8gb2YgUGFzc2VuZ2VycyA6IHt1c2VyRGF0YS5sZW5ndGh9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+R3JhbmQgVG90YWwgOiB7ZmVycnkucHJpY2UgKiB1c2VyRGF0YS5sZW5ndGh9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPlBhc3NlbmdlciBMaXN0PC9wPlxyXG4gICAgICAgICAgICAgICAge3VzZXJEYXRhICYmIHVzZXJEYXRhLm1hcCgoZWwsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5ID0ge2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZWwuYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsLmdlbmRlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyKFN1bW1hcnlNb2RhbCkiXSwibmFtZXMiOlsiUmVhY3QiLCJvYnNlcnZlciIsInN0b3JlIiwiTW9kYWwiLCJTdW1tYXJ5TW9kYWwiLCJmZXJyeSIsImNhcnREYXRhUHJhY3RpY2UiLCJ1c2VyRGF0YSIsInVzZXJEYXRhUHJhY3RpY2UiLCJoYW5kbGVPayIsImhhbmRsZUNhbmNlbCIsInRpdGxlIiwiY2xhc3NOYW1lIiwib3BlbiIsInByYWN0aWNlTW9kYWwiLCJvbk9rIiwib2tUZXh0Iiwib25DYW5jZWwiLCJkaXYiLCJpbWciLCJzcmMiLCJpbWFnZSIsInAiLCJKU09OIiwicGFyc2UiLCJwcmljZSIsImxlbmd0aCIsIm1hcCIsImVsIiwiaW5kZXgiLCJuYW1lIiwiYWdlIiwiZ2VuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/practice.js\n"));

/***/ })

});