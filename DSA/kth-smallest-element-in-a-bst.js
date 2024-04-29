/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time O(n) | Space O(1)
 * DFS | Tree traversal | inorder-tree-traversal 
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * 
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let idx = 1;
    let result = null;

    const dfs = (node) => {
        if(!node) return;

        dfs(node.left);
        if(idx === k) {
            result  = node.val;
        }
        idx++;
        dfs(node.right);
    }

    dfs(root);
    return result;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * DFS | InOrder traversal
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest0 = function(root, k) {
    
    const inOrderArr = [];

    const dfs = (node) => {
        if(!node) return;

        dfs(node.left);
        inOrderArr.push(node.val);
        dfs(node.right);
    }

    dfs(root);
    return inOrderArr[k-1];
};