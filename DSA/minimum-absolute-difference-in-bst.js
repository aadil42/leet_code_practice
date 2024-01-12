/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst
 * 
 * InOrder Traversel.
 * Time O(n) | Space O(1)
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    
    const arr = [];
    let preVal = undefined;
    let minDiff = Infinity;
    const inOrderTraverse = (node) => {
        // if(!node.left && !node.right) return;
        if(!node) return;
        inOrderTraverse(node.left);
        if(preVal !== undefined) {
            minDiff = Math.min(minDiff, Math.abs(preVal - node.val));
        }
        preVal = node.val;
        inOrderTraverse(node.right);
        return;
    }

    inOrderTraverse(root);
    return minDiff;
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
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst
 * 
 * InOrder Traversel.
 * Time O(n) | Space  O(n)
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference1 = function(root) {
    
    const arr = [];
    const inOrderTraverse = (node) => {
        // if(!node.left && !node.right) return;
        if(!node) return;
        inOrderTraverse(node.left);
        arr.push(node.val);
        inOrderTraverse(node.right);
        return;
    }

    inOrderTraverse(root);

    let minDiff = Infinity;
    for(let i = 1; i < arr.length; i++) {
        minDiff = Math.min(minDiff, arr[i] - arr[i-1]);
    }

    return minDiff;
};