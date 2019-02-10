"use strict";
exports.__esModule = true;
exports.regularDiscriminant = function (a, b, c) { return Math.pow(b, 2) - 4 * a * c; };
exports.extraDiscriminant = function (a, b, c) { return Math.pow((b / 2), 2) - a * c; }; //does not work
exports.root1 = function (a, d, b) { return (-b + (exports.squareRootOf(d))) / (2 * a); };
exports.root2 = function (a, d, b) { return (-b - (exports.squareRootOf(d))) / (2 * a); };
exports.singleRoot = function (a, b) { return -b / (2 * a); }; //not applicable
exports.depict = function (msg) { return console.log(msg); };
exports.depictErr = function (msg) { return console.error(msg); };
exports.squareRootOf = function (inbound) { return Math.sqrt(inbound); };
