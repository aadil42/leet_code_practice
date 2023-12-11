/**
 * Math | iteration
 * Time O(n) | Space O(1);
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array
 * 
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    
    const targetCount = Math.floor(arr.length/4);
    let currentCount = 1;
    let i = 1;
    while(i < arr.length + 1) {
        if(currentCount > targetCount) return arr[i-1];
        if(arr[i-1] === arr[i]) currentCount++;
        if(arr[i-1] !== arr[i]) currentCount = 1;
        i++;
    }
};