/**
 * DP Recursion
 * I kind of get the solution review it again.
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const count0and1 = (str) => {
        
        let zeros = 0;
        let ones = 0;

        for(let i = 0; i < str.length; i++) {
            if(str[i] === '0') zeros++;
            if(str[i] === '1') ones++;
        }

        return [zeros, ones];
    }

    const cache = {};
    const dfs = (i, m, n) => {
       const hash = i+'#'+m+'#'+n;
    //    if(m === 0 && n === 0) return 0;
    //    if(m < 0 || n < 0) return 0;
       if(i === strs.length) return 0;
       if(cache[hash]) return cache[hash];

        const [zeros, ones] = count0and1(strs[i]);
        cache[hash] = dfs(i+1, m, n);
       if(zeros <= m && ones <=n) {
            // cache[hash] = Math.max(dfs(i+1, m, n), dfs(i+1, m-zeros, n-ones) + 1);
            cache[hash] = Math.max(dfs(i+1, m-zeros, n-ones) + 1, cache[hash]);
       }
       return cache[hash];

    } 

    return dfs(0,m,n);

};