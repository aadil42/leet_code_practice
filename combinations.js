/**
 * Recursion
 * Time O(n^n) | Space O(n^2)
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

    const nArr = [];
    
    for(let i = 1; i < n + 1; i++) {
        nArr.push(i);
    }
    
    const result = [];
    function dfs(index,copyArr) {
        if(copyArr.length === k) {
            result.push(copyArr);
            return;
        }
        if(index === n) return;
    
        for(let i = index; i < nArr.length; i++) {
            const newArr = copyArr.slice(0);
            newArr.push(nArr[i]);
            dfs(i + 1, newArr);
        }
    
    }
    
    dfs(0,[]);
    return result;
    };