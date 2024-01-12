var isValidSudoku = function(board) {
    

    let rows = [];
    let columns = [];
    let boxes = [];
    for(let i = 0; i < board.length; i++) {
        rows.push(new Set());
        columns.push(new Set());
        boxes.push(new Set());
    }

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            const boxIndex = 3 * Math.floor(i/3) + Math.floor(j/3);
            let curruntCell = board[i][j];
            if(rows[i].has(curruntCell) || columns[j].has(curruntCell) || boxes[boxIndex].has(curruntCell)) return false;
            if(curruntCell == '.') continue;
            rows[i].add(curruntCell);
            columns[j].add(curruntCell);
            boxes[boxIndex].add(curruntCell);
        }
    }

    return true;
};

const board = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board));