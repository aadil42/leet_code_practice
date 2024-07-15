/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Tree | Hashing
 * https://leetcode.com/problems/create-binary-tree-from-descriptions/
 * Time O(n) | Space O(n)
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    
    const nodeHash = {};

    for(let i = 0; i < descriptions.length; i++) {
        const parent = descriptions[i][0];
        const child = descriptions[i][1];
        nodeHash[parent] = [new TreeNode(parent), true];
        nodeHash[child] = [new TreeNode(child), true];
    }

    for(let i = 0; i < descriptions.length; i++) {

        const parentVal = descriptions[i][0];
        const childVal = descriptions[i][1];
        const isLeft = descriptions[i][2];


        const parentNode = nodeHash[parentVal][0];
        const childNode = nodeHash[childVal][0];

        if(isLeft) {
            parentNode.left = childNode;
            nodeHash[childVal][1] = false; 
        } else {
            parentNode.right = childNode;
            nodeHash[childVal][1] = false; 
        }
    }

    for(const key in nodeHash) {
        if(nodeHash[key][1]) return nodeHash[key][0];
    }
};