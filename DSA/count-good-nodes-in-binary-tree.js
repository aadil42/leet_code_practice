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
var goodNodes = function(root) {
  
    if(!root) return 1;
    let goodNodeCount = 0;

    function dfs(root, currentMax) {
        if(!root) return;
        if(root.val >= currentMax) {
            goodNodeCount++;
            currentMax = root.val;
        }
        dfs(root.left, currentMax);
        dfs(root.right, currentMax);
    }
    dfs(root, -Infinity);
    return goodNodeCount;
};