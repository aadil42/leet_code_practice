/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * DFS | Tree-traversal
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/invert-binary-tree/
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    const swap = (node) => {
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
    }

    const dfs = (node) => {
        if(!node) return null;
        
        swap(node);
 
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return root;
};

var swap = function(root) {
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
}


var invertTree = function(root) {
    
    function goRecursive(root) {
        if(!root) return root;
        swap(root);
        goRecursive(root.left);
        goRecursive(root.right);
        // find out why post order traversal is not working with this.
        // root.left = rightReturn;
        // root.right = leftReturn;
        return root;
    }
    
 
   return goRecursive(root);
};


// below solution is way more easy to grasp.
var invertTreeR = function(root) {
    
    
    function dfs(root) {
        if(!root) return root;

        dfs(root.left);
        dfs(root.right);
        swap(root);

        return root;
    }

   return dfs(root);
   
};
