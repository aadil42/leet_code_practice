/**
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

var maxPathSum = function(root) {

    let max = -Infinity;
    const preOrder = (node) => {

        if (!node) return 0;

        const leftSum = Math.max(0, preOrder(node.left));
        const rightSum = Math.max(0, preOrder(node.right));

        max = Math.max(max, node.val + leftSum + rightSum);
        return Math.max(leftSum, rightSum) + node.val;
    }

    preOrder(root);
    return max;
};