/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * DFS
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    const dfs = (node, target, path) => {

        if(!node) return false;
        path.push(node);
        if(node.val === target.val) return true;
        
        if(dfs(node.left, target, path)) return true;
        if(dfs(node.right, target, path)) return true;

        path.pop();
        return false;
    }

    const pPath = [];
    const qPath = [];

    dfs(root, p, pPath);
    dfs(root, q, qPath);

    pPath.reverse();
    qPath.reverse();

    const mySet = new Set();

    for(let i = 0; i < pPath.length; i++) {
        mySet.add(pPath[i].val);
    }

    for(let i = 0; i < qPath.length; i++) {
        if(mySet.has(qPath[i].val)) return qPath[i];
    }

};