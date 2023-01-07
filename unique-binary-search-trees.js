/**
 * recursion
 * Time O(n^2) | Space O(n)
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    

    function countRecursion(n,map) {
        if(n in map) {
            return map[n];
        }
        if(n <= 1) return 1;
        let total = 0;
        for(let i = 1; i <= n; i++) {
            total += countRecursion(i-1,map) * countRecursion(n-i,map);
        }
        map[n] = total;
        return total;
    }

    return countRecursion(n,{});
};