/**
 * DFS | Recursion
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/diameter-of-binary-tree
 * 
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
    
    let diameter = 0;

    const dfs = (node) =>  {

        if(!node.left && !node.right) return 0;

        const leftLen = (node.left && 1 + dfs(node.left)) || 0;
        const rightLen = (node.right && 1 + dfs(node.right)) || 0;
        diameter = Math.max(diameter, leftLen + rightLen);
        return Math.max(leftLen, rightLen);
    }

    dfs(root);
    return diameter;
};

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
var diameterOfBinaryTree1 = function(root) {

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