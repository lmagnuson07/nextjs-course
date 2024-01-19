"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./auth.config.ts":
/*!************************!*\
  !*** ./auth.config.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    pages: {\n        signIn: \"/auth\"\n    },\n    callbacks: {\n        authorized ({ auth, request: { nextUrl } }) {\n            const isLoggedIn = !!auth?.user;\n            const isOnDashboard = nextUrl.pathname.startsWith(\"/\");\n            if (isOnDashboard) {\n                if (isLoggedIn) return true;\n                return false; // Redirect unauthenticated users to login page\n            } else if (isLoggedIn) {\n                return Response.redirect(new URL(\"/\", nextUrl));\n            }\n            return true;\n        },\n        async jwt ({ token }) {\n            return token;\n        }\n    },\n    providers: []\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXV0aC5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLGFBQWE7SUFDeEJDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVEMsWUFBVyxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFLEVBQUU7WUFDdkMsTUFBTUMsYUFBYSxDQUFDLENBQUNILE1BQU1JO1lBQzNCLE1BQU1DLGdCQUFnQkgsUUFBUUksUUFBUSxDQUFDQyxVQUFVLENBQUM7WUFDbEQsSUFBSUYsZUFBZTtnQkFDakIsSUFBSUYsWUFBWSxPQUFPO2dCQUN2QixPQUFPLE9BQU8sK0NBQStDO1lBQy9ELE9BQU8sSUFBSUEsWUFBWTtnQkFDckIsT0FBT0ssU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksS0FBS1I7WUFDeEM7WUFDQSxPQUFPO1FBQ1Q7UUFDQSxNQUFNUyxLQUFJLEVBQUVDLEtBQUssRUFBRTtZQUNqQixPQUFPQTtRQUNUO0lBQ0Y7SUFDQUMsV0FBVyxFQUFFO0FBQ2YsRUFBMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXV0aC5jb25maWcudHM/NDMwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBdXRoQ29uZmlnIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuZXhwb3J0IGNvbnN0IGF1dGhDb25maWcgPSB7XG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgnLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhdXRob3JpemVkKHsgYXV0aCwgcmVxdWVzdDogeyBuZXh0VXJsIH0gfSkge1xuICAgICAgY29uc3QgaXNMb2dnZWRJbiA9ICEhYXV0aD8udXNlcjtcbiAgICAgIGNvbnN0IGlzT25EYXNoYm9hcmQgPSBuZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy8nKTtcbiAgICAgIGlmIChpc09uRGFzaGJvYXJkKSB7XG4gICAgICAgIGlmIChpc0xvZ2dlZEluKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBSZWRpcmVjdCB1bmF1dGhlbnRpY2F0ZWQgdXNlcnMgdG8gbG9naW4gcGFnZVxuICAgICAgfSBlbHNlIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICAgIHJldHVybiBSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvJywgbmV4dFVybCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBhc3luYyBqd3QoeyB0b2tlbiB9KSB7XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXSwgLy8gQWRkIHByb3ZpZGVycyB3aXRoIGFuIGVtcHR5IGFycmF5IGZvciBub3dcbn0gc2F0aXNmaWVzIE5leHRBdXRoQ29uZmlnO1xuIl0sIm5hbWVzIjpbImF1dGhDb25maWciLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImF1dGhvcml6ZWQiLCJhdXRoIiwicmVxdWVzdCIsIm5leHRVcmwiLCJpc0xvZ2dlZEluIiwidXNlciIsImlzT25EYXNoYm9hcmQiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJSZXNwb25zZSIsInJlZGlyZWN0IiwiVVJMIiwiand0IiwidG9rZW4iLCJwcm92aWRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./auth.config.ts\n");

/***/ })

});