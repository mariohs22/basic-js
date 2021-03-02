const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Not implemented');
  
  let m = date.getMonth();
  if (m == 11 || m < 2) return 'winter';
  else if (m < 5) return 'spring';
  else if (m < 8) return 'summer';
  else return 'fall';
};
