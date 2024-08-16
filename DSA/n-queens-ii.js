/**
 * Time O(n^n) | Space O(n)
 * BackTracking | Recursion
 * https://leetcode.com/problems/n-queens-ii/
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    
    const colSet = new Set();
    const posDiognal = new Set();
    const negetiveDiognal = new Set();
    let totalWays = 0;
    const dfs = (row) => {

        if(row === n) {
            totalWays++;
            return;
        }

        for(let col = 0; col < n; col++) {
            if(colSet.has(col)) continue;
            if(posDiognal.has(row+col)) continue;
            if(negetiveDiognal.has(row-col)) continue;

            colSet.add(col);
            posDiognal.add(row+col);
            negetiveDiognal.add(row-col);

            dfs(row+1);

            colSet.delete(col);
            posDiognal.delete(row+col);
            negetiveDiognal.delete(row-col);
        }
    }
    dfs(0);
    return totalWays;
};

// Same fucking problem as https://leetcode.com/problems/n-queens/
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens0 = function(n) {
    let result = 0;    
    const board = [];
    for(let i = 0; i < n; i++) {
        const temp = [];
        for(let j = 0; j < n; j++) {
            temp[j] = '.';
        }
        board.push(temp);
    }
    const colHash = new Set();
    const posDiagonal = new Set();
    const negDiagonal = new Set();

    function backtrack(r) {
        if(r === n) {
            result++;
            return;
        }

        for(let c = 0; c < n; c++) {
            if(colHash.has(c) || posDiagonal.has(r+c) || negDiagonal.has(r-c)) continue;

            colHash.add(c);
            posDiagonal.add(r+c);
            negDiagonal.add(r-c);
            board[r][c] = 'Q';

            backtrack(r+1);

            colHash.delete(c);
            posDiagonal.delete(r+c);
            negDiagonal.delete(r-c);
            board[r][c] = '.';
        }
    }

    backtrack(0);
    return result;
};
