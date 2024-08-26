/**
 * PostOrderTraversal | Recursion
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    
    const dfs = (node, arr) => {

        if(!node) return arr;

        for(let i = 0; i < node.children.length; i++) {
            dfs(node.children[i], arr);
        }

        arr.push(node.val);
        return arr;
    }

    return dfs(root, []);
};