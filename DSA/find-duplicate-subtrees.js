/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Brute force | DFS 
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/find-duplicate-subtrees/
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    
    const findNodes = (node, targetTree, possibleTrees) => {
        if(!node) return;
        if(node === targetTree) return;
        if(node.val === targetTree.val) {
            possibleTrees.push(node);
        }

        findNodes(node.left, targetTree, possibleTrees);
        findNodes(node.right, targetTree, possibleTrees);

        return possibleTrees;
    }

    const checkSameTree = (node1, node2) => {

        if(!node1 && !node2) return true;

        if(node1 === node2) return false;
        if(node1 && !node2) return false;
        if(!node1 && node2) return false;

        if(node1.val !== node2.val) return false;

        return checkSameTree(node1.left, node2.left) && checkSameTree(node1.right, node2.right);
    }

    const allSubTrees = [];

    const dfs = (node) => {
        if(!node) return;
        findNodes(root, node, allSubTrees);

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    const duplicateTrees = new Set();
    
    for(let i = 0; i < allSubTrees.length; i++) {
        for(let j = i+1; j < allSubTrees.length; j++) {
            if(allSubTrees[j] !== null && checkSameTree(allSubTrees[i], allSubTrees[j])) {
                allSubTrees[j] = null;
                duplicateTrees.add(allSubTrees[i]);
            }
        }
    }

    return [...duplicateTrees];
};