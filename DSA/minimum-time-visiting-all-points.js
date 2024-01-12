/**
 * Math | iteration
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-time-visiting-all-points
 * 
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    
    let minTime = 0;
    for(let i = 0; i < points.length - 1; i++) {
        const xDiff = Math.abs(points[i+1][0] - points[i][0]);
        const yDiff = Math.abs(points[i+1][1] - points[i][1]);
        minTime += Math.min(xDiff, yDiff) + Math.max(xDiff, yDiff) - Math.min(xDiff, yDiff);
    }
    return minTime;
};