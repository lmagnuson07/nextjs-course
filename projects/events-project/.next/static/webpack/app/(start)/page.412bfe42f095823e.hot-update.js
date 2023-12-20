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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewsletterRegistration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _newsletter_registration_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsletter-registration.module.scss */ \"(app-pages-browser)/./src/components/input/newsletter-registration.module.scss\");\n/* harmony import */ var _newsletter_registration_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var _newsletter_submission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter-submission */ \"(app-pages-browser)/./src/components/input/newsletter-submission.tsx\");\n/* harmony import */ var _src_components_input_NewsletterButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/components/input/NewsletterButton */ \"(app-pages-browser)/./src/components/input/NewsletterButton.tsx\");\n/* harmony import */ var _src_store_notification_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/store/notification-context */ \"(app-pages-browser)/./src/store/notification-context.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst initialState = {\n    message: null\n};\nfunction NewsletterRegistration() {\n    _s();\n    const [pending, setPending] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [state, formAction] = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState)(_newsletter_submission__WEBPACK_IMPORTED_MODULE_2__.registrationHandler, initialState);\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_src_store_notification_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const contextRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(context);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (state.message) {\n            contextRef.current.showNotification({\n                title: \"Signing up...\",\n                message: state.message,\n                status: \"pending\"\n            });\n        }\n    }, [\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_newsletter_registration_module_scss__WEBPACK_IMPORTED_MODULE_6___default().newsletter),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sign up to stay updated!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: formAction,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_newsletter_registration_module_scss__WEBPACK_IMPORTED_MODULE_6___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"Your email\",\n                            \"aria-label\": \"Your email\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_input_NewsletterButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onClick: ()=>setPending(true),\n                            pending: pending\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: state === null || state === void 0 ? void 0 : state.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\newsletter-registration.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsletterRegistration, \"hkPfxmjV43jCI2r5DnOLk+v+W1U=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState\n    ];\n});\n_c = NewsletterRegistration;\nvar _c;\n$RefreshReg$(_c, \"NewsletterRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFNEQ7QUFDbkI7QUFDcUI7QUFDSztBQUNBO0FBQ0g7QUFFaEUsTUFBTVMsZUFBMkM7SUFDL0NDLFNBQVM7QUFDWDtBQUNlLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTSxPQUFPQyxXQUFXLEdBQUdkLHVEQUFZQSxDQUFDQyx1RUFBbUJBLEVBQUVPO0lBQzlELE1BQU1PLFVBQVVYLGlEQUFVQSxDQUFDRCx1RUFBbUJBO0lBQzlDLE1BQU1hLGFBQWFWLDZDQUFNQSxDQUFDUztJQUUxQlYsZ0RBQVNBLENBQUM7UUFDUixJQUFJUSxNQUFNSixPQUFPLEVBQUU7WUFDakJPLFdBQVdDLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUM7Z0JBQ2xDQyxPQUFPO2dCQUNQVixTQUFTSSxNQUFNSixPQUFPO2dCQUN0QlcsUUFBUTtZQUNWO1FBQ0Y7SUFDRixHQUFHO1FBQUNQO0tBQU07SUFFVixxQkFDRSw4REFBQ1E7UUFBUUMsV0FBV3ZCLHdGQUFrQjs7MEJBQ3BDLDhEQUFDeUI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFFBQVFaOzBCQUNaLDRFQUFDYTtvQkFBSUwsV0FBV3ZCLHFGQUFlOztzQ0FDN0IsOERBQUM4Qjs0QkFDQ0MsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSEMsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsY0FBVzs7Ozs7O3NDQUViLDhEQUFDaEMsOEVBQVlBOzRCQUFDaUMsU0FBUyxJQUFNdkIsV0FBVzs0QkFBT0QsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc1RCw4REFBQ3lCOzBCQUFHdkIsa0JBQUFBLDRCQUFBQSxNQUFPSixPQUFPOzs7Ozs7Ozs7Ozs7QUFHeEI7R0FsQ3dCQzs7UUFFTVYsbURBQVlBOzs7S0FGbEJVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLnRzeD8xZGIzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VGb3JtU3RhdGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgcmVnaXN0cmF0aW9uSGFuZGxlciB9IGZyb20gJy4vbmV3c2xldHRlci1zdWJtaXNzaW9uJztcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSAnQC9zcmMvY29tcG9uZW50cy9pbnB1dC9OZXdzbGV0dGVyQnV0dG9uJztcbmltcG9ydCBOb3RpZmljYXRpb25Db250ZXh0IGZyb20gJ0Avc3JjL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiB7IG1lc3NhZ2U6IHN0cmluZyB8IG51bGwgfSA9IHtcbiAgbWVzc2FnZTogbnVsbCxcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzbGV0dGVyUmVnaXN0cmF0aW9uKCkge1xuICBjb25zdCBbcGVuZGluZywgc2V0UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGF0ZSwgZm9ybUFjdGlvbl0gPSB1c2VGb3JtU3RhdGUocmVnaXN0cmF0aW9uSGFuZGxlciwgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XG4gIGNvbnN0IGNvbnRleHRSZWYgPSB1c2VSZWYoY29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUubWVzc2FnZSkge1xuICAgICAgY29udGV4dFJlZi5jdXJyZW50LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICB0aXRsZTogJ1NpZ25pbmcgdXAuLi4nLFxuICAgICAgICBtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlLFxuICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3N0YXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubmV3c2xldHRlcn0+XG4gICAgICA8aDI+U2lnbiB1cCB0byBzdGF5IHVwZGF0ZWQhPC9oMj5cbiAgICAgIDxmb3JtIGFjdGlvbj17Zm9ybUFjdGlvbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiWW91ciBlbWFpbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U3VibWl0QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBlbmRpbmcodHJ1ZSl9IHBlbmRpbmc9e3BlbmRpbmd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPHA+e3N0YXRlPy5tZXNzYWdlfTwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY2xhc3NlcyIsInVzZUZvcm1TdGF0ZSIsInJlZ2lzdHJhdGlvbkhhbmRsZXIiLCJTdWJtaXRCdXR0b24iLCJOb3RpZmljYXRpb25Db250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwibWVzc2FnZSIsIk5ld3NsZXR0ZXJSZWdpc3RyYXRpb24iLCJwZW5kaW5nIiwic2V0UGVuZGluZyIsInN0YXRlIiwiZm9ybUFjdGlvbiIsImNvbnRleHQiLCJjb250ZXh0UmVmIiwiY3VycmVudCIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsInN0YXR1cyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJuZXdzbGV0dGVyIiwiaDIiLCJmb3JtIiwiYWN0aW9uIiwiZGl2IiwiY29udHJvbCIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/input/newsletter-registration.tsx\n"));

/***/ })

});