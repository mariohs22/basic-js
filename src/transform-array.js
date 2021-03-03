const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Not array');
  let r = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (i == 0 && /prev/.test(current)) continue;
		if (i == arr.length-1 && /next/.test(current)) continue;    

    if (current == '--discard-prev') r.pop();
    else if (current == '--discard-next') {r.push(undefined); i++;}
    else if (current == '--double-prev') r.push(r[r.length-1]);
    else if (current == '--double-next') r.push(arr[i+1]);
    else r.push(current);
  }
  return r.filter(x => x !== undefined);
};
