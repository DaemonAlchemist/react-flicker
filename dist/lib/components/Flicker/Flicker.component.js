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
var JumpAround_component_1 = require("../JumpAround/JumpAround.component");
exports.Flicker = function (props) {
    var Component = function (p) { return React.createElement("span", { style: { opacity: p.values[0] } }, p.children); };
    return React.createElement(JumpAround_component_1.JumpAround, __assign({}, props, { Component: Component }), props.children);
};
