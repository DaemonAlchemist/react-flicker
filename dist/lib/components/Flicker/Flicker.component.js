"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var util_1 = require("../../util/util");
require("./Flicker.less");
exports.Flicker = function (props) {
    var ComponentDefault = function (p) { return React.createElement("span", { style: { opacity: p.values[0] } }, p.children); };
    var Component = props.Component || ComponentDefault;
    var curValues = util_1.useJumpAround(props);
    return React.createElement(Component, { values: curValues, children: props.children });
};
