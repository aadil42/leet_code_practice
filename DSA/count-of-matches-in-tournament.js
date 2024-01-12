/**
 * Iteration(logarithmically) 
 * Time O(log(n)) | Space O(1);
 * https://leetcode.com/problems/count-of-matches-in-tournament/
 * 
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    
    let totalMatches = 0;
    while(n > 1) {
        totalMatches += Math.floor(n/2);
        n = Math.ceil(n/2);
    }
    return totalMatches;
};