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
exports.id = "pages/api/signIn";
exports.ids = ["pages/api/signIn"];
exports.modules = {

/***/ "argon2-ffi":
/*!*****************************!*\
  !*** external "argon2-ffi" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("argon2-ffi");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { Schema  } = mongoose;\nvar userModel = new Schema({\n    name: String,\n    mail: {\n        type: String,\n        lowercase: true\n    },\n    password: String,\n    created: {\n        type: Date,\n        default: Date.now()\n    }\n});\nconst User = module.exports = mongoose.models.User || mongoose.model(\"User\", userModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBVSxDQUFDO0FBQ3BDLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdGLFFBQVE7QUFDM0IsSUFBSUcsU0FBUyxHQUFHLElBQUlELE1BQU0sQ0FBQztJQUN2QkUsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLElBQUksRUFBRTtRQUFDQyxJQUFJLEVBQUVGLE1BQU07UUFBRUcsU0FBUyxFQUFFLElBQUk7S0FBQztJQUNyQ0MsUUFBUSxFQUFFSixNQUFNO0lBQ2hCSyxPQUFPLEVBQUU7UUFBQ0gsSUFBSSxFQUFDSSxJQUFJO1FBQUVDLE9BQU8sRUFBRUQsSUFBSSxDQUFDRSxHQUFHLEVBQUU7S0FBQztDQUM1QyxDQUFDO0FBRUYsTUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLE9BQU8sR0FBR2hCLFFBQVEsQ0FBQ2lCLE1BQU0sQ0FBQ0gsSUFBSSxJQUFJZCxRQUFRLENBQUNrQixLQUFLLENBQUMsTUFBTSxFQUFFZixTQUFTLENBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL21vZGVscy91c2VyLmpzPzY1OTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XHJcbnZhciB1c2VyTW9kZWwgPSBuZXcgU2NoZW1hKHtcclxuICAgIG5hbWU6IFN0cmluZyxcclxuICAgIG1haWw6IHt0eXBlOiBTdHJpbmcsIGxvd2VyY2FzZTogdHJ1ZX0sXHJcbiAgICBwYXNzd29yZDogU3RyaW5nLFxyXG4gICAgY3JlYXRlZDoge3R5cGU6RGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3coKX1cclxufSk7XHJcblxyXG5jb25zdCBVc2VyID0gbW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJNb2RlbCk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNjaGVtYSIsInVzZXJNb2RlbCIsIm5hbWUiLCJTdHJpbmciLCJtYWlsIiwidHlwZSIsImxvd2VyY2FzZSIsInBhc3N3b3JkIiwiY3JlYXRlZCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiVXNlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/signIn.tsx":
/*!******************************!*\
  !*** ./pages/api/signIn.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst argon2i = (__webpack_require__(/*! argon2-ffi */ \"argon2-ffi\").argon2i);\nconst userSchema = __webpack_require__(/*! ../../models/user.js */ \"(api)/./models/user.js\");\nasync function handler(req, res) {\n    var userAccount = await userSchema.findOne({\n        mail: req.body.mail\n    });\n    console.log(req.body);\n    console.log(userAccount);\n    if (userAccount != null) {\n        argon2i.verify(userAccount.password, req.body.pass).then((succeed)=>{\n            if (succeed) {\n                res.send({\n                    success: true,\n                    mail: req.body.mail\n                });\n            } else {\n                res.send({\n                    success: false,\n                    message: \"Error verifying account\"\n                });\n            }\n        }).catch((err)=>{\n            res.send({\n                success: false,\n                error: {\n                    status: err.status || 500,\n                    message: err.message\n                }\n            });\n        });\n    } else {\n        res.send({\n            success: false,\n            message: \"Not existing account\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbkluLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFVLENBQUM7QUFDcEMsTUFBTUMsT0FBTyxHQUFHRCw2REFBNkI7QUFDN0MsTUFBTUUsVUFBVSxHQUFHRixtQkFBTyxDQUFDLG9EQUFzQixDQUFDO0FBRW5DLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSUMsV0FBVyxHQUFHLE1BQU1KLFVBQVUsQ0FBQ0ssT0FBTyxDQUFDO1FBQUNDLElBQUksRUFBRUosR0FBRyxDQUFDSyxJQUFJLENBQUNELElBQUk7S0FBQyxDQUFDO0lBQ2pFRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsR0FBRyxDQUFDSyxJQUFJLENBQUMsQ0FBQztJQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFdBQVcsQ0FBQztJQUN4QixJQUFHQSxXQUFXLElBQUksSUFBSSxFQUFDO1FBQ25CTCxPQUFPLENBQUNXLE1BQU0sQ0FBQ04sV0FBVyxDQUFDTyxRQUFRLEVBQUVULEdBQUcsQ0FBQ0ssSUFBSSxDQUFDSyxJQUFJLENBQUMsQ0FDbERDLElBQUksQ0FBQ0MsQ0FBQUEsT0FBTyxHQUFJO1lBQ2IsSUFBR0EsT0FBTyxFQUFDO2dCQUNQWCxHQUFHLENBQUNZLElBQUksQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLElBQUk7b0JBQUVWLElBQUksRUFBRUosR0FBRyxDQUFDSyxJQUFJLENBQUNELElBQUk7aUJBQUMsQ0FBQzthQUNqRCxNQUNHO2dCQUNBSCxHQUFHLENBQUNZLElBQUksQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLEtBQUs7b0JBQUVDLE9BQU8sRUFBRSx5QkFBeUI7aUJBQUMsQ0FBQyxDQUFDO2FBQ2xFO1NBQ0osQ0FBQyxDQUNEQyxLQUFLLENBQUUsQ0FBQ0MsR0FBRyxHQUFJO1lBQ1poQixHQUFHLENBQUNZLElBQUksQ0FBQztnQkFBQ0MsT0FBTyxFQUFFLEtBQUs7Z0JBQ3hCSSxLQUFLLEVBQUU7b0JBQ0hDLE1BQU0sRUFBRUYsR0FBRyxDQUFDRSxNQUFNLElBQUksR0FBRztvQkFDekJKLE9BQU8sRUFBRUUsR0FBRyxDQUFDRixPQUFPO2lCQUN2QjthQUFDLENBQUM7U0FDTixDQUFDO0tBQ0wsTUFDSTtRQUNEZCxHQUFHLENBQUNZLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUUsS0FBSztZQUN4QkMsT0FBTyxFQUFFLHNCQUFzQjtTQUFDLENBQUMsQ0FBQztLQUNyQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9hcGkvc2lnbkluLnRzeD9kYTVlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5jb25zdCBhcmdvbjJpID0gcmVxdWlyZSgnYXJnb24yLWZmaScpLmFyZ29uMmk7XHJcbmNvbnN0IHVzZXJTY2hlbWEgPSByZXF1aXJlKFwiLi4vLi4vbW9kZWxzL3VzZXIuanNcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICB2YXIgdXNlckFjY291bnQgPSBhd2FpdCB1c2VyU2NoZW1hLmZpbmRPbmUoe21haWw6IHJlcS5ib2R5Lm1haWx9KVxyXG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgY29uc29sZS5sb2codXNlckFjY291bnQpXHJcbiAgICBpZih1c2VyQWNjb3VudCAhPSBudWxsKXtcclxuICAgICAgICBhcmdvbjJpLnZlcmlmeSh1c2VyQWNjb3VudC5wYXNzd29yZCwgcmVxLmJvZHkucGFzcylcclxuICAgICAgICAudGhlbihzdWNjZWVkID0+IHtcclxuICAgICAgICAgICAgaWYoc3VjY2VlZCl7XHJcbiAgICAgICAgICAgICAgICByZXMuc2VuZCh7c3VjY2VzczogdHJ1ZSwgbWFpbDogcmVxLmJvZHkubWFpbH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlcy5zZW5kKHtzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvciB2ZXJpZnlpbmcgYWNjb3VudFwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCggKGVycikgPT57XHJcbiAgICAgICAgICAgIHJlcy5zZW5kKHtzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogZXJyLnN0YXR1cyB8fCA1MDAsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxyXG4gICAgICAgICAgICB9fSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVzLnNlbmQoe3N1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiTm90IGV4aXN0aW5nIGFjY291bnRcIn0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImFyZ29uMmkiLCJ1c2VyU2NoZW1hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJBY2NvdW50IiwiZmluZE9uZSIsIm1haWwiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInZlcmlmeSIsInBhc3N3b3JkIiwicGFzcyIsInRoZW4iLCJzdWNjZWVkIiwic2VuZCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/signIn.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signIn.tsx"));
module.exports = __webpack_exports__;

})();