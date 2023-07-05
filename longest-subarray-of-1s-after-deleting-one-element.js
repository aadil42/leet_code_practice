/**
 * Sliding Window
 * 
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */

const checkIfAll1 = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        if(!nums[i]) return false;
    }
    return true;
}

const longestSubarray = function(nums) {

    if(checkIfAll1(nums)) return nums.length - 1;
    
    let max = 0;
    let current = 0;
    let zeroCount = 0;

    let left = 0;
    let right = 0

    while(right < nums.length) {
        if(nums[right] === 0) zeroCount += 1;

        while(zeroCount > 1 && left < right) {
            if(nums[left] === 0) zeroCount -= 1;
            if(nums[left] === 1) current -= 1;
            left++;
        }

        if(nums[right] === 1) {
            current += 1;
            max = Math.max(current, max);
        }
        right++;
    }

    return max;
};



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

const longestSubarray1 = function(nums) {

    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        max = Math.max(max, getSubArray(i, nums));
    }
    return max;
};

