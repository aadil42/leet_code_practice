/**
 * Time O(m*n) | Space O(n*m)
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    
    const step = grid[0].length;
    const singleArr = [];

    grid.forEach((g) => {
        singleArr.push(...g);
    });

    k = k % singleArr.length;

    const singleResult = [];
    for(let i = 0; i < k; i++) {
        singleResult.push(singleArr[singleArr.length - i - 1]);
    }
    singleResult.reverse();
    for(let i = 0; i < singleArr.length - k; i++) {
        singleResult.push(singleArr[i]);
    }

    // console.log(singleResult);
    const result = [];
    let i = 0;
    let j = step;
    while(j < singleResult.length + 1) {
        result.push(singleResult.slice(i,j));
        i = j;
        j += step;
    }

    return result;
};


/**
 * efficient solution without declaring bunch of arrays.
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    k = k % (ROWS * COLS);
    const result = [];
    for(let i = 0; i < ROWS; i++) {
        const subArr = [];
        for(let j = 0; j < COLS; j++) {
            subArr.push(0);
        }
        result.push(subArr);
    };

    const posToVal = (r,c) =>  {
        return r*COLS + (c % COLS);
    }

    const valToPos = (val) => {
        
        val = val % (ROWS*COLS); // if val goes out of bound
        return [Math.floor(val/COLS), val % COLS];
    }

    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            const targetVal = posToVal(i,j) + k;
            const targetPos = valToPos(targetVal);
            console.log(targetPos);
            result[targetPos[0]][targetPos[1]] = grid[i][j];
        }
    }

    return result;
};