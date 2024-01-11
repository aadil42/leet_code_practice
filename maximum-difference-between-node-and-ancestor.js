/**
 * Tree | Recursion | DFS
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/maximum-difference-between-node-and-ancestor
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
var maxAncestorDiff = function(root) {
    

    const maxDfs = (node, parentVal, max) => {
        if(!node) return max;

        const currentMax = Math.max(max, Math.abs(parentVal - node.val));

        return Math.max(maxDfs(node.left, parentVal, currentMax), 
                        maxDfs(node.right, parentVal, currentMax));
    }

    const dfs = (node, max) => {
        if(!node) return max;

        const gottenMax =  maxDfs(node, node.val, 0);

        const currentMax = Math.max(max, gottenMax);
        return Math.max(dfs(node.left, currentMax), dfs(node.right, currentMax));
    }

    return dfs(root, 0);
};