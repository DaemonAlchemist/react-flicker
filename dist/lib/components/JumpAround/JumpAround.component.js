"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var util_1 = require("../../util/util");
exports.JumpAround = function (props) {
    var Component = props.Component;
    var curValues = util_1.useJumpAround(props);
    return React.createElement(Component, { values: curValues }, props.children);
};
