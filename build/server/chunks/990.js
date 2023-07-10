exports.id = 990;
exports.ids = [990];
exports.modules = {

/***/ 71110:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 47734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 88709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 62698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 29150, 23))

/***/ }),

/***/ 44065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    meEndpoint: "/auth/me",
    loginEndpoint: "/auth/login",
    registerEndpoint: "/user/register",
    storageTokenKeyName: "accessToken",
    onTokenExpiration: "refreshToken"
});


/***/ }),

/***/ 6207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage in order to see the config changes in the template.
 * ! To clear local storage, you may refer https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/.
 */ // ** MUI Imports
const themeConfig = {
    // ** Layout Configs
    templateName: "Dhisingara" /* App Name */ ,
    layout: "vertical" /* vertical | horizontal */ ,
    mode: "light",
    direction: "ltr" /* ltr | rtl */ ,
    skin: "default" /* default | bordered */ ,
    contentWidth: "boxed" /* full | boxed */ ,
    footer: "static" /* fixed | static | hidden */ ,
    // ** Routing Configs
    routingLoader: true,
    // ** Navigation (Menu) Configs
    navHidden: false,
    menuTextTruncate: true,
    navSubItemIcon: "tabler:circle" /* Icon */ ,
    verticalNavToggleType: "accordion" /* accordion | collapse /*! Note: This is for Vertical navigation menu only */ ,
    navCollapsed: false,
    navigationSize: 260 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */ ,
    collapsedNavigationSize: 82 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */ ,
    afterVerticalNavMenuContentPosition: "fixed" /* fixed | static */ ,
    beforeVerticalNavMenuContentPosition: "fixed" /* fixed | static */ ,
    horizontalMenuToggle: "hover" /* click | hover /*! Note: This is for Horizontal navigation menu only */ ,
    horizontalMenuAnimation: true,
    // ** AppBar Configs
    appBar: "fixed" /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */ ,
    appBarBlur: true,
    // ** Other Configs
    responsiveFontSizes: true,
    disableRipple: false,
    disableCustomizer: false,
    toastPosition: "top-right" /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */ 
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeConfig);


/***/ }),

/***/ 11387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ AuthProvider),
/* harmony export */   V: () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40248);
/* harmony import */ var _configs_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44065);
/* __next_internal_client_entry_do_not_use__ AuthContext,AuthProvider auto */ 
// ** React Imports

// ** Next Import

// ** Axios

// ** Config

// ** Defaults
const defaultProvider = {
    user: null,
    loading: true,
    setUser: ()=>null,
    setLoading: ()=>Boolean,
    login: ()=>Promise.resolve(),
    logout: ()=>Promise.resolve(),
    register: ()=>Promise.resolve()
};
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultProvider);
const AuthProvider = ({ children })=>{
    // ** States
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultProvider.user);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultProvider.loading);
    // ** Hooks
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const initAuth = async ()=>{
            const storedToken = window.localStorage.getItem(_configs_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.storageTokenKeyName);
            if (storedToken) {
                setLoading(true);
                await axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.get("http://localhost:3333/api" + _configs_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.meEndpoint, {
                    headers: {
                        Authorization: storedToken
                    }
                }).then(async (response)=>{
                    setLoading(false);
                    setUser({
                        ...response.data
                    });
                }).catch(()=>{
                    localStorage.removeItem("userData");
                    localStorage.removeItem("refreshToken");
                    localStorage.removeItem("accessToken");
                    setUser(null);
                    setLoading(false);
                    if (_configs_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.onTokenExpiration === "logout" && !pathname.includes("login")) {
                        router.replace("/login");
                    }
                });
            } else {
                setLoading(false);
            }
        };
        initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleLogin = (params, errorCallback)=>{
        axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post("http://localhost:3333/api" + _configs_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.loginEndpoint, params).then(async (response)=>{
            params.rememberMe ? window.localStorage.setItem(_configs_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.storageTokenKeyName, response.data.accessToken) : null;
            // const returnUrl = router.query.returnUrl;
            setUser({
                ...response.data.userData
            });
            params.rememberMe ? window.localStorage.setItem("userData", JSON.stringify(response.data.userData)) : null;
            // const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";
            const redirectURL = "/practice";
            router.replace(redirectURL);
        }).catch((err)=>{
            if (errorCallback) errorCallback(err);
        });
    };
    const handleLogout = ()=>{
        setUser(null);
        window.localStorage.removeItem("userData");
        window.localStorage.removeItem(_configs_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.storageTokenKeyName);
        router.push("/login");
    };
    const handleRegister = (params, errorCallback)=>{
        axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post("http://localhost:3333/api" + _configs_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.registerEndpoint, params).then((res)=>{
            if (res.data.error) {
                if (errorCallback) errorCallback(res.data.error);
            } else {
                handleLogin({
                    email: params.email,
                    password: params.password
                });
            }
        }).catch((err)=>errorCallback ? errorCallback(err) : null);
    };
    const values = {
        user,
        loading,
        setUser,
        setLoading,
        login: handleLogin,
        logout: handleLogout,
        register: handleRegister
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: values,
        children: children
    });
};



