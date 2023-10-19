"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FerryList.js":
/*!*********************************!*\
  !*** ./components/FerryList.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card */ \"./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var _styles_ferries_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ferries.module.css */ \"./styles/ferries.module.css\");\n/* harmony import */ var _styles_ferries_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ferries_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction FerryList(param) {\n    let { ferries } = param;\n    const gridStyle = {\n        width: \"50%\",\n        textAlign: \"center\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            title: \"Ferries Today\",\n            children: ferries && ferries.map((el)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Grid, {\n                            style: gridStyle,\n                            className: (_styles_ferries_module_css__WEBPACK_IMPORTED_MODULE_4___default().innercard),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"ferries/\".concat(el.id),\n                                className: (_styles_ferries_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_ferries_module_css__WEBPACK_IMPORTED_MODULE_4___default().product_con),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_styles_ferries_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                                                children: el.title\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                                                lineNumber: 23,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_ferries_module_css__WEBPACK_IMPORTED_MODULE_4___default().center),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: el.image,\n                                                        alt: \"p\",\n                                                        className: (_styles_ferries_module_css__WEBPACK_IMPORTED_MODULE_4___default().pic),\n                                                        height: \"100px\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                                                        lineNumber: 25,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: (_styles_ferries_module_css__WEBPACK_IMPORTED_MODULE_4___default().price),\n                                                        children: [\n                                                            \"Price :\",\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: (_styles_ferries_module_css__WEBPACK_IMPORTED_MODULE_4___default().price_span),\n                                                                children: el.price\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                                                                lineNumber: 26,\n                                                                columnNumber: 76\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                                                        lineNumber: 26,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                                                lineNumber: 24,\n                                                columnNumber: 37\n                                            }, this),\n                                            el.from ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    el.from,\n                                                    \" - \",\n                                                    el.to\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                                                lineNumber: 28,\n                                                columnNumber: 48\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: el.round\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                                                lineNumber: 28,\n                                                columnNumber: 77\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        type: \"primary\",\n                                        children: \"Book tickets\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                                lineNumber: 21,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                            lineNumber: 19,\n                            columnNumber: 25\n                        }, this)\n                    }, el.id, false, {\n                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\FerryList.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = FerryList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FerryList);\nvar _c;\n$RefreshReg$(_c, \"FerryList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlcnJ5TGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0k7QUFDTztBQUFBO0FBQ2E7QUFFakQsU0FBU0ssVUFBVSxLQUFXO1FBQVgsRUFBRUMsT0FBTyxFQUFFLEdBQVg7SUFFZixNQUFNQyxZQUFZO1FBQ2RDLE9BQU87UUFDUEMsV0FBVztJQUNmO0lBQ0EscUJBQ0ksOERBQUNDO2tCQUVHLDRFQUFDUCxxREFBSUE7WUFBQ1EsT0FBTTtzQkFDUEwsV0FBV0EsUUFBUU0sR0FBRyxDQUFDLENBQUNDO2dCQUNyQixxQkFBTzs4QkFDUCw0RUFBQ0g7a0NBQ0csNEVBQUNQLDBEQUFTOzRCQUFDWSxPQUFPUjs0QkFBWVMsV0FBV1osNkVBQWdCO3NDQUVyRCw0RUFBQ0gsa0RBQUlBO2dDQUFDaUIsTUFBTSxXQUFpQixPQUFOTCxHQUFHTSxFQUFFO2dDQUFJSCxXQUFXWix3RUFBVzs7a0RBQ2xELDhEQUFDTTt3Q0FBSU0sV0FBV1osK0VBQWtCOzswREFDOUIsOERBQUNrQjtnREFBRU4sV0FBV1oseUVBQVk7MERBQUdTLEdBQUdGLEtBQUs7Ozs7OzswREFDckMsOERBQUNEO2dEQUFJTSxXQUFXWiwwRUFBYTs7a0VBQ3pCLDhEQUFDb0I7d0RBQUlDLEtBQUtaLEdBQUdhLEtBQUs7d0RBQUVDLEtBQUk7d0RBQUlYLFdBQVdaLHVFQUFVO3dEQUFFeUIsUUFBTzs7Ozs7O2tFQUMxRCw4REFBQ1A7d0RBQUVOLFdBQVdaLHlFQUFZOzs0REFBRTswRUFBTyw4REFBQzJCO2dFQUFLZixXQUFXWiw4RUFBaUI7MEVBQUdTLEdBQUdpQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NENBRW5GakIsR0FBR29CLElBQUksaUJBQUcsOERBQUNYOztvREFBR1QsR0FBR29CLElBQUk7b0RBQUM7b0RBQUlwQixHQUFHcUIsRUFBRTs7Ozs7O3FFQUFRLDhEQUFDWjswREFBR1QsR0FBR3NCLEtBQUs7Ozs7Ozs7Ozs7OztrREFFeEQsOERBQUNqQyx3REFBTUE7d0NBQUNrQyxNQUFLO2tEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFaekJ2QixHQUFHTSxFQUFFOzs7Ozs7WUFzQm5COzs7Ozs7Ozs7OztBQUloQjtLQXRDU2Q7QUF3Q1QsK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZXJyeUxpc3QuanM/Y2QxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9mZXJyaWVzLm1vZHVsZS5jc3NcIlxyXG5cclxuZnVuY3Rpb24gRmVycnlMaXN0KHsgZmVycmllcyB9KSB7XHJcblxyXG4gICAgY29uc3QgZ3JpZFN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDYXJkIHRpdGxlPVwiRmVycmllcyBUb2RheVwiID5cclxuICAgICAgICAgICAgICAgIHtmZXJyaWVzICYmIGZlcnJpZXMubWFwKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtlbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkdyaWQgc3R5bGU9e2dyaWRTdHlsZX0gIGNsYXNzTmFtZT17c3R5bGVzLmlubmVyY2FyZH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YGZlcnJpZXMvJHtlbC5pZH1gfSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfY29ufSAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2VsLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VsLmltYWdlfSBhbHQ9XCJwXCIgY2xhc3NOYW1lPXtzdHlsZXMucGljfSBoZWlnaHQ9XCIxMDBweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+UHJpY2UgOjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlX3NwYW59PntlbC5wcmljZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmZyb20gPyA8cD57ZWwuZnJvbX0gLSB7ZWwudG99PC9wPiA6IDxwPntlbC5yb3VuZH08L3A+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2sgdGlja2V0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZXJyeUxpc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQnV0dG9uIiwiQ2FyZCIsInN0eWxlcyIsIkZlcnJ5TGlzdCIsImZlcnJpZXMiLCJncmlkU3R5bGUiLCJ3aWR0aCIsInRleHRBbGlnbiIsImRpdiIsInRpdGxlIiwibWFwIiwiZWwiLCJHcmlkIiwic3R5bGUiLCJjbGFzc05hbWUiLCJpbm5lcmNhcmQiLCJocmVmIiwiaWQiLCJsaW5rIiwicHJvZHVjdF9jb24iLCJwIiwiY2VudGVyIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJwaWMiLCJoZWlnaHQiLCJwcmljZSIsInNwYW4iLCJwcmljZV9zcGFuIiwiZnJvbSIsInRvIiwicm91bmQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FerryList.js\n"));

/***/ })

});