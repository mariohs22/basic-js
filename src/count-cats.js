const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((counter, arr) => counter + arr.filter(x => x == "^^").length, 0);
};
