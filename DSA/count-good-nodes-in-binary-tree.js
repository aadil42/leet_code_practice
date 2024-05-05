/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Tree | Post-order-traversal | DFS
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {


    let totalGoodNodes = 0;

    const dfs = (node, maxYet) => {
        if(!node) return;

        maxYet = Math.max(maxYet, node.val);
        dfs(node.left, maxYet);
        dfs(node.right, maxYet);

        if(node.val === maxYet) totalGoodNodes++;
    }

    dfs(root, root.val);

    return totalGoodNodes;
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
 * Time O(n) | Space O(n)
 * Tree | Pre-order-traversal | DFS
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes0 = function(root) {
  
    if(!root) return 1;
    let goodNodeCount = 0;

    function dfs(root, currentMax) {
        if(!root) return;
        if(root.val >= currentMax) {
            goodNodeCount++;
            currentMax = root.val;
        }
        dfs(root.left, currentMax);
        dfs(root.right, currentMax);
    }
    dfs(root, -Infinity);
    return goodNodeCount;
};