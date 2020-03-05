"use strict";

module.exports = function (input, isDesc) {
    var output = {};
    var sortedKeys = isDesc ? Object.keys(input).sort().reverse() : Object.keys(input).sort();

    sortedKeys.forEach(function (key) {
        output[key] = input[key];
    });

    return output;
};
