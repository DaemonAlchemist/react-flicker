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
require("./Flicker.less");
var useInterval = require("react-useinterval");
exports.Flicker = function (props) {
    var _a = __assign({
        opacity: [0.0, 1.0],
        smoothChange: [-0.5, 0.5],
        jumpChange: [1.0, 1.0],
        jumpChangeFreq: 0.05,
        interval: 50,
        count: 1,
        Component: function (props) { return React.createElement("span", { style: { opacity: props.opacities[0] } }, props.children); }
    }, props), opacity = _a.opacity, smoothChange = _a.smoothChange, jumpChange = _a.jumpChange, jumpChangeFreq = _a.jumpChangeFreq, interval = _a.interval, Component = _a.Component, count = _a.count;
    var _b = React.useState(new Array(count).fill(1.0)), curOpacities = _b[0], setOpacities = _b[1];
    var range = function (min, max) { return Math.random() * (max - min) + min; };
    var changeOpacity = function () {
        setOpacities(curOpacities.map(function (curOpacity) {
            var shouldJump = Math.random() < jumpChangeFreq;
            var change = !shouldJump ? range(smoothChange[0], smoothChange[1]) : range(jumpChange[0], jumpChange[1]);
            var newOpacity = curOpacity + change;
            return Math.min(opacity[1], Math.max(opacity[0], newOpacity));
        }));
    };
    useInterval(changeOpacity, interval);
    return React.createElement(Component, { opacities: curOpacities, children: props.children });
};
