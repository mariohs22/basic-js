const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str+'';
  if (options === undefined) return str;
  if (options.addition === undefined) options.addition = '';
  if (options.repeatTimes === undefined) return str + options.addition;
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  let ad, r = '';
  for (let i = 1; i <= options.repeatTimes; i++){
    ad = '';
    if (options.additionRepeatTimes){
      for (let a = 1; a <= options.additionRepeatTimes; a++){
        ad += options.addition + options.additionSeparator;
      }
      ad = ad.substring(0, ad.length - options.additionSeparator.length);
    }else if (options.addition){
      ad = options.addition;
    }
    r += str + ad + options.separator;
  }
  return r.substring(0, r.length - options.separator.length);
};
  