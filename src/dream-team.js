const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let letters = members.reduce(
    (c, a) => c + ((typeof(a)=='string')?a.replace(/\s+/, '')[0].toUpperCase() : ''), 
    ''
  );
  return letters.split('').sort().join('');
};
