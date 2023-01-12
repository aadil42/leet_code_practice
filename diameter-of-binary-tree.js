/**
 * Recursion.
 * Time O(n) | Space O(h). h = height of tree.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {

    let maxDiemeter = 0;

    function dfs(root) {
        if(!root) return [0,-1];
        const leftSum = dfs(root.left);
        const rightSum = dfs(root.right);

        const diemeter =  2 + leftSum[1] + rightSum[1];
        const maxHeight = 1 + Math.max(leftSum[1], rightSum[1]);
        maxDiemeter = Math.max(diemeter, maxDiemeter);
        return [diemeter, maxHeight];
    }

    dfs(root);
    return maxDiemeter;
};