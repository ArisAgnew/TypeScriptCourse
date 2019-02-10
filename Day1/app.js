"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var console_1 = require("./console");
var model_1 = require("./model");
var utilities_1 = require("./utilities");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var param, even, d, _a, _b, _c, _d, _e, _f, r1, r2;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    param = new model_1.Parameter();
                    even = function (n) { return !(n % 2); };
                    d = undefined;
                    utilities_1.depict("Insert 'a': ");
                    _a = param;
                    _b = parseInt;
                    return [4 /*yield*/, console_1.read()];
                case 1:
                    _a.setA = _b.apply(void 0, [_g.sent()]);
                    utilities_1.depict("Insert 'b': ");
                    _c = param;
                    _d = parseInt;
                    return [4 /*yield*/, console_1.read()];
                case 2:
                    _c.setB = _d.apply(void 0, [_g.sent()]);
                    utilities_1.depict("Insert 'c': ");
                    _e = param;
                    _f = parseInt;
                    return [4 /*yield*/, console_1.read()];
                case 3:
                    _e.setC = _f.apply(void 0, [_g.sent()]);
                    utilities_1.depict("\nIt turns out the following equation: \n        +(" + param.A + "x^2) + (" + param.B + "x) + (" + param.C + ") = 0");
                    utilities_1.depict("\nComputed discriminant: " + (d = utilities_1.regularDiscriminant(param.A, param.B, param.C)));
                    r1 = utilities_1.root1(param.A, d, param.C);
                    r2 = utilities_1.root2(param.A, d, param.C);
                    if (param.A === 0) {
                        param.B === 0
                            ? param.C === 0
                                ? utilities_1.depict("\nEquation has infinity amount of solution.")
                                : utilities_1.depict("\nThere is no solution for this.")
                            : utilities_1.depict("\nEquation has the single solution and gets linear thereafter.");
                    }
                    else if (param.A !== 0 && d > 0) {
                        r1 !== r2
                            ? utilities_1.depict("\nEquation has two roots are different from each other.\n\t\n                First root equals to " + r1 + ",\n\t\n                Second root equals to " + r2)
                            : utilities_1.depictErr("\nSomething went wrong. Roots should be different");
                    }
                    else if ((param.A && param.B && param.C !== 0) && d === 0) {
                        r1 === r2
                            ? utilities_1.depict("\nEquation has two roots are equal to each other.\n\t\n                First and Second root equals to " + (r1 | r2))
                            : utilities_1.depictErr("\nSomething went wrong. Roots should be equal");
                    }
                    else {
                        utilities_1.depict("Equation has complex roots.");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
main();
