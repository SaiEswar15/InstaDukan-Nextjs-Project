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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/modal */ \"./node_modules/antd/lib/modal/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/card */ \"./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/flex */ \"./node_modules/antd/lib/flex/index.js\");\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/table */ \"./node_modules/antd/lib/table/index.js\");\n\n\n\n\n\n\n\n\n\nfunction SummaryModal() {\n    const cardStyle = {};\n    const imgStyle = {\n        display: \"block\",\n        width: \"40%\",\n        objectFit: \"contain\"\n    };\n    const heading = {\n        fontWeight: \"bold\",\n        color: \"blue\"\n    };\n    const ferry = _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cartDataPractice;\n    const userData = _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].userDataPractice;\n    const handleOk = ()=>{\n    // store.setSummaryOpenModal(false);\n    // store.setPaymentModal(true);\n    };\n    const handleCancel = ()=>{\n    // store.setSummaryOpenModal(false);\n    };\n    const columns = [\n        {\n            title: \"Name\",\n            dataIndex: \"name\"\n        },\n        {\n            title: \"Age\",\n            dataIndex: \"age\"\n        },\n        {\n            title: \"Gender\",\n            dataIndex: \"gender\"\n        },\n        {\n            title: \"Travel Date\",\n            dataIndex: \"travelDate\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: \"Summary Details\",\n        className: \"summary-modal\",\n        open: _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].practiceModal,\n        onOk: handleOk,\n        okText: \"Confirm Booking\",\n        onCancel: handleCancel,\n        children: ferry && userData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    hoverable: true,\n                    style: cardStyle,\n                    bodyStyle: {\n                        padding: 0,\n                        overflow: \"hidden\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        justify: \"space-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"avatar\",\n                                src: ferry.image,\n                                style: imgStyle\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                lineNumber: 79,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_flex__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                vertical: true,\n                                align: \"flex-start\",\n                                justify: \"space-between\",\n                                style: {\n                                    padding: 32\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: ferry.title\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                style: heading,\n                                                children: \"Ticket Price : \"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 36\n                                            }, this),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: ferry.price\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 83\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                style: heading,\n                                                children: \"No of Passengers : \"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 36\n                                            }, this),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    \" \",\n                                                    userData.length\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 87\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                style: heading,\n                                                children: \"Grand Total : \"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 36\n                                            }, this),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: ferry.price * userData.length\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 82\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                style: heading,\n                                                children: \"From - To : \"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 36\n                                            }, this),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    ferry.from,\n                                                    \" - \",\n                                                    ferry.to\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 80\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                                lineNumber: 84,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                        lineNumber: 78,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                    lineNumber: 77,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Passenger List\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                    lineNumber: 98,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    columns: columns,\n                    dataSource: userData\n                }, void 0, false, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n                    lineNumber: 101,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n            lineNumber: 76,\n            columnNumber: 17\n        }, this) : null\n    }, void 0, false, {\n        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\pages\\\\practice.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, this);\n}\n_c = SummaryModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(SummaryModal));\nvar _c, _c1;\n$RefreshReg$(_c, \"SummaryModal\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcmFjdGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0I7QUFDUjtBQUNOO0FBRXdCO0FBQUE7QUFBQTtBQUFBO0FBSXJELFNBQVNRO0lBRUwsTUFBTUMsWUFBWSxDQUVsQjtJQUVBLE1BQU1DLFdBQVc7UUFDYkMsU0FBUztRQUNUQyxPQUFPO1FBRVBDLFdBQVc7SUFDZjtJQUVBLE1BQU1DLFVBQVU7UUFDWkMsWUFBYTtRQUNiQyxPQUFRO0lBQ1o7SUFFQSxNQUFNQyxRQUFRZixxRUFBc0I7SUFFcEMsTUFBTWlCLFdBQVdqQixxRUFBc0I7SUFFdkMsTUFBTW1CLFdBQVc7SUFFYixvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQ25DO0lBRUEsTUFBTUMsZUFBZTtJQUVqQixvQ0FBb0M7SUFDeEM7SUFFQSxNQUFNQyxVQUFVO1FBQ1o7WUFDRUMsT0FBTztZQUNQQyxXQUFXO1FBRWI7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLFdBQVc7UUFFYjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsV0FBVztRQUViO1FBQ0E7WUFDSUQsT0FBTztZQUNQQyxXQUFXO1FBRWY7S0FDSDtJQUVELHFCQUNJLDhEQUFDdEIsc0RBQUtBO1FBQ0ZxQixPQUFNO1FBQ05FLFdBQVU7UUFDVkMsTUFBTXpCLGtFQUFtQjtRQUN6QjJCLE1BQU1SO1FBQ05TLFFBQU87UUFDUEMsVUFBVVQ7a0JBRVRMLFNBQVNFLHlCQUNOLDhEQUFDYTs7OEJBQ0csOERBQUM1QixxREFBSUE7b0JBQUM2QixTQUFTO29CQUFDQyxPQUFPekI7b0JBQVcwQixXQUFXO3dCQUFFQyxTQUFTO3dCQUFHQyxVQUFVO29CQUFTOzhCQUMxRSw0RUFBQ2hDLHFEQUFJQTt3QkFBQ2lDLFNBQVE7OzBDQUNWLDhEQUFDQztnQ0FDR0MsS0FBSTtnQ0FDSkMsS0FBS3hCLE1BQU15QixLQUFLO2dDQUNoQlIsT0FBT3hCOzs7Ozs7MENBRVgsOERBQUNMLHFEQUFJQTtnQ0FBQ3NDLFFBQVE7Z0NBQUNDLE9BQU07Z0NBQWFOLFNBQVE7Z0NBQWdCSixPQUFPO29DQUFFRSxTQUFTO2dDQUFHOztrREFDM0UsOERBQUNTO2tEQUNJNUIsTUFBTU8sS0FBSzs7Ozs7O2tEQUVoQiw4REFBQ3NCOzswREFBRSw4REFBQ0M7Z0RBQUtiLE9BQVNwQjswREFBUzs7Ozs7OzRDQUFzQjswREFBQyw4REFBQ2lDOzBEQUFNOUIsTUFBTStCLEtBQUs7Ozs7Ozs7Ozs7OztrREFDcEUsOERBQUNGOzswREFBRSw4REFBQ0M7Z0RBQUtiLE9BQVNwQjswREFBUzs7Ozs7OzRDQUEwQjswREFBQyw4REFBQ2lDOztvREFBSztvREFBRTVCLFNBQVM4QixNQUFNOzs7Ozs7Ozs7Ozs7O2tEQUM3RSw4REFBQ0g7OzBEQUFFLDhEQUFDQztnREFBS2IsT0FBU3BCOzBEQUFTOzs7Ozs7NENBQXFCOzBEQUFDLDhEQUFDaUM7MERBQU05QixNQUFNK0IsS0FBSyxHQUFHN0IsU0FBUzhCLE1BQU07Ozs7Ozs7Ozs7OztrREFDckYsOERBQUNIOzswREFBRSw4REFBQ0M7Z0RBQUtiLE9BQVNwQjswREFBUzs7Ozs7OzRDQUFtQjswREFBQyw4REFBQ2lDOztvREFBTTlCLE1BQU1pQyxJQUFJO29EQUFDO29EQUFJakMsTUFBTWtDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPekYsOERBQUNOOzhCQUFHOzs7Ozs7OEJBR0osOERBQUN0QyxzREFBS0E7b0JBQUNnQixTQUFTQTtvQkFBUzZCLFlBQVlqQzs7Ozs7Ozs7Ozs7bUJBRWhDOzs7Ozs7QUFJekI7S0FqR1NYO0FBbUdULCtEQUFlLE1BQUFQLHlEQUFRQSxDQUFDTyxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ByYWN0aWNlLmpzPzZiMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgeyBDYXJkLCBGbGV4LCBUeXBvZ3JhcGh5LCBUYWJsZSB9IGZyb20gJ2FudGQnO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBTdW1tYXJ5TW9kYWwoKSB7XHJcblxyXG4gICAgY29uc3QgY2FyZFN0eWxlID0ge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW1nU3R5bGUgPSB7XHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICB3aWR0aDogJzQwJScsXHJcblxyXG4gICAgICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmcgPSB7XHJcbiAgICAgICAgZm9udFdlaWdodCA6ICdib2xkJyxcclxuICAgICAgICBjb2xvciA6ICdibHVlJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZlcnJ5ID0gc3RvcmUuY2FydERhdGFQcmFjdGljZTtcclxuXHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHN0b3JlLnVzZXJEYXRhUHJhY3RpY2U7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIHN0b3JlLnNldFN1bW1hcnlPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIC8vIHN0b3JlLnNldFBheW1lbnRNb2RhbCh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBzdG9yZS5zZXRTdW1tYXJ5T3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ05hbWUnLFxyXG4gICAgICAgICAgZGF0YUluZGV4OiAnbmFtZScsXHJcbiAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnQWdlJyxcclxuICAgICAgICAgIGRhdGFJbmRleDogJ2FnZScsXHJcbiAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnR2VuZGVyJyxcclxuICAgICAgICAgIGRhdGFJbmRleDogJ2dlbmRlcicsXHJcbiAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUcmF2ZWwgRGF0ZScsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ3RyYXZlbERhdGUnLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU3VtbWFyeSBEZXRhaWxzXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzdW1tYXJ5LW1vZGFsJ1xyXG4gICAgICAgICAgICBvcGVuPXtzdG9yZS5wcmFjdGljZU1vZGFsfVxyXG4gICAgICAgICAgICBvbk9rPXtoYW5kbGVPa31cclxuICAgICAgICAgICAgb2tUZXh0PVwiQ29uZmlybSBCb29raW5nXCJcclxuICAgICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH0+XHJcblxyXG4gICAgICAgICAgICB7ZmVycnkgJiYgdXNlckRhdGEgP1xyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBob3ZlcmFibGUgc3R5bGU9e2NhcmRTdHlsZX0gYm9keVN0eWxlPXt7IHBhZGRpbmc6IDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZmVycnkuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IHZlcnRpY2FsIGFsaWduPVwiZmxleC1zdGFydFwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgc3R5bGU9e3sgcGFkZGluZzogMzIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVycnkudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBzdHlsZSA9IHtoZWFkaW5nfT5UaWNrZXQgUHJpY2UgOiA8L3NwYW4+IDxzcGFuPntmZXJyeS5wcmljZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlID0ge2hlYWRpbmd9Pk5vIG9mIFBhc3NlbmdlcnMgOiA8L3NwYW4+IDxzcGFuPiB7dXNlckRhdGEubGVuZ3RofTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGUgPSB7aGVhZGluZ30+R3JhbmQgVG90YWwgOiA8L3NwYW4+IDxzcGFuPntmZXJyeS5wcmljZSAqIHVzZXJEYXRhLmxlbmd0aH08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlID0ge2hlYWRpbmd9PkZyb20gLSBUbyA6IDwvc3Bhbj4gPHNwYW4+e2ZlcnJ5LmZyb219IC0ge2ZlcnJ5LnRvfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5QYXNzZW5nZXIgTGlzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXt1c2VyRGF0YX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihTdW1tYXJ5TW9kYWwpIl0sIm5hbWVzIjpbIlJlYWN0Iiwib2JzZXJ2ZXIiLCJzdG9yZSIsIk1vZGFsIiwiQ2FyZCIsIkZsZXgiLCJUeXBvZ3JhcGh5IiwiVGFibGUiLCJTdW1tYXJ5TW9kYWwiLCJjYXJkU3R5bGUiLCJpbWdTdHlsZSIsImRpc3BsYXkiLCJ3aWR0aCIsIm9iamVjdEZpdCIsImhlYWRpbmciLCJmb250V2VpZ2h0IiwiY29sb3IiLCJmZXJyeSIsImNhcnREYXRhUHJhY3RpY2UiLCJ1c2VyRGF0YSIsInVzZXJEYXRhUHJhY3RpY2UiLCJoYW5kbGVPayIsImhhbmRsZUNhbmNlbCIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImNsYXNzTmFtZSIsIm9wZW4iLCJwcmFjdGljZU1vZGFsIiwib25PayIsIm9rVGV4dCIsIm9uQ2FuY2VsIiwiZGl2IiwiaG92ZXJhYmxlIiwic3R5bGUiLCJib2R5U3R5bGUiLCJwYWRkaW5nIiwib3ZlcmZsb3ciLCJqdXN0aWZ5IiwiaW1nIiwiYWx0Iiwic3JjIiwiaW1hZ2UiLCJ2ZXJ0aWNhbCIsImFsaWduIiwiaDMiLCJwIiwic3BhbiIsInByaWNlIiwibGVuZ3RoIiwiZnJvbSIsInRvIiwiZGF0YVNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/practice.js\n"));

/***/ })

});