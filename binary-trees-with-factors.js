/**
 * 
 * DP | Recursion
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/binary-trees-with-factors
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {

    arr = arr.sort((a,b) => a-b);
    const set = new Set(arr);
    const cache = {}
    const mod = 10**9 + 7;

    for(let i = 0; i < arr.length;  i++) {
        cache[arr[i]] = 1; 
    }

    for(i of arr) {
        for(j of arr) {
            if(j > Math.sqrt(i)) break;
            if(i%j === 0 && set.has(i/j)) {
                cache[i] += j === i/j ? cache[j]*cache[j] : cache[j]*cache[i/j]*2;
                cache[i] %= mod;
            }
        }
    }
    return Object.keys(cache).reduce((acc, key) => {
        return (acc+cache[key])%mod;
    }, 0)

};