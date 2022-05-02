const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(array) {
  let res = []
  let state = true
  if (!Array.isArray(array)) throw new Error("'arr' parameter must be an instance of the Array!");
  const arr = [...array];
  arr.forEach((el,idx) => {
    if (el === '--double-prev') res.push(res[res.length-1])
    else if (el === '--double-next') res.push(arr[idx+1])
    else if (el === '--discard-prev') res.pop()
    else if (el === '--discard-next') state = false
    else {if (state) {res.push(el)} else {state = true}}
  })
  return res
}

module.exports = {
  transform
};
