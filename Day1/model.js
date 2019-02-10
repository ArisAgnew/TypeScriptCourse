"use strict";
exports.__esModule = true;
var utilities_1 = require("./utilities");
var Parameter = /** @class */ (function () {
    function Parameter() {
        this.a = undefined;
        this.b = undefined;
        this.c = undefined;
        /*toSet: any = (entrance: any) => {
            if (isNaN(entrance) && typeof entrance === "number") {
                this.c = entrance;
            } else if (!isNaN(entrance) && typeof entrance !== "number") {
                this.c = +entrance;
            } else {
                depictErr("Something went wrong. Number awaited though.");
            }
        };*/
    }
    Object.defineProperty(Parameter.prototype, "A", {
        get: function () { return this.a; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "B", {
        get: function () { return this.b; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "C", {
        get: function () { return this.c; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "setA", {
        set: function (inbound) {
            typeof inbound === "number" && !isNaN(inbound)
                ? this.a = inbound
                : utilities_1.depictErr("Something went wrong. Number awaited though.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "setB", {
        set: function (inbound) {
            typeof inbound === "number" && !isNaN(inbound)
                ? this.b = inbound
                : utilities_1.depictErr("Something went wrong. Number awaited though.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "setC", {
        set: function (inbound) {
            typeof inbound === "number" && !isNaN(inbound)
                ? this.c = inbound
                : utilities_1.depictErr("Something went wrong. Number awaited though.");
        },
        enumerable: true,
        configurable: true
    });
    return Parameter;
}());
exports.Parameter = Parameter;
