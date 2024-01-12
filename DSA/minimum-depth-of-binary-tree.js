/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Recursion
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * 
 * Time O(n) | Space O(n)
 * @param {TreeNode} root
 * @return {number}
 */

var minDepth = function(root) {
    if(!root) return 0;
    const dfs = (node, count) => {
      if(!node) return Infinity;
      if(!node.left && !node.right) {
        return count;
      }
      return Math.min(dfs(node.left, count+1), dfs(node.right, count+1))
    }
    return dfs(root, 1);
};