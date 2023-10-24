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
var largestValues = function(root) {
    
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