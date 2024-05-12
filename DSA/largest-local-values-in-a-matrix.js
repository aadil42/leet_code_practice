/**
 * Brute Force 
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/largest-local-values-in-a-matrix
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    
    const findLargest = (grid, origin1, origin2) => {
        let max = 0;
        for(let i = origin1-1; i < origin1 + 2; i++) {
            for(let j = origin2-1; j < origin2 + 2; j++) {
                max = Math.max(max, grid[i][j]);
            }
        }
        return max;
    }

    resultGrid = [];
    for(let i = 1; i < grid.length - 1;  i++) {
        const row = [];
        for(let j = 1; j < grid.length -1; j++) {
            row.push(findLargest(grid, i,j));
        }
        resultGrid.push(row);
    }

    return resultGrid;
};