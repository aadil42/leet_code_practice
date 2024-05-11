/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * DFS | Tree-traversal
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/balanced-binary-tree/description/
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    let b = true;
    const dfs = (node) => {
        if(!node) return 0;

        const h1 = 1 + dfs(node.left);
        const h2 = 1 + dfs(node.right);
        if(Math.abs(h1 - h2) > 1) {
            b = false;
        }
        
        return Math.max(h1, h2);
    }

    dfs(root);
    return b;
};

/**
 * postOrder Traversal
 * Time O(n) | Space O(h). h = height of the tree.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced0 = function(root) {
    
    let balanced = true;

    function dfs(root) {
        if(!root) return 0;

        const leftHeight = dfs(root.left);
        const rightHeight = dfs(root.right);

        if(Math.abs(leftHeight - rightHeight) > 1) {
            balanced = false;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }

    dfs(root);
    return balanced;
};