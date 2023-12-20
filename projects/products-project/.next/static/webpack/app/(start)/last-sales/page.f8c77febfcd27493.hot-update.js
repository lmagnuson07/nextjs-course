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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LastSalesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// const fetcher: Fetcher<SalesData, string> = (id) => getUserById(id);\n// const fetcher = (url: string) => fetch(url).then((res) => res.json());\nconst fetcher = (url)=>getAllSales(url);\nasync function getAllSales(url) {\n    const response = await fetch(\"https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json\");\n    const data = await response.json();\n    return Object.keys(data).map((key)=>({\n            id: key,\n            username: data[key].username,\n            volume: data[key].volume\n        }));\n}\nasync function getUserById(id) {\n    const response = await fetch(\"https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales/\".concat(id, \".json\"));\n    return await response.json();\n}\nfunction LastSalesPage() {\n    _s();\n    // const [sales, setSales] = useState<SalesData[] | null>(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json\", fetcher);\n    // const { data, error, isLoading } = useSWR('s1', fetcher);\n    // useEffect(() => {\n    //   setLoading(true);\n    //   (async () => {\n    //     try {\n    //       const response = await fetch(\n    //         'https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json'\n    //       );\n    //       const data = await response.json();\n    //       console.log(data);\n    //       const transformedData = Object.keys(data).map((key) => ({\n    //         id: key,\n    //         username: data[key].username,\n    //         volume: data[key].volume,\n    //       }));\n    //\n    //       setSales(transformedData);\n    //       setLoading(false);\n    //     } catch (error) {\n    //       console.log(error);\n    //     }\n    //   })();\n    // }, []);\n    // Can remove the sales check so there isn't to messages that flash on the screen\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Last Sales\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"An error occurred\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this) : !data || data.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No sales found\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data === null || data === void 0 ? void 0 : data.map((sale)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            sale.username,\n                            \" - \",\n                            sale.volume\n                        ]\n                    }, sale.id, true, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(LastSalesPage, \"1UU93gKsWBSOCCPDOCALxDQ8y6M=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oc3RhcnQpL2xhc3Qtc2FsZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNLO0FBRXRDLHVFQUF1RTtBQUN2RSx5RUFBeUU7QUFDekUsTUFBTUUsVUFBd0MsQ0FBQ0MsTUFBUUMsWUFBWUQ7QUFFbkUsZUFBZUMsWUFBWUQsR0FBVztJQUNwQyxNQUFNRSxXQUFXLE1BQU1DLE1BQ3BCO0lBRUgsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQ2hDLE9BQU9DLE9BQU9DLElBQUksQ0FBQ0gsTUFBTUksR0FBRyxDQUFDLENBQUNDLE1BQVM7WUFDckNDLElBQUlEO1lBQ0pFLFVBQVVQLElBQUksQ0FBQ0ssSUFBSSxDQUFDRSxRQUFRO1lBQzVCQyxRQUFRUixJQUFJLENBQUNLLElBQUksQ0FBQ0csTUFBTTtRQUMxQjtBQUNGO0FBUUEsZUFBZUMsWUFBWUgsRUFBVTtJQUNuQyxNQUFNUixXQUFXLE1BQU1DLE1BQ3JCLGlFQUFvRSxPQUFITyxJQUFHO0lBRXRFLE9BQU8sTUFBTVIsU0FBU0csSUFBSTtBQUM1QjtBQUVlLFNBQVNTOztJQUN0QixnRUFBZ0U7SUFDaEUsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVPLElBQUksRUFBRWEsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBR3BCLCtDQUFNQSxDQUN2QyxzRUFDQUM7SUFFRiw0REFBNEQ7SUFFNUQsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNDQUFzQztJQUN0QywrRUFBK0U7SUFDL0UsV0FBVztJQUNYLDRDQUE0QztJQUM1QywyQkFBMkI7SUFDM0Isa0VBQWtFO0lBQ2xFLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixFQUFFO0lBQ0YsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLFFBQVE7SUFDUixVQUFVO0lBQ1YsVUFBVTtJQUNWLGlGQUFpRjtJQUNqRixxQkFDRSw4REFBQ29COzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNISCxzQkFDQyw4REFBQ0k7MEJBQUU7Ozs7O3VCQUNISCwwQkFDQSw4REFBQ0c7MEJBQUU7Ozs7O3VCQUNILENBQUNqQixRQUFRQSxLQUFLa0IsTUFBTSxLQUFLLGtCQUN6Qiw4REFBQ0Q7MEJBQUU7Ozs7O3FDQUNILDhEQUFDRTswQkFDRW5CLGlCQUFBQSwyQkFBQUEsS0FBTUksR0FBRyxDQUFDLENBQUNnQixxQkFDViw4REFBQ0M7OzRCQUNFRCxLQUFLYixRQUFROzRCQUFDOzRCQUFJYSxLQUFLWixNQUFNOzt1QkFEdkJZLEtBQUtkLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVNUI7R0FyRHdCSTs7UUFHYWhCLDJDQUFNQTs7O0tBSG5CZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhzdGFydCkvbGFzdC1zYWxlcy9wYWdlLnRzeD9kN2JjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU1dSLCB7IEZldGNoZXIgfSBmcm9tICdzd3InO1xuXG4vLyBjb25zdCBmZXRjaGVyOiBGZXRjaGVyPFNhbGVzRGF0YSwgc3RyaW5nPiA9IChpZCkgPT4gZ2V0VXNlckJ5SWQoaWQpO1xuLy8gY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuY29uc3QgZmV0Y2hlcjogRmV0Y2hlcjxTYWxlc0RhdGFbXSwgc3RyaW5nPiA9ICh1cmwpID0+IGdldEFsbFNhbGVzKHVybCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFNhbGVzKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vbmV4dGpzLWNvdXJzZS1mODA2YS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvbmBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiAoe1xuICAgIGlkOiBrZXksXG4gICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcbiAgICB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG4gIH0pKTtcbn1cblxudHlwZSBTYWxlc0RhdGEgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHZvbHVtZTogbnVtYmVyO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5SWQoaWQ6IHN0cmluZykge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL25leHRqcy1jb3Vyc2UtZjgwNmEtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLyR7aWR9Lmpzb25gXG4gICk7XG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhc3RTYWxlc1BhZ2UoKSB7XG4gIC8vIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGU8U2FsZXNEYXRhW10gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNXUihcbiAgICAnaHR0cHM6Ly9uZXh0anMtY291cnNlLWY4MDZhLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uJyxcbiAgICBmZXRjaGVyXG4gICk7XG4gIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU1dSKCdzMScsIGZldGNoZXIpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgLy8gICAoYXN5bmMgKCkgPT4ge1xuICAvLyAgICAgdHJ5IHtcbiAgLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgLy8gICAgICAgICAnaHR0cHM6Ly9uZXh0anMtY291cnNlLWY4MDZhLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uJ1xuICAvLyAgICAgICApO1xuICAvLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICAgICAgY29uc3QgdHJhbnNmb3JtZWREYXRhID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+ICh7XG4gIC8vICAgICAgICAgaWQ6IGtleSxcbiAgLy8gICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAvLyAgICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgLy8gICAgICAgfSkpO1xuICAvL1xuICAvLyAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1lZERhdGEpO1xuICAvLyAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KSgpO1xuICAvLyB9LCBbXSk7XG4gIC8vIENhbiByZW1vdmUgdGhlIHNhbGVzIGNoZWNrIHNvIHRoZXJlIGlzbid0IHRvIG1lc3NhZ2VzIHRoYXQgZmxhc2ggb24gdGhlIHNjcmVlblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TGFzdCBTYWxlczwvaDE+XG4gICAgICB7ZXJyb3IgP1xuICAgICAgICA8cD5BbiBlcnJvciBvY2N1cnJlZDwvcD5cbiAgICAgIDogaXNMb2FkaW5nID9cbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgIDogIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDAgP1xuICAgICAgICA8cD5ObyBzYWxlcyBmb3VuZDwvcD5cbiAgICAgIDogPHVsPlxuICAgICAgICAgIHtkYXRhPy5tYXAoKHNhbGU6IFNhbGVzRGF0YSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17c2FsZS5pZH0+XG4gICAgICAgICAgICAgIHtzYWxlLnVzZXJuYW1lfSAtIHtzYWxlLnZvbHVtZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgey8qPHA+e2RhdGE/LnVzZXJuYW1lfTwvcD4qL31cbiAgICAgICAgICB7Lyo8cD57ZGF0YT8udm9sdW1lfSA8L3A+Ki99XG4gICAgICAgIDwvdWw+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VTV1IiLCJmZXRjaGVyIiwidXJsIiwiZ2V0QWxsU2FsZXMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaWQiLCJ1c2VybmFtZSIsInZvbHVtZSIsImdldFVzZXJCeUlkIiwiTGFzdFNhbGVzUGFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJkaXYiLCJoMSIsInAiLCJsZW5ndGgiLCJ1bCIsInNhbGUiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(start)/last-sales/page.tsx\n"));

/***/ })

});