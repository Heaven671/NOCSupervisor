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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nvar snmp = __webpack_require__(/*! net-snmp */ \"net-snmp\");\nfunction handler(req, res) {\n    var session = snmp.createSession(\"192.168.3.11\", \"public\");\n    var oids = [\n        \"1.3.6.1.2.1.1.5.0\",\n        \"1.3.6.1.2.1.1.6.0\"\n    ];\n    var ret = [\n        \"\"\n    ];\n    session.get(oids, function(error, varbinds) {\n        if (error) {\n            console.error(error);\n        } else {\n            for(var i = 0; i < varbinds.length; i++){\n                if (snmp.isVarbindError(varbinds[i])) {\n                    console.error(snmp.varbindError(varbinds[i]));\n                } else {\n                    console.log(varbinds[i].oid + \" = \" + varbinds[i].value);\n                    ret[i] += varbinds[i].value;\n                }\n            }\n            res.send(JSON.stringify(ret));\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc25tcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUlBLElBQUksR0FBR0MsbUJBQU8sQ0FBQywwQkFBVSxDQUFDO0FBR2YsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUNwQyxJQUFJQyxPQUFPLEdBQUdMLElBQUksQ0FBQ00sYUFBYSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUM7SUFDMUQsSUFBSUMsSUFBSSxHQUFHO1FBQUMsbUJBQW1CO1FBQUUsbUJBQW1CO0tBQUM7SUFDckQsSUFBSUMsR0FBRyxHQUFHO1FBQUMsRUFBRTtLQUFDO0lBQ2RILE9BQU8sQ0FBQ0ksR0FBRyxDQUFFRixJQUFJLEVBQUUsU0FBVUcsS0FBSyxFQUFFQyxRQUFRLEVBQUU7UUFDMUMsSUFBSUQsS0FBSyxFQUFFO1lBQ1BFLE9BQU8sQ0FBQ0YsS0FBSyxDQUFFQSxLQUFLLENBQUMsQ0FBQztTQUN6QixNQUFNO1lBQ0gsSUFBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtnQkFDdEMsSUFBSWIsSUFBSSxDQUFDZSxjQUFjLENBQUVKLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbkNELE9BQU8sQ0FBQ0YsS0FBSyxDQUFFVixJQUFJLENBQUNnQixZQUFZLENBQUVMLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuRCxNQUFNO29CQUNIRCxPQUFPLENBQUNLLEdBQUcsQ0FBRU4sUUFBUSxDQUFDRSxDQUFDLENBQUMsQ0FBQ0ssR0FBRyxHQUFHLEtBQUssR0FBR1AsUUFBUSxDQUFDRSxDQUFDLENBQUMsQ0FBQ00sS0FBSyxDQUFDLENBQUM7b0JBQzFEWCxHQUFHLENBQUNLLENBQUMsQ0FBQyxJQUFJRixRQUFRLENBQUNFLENBQUMsQ0FBQyxDQUFDTSxLQUFLLENBQUM7aUJBQy9CO2FBQ0o7WUFDRGYsR0FBRyxDQUFDZ0IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2QsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqQztLQUNKLENBQUMsQ0FBQztDQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9hcGkvc25tcC50c3g/MDUyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc25tcCA9IHJlcXVpcmUoJ25ldC1zbm1wJylcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcbiAgICB2YXIgc2Vzc2lvbiA9IHNubXAuY3JlYXRlU2Vzc2lvbihcIjE5Mi4xNjguMy4xMVwiLCBcInB1YmxpY1wiKTtcbiAgICB2YXIgb2lkcyA9IFtcIjEuMy42LjEuMi4xLjEuNS4wXCIsIFwiMS4zLjYuMS4yLjEuMS42LjBcIl07XG4gICAgdmFyIHJldCA9IFsnJ107XG4gICAgc2Vzc2lvbi5nZXQgKG9pZHMsIGZ1bmN0aW9uIChlcnJvciwgdmFyYmluZHMpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yIChlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhcmJpbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNubXAuaXNWYXJiaW5kRXJyb3IgKHZhcmJpbmRzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yIChzbm1wLnZhcmJpbmRFcnJvciAodmFyYmluZHNbaV0pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAodmFyYmluZHNbaV0ub2lkICsgXCIgPSBcIiArIHZhcmJpbmRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0W2ldICs9IHZhcmJpbmRzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJldCkpO1xuICAgICAgICB9XG4gICAgfSk7XG59Il0sIm5hbWVzIjpbInNubXAiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJjcmVhdGVTZXNzaW9uIiwib2lkcyIsInJldCIsImdldCIsImVycm9yIiwidmFyYmluZHMiLCJjb25zb2xlIiwiaSIsImxlbmd0aCIsImlzVmFyYmluZEVycm9yIiwidmFyYmluZEVycm9yIiwibG9nIiwib2lkIiwidmFsdWUiLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/snmp.tsx\n");

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