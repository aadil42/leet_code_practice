/**
 * Recursion | DP
 * https://leetcode.com/problems/coin-change-ii/
 * m = number of coins | n = amount
 * Time O(m*n) | Space O(m*n);
 * Neater way
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {

    const cache = new Map();
    const dfs = (i, sum) => {
        const hash = `${i}-${sum}`;
        if(cache.has(hash)) return cache.get(hash);
        if(sum === amount) return 1;
        if(i >= coins.length || sum > amount) return 0;
        
        const result = dfs(i, sum + coins[i]) + dfs(i + 1, sum);
        cache.set(hash, result);
        return result;
    }

    return dfs(0, 0);
};

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change1 = function(amount, coins) {
    
    // when doing the caching with just {} it gives TLE error.
    // but when doing with 2d array it passes. Yes and also if you do it with Map it also passes. 
    const cache = new Array(coins.length).fill(-1).map(() => new Array(amount + 1).fill(-1));
    function dfs(index, left) {
        if(left < 0) return 0;
        if(left === 0) return 1;

        const key = index + '-' + left;
        if(cache[index][left] !== -1) return cache[index][left];

        let currentMax = 0;        
        for(let i = index; i < coins.length; i++) {
            currentMax += dfs(i, left - coins[i]);
        }
        cache[index][left] = currentMax;
        return cache[index][left];
    }

    return dfs(0,amount);
    
};