/**
 * Time O(log(n)) | Space O(1)
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    if(n === 0) return 1;
    if(x === 0) return 0;

      function dfs(n) {
            if(n === 0) return 1;   
            let res = dfs(Math.floor(n/2));
            res = res * res;
            if(n%2) res = res*x;
            return res;
    }

    const result = dfs(Math.abs(n));
    if(n<0) return 1/result;
    return result;
};