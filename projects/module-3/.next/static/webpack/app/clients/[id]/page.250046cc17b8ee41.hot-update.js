"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/clients/[id]/page",{

/***/ "(app-pages-browser)/./app/clients/[id]/loadProjectHandler.tsx":
/*!*************************************************!*\
  !*** ./app/clients/[id]/loadProjectHandler.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ loadProjectHandler; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction loadProjectHandler() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const search = searchParams.get(\"test\");\n    function handler() {\n        // load projects\n        // router.push('/blog/something/test?test=true');\n        router.push(\"/blog/something/test?test=true\", {\n            shallow: true,\n            locale: \"en-US\",\n            scroll: true,\n            // scrollTo: 'number',\n            scrollTo: 26\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handler,\n        children: JSON.stringify(searchParams)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\module-3\\\\app\\\\clients\\\\[id]\\\\loadProjectHandler.tsx\",\n        lineNumber: 20,\n        columnNumber: 10\n    }, this);\n}\n_s(loadProjectHandler, \"A57ZQKsSKoH4xi482IWIv7kTTfs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jbGllbnRzL1tpZF0vbG9hZFByb2plY3RIYW5kbGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDNkQ7QUFDOUMsU0FBU0U7O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNSSxlQUFlSCxnRUFBZUE7SUFFcEMsTUFBTUksU0FBU0QsYUFBYUUsR0FBRyxDQUFDO0lBRWhDLFNBQVNDO1FBQ1AsZ0JBQWdCO1FBQ2hCLGlEQUFpRDtRQUNqREosT0FBT0ssSUFBSSxDQUFDLGtDQUFrQztZQUM1Q0MsU0FBUztZQUNUQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUixzQkFBc0I7WUFDdEJDLFVBQVU7UUFDWjtJQUNGO0lBQ0EscUJBQU8sOERBQUNDO1FBQU9DLFNBQVNQO2tCQUFVUSxLQUFLQyxTQUFTLENBQUNaOzs7Ozs7QUFDbkQ7R0FsQndCRjs7UUFDUEYsc0RBQVNBO1FBQ0hDLDREQUFlQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2xpZW50cy9baWRdL2xvYWRQcm9qZWN0SGFuZGxlci50c3g/ZDBmYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUHJvamVjdEhhbmRsZXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcblxuICBjb25zdCBzZWFyY2ggPSBzZWFyY2hQYXJhbXMuZ2V0KCd0ZXN0Jyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAvLyBsb2FkIHByb2plY3RzXG4gICAgLy8gcm91dGVyLnB1c2goJy9ibG9nL3NvbWV0aGluZy90ZXN0P3Rlc3Q9dHJ1ZScpO1xuICAgIHJvdXRlci5wdXNoKCcvYmxvZy9zb21ldGhpbmcvdGVzdD90ZXN0PXRydWUnLCB7XG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgbG9jYWxlOiAnZW4tVVMnLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgLy8gc2Nyb2xsVG86ICdudW1iZXInLFxuICAgICAgc2Nyb2xsVG86IDI2LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZXJ9PntKU09OLnN0cmluZ2lmeShzZWFyY2hQYXJhbXMpfTwvYnV0dG9uPjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJsb2FkUHJvamVjdEhhbmRsZXIiLCJyb3V0ZXIiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJnZXQiLCJoYW5kbGVyIiwicHVzaCIsInNoYWxsb3ciLCJsb2NhbGUiLCJzY3JvbGwiLCJzY3JvbGxUbyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/clients/[id]/loadProjectHandler.tsx\n"));

/***/ })

});