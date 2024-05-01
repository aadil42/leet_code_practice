/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Inorder-traversal
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/validate-binary-search-tree/
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    const sortedArr = [];

    const inOrderTraverse = (node) => {
        if(!node) return;

        inOrderTraverse(node.left);
        sortedArr.push(node.val);
        inOrderTraverse(node.right);
    }

    inOrderTraverse(root);

    const isIncreasing = (arr) => {
        for(let i = 1; i < arr.length; i++)  {
            if(arr[i-1] >= arr[i]) return false;
        }
        return true;
    } 

    return isIncreasing(sortedArr);
};