/***/ }),

/***/ 91384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95371);
// ** Icon Imports


const IconifyIcon = ({ icon, ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .JO, {
        icon: icon,
        fontSize: "1.375rem",
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconifyIcon);


/***/ }),

/***/ 88335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J6: () => (/* binding */ SettingsContext),
/* harmony export */   ix: () => (/* binding */ SettingsConsumer),
/* harmony export */   mu: () => (/* binding */ SettingsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6207);
// ** React Imports


// ** ThemeConfig Import

const initialSettings = {
    themeColor: "primary",
    mode: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].mode,
    skin: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].skin,
    footer: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].footer,
    layout: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].layout,
    lastLayout: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].layout,
    direction: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].direction,
    navHidden: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].navHidden,
    appBarBlur: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].appBarBlur,
    navCollapsed: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].navCollapsed,
    contentWidth: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].contentWidth,
    toastPosition: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].toastPosition,
    verticalNavToggleType: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].verticalNavToggleType,
    appBar: _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].layout === "horizontal" && _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].appBar === "hidden" ? "fixed" : _configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__["default"].appBar
};
const staticSettings = {
    appBar: initialSettings.appBar,
    footer: initialSettings.footer,
    layout: initialSettings.layout,
    navHidden: initialSettings.navHidden,
    lastLayout: initialSettings.lastLayout,
    toastPosition: initialSettings.toastPosition
};
const restoreSettings = ()=>{
    let settings = null;
    try {
        const storedData = window.localStorage.getItem("settings");
        if (storedData) {
            settings = {
                ...JSON.parse(storedData),
                ...staticSettings
            };
        } else {
            settings = initialSettings;
        }
    } catch (err) {
        console.error(err);
    }
    return settings;
};
// set settings in localStorage
const storeSettings = (settings)=>{
    const initSettings = Object.assign({}, settings);
    delete initSettings.appBar;
    delete initSettings.footer;
    delete initSettings.layout;
    delete initSettings.navHidden;
    delete initSettings.lastLayout;
    delete initSettings.toastPosition;
    window.localStorage.setItem("settings", JSON.stringify(initSettings));
};
// ** Create Context
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    saveSettings: ()=>null,
    settings: initialSettings
});
const SettingsProvider = ({ children, pageSettings })=>{
    // ** State
    const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        ...initialSettings
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const restoredSettings = restoreSettings();
        if (restoredSettings) {
            setSettings({
                ...restoredSettings
            });
        }
        if (pageSettings) {
            setSettings({
                ...settings,
                ...pageSettings
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pageSettings
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (settings.layout === "horizontal" && settings.mode === "semi-dark") {
            saveSettings({
                ...settings,
                mode: "light"
            });
        }
        if (settings.layout === "horizontal" && settings.appBar === "hidden") {
            saveSettings({
                ...settings,
                appBar: "fixed"
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        settings.layout
    ]);
    const saveSettings = (updatedSettings)=>{
        storeSettings(updatedSettings);
        setSettings(updatedSettings);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsContext.Provider, {
        value: {
            settings,
            saveSettings
        },
        children: children
    });
};
const SettingsConsumer = SettingsContext.Consumer;


/***/ }),

/***/ 74260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_settingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88335);


const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_settingsContext__WEBPACK_IMPORTED_MODULE_1__/* .SettingsContext */ .J6);


/***/ }),

/***/ 63764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22166);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46661);
// ** MUI Imports



// Styled component for Blank Layout component
const BlankLayoutWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(({ theme })=>({
        height: "100vh",
        // For V1 Blank layout pages
        "& .content-center": {
            display: "flex",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing(5)
        },
        // For V2 Blank layout pages
        "& .content-right": {
            display: "flex",
            minHeight: "100vh",
            overflowX: "hidden",
            position: "relative"
        }
    }));
const BlankLayout = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlankLayoutWrapper, {
        className: "layout-wrapper",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            className: "app-content",
            sx: {
                overflow: "hidden",
                minHeight: "100vh",
                position: "relative"
            },
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlankLayout);


/***/ }),

/***/ 23654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11387);


const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .V);


/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ })

};
;