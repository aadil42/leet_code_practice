/**
 * Time O(n) | Space O(n); | n is the len of array including all the elements from the nested array.
 * Recursion | DFS
 * https://leetcode.com/problems/flatten-deeply-nested-array/
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {

    const dfs = (resultArr, level, currLevelArr) => {
        for(let i = 0; i < currLevelArr.length; i++) {
            if(level < n && Array.isArray(currLevelArr[i])) {
                dfs(resultArr, level+1, currLevelArr[i]);
                continue;
            }
            resultArr.push(currLevelArr[i]);
        }
        return resultArr;
    }

    return dfs([], 0, arr);
};