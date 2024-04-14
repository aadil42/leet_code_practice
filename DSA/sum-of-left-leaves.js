/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Tree | DFS
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/sum-of-left-leaves
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    
    let leftLeavSum = 0;

    const dfs = (node, isLeft) => {
        if(!node.left && !node.right) {
            if(isLeft) leftLeavSum += node.val;
            return;
        }
        node.left && dfs(node.left, true);
        node.right && dfs(node.right, false);
    }

    root && dfs(root, false);
    return leftLeavSum;
};