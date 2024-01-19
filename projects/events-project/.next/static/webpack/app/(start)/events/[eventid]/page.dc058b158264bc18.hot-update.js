"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(start)/events/[eventid]/page",{

/***/ "(app-pages-browser)/./src/components/input/new-comment.tsx":
/*!**********************************************!*\
  !*** ./src/components/input/new-comment.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewComment; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-comment.module.scss */ \"(app-pages-browser)/./src/components/input/new-comment.module.scss\");\n/* harmony import */ var _new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var _src_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/ui/Button */ \"(app-pages-browser)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _src_components_input_comment_submission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/components/input/comment-submission */ \"(app-pages-browser)/./src/components/input/comment-submission.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_store_notification_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/src/store/notification-context */ \"(app-pages-browser)/./src/store/notification-context.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst initialState = {\n    email: undefined,\n    name: undefined,\n    comment: undefined,\n    eventId: undefined,\n    success: false\n};\nfunction NewComment(props) {\n    _s();\n    const [pending, setPending] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const { eventId, setComments } = props;\n    const [state, formAction] = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState)(_src_components_input_comment_submission__WEBPACK_IMPORTED_MODULE_3__.commentHandler, initialState);\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_src_store_notification_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const contextRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(context);\n    function pendingNotification() {\n        console.log(state);\n        setPending(true);\n        contextRef.current.showNotification({\n            title: \"Signing up...\",\n            message: \"Signing up...\",\n            status: \"pending\"\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        (async ()=>{\n            if (!(state === null || state === void 0 ? void 0 : state.comment) || !(state === null || state === void 0 ? void 0 : state.email) || !(state === null || state === void 0 ? void 0 : state.name)) {\n                setPending(false);\n                return;\n            }\n            if (state === null || state === void 0 ? void 0 : state.success) {\n                setPending(false);\n                contextRef.current.showNotification({\n                    title: \"Comment added\",\n                    message: \"Thanks for your input!\",\n                    status: \"success\"\n                });\n            } else if (!(state === null || state === void 0 ? void 0 : state.success)) {\n                setPending(false);\n                contextRef.current.showNotification({\n                    title: \"Error adding your comment\",\n                    message: \"Sorry there was an error adding your comment.\",\n                    status: \"error\"\n                });\n            }\n            const response = await (0,_src_components_input_comment_submission__WEBPACK_IMPORTED_MODULE_3__.getComments)(eventId);\n            // @ts-ignore\n            setComments(response);\n        })();\n    }, [\n        setComments,\n        eventId,\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),\n        action: formAction,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"hidden\",\n                name: \"eventId\",\n                value: eventId\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default().row),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Your email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                children: \"Your name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                name: \"name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default().control),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"comment\",\n                        children: \"Your comment\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        name: \"comment\",\n                        id: \"comment\",\n                        rows: 5\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: state === null || state === void 0 ? void 0 : state.eventId\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            pending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Pending...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 88,\n                columnNumber: 19\n            }, this),\n            (state === null || state === void 0 ? void 0 : state.success) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Success!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: state === null || state === void 0 ? void 0 : state.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: state === null || state === void 0 ? void 0 : state.email\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: state === null || state === void 0 ? void 0 : state.comment\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: ()=>pendingNotification(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(NewComment, \"hkPfxmjV43jCI2r5DnOLk+v+W1U=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState\n    ];\n});\n_c = NewComment;\nvar _c;\n$RefreshReg$(_c, \"NewComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2lucHV0L25ldy1jb21tZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUDtBQUNPO0FBSUc7QUFDYTtBQUNHO0FBRW5FLE1BQU1VLGVBTUY7SUFDRkMsT0FBT0M7SUFDUEMsTUFBTUQ7SUFDTkUsU0FBU0Y7SUFDVEcsU0FBU0g7SUFDVEksU0FBUztBQUNYO0FBRWUsU0FBU0MsV0FBV0MsS0FBVTs7SUFDM0MsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRU8sT0FBTyxFQUFFTSxXQUFXLEVBQUUsR0FBR0g7SUFDakMsTUFBTSxDQUFDSSxPQUFPQyxXQUFXLEdBQUd0Qix1REFBWUEsQ0FBQ0Usb0ZBQWNBLEVBQUVPO0lBQ3pELE1BQU1jLFVBQVVuQixpREFBVUEsQ0FBQ0ksdUVBQW1CQTtJQUM5QyxNQUFNZ0IsYUFBYWxCLDZDQUFNQSxDQUFDaUI7SUFFMUIsU0FBU0U7UUFDUEMsUUFBUUMsR0FBRyxDQUFDTjtRQUNaRixXQUFXO1FBQ1hLLFdBQVdJLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUM7WUFDbENDLE9BQU87WUFDUEMsU0FBUztZQUNUQyxRQUFRO1FBQ1Y7SUFDRjtJQUVBM0IsZ0RBQVNBLENBQUM7UUFDUDtZQUNDLElBQUksRUFBQ2dCLGtCQUFBQSw0QkFBQUEsTUFBT1IsT0FBTyxLQUFJLEVBQUNRLGtCQUFBQSw0QkFBQUEsTUFBT1gsS0FBSyxLQUFJLEVBQUNXLGtCQUFBQSw0QkFBQUEsTUFBT1QsSUFBSSxHQUFFO2dCQUNwRE8sV0FBVztnQkFDWDtZQUNGO1lBQ0EsSUFBSUUsa0JBQUFBLDRCQUFBQSxNQUFPTixPQUFPLEVBQUU7Z0JBQ2xCSSxXQUFXO2dCQUNYSyxXQUFXSSxPQUFPLENBQUNDLGdCQUFnQixDQUFDO29CQUNsQ0MsT0FBTztvQkFDUEMsU0FBUztvQkFDVEMsUUFBUTtnQkFDVjtZQUNGLE9BQU8sSUFBSSxFQUFDWCxrQkFBQUEsNEJBQUFBLE1BQU9OLE9BQU8sR0FBRTtnQkFDMUJJLFdBQVc7Z0JBQ1hLLFdBQVdJLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUM7b0JBQ2xDQyxPQUFPO29CQUNQQyxTQUFTO29CQUNUQyxRQUFRO2dCQUNWO1lBQ0Y7WUFDQSxNQUFNQyxXQUFXLE1BQU05QixxRkFBV0EsQ0FBQ1c7WUFDbkMsYUFBYTtZQUNiTSxZQUFZYTtRQUNkO0lBQ0YsR0FBRztRQUFDYjtRQUFhTjtRQUFTTztLQUFNO0lBRWhDLHFCQUNFLDhEQUFDYTtRQUFLQyxXQUFXcEMsc0VBQVk7UUFBRXFDLFFBQVFkOzswQkFDckMsOERBQUNlO2dCQUFNQyxNQUFLO2dCQUFTMUIsTUFBSztnQkFBVTJCLE9BQU96Qjs7Ozs7OzBCQUMzQyw4REFBQzBCO2dCQUFJTCxXQUFXcEMscUVBQVc7O2tDQUN6Qiw4REFBQ3lDO3dCQUFJTCxXQUFXcEMseUVBQWU7OzBDQUM3Qiw4REFBQzRDO2dDQUFNQyxTQUFROzBDQUFROzs7Ozs7MENBQ3ZCLDhEQUFDUDtnQ0FBTUMsTUFBSztnQ0FBUU8sSUFBRztnQ0FBUWpDLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FFdEMsOERBQUM0Qjt3QkFBSUwsV0FBV3BDLHlFQUFlOzswQ0FDN0IsOERBQUM0QztnQ0FBTUMsU0FBUTswQ0FBTzs7Ozs7OzBDQUN0Qiw4REFBQ1A7Z0NBQU1DLE1BQUs7Z0NBQU9PLElBQUc7Z0NBQU9qQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3RDLDhEQUFDNEI7Z0JBQUlMLFdBQVdwQyx5RUFBZTs7a0NBQzdCLDhEQUFDNEM7d0JBQU1DLFNBQVE7a0NBQVU7Ozs7OztrQ0FDekIsOERBQUNFO3dCQUFTbEMsTUFBSzt3QkFBVWlDLElBQUc7d0JBQVVFLE1BQU07Ozs7Ozs7Ozs7OzswQkFFOUMsOERBQUNDOzBCQUFHM0Isa0JBQUFBLDRCQUFBQSxNQUFPUCxPQUFPOzs7Ozs7WUFDakJJLHlCQUFXLDhEQUFDOEI7MEJBQUU7Ozs7OztZQUNkM0IsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPTixPQUFPLGtCQUNiLDhEQUFDaUM7MEJBQUU7Ozs7O3FDQUNIOztrQ0FDRSw4REFBQ0E7a0NBQUczQixrQkFBQUEsNEJBQUFBLE1BQU9ULElBQUk7Ozs7OztrQ0FDZiw4REFBQ29DO2tDQUFHM0Isa0JBQUFBLDRCQUFBQSxNQUFPWCxLQUFLOzs7Ozs7a0NBQ2hCLDhEQUFDc0M7a0NBQUczQixrQkFBQUEsNEJBQUFBLE1BQU9SLE9BQU87Ozs7Ozs7OzBCQUd0Qiw4REFBQ1osaUVBQU1BO2dCQUFDZ0QsU0FBUyxJQUFNeEI7MEJBQ3JCLDRFQUFDeUI7OEJBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWQ7R0E1RXdCbEM7O1FBR01oQixtREFBWUE7OztLQUhsQmdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2lucHV0L25ldy1jb21tZW50LnRzeD9lODYyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vbmV3LWNvbW1lbnQubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlRm9ybVN0YXRlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9zcmMvY29tcG9uZW50cy91aS9CdXR0b24nO1xuaW1wb3J0IHtcbiAgY29tbWVudEhhbmRsZXIsXG4gIGdldENvbW1lbnRzLFxufSBmcm9tICdAL3NyYy9jb21wb25lbnRzL2lucHV0L2NvbW1lbnQtc3VibWlzc2lvbic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udGV4dCBmcm9tICdAL3NyYy9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZToge1xuICBlbWFpbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbW1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZXZlbnRJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBzdWNjZXNzOiBib29sZWFuO1xufSA9IHtcbiAgZW1haWw6IHVuZGVmaW5lZCxcbiAgbmFtZTogdW5kZWZpbmVkLFxuICBjb21tZW50OiB1bmRlZmluZWQsXG4gIGV2ZW50SWQ6IHVuZGVmaW5lZCxcbiAgc3VjY2VzczogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdDb21tZW50KHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW3BlbmRpbmcsIHNldFBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGV2ZW50SWQsIHNldENvbW1lbnRzIH0gPSBwcm9wcztcbiAgY29uc3QgW3N0YXRlLCBmb3JtQWN0aW9uXSA9IHVzZUZvcm1TdGF0ZShjb21tZW50SGFuZGxlciwgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XG4gIGNvbnN0IGNvbnRleHRSZWYgPSB1c2VSZWYoY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gcGVuZGluZ05vdGlmaWNhdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gICAgc2V0UGVuZGluZyh0cnVlKTtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQuc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICB0aXRsZTogJ1NpZ25pbmcgdXAuLi4nLFxuICAgICAgbWVzc2FnZTogJ1NpZ25pbmcgdXAuLi4nLFxuICAgICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXN0YXRlPy5jb21tZW50IHx8ICFzdGF0ZT8uZW1haWwgfHwgIXN0YXRlPy5uYW1lKSB7XG4gICAgICAgIHNldFBlbmRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGU/LnN1Y2Nlc3MpIHtcbiAgICAgICAgc2V0UGVuZGluZyhmYWxzZSk7XG4gICAgICAgIGNvbnRleHRSZWYuY3VycmVudC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogJ0NvbW1lbnQgYWRkZWQnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdUaGFua3MgZm9yIHlvdXIgaW5wdXQhJyxcbiAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCFzdGF0ZT8uc3VjY2Vzcykge1xuICAgICAgICBzZXRQZW5kaW5nKGZhbHNlKTtcbiAgICAgICAgY29udGV4dFJlZi5jdXJyZW50LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICAgIHRpdGxlOiAnRXJyb3IgYWRkaW5nIHlvdXIgY29tbWVudCcsXG4gICAgICAgICAgbWVzc2FnZTogJ1NvcnJ5IHRoZXJlIHdhcyBhbiBlcnJvciBhZGRpbmcgeW91ciBjb21tZW50LicsXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0Q29tbWVudHMoZXZlbnRJZCk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZXRDb21tZW50cyhyZXNwb25zZSk7XG4gICAgfSkoKTtcbiAgfSwgW3NldENvbW1lbnRzLCBldmVudElkLCBzdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IGFjdGlvbj17Zm9ybUFjdGlvbn0+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJldmVudElkXCIgdmFsdWU9e2V2ZW50SWR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3d9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBlbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+WW91ciBuYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb21tZW50XCI+WW91ciBjb21tZW50PC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50XCIgaWQ9XCJjb21tZW50XCIgcm93cz17NX0+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+e3N0YXRlPy5ldmVudElkfTwvcD5cbiAgICAgIHtwZW5kaW5nICYmIDxwPlBlbmRpbmcuLi48L3A+fVxuICAgICAge3N0YXRlPy5zdWNjZXNzID9cbiAgICAgICAgPHA+U3VjY2VzcyE8L3A+XG4gICAgICA6IDw+XG4gICAgICAgICAgPHA+e3N0YXRlPy5uYW1lfTwvcD5cbiAgICAgICAgICA8cD57c3RhdGU/LmVtYWlsfTwvcD5cbiAgICAgICAgICA8cD57c3RhdGU/LmNvbW1lbnR9PC9wPlxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcGVuZGluZ05vdGlmaWNhdGlvbigpfT5cbiAgICAgICAgPHNwYW4+U3VibWl0PC9zcGFuPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJ1c2VGb3JtU3RhdGUiLCJCdXR0b24iLCJjb21tZW50SGFuZGxlciIsImdldENvbW1lbnRzIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTm90aWZpY2F0aW9uQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsImVtYWlsIiwidW5kZWZpbmVkIiwibmFtZSIsImNvbW1lbnQiLCJldmVudElkIiwic3VjY2VzcyIsIk5ld0NvbW1lbnQiLCJwcm9wcyIsInBlbmRpbmciLCJzZXRQZW5kaW5nIiwic2V0Q29tbWVudHMiLCJzdGF0ZSIsImZvcm1BY3Rpb24iLCJjb250ZXh0IiwiY29udGV4dFJlZiIsInBlbmRpbmdOb3RpZmljYXRpb24iLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJyZXNwb25zZSIsImZvcm0iLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImRpdiIsInJvdyIsImNvbnRyb2wiLCJsYWJlbCIsImh0bWxGb3IiLCJpZCIsInRleHRhcmVhIiwicm93cyIsInAiLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/input/new-comment.tsx\n"));

/***/ })

});