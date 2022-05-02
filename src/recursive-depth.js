const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let depth = 1
    function Depth(arr) {
      if (arr.filter(el => Array.isArray(el)).length > 0) {
        depth++
        Depth(arr.flat().filter(el => Array.isArray(el)))
        }
      return depth
    }
    return Depth(array)
  }
}

module.exports = {
  DepthCalculator
};
