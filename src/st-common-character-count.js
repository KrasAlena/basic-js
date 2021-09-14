import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  const getStringMap = str => {
    const map = new Map();
    
    for(let char of str) {
      if(map.has(char)) {
        map.set(char, map.get(char) + 1);
      } else {
        map.set(char, 1);
      }
    }
    
    return map;
  };
    const map1 = getStringMap(s1);
    const map2 = getStringMap(s2);
    
    let commonCount = 0;
    
    for(let i of map1.keys()) {
      if(map2.has(i)) {
        commonCount += Math.min(map1.get(i), map2.get(i));
      }
    }
    
    return commonCount;
}