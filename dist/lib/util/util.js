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
var useInterval = require("react-useinterval");
exports.useValueArray = function (count) { return React.useState(new Array(count).fill(1.0)); };
exports.range = function (min, max) { return Math.random() * (max - min) + min; };
exports.useJumpAround = function (props) {
    var defaults = {
        limits: [0.0, 1.0],
        smoothChange: [-0.5, 0.5],
        jumpChange: [-1.0, 1.0],
        jumpChangeFreq: 0.05,
        interval: 50,
        count: 1,
    };
    var _a = __assign(__assign({}, defaults), props), limits = _a.limits, smoothChange = _a.smoothChange, jumpChange = _a.jumpChange, jumpChangeFreq = _a.jumpChangeFreq, interval = _a.interval, count = _a.count;
    var _b = exports.useValueArray(count), curValues = _b[0], setValues = _b[1];
    React.useEffect(function () {
        changeValues();
    }, [props.count]);
    var changeValues = function () {
        setValues(curValues.map(function (curOpacity) {
            var shouldJump = Math.random() < jumpChangeFreq;
            var change = !shouldJump ? exports.range(smoothChange[0], smoothChange[1]) : exports.range(jumpChange[0], jumpChange[1]);
            var newOpacity = curOpacity + change;
            return Math.min(limits[1], Math.max(limits[0], newOpacity));
        }));
    };
    useInterval(changeValues, interval);
    return curValues;
};
