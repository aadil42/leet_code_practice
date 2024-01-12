/**
 * Recursion.
 * Time O(n) | Space O(h). h = height of the tree.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    function helper(left,right) {

        if(right < left) return null;
        const mid = Math.floor((left + right)/2);

         const root = new TreeNode(nums[mid]);
         root.left = helper(left, mid - 1);
         root.right = helper(mid + 1, right);

         return root;
    }
    return helper(0, nums.length-1);
};