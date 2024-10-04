"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/create-checkout-session/route";
exports.ids = ["app/api/create-checkout-session/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Jordan_Desktop_Portfolio_Grad_Projects_GiveMeTheMoneyPage_donate_src_app_api_create_checkout_session_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/create-checkout-session/route.ts */ \"(rsc)/./src/app/api/create-checkout-session/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/create-checkout-session/route\",\n        pathname: \"/api/create-checkout-session\",\n        filename: \"route\",\n        bundlePath: \"app/api/create-checkout-session/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\api\\\\create-checkout-session\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Jordan_Desktop_Portfolio_Grad_Projects_GiveMeTheMoneyPage_donate_src_app_api_create_checkout_session_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/create-checkout-session/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNKb3JkYW4lNUNEZXNrdG9wJTVDUG9ydGZvbGlvJTVDR3JhZC1Qcm9qZWN0cyU1Q0dpdmVNZVRoZU1vbmV5UGFnZSU1Q2RvbmF0ZSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDSm9yZGFuJTVDRGVza3RvcCU1Q1BvcnRmb2xpbyU1Q0dyYWQtUHJvamVjdHMlNUNHaXZlTWVUaGVNb25leVBhZ2UlNUNkb25hdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tGO0FBQy9KO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYXRlLz82NDJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEpvcmRhblxcXFxEZXNrdG9wXFxcXFBvcnRmb2xpb1xcXFxHcmFkLVByb2plY3RzXFxcXEdpdmVNZVRoZU1vbmV5UGFnZVxcXFxkb25hdGVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY3JlYXRlLWNoZWNrb3V0LXNlc3Npb25cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcSm9yZGFuXFxcXERlc2t0b3BcXFxcUG9ydGZvbGlvXFxcXEdyYWQtUHJvamVjdHNcXFxcR2l2ZU1lVGhlTW9uZXlQYWdlXFxcXGRvbmF0ZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjcmVhdGUtY2hlY2tvdXQtc2Vzc2lvblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/create-checkout-session/route.ts":
/*!******************************************************!*\
  !*** ./src/app/api/create-checkout-session/route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst stripe = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/cjs/stripe.cjs.node.js\")(\"sk_test_51Q3VOtGBc05bKNreS9xJERVRUIRUQXmFAvgtN05103NpO09uW8bqcb6PnCqIgEUSt3LoQ6UNrw0MNya1keSZCSQG00aORH9qAA\");\nasync function POST(req) {\n    const { amount } = await req.json();\n    const session = await stripe.checkout.sessions.create({\n        payment_method_types: [\n            \"card\"\n        ],\n        line_items: [\n            {\n                price_data: {\n                    currency: \"usd\",\n                    product_data: {\n                        name: \"Donation\"\n                    },\n                    unit_amount: amount || 1000\n                },\n                quantity: 1\n            }\n        ],\n        mode: \"payment\",\n        success_url: `${\"http://localhost:3000\"}/donate/success`,\n        cancel_url: `${\"http://localhost:3000\"}/donate/cancel`\n    });\n    // Return the session URL instead of redirecting\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        url: session.url\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUMzQyxNQUFNQyxTQUFTQyxtQkFBT0EsQ0FBQyxvRUFBVUMsNkdBQTZCO0FBRXZELGVBQWVHLEtBQUtDLEdBQVk7SUFDckMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO0lBRWpDLE1BQU1DLFVBQVUsTUFBTVQsT0FBT1UsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztRQUNwREMsc0JBQXNCO1lBQUM7U0FBTztRQUM5QkMsWUFBWTtZQUFDO2dCQUNYQyxZQUFZO29CQUNWQyxVQUFVO29CQUNWQyxjQUFjO3dCQUNaQyxNQUFNO29CQUNSO29CQUNBQyxhQUFhWixVQUFVO2dCQUN6QjtnQkFDQWEsVUFBVTtZQUNaO1NBQUU7UUFDRkMsTUFBTTtRQUNOQyxhQUFhLENBQUMsRUFBRXBCLHVCQUFnQyxDQUFDLGVBQWUsQ0FBQztRQUNqRXNCLFlBQVksQ0FBQyxFQUFFdEIsdUJBQWdDLENBQUMsY0FBYyxDQUFDO0lBQ2pFO0lBRUEsZ0RBQWdEO0lBQ2hELE9BQU9ILHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7UUFBRWlCLEtBQUtoQixRQUFRZ0IsR0FBRztJQUFDO0FBQzlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYXRlLy4vc3JjL2FwcC9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24vcm91dGUudHM/NTBkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIGNvbnN0IHsgYW1vdW50IH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XHJcbiAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXHJcbiAgICBsaW5lX2l0ZW1zOiBbe1xyXG4gICAgICBwcmljZV9kYXRhOiB7XHJcbiAgICAgICAgY3VycmVuY3k6ICd1c2QnLFxyXG4gICAgICAgIHByb2R1Y3RfZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogJ0RvbmF0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVuaXRfYW1vdW50OiBhbW91bnQgfHwgMTAwMCwgIC8vIERlZmF1bHQgdG8gJDEwIGlmIG5vIGFtb3VudCBwYXNzZWRcclxuICAgICAgfSxcclxuICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICB9XSxcclxuICAgIG1vZGU6ICdwYXltZW50JyxcclxuICAgIHN1Y2Nlc3NfdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH0vZG9uYXRlL3N1Y2Nlc3NgLFxyXG4gICAgY2FuY2VsX3VybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L2RvbmF0ZS9jYW5jZWxgLFxyXG4gIH0pO1xyXG5cclxuICAvLyBSZXR1cm4gdGhlIHNlc3Npb24gVVJMIGluc3RlYWQgb2YgcmVkaXJlY3RpbmdcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1cmw6IHNlc3Npb24udXJsIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJzdHJpcGUiLCJyZXF1aXJlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiUE9TVCIsInJlcSIsImFtb3VudCIsImpzb24iLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwibGluZV9pdGVtcyIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJ1bml0X2Ftb3VudCIsInF1YW50aXR5IiwibW9kZSIsInN1Y2Nlc3NfdXJsIiwiTkVYVF9QVUJMSUNfQkFTRV9VUkwiLCJjYW5jZWxfdXJsIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/create-checkout-session/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/function-bind","vendor-chunks/call-bind","vendor-chunks/side-channel","vendor-chunks/set-function-length","vendor-chunks/hasown","vendor-chunks/has-proto","vendor-chunks/has-property-descriptors","vendor-chunks/gopd","vendor-chunks/get-intrinsic","vendor-chunks/es-define-property","vendor-chunks/define-data-property"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();