"use strict";
exports.id = 895;
exports.ids = [895];
exports.modules = {

/***/ 51895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports samplePostRequest, sampleGetRequest */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14670);

const samplePostRequest = (data)=>httpPost("/login", data);
const sampleGetRequest = ()=>httpGet("/login");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    addWord: "/word",
    getWords: "/word",
    deleteWord: "/word",
    updateWord: "/word"
});


/***/ }),

/***/ 14670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ko: () => (/* binding */ httpPost),
/* harmony export */   P3: () => (/* binding */ httpDelete),
/* harmony export */   kA: () => (/* binding */ httpGet)
/* harmony export */ });
/* unused harmony export setHttpToken */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40248);
/* harmony import */ var _configs_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44065);

// ** Config

const storedToken =  false && 0;
const clientInstance = axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.create({
    baseURL: "http://localhost:3333/api",
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
        Authorization: storedToken
    }
});
clientInstance.interceptors.response.use((response)=>response.data.data || response, (error)=>Promise.reject(error.response?.data));
const httpGet = (url, params)=>new Promise((resolve, reject)=>{
        clientInstance({
            method: "GET",
            url,
            params
        }).then((res)=>{
            resolve(res);
        }).catch((err)=>{
            reject(err);
        });
    });
function setHttpToken(token) {
    console.log("token", token);
    clientInstance.defaults.headers["Authorization"] = token;
}
function httpPost(url, data) {
    return new Promise((resolve, reject)=>{
        return clientInstance({
            method: "POST",
            url,
            data
        }).then((res)=>{
            resolve(res);
        }).catch((err)=>{
            reject(err);
        });
    });
}
function httpDelete(url) {
    return new Promise((resolve, reject)=>{
        return clientInstance({
            method: "DELETE",
            url
        }).then((res)=>{
            resolve(res);
        }).catch((err)=>{
            reject(err);
        });
    });
}


/***/ })

};
;