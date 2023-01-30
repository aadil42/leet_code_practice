// /**
//  * @param {character[][]} board
//  * @return {void} Do not return anything, modify board in-place instead.
//  */


// // My Attampt. 56 out of 58 cases are passing.
// // the below case is not passing I don't know why.
// // const board = [["X","X","X","X","X","X","X","O","X","X","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","O","X","X","X","O","X","O","X","O","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X","X","O","O","O","X","X","X","X","O","O"],["X","O","X","O","X","X","X","X","O","X","O","X","O","X","X","O","X","X","X","X"],["X","O","X","X","X","X","X","X","O","X","X","O","O","X","X","X","O","X","X","X"],["O","X","X","X","X","X","O","X","X","O","X","O","O","X","X","X","O","X","X","X"],["X","X","X","X","X","X","X","X","O","X","X","X","O","X","O","X","X","X","X","X"],["X","X","X","X","X","O","X","X","X","X","X","O","X","O","X","O","X","O","X","X"],["O","X","X","X","X","X","X","X","O","X","O","X","X","O","X","X","X","O","O","X"],["O","X","O","O","O","X","X","X","X","X","X","O","X","X","X","O","X","O","X","O"],["O","X","X","X","X","X","X","X","X","X","O","O","O","O","X","X","X","X","X","X"],["X","O","X","X","O","X","X","X","X","X","X","X","X","X","X","X","O","X","O","X"],["X","X","X","X","X","X","O","X","O","X","X","O","X","O","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X","X","O","X","X","X","X","X","X","X","O"],["X","X","O","X","O","X","X","X","O","X","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","O","X","X","X","O","X","X","X","O","X","X","O","O","X"],["X","O","X","X","X","X","X","X","X","X","X","X","O","O","X","X","X","X","X","X"],["X","O","O","X","X","X","O","O","X","X","O","X","X","X","O","O","X","X","X","X"],["X","X","X","O","X","X","O","O","O","X","O","O","X","X","X","X","O","O","X","X"],["X","X","X","X","X","X","X","X","O","X","X","X","X","X","X","X","O","X","O","X"]]

// var solve = function(board) {
    
//     const row = board.length;
//     const col = board[0].length;
//     const visited = new Set();
//     for(let i = 0; i < row; i++) {
//         for(let j = 0; j < col; j++) {
//             if(board[i][j] === "O" && !visited.has(i+""+j)) {
//                 if(is_valid(i,j)) {
//                     makeXs(i,j);
//                 }
//             }
//         }
//     }
//     function is_valid(r,c) {
//         const hash = r+""+c;
//         if(r === row || c === col || r < 0 || c < 0) return false;
//         // if(!board[r][c]) return false;
//         if(board[r][c] === "X" || visited.has(hash)) return true;

//         visited.add(hash);
//         let isValid = true;
//         isValid = is_valid(r+1,c) && isValid;
//         isValid = is_valid(r-1,c) && isValid;
//         isValid = is_valid(r,c+1) && isValid;
//         isValid = is_valid(r,c-1) && isValid;
//         return isValid;
//     }

//     function makeXs(r,c) {
//         if(board[r][c] === "X") {
//         return;
//         }
//         board[r][c] = "X"

//         makeXs(r+1,c);
//         makeXs(r-1,c);
//         makeXs(r,c+1);
//         makeXs(r,c-1);
//     } 
// };

// const board = [["X","X","X","X","X","X","X","O","X","X","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","O","X","X","X","O","X","O","X","O","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X","X","O","O","O","X","X","X","X","O","O"],["X","O","X","O","X","X","X","X","O","X","O","X","O","X","X","O","X","X","X","X"],["X","O","X","X","X","X","X","X","O","X","X","O","O","X","X","X","O","X","X","X"],["O","X","X","X","X","X","O","X","X","O","X","O","O","X","X","X","O","X","X","X"],["X","X","X","X","X","X","X","X","O","X","X","X","O","X","O","X","X","X","X","X"],["X","X","X","X","X","O","X","X","X","X","X","O","X","O","X","O","X","O","X","X"],["O","X","X","X","X","X","X","X","O","X","O","X","X","O","X","X","X","O","O","X"],["O","X","O","O","O","X","X","X","X","X","X","O","X","X","X","O","X","O","X","O"],["O","X","X","X","X","X","X","X","X","X","O","O","O","O","X","X","X","X","X","X"],["X","O","X","X","O","X","X","X","X","X","X","X","X","X","X","X","O","X","O","X"],["X","X","X","X","X","X","O","X","O","X","X","O","X","O","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X","X","O","X","X","X","X","X","X","X","O"],["X","X","O","X","O","X","X","X","O","X","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","O","X","X","X","O","X","X","X","O","X","X","O","O","X"],["X","O","X","X","X","X","X","X","X","X","X","X","O","O","X","X","X","X","X","X"],["X","O","O","X","X","X","O","O","X","X","O","X","X","X","O","O","X","X","X","X"],["X","X","X","O","X","X","O","O","O","X","O","O","X","X","X","X","O","O","X","X"],["X","X","X","X","X","X","X","X","O","X","X","X","X","X","X","X","O","X","O","X"]]
// solve(board);

/**
 * Time O(M*N) | Space O(M*N);
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// solved after watching the solution. same thing just a few adjustment to if condition.
var solve = function(board) {
    
    const row = board.length;
    const col = board[0].length;

    // iterate on edges

    // for(let i = 0; i < row; i++) {
    //     for(let j = 0; j < col; j++) {
    //         if(board[i][j] === 'O' && 
    //            (i == 0 || i == row - 1 || j == 0 || j == col -1)) {
    //                makeTs(i,j);
    //            }
    //     }
    // }
    for(let i = 0; i < col; i++) {
        if(board[0][i] === "O") makeTs(0,i);
    }
    for(let i = 0; i < row; i++) {
        if(board[i][col - 1] === "O") makeTs(i, col - 1);
    }
    for(let i = col - 1; i > -1; i--) {
        if(board[row - 1][i] === "O") makeTs(row - 1, i);
    }
    for(let i = row - 1; i > -1; i--) {
        if(board[i][0] === "O") makeTs(i,0);
    }

    // make every O to X now.
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(board[i][j] === "O") {
                board[i][j] = "X";
            }
        }
    }

    // make every T to O now.
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(board[i][j] === "T") {
                board[i][j] = "O";
            }
        }
    } 

    function makeTs(r,c) {
        if(r === row || 
           c === col || 
           r < 0 || 
           c < 0 || 
           board[r][c] !== "O") return;

        board[r][c] = "T";
        makeTs(r+1,c);
        makeTs(r-1,c);
        makeTs(r,c+1);
        makeTs(r,c-1);
    } 
};

