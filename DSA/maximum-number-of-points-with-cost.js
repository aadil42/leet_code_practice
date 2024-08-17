/**
 * Brute Force | BackTracking
 * Time O(m^n) | Space O(m)
 * https://leetcode.com/problems/maximum-number-of-points-with-cost
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    
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