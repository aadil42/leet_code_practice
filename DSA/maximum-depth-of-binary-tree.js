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
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    const dfs = (node) => {
        if(!node) return 0;
        return Math.max(1 + dfs(node.left), 1 + dfs(node.right));
    }
    return dfs(root);
};

var maxDepth0 = function(root) {
    let max = 0;
    goRecursive(root, 1);
    function goRecursive(root, count) {
        if(!root) return;
        max = Math.max(max, count);
        goRecursive(root.left, count + 1);
        goRecursive(root.right, count + 1);
    }
    
    return max;
};


var maxDepthR = function(root) {
   
    if(!root) return 0;
    let current = 0;
    let max = 0;
 
     function dfs(root, current) {
         if(!root) return;
         
         if(!root.left && !root.right) {
             max = Math.max(current, max);
             return;
         }
 
         dfs(root.left, current + 1);
         dfs(root.right, current + 1);
 
     }
 
    dfs(root, current + 1);
    return max;
 };

