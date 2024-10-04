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
exports.id = "app/api/create-payment-intent/route";
exports.ids = ["app/api/create-payment-intent/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-payment-intent%2Froute&page=%2Fapi%2Fcreate-payment-intent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-payment-intent%2Froute.ts&appDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-payment-intent%2Froute&page=%2Fapi%2Fcreate-payment-intent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-payment-intent%2Froute.ts&appDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Jordan_Desktop_Portfolio_Grad_Projects_GiveMeTheMoneyPage_donate_src_app_api_create_payment_intent_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/create-payment-intent/route.ts */ \"(rsc)/./src/app/api/create-payment-intent/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/create-payment-intent/route\",\n        pathname: \"/api/create-payment-intent\",\n        filename: \"route\",\n        bundlePath: \"app/api/create-payment-intent/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\api\\\\create-payment-intent\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Jordan_Desktop_Portfolio_Grad_Projects_GiveMeTheMoneyPage_donate_src_app_api_create_payment_intent_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/create-payment-intent/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjcmVhdGUtcGF5bWVudC1pbnRlbnQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNyZWF0ZS1wYXltZW50LWludGVudCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNyZWF0ZS1wYXltZW50LWludGVudCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNKb3JkYW4lNUNEZXNrdG9wJTVDUG9ydGZvbGlvJTVDR3JhZC1Qcm9qZWN0cyU1Q0dpdmVNZVRoZU1vbmV5UGFnZSU1Q2RvbmF0ZSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDSm9yZGFuJTVDRGVza3RvcCU1Q1BvcnRmb2xpbyU1Q0dyYWQtUHJvamVjdHMlNUNHaXZlTWVUaGVNb25leVBhZ2UlNUNkb25hdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2dGO0FBQzdKO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYXRlLz8yMzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEpvcmRhblxcXFxEZXNrdG9wXFxcXFBvcnRmb2xpb1xcXFxHcmFkLVByb2plY3RzXFxcXEdpdmVNZVRoZU1vbmV5UGFnZVxcXFxkb25hdGVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY3JlYXRlLXBheW1lbnQtaW50ZW50XFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jcmVhdGUtcGF5bWVudC1pbnRlbnQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jcmVhdGUtcGF5bWVudC1pbnRlbnRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NyZWF0ZS1wYXltZW50LWludGVudC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEpvcmRhblxcXFxEZXNrdG9wXFxcXFBvcnRmb2xpb1xcXFxHcmFkLVByb2plY3RzXFxcXEdpdmVNZVRoZU1vbmV5UGFnZVxcXFxkb25hdGVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY3JlYXRlLXBheW1lbnQtaW50ZW50XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jcmVhdGUtcGF5bWVudC1pbnRlbnQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-payment-intent%2Froute&page=%2Fapi%2Fcreate-payment-intent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-payment-intent%2Froute.ts&appDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/create-payment-intent/route.ts":
/*!****************************************************!*\
  !*** ./src/app/api/create-payment-intent/route.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"sk_test_51Q3VOtGBc05bKNreS9xJERVRUIRUQXmFAvgtN05103NpO09uW8bqcb6PnCqIgEUSt3LoQ6UNrw0MNya1keSZCSQG00aORH9qAA\", {\n    apiVersion: \"2024-09-30.acacia\"\n});\nasync function POST(req) {\n    const { amount } = await req.json();\n    if (!amount || amount <= 0) {\n        return new Response(JSON.stringify({\n            error: \"Invalid donation amount.\"\n        }), {\n            status: 400\n        });\n    }\n    try {\n        const paymentIntent = await stripe.paymentIntents.create({\n            amount,\n            currency: \"usd\",\n            payment_method_types: [\n                \"card\"\n            ]\n        });\n        return new Response(JSON.stringify({\n            clientSecret: paymentIntent.client_secret\n        }), {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        console.error(\"Error creating payment intent:\", error);\n        return new Response(JSON.stringify({\n            error: error.message || \"An unknown error occurred.\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jcmVhdGUtcGF5bWVudC1pbnRlbnQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEI7QUFFNUIsTUFBTUMsU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQ0UsNkdBQTZCLEVBQVk7SUFDakVHLFlBQVk7QUFDZDtBQUVPLGVBQWVDLEtBQUtDLEdBQVk7SUFDckMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO0lBRWpDLElBQUksQ0FBQ0QsVUFBVUEsVUFBVSxHQUFHO1FBQzFCLE9BQU8sSUFBSUUsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE9BQU87UUFBMkIsSUFBSTtZQUFFQyxRQUFRO1FBQUk7SUFDM0Y7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsZ0JBQWdCLE1BQU1kLE9BQU9lLGNBQWMsQ0FBQ0MsTUFBTSxDQUFDO1lBQ3ZEVDtZQUNBVSxVQUFVO1lBQ1ZDLHNCQUFzQjtnQkFBQzthQUFPO1FBQ2hDO1FBRUEsT0FBTyxJQUFJVCxTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRVEsY0FBY0wsY0FBY00sYUFBYTtRQUFDLElBQUk7WUFDakZDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBQ0YsRUFBRSxPQUFPVCxPQUFZO1FBQ25CVSxRQUFRVixLQUFLLENBQUMsa0NBQWtDQTtRQUNoRCxPQUFPLElBQUlILFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPQSxNQUFNVyxPQUFPLElBQUk7UUFBNkIsSUFBSTtZQUFFVixRQUFRO1FBQUk7SUFDOUc7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvbmF0ZS8uL3NyYy9hcHAvYXBpL2NyZWF0ZS1wYXltZW50LWludGVudC9yb3V0ZS50cz81ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcclxuXHJcbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkgYXMgc3RyaW5nLCB7XHJcbiAgYXBpVmVyc2lvbjogJzIwMjQtMDktMzAuYWNhY2lhJywgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBhbW91bnQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gIGlmICghYW1vdW50IHx8IGFtb3VudCA8PSAwKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdJbnZhbGlkIGRvbmF0aW9uIGFtb3VudC4nIH0pLCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBhd2FpdCBzdHJpcGUucGF5bWVudEludGVudHMuY3JlYXRlKHtcclxuICAgICAgYW1vdW50LFxyXG4gICAgICBjdXJyZW5jeTogJ3VzZCcsXHJcbiAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBjbGllbnRTZWNyZXQ6IHBheW1lbnRJbnRlbnQuY2xpZW50X3NlY3JldCB9KSwge1xyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHBheW1lbnQgaW50ZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nIH0pLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiYXBpVmVyc2lvbiIsIlBPU1QiLCJyZXEiLCJhbW91bnQiLCJqc29uIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJwYXltZW50SW50ZW50IiwicGF5bWVudEludGVudHMiLCJjcmVhdGUiLCJjdXJyZW5jeSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwiY2xpZW50U2VjcmV0IiwiY2xpZW50X3NlY3JldCIsImhlYWRlcnMiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/create-payment-intent/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/function-bind","vendor-chunks/call-bind","vendor-chunks/side-channel","vendor-chunks/set-function-length","vendor-chunks/hasown","vendor-chunks/has-proto","vendor-chunks/has-property-descriptors","vendor-chunks/gopd","vendor-chunks/get-intrinsic","vendor-chunks/es-define-property","vendor-chunks/define-data-property"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-payment-intent%2Froute&page=%2Fapi%2Fcreate-payment-intent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-payment-intent%2Froute.ts&appDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJordan%5CDesktop%5CPortfolio%5CGrad-Projects%5CGiveMeTheMoneyPage%5Cdonate&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();