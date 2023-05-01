/**
 * Brute force
 * Time O(n^2) | Space O(n)
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
    
    const result = [];
    
    for(let i = 0; i < queries.length; i++) {
        let smallestInterval = Infinity;
        for(let j = 0; j < intervals.length; j++) {
            if(queries[i] >= intervals[j][0] && queries[i] <= intervals[j][1] &&
            intervals[j][1] - intervals[j][0] + 1 < smallestInterval) {
                smallestInterval = intervals[j][1] - intervals[j][0] + 1;
            }
        }
        if(smallestInterval === Infinity) result.push(-1)
        else result.push(smallestInterval);
    }

    return result;
};