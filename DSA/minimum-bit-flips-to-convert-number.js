/**
 * Bit Manupilation
 * Time O(log(n)) | Space O(1)
 * https://leetcode.com/problems/minimum-bit-flips-to-convert-number
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let minFlips = 0;
    while(start > 0 || goal > 0) {
        if(( (start&1) ^ (goal&1) ) & 1) minFlips++;
        start >>= 1;
        goal >>= 1;
    }
    return minFlips;
};