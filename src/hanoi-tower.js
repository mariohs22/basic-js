const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2**disksNumber - 1;
  let seconds = Math.floor(60*60/turnsSpeed * turns);
  return {turns: turns, seconds: seconds};
};
