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
