/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const hash = new Map();
    
    nums.forEach((num) => {
        const numCache = hash.get(num);
        if(numCache) {
            hash.set(num, numCache + 1);
        } else {
            hash.set(num, 1);
        }
    });
    
    const uniqueNums = new Set();
    
    nums.forEach((num) => {
        uniqueNums.add(num);
    });
    
    nums = [...uniqueNums];
    
    nums.sort((a,b) => {
        return a-b;
    });
    
    let earn1 = 0;
    let earn2 = 0;
    
    for(let i = 0; i < nums.length; i++) {
        const currentEarn = nums[i] * hash.get(nums[i]);
    
        if(nums[i] === nums[i-1] + 1) {
            const temp = earn2;
            earn2 = Math.max(earn2, currentEarn + earn1);
            earn1 = temp;
        } else {
            const temp = earn2;
            earn2 = currentEarn + earn2;
            earn1 = temp;
        }
    }
    
    return earn2;
    
    };

/**
 * Recursion | DP | Memoization
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/delete-and-earn/
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn1 = function(nums) {
    
    nums.sort((a,b) => a-b);

    const cache = new Map();

    const dfs = (i, pre) => {
        const hash = `${i}-${pre}`;

        if(cache.has(hash)) return cache.get(hash);

        if(i >= nums.length) return 0;

        while(pre !== -1 && (nums[pre] + 1 === nums[i]) ) {
            i++;
        }

        const result = Math.max( (nums[i] || 0) + dfs(i+1, i), dfs(i+1, pre));
        cache.set(hash, result); 
        return result
    }

    return dfs(0,-1);
};