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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LastSalesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// const fetcher: Fetcher<SalesData, string> = (id) => getUserById(id);\n// const fetcher = (url: string) => fetch(url).then((res) => res.json());\nconst fetcher = (url)=>getAllSales(url);\nasync function getUserById(id) {\n    const response = await fetch(\"https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales/\".concat(id, \".json\"));\n    return await response.json();\n}\nasync function getAllSales(url) {\n    console.log(\"Here\");\n    let transformedData = [];\n    fetch(url).then((res)=>res.json()).then((data)=>{\n        transformedData = Object.keys(data).map((key)=>({\n                id: key,\n                username: data[key].username,\n                volume: data[key].volume\n            }));\n    });\n    return transformedData;\n}\nfunction LastSalesPage() {\n    _s();\n    // const [sales, setSales] = useState<SalesData[] | null>(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json\", fetcher);\n    console.log(data);\n    // const { data, error, isLoading } = useSWR('s1', fetcher);\n    // useEffect(() => {\n    //   setLoading(true);\n    //   (async () => {\n    //     try {\n    //       const response = await fetch(\n    //         'https://nextjs-course-f806a-default-rtdb.firebaseio.com/sales.json'\n    //       );\n    //       const data = await response.json();\n    //       console.log(data);\n    //       const transformedData = Object.keys(data).map((key) => ({\n    //         id: key,\n    //         username: data[key].username,\n    //         volume: data[key].volume,\n    //       }));\n    //\n    //       setSales(transformedData);\n    //       setLoading(false);\n    //     } catch (error) {\n    //       console.log(error);\n    //     }\n    //   })();\n    // }, []);\n    // Can remove the sales check so there isn't to messages that flash on the screen\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Last Sales\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"An error occurred\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data === null || data === void 0 ? void 0 : data.map((sale)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            sale.username,\n                            \" - \",\n                            sale.volume\n                        ]\n                    }, sale.id, true, {\n                        fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\logma\\\\OneDrive - NAIT\\\\Documents\\\\Next.js Course\\\\projects\\\\products-project\\\\app\\\\(start)\\\\last-sales\\\\page.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(LastSalesPage, \"1UU93gKsWBSOCCPDOCALxDQ8y6M=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oc3RhcnQpL2xhc3Qtc2FsZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNLO0FBRXRDLHVFQUF1RTtBQUN2RSx5RUFBeUU7QUFDekUsTUFBTUUsVUFBd0MsQ0FBQ0MsTUFBUUMsWUFBWUQ7QUFRbkUsZUFBZUUsWUFBWUMsRUFBVTtJQUNuQyxNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLGlFQUFvRSxPQUFIRixJQUFHO0lBRXRFLE9BQU8sTUFBTUMsU0FBU0UsSUFBSTtBQUM1QjtBQUVBLGVBQWVMLFlBQVlELEdBQVc7SUFDcENPLFFBQVFDLEdBQUcsQ0FBQztJQUNaLElBQUlDLGtCQUErQixFQUFFO0lBQ3JDSixNQUFNTCxLQUNIVSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUwsSUFBSSxJQUN0QkksSUFBSSxDQUFDLENBQUNFO1FBQ0xILGtCQUFrQkksT0FBT0MsSUFBSSxDQUFDRixNQUFNRyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztnQkFDaERiLElBQUlhO2dCQUNKQyxVQUFVTCxJQUFJLENBQUNJLElBQUksQ0FBQ0MsUUFBUTtnQkFDNUJDLFFBQVFOLElBQUksQ0FBQ0ksSUFBSSxDQUFDRSxNQUFNO1lBQzFCO0lBQ0Y7SUFDRixPQUFPVDtBQUNUO0FBRWUsU0FBU1U7O0lBQ3RCLGdFQUFnRTtJQUNoRSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR3hCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRWUsSUFBSSxFQUFFVSxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHekIsK0NBQU1BLENBQ3ZDLHNFQUNBQztJQUVGUSxRQUFRQyxHQUFHLENBQUNJO0lBQ1osNERBQTREO0lBRTVELG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsK0VBQStFO0lBQy9FLFdBQVc7SUFDWCw0Q0FBNEM7SUFDNUMsMkJBQTJCO0lBQzNCLGtFQUFrRTtJQUNsRSxtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsRUFBRTtJQUNGLG1DQUFtQztJQUNuQywyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7SUFDVixpRkFBaUY7SUFDakYscUJBQ0UsOERBQUNZOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNISCxzQkFDQyw4REFBQ0k7MEJBQUU7Ozs7O3VCQUNISCwwQkFDQSw4REFBQ0c7MEJBQUU7Ozs7O3FDQUdILDhEQUFDQzswQkFDRWYsaUJBQUFBLDJCQUFBQSxLQUFNRyxHQUFHLENBQUMsQ0FBQ2EscUJBQ1YsOERBQUNDOzs0QkFDRUQsS0FBS1gsUUFBUTs0QkFBQzs0QkFBSVcsS0FBS1YsTUFBTTs7dUJBRHZCVSxLQUFLekIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVU1QjtHQXREd0JnQjs7UUFHYXJCLDJDQUFNQTs7O0tBSG5CcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhzdGFydCkvbGFzdC1zYWxlcy9wYWdlLnRzeD9kN2JjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU1dSLCB7IEZldGNoZXIgfSBmcm9tICdzd3InO1xuXG4vLyBjb25zdCBmZXRjaGVyOiBGZXRjaGVyPFNhbGVzRGF0YSwgc3RyaW5nPiA9IChpZCkgPT4gZ2V0VXNlckJ5SWQoaWQpO1xuLy8gY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuY29uc3QgZmV0Y2hlcjogRmV0Y2hlcjxTYWxlc0RhdGFbXSwgc3RyaW5nPiA9ICh1cmwpID0+IGdldEFsbFNhbGVzKHVybCk7XG5cbnR5cGUgU2FsZXNEYXRhID0ge1xuICBpZDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICB2b2x1bWU6IG51bWJlcjtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJCeUlkKGlkOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9uZXh0anMtY291cnNlLWY4MDZhLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy8ke2lkfS5qc29uYFxuICApO1xuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxTYWxlcyh1cmw6IHN0cmluZykge1xuICBjb25zb2xlLmxvZygnSGVyZScpO1xuICBsZXQgdHJhbnNmb3JtZWREYXRhOiBTYWxlc0RhdGFbXSA9IFtdO1xuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdHJhbnNmb3JtZWREYXRhID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+ICh7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgcmV0dXJuIHRyYW5zZm9ybWVkRGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFzdFNhbGVzUGFnZSgpIHtcbiAgLy8gY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZTxTYWxlc0RhdGFbXSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU1dSKFxuICAgICdodHRwczovL25leHRqcy1jb3Vyc2UtZjgwNmEtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb24nLFxuICAgIGZldGNoZXJcbiAgKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU1dSKCdzMScsIGZldGNoZXIpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgLy8gICAoYXN5bmMgKCkgPT4ge1xuICAvLyAgICAgdHJ5IHtcbiAgLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgLy8gICAgICAgICAnaHR0cHM6Ly9uZXh0anMtY291cnNlLWY4MDZhLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uJ1xuICAvLyAgICAgICApO1xuICAvLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICAgICAgY29uc3QgdHJhbnNmb3JtZWREYXRhID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXkpID0+ICh7XG4gIC8vICAgICAgICAgaWQ6IGtleSxcbiAgLy8gICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAvLyAgICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgLy8gICAgICAgfSkpO1xuICAvL1xuICAvLyAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1lZERhdGEpO1xuICAvLyAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KSgpO1xuICAvLyB9LCBbXSk7XG4gIC8vIENhbiByZW1vdmUgdGhlIHNhbGVzIGNoZWNrIHNvIHRoZXJlIGlzbid0IHRvIG1lc3NhZ2VzIHRoYXQgZmxhc2ggb24gdGhlIHNjcmVlblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TGFzdCBTYWxlczwvaDE+XG4gICAgICB7ZXJyb3IgP1xuICAgICAgICA8cD5BbiBlcnJvciBvY2N1cnJlZDwvcD5cbiAgICAgIDogaXNMb2FkaW5nID9cbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgLy8gOiAhZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgIC8vICAgPHA+Tm8gc2FsZXMgZm91bmQ8L3A+XG4gICAgICA6IDx1bD5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChzYWxlOiBTYWxlc0RhdGEpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3NhbGUuaWR9PlxuICAgICAgICAgICAgICB7c2FsZS51c2VybmFtZX0gLSB7c2FsZS52b2x1bWV9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHsvKjxwPntkYXRhPy51c2VybmFtZX08L3A+Ki99XG4gICAgICAgICAgey8qPHA+e2RhdGE/LnZvbHVtZX0gPC9wPiovfVxuICAgICAgICA8L3VsPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsImdldEFsbFNhbGVzIiwiZ2V0VXNlckJ5SWQiLCJpZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsInRyYW5zZm9ybWVkRGF0YSIsInRoZW4iLCJyZXMiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInVzZXJuYW1lIiwidm9sdW1lIiwiTGFzdFNhbGVzUGFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJkaXYiLCJoMSIsInAiLCJ1bCIsInNhbGUiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(start)/last-sales/page.tsx\n"));

/***/ })

});