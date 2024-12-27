/**
 * Greedy 
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/best-sightseeing-pair/
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    
    let max = 0;
    let currMaxElement = values[0] - 1;
    for(let i = 1; i < values.length; i++) {
        max = Math.max(max, values[i] + currMaxElement);
        currMaxElement = Math.max(currMaxElement-1, values[i]-1);
    }
    return max;
};