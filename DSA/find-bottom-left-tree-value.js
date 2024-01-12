/**
 * PreOrder Traversal
 * Time O(n) | Space O(1)
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
var findBottomLeftValue = function(root) {
    
    let leftMostVal = {val: root.val,level: 0};
    
    function dfs(root, level) {
        if(!root) return;
        if(level > leftMostVal.level) {
            leftMostVal.val = root.val;
            leftMostVal.level = level;
        }
        level++;
        dfs(root.left, level);
        dfs(root.right, level);
    }

    dfs(root,0);
    return leftMostVal.val;
};