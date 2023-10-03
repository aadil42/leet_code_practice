/**
 * HashSet
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/number-of-good-pairs
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    
    const hashSet = {};
    let totalGoodPairs = 0;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(hashSet[num]) {
            totalGoodPairs += hashSet[num];
            hashSet[num] += 1;
            continue;
        }
        hashSet[num] = 1;
    }
    return totalGoodPairs;
};

/**
 * Brute Force
 * Time O(n^2) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs1 = function(nums) {
    
    let goodPairs = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]) goodPairs++;
        }
    }

    return goodPairs;
};