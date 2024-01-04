/**
 * Hashing 
 * Time O(n) | Space O(n);
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {

    const frequency = {};
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        frequency[num] = (frequency[num] && frequency[num] + 1) || 1;
    }

    let minOperations = 0;
    for(const key in frequency) {
        if(frequency[key] === 1) return -1;
        minOperations += Math.ceil(frequency[key]/3);
    }
    
    return minOperations;
};

/**
 * DP | Recursion
 * Time O(n*log(n)) | Space(n)
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
 * @param {number[]} nums
 * @return {number}
 */
var minOperations1 = function(nums) {

    nums = nums.sort((a,b) => a-b); // this will make it n*log(n)
    
    const cache = new Map();
    
    const dfs = (i) => {

        if(cache.has(i)) return cache.get(i);

        if(i >= nums.length) return 0;
        if(nums[i+1] !== nums[i]) return Infinity;
        
        // when we have two choices. (we can either delete 2 or 3 numbers)
        if(nums[i+1] === nums[i] && nums[i+2] === nums[i]) {
            const result = Math.min(1 + dfs(i+2), 1 + dfs(i+3));
            cache.set(i, result);
            return result;
        }

        // when we only have one choice. (we can only delete 2 numbers)
        const result =  1 + dfs(i+2);
        cache.set(i, result);
        return result;
    }

    const result = dfs(0);
    if(result === Infinity) return -1;
    return result;
};


/**
 * Sorting | Array | Two Pointers
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
 * @param {number[]} nums
 * @return {number}
 */
var minOperations2 = function(nums) {
    
    nums = nums.sort((a,b) => a-b);

    let left = 0;
    let right = 0;

    let minOperation = 0;
    while(right < nums.length) {
        while(nums[left] === nums[right]) {
            right++;
        }
        if(right-left === 1) return -1;
        minOperation += Math.ceil((right-left)/3);
        left = right;
    }
    return minOperation;
};