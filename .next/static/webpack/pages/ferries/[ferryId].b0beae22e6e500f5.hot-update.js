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

/***/ "./components/Modals/OpenModal.js":
/*!****************************************!*\
  !*** ./components/Modals/OpenModal.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/modal */ \"./node_modules/antd/lib/modal/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ \"./store/store.js\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n\n\n\n\n\n\nfunction OpenModal() {\n    const handleOk = ()=>{\n        //summary should open\n        _store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setPassengerModal(false);\n        _store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setSummaryOpenModal(true);\n    };\n    const handleCancel = ()=>{\n        _store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setPassengerModal(false);\n    };\n    function addPassenger() {\n        _store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setPassengerModal(false);\n        _store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setpassengerDetailsModal(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            title: \"Passenger Details\",\n            className: \"modal\",\n            open: _store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].passengerModal,\n            onOk: handleOk,\n            okText: \"Book Tickets\",\n            onCancel: handleCancel,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Passenger List\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\Modals\\\\OpenModal.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n                    columns: columns,\n                    dataSource: userData\n                }, void 0, false, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\Modals\\\\OpenModal.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"con1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        type: \"primary\",\n                        className: \"con1-button\",\n                        onClick: addPassenger,\n                        children: \"Add Passenger\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\Modals\\\\OpenModal.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\Modals\\\\OpenModal.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\WORKSPACE\\\\NEXT JS\\\\project\\\\components\\\\Modals\\\\OpenModal.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = OpenModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(OpenModal));\nvar _c, _c1;\n$RefreshReg$(_c, \"OpenModal\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFscy9PcGVuTW9kYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUFBO0FBQ0M7QUFDSztBQUUzQyxTQUFTSztJQUVMLE1BQU1DLFdBQVc7UUFDYixxQkFBcUI7UUFDckJILHNFQUF1QixDQUFDO1FBQ3hCQSx3RUFBeUIsQ0FBQztJQUU5QjtJQUVBLE1BQU1NLGVBQWU7UUFDakJOLHNFQUF1QixDQUFDO0lBQzVCO0lBRUEsU0FBU087UUFDTFAsc0VBQXVCLENBQUM7UUFDeEJBLDZFQUE4QixDQUFDO0lBQ25DO0lBQ0EscUJBQ0k7a0JBQ0ksNEVBQUNELHNEQUFLQTtZQUNGVSxPQUFNO1lBQ05DLFdBQVU7WUFDVkMsTUFBTVgsbUVBQW9CO1lBQzFCYSxNQUFNVjtZQUNOVyxRQUFPO1lBQ1BDLFVBQVVUOzs4QkFFViw4REFBQ1U7OEJBQUc7Ozs7Ozs4QkFHSiw4REFBQ0M7b0JBQU1DLFNBQVNBO29CQUFTQyxZQUFZQzs7Ozs7OzhCQUVyQyw4REFBQ0M7b0JBQUlYLFdBQVU7OEJBQ1gsNEVBQUNaLHdEQUFNQTt3QkFBQ3dCLE1BQUs7d0JBQVVaLFdBQVU7d0JBQWNhLFNBQVNoQjtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFGO0tBdENTTDtBQXdDVCwrREFBZSxNQUFBRCx5REFBUUEsQ0FBQ0MsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vZGFscy9PcGVuTW9kYWwuanM/NTVmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xyXG5cclxuZnVuY3Rpb24gT3Blbk1vZGFsKCkge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9rID0gKCkgPT4ge1xyXG4gICAgICAgIC8vc3VtbWFyeSBzaG91bGQgb3BlblxyXG4gICAgICAgIHN0b3JlLnNldFBhc3Nlbmdlck1vZGFsKGZhbHNlKTtcclxuICAgICAgICBzdG9yZS5zZXRTdW1tYXJ5T3Blbk1vZGFsKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc3RvcmUuc2V0UGFzc2VuZ2VyTW9kYWwoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRQYXNzZW5nZXIoKSB7XHJcbiAgICAgICAgc3RvcmUuc2V0UGFzc2VuZ2VyTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIHN0b3JlLnNldHBhc3NlbmdlckRldGFpbHNNb2RhbCh0cnVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhc3NlbmdlciBEZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbW9kYWwnXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtzdG9yZS5wYXNzZW5nZXJNb2RhbH1cclxuICAgICAgICAgICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgICAgICAgICAgb2tUZXh0PVwiQm9vayBUaWNrZXRzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMz5QYXNzZW5nZXIgTGlzdDwvaDM+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXt1c2VyRGF0YX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29uMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT0nY29uMS1idXR0b24nIG9uQ2xpY2s9e2FkZFBhc3Nlbmdlcn0+QWRkIFBhc3NlbmdlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyKE9wZW5Nb2RhbCkiXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJNb2RhbCIsInN0b3JlIiwib2JzZXJ2ZXIiLCJPcGVuTW9kYWwiLCJoYW5kbGVPayIsInNldFBhc3Nlbmdlck1vZGFsIiwic2V0U3VtbWFyeU9wZW5Nb2RhbCIsImhhbmRsZUNhbmNlbCIsImFkZFBhc3NlbmdlciIsInNldHBhc3NlbmdlckRldGFpbHNNb2RhbCIsInRpdGxlIiwiY2xhc3NOYW1lIiwib3BlbiIsInBhc3Nlbmdlck1vZGFsIiwib25PayIsIm9rVGV4dCIsIm9uQ2FuY2VsIiwiaDMiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhU291cmNlIiwidXNlckRhdGEiLCJkaXYiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Modals/OpenModal.js\n"));

/***/ })

});