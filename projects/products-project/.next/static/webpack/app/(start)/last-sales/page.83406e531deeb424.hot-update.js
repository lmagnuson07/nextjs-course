"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(start)/last-sales/page",{

/***/ "(app-pages-browser)/./app/(start)/last-sales/page.tsx":
/*!*****************************************!*\
  !*** ./app/(start)/last-sales/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LastSalesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// const fetcher: Fetcher<SalesData, string> = (id) => getUserById(id);\n// const fetcher = (url: string) => fetch(url).then((res) => res.json());\nconst fetcher = (url)=>fetch(url).then((res)=>res.json()).then((data)=>{\n        return Object.keys(data).map((key)=>({\n                id: key,\n                username: data[key].username,\n                volume: data[key].volume\n            }));\n    });\nasync function getAllSales(url) {\n    const response = await fetch(\"https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json\");\n    const data = await response.json();\n    const transformedData = Object.keys(data).map((key)=>({\n            id: key,\n            username: data[key].username,\n            volume: data[key].volume\n        }));\n}\nasync function getUserById(id) {\n    const response = await fetch(\"https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales/\".concat(id, \".json\"));\n    return await response.json();\n}\nfunction LastSalesPage() {\n    _s();\n    // const [sales, setSales] = useState<SalesData[] | null>(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json\", fetcher);\n    // const { data, error, isLoading } = useSWR('s1', fetcher);\n    // useEffect(() => {\n    //   setLoading(true);\n    //   (async () => {\n    //     try {\n    //       const response = await fetch(\n    //         'https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json'\n    //       );\n    //       const data = await response.json();\n    //       console.log(data);\n    //       const transformedData = Object.keys(data).map((key) => ({\n    //         id: key,\n    //         username: data[key].username,\n    //         volume: data[key].volume,\n    //       }));\n    //\n    //       setSales(transformedData);\n    //       setLoading(false);\n    //     } catch (error) {\n    //       console.log(error);\n    //     }\n    //   })();\n    // }, []);\n    // Can remove the sales check so there isn't to messages that flash on the screen\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Last Sales\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"An error occurred\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, this) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data === null || data === void 0 ? void 0 : data.map((sale)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            sale.username,\n                            \" - \",\n                            sale.volume\n                        ]\n                    }, sale.id, true, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(LastSalesPage, \"1UU93gKsWBSOCCPDOCALxDQ8y6M=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oc3RhcnQpL2xhc3Qtc2FsZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNLO0FBRXRDLHVFQUF1RTtBQUN2RSx5RUFBeUU7QUFDekUsTUFBTUUsVUFBd0MsQ0FBQ0MsTUFDN0NDLE1BQU1ELEtBQ0hFLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0c7UUFDTCxPQUFPQyxPQUFPQyxJQUFJLENBQUNGLE1BQU1HLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO2dCQUNyQ0MsSUFBSUQ7Z0JBQ0pFLFVBQVVOLElBQUksQ0FBQ0ksSUFBSSxDQUFDRSxRQUFRO2dCQUM1QkMsUUFBUVAsSUFBSSxDQUFDSSxJQUFJLENBQUNHLE1BQU07WUFDMUI7SUFDRjtBQUVKLGVBQWVDLFlBQVliLEdBQVc7SUFDcEMsTUFBTWMsV0FBVyxNQUFNYixNQUNwQjtJQUVILE1BQU1JLE9BQU8sTUFBTVMsU0FBU1YsSUFBSTtJQUNoQyxNQUFNVyxrQkFBa0JULE9BQU9DLElBQUksQ0FBQ0YsTUFBTUcsR0FBRyxDQUFDLENBQUNDLE1BQVM7WUFDdERDLElBQUlEO1lBQ0pFLFVBQVVOLElBQUksQ0FBQ0ksSUFBSSxDQUFDRSxRQUFRO1lBQzVCQyxRQUFRUCxJQUFJLENBQUNJLElBQUksQ0FBQ0csTUFBTTtRQUMxQjtBQUNGO0FBUUEsZUFBZUksWUFBWU4sRUFBVTtJQUNuQyxNQUFNSSxXQUFXLE1BQU1iLE1BQ3JCLGlFQUFvRSxPQUFIUyxJQUFHO0lBRXRFLE9BQU8sTUFBTUksU0FBU1YsSUFBSTtBQUM1QjtBQUVlLFNBQVNhOztJQUN0QixnRUFBZ0U7SUFDaEUsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVRLElBQUksRUFBRWUsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBR3ZCLCtDQUFNQSxDQUN2QyxzRUFDQUM7SUFFRiw0REFBNEQ7SUFFNUQsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNDQUFzQztJQUN0QywrRUFBK0U7SUFDL0UsV0FBVztJQUNYLDRDQUE0QztJQUM1QywyQkFBMkI7SUFDM0Isa0VBQWtFO0lBQ2xFLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixFQUFFO0lBQ0YsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLFFBQVE7SUFDUixVQUFVO0lBQ1YsVUFBVTtJQUNWLGlGQUFpRjtJQUNqRixxQkFDRSw4REFBQ3VCOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNISCxzQkFDQyw4REFBQ0k7MEJBQUU7Ozs7O3VCQUNISCwwQkFDQSw4REFBQ0c7MEJBQUU7Ozs7O3FDQUdILDhEQUFDQzswQkFDRXBCLGlCQUFBQSwyQkFBQUEsS0FBTUcsR0FBRyxDQUFDLENBQUNrQixxQkFDViw4REFBQ0M7OzRCQUNFRCxLQUFLZixRQUFROzRCQUFDOzRCQUFJZSxLQUFLZCxNQUFNOzt1QkFEdkJjLEtBQUtoQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBVTVCO0dBckR3Qk87O1FBR2FuQiwyQ0FBTUE7OztLQUhuQm1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oc3RhcnQpL2xhc3Qtc2FsZXMvcGFnZS50c3g/ZDdiYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNXUiwgeyBGZXRjaGVyIH0gZnJvbSAnc3dyJztcblxuLy8gY29uc3QgZmV0Y2hlcjogRmV0Y2hlcjxTYWxlc0RhdGEsIHN0cmluZz4gPSAoaWQpID0+IGdldFVzZXJCeUlkKGlkKTtcbi8vIGNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbmNvbnN0IGZldGNoZXI6IEZldGNoZXI8U2FsZXNEYXRhW10sIHN0cmluZz4gPSAodXJsKSA9PlxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiAoe1xuICAgICAgICBpZDoga2V5LFxuICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAgICAgICB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG4gICAgICB9KSk7XG4gICAgfSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFNhbGVzKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vbmV4dGpzLWNvdXJzZS1mODA2YS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvbmBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgdHJhbnNmb3JtZWREYXRhID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+ICh7XG4gICAgaWQ6IGtleSxcbiAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgfSkpO1xufVxuXG50eXBlIFNhbGVzRGF0YSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgdm9sdW1lOiBudW1iZXI7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyQnlJZChpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vbmV4dGpzLWNvdXJzZS1mODA2YS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMvJHtpZH0uanNvbmBcbiAgKTtcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFzdFNhbGVzUGFnZSgpIHtcbiAgLy8gY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZTxTYWxlc0RhdGFbXSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU1dSKFxuICAgICdodHRwczovL25leHRqcy1jb3Vyc2UtZjgwNmEtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb24nLFxuICAgIGZldGNoZXJcbiAgKTtcbiAgLy8gY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTV1IoJ3MxJywgZmV0Y2hlcik7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRMb2FkaW5nKHRydWUpO1xuICAvLyAgIChhc3luYyAoKSA9PiB7XG4gIC8vICAgICB0cnkge1xuICAvLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAvLyAgICAgICAgICdodHRwczovL25leHRqcy1jb3Vyc2UtZjgwNmEtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb24nXG4gIC8vICAgICAgICk7XG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvLyAgICAgICBjb25zdCB0cmFuc2Zvcm1lZERhdGEgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4gKHtcbiAgLy8gICAgICAgICBpZDoga2V5LFxuICAvLyAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gIC8vICAgICAgICAgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lLFxuICAvLyAgICAgICB9KSk7XG4gIC8vXG4gIC8vICAgICAgIHNldFNhbGVzKHRyYW5zZm9ybWVkRGF0YSk7XG4gIC8vICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pKCk7XG4gIC8vIH0sIFtdKTtcbiAgLy8gQ2FuIHJlbW92ZSB0aGUgc2FsZXMgY2hlY2sgc28gdGhlcmUgaXNuJ3QgdG8gbWVzc2FnZXMgdGhhdCBmbGFzaCBvbiB0aGUgc2NyZWVuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5MYXN0IFNhbGVzPC9oMT5cbiAgICAgIHtlcnJvciA/XG4gICAgICAgIDxwPkFuIGVycm9yIG9jY3VycmVkPC9wPlxuICAgICAgOiBpc0xvYWRpbmcgP1xuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgICAvLyA6ICFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwID9cbiAgICAgICAgLy8gICA8cD5ObyBzYWxlcyBmb3VuZDwvcD5cbiAgICAgIDogPHVsPlxuICAgICAgICAgIHtkYXRhPy5tYXAoKHNhbGU6IFNhbGVzRGF0YSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17c2FsZS5pZH0+XG4gICAgICAgICAgICAgIHtzYWxlLnVzZXJuYW1lfSAtIHtzYWxlLnZvbHVtZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgey8qPHA+e2RhdGE/LnVzZXJuYW1lfTwvcD4qL31cbiAgICAgICAgICB7Lyo8cD57ZGF0YT8udm9sdW1lfSA8L3A+Ki99XG4gICAgICAgIDwvdWw+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VTV1IiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaWQiLCJ1c2VybmFtZSIsInZvbHVtZSIsImdldEFsbFNhbGVzIiwicmVzcG9uc2UiLCJ0cmFuc2Zvcm1lZERhdGEiLCJnZXRVc2VyQnlJZCIsIkxhc3RTYWxlc1BhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwiaXNMb2FkaW5nIiwiZGl2IiwiaDEiLCJwIiwidWwiLCJzYWxlIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(start)/last-sales/page.tsx\n"));

/***/ })

});