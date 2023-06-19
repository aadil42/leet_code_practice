/**
 * Linear Search
 * https://leetcode.com/problems/find-the-highest-altitude/
 * Time O(n) | Space O(1)
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
    let heightesAltitude = 0;
    
    let currentAltitude = 0;
    for(let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        heightesAltitude = Math.max(heightesAltitude, currentAltitude);
    }
    return heightesAltitude;
};