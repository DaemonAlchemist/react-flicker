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
exports.Blink = function (props) {
    var _a = __assign({
        offDuration: 250,
        onDuration: 750,
    }, props), onDuration = _a.onDuration, offDuration = _a.offDuration;
    var _b = React.useState(true), isVisible = _b[0], setIsVisible = _b[1];
    var hide = function () { setTimeout(function () { setIsVisible(false); show(); }, onDuration); };
    var show = function () { setTimeout(function () { setIsVisible(true); hide(); }, offDuration); };
    React.useEffect(hide, []);
    return React.createElement("span", { style: { visibility: !isVisible ? "hidden" : undefined } }, props.children);
};
