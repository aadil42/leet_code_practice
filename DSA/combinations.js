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


/**
 * BackTracking | Recursion
 * Time O(((n!)/(n-k)!*k!)*k) | Space O((n!)/(n-k)!*k!) (Because we'll nedd the number of combinations space to store them in the array)
 * https://leetcode.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine2 = function(n, k) {
    
    const dfs = (idx, level, currCombo, combinations) => {
        if (level === k) {
            combinations.push(currCombo.slice(0));
            return;
        }

        for (let i = idx; i < n + 1; i++) {
            currCombo.push(i);
            dfs(i+1, level+1, currCombo, combinations);
            currCombo.pop();
        }

        return combinations;
    }

    return dfs(1, 0, [], []);
};
