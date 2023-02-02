"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/start",{

/***/ "./pages/start.js":
/*!************************!*\
  !*** ./pages/start.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ start; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_modules_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/modules/api */ \"./src/modules/api.js\");\n/* harmony import */ var _src_stores_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/stores/store */ \"./src/stores/store.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n// 렌더링 => 불러오기 => 완료 => 렌더링\nfunction start() {\n    _s();\n    var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state;\n    }).user;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var data;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_src_modules_api__WEBPACK_IMPORTED_MODULE_3__.fetchUser)()\n                        ];\n                    case 1:\n                        data = _state.sent();\n                        dispatch(_src_stores_store__WEBPACK_IMPORTED_MODULE_4__.action.setName(data.name));\n                        return [\n                            2\n                        ];\n                }\n            });\n        })();\n    }, []);\n    if (!user.name) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading.....\"\n    }, void 0, false, {\n        fileName: \"/Users/bbung/Desktop/test/react/next_js-example/pages/start.js\",\n        lineNumber: 18,\n        columnNumber: 28\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            user.name,\n            \"님, 입사를 축하드립니다! 원하시는 개발 장비를 선택해주세요.\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BottomButton, {}, void 0, false, {\n                fileName: \"/Users/bbung/Desktop/test/react/next_js-example/pages/start.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bbung/Desktop/test/react/next_js-example/pages/start.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(start, \"///vX1FZ9qMGkeDNJGCfk9B4ZjU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBeUM7QUFDYztBQUNSO0FBQ0Y7QUFFN0MsMkJBQTJCO0FBQ1osU0FBU00sS0FBSyxHQUFHOztJQUM1QixJQUFNLElBQU0sR0FBS0gsd0RBQVcsQ0FBQyxTQUFDSyxLQUFLO2VBQUtBLEtBQUs7S0FBQSxDQUFDLENBQXRDRCxJQUFJO0lBQ1osSUFBTUUsUUFBUSxHQUFHUCx3REFBVyxFQUFFO0lBRTlCRCxnREFBUyxDQUFDLFdBQU07UUFDWCwrRkFBa0I7Z0JBQ1RTLElBQUk7Ozs7d0JBQUc7OzRCQUFNTiwyREFBUyxFQUFFOzBCQUFBOzt3QkFBeEJNLElBQUksR0FBRyxhQUFpQjt3QkFDOUJELFFBQVEsQ0FBQ0osNkRBQWMsQ0FBQ0ssSUFBSSxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7UUFDeEMsQ0FBQyxHQUFHLENBQUM7SUFDVCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFJLENBQUNMLElBQUksQ0FBQ0ssSUFBSSxFQUFFLHFCQUFPLDhEQUFDQyxLQUFHO2tCQUFDLGNBQVk7Ozs7O1lBQU0sQ0FBQztJQUUvQyxxQkFDSSw4REFBQ0EsS0FBRzs7WUFDQ04sSUFBSSxDQUFDSyxJQUFJO1lBQUMsb0NBQ1g7MEJBQUEsOERBQUNFLFlBQVk7Ozs7b0JBQWdCOzs7Ozs7WUFDM0IsQ0FDUjtBQUNOLENBQUM7R0FuQnVCUixLQUFLOztRQUNSSCxvREFBVztRQUNYRCxvREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdGFydC5qcz8yMWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZmV0Y2hVc2VyIH0gZnJvbSBcIi4uL3NyYy9tb2R1bGVzL2FwaVwiO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9zdG9yZXMvc3RvcmVcIjtcblxuLy8g66CM642U66eBID0+IOu2iOufrOyYpOq4sCA9PiDsmYTro4wgPT4g66CM642U66eBXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hVc2VyKCk7XG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb24uc2V0TmFtZShkYXRhLm5hbWUpKTtcbiAgICAgICAgfSkoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBpZiAoIXVzZXIubmFtZSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLi4uPC9kaXY+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1c2VyLm5hbWV964uYLCDsnoXsgqzrpbwg7LaV7ZWY65Oc66a964uI64ukISDsm5DtlZjsi5zripQg6rCc67CcIOyepeu5hOulvCDshKDtg53tlbTso7zshLjsmpQuXG4gICAgICAgICAgICA8Qm90dG9tQnV0dG9uPjwvQm90dG9tQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImZldGNoVXNlciIsImFjdGlvbiIsInN0YXJ0IiwidXNlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJkYXRhIiwic2V0TmFtZSIsIm5hbWUiLCJkaXYiLCJCb3R0b21CdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/start.js\n"));

/***/ })

});