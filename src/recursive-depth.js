const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    var self = this;
    if (Array.isArray(arr) && arr.length == 0) return 1;
    return Array.isArray(arr) ? 1 + Math.max(...arr.map(d => self.calculateDepth(d))) : 0;
  }
};