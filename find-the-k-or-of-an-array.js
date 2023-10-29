/**
 * Bit manipulation | Iteration
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/find-the-k-or-of-an-array/ 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(nums, k) {

    let total = 0;

    for(let i = 0; i < 32; i++) {
        currentTotal = 0;
        for(let  j = 0; j < nums.length; j++) {
            const checker = 1 << i;
            if((nums[j] & checker) === checker) {
                currentTotal++;
            }
        }
        if(currentTotal >= k) total += 2**i
    }    
    
    return total;
};