/**
 * Boyer-Moore Algorightm
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let majorityEl = nums[0];
    let count = 1;
    
    let i = 1;
    while(i < nums.length) {
        if(nums[i] !== majorityEl && count === 1) {
            majorityEl = nums[i];
            count = 1;
            i++;
            continue;
        }

        if(nums[i] !== majorityEl && count > 1) {
            count--;
            i++;
            continue;
        }

        i++;
        count++;
    }

    return majorityEl;
};

/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/majority-element
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function(nums) {
    
    const occuranceOfElement = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(occuranceOfElement.has(nums[i])) {
            let occurance = occuranceOfElement.get(nums[i]);
            occuranceOfElement.set(nums[i], occurance+1);
        } else {
            occuranceOfElement.set(nums[i], 1);
        }
    }

    for(let [key,value] of occuranceOfElement) {
        if(value > nums.length / 2) return key;
    }

};