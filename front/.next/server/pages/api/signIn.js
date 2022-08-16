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

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/config");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst argon2i = (__webpack_require__(/*! argon2-ffi */ \"argon2-ffi\").argon2i);\nconst userSchema = __webpack_require__(/*! ../../models/user.js */ \"(api)/./models/user.js\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar dotenv = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n\nconst { serverRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();\nasync function handler(req, res) {\n    var userAccount;\n    await mongoose.connect(\"mongodb://127.0.0.1:27017\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    }).then(async (e)=>{\n        console.log(`Connected to DB ${process.env.DB_URI}`);\n        userAccount = await userSchema.findOne({\n            mail: req.body.mail\n        });\n    }).catch((e)=>{\n        console.log(\"ERROR:\");\n        console.log(e);\n    });\n    console.log(req.body);\n    console.log(userAccount);\n    if (userAccount != null) {\n        argon2i.verify(userAccount.password, req.body.pass).then((succeed)=>{\n            if (succeed) {\n                const token = jwt.sign({\n                    sub: userAccount.__v\n                }, process.env.JWT_SECRET, {\n                    expiresIn: \"7d\"\n                });\n                res.status(200).send({\n                    success: true,\n                    mail: req.body.mail,\n                    id: userAccount.__v,\n                    token\n                });\n            } else {\n                res.send({\n                    success: false,\n                    message: \"Error verifying account\"\n                });\n            }\n        }).catch((err)=>{\n            res.send({\n                success: false,\n                error: {\n                    status: err.status || 500,\n                    message: err.message\n                }\n            });\n        });\n    } else {\n        res.status(500).send;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDSTtRQUNEOUIsR0FBRyxDQUFDMEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7S0FDeEI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vcGFnZXMvYXBpL3NpZ25Jbi50c3g/ZGE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuY29uc3QgYXJnb24yaSA9IHJlcXVpcmUoJ2FyZ29uMi1mZmknKS5hcmdvbjJpO1xyXG5jb25zdCB1c2VyU2NoZW1hID0gcmVxdWlyZShcIi4uLy4uL21vZGVscy91c2VyLmpzXCIpO1xyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcclxudmFyIGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudi9jb25maWcnKTtcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XHJcbmltcG9ydCB7IGFwaUhhbmRsZXIgfSBmcm9tICdoZWxwZXJzL2FwaSc7XHJcblxyXG5jb25zdCB7IHNlcnZlclJ1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICB2YXIgdXNlckFjY291bnQ7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KFwibW9uZ29kYjovLzEyNy4wLjAuMToyNzAxN1wiLCB7dXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlfSlcclxuICAgIC50aGVuKGFzeW5jIChlKSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhgQ29ubmVjdGVkIHRvIERCICR7cHJvY2Vzcy5lbnYuREJfVVJJfWApO1xyXG4gICAgICAgIHVzZXJBY2NvdW50ID0gYXdhaXQgdXNlclNjaGVtYS5maW5kT25lKHttYWlsOiByZXEuYm9keS5tYWlsfSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGUpID0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6XCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyQWNjb3VudClcclxuICAgIGlmKHVzZXJBY2NvdW50ICE9IG51bGwpe1xyXG4gICAgICAgIGFyZ29uMmkudmVyaWZ5KHVzZXJBY2NvdW50LnBhc3N3b3JkLCByZXEuYm9keS5wYXNzKVxyXG4gICAgICAgIC50aGVuKCAoc3VjY2VlZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzdWNjZWVkKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oe3N1YjogdXNlckFjY291bnQuX192fSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwge2V4cGlyZXNJbjogJzdkJ30pO1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe3N1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1haWw6IHJlcS5ib2R5Lm1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXJBY2NvdW50Ll9fdixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMuc2VuZCh7c3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRXJyb3IgdmVyaWZ5aW5nIGFjY291bnRcIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goIChlcnIpID0+e1xyXG4gICAgICAgICAgICByZXMuc2VuZCh7c3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGVyci5zdGF0dXMgfHwgNTAwLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2VcclxuICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImFyZ29uMmkiLCJ1c2VyU2NoZW1hIiwiand0IiwiZG90ZW52IiwiZ2V0Q29uZmlnIiwic2VydmVyUnVudGltZUNvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VyQWNjb3VudCIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiREJfVVJJIiwiZmluZE9uZSIsIm1haWwiLCJib2R5IiwiY2F0Y2giLCJ2ZXJpZnkiLCJwYXNzd29yZCIsInBhc3MiLCJzdWNjZWVkIiwidG9rZW4iLCJzaWduIiwic3ViIiwiX192IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsInN0YXR1cyIsInNlbmQiLCJzdWNjZXNzIiwiaWQiLCJtZXNzYWdlIiwiZXJyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/signIn.tsx\n");

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