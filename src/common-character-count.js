const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;
  let result = 0;
  const dictionary = new Set(s1);

  for (let char of dictionary) {
    let regexp = new RegExp(`${char}`, 'g');
    const commonArrS1 = s1.match(regexp);
    const commonArrS2 = s2.match(regexp) || [];
    if (commonArrS2.length > 0) result += Math.min(commonArrS1.length, commonArrS2.length)
  }
  return result
}

module.exports = {
  getCommonCharacterCount
};
