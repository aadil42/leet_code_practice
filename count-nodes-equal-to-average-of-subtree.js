/**
 * 
 * Post Order tree Traversal
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/
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
var averageOfSubtree = function(root) {
    
    let count = 0;

    const dfs = (node) => {
        if(!node) return {
            nodeCount: 0,
            total: 0
        };

        const leftNode = dfs(node.left);
        const rightNode = dfs(node.right);

        const ans = {
            nodeCount: leftNode.nodeCount + rightNode.nodeCount + 1,
            total: leftNode.total + rightNode.total + node.val
        }
        
        if(Math.floor(ans.total/ans.nodeCount) === node.val) count++;

        return ans;
    }

    dfs(root);
    return count;
};