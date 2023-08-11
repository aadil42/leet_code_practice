/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    
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