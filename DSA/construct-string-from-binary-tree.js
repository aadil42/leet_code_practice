/**
 * InOrder Traversal 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/construct-string-from-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function(root) {

    let str = "";
    const dfs = (node) => {
        if(!node) return;
        str += node.val;
        if(node.right  || node.left) str += "(";
        dfs(node.left);
        if(node.right || node.left) str += ")";

        // right tree
        if(node.right) str += "(";
        dfs(node.right);
        if(node.right) str += ")";
    }

    dfs(root);
    return str;
};

/**
 * Pre Order Traversal
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
 * @return {string}
 */
var tree2str1 = function(root) {
    const result = [];
    function dfs(root) {
        if(!root) return;

        result.push('(');
        result.push(root.val);

        if(!root.left && root.right) {
            result.push('()');
        }
        dfs(root.left);
        dfs(root.right);
        result.push(")");
    }
    dfs(root);
    return result.slice(1,result.length - 1).join('');
};