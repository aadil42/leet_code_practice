/**
 * Brute force
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/find-champion-i/
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    
    const strongScore = grid.length - 1;
    
    for(let i = 0; i < grid.length; i++) {
        if(grid[i].filter((node) => node === 1).length === strongScore) return i;
    }
    
};