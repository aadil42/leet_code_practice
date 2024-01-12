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
var convertBST = function(root) {
    
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