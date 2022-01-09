// it's working here, but for some weird reson not working when submitting on leetcode!

let visited = [];
var exist = function(board, word) {

    let row = board.length;
    let column = board[0].length;

    for(let i = 0; i < row; i++) {
        let innerRow = [];
        for(let j = 0; j < column; j++) {
            innerRow[j] = false;
        }
        visited.push(innerRow);
    }
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            if(board[i][j] == word[0] && checkWord(i, j, 0, word, board)) {
                return true;
            }
        }
}       

    return false;
};

function checkWord(i, j, index, word, board) {
    if(index == word.length) {
        return true;
    }
    if(
        i < 0 ||
        j < 0 ||
        i > (board.length - 1) ||
        j > (board[0].length - 1) ||
        board[i][j] !== word[index]  ||
        visited[i][j] 
        ) {
            return false;
        }

visited[i][j] = true;
if(
    checkWord(i+1, j, index+1, word, board) ||
    checkWord(i-1, j, index+1, word, board) ||
    checkWord(i, j+1, index+1 ,word, board) ||
    checkWord(i, j-1, index+1, word, board) 
) {
    return true;
}

// visited[i][j] = false; // DON'T KNOW WHY WE NEED TO DO THAT.a
return false;
}

const grid = [["A","B","C","E"],
              ["S","F","C","S"],
              ["A","D","E","E"]];
let word = "SEE";


console.log(exist(grid, word));