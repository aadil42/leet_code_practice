/**
 * 
 * Chebyshev Distance, This problem is fairly easy. You can do it with BFS I guess, but it'll give you TLE with the given constraint. it's 10^9
 * Time O(1) | Space O(1)
 * https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time
 * 
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    
    if(sx === fx && sy === fy && t === 1) return false;
    return t >= Math.max(Math.abs(sx-fx), Math.abs(sy-fy));
};