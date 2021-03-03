const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    var self = this;
    return arr.reduce(function(acc, current){
      if (Array.isArray(current)){
        return acc + self.calculateDepth(current);
      }else{
     //   return 0;
      }
    }, 1);
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};