const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity == undefined || typeof(sampleActivity) != 'string') return false;
  let t = parseInt(Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD)));
  return (t > 0 && typeof(t) == 'number')? t : false;
};
