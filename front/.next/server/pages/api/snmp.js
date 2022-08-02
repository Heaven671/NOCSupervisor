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
exports.id = "pages/api/snmp";
exports.ids = ["pages/api/snmp"];
exports.modules = {

/***/ "net-snmp":
/*!***************************!*\
  !*** external "net-snmp" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("net-snmp");

/***/ }),

/***/ "(api)/./pages/api/snmp.tsx":
/*!****************************!*\
  !*** ./pages/api/snmp.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nvar snmp = __webpack_require__(/*! net-snmp */ \"net-snmp\");\nfunction handler(req, res) {\n    var session = snmp.createSession(\"192.168.3.11\", \"public\");\n    var sysLocationOid = \"1.3.6.1.2.1.1.6\";\n    session.get(sysLocationOid, function(error, varbinds) {\n        if (error) {\n            console.error(error);\n        } else {\n            for(var i = 0; i < varbinds.length; i++){\n                if (snmp.isVarbindError(varbinds[i])) {\n                    console.error(snmp.varbindError(varbinds[i]));\n                } else {\n                    console.log(varbinds[i].oid + \" = \" + varbinds[i].value);\n                    res.send(varbinds[i].value);\n                }\n            }\n        }\n        session.close();\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc25tcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUlBLElBQUksR0FBR0MsbUJBQU8sQ0FBQywwQkFBVSxDQUFDO0FBR2YsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUNwQyxJQUFJQyxPQUFPLEdBQUdMLElBQUksQ0FBQ00sYUFBYSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUM7SUFDMUQsSUFBSUMsY0FBYyxHQUFHLGlCQUFpQjtJQUV0Q0YsT0FBTyxDQUFDRyxHQUFHLENBQUVELGNBQWMsRUFBRSxTQUFVRSxLQUFLLEVBQUVDLFFBQVEsRUFBRTtRQUNwRCxJQUFJRCxLQUFLLEVBQUU7WUFDUEUsT0FBTyxDQUFDRixLQUFLLENBQUVBLEtBQUssQ0FBQyxDQUFDO1NBQ3pCLE1BQU07WUFDSCxJQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsUUFBUSxDQUFDRyxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFFO2dCQUN0QyxJQUFJWixJQUFJLENBQUNjLGNBQWMsQ0FBRUosUUFBUSxDQUFDRSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNuQ0QsT0FBTyxDQUFDRixLQUFLLENBQUVULElBQUksQ0FBQ2UsWUFBWSxDQUFFTCxRQUFRLENBQUNFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkQsTUFBTTtvQkFDSEQsT0FBTyxDQUFDSyxHQUFHLENBQUVOLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNLLEdBQUcsR0FBRyxLQUFLLEdBQUdQLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNNLEtBQUssQ0FBQyxDQUFDO29CQUMxRGQsR0FBRyxDQUFDZSxJQUFJLENBQUNULFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNNLEtBQUssQ0FBQyxDQUFDO2lCQUMvQjthQUNKO1NBQ0o7UUFDRGIsT0FBTyxDQUFDZSxLQUFLLEVBQUcsQ0FBQztLQUNwQixDQUFDLENBQUM7Q0FDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vcGFnZXMvYXBpL3NubXAudHN4PzA1MjMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHNubXAgPSByZXF1aXJlKCduZXQtc25tcCcpXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLHJlcyl7XHJcbiAgICB2YXIgc2Vzc2lvbiA9IHNubXAuY3JlYXRlU2Vzc2lvbihcIjE5Mi4xNjguMy4xMVwiLCBcInB1YmxpY1wiKTtcclxuICAgIHZhciBzeXNMb2NhdGlvbk9pZCA9IFwiMS4zLjYuMS4yLjEuMS42XCJcclxuXHJcbiAgICBzZXNzaW9uLmdldCAoc3lzTG9jYXRpb25PaWQsIGZ1bmN0aW9uIChlcnJvciwgdmFyYmluZHMpIHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciAoZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFyYmluZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbm1wLmlzVmFyYmluZEVycm9yICh2YXJiaW5kc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yIChzbm1wLnZhcmJpbmRFcnJvciAodmFyYmluZHNbaV0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKHZhcmJpbmRzW2ldLm9pZCArIFwiID0gXCIgKyB2YXJiaW5kc1tpXS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnNlbmQodmFyYmluZHNbaV0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlc3Npb24uY2xvc2UgKCk7XHJcbiAgICB9KTtcclxufSJdLCJuYW1lcyI6WyJzbm1wIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwiY3JlYXRlU2Vzc2lvbiIsInN5c0xvY2F0aW9uT2lkIiwiZ2V0IiwiZXJyb3IiLCJ2YXJiaW5kcyIsImNvbnNvbGUiLCJpIiwibGVuZ3RoIiwiaXNWYXJiaW5kRXJyb3IiLCJ2YXJiaW5kRXJyb3IiLCJsb2ciLCJvaWQiLCJ2YWx1ZSIsInNlbmQiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/snmp.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/snmp.tsx"));
module.exports = __webpack_exports__;

})();