/**
 * Recursion
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    
    function dfs(n) {
        if(n === 1) {
            return [new TreeNode(0)];
        }
        const result = [];
        for(let i = 1;  i < n; i += 2) {
            let left = i;
            let right = n - 1 - i;
            const leftTree = dfs(left);
            const rightTree = dfs(right);

            leftTree.forEach((lt) => {
                rightTree.forEach((rt) => {
                    const root = new TreeNode(0);
                    root.left = lt;
                    root.right = rt;
                    result.push(root);
                });
            });
        }
    return result;
    }
    return dfs(n);
};