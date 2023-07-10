exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 43929:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85727))

/***/ }),

/***/ 85727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js + 1 modules
var emotion_element_6bdfffb2_esm = __webpack_require__(19128);
// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.esm.js + 7 modules
var emotion_cache_esm = __webpack_require__(58471);
;// CONCATENATED MODULE: ./app/core/utils/create-emotion-cache.ts

const createEmotionCache = ()=>{
    return (0,emotion_cache_esm["default"])({
        key: "css"
    });
};

// EXTERNAL MODULE: ./app/context/AuthContext.tsx
var AuthContext = __webpack_require__(11387);
// EXTERNAL MODULE: ./app/core/context/settingsContext.tsx
var settingsContext = __webpack_require__(88335);
// EXTERNAL MODULE: ./node_modules/@mui/utils/index.js
var utils = __webpack_require__(90480);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CssBaseline/index.js
var CssBaseline = __webpack_require__(57981);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/GlobalStyles/index.js
var GlobalStyles = __webpack_require__(82131);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var node_styles = __webpack_require__(22166);
// EXTERNAL MODULE: ./app/configs/themeConfig.ts
var themeConfig = __webpack_require__(6207);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/stylis-plugin-rtl/dist/cjs/stylis-rtl.js
var stylis_rtl = __webpack_require__(85248);
var stylis_rtl_default = /*#__PURE__*/__webpack_require__.n(stylis_rtl);
;// CONCATENATED MODULE: ./app/layouts/components/Direction.tsx
// ** React Imports


// ** Emotion Imports


// ** RTL Plugin

const styleCache = ()=>(0,emotion_cache_esm["default"])({
        key: "rtl",
        prepend: true,
        stylisPlugins: [
            (stylis_rtl_default())
        ]
    });
const Direction = (props)=>{
    const { children, direction } = props;
    (0,react_.useEffect)(()=>{
        document.dir = direction;
    }, [
        direction
    ]);
    if (direction === "rtl") {
        return /*#__PURE__*/ jsx_runtime_.jsx(emotion_element_6bdfffb2_esm.C, {
            value: styleCache(),
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
/* harmony default export */ const components_Direction = (Direction);

;// CONCATENATED MODULE: ./app/core/theme/overrides/card.ts
// ** MUI Imports
const Card = (theme, skin)=>{
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    ...skin === "bordered" && {
                        border: `1px solid ${theme.palette.divider}`
                    },
                    "& .card-more-options": {
                        marginTop: theme.spacing(-1),
                        marginRight: theme.spacing(-3)
                    },
                    "& .MuiTableContainer-root, & .MuiDataGrid-root, & .MuiDataGrid-columnHeaders": {
                        borderRadius: 0
                    }
                }
            },
            defaultProps: {
                elevation: skin === "bordered" ? 0 : 6
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(6),
                    "& + .MuiCardContent-root, & + .MuiCardActions-root, & + .MuiCollapse-root .MuiCardContent-root": {
                        paddingTop: 0
                    },
                    "& .MuiCardHeader-subheader": {
                        fontSize: "0.875rem",
                        marginTop: theme.spacing(1),
                        color: theme.palette.text.disabled
                    }
                },
                title: {
                    lineHeight: 1.6,
                    fontWeight: 500,
                    fontSize: "1.125rem",
                    letterSpacing: "0.15px",
                    "@media (min-width: 600px)": {
                        fontSize: "1.25rem"
                    }
                },
                action: {
                    marginTop: 0,
                    marginRight: 0
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(6),
                    "& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root": {
                        paddingTop: 0
                    },
                    "&:last-of-type": {
                        paddingBottom: theme.spacing(6)
                    }
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(6),
                    "& .MuiButton-text": {
                        paddingLeft: theme.spacing(3),
                        paddingRight: theme.spacing(3)
                    },
                    "&.card-action-dense": {
                        padding: theme.spacing(0, 3, 3),
                        ".MuiCard-root .MuiCardMedia-root + &": {
                            paddingTop: theme.spacing(3)
                        }
                    },
                    ".MuiCard-root &:first-of-type": {
                        paddingTop: theme.spacing(3),
                        "& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root": {
                            paddingTop: 0
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const card = (Card);

// EXTERNAL MODULE: ./app/core/utils/hex-to-rgba.ts
var hex_to_rgba = __webpack_require__(46296);
;// CONCATENATED MODULE: ./app/core/theme/overrides/chip.ts
// ** MUI Imports
// ** Util Imports

const Chip = (theme)=>{
    return {
        MuiChip: {
            styleOverrides: {
                root: {
                    height: 30,
                    fontWeight: 500,
                    "&.MuiChip-rounded": {
                        borderRadius: 4
                    }
                },
                outlined: {
                    "&.MuiChip-colorDefault": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    }
                },
                sizeSmall: {
                    height: 24
                },
                labelSmall: {
                    paddingLeft: theme.spacing(2.5),
                    paddingRight: theme.spacing(2.5)
                },
                deleteIcon: {
                    width: 18,
                    height: 18
                },
                avatar: {
                    color: theme.palette.text.primary
                },
                deletableColorPrimary: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.7),
                        "&:hover": {
                            color: theme.palette.primary.main
                        }
                    }
                },
                deletableColorSecondary: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.7),
                        "&:hover": {
                            color: theme.palette.secondary.main
                        }
                    }
                },
                deletableColorSuccess: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.7),
                        "&:hover": {
                            color: theme.palette.success.main
                        }
                    }
                },
                deletableColorError: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.7),
                        "&:hover": {
                            color: theme.palette.error.main
                        }
                    }
                },
                deletableColorWarning: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.7),
                        "&:hover": {
                            color: theme.palette.warning.main
                        }
                    }
                },
                deletableColorInfo: {
                    "&.MuiChip-light .MuiChip-deleteIcon": {
                        color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.7),
                        "&:hover": {
                            color: theme.palette.info.main
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_chip = (Chip);

;// CONCATENATED MODULE: ./app/core/theme/overrides/link.ts
/* harmony default export */ const overrides_link = ({
    MuiLink: {
        styleOverrides: {
            root: {
                textDecoration: "none"
            }
        }
    }
});

;// CONCATENATED MODULE: ./app/core/theme/overrides/list.ts
// ** MUI Imports
const List = (theme)=>{
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: "0 !important",
                    marginRight: theme.spacing(2.25),
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(4)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                dense: {
                    "& .MuiListItemText-primary": {
                        color: theme.palette.text.primary
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: theme.palette.text.primary
                }
            }
        }
    };
};
/* harmony default export */ const overrides_list = (List);

;// CONCATENATED MODULE: ./app/core/theme/overrides/menu.ts
// ** MUI Imports
// ** Util Import

const Menu = (theme, skin)=>{
    const boxShadow = ()=>{
        if (skin === "bordered") {
            return theme.shadows[0];
        } else if (theme.palette.mode === "light") {
            return theme.shadows[8];
        } else return theme.shadows[9];
    };
    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                    "& .MuiMenu-paper": {
                        boxShadow: boxShadow(),
                        ...skin === "bordered" && {
                            border: `1px solid ${theme.palette.divider}`
                        }
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    margin: theme.spacing(0, 2, 1),
                    padding: theme.spacing(1.75, 4),
                    borderRadius: theme.shape.borderRadius,
                    "&:last-child": {
                        marginBottom: 0
                    },
                    "&:not(.Mui-focusVisible):hover": {
                        color: theme.palette.primary.main,
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.08)
                    },
                    "&.Mui-selected": {
                        color: `${theme.palette.common.white} !important`,
                        backgroundColor: `${theme.palette.primary.main} !important`,
                        "&.Mui-focusVisible": {
                            backgroundColor: `${theme.palette.primary.dark} !important`
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_menu = (Menu);

;// CONCATENATED MODULE: ./app/core/theme/overrides/tabs.ts
// ** MUI Imports
const Tabs = (theme)=>{
    return {
        MuiTabs: {
            styleOverrides: {
                root: {
                    minHeight: 38,
                    "&:not(.MuiTabs-vertical)": {
                        borderBottom: `1px solid ${theme.palette.divider}`
                    }
                },
                vertical: {
                    minWidth: 130,
                    marginRight: theme.spacing(4),
                    borderRight: `1px solid ${theme.palette.divider}`,
                    "& .MuiTab-root": {
                        minWidth: 130
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    minHeight: 38,
                    padding: theme.spacing(1.75, 5)
                },
                textColorSecondary: {
                    "&.Mui-selected": {
                        color: theme.palette.text.secondary
                    }
                }
            }
        },
        MuiTabPanel: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(6)
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tabs = (Tabs);

;// CONCATENATED MODULE: ./app/core/theme/overrides/input.ts
// ** MUI Imports
const input = (theme)=>{
    return {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    "&:before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    "&.Mui-disabled:before": {
                        borderBottomStyle: "solid"
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
                    "&:hover:not(.Mui-disabled)": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
                    },
                    "&:before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.error.main
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.text.disabled
                    },
                    "&.Mui-focused": {
                        boxShadow: `0 2px 3px 0 rgba(${theme.palette.customColors.main}, 0.1)`
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_input = (input);

;// CONCATENATED MODULE: ./app/core/theme/overrides/paper.ts
/* harmony default export */ const paper = ({
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: "none"
            }
        }
    }
});

;// CONCATENATED MODULE: ./app/core/theme/overrides/table.ts
// ** MUI Imports
const Table = (theme)=>{
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[0],
                    borderTopColor: theme.palette.divider
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    textTransform: "uppercase",
                    "& .MuiTableCell-head": {
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "1px"
                    }
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-body": {
                        letterSpacing: "0.25px",
                        color: theme.palette.text.secondary,
                        "&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)": {
                            paddingTop: theme.spacing(3.5),
                            paddingBottom: theme.spacing(3.5)
                        }
                    }
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-head:not(.MuiTableCell-paddingCheckbox):first-child, & .MuiTableCell-root:not(.MuiTableCell-paddingCheckbox):first-child ": {
                        paddingLeft: theme.spacing(6)
                    },
                    "& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child": {
                        paddingRight: theme.spacing(6)
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${theme.palette.divider}`
                },
                paddingCheckbox: {
                    paddingLeft: theme.spacing(3.25)
                },
                stickyHeader: {
                    backgroundColor: theme.palette.customColors.tableHeaderBg
                }
            }
        }
    };
};
/* harmony default export */ const table = (Table);

;// CONCATENATED MODULE: ./app/core/theme/overrides/radio.tsx
// ** MUI Imports

const Radio = (theme)=>{
    return {
        MuiRadio: {
            defaultProps: {
                checkedIcon: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: theme.palette.primary.main,
                            d: "M12 3C16.9705 3 21 7.02944 21 12C21 16.9705 16.9705 21 12 21C7.02944 21 3 16.9705 3 12C3 7.02944 7.02944 3 12 3Z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: theme.palette.common.white,
                            d: "M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                        })
                    ]
                }),
                icon: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    width: "24",
                    height: "24",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    stroke: theme.palette.text.disabled,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5Z"
                    })
                })
            },
            styleOverrides: {
                root: {
                    "&.Mui-checked": {
                        "& svg": {
                            fill: theme.palette.primary.main,
                            filter: `drop-shadow(0 2px 3px rgba(${theme.palette.mode === "light" ? theme.palette.customColors.main : "12, 16, 27"}, 0.16))`
                        },
                        "&.Mui-disabled svg": {
                            opacity: 0.4,
                            filter: "none",
                            "& path:first-of-type": {
                                fill: theme.palette.text.disabled
                            },
                            "& path:last-of-type": {
                                fill: theme.palette.common.white,
                                stroke: theme.palette.common.white,
                                opacity: theme.palette.mode === "dark" ? 0.5 : 0.9
                            }
                        }
                    },
                    "&.Mui-disabled:not(.Mui-checked) svg": {
                        opacity: 0.5
                    },
                    "&.Mui-checked.MuiRadio-colorSecondary svg path:first-of-type": {
                        fill: theme.palette.secondary.main
                    },
                    "&.Mui-checked.MuiRadio-colorSuccess svg path:first-of-type": {
                        fill: theme.palette.success.main
                    },
                    "&.Mui-checked.MuiRadio-colorError svg path:first-of-type": {
                        fill: theme.palette.error.main
                    },
                    "&.Mui-checked.MuiRadio-colorWarning svg path:first-of-type": {
                        fill: theme.palette.warning.main
                    },
                    "&.Mui-checked.MuiRadio-colorInfo svg path:first-of-type": {
                        fill: theme.palette.info.main
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_radio = (Radio);

;// CONCATENATED MODULE: ./app/core/theme/overrides/alerts.ts
// ** MUI Imports
// ** Util Import

const Alert = (theme)=>{
    return {
        MuiAlert: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    fontSize: "1rem",
                    lineHeight: 1.375,
                    alignItems: "flex-start",
                    padding: theme.spacing(1.25, 3.5),
                    "& .MuiAlertTitle-root": {
                        marginBottom: theme.spacing(2.5)
                    },
                    "& a": {
                        fontWeight: 700,
                        color: "inherit"
                    }
                },
                icon: {
                    opacity: 1,
                    fontSize: "1.125rem",
                    padding: theme.spacing(1),
                    borderRadius: theme.shape.borderRadius,
                    margin: theme.spacing(1.75, 2.5, 1.75, 0),
                    backgroundColor: theme.palette.common.white,
                    "& + .MuiAlert-message": {
                        padding: theme.spacing(2.25, 0)
                    },
                    "& ~ .MuiAlert-action": {
                        paddingTop: theme.spacing(1.25)
                    }
                },
                message: {
                    padding: theme.spacing(1.75, 0)
                },
                action: {
                    paddingTop: theme.spacing(0.75)
                },
                standardSuccess: {
                    color: theme.palette.success.main,
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.16),
                    "& .MuiAlertTitle-root": {
                        color: theme.palette.success.main
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.success.main
                    }
                },
                standardInfo: {
                    color: theme.palette.info.main,
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.16),
                    "& .MuiAlertTitle-root": {
                        color: theme.palette.info.main
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.info.main
                    }
                },
                standardWarning: {
                    color: theme.palette.warning.main,
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.16),
                    "& .MuiAlertTitle-root": {
                        color: theme.palette.warning.main
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.warning.main
                    }
                },
                standardError: {
                    color: theme.palette.error.main,
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.16),
                    "& .MuiAlertTitle-root": {
                        color: theme.palette.error.main
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.error.main
                    }
                },
                outlined: {
                    padding: theme.spacing(1, 3.25)
                },
                outlinedSuccess: {
                    borderColor: theme.palette.success.main,
                    color: theme.palette.success.main,
                    "& .MuiAlertTitle-root": {
                        color: theme.palette.success.main
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.common.white,
                        backgroundColor: theme.palette.success.main
                    }
                },
                outlinedInfo: {
                    borderColor: theme.palette.info.main,
                    color: theme.palette.info.main,
                    "& .MuiAlertTitle-root": {
                        color: theme.palette.info.main
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.common.white,
                        backgroundColor: theme.palette.info.main
                    }
                },
                outlinedWarning: {
                    borderColor: theme.palette.warning.main,
                    color: theme.palette.warning.main,
                    "& .MuiAlertTitle-root": {
                        color: theme.palette.warning.main
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.common.white,
                        backgroundColor: theme.palette.warning.main
                    }
                },
                outlinedError: {
                    borderColor: theme.palette.error.main,
                    color: theme.palette.error.main,
                    "& .MuiAlertTitle-root": {
                        color: theme.palette.error.main
                    },
                    "& .MuiAlert-icon": {
                        color: theme.palette.common.white,
                        backgroundColor: theme.palette.error.main
                    }
                },
                filled: {
                    color: theme.palette.common.white
                },
                filledSuccess: {
                    "& .MuiAlert-icon": {
                        color: theme.palette.success.main
                    }
                },
                filledInfo: {
                    "& .MuiAlert-icon": {
                        color: theme.palette.info.main
                    }
                },
                filledWarning: {
                    "& .MuiAlert-icon": {
                        color: theme.palette.warning.main
                    }
                },
                filledError: {
                    "& .MuiAlert-icon": {
                        color: theme.palette.error.main
                    }
                }
            }
        },
        MuiAlertTitle: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    marginTop: "-1px",
                    lineHeight: 1.33333,
                    fontSize: "1.125rem"
                }
            }
        }
    };
};
/* harmony default export */ const overrides_alerts = (Alert);

;// CONCATENATED MODULE: ./app/core/theme/overrides/button.ts
// ** MUI Imports
// ** Theme Config Imports

const Button = (theme)=>{
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    lineHeight: 1.7143,
                    letterSpacing: "0.43px",
                    padding: `${theme.spacing(1.75, 5)}`
                },
                contained: {
                    boxShadow: theme.shadows[2],
                    padding: `${theme.spacing(1.75, 5)}`
                },
                outlined: {
                    padding: `${theme.spacing(1.5, 4.75)}`
                },
                sizeSmall: {
                    lineHeight: 1.53846,
                    borderRadius: "4px",
                    padding: `${theme.spacing(1, 3.5)}`,
                    "&.MuiButton-contained": {
                        padding: `${theme.spacing(1, 3.5)}`
                    },
                    "&.MuiButton-outlined": {
                        padding: `${theme.spacing(0.75, 3.25)}`
                    }
                },
                sizeLarge: {
                    lineHeight: 2,
                    borderRadius: "8px",
                    padding: `${theme.spacing(2.25, 6.5)}`,
                    "&.MuiButton-contained": {
                        padding: `${theme.spacing(2.25, 6.5)}`
                    },
                    "&.MuiButton-outlined": {
                        padding: `${theme.spacing(2, 6.25)}`
                    }
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: themeConfig["default"].disableRipple
            }
        }
    };
};
/* harmony default export */ const overrides_button = (Button);

;// CONCATENATED MODULE: ./app/core/theme/overrides/dialog.ts
// ** MUI Imports
const Dialog = (theme, skin)=>{
    return {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.shadows[skin === "bordered" ? 0 : 9],
                    ...skin === "bordered" && {
                        border: `1px solid ${theme.palette.divider}`
                    },
                    "&:not(.MuiDialog-paperFullScreen)": {
                        [theme.breakpoints.down("sm")]: {
                            margin: theme.spacing(4),
                            width: `calc(100% - ${theme.spacing(8)})`,
                            maxWidth: `calc(100% - ${theme.spacing(8)}) !important`
                        }
                    },
                    "& > .MuiList-root": {
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(1)
                    }
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5, 6, 1)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: `${theme.spacing(5, 6)} !important`
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1, 6, 5),
                    "&.dialog-actions-dense": {
                        padding: theme.spacing(1, 2.5, 2.5)
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dialog = (Dialog);

;// CONCATENATED MODULE: ./app/core/theme/overrides/rating.ts
// ** MUI Imports
const Rating = (theme)=>{
    return {
        MuiRating: {
            styleOverrides: {
                root: {
                    color: theme.palette.warning.main,
                    "& svg": {
                        flexShrink: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_rating = (Rating);

;// CONCATENATED MODULE: ./app/core/theme/overrides/select.ts
/* harmony default export */ const overrides_select = ({
    MuiSelect: {
        styleOverrides: {
            select: {
                minWidth: "6rem !important",
                "&.MuiTablePagination-select": {
                    minWidth: "1.5rem !important"
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./app/core/theme/overrides/slider.ts
// ** MUI Imports

const Slider = (theme)=>{
    return {
        MuiSlider: {
            styleOverrides: {
                root: {
                    "&:not(.MuiSlider-vertical)": {
                        height: 6
                    },
                    "&.MuiSlider-vertical": {
                        width: 6
                    },
                    "&.MuiSlider-colorPrimary": {
                        "& .MuiSlider-thumb.Mui-active": {
                            boxShadow: `0 0 0 10px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.16)}`
                        },
                        "& .MuiSlider-thumbSizeSmall:hover, &.MuiSlider-sizeSmall .MuiSlider-thumb.Mui-focusVisible": {
                            boxShadow: `0 0 0 6px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.16)}`
                        },
                        "& .MuiSlider-thumbSizeSmall.Mui-active": {
                            boxShadow: `0 0 0 8px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.16)} !important`
                        }
                    },
                    "&.MuiSlider-colorSecondary": {
                        "& .MuiSlider-thumb.Mui-active": {
                            boxShadow: `0 0 0 10px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.16)}`
                        },
                        "& .MuiSlider-thumbSizeSmall:hover, &.MuiSlider-sizeSmall .MuiSlider-thumb.Mui-focusVisible": {
                            boxShadow: `0 0 0 6px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.16)}`
                        },
                        "& .MuiSlider-thumbSizeSmall.Mui-active": {
                            boxShadow: `0 0 0 8px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.16)} !important`
                        }
                    }
                },
                rail: {
                    opacity: 1,
                    backgroundColor: theme.palette.action.selected
                },
                track: {
                    border: 0
                },
                thumb: {
                    width: 14,
                    height: 14,
                    "&:before": {
                        boxShadow: theme.shadows[3],
                        border: `2px solid ${theme.palette.background.paper}`
                    },
                    "&:not(.Mui-active):after": {
                        width: 30,
                        height: 30
                    },
                    "&.Mui-active": {
                        width: 18,
                        height: 18,
                        "&:before": {
                            borderWidth: 3
                        },
                        "&:after": {
                            width: 38,
                            height: 38
                        }
                    }
                },
                sizeSmall: {
                    "&:not(.MuiSlider-vertical)": {
                        height: 4
                    },
                    "&.MuiSlider-vertical": {
                        width: 4
                    }
                },
                thumbSizeSmall: {
                    width: 12,
                    height: 12,
                    "&:before": {
                        boxShadow: theme.shadows[2]
                    },
                    "&:not(.Mui-active):after": {
                        width: 24,
                        height: 24
                    },
                    "&.Mui-active": {
                        width: 14,
                        height: 14,
                        "&:before": {
                            borderWidth: 2
                        },
                        "&:after": {
                            width: 30,
                            height: 30
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_slider = (Slider);

;// CONCATENATED MODULE: ./app/core/theme/overrides/avatars.ts
// ** MUI Imports
const Avatar = (theme)=>{
    return {
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.customColors.avatarBg
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    "&.pull-up": {
                        "& .MuiAvatar-root": {
                            cursor: "pointer",
                            transition: "box-shadow 0.2s ease, transform 0.2s ease",
                            "&:hover": {
                                zIndex: 2,
                                boxShadow: theme.shadows[3],
                                transform: "translateY(-4px)"
                            }
                        }
                    },
                    justifyContent: "flex-end",
                    ".MuiCard-root & .MuiAvatar-root": {
                        borderColor: theme.palette.background.paper
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_avatars = (Avatar);

;// CONCATENATED MODULE: ./app/core/theme/overrides/divider.ts
// ** MUI Imports
const Divider = (theme)=>{
    return {
        MuiDivider: {
            styleOverrides: {
                root: {
                    ".MuiStack-root &:not(.MuiDivider-vertical)": {
                        marginTop: theme.spacing(2),
                        marginBottom: theme.spacing(2)
                    }
                },
                middle: {
                    "&:not(.MuiDivider-vertical)": {
                        marginLeft: theme.spacing(5),
                        marginRight: theme.spacing(5)
                    },
                    "&.MuiDivider-vertical": {
                        marginTop: theme.spacing(2),
                        marginBottom: theme.spacing(2)
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_divider = (Divider);

;// CONCATENATED MODULE: ./app/core/theme/overrides/popover.ts
// ** MUI Imports
const Popover = (theme, skin)=>{
    return {
        MuiPopover: {
            styleOverrides: {
                root: {
                    "& .MuiPopover-paper": {
                        boxShadow: theme.shadows[skin === "bordered" ? 0 : 6],
                        ...skin === "bordered" && {
                            border: `1px solid ${theme.palette.divider}`
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_popover = (Popover);

;// CONCATENATED MODULE: ./app/core/theme/overrides/tooltip.ts
// ** MUI Imports
const Tooltip = (theme)=>{
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.9)`,
                    color: theme.palette.common[theme.palette.mode === "light" ? "white" : "black"]
                },
                arrow: {
                    color: `rgba(${theme.palette.customColors.main}, 0.9)`
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tooltip = (Tooltip);

;// CONCATENATED MODULE: ./app/core/theme/overrides/checkbox.tsx
// ** MUI Imports

const Checkbox = (theme)=>{
    return {
        MuiCheckbox: {
            defaultProps: {
                checkedIcon: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: theme.palette.primary.main,
                            d: "M17.5514 3H6.75137C4.76314 3 3.15137 4.61177 3.15137 6.6V17.4C3.15137 19.3882 4.76314 21 6.75137 21H17.5514C19.5396 21 21.1514 19.3882 21.1514 17.4V6.6C21.1514 4.61177 19.5396 3 17.5514 3Z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeWidth: "0.3",
                            fill: theme.palette.common.white,
                            stroke: theme.palette.common.white,
                            d: "M8.63616 11.5663L8.53426 11.472L8.43235 11.5663L7.54946 12.3837L7.43057 12.4938L7.54946 12.6039L10.4885 15.3248L10.5904 15.4191L10.6923 15.3248L16.7533 9.71358L16.8722 9.60351L16.7533 9.49344L15.8704 8.67606L15.7685 8.58172L15.6666 8.67606L10.5904 13.3756L8.63616 11.5663Z"
                        })
                    ]
                }),
                icon: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    width: "24",
                    height: "24",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    stroke: theme.palette.text.disabled,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.2105 3.5H6.78947C4.69661 3.5 3 5.19661 3 7.28947V17.7105C3 19.8034 4.69661 21.5 6.78947 21.5H17.2105C19.3034 21.5 21 19.8034 21 17.7105V7.28947C21 5.19661 19.3034 3.5 17.2105 3.5Z"
                    })
                }),
                indeterminateIcon: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: theme.palette.primary.main,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.6 3.5H17.4C19.3882 3.5 21 5.11177 21 7.1V17.9C21 19.8882 19.3882 21.5 17.4 21.5H6.6C4.61177 21.5 3 19.8882 3 17.9V7.1C3 5.11177 4.61177 3.5 6.6 3.5ZM16.5 11.8569H7.5V13.1426H16.5V11.8569Z"
                    })
                })
            },
            styleOverrides: {
                root: {
                    "&.Mui-checked": {
                        "& svg": {
                            filter: `drop-shadow(0 2px 3px rgba(${theme.palette.mode === "light" ? theme.palette.customColors.main : "12, 16, 27"}, 0.16))`
                        },
                        "&.Mui-disabled svg": {
                            filter: "none",
                            "& path:first-of-type": {
                                fill: theme.palette.action.disabled
                            },
                            "& path:last-of-type": {
                                fill: theme.palette.background.paper,
                                stroke: theme.palette.background.paper
                            }
                        }
                    },
                    "&.Mui-disabled:not(.Mui-checked) svg": {
                        stroke: theme.palette.action.disabled
                    },
                    "&.Mui-checked.MuiCheckbox-colorSecondary svg path:first-of-type": {
                        fill: theme.palette.secondary.main
                    },
                    "&.Mui-checked.MuiCheckbox-colorSuccess svg path:first-of-type": {
                        fill: theme.palette.success.main
                    },
                    "&.Mui-checked.MuiCheckbox-colorError svg path:first-of-type": {
                        fill: theme.palette.error.main
                    },
                    "&.Mui-checked.MuiCheckbox-colorWarning svg path:first-of-type": {
                        fill: theme.palette.warning.main
                    },
                    "&.Mui-checked.MuiCheckbox-colorInfo svg path:first-of-type": {
                        fill: theme.palette.info.main
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_checkbox = (Checkbox);

;// CONCATENATED MODULE: ./app/core/theme/overrides/backdrop.ts
// ** MUI Imports
// ** Util Import

const Backdrop = (theme)=>{
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === "light" ? `rgba(${theme.palette.customColors.main}, 0.7)` : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.7)
                },
                invisible: {
                    backgroundColor: "transparent"
                }
            }
        }
    };
};
/* harmony default export */ const overrides_backdrop = (Backdrop);

