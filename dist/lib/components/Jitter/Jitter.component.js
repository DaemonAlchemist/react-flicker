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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ts_functional_1 = require("ts-functional");
var util_1 = require("../../util/util");
exports.Jitter = function (props) {
    var curValues = util_1.useJumpAround(__assign(__assign({
        limits: [-3, 3],
        jumpChange: [-6.0, 6.0],
        jumpChangeFreq: 0.1,
    }, props), { count: props.count ? props.count * 2 : 2 }));
    var _a = React.useState(ts_functional_1.range(1, props.count || 1)), arr = _a[0], setArr = _a[1];
    React.useEffect(function () {
        setArr(ts_functional_1.range(1, props.count || 1));
    }, [props.count]);
    return React.createElement("span", { style: { position: "relative" } },
        arr.map(function (_, index) {
            return React.createElement("span", { key: index, style: {
                    position: "absolute",
                    left: curValues[index * 2] + "px",
                    top: curValues[index * 2 + 1] + "px",
                    whiteSpace: "nowrap",
                } }, props.children);
        }),
        React.createElement("span", { style: { visibility: "hidden" } }, props.children));
};
