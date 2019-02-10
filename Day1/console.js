"use strict";
exports.__esModule = true;
function read() {
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    return new Promise(function (resolve, reject) {
        rl.on('line', function (line) {
            resolve(line);
            rl.close();
        });
    });
}
exports.read = read;
