"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(start)/auth/page",{

/***/ "(app-pages-browser)/./src/auth/auth-form.tsx":
/*!********************************!*\
  !*** ./src/auth/auth-form.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var _auth_form_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-form.module.scss */ \"(app-pages-browser)/./src/auth/auth-form.module.scss\");\n/* harmony import */ var _auth_form_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/auth/actions */ \"(app-pages-browser)/./src/auth/actions.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst initialState = {\n    email: \"\",\n    password: \"\",\n    success: null\n};\nconst createUser = async function(email, password) {\n    const response = await fetch(\"/api/auth/signup\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            email: email,\n            password: password\n        })\n    });\n    const data = await response.json();\n    if (!response.ok) {\n        console.log(\"Error creating user\");\n    }\n    return data;\n};\nfunction AuthForm() {\n    _s();\n    const submitHandler = async function(prevState, formData) {\n        let user = null;\n        if (isLogin) {\n            try {\n                const result = await (0,_src_auth_actions__WEBPACK_IMPORTED_MODULE_3__.authenticate)(prevState, formData);\n                console.log(\"Login result: \".concat(result));\n            } catch (error) {\n                console.log(\"Sign in error: \".concat(error, \"}\"));\n            }\n        } else {\n            const email = formData.get(\"email\");\n            const password = formData.get(\"password\");\n            try {\n                user = createUser(email, password);\n            } catch (error) {\n                console.log(\"Sign up error: \".concat(error));\n            }\n        }\n        return user;\n    };\n    const [state, formAction] = (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.useFormState)(submitHandler, initialState);\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    function switchAuthModeHandler() {\n        setIsLogin((prevState)=>!prevState);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_auth_form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().auth),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: isLogin ? \"Login\" : \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: formAction,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Your Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: \"Your Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                name: \"password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().actions),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: isLogin ? \"Login\" : \"Create Account\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: (_auth_form_module_scss__WEBPACK_IMPORTED_MODULE_4___default().toggle),\n                                onClick: switchAuthModeHandler,\n                                children: isLogin ? \"Create new account\" : \"Login with existing account\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\nextjs-auth\\\\src\\\\auth\\\\auth-form.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthForm, \"Xknz3uy+Ju95maTQpBywvUiIMt8=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_2__.useFormState\n    ];\n});\n_c = AuthForm;\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hdXRoL2F1dGgtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNRO0FBRUs7QUFFSTtBQUVsRCxNQUFNSSxlQUFxQjtJQUN6QkMsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFNBQVM7QUFDWDtBQUVBLE1BQU1DLGFBQWEsZUFDakJILEtBQWdDLEVBQ2hDQyxRQUFtQztJQUVuQyxNQUFNRyxXQUFXLE1BQU1DLE1BQU0sb0JBQW9CO1FBQy9DQyxRQUFRO1FBQ1JDLFNBQVM7WUFBRSxnQkFBZ0I7UUFBbUI7UUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUFFVixPQUFPQTtZQUFPQyxVQUFVQTtRQUFTO0lBQzFEO0lBQ0EsTUFBTVUsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO0lBRWhDLElBQUksQ0FBQ1IsU0FBU1MsRUFBRSxFQUFFO1FBQ2hCQyxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUNBLE9BQU9KO0FBQ1Q7QUFFZSxTQUFTSzs7SUFDdEIsTUFBTUMsZ0JBQWdCLGVBQWdCQyxTQUFlLEVBQUVDLFFBQWtCO1FBQ3ZFLElBQUlDLE9BQU87UUFDWCxJQUFJQyxTQUFTO1lBQ1gsSUFBSTtnQkFDRixNQUFNQyxTQUFTLE1BQU14QiwrREFBWUEsQ0FBQ29CLFdBQVdDO2dCQUM3Q0wsUUFBUUMsR0FBRyxDQUFDLGlCQUF3QixPQUFQTztZQUMvQixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RULFFBQVFDLEdBQUcsQ0FBQyxrQkFBd0IsT0FBTlEsT0FBTTtZQUN0QztRQUNGLE9BQU87WUFDTCxNQUFNdkIsUUFBbUNtQixTQUFTSyxHQUFHLENBQUM7WUFDdEQsTUFBTXZCLFdBQXNDa0IsU0FBU0ssR0FBRyxDQUFDO1lBQ3pELElBQUk7Z0JBQ0ZKLE9BQU9qQixXQUFXSCxPQUFPQztZQUMzQixFQUFFLE9BQU9zQixPQUFPO2dCQUNkVCxRQUFRQyxHQUFHLENBQUMsa0JBQXdCLE9BQU5RO1lBQ2hDO1FBQ0Y7UUFDQSxPQUFPSDtJQUNUO0lBQ0EsTUFBTSxDQUFDSyxPQUFPQyxXQUFXLEdBQUc5Qix1REFBWUEsQ0FBQ3FCLGVBQWVsQjtJQUV4RCxNQUFNLENBQUNzQixTQUFTTSxXQUFXLEdBQUdoQywrQ0FBUUEsQ0FBQztJQUV2QyxTQUFTaUM7UUFDUEQsV0FBVyxDQUFDVCxZQUFjLENBQUNBO0lBQzdCO0lBRUEscUJBQ0UsOERBQUNXO1FBQVFDLFdBQVdqQyxvRUFBWTs7MEJBQzlCLDhEQUFDbUM7MEJBQUlYLFVBQVUsVUFBVTs7Ozs7OzBCQUN6Qiw4REFBQ1k7Z0JBQUtDLFFBQVFSOztrQ0FDWiw4REFBQ1M7d0JBQUlMLFdBQVdqQyx1RUFBZTs7MENBQzdCLDhEQUFDd0M7Z0NBQU1DLFNBQVE7MENBQVE7Ozs7OzswQ0FDdkIsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFRQyxJQUFHO2dDQUFRQyxNQUFLOzs7Ozs7Ozs7Ozs7a0NBRXRDLDhEQUFDUDt3QkFBSUwsV0FBV2pDLHVFQUFlOzswQ0FDN0IsOERBQUN3QztnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVdDLElBQUc7Z0NBQVdDLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FFNUMsOERBQUNQO3dCQUFJTCxXQUFXakMsdUVBQWU7OzBDQUM3Qiw4REFBQytDOzBDQUFRdkIsVUFBVSxVQUFVOzs7Ozs7MENBQzdCLDhEQUFDdUI7Z0NBQ0NKLE1BQUs7Z0NBQ0xWLFdBQVdqQyxzRUFBYztnQ0FDekJpRCxTQUFTbEI7MENBRVJQLFVBQVUsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUM7R0F0RHdCTDs7UUFxQk1wQixtREFBWUE7OztLQXJCbEJvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXV0aC9hdXRoLWZvcm0udHN4PzQ4ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1TdGF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vYXV0aC1mb3JtLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAL3NyYy90eXBlcy9hdXRoJztcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZSB9IGZyb20gJ0Avc3JjL2F1dGgvYWN0aW9ucyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlciA9IHtcbiAgZW1haWw6ICcnLFxuICBwYXNzd29yZDogJycsXG4gIHN1Y2Nlc3M6IG51bGwsXG59O1xuXG5jb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgZnVuY3Rpb24gKFxuICBlbWFpbDogRm9ybURhdGFFbnRyeVZhbHVlIHwgbnVsbCxcbiAgcGFzc3dvcmQ6IEZvcm1EYXRhRW50cnlWYWx1ZSB8IG51bGxcbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2F1dGgvc2lnbnVwJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfSksXG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmxvZygnRXJyb3IgY3JlYXRpbmcgdXNlcicpO1xuICB9XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aEZvcm0oKSB7XG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyBmdW5jdGlvbiAocHJldlN0YXRlOiBVc2VyLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBsZXQgdXNlciA9IG51bGw7XG4gICAgaWYgKGlzTG9naW4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGhlbnRpY2F0ZShwcmV2U3RhdGUsIGZvcm1EYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coYExvZ2luIHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgU2lnbiBpbiBlcnJvcjogJHtlcnJvcn19YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVtYWlsOiBGb3JtRGF0YUVudHJ5VmFsdWUgfCBudWxsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpO1xuICAgICAgY29uc3QgcGFzc3dvcmQ6IEZvcm1EYXRhRW50cnlWYWx1ZSB8IG51bGwgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyk7XG4gICAgICB0cnkge1xuICAgICAgICB1c2VyID0gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFNpZ24gdXAgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1c2VyO1xuICB9O1xuICBjb25zdCBbc3RhdGUsIGZvcm1BY3Rpb25dID0gdXNlRm9ybVN0YXRlKHN1Ym1pdEhhbmRsZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgZnVuY3Rpb24gc3dpdGNoQXV0aE1vZGVIYW5kbGVyKCkge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cbiAgICAgIDxoMT57aXNMb2dpbiA/ICdMb2dpbicgOiAnU2lnbiBVcCd9PC9oMT5cbiAgICAgIDxmb3JtIGFjdGlvbj17Zm9ybUFjdGlvbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+WW91ciBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgPGJ1dHRvbj57aXNMb2dpbiA/ICdMb2dpbicgOiAnQ3JlYXRlIEFjY291bnQnfTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNMb2dpbiA/ICdDcmVhdGUgbmV3IGFjY291bnQnIDogJ0xvZ2luIHdpdGggZXhpc3RpbmcgYWNjb3VudCd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUZvcm1TdGF0ZSIsImNsYXNzZXMiLCJhdXRoZW50aWNhdGUiLCJpbml0aWFsU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwic3VjY2VzcyIsImNyZWF0ZVVzZXIiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsImNvbnNvbGUiLCJsb2ciLCJBdXRoRm9ybSIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2U3RhdGUiLCJmb3JtRGF0YSIsInVzZXIiLCJpc0xvZ2luIiwicmVzdWx0IiwiZXJyb3IiLCJnZXQiLCJzdGF0ZSIsImZvcm1BY3Rpb24iLCJzZXRJc0xvZ2luIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImF1dGgiLCJoMSIsImZvcm0iLCJhY3Rpb24iLCJkaXYiLCJjb250cm9sIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwiYWN0aW9ucyIsImJ1dHRvbiIsInRvZ2dsZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/auth/auth-form.tsx\n"));

/***/ })

});