;// CONCATENATED MODULE: ./app/core/theme/overrides/dataGrid.ts
// ** MUI Imports
const DataGrid = (theme)=>{
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: 0,
                    color: theme.palette.text.primary,
                    "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within": {
                        outline: "none"
                    }
                },
                toolbarContainer: {
                    paddingRight: `${theme.spacing(6)} !important`,
                    paddingLeft: `${theme.spacing(3.25)} !important`
                },
                columnHeaders: {
                    backgroundColor: theme.palette.customColors.tableHeaderBg
                },
                columnHeader: {
                    "&:not(.MuiDataGrid-columnHeaderCheckbox)": {
                        paddingLeft: theme.spacing(4),
                        paddingRight: theme.spacing(4),
                        "&:first-of-type": {
                            paddingLeft: theme.spacing(6)
                        }
                    },
                    "&:last-of-type": {
                        paddingRight: theme.spacing(6)
                    }
                },
                columnHeaderCheckbox: {
                    maxWidth: "58px !important",
                    minWidth: "58px !important"
                },
                columnHeaderTitleContainer: {
                    padding: 0
                },
                columnHeaderTitle: {
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    letterSpacing: "1px",
                    textTransform: "uppercase"
                },
                columnSeparator: {
                    color: theme.palette.divider
                },
                row: {
                    "&:last-child": {
                        "& .MuiDataGrid-cell": {
                            borderBottom: 0
                        }
                    }
                },
                cell: {
                    borderColor: theme.palette.divider,
                    "&:not(.MuiDataGrid-cellCheckbox)": {
                        paddingLeft: theme.spacing(4),
                        paddingRight: theme.spacing(4),
                        "&:first-of-type": {
                            paddingLeft: theme.spacing(6)
                        }
                    },
                    "&:last-of-type": {
                        paddingRight: theme.spacing(6)
                    },
                    "&:focus, &:focus-within": {
                        outline: "none"
                    }
                },
                cellCheckbox: {
                    maxWidth: "58px !important",
                    minWidth: "58px !important"
                },
                editInputCell: {
                    padding: 0,
                    color: theme.palette.text.primary,
                    "& .MuiInputBase-input": {
                        padding: 0
                    }
                },
                footerContainer: {
                    borderTop: `1px solid ${theme.palette.divider}`,
                    "& .MuiTablePagination-toolbar": {
                        paddingLeft: `${theme.spacing(4)} !important`,
                        paddingRight: `${theme.spacing(4)} !important`
                    },
                    "& .MuiTablePagination-displayedRows, & .MuiTablePagination-selectLabel": {
                        color: theme.palette.text.primary
                    }
                },
                selectedRowCount: {
                    margin: 0,
                    paddingLeft: theme.spacing(4),
                    paddingRight: theme.spacing(4)
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dataGrid = (DataGrid);

;// CONCATENATED MODULE: ./app/core/theme/overrides/progress.ts
// ** MUI Imports
const Progress = (theme)=>{
    return {
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    height: 12,
                    borderRadius: "10px",
                    backgroundColor: theme.palette.customColors.trackBg
                },
                bar: {
                    borderRadius: "10px"
                }
            }
        }
    };
};
/* harmony default export */ const overrides_progress = (Progress);

;// CONCATENATED MODULE: ./app/core/theme/overrides/snackbar.ts
// ** MUI Imports
const Snackbar = (theme, skin)=>{
    return {
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    ...skin === "bordered" && {
                        boxShadow: "none"
                    },
                    backgroundColor: `rgb(${theme.palette.customColors.main})`,
                    color: theme.palette.common[theme.palette.mode === "light" ? "white" : "black"]
                }
            }
        }
    };
};
/* harmony default export */ const overrides_snackbar = (Snackbar);

