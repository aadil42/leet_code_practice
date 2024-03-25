/**
 * Array | flipping switchs
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/find-all-duplicates-in-an-array\
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    
    const twiceArrResult = [];
    
    for(let i = 0; i < nums.length; i++) {
        const valIdx = Math.abs(nums[i]) - 1;
        if(nums[valIdx] < 0) twiceArrResult.push(Math.abs(nums[i]));
        nums[valIdx] *= -1;
    }

    return twiceArrResult;
};

/**
 * Array | Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates1 = function(nums) {
    
    const seen = new Set();
    const twiceNumsArr = [];
    for(let i = 0; i < nums.length; i++) {
        if(seen.has(nums[i])) twiceNumsArr.push(nums[i]); 
        seen.add(nums[i]);
    }
    return twiceNumsArr;
};