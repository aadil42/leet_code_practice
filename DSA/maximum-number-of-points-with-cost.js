/**
 * better Brute Force
 * Time O(m*n*2) | Space O(1)
 * https://leetcode.com/problems/maximum-number-of-points-with-cost
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    
    const ROW = points.length;
    const COL = points[0].length;

    for(let row = 1; row < ROW; row++) {
        for(let outerCol = 0; outerCol < COL; outerCol++) {
            let currMax = 0;
            for(let col = 0; col < COL; col++) {
                currMax = Math.max(currMax, points[row][outerCol] + points[row-1][col] - Math.abs(col-outerCol));
            }
            points[row][outerCol] = currMax;
        }
    }

    return Math.max(...points[ROW-1]);
};


/**
 * Brute Force | BackTracking
 * Time O(m^n) | Space O(m)
 * https://leetcode.com/problems/maximum-number-of-points-with-cost
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints0 = function(points) {
    
    let max = 0;
    const ROW = points.length;
    const COL = points[0].length;

    const dfs = (row, col, currTotal) => {
        if(row === ROW) {
            max = Math.max(max, currTotal);
            return;
        }

        for(let c = 0; c < COL; c++) {
            if(row > 0) {
                currTotal += points[row][c];
                currTotal -= (Math.abs(c-col));
            } else {
                currTotal = points[row][c];
            }
            dfs(row+1, c, currTotal);
            if(row > 0) {
                currTotal -= points[row][c];
                currTotal += Math.abs(c-col);
            }  else {
                currTotal -= points[row][c];
            }
        }
    }

    dfs(0,0,0);
    return max;
};