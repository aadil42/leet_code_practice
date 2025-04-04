/**
 * Tree | Recursion
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    
    let dca = null;

    const dfs = (node) => {

        if (!node) return [null, 1];

        const [lca, height] = dfs(node.left);
        const [lca1, height1] = dfs(node.right);

        if (height1 === height) return [node, height+1];

        if (height1 > height) {
            return [lca1, height1+1];
        }

        return [lca, height+1];
    }

    return dfs(root)[0];
};
