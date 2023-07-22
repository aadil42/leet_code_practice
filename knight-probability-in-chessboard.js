/**
 * DP | Recursion
 * 
 * Time O(n^3 * k) | Space O(k) 
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    
    const directions = [[2,-1], [1, -2], [-1, -2], [-2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];
    
    const isInBound = (r, c) => {
        if(r >= n || c >= n || r < 0 || c < 0) return false;
        return true;
    }

    const cache = {};

    const dfs = (moveLeft, r, c) => {
        const hash = `${r}-${c}-${moveLeft}`;
        if(cache[hash]) return cache[hash];
        if(!isInBound(r,c)) return 0; 
        if(moveLeft === 0) return 1;
        let total = 0;
        directions.forEach((dir) => {
            total += dfs(moveLeft-1, r + dir[0], c + dir[1]);
        });
        return cache[hash] = total/8;
    }
    return dfs(k, row, column);
};

/**
 * 
 * Brute force
 * k = number of move on a n grid chess board.
 * Time O(8^k) | Space O(k)
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability1 = function(n, k, row, column) {
    
    const directions = [[2,-1], [1, -2], [-1, -2], [-2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];

    let totalSuccessOutComes = 0;

    const isInBound = (r, c) => {
        if(r >= n || c >= n || r < 0 || c < 0) return false;
        return true;
    }

    const dfs = (moveLeft, r, c) => {
        if(moveLeft === 0) {
            totalSuccessOutComes += 1;
            return;
        };
        directions.forEach((dir) => {
            if(isInBound(r+dir[0], c+dir[1])) {
                dfs(moveLeft-1, r + dir[0], c + dir[1]);
            }
        });
    }
    dfs(k, row, column);
    return totalSuccessOutComes/(8**k);

};