/**
 * 
 * Recursion
 * https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/
 * 
 * Time O(n^2) | Space O(n)
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    const factCache = new Map();
    // this will calculate the factorial
    const fact = (n) => {
        if(n<2)
            return 1n;
        if(factCache.has(n))
            return factCache.get(n);
        
        var result = BigInt(n) * fact(n - 1n);
        factCache.set(n, result);
        return result;
    }

    // this will calculate the cobmination
    const  comb = (n, k) => {
        n = BigInt(n);
        k = BigInt(k);
        if(n < 2)
            return 1n;
        return fact(n)/fact(n-k)/fact(k);
    }

    const dfs = (nums) => {
        if(nums.length < 3) return 1n;

        const root = nums[0];
        const left = nums.filter((num) => num < root);
        const right = nums.filter((num) => num >  root);

        return BigInt(comb(left.length + right.length, left.length) *  dfs(left) * dfs(right));     
    }   

    const result = dfs(nums) - 1n;
    return (result % 1_000_000_007n);

};