/**
 * Brute force
 * Time O(n^2) | Space O(1) 
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    

    let removables = 0;
    for(let i = 0; i < intervals.length; i++) {
        for(let j = 0; j < intervals.length; j++) {
            if(j === i) continue;
            if(intervals[i][0] >= intervals[j][0] && intervals[i][1] <= intervals[j][1]) {
                // console.log(intervals[i], intervals[j]);
                removables++;
                break;
            }
        }
    }

    return intervals.length - removables;
};