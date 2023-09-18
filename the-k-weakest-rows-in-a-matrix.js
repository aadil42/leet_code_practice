/**
 * 
 * Sorting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    
    const result = [];
    mat = mat.map((arr,i) => [arr.filter((item) => item === 1).length, i]);
    mat = mat.sort((a,b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    mat = mat.reverse();
    while(k) {
        result.push(mat.pop()[1]);
        k--;
    }
    return result;
};


/**
 * Brute Force
 * Time O(n*k) | Space O(k)
 * https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows1 = function(mat, k) {
    
    const result = [];
    mat = mat.map((arr) => arr.filter((item) => item === 1).length);

    while(k) {
        let min = Infinity;
        let minIndex = 0;
        for(let i = 0; i < mat.length; i++) {
            if(mat[i] !== undefined && mat[i] < min) {
                minIndex = i;
                min = mat[i];
            }
        }
        result.push(minIndex);
        mat[minIndex] = undefined;
        k--;
    }
    return result;
};