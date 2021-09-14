import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = String(n).split('');
   let result = [];
   for (let i = 0; i < arr.length; i++) {
     let newArr = [...arr];
     newArr.splice(i,1);
     result.push( newArr );
   } return findMax(result);
   
  
  function findMax(arr)	{
    let newArr = arr.map(item=>parseInt(item.join('')));
   return Math.max(...newArr);
 }
 }