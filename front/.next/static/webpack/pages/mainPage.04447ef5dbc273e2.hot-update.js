"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mainPage",{

/***/ "./components/Data.jsx":
/*!*****************************!*\
  !*** ./components/Data.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_DPRRF_Documents_Projet_NOCSupervisor_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_DPRRF_Documents_Projet_NOCSupervisor_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_DPRRF_Documents_Projet_NOCSupervisor_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _s = $RefreshSig$();\n\n\nvar url = \"/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.2.2.1.10.10&req=walk\";\nvar fetchData = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(C_Users_DPRRF_Documents_Projet_NOCSupervisor_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_DPRRF_Documents_Projet_NOCSupervisor_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _s();\n                    /*let modifiedData = [];\r\n    let ret;\r\n    try {\r\n      await axios.get()\r\n      .then((data) => {\r\n        modifiedData = {...data};\r\n        console.log({...modifiedData});\r\n      })\r\n      .catch((e) => {\r\n        console.error(e);\r\n      })\r\n      return modifiedData;\r\n    }\r\n    catch(err) {\r\n      ret = err\r\n      return ret;\r\n    }*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(C_Users_DPRRF_Documents_Projet_NOCSupervisor_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                        return C_Users_DPRRF_Documents_Projet_NOCSupervisor_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    _ctx.next = 2;\n                                    return fetch(url).then(function(data) {\n                                        console.log(\"data : \" + data);\n                                        var modifiedData;\n                                        modifiedData.map = function(data) {\n                                            return {\n                                                ifOutOctets: data\n                                            };\n                                        };\n                                        var ret = data;\n                                        return ret;\n                                    }).catch(function(error) {\n                                        var ret = error;\n                                        return ret;\n                                    });\n                                case 2:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    })), []);\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function fetchData() {\n        return _ref.apply(this, arguments);\n    };\n}();\n_s(fetchData, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RhdGEuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUErQjtBQUNOO0FBQ3pCLElBQU1FLEdBQUcsR0FBRyxxRUFBcUU7QUFFakYsSUFBTUMsU0FBUztlQUFHLHFRQUFZOzs7OztvQkFDMUI7Ozs7Ozt3Q0FvQkVJOzs7Ozs7Ozs7OzBTQVNlOzRMQUNKO3FDQUNaLENBQUM7Ozs7OztxQkFFSCxJQUFFLEVBQUUsQ0FBQzs7Ozs7O0tBQ1A7b0JBbkNLSixTQUFTOzs7R0FtQ2Q7R0FuQ0tBLFNBQVM7QUFxQ2YsZUFBZUEsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXRhLmpzeD9kOTkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5jb25zdCB1cmwgPSBcIi9hcGkvc25tcD9uZXR3b3JrPTE5Mi4xNjguMy4xMSZvaWQ9MS4zLjYuMS4yLjEuMi4yLjEuMTAuMTAmcmVxPXdhbGtcIjtcclxuXHJcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8qbGV0IG1vZGlmaWVkRGF0YSA9IFtdO1xyXG4gICAgbGV0IHJldDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldCgpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgbW9kaWZpZWREYXRhID0gey4uLmRhdGF9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHsuLi5tb2RpZmllZERhdGF9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIG1vZGlmaWVkRGF0YTtcclxuICAgIH1cclxuICAgIGNhdGNoKGVycikge1xyXG4gICAgICByZXQgPSBlcnJcclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0qL1xyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICAudGhlbigoZGF0YSkgPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSA6IFwiICsgZGF0YSlcclxuICAgICAgbGV0IG1vZGlmaWVkRGF0YVxyXG4gICAgICBtb2RpZmllZERhdGEubWFwID0gKGRhdGEpID0+ICh7XHJcbiAgICAgICAgICBpZk91dE9jdGV0czogZGF0YVxyXG4gICAgICB9KVxyXG4gICAgICBsZXQgcmV0ID0gZGF0YVxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgbGV0IHJldCA9IGVycm9yXHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9KVxyXG5cclxuICB9LCBbXSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hEYXRhKCk7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImF4aW9zIiwidXJsIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtb2RpZmllZERhdGEiLCJtYXAiLCJpZk91dE9jdGV0cyIsInJldCIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Data.jsx\n"));

/***/ })

});