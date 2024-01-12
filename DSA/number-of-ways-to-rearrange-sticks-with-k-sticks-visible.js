/**
 * Dynamic programming/ memoization
 * 
 * Time O(n*k) | Space O(n)
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function rearrangeSticks(n, k) {
    const memo = {};
    const mod = 10**9 + 7;
    const dfs = (n,k) => {
        const hash = n+"#"+k;
        if(memo[hash]) return memo[hash];
        if(n === k) return 1;
        if(n < 0 || k < 0) return 0;
   
       memo[hash] = (dfs(n-1,k-1) % mod) + ((n-1)*dfs(n-1,k) % mod);
       return memo[hash] % mod; 
    }
       return dfs(n,k);   
   }