import { NotImplementedError } from '../extensions/index.js';

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
export default function dateSample(sampleActivity) {
  let a = sampleActivity;
  let b = parseFloat(a);
  if (b > MODERN_ACTIVITY) return false;
  if (b === 0 || b < 0) return false;
  if (typeof(a) !== 'string') return false;
  if (isNaN(b)) return false;
  return Math.ceil(Math.log((MODERN_ACTIVITY / b)) / (0.693 / HALF_LIFE_PERIOD));    
}
