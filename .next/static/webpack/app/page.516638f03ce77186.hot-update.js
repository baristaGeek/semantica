"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [snippet, setSnippet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function parseCodeSemantics(snippet) {\n        console.log(\"snippet to parse: \", snippet);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 mx-auto max-w-5xl items-center justify-between font-mono text-sm lg:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\",\n                    children: [\n                        \"Paste a block of code to run a\\xa0\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            className: \"font-mono font-bold\",\n                            children: \"semantic search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/estebanvargas/semantica/src/app/page.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/estebanvargas/semantica/src/app/page.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/estebanvargas/semantica/src/app/page.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                value: snippet,\n                onChange: (e)=>setSnippet(e.target.value),\n                className: \"px-4 py-20 w-96 border border-gray-300 rounded resize-none\"\n            }, void 0, false, {\n                fileName: \"/Users/estebanvargas/semantica/src/app/page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: (e)=>{\n                    setSnippet(snippet);\n                },\n                children: \"Set Snippet\"\n            }, void 0, false, {\n                fileName: \"/Users/estebanvargas/semantica/src/app/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/estebanvargas/semantica/src/app/page.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"RGX5x2vVYZRpfMwD+Xz6SSWGGaY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFdUM7QUFFeEIsU0FBU0U7O0lBRXRCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV2QyxTQUFTSSxtQkFBb0JGLE9BQU87UUFDbENHLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JKO0lBQ3BDO0lBRUEscUJBQ0UsOERBQUNLO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUVGLFdBQVU7O3dCQUE0UjtzQ0FFdlMsOERBQUNHOzRCQUFLSCxXQUFVO3NDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTFDLDhEQUFDSTtnQkFDQ0MsT0FBU1g7Z0JBQ1RZLFVBQVVDLENBQUFBLElBQUtaLFdBQVdZLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDeENMLFdBQVU7Ozs7OzswQkFHWiw4REFBQ1M7Z0JBQ0NDLFNBQVMsQ0FBQ0g7b0JBQ1JaLFdBQVdEO2dCQUNiOzBCQUNEOzs7Ozs7Ozs7Ozs7QUFLUDtHQWhDd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW3NuaXBwZXQsIHNldFNuaXBwZXRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgZnVuY3Rpb24gcGFyc2VDb2RlU2VtYW50aWNzIChzbmlwcGV0KSB7XG4gICAgY29uc29sZS5sb2coXCJzbmlwcGV0IHRvIHBhcnNlOiBcIiwgc25pcHBldClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgbXgtYXV0byBtYXgtdy01eGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmb250LW1vbm8gdGV4dC1zbSBsZzpmbGV4XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZpeGVkIGxlZnQtMCB0b3AtMCBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXppbmMtMjAwIHBiLTYgcHQtOCBiYWNrZHJvcC1ibHVyLTJ4bCBkYXJrOmJvcmRlci1uZXV0cmFsLTgwMCBkYXJrOmJnLXppbmMtODAwLzMwIGRhcms6ZnJvbS1pbmhlcml0IGxnOnN0YXRpYyBsZzp3LWF1dG8gIGxnOnJvdW5kZWQteGwgbGc6Ym9yZGVyIGxnOmJnLWdyYXktMjAwIGxnOnAtNCBsZzpkYXJrOmJnLXppbmMtODAwLzMwXCI+XG4gICAgICAgICAgUGFzdGUgYSBibG9jayBvZiBjb2RlIHRvIHJ1biBhJm5ic3A7XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZFwiPnNlbWFudGljIHNlYXJjaDwvY29kZT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgdmFsdWUgPSB7c25pcHBldH1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U25pcHBldChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMjAgdy05NiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgcmVzaXplLW5vbmVcIiBcbiAgICAgIC8+XG4gICAgXG4gICAgICA8YnV0dG9uIFxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIHNldFNuaXBwZXQoc25pcHBldCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFNldCBTbmlwcGV0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJzbmlwcGV0Iiwic2V0U25pcHBldCIsInBhcnNlQ29kZVNlbWFudGljcyIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImNvZGUiLCJ0ZXh0YXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});