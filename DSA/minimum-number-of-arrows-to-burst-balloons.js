/**
 * Intervals | Array
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons
 * 
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    
    points.sort((a,b) => {
        if(a[0]===b[0]) return a[1] - b[1];
        return a[0]-b[0];
    });

    const inRange = (range, point) => {
        if(point >= range[0] && point <= range[1]) return true;
        return false;
    }

    let takenArrows = 0;
    let i = 0;
    
    while(i < points.length) {
        
        let currentRange = [points[i][0], points[i][1]];

        while(points[i+1] &&
            (inRange(currentRange, points[i+1][0]) || 
            inRange(currentRange, points[i+1][1]))
        ) {
            currentRange = [
                points[i+1][0],
                Math.min(points[i+1][1], currentRange[1])
            ];
            i++;
        }
        takenArrows++;
        i++;
    }

    return takenArrows;
};