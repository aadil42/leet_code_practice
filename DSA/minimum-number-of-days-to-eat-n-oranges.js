/**
 * Brute Force
 * DP | Recursion | Memoization
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/
 * 
 * @param {number} n
 * @return {number}
 */
var minDays = function(n) {

    const cache = new Map();

    const dfs = (n) => {

        if(cache.has(n)) return cache.get(n);

        if(n <= 0) return 0;

        if(n%2 === 0 && n%3 === 0) {
            const result = Math.min(1 + dfs(n - (n/2)), 1 + dfs(n - (2*(n/3))), 1 + dfs(n-1)); 
            cache.set(n, result); 
            return result;
        }

        if(n%2 === 0) {
            const result = Math.min(1 + dfs(n - (n/2)), 1 + dfs(n-1));
            cache.set(n, result);
            return result;
        }  

        if(n%3 === 0) {
            const result =  Math.min(1+dfs(n - (2*(n/3))), 1 + dfs(n-1));
            cache.set(n, result);
            return result;
        }

        const result = 1 + dfs(n-1);
        cache.set(n, result);
        return result;
    }


    return dfs(n);
};

// Don't quite understand the question yet. But I do understand the code and answer. check it out again after some time.
/**
 * @param {number} n
 * @return {number}
 */
var minDays1 = function(n) {
    
    const hash = new Map();
    hash.set(0,0);
    hash.set(1,1);
    function dfs(days) {
        if(hash.has(days)) return hash.get(days);
        const temp = 1 + (days%2) + dfs(Math.floor(days/2));
        const temp1 = 1 + (days%3) + dfs(Math.floor(days/3));
        hash.set(days,Math.min(temp, temp1));
        return hash.get(days); 
    }

    return dfs(n);
};