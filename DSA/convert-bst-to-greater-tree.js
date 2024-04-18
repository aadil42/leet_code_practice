/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Tree | reverse pre-order-traversal 
 * Time O(n) | Space O(n)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {

    const dfs = (node, max) =>  {
        if(!node) return max;

        const result = dfs(node.right, max);
        node.val = result + node.val;
        const result1 = dfs(node.left, node.val);
        return result1;
    }

    dfs(root, 0);
    return root;
};

/**
 * ReversePreOrder Traversal
 * Time O(n) | Space O(h). h = height of the tree.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST0 = function(root) {
    
    function reversePreOrder(root, currentSum) {
        if(!root) return currentSum;

        currentSum = reversePreOrder(root.right, currentSum);
        root.val += currentSum;
        let leftSum = reversePreOrder(root.left, root.val);

        return leftSum;
    }

   reversePreOrder(root, 0);
   return root;
};