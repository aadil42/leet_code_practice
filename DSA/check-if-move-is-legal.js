/**
 * DFS 
 * Time O(grid.length * 8) | Space O(1)
 * https://leetcode.com/problems/check-if-move-is-legal/
 * 
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove1 = function(board, rMove, cMove, color) {

    const n = board.length;

    const getOposite = (color) => {
        if(color === "W") return "B";
        return "W";
    }

    const isOutOfBound = (r, c) => {
        if(r < 0 || r === n) return true;
        if(c < 0 || c === n) return true;
        return false;
    }

    const checkInCustomDirection = (rowCount, colCount, row, col, color) => {
        // check down.
        let len = 1;
        let r = row;
        let c = col;

        while(!isOutOfBound(r,c) && board[r][c] !== "." && board[r][c] === getOposite(color)) {
            r = r + rowCount;
            c = c + colCount;
            len++;
        } 
        
        if(isOutOfBound(r,c) || board[r][c] === ".") return false;
        
        return len + 1 > 2;
    }

    const directions = [[1,0], [-1,0], [0,1], [0,-1], 
                        [1,1], [1,-1], [-1,1], [-1,-1]];
    

    for(let i = 0; i < directions.length; i++) {
        const rc = directions[i][0];
        const cc = directions[i][1];
        if(checkInCustomDirection(rc, cc, rMove + rc, cMove + cc, color)) return true;
    }

    return false;
};

/**
 * BFS 
 * Time O(n) | Space O(1)
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
    const ROW =  board.length;
    const COL = board[0].length;

    const directions = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]];

    function helper(rMove,cMove,color,directions) {
        const [rDir, cDir] = directions;
        let length = 1;
        
        let row = rMove + rDir;
        let col = cMove + cDir;
        while(row < ROW && col < COL && row > -1 && col > -1) {
            length++;
            if(board[row][col] === '.') return false;
            if(board[row][col] === color) {
                return length >= 3;
            }
            
            row += rDir;
            col += cDir;
        }

        return false;
    }
    for(let i = 0; i < directions.length; i++) {
        if(helper(rMove,cMove,color,directions[i])) return true;
    }
    return false;
};
