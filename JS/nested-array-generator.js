/**
 * Recursion | DFS
 * Time O(n) | Space O(k) | k is the depth of neseted array
 * https://leetcode.com/problems/nested-array-generator/
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {

    const dfs = function*(arr) {
        for(let i = 0; i < arr.length; i++) {

            const isArr = Array.isArray(arr[i]);
            if(isArr) {
                    yield* dfs(arr[i])
            } else {
                    yield arr[i]
            }
            }
    }

    yield* dfs(arr);
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */