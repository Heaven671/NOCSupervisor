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
exports.id = "pages/api/signUp";
exports.ids = ["pages/api/signUp"];
exports.modules = {

/***/ "argon2-ffi":
/*!*****************************!*\
  !*** external "argon2-ffi" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("argon2-ffi");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "csurf":
/*!************************!*\
  !*** external "csurf" ***!
  \************************/
/***/ ((module) => {

module.exports = require("csurf");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "net-snmp":
/*!***************************!*\
  !*** external "net-snmp" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("net-snmp");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { Schema  } = mongoose;\nvar userModel = new Schema({\n    name: String,\n    mail: {\n        type: String,\n        lowercase: true\n    },\n    password: String,\n    created: {\n        type: Date,\n        default: Date.now()\n    }\n});\nconst User = module.exports = mongoose.models.User || mongoose.model(\"User\", userModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBVSxDQUFDO0FBQ3BDLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdGLFFBQVE7QUFDM0IsSUFBSUcsU0FBUyxHQUFHLElBQUlELE1BQU0sQ0FBQztJQUN2QkUsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLElBQUksRUFBRTtRQUFDQyxJQUFJLEVBQUVGLE1BQU07UUFBRUcsU0FBUyxFQUFFLElBQUk7S0FBQztJQUNyQ0MsUUFBUSxFQUFFSixNQUFNO0lBQ2hCSyxPQUFPLEVBQUU7UUFBQ0gsSUFBSSxFQUFDSSxJQUFJO1FBQUVDLE9BQU8sRUFBRUQsSUFBSSxDQUFDRSxHQUFHLEVBQUU7S0FBQztDQUM1QyxDQUFDO0FBRUYsTUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLE9BQU8sR0FBR2hCLFFBQVEsQ0FBQ2lCLE1BQU0sQ0FBQ0gsSUFBSSxJQUFJZCxRQUFRLENBQUNrQixLQUFLLENBQUMsTUFBTSxFQUFFZixTQUFTLENBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL21vZGVscy91c2VyLmpzPzY1OTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XHJcbnZhciB1c2VyTW9kZWwgPSBuZXcgU2NoZW1hKHtcclxuICAgIG5hbWU6IFN0cmluZyxcclxuICAgIG1haWw6IHt0eXBlOiBTdHJpbmcsIGxvd2VyY2FzZTogdHJ1ZX0sXHJcbiAgICBwYXNzd29yZDogU3RyaW5nLFxyXG4gICAgY3JlYXRlZDoge3R5cGU6RGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3coKX1cclxufSk7XHJcblxyXG5jb25zdCBVc2VyID0gbW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJNb2RlbCk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNjaGVtYSIsInVzZXJNb2RlbCIsIm5hbWUiLCJTdHJpbmciLCJtYWlsIiwidHlwZSIsImxvd2VyY2FzZSIsInBhc3N3b3JkIiwiY3JlYXRlZCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiVXNlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/signUp.tsx":
/*!******************************!*\
  !*** ./pages/api/signUp.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nvar dotenv = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\nvar csurf = __webpack_require__(/*! csurf */ \"csurf\");\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar snmp = __webpack_require__(/*! net-snmp */ \"net-snmp\");\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst argon2i = (__webpack_require__(/*! argon2-ffi */ \"argon2-ffi\").argon2i);\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\");\nvar userSchema = __webpack_require__(/*! ../../models/user.js */ \"(api)/./models/user.js\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nasync function handler(req, res) {\n    console.log(\"0\");\n    await mongoose.connect(\"mongodb://127.0.0.1:27017\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    }).then((e)=>{\n        console.log(`Connected to DB ${process.env.DB_URI}`);\n    }).catch((e)=>{\n        console.log(\"ERROR:\");\n        console.log(e);\n    });\n    console.log(\"mail:\" + req.body.mail);\n    if (!validEmail(req.body.mail)) {\n        res.send({\n            success: false,\n            message: \"Not a valid email\"\n        });\n        return;\n    }\n    crypto.randomBytes(32, function(err, salt) {\n        console.log(\"1\");\n        argon2i.hash(req.body.pass, salt).then(async (hash)=>{\n            console.log(\"1-a\");\n            const userModel = new userSchema({\n                name: req.body.name,\n                mail: req.body.mail,\n                password: hash,\n                created: Date.now()\n            });\n            userSchema.exists({\n                mail: req.body.mail\n            }).then(async (doc)=>{\n                console.log(\"2-a\");\n                if (doc == null) {\n                    const newUser = await userModel.save();\n                    res.send({\n                        success: true\n                    });\n                } else {\n                    res.send({\n                        success: false,\n                        message: \"Existing credentials\"\n                    });\n                }\n            }).catch((err)=>{\n                console.log(\"2-b\");\n                console.log(err);\n                res.send({\n                    success: false,\n                    error: {\n                        status: err.status || 500,\n                        message: \"Network error\"\n                    }\n                });\n            });\n        }).catch((err)=>{\n            console.log(\"1-b\");\n            console.log(err);\n            res.send({\n                success: false,\n                error: {\n                    status: err.status || 500,\n                    message: \"Backend error\"\n                }\n            });\n        });\n    });\n    console.log(\"end\");\n//res.send({message: \"not connected\"});*/\n};\nfunction validEmail(email) {\n    const emailregex = /^([A-Za-z0-9_\\-.])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,4})$/;\n    if (!email.match(emailregex)) return false;\n    return true;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDbEIseUNBQXlDO0NBQzVDO0FBRUQsU0FBU1ksVUFBVSxDQUFDcUIsS0FBSyxFQUFDO0lBQ3RCLE1BQU1DLFVBQVUsNkRBQTZEO0lBQzdFLElBQUcsQ0FBQ0QsS0FBSyxDQUFDRSxLQUFLLENBQUNELFVBQVUsQ0FBQyxFQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzFDLE9BQU8sSUFBSSxDQUFDO0NBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL2FwaS9zaWduVXAudHN4P2FmN2YiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudi9jb25maWcnKTtcclxudmFyIGNzdXJmID0gcmVxdWlyZSgnY3N1cmYnKVxyXG52YXIgY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpXHJcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKVxyXG52YXIgc25tcCA9IHJlcXVpcmUgKFwibmV0LXNubXBcIik7XHJcbnZhciBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuY29uc3QgYXJnb24yaSA9IHJlcXVpcmUoJ2FyZ29uMi1mZmknKS5hcmdvbjJpO1xyXG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKVxyXG52YXIgdXNlclNjaGVtYSA9IHJlcXVpcmUoXCIuLi8uLi9tb2RlbHMvdXNlci5qc1wiKTtcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKCcwJylcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiOi8vMTI3LjAuMC4xOjI3MDE3XCIsIHt1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWV9KVxyXG4gICAgLnRoZW4oKGUpID0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDb25uZWN0ZWQgdG8gREIgJHtwcm9jZXNzLmVudi5EQl9VUkl9YCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlKSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOlwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnbWFpbDonICsgcmVxLmJvZHkubWFpbClcclxuICAgIGlmKCF2YWxpZEVtYWlsKHJlcS5ib2R5Lm1haWwpKXtcclxuICAgICAgICByZXMuc2VuZCh7c3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogXCJOb3QgYSB2YWxpZCBlbWFpbFwifSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgY3J5cHRvLnJhbmRvbUJ5dGVzKDMyLCBmdW5jdGlvbihlcnIsIHNhbHQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMVwiKTtcclxuICAgICAgICBhcmdvbjJpLmhhc2gocmVxLmJvZHkucGFzcyxzYWx0KVxyXG4gICAgICAgICAgICAudGhlbihhc3luYyAoaGFzaCkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEtYVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJNb2RlbCA9IG5ldyB1c2VyU2NoZW1hICh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVxLmJvZHkubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBtYWlsOiByZXEuYm9keS5tYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdXNlclNjaGVtYS5leGlzdHMoe21haWw6cmVxLmJvZHkubWFpbH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oIGFzeW5jIChkb2MpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjItYVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2MgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgdXNlck1vZGVsLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZW5kKHtzdWNjZXNzOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZW5kKHtzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXhpc3RpbmcgY3JlZGVudGlhbHNcIn0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCggKGVycikgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMi1iXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogZXJyLnN0YXR1cyB8fCA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJOZXR3b3JrIGVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCAoZXJyKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMS1iXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yIDogIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBlcnIuc3RhdHVzIHx8IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJCYWNrZW5kIGVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKFwiZW5kXCIpXHJcbiAgICAvL3Jlcy5zZW5kKHttZXNzYWdlOiBcIm5vdCBjb25uZWN0ZWRcIn0pOyovXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkRW1haWwoZW1haWwpe1xyXG4gICAgY29uc3QgZW1haWxyZWdleCA9IC9eKFtBLVphLXowLTlfXFwtLl0pK0AoW0EtWmEtejAtOV9cXC0uXSkrXFwuKFtBLVphLXpdezIsNH0pJC87XHJcbiAgICBpZighZW1haWwubWF0Y2goZW1haWxyZWdleCkpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59Il0sIm5hbWVzIjpbImRvdGVudiIsInJlcXVpcmUiLCJjc3VyZiIsImNvb2tpZVBhcnNlciIsImJvZHlQYXJzZXIiLCJzbm1wIiwibW9uZ29vc2UiLCJhcmdvbjJpIiwiY3J5cHRvIiwidXNlclNjaGVtYSIsImNvcnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIiwiZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9VUkkiLCJjYXRjaCIsImJvZHkiLCJtYWlsIiwidmFsaWRFbWFpbCIsInNlbmQiLCJzdWNjZXNzIiwibWVzc2FnZSIsInJhbmRvbUJ5dGVzIiwiZXJyIiwic2FsdCIsImhhc2giLCJwYXNzIiwidXNlck1vZGVsIiwibmFtZSIsInBhc3N3b3JkIiwiY3JlYXRlZCIsIkRhdGUiLCJub3ciLCJleGlzdHMiLCJkb2MiLCJuZXdVc2VyIiwic2F2ZSIsImVycm9yIiwic3RhdHVzIiwiZW1haWwiLCJlbWFpbHJlZ2V4IiwibWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/signUp.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signUp.tsx"));
module.exports = __webpack_exports__;

})();