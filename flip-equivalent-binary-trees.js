/**
 * PreOrderTraversal
 * Time O(n) || Space O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    
    function dfs(r1,r2) {

        if(!r1 || !r2) {
            return !r1 && !r2;
        }
        if(r1.val !== r2.val) {
            return false;
        }

        const result = dfs(r1.left,r2.left) && dfs(r1.right,r2.right);
        return result || (dfs(r1.left,r2.right) && dfs(r1.right, r2.left));
    }

    return dfs(root1, root2);
};