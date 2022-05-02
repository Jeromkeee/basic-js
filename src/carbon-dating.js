const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let log = 0.693;
  if (typeof sampleActivity !== 'string' ||
    +sampleActivity < 0 ||
    +sampleActivity === 0 ||
    isNaN(+sampleActivity)) {
    return false;
  } else {
    let k = log / HALF_LIFE_PERIOD;
    let activity = Math.log(MODERN_ACTIVITY / +sampleActivity);
    let t = Math.ceil(activity / k);
    return (t < 0) ? false : t;
  }
}

module.exports = {
  dateSample
};
