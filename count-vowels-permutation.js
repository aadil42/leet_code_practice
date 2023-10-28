/**
 * Recursion
 * Time O(n*5) | Space O(n*5) Which is basically O(n)
 * The reason it's multiplied with 5 is because we only have 5 vowels.
 * so at most we will have 5 * n values in our cache. 
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {

    const mod = 10**9 + 7;

    const cache = new Map();

    const dfs = (n, pre) => {

        const hash = `${n}-${pre}`;

        if(n === 0) return 1;
        if(cache.has(hash)) return cache.get(hash);

        let totalWays = 0;

        if(pre === 'a') {
            totalWays += dfs(n-1, 'e') % mod;
        }
        if(pre === 'e') {
            totalWays += dfs(n-1, 'a') % mod;
            totalWays += dfs(n-1, 'i') % mod;
        }
        if(pre === 'i') {
            totalWays += dfs(n-1, 'a') % mod;
            totalWays += dfs(n-1, 'e') % mod;
            totalWays += dfs(n-1, 'o') % mod;
            totalWays += dfs(n-1, 'u') % mod;
        }
        if(pre === 'o') {
            totalWays += dfs(n-1, 'i') % mod;
            totalWays += dfs(n-1, 'u') % mod;
        }
        if(pre === 'u') {
            totalWays += dfs(n-1, 'a') % mod;
        }

        if(pre === '') {
            totalWays += dfs(n-1, 'a') % mod;
            totalWays += dfs(n-1, 'e') % mod;
            totalWays += dfs(n-1, 'i') % mod;
            totalWays += dfs(n-1, 'o') % mod;
            totalWays += dfs(n-1, 'u') % mod;
        }

        cache.set(hash, totalWays%mod);
        return totalWays%mod;
    }

    return dfs(n, '')%mod;
};


/**
 * Recursion
 * 
 * Time O(n) | Space O(n)
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation1 = function(n) {
    

    const vowels = ['a','e','i','o','u'];
    cache = {};
    function dfs(i, char) {
        const key = i+"-"+char;
        if(cache[key]) return cache[key];
        if(i === 0) return 1;
        if(i === n) {
        //    const result = vowels.reduce((acc, vowel) => {
        //        console.log(acc);
        //       acc + dfs(i-1, vowel);
        //     }, 0);
        //     console.log(result);
        //     return result;
        return (dfs(i-1, 'a') + dfs(i-1, 'e') + dfs(i-1, 'i') + dfs(i-1, 'o') + dfs(i-1, 'u'))  % (10**9 + 7);
        }

        if(char === 'a') {
            cache[key] = dfs(i-1, 'e') % (10**9 + 7);
            return cache[key];
        }

        if(char === 'e') {
            cache[key] = (dfs(i-1, 'a') + dfs(i-1, 'i'))  % (10**9 + 7);
            return cache[key];
        }

        if(char === 'i') {
            cache[key] = (dfs(i-1, 'a') + dfs(i-1, 'e') + dfs(i-1, 'o') + dfs(i-1, 'u')) % (10**9 + 7);
            return cache[key];
        }

        if(char === 'o') {
            cache[key] = (dfs(i-1, 'i') + dfs(i-1, 'u'))  % (10**9 + 7);
            return cache[key];
        }

        if(char === 'u') {
            cache[key] = (dfs(i-1, 'a')) % (10**9 + 7);
            return cache[key];
        }
    }

     return dfs(n) ;
};