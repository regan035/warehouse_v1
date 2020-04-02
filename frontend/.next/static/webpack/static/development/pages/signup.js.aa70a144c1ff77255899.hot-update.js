webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: signup, signin, signout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signout", function() { return signout; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");


 // signup 
// export const signup = user => {
//   return fetch(`${API}/auth/signup`, {
//   //return fetch(`auth/signup`, {
//     method: "POST",
//     // headers: {
//     //   Accept: "application/json",
//     //   "Content-Type": "application/json"
//     // },
//     body: user
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// };

var signup = function signup(user) {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/auth/signup"), user).then(function (res) {
    return console.log(res);
  });
}; //signin

var signin = function signin(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("auth/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
}; //signout

var signout = function signout(next) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("auth/signout", {
    method: "GET"
  }).then(function (response) {
    console.log("signout success");
  })["catch"](function (err) {
    return console.log(err);
  });
};

/***/ })

})
//# sourceMappingURL=signup.js.aa70a144c1ff77255899.hot-update.js.map