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