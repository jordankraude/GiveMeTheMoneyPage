"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"d50676265271\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NDQzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImQ1MDY3NjI2NTI3MVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/Header.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Header.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // Track if mobile menu is open\n    const handleScroll = ()=>{\n        setScrolled(window.scrollY > 10);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-bf6b1bfdbe4125b7\" + \" \" + \"fixed w-full z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-bf6b1bfdbe4125b7\" + \" \" + \"container mx-auto transition-all duration-300 m-auto text-white bg-[#5e17eb] \".concat(scrolled ? \"rounded-none w-screen mt-0\" : \"mt-2 w-4/5 rounded-3xl\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-bf6b1bfdbe4125b7\" + \" \" + \"p-3 flex justify-center \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                className: \"jsx-bf6b1bfdbe4125b7\" + \" \" + \"flex justify-between items-center transition-all duration-300 \".concat(scrolled ? \"w-full mx-8\" : \"w-4/5\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-bf6b1bfdbe4125b7\" + \" \" + \"text-lg font-bold\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            href: \"/\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                src: \"images/icon.png\",\n                                                alt: \"logo\",\n                                                width: 60,\n                                                height: 60\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                                lineNumber: 31,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"jsx-bf6b1bfdbe4125b7\" + \" \" + \"hidden lg:flex space-x-8 relative\",\n                                        children: [\n                                            {\n                                                href: \"/donate/donate-third\",\n                                                label: \"Donate-Secure 3rd Party\"\n                                            },\n                                            {\n                                                href: \"/donate/donate-seamless\",\n                                                label: \"Seamless Donate\"\n                                            },\n                                            {\n                                                href: \"/purpose\",\n                                                label: \"Purpose\"\n                                            },\n                                            {\n                                                href: \"/goals\",\n                                                label: \"Goals\"\n                                            }\n                                        ].map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"jsx-bf6b1bfdbe4125b7\" + \" \" + \"relative group\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        href: link.href,\n                                                        className: \"transition-colors duration-300\",\n                                                        children: link.label\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"jsx-bf6b1bfdbe4125b7\" + \" \" + \"absolute left-0 bottom-0 w-full h-1 bg-white scale-x-0 transform transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left group-hover:translate-x-0 group-hover:animate-bounce-x\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, index, true, {\n                                                fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-bf6b1bfdbe4125b7\" + \" \" + \"lg:hidden\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setMenuOpen(!menuOpen),\n                                            className: \"jsx-bf6b1bfdbe4125b7\" + \" \" + \"text-white focus:outline-none\",\n                                            children: menuOpen ? \"✖\" : \"☰\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"jsx-bf6b1bfdbe4125b7\" + \" \" + \"lg:hidden flex flex-col space-y-2 mt-4\",\n                            children: [\n                                {\n                                    href: \"/donate/donate-third\",\n                                    label: \"Donate-Secure 3rd Party\"\n                                },\n                                {\n                                    href: \"/donate/donate-seamless\",\n                                    label: \"Seamless Donate\"\n                                },\n                                {\n                                    href: \"/purpose\",\n                                    label: \"Purpose\"\n                                },\n                                {\n                                    href: \"/goals\",\n                                    label: \"Goals\"\n                                }\n                            ].map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"jsx-bf6b1bfdbe4125b7\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        href: link.href,\n                                        className: \"block p-2 hover:bg-gray-700 rounded text-center\",\n                                        children: link.label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jordan\\\\Desktop\\\\Portfolio\\\\Grad-Projects\\\\GiveMeTheMoneyPage\\\\donate\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bf6b1bfdbe4125b7\",\n                children: \"@-webkit-keyframes bounce-x{0%,100%{-webkit-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(10px);transform:translatex(10px)}}@-moz-keyframes bounce-x{0%,100%{-moz-transform:translatex(0);transform:translatex(0)}50%{-moz-transform:translatex(10px);transform:translatex(10px)}}@-o-keyframes bounce-x{0%,100%{-o-transform:translatex(0);transform:translatex(0)}50%{-o-transform:translatex(10px);transform:translatex(10px)}}@keyframes bounce-x{0%,100%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(10px);-moz-transform:translatex(10px);-o-transform:translatex(10px);transform:translatex(10px)}}.group-hover.jsx-bf6b1bfdbe4125b7:animate-bounce-x{-webkit-animation:bounce-x.5s;-moz-animation:bounce-x.5s;-o-animation:bounce-x.5s;animation:bounce-x.5s}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"EaXJNDiM7KISlWFYokQmqh/1M0I=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRStCO0FBQ2E7QUFDZjtBQUc3QixNQUFNSSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsUUFBUSwrQkFBK0I7SUFFaEYsTUFBTU8sZUFBZTtRQUNuQkgsWUFBWUksT0FBT0MsT0FBTyxHQUFHO0lBQy9CO0lBRUFWLGdEQUFTQSxDQUFDO1FBQ1JTLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU87WUFDTEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNLOzBEQUFpQjswQkFDaEIsNEVBQUNDOzhEQUFlLGdGQUFtSixPQUFuRVYsV0FBVywrQkFBK0I7O3NDQUN4SSw4REFBQ1U7c0VBQWM7c0NBQ2IsNEVBQUNDOzBFQUFlLGlFQUFvRyxPQUFuQ1gsV0FBVyxnQkFBZ0I7O2tEQUMxRyw4REFBQ1U7a0ZBQWM7a0RBQ2IsNEVBQUNaLGlEQUFJQTs0Q0FBQ2MsTUFBTTtzREFDWiw0RUFBQ2pCLGtEQUFLQTtnREFDSmtCLEtBQUk7Z0RBQ0pDLEtBQUk7Z0RBQ0pDLE9BQU87Z0RBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBTVosOERBQUNDO2tGQUFhO2tEQUNYOzRDQUNDO2dEQUFFTCxNQUFNO2dEQUF3Qk0sT0FBTzs0Q0FBMEI7NENBQ2pFO2dEQUFFTixNQUFNO2dEQUEyQk0sT0FBTzs0Q0FBa0I7NENBQzVEO2dEQUFFTixNQUFNO2dEQUFZTSxPQUFPOzRDQUFVOzRDQUNyQztnREFBRU4sTUFBTTtnREFBVU0sT0FBTzs0Q0FBUTt5Q0FDbEMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNYLDhEQUFDQzswRkFBeUI7O2tFQUN4Qiw4REFBQ3hCLGlEQUFJQTt3REFBQ2MsTUFBTVEsS0FBS1IsSUFBSTt3REFBRVcsV0FBVTtrRUFDOUJILEtBQUtGLEtBQUs7Ozs7OztrRUFHYiw4REFBQ007a0dBQWU7Ozs7Ozs7K0NBTFRIOzs7Ozs7Ozs7O2tEQVdiLDhEQUFDWDtrRkFBYztrREFDYiw0RUFBQ2U7NENBRUNDLFNBQVMsSUFBTXZCLFlBQVksQ0FBQ0Q7c0ZBRGxCO3NEQUdUQSxXQUFXLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBT3pCQSwwQkFDQyw4REFBQ2U7c0VBQWE7c0NBQ1g7Z0NBQ0M7b0NBQUVMLE1BQU07b0NBQXdCTSxPQUFPO2dDQUEwQjtnQ0FDakU7b0NBQUVOLE1BQU07b0NBQTJCTSxPQUFPO2dDQUFrQjtnQ0FDNUQ7b0NBQUVOLE1BQU07b0NBQVlNLE9BQU87Z0NBQVU7Z0NBQ3JDO29DQUFFTixNQUFNO29DQUFVTSxPQUFPO2dDQUFROzZCQUNsQyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ1gsOERBQUNDOzs4Q0FDQyw0RUFBQ3hCLGlEQUFJQTt3Q0FBQ2MsTUFBTVEsS0FBS1IsSUFBSTt3Q0FBRVcsV0FBVTtrREFDOUJILEtBQUtGLEtBQUs7Ozs7OzttQ0FGTkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCekI7R0FsR010QjtLQUFBQTtBQW9HTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvSGVhZGVyLnRzeD84ZmQxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFRyYWNrIGlmIG1vYmlsZSBtZW51IGlzIG9wZW5cclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgc2V0U2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiAxMCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZml4ZWQgdy1mdWxsIHotNTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRhaW5lciBteC1hdXRvIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBtLWF1dG8gdGV4dC13aGl0ZSBiZy1bIzVlMTdlYl0gJHtzY3JvbGxlZCA/ICdyb3VuZGVkLW5vbmUgdy1zY3JlZW4gbXQtMCcgOiAnbXQtMiB3LTQvNSByb3VuZGVkLTN4bCd9YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBmbGV4IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtzY3JvbGxlZCA/ICd3LWZ1bGwgbXgtOCcgOiAndy00LzUnfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9pY29uLnBuZ1wiIFxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCIgXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs2MH0gXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NjB9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIERlc2t0b3AgTmF2IExpbmtzICovfVxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBzcGFjZS14LTggcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAgIHsgaHJlZjogJy9kb25hdGUvZG9uYXRlLXRoaXJkJywgbGFiZWw6ICdEb25hdGUtU2VjdXJlIDNyZCBQYXJ0eScgfSxcclxuICAgICAgICAgICAgICAgICAgeyBocmVmOiAnL2RvbmF0ZS9kb25hdGUtc2VhbWxlc3MnLCBsYWJlbDogJ1NlYW1sZXNzIERvbmF0ZScgfSxcclxuICAgICAgICAgICAgICAgICAgeyBocmVmOiAnL3B1cnBvc2UnLCBsYWJlbDogJ1B1cnBvc2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgaHJlZjogJy9nb2FscycsIGxhYmVsOiAnR29hbHMnIH1cclxuICAgICAgICAgICAgICAgIF0ubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rLmhyZWZ9IGNsYXNzTmFtZT1cInRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBVbmRlcmxpbmUgZWZmZWN0ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCBib3R0b20tMCB3LWZ1bGwgaC0xIGJnLXdoaXRlIHNjYWxlLXgtMCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2Utb3V0IGdyb3VwLWhvdmVyOnNjYWxlLXgtMTAwIGdyb3VwLWhvdmVyOm9yaWdpbi1sZWZ0IGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTAgZ3JvdXAtaG92ZXI6YW5pbWF0ZS1ib3VuY2UteFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBNb2JpbGUgTWVudSBCdXR0b24gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bWVudU9wZW4gPyAn4pyWJyA6ICfimLAnfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIE1vYmlsZSBOYXZpZ2F0aW9uICovfVxyXG4gICAgICAgICAge21lbnVPcGVuICYmIChcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBmbGV4IGZsZXgtY29sIHNwYWNlLXktMiBtdC00XCI+XHJcbiAgICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICAgIHsgaHJlZjogJy9kb25hdGUvZG9uYXRlLXRoaXJkJywgbGFiZWw6ICdEb25hdGUtU2VjdXJlIDNyZCBQYXJ0eScgfSxcclxuICAgICAgICAgICAgICAgIHsgaHJlZjogJy9kb25hdGUvZG9uYXRlLXNlYW1sZXNzJywgbGFiZWw6ICdTZWFtbGVzcyBEb25hdGUnIH0sXHJcbiAgICAgICAgICAgICAgICB7IGhyZWY6ICcvcHVycG9zZScsIGxhYmVsOiAnUHVycG9zZScgfSxcclxuICAgICAgICAgICAgICAgIHsgaHJlZjogJy9nb2FscycsIGxhYmVsOiAnR29hbHMnIH1cclxuICAgICAgICAgICAgICBdLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5ocmVmfSBjbGFzc05hbWU9XCJibG9jayBwLTIgaG92ZXI6YmctZ3JheS03MDAgcm91bmRlZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICB7LyogU3R5bGVzIGZvciB0aGUgYm91bmNpbmcgdW5kZXJsaW5lICovfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgQGtleWZyYW1lcyBib3VuY2UteCB7XHJcbiAgICAgICAgICAwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmdyb3VwLWhvdmVyOmFuaW1hdGUtYm91bmNlLXgge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UteCAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiSGVhZGVyIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoZWFkZXIiLCJkaXYiLCJuYXYiLCJocmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1bCIsImxhYmVsIiwibWFwIiwibGluayIsImluZGV4IiwibGkiLCJjbGFzc05hbWUiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Header.tsx\n"));

/***/ })

});