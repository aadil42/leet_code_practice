/**
 * Hashing
 * Time O(n^2) | Space O(n+m)
 * https://leetcode.com/problems/special-positions-in-a-binary-matrix/
 * 
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    
    const rowOnes = {};
    const colOnes = {};

    const ROW = mat.length;
    const COL = mat[0].length;

    for(let  i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(mat[i][j]) {
                rowOnes[i] = rowOnes[i] + 1 || 1;
                colOnes[j] = colOnes[j] + 1 || 1;
            }
        }
    }

    let specialPos = 0;
    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(mat[i][j] && rowOnes[i] === 1 && colOnes[j] === 1) specialPos++;
        }
    }

    return specialPos;
};

/**
 * Brute Force  
 * Time O(n^3) | Space O(1)
 * https://leetcode.com/problems/special-positions-in-a-binary-matrix
 * 
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial1 = function(mat) {
    
    const ROW = mat[0].length;
    const COL = mat.length;

    const checkRow = (r, c) => {
        for(let i = 0; i < ROW; i++) {
            if(i === c) continue;
            if(mat[r][i] === 1) return false;
        }
        return true;
    }

    const checkCol = (r, c) => {
        for(let i = 0; i < COL; i++) {
            if(i === r) continue;
            if(mat[i][c] === 1) return false;
        }
        return true;
    }

    let specialPos = 0;
    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COL; j++) {
            if(mat[j][i] && checkCol(j,i) && checkRow(j,i)) specialPos++; 
        }
    }

    return specialPos;
};