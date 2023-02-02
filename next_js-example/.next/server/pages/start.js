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
exports.id = "pages/start";
exports.ids = ["pages/start"];
exports.modules = {

/***/ "./pages/start.js":
/*!************************!*\
  !*** ./pages/start.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_modules_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/modules/api */ \"./src/modules/api.js\");\n/* harmony import */ var _src_stores_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/stores/store */ \"./src/stores/store.js\");\n/* harmony import */ var _src_components_BottomButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/BottomButton */ \"./src/components/BottomButton.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n// 렌더링 => 불러오기 => 완료 => 렌더링\nfunction start() {\n    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const startDeviceChoice = ()=>{\n        router.push(\"/device-choice\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async function() {\n            const data = await (0,_src_modules_api__WEBPACK_IMPORTED_MODULE_3__.fetchUser)();\n            dispatch(_src_stores_store__WEBPACK_IMPORTED_MODULE_4__.action.setName(data.name));\n        })();\n    }, []);\n    if (!user.name) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading.....\"\n    }, void 0, false, {\n        fileName: \"/Users/bbung/Desktop/test/react/next_js-example/pages/start.js\",\n        lineNumber: 26,\n        columnNumber: 28\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    user.name,\n                    \"님, 입사를 축하드립니다! 원하시는 개발 장비를 선택해주세요.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bbung/Desktop/test/react/next_js-example/pages/start.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_BottomButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"시작\",\n                callback: startDeviceChoice\n            }, void 0, false, {\n                fileName: \"/Users/bbung/Desktop/test/react/next_js-example/pages/start.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bbung/Desktop/test/react/next_js-example/pages/start.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNjO0FBQ1I7QUFDRjtBQUNhO0FBQ2xCO0FBRXhDLDJCQUEyQjtBQUNaLFNBQVNRLEtBQUssR0FBRztJQUM1QixNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHTix3REFBVyxDQUFDLENBQUNPLEtBQUssR0FBS0EsS0FBSyxDQUFDO0lBQzlDLE1BQU1DLFFBQVEsR0FBR1Qsd0RBQVcsRUFBRTtJQUU5QixNQUFNVSxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFFMUIsTUFBTU0saUJBQWlCLEdBQUcsSUFBTTtRQUM1QkQsTUFBTSxDQUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRURiLGdEQUFTLENBQUMsSUFBTTtRQUNYLGtCQUFrQjtZQUNmLE1BQU1jLElBQUksR0FBRyxNQUFNWCwyREFBUyxFQUFFO1lBQzlCTyxRQUFRLENBQUNOLDZEQUFjLENBQUNVLElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDLEdBQUcsQ0FBQztJQUNULENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQUksQ0FBQ1IsSUFBSSxDQUFDUSxJQUFJLEVBQUUscUJBQU8sOERBQUNDLEtBQUc7a0JBQUMsY0FBWTs7Ozs7WUFBTSxDQUFDO0lBRS9DLHFCQUNJLDhEQUFDQSxLQUFHOzswQkFDQSw4REFBQ0MsSUFBRTs7b0JBQUVWLElBQUksQ0FBQ1EsSUFBSTtvQkFBQyxvQ0FBa0M7Ozs7OztvQkFBSzswQkFDdEQsOERBQUNYLG9FQUFZO2dCQUFDYyxJQUFJLEVBQUUsSUFBSTtnQkFBRUMsUUFBUSxFQUFFUixpQkFBaUI7Ozs7O29CQUFpQjs7Ozs7O1lBQ3BFLENBQ1I7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3RhcnQuanM/MjFjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoVXNlciB9IGZyb20gXCIuLi9zcmMvbW9kdWxlcy9hcGlcIjtcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCIuLi9zcmMvc3RvcmVzL3N0b3JlXCI7XG5pbXBvcnQgQm90dG9tQnV0dG9uIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Cb3R0b21CdXR0b25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyDroIzrjZTrp4EgPT4g67aI65+s7Jik6riwID0+IOyZhOujjCA9PiDroIzrjZTrp4FcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBzdGFydERldmljZUNob2ljZSA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvZGV2aWNlLWNob2ljZVwiKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFVzZXIoKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbi5zZXROYW1lKGRhdGEubmFtZSkpO1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGlmICghdXNlci5uYW1lKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uLi48L2Rpdj47XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPnt1c2VyLm5hbWV964uYLCDsnoXsgqzrpbwg7LaV7ZWY65Oc66a964uI64ukISDsm5DtlZjsi5zripQg6rCc67CcIOyepeu5hOulvCDshKDtg53tlbTso7zshLjsmpQuPC9oMj5cbiAgICAgICAgICAgIDxCb3R0b21CdXR0b24gdGV4dD17XCLsi5zsnpFcIn0gY2FsbGJhY2s9e3N0YXJ0RGV2aWNlQ2hvaWNlfT48L0JvdHRvbUJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJmZXRjaFVzZXIiLCJhY3Rpb24iLCJCb3R0b21CdXR0b24iLCJ1c2VSb3V0ZXIiLCJzdGFydCIsInVzZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwicm91dGVyIiwic3RhcnREZXZpY2VDaG9pY2UiLCJwdXNoIiwiZGF0YSIsInNldE5hbWUiLCJuYW1lIiwiZGl2IiwiaDIiLCJ0ZXh0IiwiY2FsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/start.js\n");

