/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * LevelOrderTraversal
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/find-largest-value-in-each-tree-row
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {

    const q = new Queue();

    const result = [];

    if(!root) return result;

    q.enqueue(root);
    while (!q.isEmpty()) {
        
        let size = q.size();
        let max = -Infinity;

        while (size) {
            const node = q.dequeue();
            max = Math.max(max, node.val);
            if (node.left) q.enqueue(node.left);
            if (node.right) q.enqueue(node.right);
            size--;
        }

        result.push(max);
    }

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
 * BFS | Level order traversal
 * Time O(n^2) | Space O(n) The reason it's n^2 is because the shift method on array. It's O(n). You can easily use real queue data structure with the same code.
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues0 = function(root) {
    
    if(!root) return [];
    const result = [];
    const bfs = (root) => {
        const queue = [root];
        while(queue.length) {
            let nodesCount = queue.length;
            let max = -Infinity;
            while(nodesCount) {
                const node = queue.shift();
                max = Math.max(max, node.val);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                nodesCount--;
            }
            result.push(max);
        }
    }

    bfs(root);
    return result;
};