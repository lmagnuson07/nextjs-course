"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(start)/page",{

/***/ "(app-pages-browser)/./src/components/input/newsletter-registration.tsx":
/*!**********************************************************!*\
  !*** ./src/components/input/newsletter-registration.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewsletterRegistration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _newsletter_registration_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsletter-registration.module.scss */ \"(app-pages-browser)/./src/components/input/newsletter-registration.module.scss\");\n/* harmony import */ var _newsletter_registration_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var _newsletter_submission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter-submission */ \"(app-pages-browser)/./src/components/input/newsletter-submission.tsx\");\n/* harmony import */ var _src_components_input_NewsletterButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/components/input/NewsletterButton */ \"(app-pages-browser)/./src/components/input/NewsletterButton.tsx\");\n/* harmony import */ var _src_store_notification_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/store/notification-context */ \"(app-pages-browser)/./src/store/notification-context.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst initialState = {\n    message: null\n};\nfunction NewsletterRegistration() {\n    _s();\n    const [state, formAction] = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState)(_newsletter_submission__WEBPACK_IMPORTED_MODULE_2__.registrationHandler, initialState);\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_src_store_notification_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (state.message) {\n            notificationCtx.showNotification({\n                title: \"Newsletter signup\",\n                message: state.message,\n                status: \"success\"\n            });\n        }\n    });\n    notificationCtx.showNotification({\n        title: \"Signing up...\",\n        message: \"Registering for newsletter.\",\n        status: \"pending\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_newsletter_registration_module_scss__WEBPACK_IMPORTED_MODULE_6___default().newsletter),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sign up to stay updated!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: formAction,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_newsletter_registration_module_scss__WEBPACK_IMPORTED_MODULE_6___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"Your email\",\n                            \"aria-label\": \"Your email\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_input_NewsletterButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: state === null || state === void 0 ? void 0 : state.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsletterRegistration, \"r1YgYjGC8nZTF1SF2W4y1uC9INY=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState\n    ];\n});\n_c = NewsletterRegistration;\nvar _c;\n$RefreshReg$(_c, \"NewsletterRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFNEQ7QUFDbkI7QUFDcUI7QUFDSztBQUNBO0FBQ3JCO0FBRTlDLE1BQU1PLGVBQTJDO0lBQy9DQyxTQUFTO0FBQ1g7QUFDZSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxXQUFXLEdBQUdWLHVEQUFZQSxDQUFDQyx1RUFBbUJBLEVBQUVLO0lBRTlELE1BQU1LLGtCQUFrQlAsaURBQVVBLENBQUNELHVFQUFtQkE7SUFDdERFLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUksTUFBTUYsT0FBTyxFQUFFO1lBQ2pCSSxnQkFBZ0JDLGdCQUFnQixDQUFDO2dCQUMvQkMsT0FBTztnQkFDUE4sU0FBU0UsTUFBTUYsT0FBTztnQkFDdEJPLFFBQVE7WUFDVjtRQUNGO0lBQ0Y7SUFDQUgsZ0JBQWdCQyxnQkFBZ0IsQ0FBQztRQUMvQkMsT0FBTztRQUNQTixTQUFTO1FBQ1RPLFFBQVE7SUFDVjtJQUVBLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFXakIsd0ZBQWtCOzswQkFDcEMsOERBQUNtQjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsUUFBUVY7MEJBQ1osNEVBQUNXO29CQUFJTCxXQUFXakIscUZBQWU7O3NDQUM3Qiw4REFBQ3dCOzRCQUNDQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxjQUFXOzs7Ozs7c0NBRWIsOERBQUMxQiw4RUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2pCLDhEQUFDMkI7MEJBQUdwQixrQkFBQUEsNEJBQUFBLE1BQU9GLE9BQU87Ozs7Ozs7Ozs7OztBQUd4QjtHQXJDd0JDOztRQUNNUixtREFBWUE7OztLQURsQlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvbmV3c2xldHRlci1yZWdpc3RyYXRpb24udHN4PzFkYjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZUZvcm1TdGF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyByZWdpc3RyYXRpb25IYW5kbGVyIH0gZnJvbSAnLi9uZXdzbGV0dGVyLXN1Ym1pc3Npb24nO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tICdAL3NyYy9jb21wb25lbnRzL2lucHV0L05ld3NsZXR0ZXJCdXR0b24nO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRleHQgZnJvbSAnQC9zcmMvc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IHsgbWVzc2FnZTogc3RyaW5nIHwgbnVsbCB9ID0ge1xuICBtZXNzYWdlOiBudWxsLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NsZXR0ZXJSZWdpc3RyYXRpb24oKSB7XG4gIGNvbnN0IFtzdGF0ZSwgZm9ybUFjdGlvbl0gPSB1c2VGb3JtU3RhdGUocmVnaXN0cmF0aW9uSGFuZGxlciwgaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCBub3RpZmljYXRpb25DdHggPSB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5tZXNzYWdlKSB7XG4gICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgIHRpdGxlOiAnTmV3c2xldHRlciBzaWdudXAnLFxuICAgICAgICBtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlLFxuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICB0aXRsZTogJ1NpZ25pbmcgdXAuLi4nLFxuICAgIG1lc3NhZ2U6ICdSZWdpc3RlcmluZyBmb3IgbmV3c2xldHRlci4nLFxuICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXdzbGV0dGVyfT5cbiAgICAgIDxoMj5TaWduIHVwIHRvIHN0YXkgdXBkYXRlZCE8L2gyPlxuICAgICAgPGZvcm0gYWN0aW9uPXtmb3JtQWN0aW9ufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJZb3VyIGVtYWlsXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTdWJtaXRCdXR0b24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cD57c3RhdGU/Lm1lc3NhZ2V9PC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjbGFzc2VzIiwidXNlRm9ybVN0YXRlIiwicmVnaXN0cmF0aW9uSGFuZGxlciIsIlN1Ym1pdEJ1dHRvbiIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiaW5pdGlhbFN0YXRlIiwibWVzc2FnZSIsIk5ld3NsZXR0ZXJSZWdpc3RyYXRpb24iLCJzdGF0ZSIsImZvcm1BY3Rpb24iLCJub3RpZmljYXRpb25DdHgiLCJzaG93Tm90aWZpY2F0aW9uIiwidGl0bGUiLCJzdGF0dXMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibmV3c2xldHRlciIsImgyIiwiZm9ybSIsImFjdGlvbiIsImRpdiIsImNvbnRyb2wiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/input/newsletter-registration.tsx\n"));

/***/ })

});