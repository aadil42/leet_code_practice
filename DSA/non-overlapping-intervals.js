/**
 * Greedy | Sorting
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/non-overlapping-intervals/
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals2nd = function(intervals) {
    
    intervals.sort((a,b) => a[0]-b[0]);

    let minRemoves = 0;
    let preEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if (start < preEnd) {
            preEnd = Math.min(preEnd, end);
            minRemoves++;
            continue;
        }

        preEnd = end;
    }

    return minRemoves
};

/**
 * Greedy | Sorting
 * https://leetcode.com/problems/non-overlapping-intervals/
 * 
 * Time O(n*log(n)) | Space O(1)
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals1st = function(intervals) {
    
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
