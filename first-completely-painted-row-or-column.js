/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    
    const matHash = {};
    const col = {};
    const row = {};
    
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            matHash[mat[i][j]] = [i, j];
        }
    }
        
    for(let i = 0; i < arr.length; i++) {
        const cell = matHash[arr[i]];
        
        if(row[cell[0]]) {
            row[cell[0]] += 1;
        } else {
            row[cell[0]] = 1;
        }
        
        if(row[cell[0]] === mat[0].length) return i;
        
        
        if(col[cell[1]]) {
            col[cell[1]] += 1;
        } else {
            col[cell[1]] = 1;
        }
        
        if(col[cell[1]] === mat.length) return i;
    }
    
    
};