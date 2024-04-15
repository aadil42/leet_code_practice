/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Tree | pre-order-traversal
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/sum-root-to-leaf-numbers
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    
  let total = 0;
  const dfs = (node, num) => {
      if(!node.left && !node.right) {
          num = num+node.val;
          total += +num;
          return;
      }

      node.left && dfs(node.left, num+node.val);
      node.right && dfs(node.right, num+node.val);
  }

  dfs(root,"");
  return total;
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
 * 
 * Pre Order Traversal
 * Time O(n) | Space O(n)
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers0 = function(root) {


    const digits = [];
    function dfs(root, currentDigit) {

      if(!root) return;
      currentDigit += root.val;
      if(!root.left && !root.right) { 
          digits.push(currentDigit);
      }

      dfs(root.left, currentDigit);
      dfs(root.right, currentDigit);
    } 
    dfs(root, '');

    let total = digits.reduce((acc,curr) => {
       return +curr + acc;
    },0);

    return total;
};