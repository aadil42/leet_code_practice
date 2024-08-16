/**
 * Time O(n*log(n)) | Space O(n)
 * Greedy | Array | Sorting
 * https://leetcode.com/problems/maximum-distance-in-arrays/
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {

    let max = 0;

    const maxs = arrays.map((arr,idx) => [Math.max(...arr), idx]);
    const mins = arrays.map((arr,idx) => [Math.min(...arr), idx]);

    maxs.sort((a,b) => a[0]-b[0]);
    mins.sort((a,b) => a[0]-b[0]);

    let left = 0;
    let right = arrays.length - 1;

    if(maxs[right][1] === mins[left][1]) {
        const diff1 = (maxs[right - 1][0] - mins[left][0]) || 0;
        const diff2 = maxs[right][0] - mins[left+1][0] || 0;
        max = Math.max(diff1, diff2);
        return max;
    }
    return maxs[right][0] - mins[left][0];
};