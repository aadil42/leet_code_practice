/**
 * Recursion.
 * Time O(n) | Space O(n) 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    
    function dfs(root) {
        if(!root) return null;
        
        if(root.val > high) return dfs(root.left);
        if(root.val < low) return dfs(root.right);

        root.left = dfs(root.left);
        root.right = dfs(root.right);
        return root;
    }

    return dfs(root);
};