/***/ }),

/***/ "./src/components/BottomButton.js":
/*!****************************************!*\
  !*** ./src/components/BottomButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BottomButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction BottomButton({ text , callback  }) {\n    const Button = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`\n        width: 160px;\n        height: 50px;\n        font-size: 16px;\n        border-radius: 5px;\n        border: 1px solid gray;\n        background-color: lightgray;\n    `;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n        onClick: callback,\n        children: text\n    }, void 0, false, {\n        fileName: \"/Users/bbung/Desktop/test/react/next_js-example/src/components/BottomButton.js\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb3R0b21CdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2E7QUFFeEIsU0FBU0UsWUFBWSxDQUFDLEVBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFFLEVBQUU7SUFDckQsTUFBTUMsTUFBTSxHQUFHSixpRUFBYSxDQUFDOzs7Ozs7O0lBTzdCLENBQUM7SUFFRCxxQkFBTyw4REFBQ0ksTUFBTTtRQUFDRSxPQUFPLEVBQUVILFFBQVE7a0JBQUdELElBQUk7Ozs7O1lBQVUsQ0FBQztBQUN0RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQm90dG9tQnV0dG9uLmpzP2EyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm90dG9tQnV0dG9uKHsgdGV4dCwgY2FsbGJhY2sgfSkge1xuICAgIGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGA7XG5cbiAgICByZXR1cm4gPEJ1dHRvbiBvbkNsaWNrPXtjYWxsYmFja30+e3RleHR9PC9CdXR0b24+O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQm90dG9tQnV0dG9uIiwidGV4dCIsImNhbGxiYWNrIiwiQnV0dG9uIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BottomButton.js\n");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUser\": () => (/* binding */ fetchUser)\n/* harmony export */ });\nconst fetchUser = async ()=>{\n    return new Promise((resolve)=>{\n        setTimeout(()=>resolve({\n                name: \"zerobase\"\n            }), 2000);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFNBQVMsR0FBRyxVQUFZO0lBQ2pDLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sR0FBSztRQUM1QkMsVUFBVSxDQUFDLElBQU1ELE9BQU8sQ0FBQztnQkFBRUUsSUFBSSxFQUFFLFVBQVU7YUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkuanM/MGE4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoeyBuYW1lOiBcInplcm9iYXNlXCIgfSksIDIwMDApO1xuICAgIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJmZXRjaFVzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/api.js\n");

/***/ }),

/***/ "./src/stores/store.js":
/*!*****************************!*\
  !*** ./src/stores/store.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"action\": () => (/* binding */ action),\n/* harmony export */   \"user\": () => (/* binding */ user)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst action = {\n    setName: (text)=>{\n        return {\n            type: \"setName\",\n            text: text\n        };\n    }\n};\nconst userInitial = {\n    name: \"\"\n};\nconst user = (state = userInitial, action)=>{\n    switch(action.type){\n        case \"setName\":\n            return {\n                ...state,\n                name: action.text\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmVzL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFakMsTUFBTUMsTUFBTSxHQUFHO0lBQ2xCQyxPQUFPLEVBQUUsQ0FBQ0MsSUFBSSxHQUFLO1FBQ2YsT0FBTztZQUFFQyxJQUFJLEVBQUUsU0FBUztZQUFFRCxJQUFJLEVBQUVBLElBQUk7U0FBRSxDQUFDO0lBQzNDLENBQUM7Q0FDSixDQUFDO0FBRUYsTUFBTUUsV0FBVyxHQUFHO0lBQ2hCQyxJQUFJLEVBQUUsRUFBRTtDQUNYO0FBRU0sTUFBTUMsSUFBSSxHQUFHLENBQUNDLEtBQUssR0FBR0gsV0FBVyxFQUFFSixNQUFNLEdBQUs7SUFDakQsT0FBUUEsTUFBTSxDQUFDRyxJQUFJO1FBQ2YsS0FBSyxTQUFTO1lBQ1YsT0FBTztnQkFBRSxHQUFHSSxLQUFLO2dCQUFFRixJQUFJLEVBQUVMLE1BQU0sQ0FBQ0UsSUFBSTthQUFFLENBQUM7UUFDM0M7WUFDSSxPQUFPSyxLQUFLLENBQUM7S0FDcEI7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3N0b3JlLmpzPzlkYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSB7XG4gICAgc2V0TmFtZTogKHRleHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJzZXROYW1lXCIsIHRleHQ6IHRleHQgfTtcbiAgICB9LFxufTtcblxuY29uc3QgdXNlckluaXRpYWwgPSB7XG4gICAgbmFtZTogXCJcIixcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyID0gKHN0YXRlID0gdXNlckluaXRpYWwsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNldE5hbWVcIjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuYW1lOiBhY3Rpb24udGV4dCB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG4iXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiYWN0aW9uIiwic2V0TmFtZSIsInRleHQiLCJ0eXBlIiwidXNlckluaXRpYWwiLCJuYW1lIiwidXNlciIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/stores/store.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/start.js"));
module.exports = __webpack_exports__;

})();