/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * BFS | LevelOrderTraversal
 * Time O(n) | Space O(n) | Actually the time complexity is O(n^2) becasue we're using an array. There's no dequeue data-structure in js.
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    

    const dequeue = [];

    if(root) dequeue.push(root);

    let isLeft = true;

    const zigzagOrder = [];

    while(dequeue.length) {

        let size = dequeue.length;
        const row = [];

        while(size) {
            const node = dequeue.shift();
            row.push(node.val);
            if(node.left) dequeue.push(node.left);
            if(node.right) dequeue.push(node.right);
            size--;
        }
        
        if(!isLeft) {
            zigzagOrder.push(row.reverse());
        }
        if(isLeft) {
            zigzagOrder.push(row);
        }
        isLeft = !isLeft;
    }

    return zigzagOrder;
};