"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@mantine/core");
var MainLayout_1 = require("@/components/Layout/MainLayout");
var mantine_1 = require("@/config/mantine");
var MyGlobalStyles = function () { return (<core_1.Global styles={function (theme) { return ({
        '*, *::before, *::after': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0
        },
        body: __assign(__assign({}, theme.fn.fontStyles()), { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white, color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[6], lineHeight: theme.lineHeight }),
        a: {
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
                opacity: 0.6
            }
        }
    }); }}/>); };
var MyApp = function (_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    var _b = (0, react_1.useState)(false), isMounted = _b[0], setIsMounted = _b[1];
    var _c = (0, react_1.useState)('light'), colorScheme = _c[0], setColorScheme = _c[1];
    var toggleColorScheme = function (value) {
        return setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    };
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    if (!isMounted)
        return null;
    return (<core_1.ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <core_1.MantineProvider theme={__assign(__assign({}, mantine_1.themeConfigs), { colorScheme: colorScheme })}>
        <MainLayout_1.MainLayout>
          <MyGlobalStyles />
          <Component {...pageProps}/>
        </MainLayout_1.MainLayout>
      </core_1.MantineProvider>
    </core_1.ColorSchemeProvider>);
};
exports["default"] = MyApp;
