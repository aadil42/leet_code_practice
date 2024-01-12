/**
 * Recursion | DP
 * https://leetcode.com/problems/unique-paths/
 * 
 * Time O(n*m) | Space O(m+n)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    const cache = {};
    const dfs = (r,c) => {
        if(cache[`${r}-${c}`]) return cache[`${r}-${c}`];
        if(r === m - 1 && c === n - 1) return 1;
        if(r === m || c === n) return 0;

        const result = dfs(r+1,c) + dfs(r, c+1);
        cache[`${r}-${c}`] = result;
        return result;
    }

    return dfs(0,0);
};

/**
 * Recursion
 * 
 * Time O(2^(n+m)) | Space O(m+n)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths1 = function(m, n) {
    
    let countPath = 0;
    const dfs = (r,c) => {
        if(r === m - 1 && c === n - 1) {
            countPath++;
            return;
        };
        if(r === m || c === n) return 0;

        dfs(r+1,c);
        dfs(r, c+1);
    }

    dfs(0,0);
    return countPath;
};

var uniquePaths2 = function(m, n) {
    
    let row = new Array(n).fill(1);

    for(let i = 0; i < m - 1; i++) {
        let newRow = new Array(n).fill(1);

        for(let j = n - 2; j >= 0; j--) {
            newRow[j] = newRow[j+1] + row[j];  
        }

        row = newRow;
    }

    return row[0];
};

// my code


console.log(uniquePaths(3,7));