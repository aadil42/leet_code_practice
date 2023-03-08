/**
 * Recursion
 * 
 * Time O(n) | Space O(n)
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    

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