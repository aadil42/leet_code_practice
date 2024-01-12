/**
 * Array | Matrix
 * Time O(n*m*9) | Space O(n*m)
 * https://leetcode.com/problems/image-smoother/
 * 
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    
    const ROW = img.length;
    const COL = img[0].length;
    const result = [];

    const findAvg = (r,c) => {
        let startRow = r;
        let startCol = c;
        let endRow = r;
        let endCol = c;

        if(r-1 > -1) startRow = r-1;
        if(c-1 > -1) startCol = c-1;
        if(r+1 < ROW) endRow = r+1;
        if(c+1 < COL) endCol = c+1;

        let total = 0;
        let count = 0;
        for(let i = startRow;  i < endRow + 1; i++) {
            for(let j = startCol; j < endCol + 1; j++) {
                total += img[i][j];
                count++;
            }
        }

        return Math.floor(total/count);
    }

    for(let i = 0; i < ROW; i++) {
        const eachRow = [];
        for(let j = 0; j < COL; j++) {
            eachRow.push(findAvg(i,j));
        }
        result.push(eachRow);
    }

    return result;
};