/**
 * Recursion | Memoization | DP | Sorting | Math.
 * Time O(n^2) | Space O(n^3)
 * https://leetcode.com/problems/largest-divisible-subset/
 * This code won't be accepted. The test cases will pass but it won't be submitted.
 * Convert the same code in Python3 and it will be submitted.
 *  
 * Math Note: This is kind of like GCD. That is why we don't have to check the entire array everytime.
 * Dry run it with this input: [1,2,4,8]
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    
    nums.sort((a,b) => a-b);

    const cache = new Map();

    const dfs = (i,pre) => {
        const hash = `${pre}-${i}`;

        if(cache.has(hash)) return [...cache.get(hash)];
        if(i === nums.length) return [];

        if(pre === -1 || !(nums[i]%nums[pre])) {
            const res1 = dfs(i+1, i);
            res1.push(nums[i]);
            const res2 = dfs(i+1, pre);

            if(res1.length > res2.length) {
                cache.set(hash, [...res1]);
                return res1;
            };

            cache.set(hash, [...res2]);
            return res2;
        }

        const res2 = dfs(i+1, pre);
        cache.set(hash, [...res2]);
        return res2;
    }

    return dfs(0,-1);
};

/**
 * Brute Force |  Recursion | Backtracking
 * Time O(n*2^n) | Space O(n)
 * https://leetcode.com/problems/largest-divisible-subset/
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset1 = function(nums) {
    
    const isPairValid = (num, arr) =>  {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i]%num && num%arr[i]) return false;
        }
        return  true;
    }

    const dfs = (i,arr) => {
        if(i === nums.length) return [...arr];

        if(isPairValid(nums[i], arr)) {
            arr.push(nums[i]);
            const res1 = dfs(i+1, arr);
            arr.pop();
            const res2 = dfs(i+1, arr);

            if(res1.length > res2.length) return res1;
            return res2;
        }

        return dfs(i+1, arr);
    }

    return dfs(0,[]);

};