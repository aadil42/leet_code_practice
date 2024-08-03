/**
 * Check if all the elements are thre in both array then there exists a way for sure
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    
    const targetFreq = {}
    for(let i = 0; i < target.length; i++) {
        const num = target[i];
        targetFreq[num] = (targetFreq[num] && targetFreq[num]  + 1) || 1;
    }

    const arrFreq = {}; 
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        arrFreq[num] = (arrFreq[num] && arrFreq[num]  + 1) || 1;
    }

    console.log(arrFreq, targetFreq);
    for(let key in targetFreq) {
        if(arrFreq[key] !== targetFreq[key]) return false;
    }

    return true;
};