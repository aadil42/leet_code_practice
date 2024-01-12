/**
 * Recursion
 * https://leetcode.com/problems/combinations
 *
 * Time O(2^n) | Space O(n)
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

    const result = [];
    const dfs = (index, combo) =>  {
      if(combo.length === k) {
        result.push(combo.slice());
        return;
      } 
      if(index === n + 1) return;
      const combo1 = [...combo];
      combo = [...combo, index];
      dfs(index+1, combo);
      dfs(index+1, combo1);
    }

    dfs(1, []);
    return result;
};


/**
 * Recursion
 * Time O(n^k) | Space O(n^2)
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine1 = function(n, k) {

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

