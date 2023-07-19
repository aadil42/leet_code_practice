/**
 * Greedy | Sorting
 * https://leetcode.com/problems/non-overlapping-intervals/
 * 
 * Time O(n) | Space O(1)
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    
    intervals = intervals.sort((a, b) => a[0] - b[0]);

    let preEnd = intervals[0][1];
    let result = 0;

    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < preEnd) {
            result++;
            preEnd = Math.min(preEnd, intervals[i][1]);
            continue;
        }
        preEnd = intervals[i][1];
    }
    return result;
};

intervals = [[1,2],[1,2],[1,2]];
console.log(eraseOverlapIntervals(intervals));