;// CONCATENATED MODULE: ./app/core/theme/overrides/switches.ts
// ** MUI Imports
const Switch = (theme)=>{
    return {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: 54,
                    height: 42,
                    "& .MuiSwitch-track": {
                        width: 30,
                        height: 18,
                        opacity: 1,
                        borderRadius: 30,
                        backgroundColor: "transparent",
                        border: `1px solid ${theme.palette.text.disabled}`,
                        transition: "box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out"
                    }
                },
                switchBase: {
                    top: 5,
                    left: 6,
                    padding: `${theme.spacing(2.5)} !important`,
                    color: `rgba(${theme.palette.customColors.main}, 0.6)`,
                    transition: "left 0.15s ease-in-out, transform 0.15s ease-in-out, color 0.15s ease-in-out",
                    "&:hover": {
                        backgroundColor: "transparent !important"
                    },
                    "&.Mui-disabled": {
                        opacity: 0.4,
                        color: theme.palette.text.disabled,
                        "& + .MuiSwitch-track": {
                            opacity: 0.5
                        },
                        "&.Mui-checked": {
                            opacity: theme.palette.mode === "dark" ? 0.5 : 0.9,
                            "& + .MuiSwitch-track": {
                                opacity: 0.3,
                                boxShadow: "none"
                            }
                        }
                    },
                    "&.Mui-checked": {
                        transform: "translateX(11px)",
                        color: `${theme.palette.common.white} !important`,
                        "& + .MuiSwitch-track": {
                            opacity: 1,
                            borderColor: theme.palette.primary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxShadow: `0 2px 3px 0 rgba(${theme.palette.mode === "light" ? theme.palette.customColors.main : "12, 16, 27"}, 0.16)`
                        },
                        "&.MuiSwitch-colorSecondary + .MuiSwitch-track": {
                            borderColor: theme.palette.secondary.main,
                            backgroundColor: theme.palette.secondary.main
                        },
                        "&.MuiSwitch-colorSuccess + .MuiSwitch-track": {
                            borderColor: theme.palette.success.main,
                            backgroundColor: theme.palette.success.main
                        },
                        "&.MuiSwitch-colorError + .MuiSwitch-track": {
                            borderColor: theme.palette.error.main,
                            backgroundColor: theme.palette.error.main
                        },
                        "&.MuiSwitch-colorWarning + .MuiSwitch-track": {
                            borderColor: theme.palette.warning.main,
                            backgroundColor: theme.palette.warning.main
                        },
                        "&.MuiSwitch-colorInfo + .MuiSwitch-track": {
                            borderColor: theme.palette.info.main,
                            backgroundColor: theme.palette.info.main
                        }
                    }
                },
                thumb: {
                    width: 12,
                    height: 12,
                    boxShadow: "none"
                },
                sizeSmall: {
                    width: 38,
                    height: 30,
                    "& .MuiSwitch-track": {
                        width: 24,
                        height: 16
                    },
                    "& .MuiSwitch-thumb": {
                        width: 10,
                        height: 10
                    },
                    "& .MuiSwitch-switchBase": {
                        top: 4,
                        left: 5,
                        padding: `${theme.spacing(1.5)} !important`,
                        "&.Mui-checked": {
                            transform: "translateX(7px)"
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_switches = (Switch);

;// CONCATENATED MODULE: ./app/core/theme/overrides/timeline.ts
// ** MUI Imports
// ** Util Import

const Timeline = (theme)=>{
    return {
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    "&:not(:last-of-type)": {
                        "& .MuiTimelineContent-root": {
                            marginBottom: theme.spacing(4)
                        }
                    }
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        },
        MuiTimelineContent: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(0.5)
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                filledPrimary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.16)}`
                },
                filledSecondary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.16)}`
                },
                filledSuccess: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.16)}`
                },
                filledError: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.16)}`
                },
                filledWarning: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.16)}`
                },
                filledInfo: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.16)}`
                },
                filledGrey: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[400], 0.16)}`
                },
                outlinedPrimary: {
                    "& svg": {
                        color: theme.palette.primary.main
                    }
                },
                outlinedSecondary: {
                    "& svg": {
                        color: theme.palette.secondary.main
                    }
                },
                outlinedSuccess: {
                    "& svg": {
                        color: theme.palette.success.main
                    }
                },
                outlinedError: {
                    "& svg": {
                        color: theme.palette.error.main
                    }
                },
                outlinedWarning: {
                    "& svg": {
                        color: theme.palette.warning.main
                    }
                },
                outlinedInfo: {
                    "& svg": {
                        color: theme.palette.info.main
                    }
                },
                outlinedGrey: {
                    "& svg": {
                        color: theme.palette.grey[400]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_timeline = (Timeline);

// EXTERNAL MODULE: ./app/core/hooks/useSettings.ts
var useSettings = __webpack_require__(74260);
;// CONCATENATED MODULE: ./app/core/theme/overrides/accordion.ts
// ** MUI Imports
// ** Hook Import

const Accordion = (theme)=>{
    // Hook & Var
    const { settings } = (0,useSettings/* useSettings */.r)();
    const { skin } = settings;
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    margin: theme.spacing(2, 0),
                    "&:before": {
                        display: "none"
                    },
                    borderRadius: theme.shape.borderRadius,
                    transition: "box-shadow .35s ease, margin .35s ease",
                    boxShadow: theme.shadows[skin === "bordered" ? 0 : 1],
                    ...skin === "bordered" && {
                        border: `1px solid ${theme.palette.divider}`
                    },
                    "&.Mui-disabled": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    },
                    "&.Mui-expanded": {
                        margin: theme.spacing(2, 0),
                        boxShadow: theme.shadows[skin === "bordered" ? 0 : 6]
                    },
                    "& .MuiCollapse-root": {
                        minHeight: "unset !important",
                        transition: "height .35s ease !important",
                        "&.MuiCollapse-entered": {
                            height: "auto !important"
                        }
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: "inherit",
                    padding: `0 ${theme.spacing(4.5)}`,
                    "& + .MuiCollapse-root": {
                        "& .MuiAccordionDetails-root:first-child": {
                            paddingTop: 0
                        }
                    },
                    "&.Mui-expanded": {
                        minHeight: "unset",
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        "& .MuiAccordionSummary-content": {
                            margin: theme.spacing(3, 0)
                        }
                    },
                    "& .MuiTypography-root": {
                        fontWeight: 500
                    }
                },
                content: {
                    margin: theme.spacing(3, 0)
                },
                expandIconWrapper: {
                    color: theme.palette.text.primary
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(4.5),
                    "& + .MuiAccordionDetails-root": {
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_accordion = (Accordion);

;// CONCATENATED MODULE: ./app/core/theme/overrides/pagination.ts
// ** MUI Imports
// ** Util Import

const Pagination = (theme)=>{
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    "&:not(.MuiPaginationItem-outlined):not(.Mui-disabled)": {
                        transition: theme.transitions.create([
                            "color",
                            "background-color",
                            "box-shadow"
                        ], {
                            duration: 250,
                            easing: "cubic-bezier(0.4, 0, 0.2, 1)"
                        }),
                        "&.Mui-selected": {
                            boxShadow: theme.shadows[2]
                        }
                    }
                },
                outlined: {
                    borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                },
                outlinedPrimary: {
                    "&.Mui-selected": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.16)
                    }
                },
                outlinedSecondary: {
                    "&.Mui-selected": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.16)
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_pagination = (Pagination);

;// CONCATENATED MODULE: ./app/core/theme/overrides/typography.ts
// ** MUI Imports
const Typography = (theme)=>{
    return {
        MuiTypography: {
            styleOverrides: {
                gutterBottom: {
                    marginBottom: theme.spacing(2)
                }
            }
        }
    };
};
/* harmony default export */ const typography = (Typography);

;// CONCATENATED MODULE: ./app/core/theme/overrides/breadcrumbs.ts
// ** MUI Imports
const Breadcrumbs = (theme)=>{
    return {
        MuiBreadcrumbs: {
            styleOverrides: {
                root: {
                    "& a": {
                        textDecoration: "none",
                        color: theme.palette.primary.main
                    }
                },
                li: {
                    color: theme.palette.text.secondary,
                    "& .MuiTypography-root": {
                        color: "inherit"
                    }
                }
            }
        }
    };
};
/* harmony default export */ const breadcrumbs = (Breadcrumbs);

;// CONCATENATED MODULE: ./app/core/theme/overrides/autocomplete.ts
// ** MUI Imports
const Autocomplete = (theme, skin)=>{
    return {
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    ...skin === "bordered" && {
                        boxShadow: "none",
                        border: `1px solid ${theme.palette.divider}`
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_autocomplete = (Autocomplete);

;// CONCATENATED MODULE: ./app/core/theme/overrides/toggleButton.ts
/* harmony default export */ const toggleButton = ({
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    },
    MuiToggleButton: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    }
});

;// CONCATENATED MODULE: ./app/core/theme/overrides/index.ts
// ** MUI Imports
// ** Overrides Imports

































const Overrides = (theme, settings)=>{
    const { skin } = settings;
    const button = overrides_button(theme);
    const chip = overrides_chip(theme);
    const list = overrides_list(theme);
    const tabs = overrides_tabs(theme);
    const radio = overrides_radio(theme);
    const input = overrides_input(theme);
    const tables = table(theme);
    const alerts = overrides_alerts(theme);
    const rating = overrides_rating(theme);
    const slider = overrides_slider(theme);
    const avatars = overrides_avatars(theme);
    const divider = overrides_divider(theme);
    const menu = overrides_menu(theme, skin);
    const tooltip = overrides_tooltip(theme);
    const cards = card(theme, skin);
    const checkbox = overrides_checkbox(theme);
    const backdrop = overrides_backdrop(theme);
    const dataGrid = overrides_dataGrid(theme);
    const progress = overrides_progress(theme);
    const switches = overrides_switches(theme);
    const timeline = overrides_timeline(theme);
    const accordion = overrides_accordion(theme);
    const dialog = overrides_dialog(theme, skin);
    const pagination = overrides_pagination(theme);
    const popover = overrides_popover(theme, skin);
    const breadcrumb = breadcrumbs(theme);
    const snackbar = overrides_snackbar(theme, skin);
    const autocomplete = overrides_autocomplete(theme, skin);
    return Object.assign(chip, list, menu, tabs, cards, radio, input, alerts, button, dialog, rating, slider, tables, avatars, divider, overrides_link, popover, tooltip, checkbox, backdrop, dataGrid, paper, progress, snackbar, switches, timeline, accordion, overrides_select, breadcrumb, pagination, autocomplete, typography, toggleButton);
};
/* harmony default export */ const overrides = (Overrides);

;// CONCATENATED MODULE: ./app/core/theme/typography/index.ts
// ** Theme Type Import
const typography_Typography = (theme)=>{
    return {
        h1: {
            fontWeight: 500,
            color: theme.palette.text.primary
        },
        h2: {
            fontWeight: 500,
            color: theme.palette.text.primary
        },
        h3: {
            fontWeight: 500,
            color: theme.palette.text.primary
        },
        h4: {
            fontWeight: 500,
            color: theme.palette.text.primary
        },
        h5: {
            fontWeight: 500,
            color: theme.palette.text.primary
        },
        h6: {
            color: theme.palette.text.primary
        },
        subtitle1: {
            color: theme.palette.text.primary
        },
        subtitle2: {
            color: theme.palette.text.secondary
        },
        body1: {
            color: theme.palette.text.primary
        },
        body2: {
            color: theme.palette.text.secondary
        },
        button: {
            color: theme.palette.text.primary
        },
        caption: {
            color: theme.palette.text.secondary
        },
        overline: {
            color: theme.palette.text.secondary
        }
    };
};
/* harmony default export */ const theme_typography = (typography_Typography);

;// CONCATENATED MODULE: ./app/layouts/UserThemeOptions.ts
// ** MUI Imports
// ** To use core palette, uncomment the below import
// import { PaletteMode } from '@mui/material'
// ** To use core palette, uncomment the below import
// import corePalette from 'src/@core/theme/palette'
// ** To use mode (light/dark/semi-dark), skin(default/bordered), direction(ltr/rtl), etc. for conditional styles, uncomment below line
// import { useSettings } from 'src/@core/hooks/useSettings'
const UserThemeOptions = ()=>{
    // ** To use mode (light/dark/semi-dark), skin(default/bordered), direction(ltr/rtl), etc. for conditional styles, uncomment below line
    // const { settings } = useSettings()
    // ** To use mode (light/dark/semi-dark), skin(default/bordered), direction(ltr/rtl), etc. for conditional styles, uncomment below line
    // const { mode, skin } = settings
    // ** To use core palette, uncomment the below line
    // const palette = corePalette(mode as PaletteMode, skin)
    return {
    };
};
/* harmony default export */ const layouts_UserThemeOptions = (UserThemeOptions);

;// CONCATENATED MODULE: ./app/core/theme/palette/index.ts
// ** Type Imports
const DefaultPalette = (mode, skin)=>{
    // ** Vars
    const whiteColor = "#FFF";
    const lightColor = "51, 48, 60";
    const darkColor = "228, 230, 244";
    const darkPaperBgColor = "#2F3349";
    const mainColor = mode === "light" ? lightColor : darkColor;
    const defaultBgColor = ()=>{
        if (skin === "bordered" && mode === "light") {
            return whiteColor;
        } else if (skin === "bordered" && mode === "dark") {
            return darkPaperBgColor;
        } else if (mode === "light") {
            return "#F8F7FA";
        } else return "#25293C";
    };
    return {
        customColors: {
            dark: darkColor,
            main: mainColor,
            light: lightColor,
            lightPaperBg: whiteColor,
            darkPaperBg: darkPaperBgColor,
            bodyBg: mode === "light" ? "#F8F7FA" : "#25293C",
            trackBg: mode === "light" ? "#F1F0F2" : "#3B405B",
            avatarBg: mode === "light" ? "#F6F6F7" : "#4A5072",
            tableHeaderBg: mode === "light" ? "#F6F6F7" : "#4A5072"
        },
        mode: mode,
        common: {
            black: "#000",
            white: whiteColor
        },
        primary: {
            light: "#8479F2",
            main: "#7367F0",
            dark: "#655BD3",
            contrastText: whiteColor
        },
        secondary: {
            light: "#B2B4B8",
            main: "#A8AAAE",
            dark: "#949699",
            contrastText: whiteColor
        },
        error: {
            light: "#ED6F70",
            main: "#EA5455",
            dark: "#CE4A4B",
            contrastText: whiteColor
        },
        warning: {
            light: "#FFAB5A",
            main: "#FF9F43",
            dark: "#E08C3B",
            contrastText: whiteColor
        },
        info: {
            light: "#1FD5EB",
            main: "#00CFE8",
            dark: "#00B6CC",
            contrastText: whiteColor
        },
        success: {
            light: "#42CE80",
            main: "#28C76F",
            dark: "#23AF62",
            contrastText: whiteColor
        },
        grey: {
            50: "#FAFAFA",
            100: "#F5F5F5",
            200: "#EEEEEE",
            300: "#E0E0E0",
            400: "#BDBDBD",
            500: "#9E9E9E",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            A100: "#F5F5F5",
            A200: "#EEEEEE",
            A400: "#BDBDBD",
            A700: "#616161"
        },
        text: {
            primary: `rgba(${mainColor}, 0.87)`,
            secondary: `rgba(${mainColor}, 0.6)`,
            disabled: `rgba(${mainColor}, 0.38)`
        },
        divider: `rgba(${mainColor}, 0.12)`,
        background: {
            paper: mode === "light" ? whiteColor : darkPaperBgColor,
            default: defaultBgColor()
        },
        action: {
            active: `rgba(${mainColor}, 0.54)`,
            hover: `rgba(${mainColor}, 0.04)`,
            selected: `rgba(${mainColor}, 0.08)`,
            disabled: `rgba(${mainColor}, 0.26)`,
            disabledBackground: `rgba(${mainColor}, 0.12)`,
            focus: `rgba(${mainColor}, 0.12)`
        }
    };
};
/* harmony default export */ const palette = (DefaultPalette);

;// CONCATENATED MODULE: ./app/core/theme/spacing/index.ts
/* harmony default export */ const spacing = ({
    spacing: (factor)=>`${0.25 * factor}rem`
});

;// CONCATENATED MODULE: ./app/core/theme/shadows/index.ts
// ** Type Imports
const Shadows = (mode)=>{
    if (mode === "light") {
        return [
            "none",
            "0px 2px 4px 1px rgba(51, 48, 60, 0.03), 0px 3px 4px 0px rgba(51, 48, 60, 0.02), 0px 1px 3px 2px rgba(51, 48, 60, 0.01)",
            "0px 3px 5px 2px rgba(51, 48, 60, 0.03), 0px 3px 5px 0px rgba(51, 48, 60, 0.02), 0px 1px 4px 2px rgba(51, 48, 60, 0.01)",
            "0px 3px 6px 2px rgba(51, 48, 60, 0.03), 0px 4px 6px 0px rgba(51, 48, 60, 0.02), 0px 1px 4px 2px rgba(51, 48, 60, 0.01)",
            "0px 2px 7px 1px rgba(51, 48, 60, 0.03), 0px 4px 7px 0px rgba(51, 48, 60, 0.02), 0px 1px 4px 2px rgba(51, 48, 60, 0.01)",
            "0px 3px 8px 1px rgba(51, 48, 60, 0.03), 0px 6px 8px 0px rgba(51, 48, 60, 0.02), 0px 1px 5px 4px rgba(51, 48, 60, 0.01)",
            "0px 3px 9px 1px rgba(51, 48, 60, 0.03), 0px 8px 9px 0px rgba(51, 48, 60, 0.02), 0px 1px 6px 4px rgba(51, 48, 60, 0.01)",
            "0px 4px 10px 2px rgba(51, 48, 60, 0.03), 0px 9px 10px 1px rgba(51, 48, 60, 0.02), 0px 2px 7px 4px rgba(51, 48, 60, 0.01)",
            "0px 5px 11px 3px rgba(51, 48, 60, 0.03), 0px 8px 11px 1px rgba(51, 48, 60, 0.02), 0px 3px 8px 4px rgba(51, 48, 60, 0.01)",
            "0px 5px 12px 3px rgba(51, 48, 60, 0.03), 0px 9px 12px 1px rgba(51, 48, 60, 0.02), 0px 3px 9px 5px rgba(51, 48, 60, 0.01)",
            "0px 6px 13px 3px rgba(51, 48, 60, 0.03), 0px 10px 13px 1px rgba(51, 48, 60, 0.02), 0px 4px 10px 5px rgba(51, 48, 60, 0.01)",
            "0px 6px 14px 4px rgba(51, 48, 60, 0.03), 0px 11px 14px 1px rgba(51, 48, 60, 0.02), 0px 4px 11px 5px rgba(51, 48, 60, 0.01)",
            "0px 7px 15px 4px rgba(51, 48, 60, 0.03), 0px 12px 15px 2px rgba(51, 48, 60, 0.02), 0px 5px 12px 5px rgba(51, 48, 60, 0.01)",
            "0px 7px 16px 4px rgba(51, 48, 60, 0.03), 0px 13px 16px 2px rgba(51, 48, 60, 0.02), 0px 5px 13px 6px rgba(51, 48, 60, 0.01)",
            "0px 7px 17px 4px rgba(51, 48, 60, 0.03), 0px 14px 17px 2px rgba(51, 48, 60, 0.02), 0px 5px 14px 6px rgba(51, 48, 60, 0.01)",
            "0px 8px 18px 5px rgba(51, 48, 60, 0.03), 0px 15px 18px 2px rgba(51, 48, 60, 0.02), 0px 6px 15px 6px rgba(51, 48, 60, 0.01)",
            "0px 8px 19px 5px rgba(51, 48, 60, 0.03), 0px 16px 19px 2px rgba(51, 48, 60, 0.02), 0px 6px 16px 6px rgba(51, 48, 60, 0.01)",
            "0px 8px 20px 5px rgba(51, 48, 60, 0.03), 0px 17px 20px 2px rgba(51, 48, 60, 0.02), 0px 6px 17px 7px rgba(51, 48, 60, 0.01)",
            "0px 9px 21px 5px rgba(51, 48, 60, 0.03), 0px 18px 21px 2px rgba(51, 48, 60, 0.02), 0px 7px 18px 7px rgba(51, 48, 60, 0.01)",
            "0px 9px 22px 6px rgba(51, 48, 60, 0.03), 0px 19px 22px 2px rgba(51, 48, 60, 0.02), 0px 7px 19px 7px rgba(51, 48, 60, 0.01)",
            "0px 10px 23px 6px rgba(51, 48, 60, 0.03), 0px 20px 23px 3px rgba(51, 48, 60, 0.02), 0px 8px 20px 7px rgba(51, 48, 60, 0.01)",
            "0px 10px 24px 6px rgba(51, 48, 60, 0.03), 0px 21px 24px 3px rgba(51, 48, 60, 0.02), 0px 8px 21px 7px rgba(51, 48, 60, 0.01)",
            "0px 10px 25px 6px rgba(51, 48, 60, 0.03), 0px 22px 25px 3px rgba(51, 48, 60, 0.02), 0px 8px 22px 7px rgba(51, 48, 60, 0.01)",
            "0px 11px 26px 7px rgba(51, 48, 60, 0.03), 0px 23px 26px 3px rgba(51, 48, 60, 0.02), 0px 9px 23px 7px rgba(51, 48, 60, 0.01)",
            "0px 11px 27px 7px rgba(51, 48, 60, 0.03), 0px 24px 27px 3px rgba(51, 48, 60, 0.02), 0px 9px 24px 7px rgba(51, 48, 60, 0.01)"
        ];
    } else {
        return [
            "none",
            "0px 2px 4px 1px rgba(12, 16, 27, 0.15), 0px 3px 4px 0px rgba(12, 16, 27, 0.1), 0px 1px 3px 2px rgba(12, 16, 27, 0.08)",
            "0px 3px 5px 2px rgba(12, 16, 27, 0.15), 0px 3px 5px 0px rgba(12, 16, 27, 0.1), 0px 1px 4px 2px rgba(12, 16, 27, 0.08)",
            "0px 3px 6px 2px rgba(12, 16, 27, 0.15), 0px 4px 6px 0px rgba(12, 16, 27, 0.1), 0px 1px 4px 2px rgba(12, 16, 27, 0.08)",
            "0px 2px 7px 1px rgba(12, 16, 27, 0.15), 0px 4px 7px 0px rgba(12, 16, 27, 0.1), 0px 1px 4px 2px rgba(12, 16, 27, 0.08)",
            "0px 3px 8px 1px rgba(12, 16, 27, 0.15), 0px 6px 8px 0px rgba(12, 16, 27, 0.1), 0px 1px 5px 4px rgba(12, 16, 27, 0.08)",
            "0px 3px 9px 1px rgba(12, 16, 27, 0.15), 0px 8px 9px 0px rgba(12, 16, 27, 0.1), 0px 1px 6px 4px rgba(12, 16, 27, 0.08)",
            "0px 4px 10px 2px rgba(12, 16, 27, 0.15), 0px 9px 10px 1px rgba(12, 16, 27, 0.1), 0px 2px 7px 4px rgba(12, 16, 27, 0.08)",
            "0px 5px 11px 3px rgba(12, 16, 27, 0.15), 0px 8px 11px 1px rgba(12, 16, 27, 0.1), 0px 3px 8px 4px rgba(12, 16, 27, 0.08)",
            "0px 5px 12px 3px rgba(12, 16, 27, 0.15), 0px 9px 12px 1px rgba(12, 16, 27, 0.1), 0px 3px 9px 5px rgba(12, 16, 27, 0.08)",
            "0px 6px 13px 3px rgba(12, 16, 27, 0.15), 0px 10px 13px 1px rgba(12, 16, 27, 0.1), 0px 4px 10px 5px rgba(12, 16, 27, 0.08)",
            "0px 6px 14px 4px rgba(12, 16, 27, 0.15), 0px 11px 14px 1px rgba(12, 16, 27, 0.1), 0px 4px 11px 5px rgba(12, 16, 27, 0.08)",
            "0px 7px 15px 4px rgba(12, 16, 27, 0.15), 0px 12px 15px 2px rgba(12, 16, 27, 0.1), 0px 5px 12px 5px rgba(12, 16, 27, 0.08)",
            "0px 7px 16px 4px rgba(12, 16, 27, 0.15), 0px 13px 16px 2px rgba(12, 16, 27, 0.1), 0px 5px 13px 6px rgba(12, 16, 27, 0.08)",
            "0px 7px 17px 4px rgba(12, 16, 27, 0.15), 0px 14px 17px 2px rgba(12, 16, 27, 0.1), 0px 5px 14px 6px rgba(12, 16, 27, 0.08)",
            "0px 8px 18px 5px rgba(12, 16, 27, 0.15), 0px 15px 18px 2px rgba(12, 16, 27, 0.1), 0px 6px 15px 6px rgba(12, 16, 27, 0.08)",
            "0px 8px 19px 5px rgba(12, 16, 27, 0.15), 0px 16px 19px 2px rgba(12, 16, 27, 0.1), 0px 6px 16px 6px rgba(12, 16, 27, 0.08)",
            "0px 8px 20px 5px rgba(12, 16, 27, 0.15), 0px 17px 20px 2px rgba(12, 16, 27, 0.1), 0px 6px 17px 7px rgba(12, 16, 27, 0.08)",
            "0px 9px 21px 5px rgba(12, 16, 27, 0.15), 0px 18px 21px 2px rgba(12, 16, 27, 0.1), 0px 7px 18px 7px rgba(12, 16, 27, 0.08)",
            "0px 9px 22px 6px rgba(12, 16, 27, 0.15), 0px 19px 22px 2px rgba(12, 16, 27, 0.1), 0px 7px 19px 7px rgba(12, 16, 27, 0.08)",
            "0px 10px 23px 6px rgba(12, 16, 27, 0.15), 0px 20px 23px 3px rgba(12, 16, 27, 0.1), 0px 8px 20px 7px rgba(12, 16, 27, 0.08)",
            "0px 10px 24px 6px rgba(12, 16, 27, 0.15), 0px 21px 24px 3px rgba(12, 16, 27, 0.1), 0px 8px 21px 7px rgba(12, 16, 27, 0.08)",
            "0px 10px 25px 6px rgba(12, 16, 27, 0.15), 0px 22px 25px 3px rgba(12, 16, 27, 0.1), 0px 8px 22px 7px rgba(12, 16, 27, 0.08)",
            "0px 11px 26px 7px rgba(12, 16, 27, 0.15), 0px 23px 26px 3px rgba(12, 16, 27, 0.1), 0px 9px 23px 7px rgba(12, 16, 27, 0.08)",
            "0px 11px 27px 7px rgba(12, 16, 27, 0.15), 0px 24px 27px 3px rgba(12, 16, 27, 0.1), 0px 9px 24px 7px rgba(12, 16, 27, 0.08)"
        ];
    }
};
/* harmony default export */ const shadows = (Shadows);

;// CONCATENATED MODULE: ./app/core/theme/breakpoints/index.ts
const breakpoints = ()=>({
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    });
/* harmony default export */ const theme_breakpoints = (breakpoints);

;// CONCATENATED MODULE: ./app/core/theme/ThemeOptions.ts
// ** MUI Theme Provider

// ** User Theme Options

// ** Theme Override Imports




const themeOptions = (settings)=>{
    // ** Vars
    const { skin, mode, direction, themeColor } = settings;
    // ** Create New object before removing user component overrides and typography objects from userThemeOptions
    const userThemeConfig = Object.assign({}, layouts_UserThemeOptions());
    const userFontFamily = userThemeConfig.typography?.fontFamily;
    // ** Remove component overrides and typography objects from userThemeOptions
    delete userThemeConfig.components;
    delete userThemeConfig.typography;
    const mergedThemeConfig = (0,utils.deepmerge)({
        direction,
        palette: palette(mode === "semi-dark" ? "light" : mode, skin),
        typography: {
            fontFamily: userFontFamily || [
                "Public Sans",
                "sans-serif",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(",")
        },
        shadows: shadows(mode === "semi-dark" ? "light" : mode),
        ...spacing,
        breakpoints: theme_breakpoints(),
        shape: {
            borderRadius: 6
        },
        mixins: {
            toolbar: {
                minHeight: 64
            }
        }
    }, userThemeConfig);
    return (0,utils.deepmerge)(mergedThemeConfig, {
        palette: {
            primary: {
                ...mergedThemeConfig.palette[themeColor]
            }
        }
    });
};
/* harmony default export */ const ThemeOptions = (themeOptions);

;// CONCATENATED MODULE: ./app/core/theme/globalStyles.ts
// ** MUI Imports
const globalStyles_GlobalStyles = (theme)=>{
    return {
        ".demo-space-x > *": {
            marginTop: "1rem !important",
            marginRight: "1rem !important",
            'body[dir="rtl"] &': {
                marginRight: "0 !important",
                marginLeft: "1rem !important"
            }
        },
        ".demo-space-y > *:not(:last-of-type)": {
            marginBottom: "1rem"
        },
        ".MuiGrid-container.match-height .MuiCard-root": {
            height: "100%"
        },
        ".ps__rail-y": {
            zIndex: 1,
            right: "0 !important",
            left: "auto !important",
            "&:hover, &:focus, &.ps--clicking": {
                backgroundColor: theme.palette.mode === "light" ? "#F1F0F5 !important" : "#393D55 !important"
            },
            "& .ps__thumb-y": {
                right: "3px !important",
                left: "auto !important",
                backgroundColor: theme.palette.mode === "light" ? "rgba(93, 89, 108, 0.2) !important" : "rgba(207, 211, 236, 0.3) !important"
            },
            ".layout-vertical-nav &": {
                "& .ps__thumb-y": {
                    width: 4
                },
                "&:hover, &:focus, &.ps--clicking": {
                    backgroundColor: "transparent !important",
                    "& .ps__thumb-y": {
                        width: 6
                    }
                }
            }
        },
        "#nprogress": {
            pointerEvents: "none",
            "& .bar": {
                left: 0,
                top: 0,
                height: 3,
                width: "100%",
                zIndex: 2000,
                position: "fixed",
                backgroundColor: theme.palette.primary.main
            }
        }
    };
};
/* harmony default export */ const globalStyles = (globalStyles_GlobalStyles);

;// CONCATENATED MODULE: ./app/core/theme/ThemeComponent.tsx
// ** React Imports

// ** MUI Imports




// ** Theme Config

// ** Direction component for LTR or RTL

// ** Theme Override Imports


// ** Theme


// ** Global Styles

const ThemeComponent = (props)=>{
    // ** Props
    const { settings, children } = props;
    // ** Merged ThemeOptions of Core and User
    const coreThemeConfig = ThemeOptions(settings);
    // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
    let theme = (0,node_styles.createTheme)(coreThemeConfig);
    // ** Deep Merge Component overrides of core and user
    const mergeComponentOverrides = (theme, settings)=>(0,utils.deepmerge)({
            ...overrides(theme, settings)
        }, layouts_UserThemeOptions()?.components);
    // ** Deep Merge Typography of core and user
    const mergeTypography = (theme)=>(0,utils.deepmerge)(theme_typography(theme), layouts_UserThemeOptions()?.typography);
    // ** Continue theme creation and pass merged component overrides to CreateTheme function
    theme = (0,node_styles.createTheme)(theme, {
        components: {
            ...mergeComponentOverrides(theme, settings)
        },
        typography: {
            ...mergeTypography(theme)
        }
    });
    // ** Set responsive font sizes to true
    if (themeConfig["default"].responsiveFontSizes) {
        theme = (0,node_styles.responsiveFontSizes)(theme);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(node_styles.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Direction, {
            direction: settings.direction,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CssBaseline/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles["default"], {
                    styles: ()=>globalStyles(theme)
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const theme_ThemeComponent = (ThemeComponent);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./app/core/components/window-wrapper/index.tsx
// ** React Imports


// ** Next Import

const WindowWrapper = ({ children })=>{
    // ** State
    const [windowReadyFlag, setWindowReadyFlag] = (0,react_.useState)(false);
    const router = (0,navigation.useRouter)();
    (0,react_.useEffect)(()=>{
        if (false) {}
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        router
    ]);
    if (windowReadyFlag) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        });
    } else {
        return null;
    }
};
/* harmony default export */ const window_wrapper = (WindowWrapper);

// EXTERNAL MODULE: ./node_modules/@casl/react/dist/es6m/index.mjs
var es6m = __webpack_require__(97695);
;// CONCATENATED MODULE: ./app/layouts/components/acl/Can.tsx


const AbilityContext = /*#__PURE__*/ (0,react_.createContext)(undefined);
/* harmony default export */ const Can = ((0,es6m/* createContextualCan */.M4)(AbilityContext.Consumer));

// EXTERNAL MODULE: ./node_modules/@casl/ability/dist/es6m/index.mjs + 4 modules
var dist_es6m = __webpack_require__(88125);
;// CONCATENATED MODULE: ./app/configs/acl.ts

const AppAbility = dist_es6m/* Ability */.$U;
/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */ const defineRulesFor = (role = "admin", subject)=>{
    const { can, rules } = new dist_es6m/* AbilityBuilder */.z4(AppAbility);
    if (role === "admin") {
        can("manage", "all");
    } else if (role === "client") {
        can([
            "read"
        ], "acl-page");
    } else {
        can([
            "read",
            "create",
            "update",
            "delete"
        ], subject);
    }
    return rules;
};
const buildAbilityFor = (role, subject)=>{
    return new AppAbility(defineRulesFor(role, subject), {
        // https://casl.js.org/v5/en/guide/subject-type-detection
        // @ts-ignore
        detectSubjectType: (object)=>object.type
    });
};
const defaultACLObj = {
    action: "manage",
    subject: "all"
};
/* harmony default export */ const acl = ((/* unused pure expression or super */ null && (defineRulesFor)));

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var node_Button = __webpack_require__(98511);
var Button_default = /*#__PURE__*/__webpack_require__.n(node_Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var node_Typography = __webpack_require__(43360);
var Typography_default = /*#__PURE__*/__webpack_require__.n(node_Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
// EXTERNAL MODULE: ./app/core/layouts/BlankLayout.tsx
var BlankLayout = __webpack_require__(63764);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/useMediaQuery/index.js
var useMediaQuery = __webpack_require__(75983);
;// CONCATENATED MODULE: ./app/views/pages/misc/FooterIllustrations.tsx
// ** React Imports

// ** MUI Components


// Styled Components
const MaskImg = (0,node_styles.styled)("img")(()=>({
        bottom: 0,
        zIndex: -1,
        height: 260,
        width: "100%",
        position: "absolute"
    }));
const FooterIllustrations = (props)=>{
    // ** Props
    const { image } = props;
    // ** Hook
    const theme = (0,node_styles.useTheme)();
    // ** Vars
    const hidden = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down("md"));
    if (!hidden) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: !image ? /*#__PURE__*/ jsx_runtime_.jsx(MaskImg, {
                alt: "mask",
                src: `/images/pages/misc-mask-${theme.palette.mode}.png`
            }) : typeof image === "string" ? /*#__PURE__*/ jsx_runtime_.jsx(MaskImg, {
                alt: "mask",
                src: image
            }) : image
        });
    } else {
        return null;
    }
};
/* harmony default export */ const misc_FooterIllustrations = (FooterIllustrations);

;// CONCATENATED MODULE: ./app/401.tsx
// ** React Imports

// ** Next Import

// ** MUI Components




// ** Layout Import

// ** Demo Imports

// ** Styled Components
const BoxWrapper = (0,node_styles.styled)(Box/* default */.Z)(({ theme })=>({
        [theme.breakpoints.down("md")]: {
            width: "90vw"
        }
    }));
const Img = (0,node_styles.styled)("img")(({ theme })=>({
        [theme.breakpoints.down("lg")]: {
            height: 450,
            marginTop: theme.spacing(10)
        },
        [theme.breakpoints.down("md")]: {
            height: 400
        },
        [theme.breakpoints.up("lg")]: {
            marginTop: theme.spacing(20)
        }
    }));
const Error401 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
        className: "content-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                sx: {
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h4",
                                sx: {
                                    mb: 1.5
                                },
                                children: "You are not authorized!"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                sx: {
                                    color: "text.secondary"
                                },
                                children: "You do not have permission to view this page using the credentials that you have provided while login."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                sx: {
                                    mb: 6,
                                    color: "text.secondary"
                                },
                                children: "Please contact your site administrator."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                href: "/",
                                component: (link_default()),
                                variant: "contained",
                                children: "Back to Home"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                        height: "500",
                        alt: "error-illustration",
                        src: "/images/pages/401.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(misc_FooterIllustrations, {})
        ]
    });
};
Error401.getLayout = (page)=>/*#__PURE__*/ jsx_runtime_.jsx(BlankLayout/* default */.Z, {
        children: page
    });
/* harmony default export */ const _401 = (Error401);

// EXTERNAL MODULE: ./app/hooks/useAuth.tsx
var useAuth = __webpack_require__(23654);
;// CONCATENATED MODULE: ./app/core/components/auth/AclGuard.tsx
// ** React Imports


// ** Next Import

// ** Context Imports

// ** Config Import

// ** Component Import


// ** Hooks

const AclGuard = (props)=>{
    // ** Props
    const { aclAbilities, children, guestGuard } = props;
    const [ability, setAbility] = (0,react_.useState)(undefined);
    // ** Hooks
    const auth = (0,useAuth/* useAuth */.a)();
    const router = (0,navigation.useRouter)();
    const pathName = (0,navigation.usePathname)();
    // If guestGuard is true and user is not logged in or its an error page, render the page without checking access
    if (guestGuard || pathName === "/404" || pathName === "/500") {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        });
    }
    // User is logged in, build ability for the user based on his role
    // if (auth.user && auth.user.role && !ability) {
    if (auth.user && !ability) {
        setAbility(buildAbilityFor(auth.user.role, aclAbilities.subject));
    }
    // Check the access of current user and render pages
    if (ability && ability.can(aclAbilities.action, aclAbilities.subject)) {
        return /*#__PURE__*/ jsx_runtime_.jsx(AbilityContext.Provider, {
            value: ability,
            children: children
        });
    }
    // Render Not Authorized component if the current user has limited access
    return /*#__PURE__*/ jsx_runtime_.jsx(BlankLayout/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(_401, {})
    });
};
/* harmony default export */ const auth_AclGuard = (AclGuard);

;// CONCATENATED MODULE: ./app/core/components/auth/AuthGuard.tsx
// ** React Imports


// ** Next Import

// ** Hooks Import

const AuthGuard = (props)=>{
    const { children, fallback } = props;
    const auth = (0,useAuth/* useAuth */.a)();
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    (0,react_.useEffect)(()=>{
        // if (!router.isReady) {
        //   return;
        // }
        if (auth.user === null && !window.localStorage.getItem("userData")) {
            if (pathname !== "/") {
                router.replace("/login");
            } else {
                router.replace("/login");
            }
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        pathname
    ]);
    if (auth.loading || auth.user === null) {
        return fallback;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
/* harmony default export */ const auth_AuthGuard = (AuthGuard);

;// CONCATENATED MODULE: ./app/core/components/auth/GuestGuard.tsx
// ** React Imports


// ** Next Import

// ** Hooks Import

const GuestGuard = (props)=>{
    const { children, fallback } = props;
    const auth = (0,useAuth/* useAuth */.a)();
    const router = (0,navigation.useRouter)();
    const pathName = (0,navigation.usePathname)();
    (0,react_.useEffect)(()=>{
        if (window.localStorage.getItem("userData")) {
            router.replace("/");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathName
    ]);
    if (auth.loading || !auth.loading && auth.user !== null) {
        return fallback;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
/* harmony default export */ const auth_GuestGuard = (GuestGuard);

// EXTERNAL MODULE: ./app/core/components/spinner/index.tsx
var spinner = __webpack_require__(16281);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Fab/index.js
var Fab = __webpack_require__(19541);
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab);
// EXTERNAL MODULE: ./app/core/components/icon/index.tsx
var components_icon = __webpack_require__(91384);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(59965);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Toolbar/index.js
var Toolbar = __webpack_require__(90043);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar);
;// CONCATENATED MODULE: ./app/core/layouts/components/vertical/appBar/index.tsx
// ** MUI Imports




// ** Util Import

const appBar_AppBar = (0,node_styles.styled)((AppBar_default()))(({ theme })=>({
        transition: "none",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
        minHeight: theme.mixins.toolbar.minHeight,
        [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6)
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    }));
const appBar_Toolbar = (0,node_styles.styled)((Toolbar_default()))(({ theme })=>({
        width: "100%",
        marginTop: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        padding: `${theme.spacing(0, 6)} !important`
    }));
const LayoutAppBar = (props)=>{
    // ** Props
    const { settings, appBarProps, appBarContent: userAppBarContent } = props;
    // ** Vars
    const { skin, appBar, appBarBlur, contentWidth } = settings;
    const appBarBlurEffect = appBarBlur && {
        "&:after": {
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100%",
            content: '""',
            position: "absolute",
            backdropFilter: "blur(10px)",
            height: (theme)=>`calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(4)})`,
            mask: (theme)=>`linear-gradient(${theme.palette.background.default}, ${theme.palette.background.default} 18%, transparent 100%)`,
            background: (theme)=>`linear-gradient(180deg,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.7)} 44%, ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.43)} 73%, ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0)})`
        }
    };
    if (appBar === "hidden") {
        return null;
    }
    let userAppBarStyle = {};
    if (appBarProps && appBarProps.sx) {
        userAppBarStyle = appBarProps.sx;
    }
    const userAppBarProps = Object.assign({}, appBarProps);
    delete userAppBarProps.sx;
    return /*#__PURE__*/ jsx_runtime_.jsx(appBar_AppBar, {
        elevation: 0,
        color: "default",
        className: "layout-navbar",
        sx: {
            ...appBarBlurEffect,
            ...userAppBarStyle
        },
        position: appBar === "fixed" ? "sticky" : "static",
        ...userAppBarProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx(appBar_Toolbar, {
            className: "navbar-content-container",
            sx: {
                ...appBarBlur && {
                    backdropFilter: "blur(6px)"
                },
                minHeight: (theme)=>`${theme.mixins.toolbar.minHeight}px !important`,
                backgroundColor: (theme)=>(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.paper, appBarBlur ? 0.95 : 1),
                ...skin === "bordered" ? {
                    border: (theme)=>`1px solid ${theme.palette.divider}`
                } : {
                    boxShadow: 4
                },
                ...contentWidth === "boxed" && {
                    "@media (min-width:1440px)": {
                        maxWidth: (theme)=>`calc(1440px - ${theme.spacing(6 * 2)})`
                    }
                }
            },
            children: userAppBarContent && userAppBarContent(props) || null
        })
    });
};
/* harmony default export */ const appBar = (LayoutAppBar);

// EXTERNAL MODULE: ./node_modules/react-perfect-scrollbar/lib/index.js
var lib = __webpack_require__(33854);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Radio/index.js
var node_Radio = __webpack_require__(7685);
var Radio_default = /*#__PURE__*/__webpack_require__.n(node_Radio);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Switch/index.js
var node_Switch = __webpack_require__(77876);
var Switch_default = /*#__PURE__*/__webpack_require__.n(node_Switch);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var node_Divider = __webpack_require__(73638);
var Divider_default = /*#__PURE__*/__webpack_require__.n(node_Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(19353);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/RadioGroup/index.js
var RadioGroup = __webpack_require__(14891);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(28353);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(79499);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);
;// CONCATENATED MODULE: ./app/core/components/customizer/index.tsx
// ** React Imports


// ** Third Party Components

// ** MUI Imports










// ** Icon Imports

// ** Hook Import

const Toggler = (0,node_styles.styled)(Box/* default */.Z)(({ theme })=>({
        right: 0,
        top: "50%",
        display: "flex",
        cursor: "pointer",
        position: "fixed",
        padding: theme.spacing(2),
        zIndex: theme.zIndex.modal,
        transform: "translateY(-50%)",
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderBottomLeftRadius: theme.shape.borderRadius
    }));
const customizer_Drawer = (0,node_styles.styled)((Drawer_default()))(({ theme })=>({
        width: 400,
        zIndex: theme.zIndex.modal,
        "& .MuiFormControlLabel-root": {
            marginRight: "0.6875rem"
        },
        "& .MuiDrawer-paper": {
            border: 0,
            width: 400,
            zIndex: theme.zIndex.modal,
            boxShadow: theme.shadows[9]
        }
    }));
const CustomizerSpacing = (0,node_styles.styled)("div")(({ theme })=>({
        padding: theme.spacing(5, 6)
    }));
const ColorBox = (0,node_styles.styled)(Box/* default */.Z)(({ theme })=>({
        width: 45,
        height: 45,
        cursor: "pointer",
        margin: theme.spacing(2.5, 1.75, 1.75),
        borderRadius: theme.shape.borderRadius,
        transition: "margin .25s ease-in-out, width .25s ease-in-out, height .25s ease-in-out, box-shadow .25s ease-in-out",
        "&:hover": {
            boxShadow: theme.shadows[4]
        }
    }));
const Customizer = ()=>{
    // ** State
    const [open, setOpen] = (0,react_.useState)(false);
    // ** Hook
    const { settings, saveSettings } = (0,useSettings/* useSettings */.r)();
    // ** Vars
    const { mode, skin, appBar, footer, layout, navHidden, direction, appBarBlur, themeColor, navCollapsed, contentWidth, verticalNavToggleType } = settings;
    const handleChange = (field, value)=>{
        saveSettings({
            ...settings,
            [field]: value
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "customizer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(customizer_Drawer, {
            open: open,
            hideBackdrop: true,
            anchor: "right",
            variant: "persistent",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                    className: "customizer-header",
                    sx: {
                        position: "relative",
                        p: (theme)=>theme.spacing(3.5, 5),
                        borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                fontWeight: 600,
                                textTransform: "uppercase"
                            },
                            children: "Theme Customizer"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                color: "text.secondary"
                            },
                            children: "Customize & Preview in Real Time"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            onClick: ()=>setOpen(false),
                            sx: {
                                right: 20,
                                top: "50%",
                                position: "absolute",
                                color: "text.secondary",
                                transform: "translateY(-50%)"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
                                icon: "tabler:x",
                                fontSize: 20
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((lib_default()), {
                    options: {
                        wheelPropagation: false
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomizerSpacing, {
                            className: "customizer-body",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "p",
                                    variant: "caption",
                                    sx: {
                                        mb: 5,
                                        color: "text.disabled",
                                        textTransform: "uppercase"
                                    },
                                    children: "Theming"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        mb: 5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "Skin"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RadioGroup/* default */.ZP, {
                                            row: true,
                                            value: skin,
                                            onChange: (e)=>handleChange("skin", e.target.value),
                                            sx: {
                                                "& .MuiFormControlLabel-label": {
                                                    fontSize: ".875rem",
                                                    color: "text.secondary"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "default",
                                                    label: "Default",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "bordered",
                                                    label: "Bordered",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        mb: 5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "Mode"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RadioGroup/* default */.ZP, {
                                            row: true,
                                            value: mode,
                                            onChange: (e)=>handleChange("mode", e.target.value),
                                            sx: {
                                                "& .MuiFormControlLabel-label": {
                                                    fontSize: ".875rem",
                                                    color: "text.secondary"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "light",
                                                    label: "Light",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "dark",
                                                    label: "Dark",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                }),
                                                layout === "horizontal" ? null : /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "semi-dark",
                                                    label: "Semi Dark",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "Primary Color"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                            sx: {
                                                display: "flex"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                    onClick: ()=>handleChange("themeColor", "primary"),
                                                    sx: {
                                                        backgroundColor: "#7367F0",
                                                        ...themeColor === "primary" ? {
                                                            width: 53,
                                                            height: 53,
                                                            m: (theme)=>theme.spacing(1.5, 0.75, 0)
                                                        } : {}
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                    onClick: ()=>handleChange("themeColor", "secondary"),
                                                    sx: {
                                                        backgroundColor: "secondary.main",
                                                        ...themeColor === "secondary" ? {
                                                            width: 53,
                                                            height: 53,
                                                            m: (theme)=>theme.spacing(1.5, 0.75, 0)
                                                        } : {}
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                    onClick: ()=>handleChange("themeColor", "success"),
                                                    sx: {
                                                        backgroundColor: "success.main",
                                                        ...themeColor === "success" ? {
                                                            width: 53,
                                                            height: 53,
                                                            m: (theme)=>theme.spacing(1.5, 0.75, 0)
                                                        } : {}
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                    onClick: ()=>handleChange("themeColor", "error"),
                                                    sx: {
                                                        backgroundColor: "error.main",
                                                        ...themeColor === "error" ? {
                                                            width: 53,
                                                            height: 53,
                                                            m: (theme)=>theme.spacing(1.5, 0.75, 0)
                                                        } : {}
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                    onClick: ()=>handleChange("themeColor", "warning"),
                                                    sx: {
                                                        backgroundColor: "warning.main",
                                                        ...themeColor === "warning" ? {
                                                            width: 53,
                                                            height: 53,
                                                            m: (theme)=>theme.spacing(1.5, 0.75, 0)
                                                        } : {}
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ColorBox, {
                                                    onClick: ()=>handleChange("themeColor", "info"),
                                                    sx: {
                                                        backgroundColor: "info.main",
                                                        ...themeColor === "info" ? {
                                                            width: 53,
                                                            height: 53,
                                                            m: (theme)=>theme.spacing(1.5, 0.75, 0)
                                                        } : {}
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                            sx: {
                                m: "0 !important"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomizerSpacing, {
                            className: "customizer-body",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "p",
                                    variant: "caption",
                                    sx: {
                                        mb: 5,
                                        color: "text.disabled",
                                        textTransform: "uppercase"
                                    },
                                    children: "Layout"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        mb: 5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "Content Width"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RadioGroup/* default */.ZP, {
                                            row: true,
                                            value: contentWidth,
                                            onChange: (e)=>handleChange("contentWidth", e.target.value),
                                            sx: {
                                                "& .MuiFormControlLabel-label": {
                                                    fontSize: ".875rem",
                                                    color: "text.secondary"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "full",
                                                    label: "Full",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "boxed",
                                                    label: "Boxed",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        mb: 5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "AppBar Type"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RadioGroup/* default */.ZP, {
                                            row: true,
                                            value: appBar,
                                            onChange: (e)=>handleChange("appBar", e.target.value),
                                            sx: {
                                                "& .MuiFormControlLabel-label": {
                                                    fontSize: ".875rem",
                                                    color: "text.secondary"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "fixed",
                                                    label: "Fixed",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "static",
                                                    label: "Static",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                }),
                                                layout === "horizontal" ? null : /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "hidden",
                                                    label: "Hidden",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        mb: 5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "Footer Type"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RadioGroup/* default */.ZP, {
                                            row: true,
                                            value: footer,
                                            onChange: (e)=>handleChange("footer", e.target.value),
                                            sx: {
                                                "& .MuiFormControlLabel-label": {
                                                    fontSize: ".875rem",
                                                    color: "text.secondary"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "fixed",
                                                    label: "Fixed",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "static",
                                                    label: "Static",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "hidden",
                                                    label: "Hidden",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "AppBar Blur"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                            name: "appBarBlur",
                                            checked: appBarBlur,
                                            onChange: (e)=>handleChange("appBarBlur", e.target.checked)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                            sx: {
                                m: "0 !important"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomizerSpacing, {
                            className: "customizer-body",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "p",
                                    variant: "caption",
                                    sx: {
                                        mb: 5,
                                        color: "text.disabled",
                                        textTransform: "uppercase"
                                    },
                                    children: "Menu"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        mb: layout === "horizontal" && appBar === "hidden" ? {} : 5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "Menu Layout"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RadioGroup/* default */.ZP, {
                                            row: true,
                                            value: layout,
                                            onChange: (e)=>{
                                                saveSettings({
                                                    ...settings,
                                                    layout: e.target.value,
                                                    lastLayout: e.target.value
                                                });
                                            },
                                            sx: {
                                                "& .MuiFormControlLabel-label": {
                                                    fontSize: ".875rem",
                                                    color: "text.secondary"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "vertical",
                                                    label: "Vertical",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "horizontal",
                                                    label: "Horizontal",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                navHidden || layout === "horizontal" ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        mb: 5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "Menu Toggle"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RadioGroup/* default */.ZP, {
                                            row: true,
                                            value: verticalNavToggleType,
                                            onChange: (e)=>handleChange("verticalNavToggleType", e.target.value),
                                            sx: {
                                                "& .MuiFormControlLabel-label": {
                                                    fontSize: ".875rem",
                                                    color: "text.secondary"
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "accordion",
                                                    label: "Accordion",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                    value: "collapse",
                                                    label: "Collapse",
                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {})
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                navHidden || layout === "horizontal" ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        mb: 5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "Menu Collapsed"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                            name: "navCollapsed",
                                            checked: navCollapsed,
                                            onChange: (e)=>handleChange("navCollapsed", e.target.checked)
                                        })
                                    ]
                                }),
                                layout === "horizontal" && appBar === "hidden" ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "Menu Hidden"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                            name: "navHidden",
                                            checked: navHidden,
                                            onChange: (e)=>handleChange("navHidden", e.target.checked)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                            sx: {
                                m: "0 !important"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomizerSpacing, {
                            className: "customizer-body",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "p",
                                    variant: "caption",
                                    sx: {
                                        mb: 5,
                                        color: "text.disabled",
                                        textTransform: "uppercase"
                                    },
                                    children: "Misc"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        mb: 5,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "RTL"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                            name: "direction",
                                            checked: direction === "rtl",
                                            onChange: (e)=>handleChange("direction", e.target.checked ? "rtl" : "ltr")
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const customizer = (Customizer);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/List/index.js
var node_List = __webpack_require__(54436);
var List_default = /*#__PURE__*/__webpack_require__.n(node_List);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/SwipeableDrawer/index.js
var SwipeableDrawer = __webpack_require__(18191);
;// CONCATENATED MODULE: ./app/core/layouts/components/vertical/navigation/Drawer.tsx
// ** MUI Imports



const Drawer_SwipeableDrawer = (0,node_styles.styled)(SwipeableDrawer/* default */.Z)({
    overflowX: "hidden",
    transition: "width .25s ease-in-out",
    "& ul": {
        listStyle: "none"
    },
    "& .MuiListItem-gutters": {
        paddingLeft: 4,
        paddingRight: 4
    },
    "& .MuiDrawer-paper": {
        left: "unset",
        right: "unset",
        overflowX: "hidden",
        transition: "width .25s ease-in-out, box-shadow .25s ease-in-out"
    }
});
const Drawer_Drawer = (props)=>{
    // ** Props
    const { hidden, children, navHover, navWidth, settings, navVisible, setNavHover, navMenuProps, setNavVisible, collapsedNavWidth, navigationBorderWidth } = props;
    // ** Hook
    const theme = (0,node_styles.useTheme)();
    // ** Vars
    const { mode, skin, navCollapsed } = settings;
    let flag = true;
    const drawerColors = ()=>{
        if (mode === "semi-dark") {
            return {
                backgroundColor: "customColors.darkPaperBg"
            };
        } else return {
            backgroundColor: "background.paper"
        };
    };
    // Drawer Props for Mobile & Tablet screens
    const MobileDrawerProps = {
        open: navVisible,
        onOpen: ()=>setNavVisible(true),
        onClose: ()=>setNavVisible(false),
        ModalProps: {
            keepMounted: true
        }
    };
    // Drawer Props for Laptop & Desktop screens
    const DesktopDrawerProps = {
        open: true,
        onOpen: ()=>null,
        onClose: ()=>null,
        onMouseEnter: ()=>{
            // Declared flag to resolve first time flicker issue while trying to collapse the menu
            if (flag || navCollapsed) {
                setNavHover(true);
                flag = false;
            }
        },
        onMouseLeave: ()=>{
            if (navCollapsed) {
                setNavHover(false);
            }
        }
    };
    let userNavMenuStyle = {};
    let userNavMenuPaperStyle = {};
    if (navMenuProps && navMenuProps.sx) {
        userNavMenuStyle = navMenuProps.sx;
    }
    if (navMenuProps && navMenuProps.PaperProps && navMenuProps.PaperProps.sx) {
        userNavMenuPaperStyle = navMenuProps.PaperProps.sx;
    }
    const userNavMenuProps = Object.assign({}, navMenuProps);
    delete userNavMenuProps.sx;
    delete userNavMenuProps.PaperProps;
    return /*#__PURE__*/ jsx_runtime_.jsx(Drawer_SwipeableDrawer, {
        className: "layout-vertical-nav",
        variant: hidden ? "temporary" : "permanent",
        ...hidden ? {
            ...MobileDrawerProps
        } : {
            ...DesktopDrawerProps
        },
        PaperProps: {
            sx: {
                ...drawerColors(),
                ...!hidden && skin !== "bordered" && {
                    boxShadow: 6
                },
                width: navCollapsed && !navHover ? collapsedNavWidth : navWidth,
                borderRight: navigationBorderWidth === 0 ? 0 : `${navigationBorderWidth}px solid ${theme.palette.divider}`,
                ...userNavMenuPaperStyle
            },
            ...navMenuProps?.PaperProps
        },
        sx: {
            width: navCollapsed ? collapsedNavWidth : navWidth,
            ...userNavMenuStyle
        },
        ...userNavMenuProps,
        children: children
    });
};
/* harmony default export */ const navigation_Drawer = (Drawer_Drawer);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Chip/index.js
var node_Chip = __webpack_require__(29553);
var Chip_default = /*#__PURE__*/__webpack_require__.n(node_Chip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItem/index.js
var ListItem = __webpack_require__(90777);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemIcon/index.js
var ListItemIcon = __webpack_require__(26765);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemButton/index.js
var ListItemButton = __webpack_require__(29234);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton);
;// CONCATENATED MODULE: ./app/layouts/components/UserIcon.tsx
// ** Type Import

// ** Custom Icon Import

const UserIcon = ({ icon, ...rest })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
        icon: icon,
        ...rest
    });
};
/* harmony default export */ const components_UserIcon = (UserIcon);

;// CONCATENATED MODULE: ./app/layouts/components/acl/CanViewNavLink.tsx
// ** React Imports


// ** Component Imports

const CanViewNavLink = (props)=>{
    // ** Props
    const { children, navLink } = props;
    // ** Hook
    const ability = (0,react_.useContext)(AbilityContext);
    return ability && ability.can(navLink?.action, navLink?.subject) ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    }) : null;
};
/* harmony default export */ const acl_CanViewNavLink = (CanViewNavLink);

;// CONCATENATED MODULE: ./app/core/layouts/utils.ts
// ** Types
// import { NextRouter } from "next/navigation";
/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */ const handleURLQueries = (searchParams, pathName, path)=>{
    if (Object.keys(searchParams).length && path) {
        const arr = Object.keys(searchParams);
        return pathName.includes(path) && pathName.includes(searchParams[arr[0]]) && path !== "/";
    }
    return false;
};
/**
 * Check if the given item has the given url
 * in one of its children
 *
 * @param item
 * @param currentURL
 */ const hasActiveChild = (item, currentURL)=>{
    const { children } = item;
    if (!children) {
        return false;
    }
    for (const child of children){
        if (child.children) {
            if (hasActiveChild(child, currentURL)) {
                return true;
            }
        }
        const childPath = child.path;
        // Check if the child has a link and is active
        if (child && childPath && currentURL && (childPath === currentURL || currentURL.includes(childPath) && childPath !== "/")) {
            return true;
        }
    }
    return false;
};
/**
 * Check if this is a children
 * of the given item
 *
 * @param children
 * @param openGroup
 * @param currentActiveGroup
 */ const removeChildren = (children, openGroup, currentActiveGroup)=>{
    children.forEach((child)=>{
        if (!currentActiveGroup.includes(child.title)) {
            const index = openGroup.indexOf(child.title);
            if (index > -1) openGroup.splice(index, 1);
            // @ts-ignore
            if (child.children) // @ts-ignore
            removeChildren(child.children, openGroup, currentActiveGroup);
        }
    });
};

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(91148);
;// CONCATENATED MODULE: ./app/core/layouts/components/Translations.tsx
// ** Third Party Import


const Translations = ({ text })=>{
    // ** Hook
    const { t } = (0,es/* useTranslation */.$G)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: `${t(text)}`
    });
};
/* harmony default export */ const components_Translations = (Translations);

;// CONCATENATED MODULE: ./app/core/layouts/components/vertical/navigation/VerticalNavLink.tsx
// ** React Imports

// ** Next Imports


// ** MUI Imports







// ** Configs Import

// ** Custom Components Imports


// ** Util Imports



// ** Styled Components
const MenuNavLink = (0,node_styles.styled)((ListItemButton_default()))(({ theme })=>({
        width: "100%",
        marginLeft: theme.spacing(3.5),
        marginRight: theme.spacing(3.5),
        borderRadius: theme.shape.borderRadius,
        transition: "padding-left .25s ease-in-out, padding-right .25s ease-in-out",
        "&.active": {
            "&, &:hover": {
                boxShadow: `0px 2px 6px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.48)}`,
                background: `linear-gradient(72.47deg, ${theme.direction === "ltr" ? theme.palette.primary.main : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.7)} 22.16%, ${theme.direction === "ltr" ? (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.7) : theme.palette.primary.main} 76.47%)`,
                "&.Mui-focusVisible": {
                    background: `linear-gradient(72.47deg, ${theme.palette.primary.dark} 22.16%, ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.dark, 0.7)} 76.47%)`
                }
            },
            "& .MuiTypography-root, & svg": {
                color: `${theme.palette.common.white} !important`
            }
        }
    }));
const MenuItemTextMetaWrapper = (0,node_styles.styled)(Box/* default */.Z)(({ theme })=>({
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        justifyContent: "space-between",
        transition: "opacity .25s ease-in-out",
        ...themeConfig["default"].menuTextTruncate && {
            overflow: "hidden"
        }
    }));
const VerticalNavLink = ({ item, parent, navHover, settings, navVisible, isSubToSub, collapsedNavWidth, toggleNavVisibility, navigationBorderWidth })=>{
    // ** Hooks
    const theme = (0,node_styles.useTheme)();
    const router = (0,navigation.useRouter)();
    const pathName = (0,navigation.usePathname)();
    const searchParams = (0,navigation.useSearchParams)();
    // ** Vars
    const { mode, navCollapsed } = settings;
    const icon = parent && !item.icon ? themeConfig["default"].navSubItemIcon : item.icon;
    const conditionalColors = ()=>{
        if (mode === "semi-dark") {
            return {
                "&:hover": {
                    backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.04)`
                },
                "& .MuiTypography-root, & svg": {
                    color: `rgba(${theme.palette.customColors.dark}, 0.6)`
                }
            };
        } else return {
            "& .MuiTypography-root, & svg": {
                color: "text.secondary"
            }
        };
    };
    const isNavLinkActive = ()=>{
        if (pathName === item.path || handleURLQueries(searchParams, pathName, item.path)) {
            return true;
        } else {
            return false;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(acl_CanViewNavLink, {
        navLink: item,
        children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
            disablePadding: true,
            className: "nav-link",
            disabled: item.disabled || false,
            sx: {
                mt: 1,
                px: "0 !important"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuNavLink, {
                component: (link_default()),
                ...item.disabled && {
                    tabIndex: -1
                },
                className: isNavLinkActive() ? "active" : "",
                href: item.path === undefined ? "/" : `${item.path}`,
                ...item.openInNewTab ? {
                    target: "_blank"
                } : null,
                onClick: (e)=>{
                    if (item.path === undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (navVisible) {
                        toggleNavVisibility();
                    }
                },
                sx: {
                    py: 2,
                    ...conditionalColors(),
                    ...item.disabled ? {
                        pointerEvents: "none"
                    } : {
                        cursor: "pointer"
                    },
                    px: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 22 - 28) / 8 : 4
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                        sx: {
                            transition: "margin .25s ease-in-out",
                            ...navCollapsed && !navHover ? {
                                mr: 0
                            } : {
                                mr: 2
                            },
                            ...parent ? {
                                ml: 1.5,
                                mr: 3.5
                            } : {},
                            "& svg": {
                                fontSize: "0.625rem",
                                ...!parent ? {
                                    fontSize: "1.375rem"
                                } : {},
                                ...parent && item.icon ? {
                                    fontSize: "0.875rem"
                                } : {}
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                            icon: icon
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItemTextMetaWrapper, {
                        sx: {
                            ...isSubToSub ? {
                                ml: 2
                            } : {},
                            ...navCollapsed && !navHover ? {
                                opacity: 0
                            } : {
                                opacity: 1
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                ...(themeConfig["default"].menuTextTruncate || !themeConfig["default"].menuTextTruncate && navCollapsed && !navHover) && {
                                    noWrap: true
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Translations, {
                                    text: item.title
                                })
                            }),
                            item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item.badgeContent,
                                color: item.badgeColor || "primary",
                                sx: {
                                    height: 20,
                                    fontWeight: 500,
                                    "& .MuiChip-label": {
                                        px: 1.5,
                                        textTransform: "capitalize"
                                    }
                                }
                            }) : null
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const navigation_VerticalNavLink = (VerticalNavLink);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Collapse/index.js
var Collapse = __webpack_require__(36136);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(14889);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
;// CONCATENATED MODULE: ./app/layouts/components/acl/CanViewNavGroup.tsx
// ** React Imports


// ** Component Imports

const CanViewNavGroup = (props)=>{
    // ** Props
    const { children, navGroup } = props;
    // ** Hook
    const ability = (0,react_.useContext)(AbilityContext);
    const checkForVisibleChild = (arr)=>{
        return arr.some((i)=>{
            if (i.children) {
                return checkForVisibleChild(i.children);
            } else {
                return ability?.can(i.action, i.subject);
            }
        });
    };
    const canViewMenuGroup = (item)=>{
        const hasAnyVisibleChild = item.children && checkForVisibleChild(item.children);
        if (!(item.action && item.subject)) {
            return hasAnyVisibleChild;
        }
        return ability && ability.can(item.action, item.subject) && hasAnyVisibleChild;
    };
    return navGroup && canViewMenuGroup(navGroup) ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    }) : null;
};
/* harmony default export */ const acl_CanViewNavGroup = (CanViewNavGroup);

;// CONCATENATED MODULE: ./app/core/layouts/components/vertical/navigation/VerticalNavGroup.tsx
// ** React Imports


// ** Next Import

// ** MUI Imports








// ** Third Party Imports

// ** Icon Imports

// ** Configs Import

// ** Utils

// ** Custom Components Imports




const MenuItemTextWrapper = (0,node_styles.styled)(Box/* default */.Z)(({ theme })=>({
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        justifyContent: "space-between",
        transition: "opacity .25s ease-in-out",
        ...themeConfig["default"].menuTextTruncate && {
            overflow: "hidden"
        }
    }));
const VerticalNavGroup = (props)=>{
    // ** Props
    const { item, parent, settings, navHover, navVisible, isSubToSub, groupActive, setGroupActive, collapsedNavWidth, currentActiveGroup, setCurrentActiveGroup, navigationBorderWidth } = props;
    // ** Hooks & Vars
    const theme = (0,node_styles.useTheme)();
    const router = (0,navigation.useRouter)();
    const pathName = (0,navigation.usePathname)();
    const currentURL = pathName;
    const { direction, mode, navCollapsed, verticalNavToggleType } = settings;
    // ** Accordion menu group open toggle
    const toggleActiveGroup = (item, parent)=>{
        let openGroup = groupActive;
        // ** If Group is already open and clicked, close the group
        if (openGroup.includes(item.title)) {
            openGroup.splice(openGroup.indexOf(item.title), 1);
            // If clicked Group has open group children, Also remove those children to close those groups
            if (item.children) {
                removeChildren(item.children, openGroup, currentActiveGroup);
            }
        } else if (parent) {
            // ** If Group clicked is the child of an open group, first remove all the open groups under that parent
            if (parent.children) {
                removeChildren(parent.children, openGroup, currentActiveGroup);
            }
            // ** After removing all the open groups under that parent, add the clicked group to open group array
            if (!openGroup.includes(item.title)) {
                openGroup.push(item.title);
            }
        } else {
            // ** If clicked on another group that is not active or open, create openGroup array from scratch
            // ** Empty Open Group array
            openGroup = [];
            // ** push Current Active Group To Open Group array
            if (currentActiveGroup.every((elem)=>groupActive.includes(elem))) {
                openGroup.push(...currentActiveGroup);
            }
            // ** Push current clicked group item to Open Group array
            if (!openGroup.includes(item.title)) {
                openGroup.push(item.title);
            }
        }
        setGroupActive([
            ...openGroup
        ]);
    };
    // ** Menu Group Click
    const handleGroupClick = ()=>{
        const openGroup = groupActive;
        if (verticalNavToggleType === "collapse") {
            if (openGroup.includes(item.title)) {
                openGroup.splice(openGroup.indexOf(item.title), 1);
            } else {
                openGroup.push(item.title);
            }
            setGroupActive([
                ...openGroup
            ]);
        } else {
            toggleActiveGroup(item, parent);
        }
    };
    (0,react_.useEffect)(()=>{
        if (hasActiveChild(item, currentURL)) {
            if (!groupActive.includes(item.title)) groupActive.push(item.title);
        } else {
            const index = groupActive.indexOf(item.title);
            if (index > -1) groupActive.splice(index, 1);
        }
        setGroupActive([
            ...groupActive
        ]);
        setCurrentActiveGroup([
            ...groupActive
        ]);
        // Empty Active Group When Menu is collapsed and not hovered, to fix issue route change
        if (navCollapsed && !navHover) {
            setGroupActive([]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathName
    ]);
    (0,react_.useEffect)(()=>{
        if (navCollapsed && !navHover) {
            setGroupActive([]);
        }
        if (navCollapsed && navHover || groupActive.length === 0 && !navCollapsed) {
            setGroupActive([
                ...currentActiveGroup
            ]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        navCollapsed,
        navHover
    ]);
    (0,react_.useEffect)(()=>{
        if (groupActive.length === 0 && !navCollapsed) {
            setGroupActive([]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        navHover
    ]);
    const icon = parent && !item.icon ? themeConfig["default"].navSubItemIcon : item.icon;
    const menuGroupCollapsedStyles = navCollapsed && !navHover ? {
        opacity: 0
    } : {
        opacity: 1
    };
    const conditionalColors = ()=>{
        if (mode === "semi-dark") {
            return {
                "&:hover": {
                    backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.04)`
                },
                "& .MuiTypography-root, & :not(.menu-item-meta) > svg": {
                    color: `rgba(${theme.palette.customColors.dark}, 0.6)`
                },
                "&.Mui-selected": {
                    backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.08)`,
                    "&:hover": {
                        backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.12)`
                    },
                    "& .MuiTypography-root": {
                        fontWeight: 500
                    },
                    "& .MuiTypography-root, & :not(.menu-item-meta) > svg": {
                        color: `rgba(${theme.palette.customColors.dark}, 0.87)`
                    },
                    "& .menu-item-meta > svg": {
                        color: `rgba(${theme.palette.customColors.dark}, 0.6)`
                    }
                }
            };
        } else {
            return {
                "& .MuiTypography-root, & :not(.menu-item-meta) > svg": {
                    color: "text.secondary"
                },
                "&.Mui-selected": {
                    backgroundColor: "action.hover",
                    "&:hover": {
                        backgroundColor: "action.hover"
                    },
                    "& .MuiTypography-root, & :not(.menu-item-meta) > svg": {
                        color: "text.primary"
                    },
                    "& .menu-item-meta > svg": {
                        color: "text.secondary"
                    }
                }
            };
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(acl_CanViewNavGroup, {
        navGroup: item,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                disablePadding: true,
                className: "nav-group",
                onClick: handleGroupClick,
                sx: {
                    mt: 1,
                    px: "0 !important",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                        className: clsx_default()({
                            "Mui-selected": groupActive.includes(item.title) || currentActiveGroup.includes(item.title)
                        }),
                        sx: {
                            py: 2,
                            mx: 3.5,
                            borderRadius: 1,
                            ...conditionalColors(),
                            width: `calc(100% - ${theme.spacing(3.5 * 2)})`,
                            transition: "padding-left .25s ease-in-out, padding-right .25s ease-in-out",
                            px: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 22 - 28) / 8 : 4,
                            "&.Mui-selected.Mui-focusVisible": {
                                backgroundColor: "action.focus",
                                "&:hover": {
                                    backgroundColor: "action.focus"
                                }
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                sx: {
                                    transition: "margin .25s ease-in-out",
                                    ...parent && navCollapsed && !navHover ? {} : {
                                        mr: 2
                                    },
                                    ...navCollapsed && !navHover ? {
                                        mr: 0
                                    } : {},
                                    ...parent && item.children ? {
                                        ml: 1.5,
                                        mr: 3.5
                                    } : {}
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                                    icon: icon,
                                    ...parent && {
                                        fontSize: "0.625rem"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItemTextWrapper, {
                                sx: {
                                    ...menuGroupCollapsedStyles,
                                    ...isSubToSub ? {
                                        ml: 2
                                    } : {}
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        ...(themeConfig["default"].menuTextTruncate || !themeConfig["default"].menuTextTruncate && navCollapsed && !navHover) && {
                                            noWrap: true
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Translations, {
                                            text: item.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                        className: "menu-item-meta",
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            "& svg": {
                                                transition: "transform .25s ease-in-out",
                                                color: mode === "semi-dark" ? `rgba(${theme.palette.customColors.dark}, 0.38)` : "text.disabled",
                                                ...groupActive.includes(item.title) && {
                                                    transform: direction === "ltr" ? "rotate(90deg)" : "rotate(-90deg)"
                                                }
                                            }
                                        },
                                        children: [
                                            item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                                label: item.badgeContent,
                                                color: item.badgeColor || "primary",
                                                sx: {
                                                    mr: 1.5,
                                                    height: 20,
                                                    fontWeight: 500,
                                                    "& .MuiChip-label": {
                                                        px: 1.5,
                                                        textTransform: "capitalize"
                                                    }
                                                }
                                            }) : null,
                                            /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
                                                fontSize: "1.125rem",
                                                icon: direction === "ltr" ? "tabler:chevron-right" : "tabler:chevron-left"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                        component: "ul",
                        onClick: (e)=>e.stopPropagation(),
                        in: groupActive.includes(item.title),
                        sx: {
                            pl: 0,
                            width: "100%",
                            ...menuGroupCollapsedStyles,
                            transition: "all 0.25s ease-in-out"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavItems, {
                            ...props,
                            parent: item,
                            navVisible: navVisible,
                            verticalNavItems: item.children,
                            isSubToSub: parent && item.children ? item : undefined
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const navigation_VerticalNavGroup = (VerticalNavGroup);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListSubheader/index.js
var ListSubheader = __webpack_require__(48891);
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader);
;// CONCATENATED MODULE: ./app/layouts/components/acl/CanViewNavSectionTitle.tsx
// ** React Imports


// ** Component Imports

const CanViewNavSectionTitle = (props)=>{
    // ** Props
    const { children, navTitle } = props;
    // ** Hook
    const ability = (0,react_.useContext)(AbilityContext);
    return ability && ability.can(navTitle?.action, navTitle?.subject) ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    }) : null;
};
/* harmony default export */ const acl_CanViewNavSectionTitle = (CanViewNavSectionTitle);

;// CONCATENATED MODULE: ./app/core/layouts/components/vertical/navigation/VerticalNavSectionTitle.tsx
// ** MUI Imports




// ** Icon Imports

// ** Custom Components Imports


// ** Styled Components
const VerticalNavSectionTitle_ListSubheader = (0,node_styles.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
        component: "li",
        ...props
    }))(({ theme })=>({
        lineHeight: 1,
        display: "flex",
        position: "static",
        marginTop: theme.spacing(3.5),
        paddingTop: theme.spacing(1.5),
        backgroundColor: "transparent",
        paddingBottom: theme.spacing(1.5),
        transition: "padding-left .25s ease-in-out"
    }));
const TypographyHeaderText = (0,node_styles.styled)((Typography_default()))({
    fontSize: "0.75rem",
    lineHeight: "normal",
    letterSpacing: "0.21px",
    textTransform: "uppercase"
});
const VerticalNavSectionTitle = (props)=>{
    // ** Props
    const { item, navHover, settings, collapsedNavWidth, navigationBorderWidth } = props;
    // ** Vars
    const { mode, navCollapsed } = settings;
    return /*#__PURE__*/ jsx_runtime_.jsx(acl_CanViewNavSectionTitle, {
        navTitle: item,
        children: /*#__PURE__*/ jsx_runtime_.jsx(VerticalNavSectionTitle_ListSubheader, {
            className: "nav-section-title",
            sx: {
                ...navCollapsed && !navHover ? {
                    py: 0.5,
                    px: (collapsedNavWidth - navigationBorderWidth - 22) / 8
                } : {
                    px: 7.5
                },
                "& .MuiTypography-root, & svg": {
                    color: (theme)=>mode === "semi-dark" ? `rgba(${theme.palette.customColors.dark}, 0.38)` : "text.disabled"
                }
            },
            children: navCollapsed && !navHover ? /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
                icon: "tabler:separator"
            }) : /*#__PURE__*/ jsx_runtime_.jsx(TypographyHeaderText, {
                noWrap: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Translations, {
                    text: item.sectionTitle
                })
            })
        })
    });
};
/* harmony default export */ const navigation_VerticalNavSectionTitle = (VerticalNavSectionTitle);

;// CONCATENATED MODULE: ./app/core/layouts/components/vertical/navigation/VerticalNavItems.tsx
// ** Type Imports


// ** Custom Menu Components



const resolveNavItemComponent = (item)=>{
    if (item.sectionTitle) return navigation_VerticalNavSectionTitle;
    if (item.children) return navigation_VerticalNavGroup;
    return navigation_VerticalNavLink;
};
const VerticalNavItems = (props)=>{
    // ** Props
    const { verticalNavItems } = props;
    const RenderMenuItems = verticalNavItems?.map((item, index)=>{
        const TagName = resolveNavItemComponent(item);
        return /*#__PURE__*/ (0,react_.createElement)(TagName, {
            ...props,
            key: index,
            item: item
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: RenderMenuItems
    });
};
/* harmony default export */ const navigation_VerticalNavItems = (VerticalNavItems);

;// CONCATENATED MODULE: ./app/core/layouts/components/vertical/navigation/VerticalNavHeader.tsx
// ** Next Import


// ** MUI Imports




// ** Custom Icon Import

// ** Configs

// ** Styled Components
const MenuHeaderWrapper = (0,node_styles.styled)(Box/* default */.Z)(({ theme })=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: theme.spacing(4.5),
        transition: "padding .25s ease-in-out",
        minHeight: theme.mixins.toolbar.minHeight
    }));
const HeaderTitle = (0,node_styles.styled)((Typography_default()))(({ theme })=>({
        fontWeight: 600,
        lineHeight: "24px",
        fontSize: "1.375rem !important",
        color: theme.palette.text.primary,
        transition: "opacity .25s ease-in-out, margin .25s ease-in-out"
    }));
const LinkStyled = (0,node_styles.styled)((link_default()))({
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
});
const VerticalNavHeader = (props)=>{
    // ** Props
    const { hidden, navHover, settings, saveSettings, collapsedNavWidth, toggleNavVisibility, navigationBorderWidth, menuLockedIcon: userMenuLockedIcon, navMenuBranding: userNavMenuBranding, menuUnlockedIcon: userMenuUnlockedIcon } = props;
    // ** Hooks & Vars
    const theme = (0,node_styles.useTheme)();
    const { mode, navCollapsed } = settings;
    const menuCollapsedStyles = navCollapsed && !navHover ? {
        opacity: 0
    } : {
        opacity: 1
    };
    const menuHeaderPaddingLeft = ()=>{
        if (navCollapsed && !navHover) {
            if (userNavMenuBranding) {
                return 0;
            } else {
                return (collapsedNavWidth - navigationBorderWidth - 32) / 8;
            }
        } else {
            return 4.5;
        }
    };
    const conditionalColors = ()=>{
        if (mode === "semi-dark") {
            return {
                "& .MuiTypography-root, & .MuiIconButton-root": {
                    color: `rgba(${theme.palette.customColors.dark}, 0.87)`
                }
            };
        } else {
            return {
                "& .MuiTypography-root, & .MuiIconButton-root": {
                    color: "text.primary"
                }
            };
        }
    };
    const MenuLockedIcon = ()=>userMenuLockedIcon || /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
            icon: "tabler:circle-dot"
        });
    const MenuUnlockedIcon = ()=>userMenuUnlockedIcon || /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
            icon: "tabler:circle"
        });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuHeaderWrapper, {
        className: "nav-header",
        sx: {
            pl: menuHeaderPaddingLeft(),
            ...conditionalColors()
        },
        children: [
            userNavMenuBranding ? userNavMenuBranding(props) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkStyled, {
                href: "/",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        width: 32,
                        height: 22,
                        viewBox: "0 0 32 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                fill: theme.palette.primary.main,
                                d: "M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#161616",
                                opacity: 0.06,
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#161616",
                                opacity: 0.06,
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                fill: theme.palette.primary.main,
                                d: "M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderTitle, {
                        variant: "h6",
                        sx: {
                            ...menuCollapsedStyles,
                            ...navCollapsed && !navHover ? {} : {
                                ml: 2.5
                            }
                        },
                        children: themeConfig["default"].templateName
                    })
                ]
            }),
            hidden ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                disableRipple: true,
                disableFocusRipple: true,
                onClick: toggleNavVisibility,
                sx: {
                    p: 0,
                    backgroundColor: "transparent !important",
                    color: `${mode === "semi-dark" ? `rbga(${theme.palette.customColors.dark}, 0.6)` : theme.palette.text.secondary} !important`
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
                    icon: "tabler:x",
                    fontSize: "1.25rem"
                })
            }) : userMenuLockedIcon === null && userMenuUnlockedIcon === null ? null : /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                disableRipple: true,
                disableFocusRipple: true,
                onClick: ()=>saveSettings({
                        ...settings,
                        navCollapsed: !navCollapsed
                    }),
                sx: {
                    p: 0,
                    backgroundColor: "transparent !important",
                    "& svg": {
                        fontSize: "1.25rem",
                        ...menuCollapsedStyles,
                        transition: "opacity .25s ease-in-out"
                    }
                },
                children: navCollapsed ? MenuUnlockedIcon() : MenuLockedIcon()
            })
        ]
    });
};
/* harmony default export */ const navigation_VerticalNavHeader = (VerticalNavHeader);

;// CONCATENATED MODULE: ./app/core/layouts/components/vertical/navigation/index.tsx
// ** React Import


// ** MUI Imports



// ** Third Party Components


// ** Component Imports



// ** Util Import

const StyledBoxForShadow = (0,node_styles.styled)(Box/* default */.Z)(({ theme })=>({
        top: 60,
        left: -8,
        zIndex: 2,
        opacity: 0,
        position: "absolute",
        pointerEvents: "none",
        width: "calc(100% + 15px)",
        height: theme.mixins.toolbar.minHeight,
        transition: "opacity .15s ease-in-out",
        "&.scrolled": {
            opacity: 1
        }
    }));
const Navigation = (props)=>{
    // ** Props
    const { hidden, settings, afterNavMenuContent, beforeNavMenuContent, navigationBorderWidth, navMenuContent: userNavMenuContent } = props;
    // ** States
    const [navHover, setNavHover] = (0,react_.useState)(false);
    const [groupActive, setGroupActive] = (0,react_.useState)([]);
    const [currentActiveGroup, setCurrentActiveGroup] = (0,react_.useState)([]);
    // ** Ref
    const shadowRef = (0,react_.useRef)(null);
    // ** Hooks
    const theme = (0,node_styles.useTheme)();
    const { mode } = settings;
    // ** Var
    const { afterVerticalNavMenuContentPosition, beforeVerticalNavMenuContentPosition } = themeConfig["default"];
    // ** Fixes Navigation InfiniteScroll
    const handleInfiniteScroll = (ref)=>{
        if (ref) {
            // @ts-ignore
            ref._getBoundingClientRect = ref.getBoundingClientRect;
            ref.getBoundingClientRect = ()=>{
                // @ts-ignore
                const original = ref._getBoundingClientRect();
                return {
                    ...original,
                    height: Math.floor(original.height)
                };
            };
        }
    };
    // ** Scroll Menu
    const scrollMenu = (container)=>{
        if (beforeVerticalNavMenuContentPosition === "static" || !beforeNavMenuContent) {
            container = hidden ? container.target : container;
            if (shadowRef && container.scrollTop > 0) {
                // @ts-ignore
                if (!shadowRef.current.classList.contains("scrolled")) {
                    // @ts-ignore
                    shadowRef.current.classList.add("scrolled");
                }
            } else {
                // @ts-ignore
                shadowRef.current.classList.remove("scrolled");
            }
        }
    };
    const shadowBgColor = ()=>{
        if (mode === "semi-dark") {
            return `linear-gradient(${theme.palette.customColors.darkPaperBg} 5%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.customColors.darkPaperBg, 0.85)} 30%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.customColors.darkPaperBg, 0.5)} 65%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.customColors.darkPaperBg, 0.3)} 75%,transparent)`;
        } else {
            return `linear-gradient(${theme.palette.background.paper} 5%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.paper, 0.85)} 30%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.paper, 0.5)} 65%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.paper, 0.3)} 75%,transparent)`;
        }
    };
    const ScrollWrapper = hidden ? Box/* default */.Z : (lib_default());
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(navigation_Drawer, {
        ...props,
        navHover: navHover,
        setNavHover: setNavHover,
        navigationBorderWidth: navigationBorderWidth,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavHeader, {
                ...props,
                navHover: navHover
            }),
            beforeNavMenuContent && beforeVerticalNavMenuContentPosition === "fixed" ? beforeNavMenuContent(props) : null,
            (beforeVerticalNavMenuContentPosition === "static" || !beforeNavMenuContent) && /*#__PURE__*/ jsx_runtime_.jsx(StyledBoxForShadow, {
                ref: shadowRef,
                sx: {
                    background: shadowBgColor()
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
                sx: {
                    position: "relative",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ScrollWrapper, {
                    ...hidden ? {
                        onScroll: (container)=>scrollMenu(container),
                        sx: {
                            height: "100%",
                            overflowY: "auto",
                            overflowX: "hidden"
                        }
                    } : {
                        options: {
                            wheelPropagation: false
                        },
                        onScrollY: (container)=>scrollMenu(container),
                        containerRef: (ref)=>handleInfiniteScroll(ref)
                    },
                    children: [
                        beforeNavMenuContent && beforeVerticalNavMenuContentPosition === "static" ? beforeNavMenuContent(props) : null,
                        userNavMenuContent ? userNavMenuContent(props) : /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                            className: "nav-items",
                            sx: {
                                pt: 0,
                                "& > :first-child": {
                                    mt: "0"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavItems, {
                                navHover: navHover,
                                groupActive: groupActive,
                                setGroupActive: setGroupActive,
                                currentActiveGroup: currentActiveGroup,
                                setCurrentActiveGroup: setCurrentActiveGroup,
                                ...props
                            })
                        }),
                        afterNavMenuContent && afterVerticalNavMenuContentPosition === "static" ? afterNavMenuContent(props) : null
                    ]
                })
            }),
            afterNavMenuContent && afterVerticalNavMenuContentPosition === "fixed" ? afterNavMenuContent(props) : null
        ]
    });
};
/* harmony default export */ const vertical_navigation = (Navigation);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Zoom/index.js
var Zoom = __webpack_require__(37171);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/useScrollTrigger/index.js
var useScrollTrigger = __webpack_require__(83886);
;// CONCATENATED MODULE: ./app/core/components/scroll-to-top/index.tsx
// ** React Imports

// ** MUI Imports



const ScrollToTopStyled = (0,node_styles.styled)("div")(({ theme })=>({
        zIndex: 11,
        position: "fixed",
        right: theme.spacing(6),
        bottom: theme.spacing(10)
    }));
const ScrollToTop = (props)=>{
    // ** Props
    const { children, className } = props;
    // ** init trigger
    const trigger = (0,useScrollTrigger/* default */.Z)({
        threshold: 400,
        disableHysteresis: true
    });
    const handleClick = ()=>{
        const anchor = document.querySelector("body");
        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Zoom/* default */.Z, {
        in: trigger,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTopStyled, {
            className: className,
            onClick: handleClick,
            role: "presentation",
            children: children
        })
    });
};
/* harmony default export */ const scroll_to_top = (ScrollToTop);

;// CONCATENATED MODULE: ./app/core/layouts/VerticalLayout.tsx
// ** React Imports


// ** MUI Imports



// ** Icon Imports

// ** Theme Config Import

// ** Components




const VerticalLayoutWrapper = (0,node_styles.styled)("div")({
    height: "100%",
    display: "flex"
});
const MainContentWrapper = (0,node_styles.styled)(Box/* default */.Z)({
    flexGrow: 1,
    minWidth: 0,
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
});
const ContentWrapper = (0,node_styles.styled)("main")(({ theme })=>({
        flexGrow: 1,
        width: "100%",
        padding: theme.spacing(6),
        transition: "padding .25s ease-in-out",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    }));
const VerticalLayout = (props)=>{
    // ** Props
    const { hidden, settings, children, scrollToTop, footerProps, contentHeightFixed, verticalLayoutProps } = props;
    // ** Vars
    const { skin, navHidden, contentWidth } = settings;
    const navigationBorderWidth = skin === "bordered" ? 1 : 0;
    const { navigationSize, disableCustomizer, collapsedNavigationSize } = themeConfig["default"];
    const navWidth = navigationSize;
    const collapsedNavWidth = collapsedNavigationSize;
    // ** States
    const [navVisible, setNavVisible] = (0,react_.useState)(false);
    // ** Toggle Functions
    const toggleNavVisibility = ()=>setNavVisible(!navVisible);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(VerticalLayoutWrapper, {
                className: "layout-wrapper",
                children: [
                    navHidden && !(navHidden && settings.lastLayout === "horizontal") ? null : /*#__PURE__*/ jsx_runtime_.jsx(vertical_navigation, {
                        navWidth: navWidth,
                        navVisible: navVisible,
                        setNavVisible: setNavVisible,
                        collapsedNavWidth: collapsedNavWidth,
                        toggleNavVisibility: toggleNavVisibility,
                        navigationBorderWidth: navigationBorderWidth,
                        navMenuContent: verticalLayoutProps.navMenu.content,
                        navMenuBranding: verticalLayoutProps.navMenu.branding,
                        menuLockedIcon: verticalLayoutProps.navMenu.lockedIcon,
                        verticalNavItems: verticalLayoutProps.navMenu.navItems,
                        navMenuProps: verticalLayoutProps.navMenu.componentProps,
                        menuUnlockedIcon: verticalLayoutProps.navMenu.unlockedIcon,
                        afterNavMenuContent: verticalLayoutProps.navMenu.afterContent,
                        beforeNavMenuContent: verticalLayoutProps.navMenu.beforeContent,
                        ...props
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContentWrapper, {
                        className: "layout-content-wrapper",
                        sx: {
                            ...contentHeightFixed && {
                                maxHeight: "100vh"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(appBar, {
                                toggleNavVisibility: toggleNavVisibility,
                                appBarContent: verticalLayoutProps.appBar?.content,
                                appBarProps: verticalLayoutProps.appBar?.componentProps,
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ContentWrapper, {
                                className: "layout-page-content",
                                sx: {
                                    ...contentHeightFixed && {
                                        overflow: "hidden",
                                        "& > :first-of-type": {
                                            height: "100%"
                                        }
                                    },
                                    ...contentWidth === "boxed" && {
                                        mx: "auto",
                                        "@media (min-width:1440px)": {
                                            maxWidth: 1440
                                        },
                                        "@media (min-width:1200px)": {
                                            maxWidth: "100%"
                                        }
                                    }
                                },
                                children: children
                            })
                        ]
                    })
                ]
            }),
            disableCustomizer || hidden ? null : /*#__PURE__*/ jsx_runtime_.jsx(customizer, {}),
            scrollToTop ? scrollToTop(props) : /*#__PURE__*/ jsx_runtime_.jsx(scroll_to_top, {
                className: "mui-fixed",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                    color: "primary",
                    size: "small",
                    "aria-label": "scroll back to top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
                        icon: "tabler:arrow-up"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_VerticalLayout = (VerticalLayout);

;// CONCATENATED MODULE: ./app/core/layouts/components/horizontal/navigation/HorizontalNavLink.tsx
// ** React Imports


// ** Next Imports


// ** MUI Imports







// ** Third Party Imports

// ** Theme Config Import

// ** Custom Components Imports


// ** Util Imports


const HorizontalNavLink_ListItem = (0,node_styles.styled)((ListItem_default()))(({ theme })=>({
        width: "auto",
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
            backgroundColor: theme.palette.action.hover
        },
        "&.active, &.active:hover": {
            backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.08)
        },
        "&.active .MuiTypography-root, &.active .MuiListItemIcon-root": {
            color: theme.palette.primary.main
        },
        "&.active .MuiTypography-root": {
            fontWeight: 500
        },
        "&:focus-visible": {
            outline: 0,
            backgroundColor: theme.palette.action.focus
        }
    }));
const HorizontalNavLink = (props)=>{
    // ** Props
    const { item, settings, hasParent } = props;
    // ** Hook & Vars
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const searchParams = (0,navigation.useSearchParams)();
    const { navSubItemIcon, menuTextTruncate } = themeConfig["default"];
    const icon = item.icon ? item.icon : navSubItemIcon;
    const Wrapper = !hasParent ? (List_default()) : react_.Fragment;
    const isNavLinkActive = ()=>{
        if (pathname === item.path || handleURLQueries(searchParams, pathname, item.path)) {
            return true;
        } else {
            return false;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(acl_CanViewNavLink, {
        navLink: item,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
            ...!hasParent ? {
                component: "div",
                sx: {
                    py: settings.skin === "bordered" ? 2.375 : 2.5
                }
            } : {},
            children: /*#__PURE__*/ jsx_runtime_.jsx(HorizontalNavLink_ListItem, {
                component: (link_default()),
                disabled: item.disabled,
                ...item.disabled && {
                    tabIndex: -1
                },
                className: clsx_default()({
                    active: isNavLinkActive()
                }),
                target: item.openInNewTab ? "_blank" : undefined,
                href: item.path === undefined ? "/" : `${item.path}`,
                onClick: (e)=>{
                    if (item.path === undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                sx: {
                    ...item.disabled ? {
                        pointerEvents: "none"
                    } : {
                        cursor: "pointer"
                    },
                    ...!hasParent ? {
                        "&.active, &.active:hover": {
                            boxShadow: (theme)=>`0px 2px 6px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.48)}`,
                            background: (theme)=>`linear-gradient(72.47deg, ${theme.palette.primary.main} 22.16%, ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.7)} 76.47%)`,
                            "&:focus-visible": {
                                background: (theme)=>`linear-gradient(72.47deg, ${theme.palette.primary.dark} 22.16%, ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.dark, 0.7)} 76.47%)`
                            },
                            "& .MuiTypography-root, & .MuiListItemIcon-root": {
                                color: "common.white"
                            }
                        }
                    } : {
                        mx: 2,
                        width: (theme)=>`calc(100% - ${theme.spacing(2 * 2)})`,
                        "&.active, &.active:hover": {
                            "&:focus-visible": {
                                backgroundColor: (theme)=>(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.24)
                            }
                        }
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                    sx: {
                        gap: 2,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                ...menuTextTruncate && {
                                    overflow: "hidden"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                    sx: {
                                        mr: 2,
                                        color: "text.secondary"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                                        icon: icon,
                                        fontSize: icon === navSubItemIcon ? "0.625rem" : "1.375rem"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    ...menuTextTruncate && {
                                        noWrap: true
                                    },
                                    sx: {
                                        color: "text.secondary"
                                    },
                                    children: item.title
                                })
                            ]
                        }),
                        item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            label: item.badgeContent,
                            color: item.badgeColor || "primary",
                            sx: {
                                height: 20,
                                fontWeight: 500,
                                "& .MuiChip-label": {
                                    px: 1.5,
                                    textTransform: "capitalize"
                                }
                            }
                        }) : null
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const navigation_HorizontalNavLink = (HorizontalNavLink);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Fade/index.js
var Fade = __webpack_require__(66370);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(27561);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ClickAwayListener/index.js
var ClickAwayListener = __webpack_require__(78960);
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/cjs/index.js
var cjs = __webpack_require__(9113);
;// CONCATENATED MODULE: ./app/core/layouts/components/horizontal/navigation/HorizontalNavGroup.tsx
// ** React Imports


// ** Next Import

// ** MUI Imports










// ** Third Party Imports


// ** Icon Imports

// ** Theme Config Import

// ** Custom Components Imports



// ** Utils


// ** Styled Components
const HorizontalNavGroup_ListItem = (0,node_styles.styled)((ListItem_default()))(({ theme })=>({
        cursor: "pointer",
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
            background: theme.palette.action.hover
        }
    }));
const NavigationMenu = (0,node_styles.styled)((Paper_default()))(({ theme })=>({
        overflowY: "auto",
        padding: theme.spacing(2, 0),
        maxHeight: "calc(100vh - 13rem)",
        backgroundColor: theme.palette.background.paper,
        ...themeConfig["default"].menuTextTruncate ? {
            width: 250
        } : {
            minWidth: 250
        },
        "& > :not(:last-child)": {
            marginBottom: theme.spacing(1)
        },
        "&::-webkit-scrollbar": {
            width: 6
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: 20,
            background: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.mode === "light" ? "#B0ACB5" : "#575468", 0.6)
        },
        "&::-webkit-scrollbar-track": {
            borderRadius: 20,
            background: "transparent"
        },
        "& .MuiList-root": {
            paddingTop: 0,
            paddingBottom: 0
        },
        "& .menu-group.Mui-selected": {
            backgroundColor: theme.palette.action.hover
        }
    }));
const HorizontalNavGroup = (props)=>{
    // ** Props
    const { item, hasParent, settings } = props;
    // ** Hooks & Vars
    const theme = (0,node_styles.useTheme)();
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const currentURL = pathname;
    const { skin, direction } = settings;
    const { navSubItemIcon, menuTextTruncate, horizontalMenuToggle, horizontalMenuAnimation } = themeConfig["default"];
    const popperOffsetHorizontal = direction === "rtl" ? 16 : -16;
    const popperPlacement = direction === "rtl" ? "bottom-end" : "bottom-start";
    const popperPlacementSubMenu = direction === "rtl" ? "left-start" : "right-start";
    // ** States
    const [menuOpen, setMenuOpen] = (0,react_.useState)(false);
    const [popperElement, setPopperElement] = (0,react_.useState)(null);
    const [anchorEl, setAnchorEl] = (0,react_.useState)(null);
    const [referenceElement, setReferenceElement] = (0,react_.useState)(null);
    const { styles, attributes, update } = (0,cjs/* usePopper */.D4)(referenceElement, popperElement, {
        placement: hasParent ? popperPlacementSubMenu : popperPlacement,
        modifiers: [
            {
                enabled: true,
                name: "offset",
                options: {
                    offset: hasParent ? [
                        -8,
                        19
                    ] : [
                        popperOffsetHorizontal,
                        -2
                    ]
                }
            },
            {
                enabled: true,
                name: "flip",
                options: {
                    boundary: document.body
                }
            }
        ]
    });
    const handleGroupOpen = (event)=>{
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
        update ? update() : null;
    };
    const handleGroupClose = ()=>{
        setAnchorEl(null);
        setMenuOpen(false);
    };
    const handleMenuToggleOnClick = (event)=>{
        if (anchorEl) {
            handleGroupClose();
        } else {
            handleGroupOpen(event);
        }
    };
    (0,react_.useEffect)(()=>{
        handleGroupClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const icon = item.icon ? item.icon : navSubItemIcon;
    const toggleIcon = direction === "rtl" ? "tabler:chevron-left" : "tabler:chevron-right";
    const WrapperCondition = horizontalMenuToggle === "click";
    const MainWrapper = WrapperCondition ? (ClickAwayListener_default()) : "div";
    const ChildWrapper = WrapperCondition ? "div" : react_.Fragment;
    const AnimationWrapper = horizontalMenuAnimation ? Fade["default"] : react_.Fragment;
    const childMenuGroupStyles = ()=>{
        if (attributes && attributes.popper) {
            if (direction === "ltr") {
                if (attributes.popper["data-popper-placement"] === "right-start") {
                    return "left";
                }
                if (attributes.popper["data-popper-placement"] === "left-start") {
                    return "right";
                }
            } else {
                if (attributes.popper["data-popper-placement"] === "right-start") {
                    return "right";
                }
                if (attributes.popper["data-popper-placement"] === "left-start") {
                    return "left";
                }
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(acl_CanViewNavGroup, {
        navGroup: item,
        children: /*#__PURE__*/ jsx_runtime_.jsx(MainWrapper, {
            ...WrapperCondition ? {
                onClickAway: handleGroupClose
            } : {
                onMouseLeave: handleGroupClose
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(ChildWrapper, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                    component: "div",
                    sx: {
                        py: skin === "bordered" ? 2.375 : 2.5
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(HorizontalNavGroup_ListItem, {
                            "aria-haspopup": "true",
                            ...WrapperCondition ? {} : {
                                onMouseEnter: handleGroupOpen
                            },
                            className: clsx_default()("menu-group", {
                                "Mui-selected": hasActiveChild(item, currentURL)
                            }),
                            ...horizontalMenuToggle === "click" ? {
                                onClick: handleMenuToggleOnClick
                            } : {},
                            sx: {
                                ...menuOpen ? {
                                    backgroundColor: "action.hover"
                                } : {},
                                ...!hasParent ? {
                                    "&.Mui-selected": {
                                        boxShadow: `0px 2px 6px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.48)}`,
                                        background: `linear-gradient(72.47deg, ${theme.direction === "ltr" ? theme.palette.primary.main : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.7)} 22.16%, ${theme.direction === "ltr" ? (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.7) : theme.palette.primary.main} 76.47%)`,
                                        "& .MuiTypography-root, & .MuiListItemIcon-root, & svg": {
                                            color: "common.white"
                                        }
                                    }
                                } : {
                                    mx: 2,
                                    width: `calc(100% - ${theme.spacing(2 * 2)})`
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                sx: {
                                    gap: 2,
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                },
                                ref: setReferenceElement,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            ...menuTextTruncate && {
                                                overflow: "hidden"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                sx: {
                                                    mr: 2,
                                                    color: menuOpen ? "text.primary" : "text.secondary"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                                                    icon: icon,
                                                    fontSize: icon === navSubItemIcon ? "0.625rem" : "1.375rem"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                ...menuTextTruncate && {
                                                    noWrap: true
                                                },
                                                sx: {
                                                    color: menuOpen ? "text.primary" : "text.secondary"
                                                },
                                                children: item.title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            color: menuOpen ? "text.secondary" : "text.disabled"
                                        },
                                        children: [
                                            item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                                label: item.badgeContent,
                                                color: item.badgeColor || "primary",
                                                sx: {
                                                    mr: 1.5,
                                                    height: 20,
                                                    fontWeight: 500,
                                                    "& .MuiChip-label": {
                                                        px: 1.5,
                                                        textTransform: "capitalize"
                                                    }
                                                }
                                            }) : null,
                                            /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
                                                icon: hasParent ? toggleIcon : "tabler:chevron-down",
                                                fontSize: "1.125rem"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(AnimationWrapper, {
                            ...horizontalMenuAnimation && {
                                in: menuOpen,
                                timeout: {
                                    exit: 300,
                                    enter: 400
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
                                style: styles.popper,
                                ref: setPopperElement,
                                ...attributes.popper,
                                sx: {
                                    zIndex: theme.zIndex.appBar,
                                    ...!horizontalMenuAnimation && {
                                        display: menuOpen ? "block" : "none"
                                    },
                                    pl: childMenuGroupStyles() === "left" ? skin === "bordered" ? 1.5 : 1.25 : 0,
                                    pr: childMenuGroupStyles() === "right" ? skin === "bordered" ? 1.5 : 1.25 : 0,
                                    ...hasParent ? {
                                        position: "fixed !important"
                                    } : {
                                        pt: skin === "bordered" ? 5.25 : 5.5
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavigationMenu, {
                                    sx: {
                                        ...hasParent ? {
                                            overflowY: "auto",
                                            overflowX: "visible",
                                            maxHeight: "calc(100vh - 21rem)"
                                        } : {},
                                        ...skin === "bordered" ? {
                                            boxShadow: 0,
                                            border: `1px solid ${theme.palette.divider}`
                                        } : {
                                            boxShadow: 4
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_HorizontalNavItems, {
                                        ...props,
                                        hasParent: true,
                                        horizontalNavItems: item.children
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const navigation_HorizontalNavGroup = (HorizontalNavGroup);

;// CONCATENATED MODULE: ./app/core/layouts/components/horizontal/navigation/HorizontalNavItems.tsx
// ** Types


// ** Custom Navigation Components


const resolveComponent = (item)=>{
    if (item.children) return navigation_HorizontalNavGroup;
    return navigation_HorizontalNavLink;
};
const HorizontalNavItems = (props)=>{
    const RenderMenuItems = props.horizontalNavItems?.map((item, index)=>{
        const TagName = resolveComponent(item);
        return /*#__PURE__*/ (0,react_.createElement)(TagName, {
            ...props,
            key: index,
            item: item
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: RenderMenuItems
    });
};
/* harmony default export */ const navigation_HorizontalNavItems = (HorizontalNavItems);

;// CONCATENATED MODULE: ./app/core/layouts/components/horizontal/navigation/index.tsx
// ** MUI Imports


// ** Config Import

// ** Menu Components

const navigation_Navigation = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
        className: "menu-content",
        sx: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            "& > *": {
                "&:not(:last-child)": {
                    mr: 1
                },
                ...themeConfig["default"].menuTextTruncate && {
                    maxWidth: 200
                }
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_HorizontalNavItems, {
            ...props
        })
    });
};
/* harmony default export */ const horizontal_navigation = (navigation_Navigation);

;// CONCATENATED MODULE: ./app/core/layouts/components/horizontal/app-bar-content/index.tsx
// ** Next Import


// ** MUI Imports



// ** Theme Config Import

const app_bar_content_LinkStyled = (0,node_styles.styled)((link_default()))(({ theme })=>({
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        marginRight: theme.spacing(8)
    }));
const AppBarContent = (props)=>{
    // ** Props
    const { appBarContent: userAppBarContent, appBarBranding: userAppBarBranding } = props;
    // ** Hooks
    const theme = (0,node_styles.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
        sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        children: [
            userAppBarBranding ? userAppBarBranding(props) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(app_bar_content_LinkStyled, {
                href: "/",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        width: 32,
                        height: 22,
                        viewBox: "0 0 32 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                fill: theme.palette.primary.main,
                                d: "M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#161616",
                                opacity: 0.06,
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#161616",
                                opacity: 0.06,
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                fill: theme.palette.primary.main,
                                d: "M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            ml: 2.5,
                            fontWeight: 600,
                            lineHeight: "24px",
                            fontSize: "1.375rem !important"
                        },
                        children: themeConfig["default"].templateName
                    })
                ]
            }),
            userAppBarContent ? userAppBarContent(props) : null
        ]
    });
};
/* harmony default export */ const app_bar_content = (AppBarContent);

;// CONCATENATED MODULE: ./app/core/layouts/HorizontalLayout.tsx
// ** MUI Imports






// ** Icon Imports

// ** Theme Config Import

// ** Components




// ** Util Import

const HorizontalLayoutWrapper = (0,node_styles.styled)("div")({
    height: "100%",
    display: "flex",
    ...themeConfig["default"].horizontalMenuAnimation && {
        overflow: "clip"
    }
});
const HorizontalLayout_MainContentWrapper = (0,node_styles.styled)(Box/* default */.Z)({
    flexGrow: 1,
    minWidth: 0,
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
});
const HorizontalLayout_Toolbar = (0,node_styles.styled)((Toolbar_default()))(({ theme })=>({
        width: "100%",
        padding: `${theme.spacing(0, 6)} !important`,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(4)
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    }));
const HorizontalLayout_ContentWrapper = (0,node_styles.styled)("main")(({ theme })=>({
        flexGrow: 1,
        width: "100%",
        padding: theme.spacing(6),
        transition: "padding .25s ease-in-out",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    }));
const HorizontalLayout = (props)=>{
    // ** Props
    const { hidden, children, settings, scrollToTop, footerProps, saveSettings, contentHeightFixed, horizontalLayoutProps } = props;
    // ** Vars
    const { skin, appBar, navHidden, appBarBlur, contentWidth } = settings;
    const appBarProps = horizontalLayoutProps?.appBar?.componentProps;
    const userNavMenuContent = horizontalLayoutProps?.navMenu?.content;
    let userAppBarStyle = {};
    if (appBarProps && appBarProps.sx) {
        userAppBarStyle = appBarProps.sx;
    }
    const userAppBarProps = Object.assign({}, appBarProps);
    delete userAppBarProps.sx;
    return /*#__PURE__*/ jsx_runtime_.jsx(HorizontalLayoutWrapper, {
        className: "layout-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HorizontalLayout_MainContentWrapper, {
            className: "layout-content-wrapper",
            sx: {
                ...contentHeightFixed && {
                    maxHeight: "100vh"
                }
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AppBar_default()), {
                    color: "default",
                    elevation: skin === "bordered" ? 0 : 4,
                    className: "layout-navbar-and-nav-container",
                    position: appBar === "fixed" ? "sticky" : "static",
                    sx: {
                        alignItems: "center",
                        color: "text.primary",
                        justifyContent: "center",
                        ...appBar === "static" && {
                            zIndex: 13
                        },
                        transition: "border-bottom 0.2s ease-in-out",
                        ...appBarBlur && {
                            backdropFilter: "blur(6px)"
                        },
                        backgroundColor: (theme)=>(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.paper, appBarBlur ? 0.95 : 1),
                        ...skin === "bordered" && {
                            borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                        },
                        ...userAppBarStyle
                    },
                    ...userAppBarProps,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
                            className: "layout-navbar",
                            sx: {
                                width: "100%",
                                ...navHidden ? {} : {
                                    borderBottom: (theme)=>`1px solid ${theme.palette.divider}`
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HorizontalLayout_Toolbar, {
                                className: "navbar-content-container",
                                sx: {
                                    mx: "auto",
                                    ...contentWidth === "boxed" && {
                                        "@media (min-width:1440px)": {
                                            maxWidth: 1440
                                        }
                                    },
                                    minHeight: (theme)=>`${theme.mixins.toolbar.minHeight - 1}px !important`
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(app_bar_content, {
                                    ...props,
                                    hidden: hidden,
                                    settings: settings,
                                    saveSettings: saveSettings,
                                    appBarContent: horizontalLayoutProps?.appBar?.content,
                                    appBarBranding: horizontalLayoutProps?.appBar?.branding
                                })
                            })
                        }),
                        navHidden ? null : /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
                            className: "layout-horizontal-nav",
                            sx: {
                                width: "100%",
                                ...horizontalLayoutProps?.navMenu?.sx
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HorizontalLayout_Toolbar, {
                                className: "horizontal-nav-content-container",
                                sx: {
                                    mx: "auto",
                                    ...contentWidth === "boxed" && {
                                        "@media (min-width:1440px)": {
                                            maxWidth: 1440
                                        }
                                    },
                                    minHeight: (theme)=>`${theme.mixins.toolbar.minHeight - 4 - (skin === "bordered" ? 1 : 0)}px !important`
                                },
                                children: userNavMenuContent && userNavMenuContent(props) || /*#__PURE__*/ jsx_runtime_.jsx(horizontal_navigation, {
                                    ...props,
                                    horizontalNavItems: horizontalLayoutProps.navMenu?.navItems
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HorizontalLayout_ContentWrapper, {
                    className: "layout-page-content",
                    sx: {
                        ...contentHeightFixed && {
                            display: "flex",
                            overflow: "hidden"
                        },
                        ...contentWidth === "boxed" && {
                            mx: "auto",
                            "@media (min-width:1440px)": {
                                maxWidth: 1440
                            },
                            "@media (min-width:1200px)": {
                                maxWidth: "100%"
                            }
                        }
                    },
                    children: children
                }),
                themeConfig["default"].disableCustomizer || hidden ? null : /*#__PURE__*/ jsx_runtime_.jsx(customizer, {}),
                scrollToTop ? scrollToTop(props) : /*#__PURE__*/ jsx_runtime_.jsx(scroll_to_top, {
                    className: "mui-fixed",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                        color: "primary",
                        size: "small",
                        "aria-label": "scroll back to top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
                            icon: "tabler:arrow-up"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layouts_HorizontalLayout = (HorizontalLayout);

;// CONCATENATED MODULE: ./app/core/layouts/Layout.tsx
// ** React Import


// ** Layout Components


const Layout = (props)=>{
    // ** Props
    const { hidden, children, settings, saveSettings } = props;
    // ** Ref
    const isCollapsed = (0,react_.useRef)(settings.navCollapsed);
    (0,react_.useEffect)(()=>{
        if (hidden) {
            if (settings.navCollapsed) {
                saveSettings({
                    ...settings,
                    navCollapsed: false,
                    layout: "vertical"
                });
                isCollapsed.current = true;
            }
        } else {
            if (isCollapsed.current) {
                saveSettings({
                    ...settings,
                    navCollapsed: true,
                    layout: settings.lastLayout
                });
                isCollapsed.current = false;
            } else {
                if (settings.lastLayout !== settings.layout) {
                    saveSettings({
                        ...settings,
                        layout: settings.lastLayout
                    });
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        hidden
    ]);
    if (settings.layout === "horizontal") {
        return /*#__PURE__*/ jsx_runtime_.jsx(layouts_HorizontalLayout, {
            ...props,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(layouts_VerticalLayout, {
        ...props,
        children: children
    });
};
/* harmony default export */ const layouts_Layout = (Layout);

;// CONCATENATED MODULE: ./app/navigation/vertical/index.ts
// ** Type import
const navigation_vertical_navigation = ()=>{
    return [
        {
            title: "Practice",
            icon: "tabler:brand-tabler",
            path: "/practice"
        },
        {
            title: "Words",
            icon: "tabler:file",
            path: "/words"
        }
    ];
};
/* harmony default export */ const vertical = (navigation_vertical_navigation);

;// CONCATENATED MODULE: ./app/navigation/horizontal/index.ts
// ** Type import
const navigation_horizontal_navigation = ()=>{
    return [
        {
            icon: "tabler:smart-home",
            title: "Dashboards",
            children: [
                {
                    icon: "tabler:chart-pie-2",
                    title: "Analytics",
                    path: "/dashboards/analytics"
                },
                {
                    icon: "tabler:device-analytics",
                    title: "CRM",
                    path: "/dashboards/crm"
                },
                {
                    icon: "tabler:shopping-cart",
                    title: "eCommerce",
                    path: "/dashboards/ecommerce"
                }
            ]
        },
        {
            icon: "tabler:layout-grid-add",
            title: "Apps",
            children: [
                {
                    title: "Email",
                    icon: "tabler:mail",
                    path: "/apps/email"
                },
                {
                    title: "Chat",
                    icon: "tabler:messages",
                    path: "/apps/chat"
                },
                {
                    title: "Calendar",
                    icon: "tabler:calendar",
                    path: "/apps/calendar"
                },
                {
                    title: "Invoice",
                    icon: "tabler:file-dollar",
                    children: [
                        {
                            title: "List",
                            path: "/apps/invoice/list"
                        },
                        {
                            title: "Preview",
                            path: "/apps/invoice/preview"
                        },
                        {
                            title: "Edit",
                            path: "/apps/invoice/edit"
                        },
                        {
                            title: "Add",
                            path: "/apps/invoice/add"
                        }
                    ]
                },
                {
                    title: "User",
                    icon: "tabler:user",
                    children: [
                        {
                            title: "List",
                            path: "/apps/user/list"
                        },
                        {
                            title: "View",
                            children: [
                                {
                                    title: "Account",
                                    path: "/apps/user/view/account"
                                },
                                {
                                    title: "Security",
                                    path: "/apps/user/view/security"
                                },
                                {
                                    title: "Billing & Plans",
                                    path: "/apps/user/view/billing-plan"
                                },
                                {
                                    title: "Notifications",
                                    path: "/apps/user/view/notification"
                                },
                                {
                                    title: "Connection",
                                    path: "/apps/user/view/connection"
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "Roles & Permissions",
                    icon: "tabler:settings",
                    children: [
                        {
                            title: "Roles",
                            path: "/apps/roles"
                        },
                        {
                            title: "Permissions",
                            path: "/apps/permissions"
                        }
                    ]
                }
            ]
        },
        {
            icon: "tabler:color-swatch",
            title: "UI",
            children: [
                {
                    title: "Typography",
                    icon: "tabler:typography",
                    path: "/ui/typography"
                },
                {
                    title: "Icons",
                    path: "/ui/icons",
                    icon: "tabler:brand-tabler"
                },
                {
                    title: "Cards",
                    icon: "tabler:id",
                    children: [
                        {
                            title: "Basic",
                            path: "/ui/cards/basic"
                        },
                        {
                            title: "Advanced",
                            path: "/ui/cards/advanced"
                        },
                        {
                            title: "Statistics",
                            path: "/ui/cards/statistics"
                        },
                        {
                            title: "Widgets",
                            path: "/ui/cards/widgets"
                        },
                        {
                            title: "Actions",
                            path: "/ui/cards/actions"
                        }
                    ]
                },
                {
                    title: "Components",
                    icon: "tabler:archive",
                    children: [
                        {
                            title: "Accordion",
                            path: "/components/accordion"
                        },
                        {
                            title: "Alerts",
                            path: "/components/alerts"
                        },
                        {
                            title: "Avatars",
                            path: "/components/avatars"
                        },
                        {
                            title: "Badges",
                            path: "/components/badges"
                        },
                        {
                            title: "Buttons",
                            path: "/components/buttons"
                        },
                        {
                            title: "Button Group",
                            path: "/components/button-group"
                        },
                        {
                            title: "Chips",
                            path: "/components/chips"
                        },
                        {
                            title: "Dialogs",
                            path: "/components/dialogs"
                        },
                        {
                            title: "List",
                            path: "/components/list"
                        },
                        {
                            title: "Menu",
                            path: "/components/menu"
                        },
                        {
                            title: "Pagination",
                            path: "/components/pagination"
                        },
                        {
                            title: "Ratings",
                            path: "/components/ratings"
                        },
                        {
                            title: "Snackbar",
                            path: "/components/snackbar"
                        },
                        {
                            title: "Swiper",
                            path: "/components/swiper"
                        },
                        {
                            title: "Tabs",
                            path: "/components/tabs"
                        },
                        {
                            title: "Timeline",
                            path: "/components/timeline"
                        },
                        {
                            title: "Toasts",
                            path: "/components/toast"
                        },
                        {
                            title: "Tree View",
                            path: "/components/tree-view"
                        },
                        {
                            title: "More",
                            path: "/components/more"
                        }
                    ]
                }
            ]
        },
        {
            icon: "tabler:file",
            title: "Pages",
            children: [
                {
                    title: "User Profile",
                    icon: "tabler:user-circle",
                    children: [
                        {
                            title: "Profile",
                            path: "/pages/user-profile/profile"
                        },
                        {
                            title: "Teams",
                            path: "/pages/user-profile/teams"
                        },
                        {
                            title: "Projects",
                            path: "/pages/user-profile/projects"
                        },
                        {
                            title: "Connections",
                            path: "/pages/user-profile/connections"
                        }
                    ]
                },
                {
                    icon: "tabler:settings",
                    title: "Account Settings",
                    children: [
                        {
                            title: "Account",
                            path: "/pages/account-settings/account"
                        },
                        {
                            title: "Security",
                            path: "/pages/account-settings/security"
                        },
                        {
                            title: "Billing",
                            path: "/pages/account-settings/billing"
                        },
                        {
                            title: "Notifications",
                            path: "/pages/account-settings/notifications"
                        },
                        {
                            title: "Connections",
                            path: "/pages/account-settings/connections"
                        }
                    ]
                },
                {
                    title: "FAQ",
                    path: "/pages/faq",
                    icon: "tabler:help"
                },
                {
                    title: "Help Center",
                    icon: "tabler:help",
                    path: "/pages/help-center"
                },
                {
                    title: "Pricing",
                    icon: "tabler:currency-dollar",
                    path: "/pages/pricing"
                },
                {
                    title: "Miscellaneous",
                    icon: "tabler:3d-cube-sphere",
                    children: [
                        {
                            openInNewTab: true,
                            title: "Coming Soon",
                            path: "/pages/misc/coming-soon"
                        },
                        {
                            openInNewTab: true,
                            title: "Under Maintenance",
                            path: "/pages/misc/under-maintenance"
                        },
                        {
                            openInNewTab: true,
                            title: "Page Not Found - 404",
                            path: "/pages/misc/404-not-found"
                        },
                        {
                            openInNewTab: true,
                            title: "Not Authorized - 401",
                            path: "/pages/misc/401-not-authorized"
                        },
                        {
                            openInNewTab: true,
                            title: "Server Error - 500",
                            path: "/pages/misc/500-server-error"
                        }
                    ]
                },
                {
                    title: "Auth Pages",
                    icon: "tabler:lock",
                    children: [
                        {
                            title: "Login",
                            children: [
                                {
                                    openInNewTab: true,
                                    title: "Login v1",
                                    path: "/pages/auth/login-v1"
                                },
                                {
                                    openInNewTab: true,
                                    title: "Login v2",
                                    path: "/pages/auth/login-v2"
                                },
                                {
                                    openInNewTab: true,
                                    title: "Login With AppBar",
                                    path: "/pages/auth/login-with-appbar"
                                }
                            ]
                        },
                        {
                            title: "Register",
                            children: [
                                {
                                    openInNewTab: true,
                                    title: "Register v1",
                                    path: "/pages/auth/register-v1"
                                },
                                {
                                    openInNewTab: true,
                                    title: "Register v2",
                                    path: "/pages/auth/register-v2"
                                },
                                {
                                    openInNewTab: true,
                                    title: "Register Multi-Steps",
                                    path: "/pages/auth/register-multi-steps"
                                }
                            ]
                        },
                        {
                            title: "Verify Email",
                            children: [
                                {
                                    openInNewTab: true,
                                    title: "Verify Email v1",
                                    path: "/pages/auth/verify-email-v1"
                                },
                                {
                                    openInNewTab: true,
                                    title: "Verify Email v2",
                                    path: "/pages/auth/verify-email-v2"
                                }
                            ]
                        },
                        {
                            title: "Forgot Password",
                            children: [
                                {
                                    openInNewTab: true,
                                    title: "Forgot Password v1",
                                    path: "/pages/auth/forgot-password-v1"
                                },
                                {
                                    openInNewTab: true,
                                    title: "Forgot Password v2",
                                    path: "/pages/auth/forgot-password-v2"
                                }
                            ]
                        },
                        {
                            title: "Reset Password",
                            children: [
                                {
                                    openInNewTab: true,
                                    title: "Reset Password v1",
                                    path: "/pages/auth/reset-password-v1"
                                },
                                {
                                    openInNewTab: true,
                                    title: "Reset Password v2",
                                    path: "/pages/auth/reset-password-v2"
                                }
                            ]
                        },
                        {
                            title: "Two Steps",
                            children: [
                                {
                                    openInNewTab: true,
                                    title: "Two Steps v1",
                                    path: "/pages/auth/two-steps-v1"
                                },
                                {
                                    openInNewTab: true,
                                    title: "Two Steps v2",
                                    path: "/pages/auth/two-steps-v2"
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "Wizard Examples",
                    icon: "tabler:forms",
                    children: [
                        {
                            title: "Checkout",
                            path: "/pages/wizard-examples/checkout"
                        },
                        {
                            title: "Property Listing",
                            path: "/pages/wizard-examples/property-listing"
                        },
                        {
                            title: "Create Deal",
                            path: "/pages/wizard-examples/create-deal"
                        }
                    ]
                },
                {
                    icon: "tabler:square",
                    title: "Dialog Examples",
                    path: "/pages/dialog-examples"
                }
            ]
        },
        {
            title: "Forms & Tables",
            icon: "tabler:checkbox",
            children: [
                {
                    title: "Form Elements",
                    icon: "tabler:toggle-left",
                    children: [
                        {
                            title: "Text Field",
                            path: "/forms/form-elements/text-field"
                        },
                        {
                            title: "Select",
                            path: "/forms/form-elements/select"
                        },
                        {
                            title: "Checkbox",
                            path: "/forms/form-elements/checkbox"
                        },
                        {
                            title: "Radio",
                            path: "/forms/form-elements/radio"
                        },
                        {
                            title: "Custom Inputs",
                            path: "/forms/form-elements/custom-inputs"
                        },
                        {
                            title: "Textarea",
                            path: "/forms/form-elements/textarea"
                        },
                        {
                            title: "Autocomplete",
                            path: "/forms/form-elements/autocomplete"
                        },
                        {
                            title: "Date Pickers",
                            path: "/forms/form-elements/pickers"
                        },
                        {
                            title: "Switch",
                            path: "/forms/form-elements/switch"
                        },
                        {
                            title: "File Uploader",
                            path: "/forms/form-elements/file-uploader"
                        },
                        {
                            title: "Editor",
                            path: "/forms/form-elements/editor"
                        },
                        {
                            title: "Slider",
                            path: "/forms/form-elements/slider"
                        },
                        {
                            title: "Input Mask",
                            path: "/forms/form-elements/input-mask"
                        }
                    ]
                },
                {
                    icon: "tabler:layout-navbar",
                    title: "Form Layouts",
                    path: "/forms/form-layouts"
                },
                {
                    title: "Form Validation",
                    path: "/forms/form-validation",
                    icon: "tabler:checkbox"
                },
                {
                    title: "Form Wizard",
                    path: "/forms/form-wizard",
                    icon: "tabler:text-wrap-disabled"
                },
                {
                    title: "Table",
                    icon: "tabler:table",
                    path: "/tables/mui"
                },
                {
                    title: "Mui DataGrid",
                    icon: "tabler:layout-grid",
                    path: "/tables/data-grid"
                }
            ]
        },
        {
            title: "Charts",
            icon: "tabler:chart-pie",
            children: [
                {
                    title: "Apex",
                    icon: "tabler:chart-sankey",
                    path: "/charts/apex-charts"
                },
                {
                    title: "Recharts",
                    icon: "tabler:chart-ppf",
                    path: "/charts/recharts"
                },
                {
                    title: "ChartJS",
                    path: "/charts/chartjs",
                    icon: "tabler:chart-line"
                }
            ]
        },
        {
            title: "Others",
            icon: "tabler:dots",
            children: [
                {
                    path: "/acl",
                    action: "read",
                    subject: "acl-page",
                    icon: "tabler:shield",
                    title: "Access Control"
                },
                {
                    title: "Menu Levels",
                    icon: "tabler:menu-2",
                    children: [
                        {
                            title: "Menu Level 2.1"
                        },
                        {
                            title: "Menu Level 2.2",
                            children: [
                                {
                                    title: "Menu Level 3.1"
                                },
                                {
                                    title: "Menu Level 3.2"
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "Disabled Menu",
                    icon: "tabler:eye-off",
                    disabled: true
                },
                {
                    title: "Raise Support",
                    icon: "tabler:lifebuoy",
                    externalLink: true,
                    openInNewTab: true,
                    path: "https://pixinvent.ticksy.com/"
                },
                {
                    title: "Documentation",
                    icon: "tabler:file-text",
                    externalLink: true,
                    openInNewTab: true,
                    path: "https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/"
                }
            ]
        }
    ];
};
/* harmony default export */ const horizontal = (navigation_horizontal_navigation);

;// CONCATENATED MODULE: ./app/core/layouts/components/shared-components/ModeToggler.tsx
// ** MUI Imports


// ** Icon Imports

const ModeToggler = (props)=>{
    // ** Props
    const { settings, saveSettings } = props;
    const handleModeChange = (mode)=>{
        saveSettings({
            ...settings,
            mode: mode
        });
    };
    const handleModeToggle = ()=>{
        if (settings.mode === "light") {
            handleModeChange("dark");
        } else {
            handleModeChange("light");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        color: "inherit",
        "aria-haspopup": "true",
        onClick: handleModeToggle,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
            fontSize: "1.5rem",
            icon: settings.mode === "dark" ? "tabler:sun" : "tabler:moon-stars"
        })
    });
};
/* harmony default export */ const shared_components_ModeToggler = (ModeToggler);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Menu/index.js
var node_Menu = __webpack_require__(76650);
var Menu_default = /*#__PURE__*/__webpack_require__.n(node_Menu);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(181);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var node_Avatar = __webpack_require__(17296);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(node_Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(62360);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
;// CONCATENATED MODULE: ./app/core/layouts/components/shared-components/UserDropdown.tsx
// ** React Imports


// ** Next Import

// ** MUI Imports








// ** Icon Imports

// ** Context

// ** Styled Components
const BadgeContentSpan = (0,node_styles.styled)("span")(({ theme })=>({
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: theme.palette.success.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    }));
const MenuItemStyled = (0,node_styles.styled)((MenuItem_default()))(({ theme })=>({
        "&:hover .MuiBox-root, &:hover .MuiBox-root svg": {
            color: theme.palette.primary.main
        }
    }));
const UserDropdown = (props)=>{
    // ** Props
    const { settings } = props;
    // ** States
    const [anchorEl, setAnchorEl] = (0,react_.useState)(null);
    // ** Hooks
    const router = (0,navigation.useRouter)();
    const { user, logout } = (0,useAuth/* useAuth */.a)();
    // ** Vars
    const { direction } = settings;
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = (url)=>{
        if (url) {
            router.push(url);
        }
        setAnchorEl(null);
    };
    const styles = {
        px: 4,
        py: 1.75,
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: "text.primary",
        textDecoration: "none",
        "& svg": {
            mr: 2.5,
            color: "text.primary"
        }
    };
    const handleLogout = ()=>{
        logout();
        handleDropdownClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                overlap: "circular",
                onClick: handleDropdownOpen,
                sx: {
                    ml: 2,
                    cursor: "pointer"
                },
                badgeContent: /*#__PURE__*/ jsx_runtime_.jsx(BadgeContentSpan, {}),
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                    alt: "John Doe",
                    onClick: handleDropdownOpen,
                    sx: {
                        width: 40,
                        height: 40
                    },
                    src: "/images/avatars/1.png"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: ()=>handleDropdownClose(),
                sx: {
                    "& .MuiMenu-paper": {
                        width: 230,
                        mt: 4.5
                    }
                },
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: direction === "ltr" ? "right" : "left"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: direction === "ltr" ? "right" : "left"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
                        sx: {
                            py: 1.75,
                            px: 6
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                                    overlap: "circular",
                                    badgeContent: /*#__PURE__*/ jsx_runtime_.jsx(BadgeContentSpan, {}),
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "right"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        alt: "John Doe",
                                        src: "/images/avatars/1.png",
                                        sx: {
                                            width: "2.5rem",
                                            height: "2.5rem"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
                                    sx: {
                                        display: "flex",
                                        ml: 2.5,
                                        alignItems: "flex-start",
                                        flexDirection: "column"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        sx: {
                                            fontWeight: 500
                                        },
                                        children: user?.userName
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            my: (theme)=>`${theme.spacing(2)} !important`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            my: (theme)=>`${theme.spacing(2)} !important`
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItemStyled, {
                        onClick: handleLogout,
                        sx: {
                            py: 2,
                            "& svg": {
                                mr: 2,
                                fontSize: "1.375rem"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
                                icon: "tabler:logout"
                            }),
                            "Logout"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const shared_components_UserDropdown = (UserDropdown);

;// CONCATENATED MODULE: ./app/layouts/components/vertical/AppBarContent.tsx
// ** MUI Imports



// ** Icon Imports

// ** Components


const AppBarContent_AppBarContent = (props)=>{
    // ** Props
    const { hidden, settings, saveSettings, toggleNavVisibility } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
        sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
                className: "actions-left",
                sx: {
                    mr: 2,
                    display: "flex",
                    alignItems: "center"
                },
                children: hidden && !settings.navHidden ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    color: "inherit",
                    sx: {
                        ml: -2.75
                    },
                    onClick: toggleNavVisibility,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_icon/* default */.Z, {
                        fontSize: "1.5rem",
                        icon: "tabler:menu-2"
                    })
                }) : null
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                className: "actions-right",
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(shared_components_ModeToggler, {
                        settings: settings,
                        saveSettings: saveSettings
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(shared_components_UserDropdown, {
                        settings: settings
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const vertical_AppBarContent = (AppBarContent_AppBarContent);

;// CONCATENATED MODULE: ./app/layouts/components/horizontal/AppBarContent.tsx
// ** MUI Imports


// ** Components


const horizontal_AppBarContent_AppBarContent = (props)=>{
    // ** Props
    const { hidden, settings, saveSettings } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
        sx: {
            display: "flex",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(shared_components_ModeToggler, {
                settings: settings,
                saveSettings: saveSettings
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(shared_components_UserDropdown, {
                settings: settings
            })
        ]
    });
};
/* harmony default export */ const horizontal_AppBarContent = (horizontal_AppBarContent_AppBarContent);

;// CONCATENATED MODULE: ./app/layouts/UserLayout.tsx
// ** React Imports


// ** Layout Imports
// !Do not remove this Layout import

// ** Navigation Imports


// ** Component Import
// Uncomment the below line (according to the layout type) when using server-side menu
// import ServerSideVerticalNavItems from './components/vertical/ServerSideNavItems'
// import ServerSideHorizontalNavItems from './components/horizontal/ServerSideNavItems'


// ** Hook Import

const UserLayout = ({ children, contentHeightFixed })=>{
    // ** Hooks
    const { settings, saveSettings } = (0,useSettings/* useSettings */.r)();
    // ** Vars for server side navigation
    // const { menuItems: verticalMenuItems } = ServerSideVerticalNavItems()
    // const { menuItems: horizontalMenuItems } = ServerSideHorizontalNavItems()
    /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/material-ui/react-use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */ const hidden = (0,useMediaQuery/* default */.Z)((theme)=>theme.breakpoints.down("lg"));
    if (hidden && settings.layout === "horizontal") {
        settings.layout = "vertical";
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(layouts_Layout, {
        hidden: hidden,
        settings: settings,
        saveSettings: saveSettings,
        contentHeightFixed: contentHeightFixed,
        verticalLayoutProps: {
            navMenu: {
                navItems: vertical()
            },
            appBar: {
                content: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(vertical_AppBarContent, {
                        hidden: hidden,
                        settings: settings,
                        saveSettings: saveSettings,
                        toggleNavVisibility: props.toggleNavVisibility
                    })
            }
        },
        ...settings.layout === "horizontal" && {
            horizontalLayoutProps: {
                navMenu: {
                    navItems: horizontal()
                },
                appBar: {
                    content: ()=>/*#__PURE__*/ jsx_runtime_.jsx(horizontal_AppBarContent, {
                            hidden: hidden,
                            settings: settings,
                            saveSettings: saveSettings
                        })
                }
            }
        },
        children: children
    });
};
/* harmony default export */ const layouts_UserLayout = (UserLayout);

;// CONCATENATED MODULE: ./app/core/styles/libs/react-hot-toast/index.ts
// ** MUI Imports


// ** Hook Import

const ReactHotToast = (0,node_styles.styled)(Box/* default */.Z)(({ theme })=>{
    // ** Hook & Var
    const { settings } = (0,useSettings/* useSettings */.r)();
    const { layout, navHidden } = settings;
    return {
        "& > div": {
            left: `${theme.spacing(6)} !important`,
            right: `${theme.spacing(6)} !important`,
            bottom: `${theme.spacing(6)} !important`,
            zIndex: `${theme.zIndex.drawer - 1} !important`,
            top: layout === "horizontal" && !navHidden ? "139px !important" : "75px !important"
        },
        "& .react-hot-toast": {
            fontWeight: 400,
            fontSize: "1rem",
            letterSpacing: "0.14px",
            boxShadow: theme.shadows[4],
            color: theme.palette.text.primary,
            borderRadius: theme.shape.borderRadius,
            background: theme.palette.background.paper,
            "&>:first-of-type:not([role])>:first-of-type": {
                width: 14,
                height: 14
            }
        }
    };
});
/* harmony default export */ const react_hot_toast = (ReactHotToast);

// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(33518);
// EXTERNAL MODULE: ./app/context/WordsContext.tsx
var WordsContext = __webpack_require__(43383);
;// CONCATENATED MODULE: ./app/(app)/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


// import "../core/@fake-db";














const clientSideEmotionCache = createEmotionCache();
const Guard = ({ children, authGuard, guestGuard })=>{
    if (guestGuard) {
        return /*#__PURE__*/ jsx_runtime_.jsx(auth_GuestGuard, {
            fallback: /*#__PURE__*/ jsx_runtime_.jsx(spinner/* default */.Z, {}),
            children: children
        });
    } else if (!guestGuard && !authGuard) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(auth_AuthGuard, {
            fallback: /*#__PURE__*/ jsx_runtime_.jsx(spinner/* default */.Z, {}),
            children: children
        });
    }
};
function RootLayout(props) {
    const { children, emotionCache = clientSideEmotionCache } = props;
    const contentHeightFixed = false;
    const getLayout = (page)=>/*#__PURE__*/ jsx_runtime_.jsx(layouts_UserLayout, {
            contentHeightFixed: contentHeightFixed,
            children: page
        });
    const setConfig = undefined;
    const authGuard = true;
    const guestGuard = false;
    const aclAbilities = defaultACLObj;
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(emotion_element_6bdfffb2_esm.C, {
                value: emotionCache,
                children: /*#__PURE__*/ jsx_runtime_.jsx(AuthContext/* AuthProvider */.H, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(WordsContext/* WordsProvider */.i, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(settingsContext/* SettingsProvider */.mu, {
                            pageSettings: setConfig,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(settingsContext/* SettingsConsumer */.ix, {
                                children: ({ settings })=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(theme_ThemeComponent, {
                                        settings: settings,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(window_wrapper, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Guard, {
                                                    authGuard: authGuard,
                                                    guestGuard: guestGuard,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(auth_AclGuard, {
                                                        aclAbilities: aclAbilities,
                                                        guestGuard: guestGuard,
                                                        children: getLayout(children)
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_hot_toast, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(dist/* Toaster */.x7, {
                                                    position: settings.toastPosition,
                                                    toastOptions: {
                                                        className: "react-hot-toast"
                                                    }
                                                })
                                            })
                                        ]
                                    });
                                }
                            })
                        })
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 43383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ WordsContext),
/* harmony export */   i: () => (/* binding */ WordsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ WordsContext,WordsProvider auto */ 
// ** React Imports

// ** Defaults
const defaultProvider = {
    words: [],
    setWords: ()=>{}
};
const WordsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultProvider);
const WordsProvider = ({ children })=>{
    // ** States
    const [words, setWords] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const values = {
        words,
        setWords
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WordsContext.Provider, {
        value: values,
        children: children
    });
};



/***/ }),

/***/ 16281:
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
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20286);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
// ** MUI Imports




const FallbackSpinner = ({ sx })=>{
    // ** Hook
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        sx: {
            height: "100vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            ...sx
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                width: 82,
                height: 56.375,
                viewBox: "0 0 32 22",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: theme.palette.primary.main,
                        d: "M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "#161616",
                        opacity: 0.06,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "#161616",
                        opacity: 0.06,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: theme.palette.primary.main,
                        d: "M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default()), {
                disableShrink: true,
                sx: {
                    mt: 6
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallbackSpinner);


/***/ }),

/***/ 46296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ hexToRGBA)
/* harmony export */ });
/**
 ** Hex color to RGBA color
 */ const hexToRGBA = (hexCode, opacity)=>{
    let hex = hexCode.replace("#", "");
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};


/***/ }),

/***/ 80059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/doom/Workspace/spaced-repetition/app/(app)/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;