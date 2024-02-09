/**
 * Brute Force |  Recursion | Backtracking
 * Time O(n*2^n) | Space O(n)
 * https://leetcode.com/problems/largest-divisible-subset/
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    
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