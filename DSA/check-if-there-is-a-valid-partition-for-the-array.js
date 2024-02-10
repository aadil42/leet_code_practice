/**
 * Recursion | DP
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/
 * 
 * easy to understand and readable solution. 
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    
    const cache = new Map();
    const dfs = (i) => {

        if(cache.has(i)) return cache.get(i);

        if(i === nums.length) return true;
        if(i > nums.length) return false;

        let isValid = false;
        if(nums[i] === nums[i+1]) {
            isValid = dfs(i+2);
            if(isValid) {
                cache.set(i, true);
                return true;
            }
        }

        if(nums[i] === nums[i+1] && nums[i+1] === nums[i+2]) {
            isValid = dfs(i+3);
            if(isValid) {
                cache.set(i, true);
                return true;
            }
        }

        if(nums[i] + 1 === nums[i+1] && nums[i+1] + 1 === nums[i+2]) {
            isValid = dfs(i+3);
            if(isValid) {
                cache.set(i, true);
                return true;
            }
        }

        cache.set(i, false);
        return false;
    }

    return dfs(0);
};

/**
 * Recursion | DP
 * https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/
 * 
 * Time O(n) | Space O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition1 = function(nums) {
    
    const isValid = (start, end) => {
        if(end - start === 1) return nums[start] === nums[end];
        if(nums[start] + 1 === nums[start+1] && nums[start+1] + 1 === nums[start+2]) return true;
        if(nums[start] === nums[start+1] && nums[start+1] === nums[start+2]) return true;
        return false;
    }

    const cache = new Map();
    const dfs = (i) => {
        if(cache.has(i)) return cache.get(i);
        if(i >= nums.length) return true;

        let choice1 = false;
        let choice2 = false;
        if(isValid(i, i+1)) {
            choice1 = dfs(i+2);
        }
        if(isValid(i, i+2))  {
            choice2 = dfs(i+3);
        }

        cache.set(i, choice1 || choice2);
        return choice1 || choice2;
    }

    return dfs(0);
};