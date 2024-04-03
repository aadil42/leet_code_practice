/**
 * Brute force | DFS
 * Time O(n*m) | Space O(n*m)
 * https://leetcode.com/problems/word-search
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    

    const ROW = board.length;
    const COL = board[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const outOfBound = (row, col) => {
        if(row === ROW) return true;
        if(col === COL) return true;
        if(row < 0) return true;
        if(col < 0) return true;
        return false;
    }

    const dfs = (row, col, idx, visited) => {
        
        // word can't be found now.
        if(outOfBound(row, col)) return false;
        if(board[row][col] !== word[idx]) return false;

        const hash = `${row}-${col}`;
        if(visited.has(hash)) return false;
        visited.add(hash);

        // charechter matchs.
        if(board[row][col] === word[idx]) idx++;
        
        // word is found.
        if(idx === word.length) return true;

        // check all possibilities.
        for(let i = 0; i < directions.length; i++) {
            const nextRow = row + directions[i][0];
            const nextCol = col + directions[i][1];
            if(dfs(nextRow, nextCol, idx, visited)) return true;
        }

        // backtrack.
        visited.delete(hash);
        return false;
    }

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(board[i][j] === word[0] && dfs(i,j,0, new Set())) return true;
        }
    }

    return false;
};