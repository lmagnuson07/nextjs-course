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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewComment; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-comment.module.scss */ \"(app-pages-browser)/./src/components/input/new-comment.module.scss\");\n/* harmony import */ var _new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var _src_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/ui/Button */ \"(app-pages-browser)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _src_components_input_comment_submission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/components/input/comment-submission */ \"(app-pages-browser)/./src/components/input/comment-submission.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_store_notification_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/src/store/notification-context */ \"(app-pages-browser)/./src/store/notification-context.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst initialState = {\n    email: undefined,\n    name: undefined,\n    comment: undefined,\n    eventId: undefined,\n    success: false\n};\nfunction NewComment(props) {\n    _s();\n    const [pending, setPending] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const { eventId, setComments } = props;\n    const [state, formAction] = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState)(_src_components_input_comment_submission__WEBPACK_IMPORTED_MODULE_3__.commentHandler, initialState);\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_src_store_notification_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const contextRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(context);\n    function pendingNotification() {\n        setPending(true);\n        contextRef.current.showNotification({\n            title: \"Signing up...\",\n            message: \"Signing up...\",\n            status: \"pending\"\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        (async ()=>{\n            if (!(state === null || state === void 0 ? void 0 : state.comment) || !(state === null || state === void 0 ? void 0 : state.email) || !(state === null || state === void 0 ? void 0 : state.name)) {\n                setPending(false);\n                return;\n            }\n            if (state === null || state === void 0 ? void 0 : state.success) {\n                setPending(false);\n                contextRef.current.showNotification({\n                    title: \"Comment added\",\n                    message: \"Thanks for your input!\",\n                    status: \"success\"\n                });\n            } else if (!(state === null || state === void 0 ? void 0 : state.success)) {\n                setPending(false);\n                contextRef.current.showNotification({\n                    title: \"Error adding your comment\",\n                    message: \"Sorry there was an error adding your comment.\",\n                    status: \"error\"\n                });\n            }\n            const response = await (0,_src_components_input_comment_submission__WEBPACK_IMPORTED_MODULE_3__.getComments)(eventId);\n            // @ts-ignore\n            setComments(response);\n        })();\n    }, [\n        setComments,\n        eventId,\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),\n        action: formAction,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"hidden\",\n                name: \"eventId\",\n                value: eventId\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default().row),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Your email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                children: \"Your name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                name: \"name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_new_comment_module_scss__WEBPACK_IMPORTED_MODULE_6___default().control),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"comment\",\n                        children: \"Your comment\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        name: \"comment\",\n                        id: \"comment\",\n                        rows: 5\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: state === null || state === void 0 ? void 0 : state.eventId\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            pending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Pending...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 87,\n                columnNumber: 19\n            }, this),\n            (state === null || state === void 0 ? void 0 : state.success) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Success!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: state === null || state === void 0 ? void 0 : state.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: state === null || state === void 0 ? void 0 : state.email\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: state === null || state === void 0 ? void 0 : state.comment\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: ()=>pendingNotification(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\logma\\\\Documents\\\\GitHub\\\\nextjs-course\\\\projects\\\\events-project\\\\src\\\\components\\\\input\\\\new-comment.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(NewComment, \"hkPfxmjV43jCI2r5DnOLk+v+W1U=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState\n    ];\n});\n_c = NewComment;\nvar _c;\n$RefreshReg$(_c, \"NewComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2lucHV0L25ldy1jb21tZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUDtBQUNPO0FBSUc7QUFDYTtBQUNHO0FBRW5FLE1BQU1VLGVBTUY7SUFDRkMsT0FBT0M7SUFDUEMsTUFBTUQ7SUFDTkUsU0FBU0Y7SUFDVEcsU0FBU0g7SUFDVEksU0FBUztBQUNYO0FBRWUsU0FBU0MsV0FBV0MsS0FBVTs7SUFDM0MsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRU8sT0FBTyxFQUFFTSxXQUFXLEVBQUUsR0FBR0g7SUFDakMsTUFBTSxDQUFDSSxPQUFPQyxXQUFXLEdBQUd0Qix1REFBWUEsQ0FBQ0Usb0ZBQWNBLEVBQUVPO0lBQ3pELE1BQU1jLFVBQVVuQixpREFBVUEsQ0FBQ0ksdUVBQW1CQTtJQUM5QyxNQUFNZ0IsYUFBYWxCLDZDQUFNQSxDQUFDaUI7SUFFMUIsU0FBU0U7UUFDUE4sV0FBVztRQUNYSyxXQUFXRSxPQUFPLENBQUNDLGdCQUFnQixDQUFDO1lBQ2xDQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsUUFBUTtRQUNWO0lBQ0Y7SUFFQXpCLGdEQUFTQSxDQUFDO1FBQ1A7WUFDQyxJQUFJLEVBQUNnQixrQkFBQUEsNEJBQUFBLE1BQU9SLE9BQU8sS0FBSSxFQUFDUSxrQkFBQUEsNEJBQUFBLE1BQU9YLEtBQUssS0FBSSxFQUFDVyxrQkFBQUEsNEJBQUFBLE1BQU9ULElBQUksR0FBRTtnQkFDcERPLFdBQVc7Z0JBQ1g7WUFDRjtZQUNBLElBQUlFLGtCQUFBQSw0QkFBQUEsTUFBT04sT0FBTyxFQUFFO2dCQUNsQkksV0FBVztnQkFDWEssV0FBV0UsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQztvQkFDbENDLE9BQU87b0JBQ1BDLFNBQVM7b0JBQ1RDLFFBQVE7Z0JBQ1Y7WUFDRixPQUFPLElBQUksRUFBQ1Qsa0JBQUFBLDRCQUFBQSxNQUFPTixPQUFPLEdBQUU7Z0JBQzFCSSxXQUFXO2dCQUNYSyxXQUFXRSxPQUFPLENBQUNDLGdCQUFnQixDQUFDO29CQUNsQ0MsT0FBTztvQkFDUEMsU0FBUztvQkFDVEMsUUFBUTtnQkFDVjtZQUNGO1lBQ0EsTUFBTUMsV0FBVyxNQUFNNUIscUZBQVdBLENBQUNXO1lBQ25DLGFBQWE7WUFDYk0sWUFBWVc7UUFDZDtJQUNGLEdBQUc7UUFBQ1g7UUFBYU47UUFBU087S0FBTTtJQUVoQyxxQkFDRSw4REFBQ1c7UUFBS0MsV0FBV2xDLHNFQUFZO1FBQUVtQyxRQUFRWjs7MEJBQ3JDLDhEQUFDYTtnQkFBTUMsTUFBSztnQkFBU3hCLE1BQUs7Z0JBQVV5QixPQUFPdkI7Ozs7OzswQkFDM0MsOERBQUN3QjtnQkFBSUwsV0FBV2xDLHFFQUFXOztrQ0FDekIsOERBQUN1Qzt3QkFBSUwsV0FBV2xDLHlFQUFlOzswQ0FDN0IsOERBQUMwQztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ1A7Z0NBQU1DLE1BQUs7Z0NBQVFPLElBQUc7Z0NBQVEvQixNQUFLOzs7Ozs7Ozs7Ozs7a0NBRXRDLDhEQUFDMEI7d0JBQUlMLFdBQVdsQyx5RUFBZTs7MENBQzdCLDhEQUFDMEM7Z0NBQU1DLFNBQVE7MENBQU87Ozs7OzswQ0FDdEIsOERBQUNQO2dDQUFNQyxNQUFLO2dDQUFPTyxJQUFHO2dDQUFPL0IsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd0Qyw4REFBQzBCO2dCQUFJTCxXQUFXbEMseUVBQWU7O2tDQUM3Qiw4REFBQzBDO3dCQUFNQyxTQUFRO2tDQUFVOzs7Ozs7a0NBQ3pCLDhEQUFDRTt3QkFBU2hDLE1BQUs7d0JBQVUrQixJQUFHO3dCQUFVRSxNQUFNOzs7Ozs7Ozs7Ozs7MEJBRTlDLDhEQUFDQzswQkFBR3pCLGtCQUFBQSw0QkFBQUEsTUFBT1AsT0FBTzs7Ozs7O1lBQ2pCSSx5QkFBVyw4REFBQzRCOzBCQUFFOzs7Ozs7WUFDZHpCLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT04sT0FBTyxrQkFDYiw4REFBQytCOzBCQUFFOzs7OztxQ0FDSDs7a0NBQ0UsOERBQUNBO2tDQUFHekIsa0JBQUFBLDRCQUFBQSxNQUFPVCxJQUFJOzs7Ozs7a0NBQ2YsOERBQUNrQztrQ0FBR3pCLGtCQUFBQSw0QkFBQUEsTUFBT1gsS0FBSzs7Ozs7O2tDQUNoQiw4REFBQ29DO2tDQUFHekIsa0JBQUFBLDRCQUFBQSxNQUFPUixPQUFPOzs7Ozs7OzswQkFHdEIsOERBQUNaLGlFQUFNQTtnQkFBQzhDLFNBQVMsSUFBTXRCOzBCQUNyQiw0RUFBQ3VCOzhCQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlkO0dBM0V3QmhDOztRQUdNaEIsbURBQVlBOzs7S0FIbEJnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbnB1dC9uZXctY29tbWVudC50c3g/ZTg2MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL25ldy1jb21tZW50Lm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZUZvcm1TdGF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0Avc3JjL2NvbXBvbmVudHMvdWkvQnV0dG9uJztcbmltcG9ydCB7XG4gIGNvbW1lbnRIYW5kbGVyLFxuICBnZXRDb21tZW50cyxcbn0gZnJvbSAnQC9zcmMvY29tcG9uZW50cy9pbnB1dC9jb21tZW50LXN1Ym1pc3Npb24nO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRleHQgZnJvbSAnQC9zcmMvc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IHtcbiAgZW1haWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb21tZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGV2ZW50SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgc3VjY2VzczogYm9vbGVhbjtcbn0gPSB7XG4gIGVtYWlsOiB1bmRlZmluZWQsXG4gIG5hbWU6IHVuZGVmaW5lZCxcbiAgY29tbWVudDogdW5kZWZpbmVkLFxuICBldmVudElkOiB1bmRlZmluZWQsXG4gIHN1Y2Nlc3M6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3Q29tbWVudChwcm9wczogYW55KSB7XG4gIGNvbnN0IFtwZW5kaW5nLCBzZXRQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBldmVudElkLCBzZXRDb21tZW50cyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtzdGF0ZSwgZm9ybUFjdGlvbl0gPSB1c2VGb3JtU3RhdGUoY29tbWVudEhhbmRsZXIsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpO1xuICBjb25zdCBjb250ZXh0UmVmID0gdXNlUmVmKGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIHBlbmRpbmdOb3RpZmljYXRpb24oKSB7XG4gICAgc2V0UGVuZGluZyh0cnVlKTtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQuc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICB0aXRsZTogJ1NpZ25pbmcgdXAuLi4nLFxuICAgICAgbWVzc2FnZTogJ1NpZ25pbmcgdXAuLi4nLFxuICAgICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXN0YXRlPy5jb21tZW50IHx8ICFzdGF0ZT8uZW1haWwgfHwgIXN0YXRlPy5uYW1lKSB7XG4gICAgICAgIHNldFBlbmRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGU/LnN1Y2Nlc3MpIHtcbiAgICAgICAgc2V0UGVuZGluZyhmYWxzZSk7XG4gICAgICAgIGNvbnRleHRSZWYuY3VycmVudC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogJ0NvbW1lbnQgYWRkZWQnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdUaGFua3MgZm9yIHlvdXIgaW5wdXQhJyxcbiAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCFzdGF0ZT8uc3VjY2Vzcykge1xuICAgICAgICBzZXRQZW5kaW5nKGZhbHNlKTtcbiAgICAgICAgY29udGV4dFJlZi5jdXJyZW50LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICAgIHRpdGxlOiAnRXJyb3IgYWRkaW5nIHlvdXIgY29tbWVudCcsXG4gICAgICAgICAgbWVzc2FnZTogJ1NvcnJ5IHRoZXJlIHdhcyBhbiBlcnJvciBhZGRpbmcgeW91ciBjb21tZW50LicsXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0Q29tbWVudHMoZXZlbnRJZCk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZXRDb21tZW50cyhyZXNwb25zZSk7XG4gICAgfSkoKTtcbiAgfSwgW3NldENvbW1lbnRzLCBldmVudElkLCBzdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IGFjdGlvbj17Zm9ybUFjdGlvbn0+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJldmVudElkXCIgdmFsdWU9e2V2ZW50SWR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3d9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBlbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+WW91ciBuYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb21tZW50XCI+WW91ciBjb21tZW50PC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50XCIgaWQ9XCJjb21tZW50XCIgcm93cz17NX0+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+e3N0YXRlPy5ldmVudElkfTwvcD5cbiAgICAgIHtwZW5kaW5nICYmIDxwPlBlbmRpbmcuLi48L3A+fVxuICAgICAge3N0YXRlPy5zdWNjZXNzID9cbiAgICAgICAgPHA+U3VjY2VzcyE8L3A+XG4gICAgICA6IDw+XG4gICAgICAgICAgPHA+e3N0YXRlPy5uYW1lfTwvcD5cbiAgICAgICAgICA8cD57c3RhdGU/LmVtYWlsfTwvcD5cbiAgICAgICAgICA8cD57c3RhdGU/LmNvbW1lbnR9PC9wPlxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcGVuZGluZ05vdGlmaWNhdGlvbigpfT5cbiAgICAgICAgPHNwYW4+U3VibWl0PC9zcGFuPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJ1c2VGb3JtU3RhdGUiLCJCdXR0b24iLCJjb21tZW50SGFuZGxlciIsImdldENvbW1lbnRzIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTm90aWZpY2F0aW9uQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsImVtYWlsIiwidW5kZWZpbmVkIiwibmFtZSIsImNvbW1lbnQiLCJldmVudElkIiwic3VjY2VzcyIsIk5ld0NvbW1lbnQiLCJwcm9wcyIsInBlbmRpbmciLCJzZXRQZW5kaW5nIiwic2V0Q29tbWVudHMiLCJzdGF0ZSIsImZvcm1BY3Rpb24iLCJjb250ZXh0IiwiY29udGV4dFJlZiIsInBlbmRpbmdOb3RpZmljYXRpb24iLCJjdXJyZW50Iiwic2hvd05vdGlmaWNhdGlvbiIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyIsInJlc3BvbnNlIiwiZm9ybSIsImNsYXNzTmFtZSIsImFjdGlvbiIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiZGl2Iiwicm93IiwiY29udHJvbCIsImxhYmVsIiwiaHRtbEZvciIsImlkIiwidGV4dGFyZWEiLCJyb3dzIiwicCIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/input/new-comment.tsx\n"));

/***/ })

});