/**
 * arr
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/three-consecutive-odds
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    
    if(arr.length === 1) return false;
    if(arr.length === 2) return false;

    for(let i = 2; i < arr.length; i++) {
        if(arr[i]%2 && arr[i-1]%2 && arr[i-2]%2) return true;
    }

    return false;
};