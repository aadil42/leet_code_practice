/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * BFS | LevelOrderTraversel
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    
    const q = new Queue();

    q.enqueue(root);

    const levelSumArr = [];
    
    while(!q.isEmpty()) {
        const levelLen = q.size();

        let total = 0;
        for(let i = 0;  i < levelLen; i++) {
            const node = q.dequeue();
            total += node.val;
            node.left && q.enqueue(node.left);
            node.right && q.enqueue(node.right);
        }
        levelSumArr.push(total);
    }
    
    if(levelSumArr.length < k) return -1;
    return levelSumArr.sort((a,b) => b-a)[k-1];
};