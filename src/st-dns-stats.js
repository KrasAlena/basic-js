import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(arrayOfDNS){
	return convertToStat(countParsedValues(parseArray(arrayOfDNS)));
}

function parseArray(array){
	return array
    .map(item => item.split('.').reverse())
    .filter(item => item.length);
}

function countParsedValues(parsedValues){
	let result = {};
  
  for(let parsed of parsedValues){
  	for(let i = 0; i < parsed.length; i++){
      let key = parsed.slice(0, i+1).join('.');
      if(result[key]){
      	result[key] += 1;
      } else {
        result[key] = 1;
      }
    }
  }
  
  return result;
}

function convertToStat(stat){
  let result = {};
  for(let key in stat){
  	result['.' + key] = stat[key]
  }
  return result;
}
