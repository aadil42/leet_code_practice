/**
 * 
 * Brute force O(n^2) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
const getSubArray = (ignoreEl, nums) => {

    let max = 0;
    let current = 0;
    for(let i = 0; i < nums.length; i++) {
        if(i === ignoreEl) continue;
        if(nums[i]) {
            current++;
            max = Math.max(max, current); 
            continue;
        }
        current = 0;
    }
    return max;
}

const longestSubarray = function(nums) {

    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        max = Math.max(max, getSubArray(i, nums));
    }
    return max;
};

