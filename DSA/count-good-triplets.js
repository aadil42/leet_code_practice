/**
 * brute Force 
 * Time O(n^3) | Space O(1)
 * https://leetcode.com/problems/count-good-triplets/
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {

    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
        for (let k = j+1; k < arr.length; k++) {
          const inum = arr[i];
          const jnum = arr[j];
          const knum = arr[k];
  
          if (Math.abs(inum - jnum) <= a && 
              Math.abs(jnum - knum) <= b &&
              Math.abs(inum - knum) <= c) count++;
        }
      }
    }
  
    return count;
};