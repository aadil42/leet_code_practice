/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * h = height of the tree, could be n.
 * Time O(h) | Space O(h)
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    
    const dfs = (root) => {
        if(!root) {
            return new TreeNode(val);
        }
        if(val > root.val) {
            root.right = dfs(root.right);
        }  else {
            root.left = dfs(root.left);
        }
        return root;
    }

    return dfs(root);
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
 * DFS 
 * Time O(n) | Space O(n) (in the worst case the tree could be skewd to right or left)
 * https://leetcode.com/problems/insert-into-a-binary-search-tree/
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST0 = function(root, val) {
    
    if(!root) return new TreeNode(val);

    const dfs = (node, pre) => {
        if(!node) {
            if(val < pre.val) {
                pre.left = new TreeNode(val);
            }
            if(val > pre.val) {
                pre.right = new TreeNode(val);
            }
            return;
        }

        if(val < node.val) return dfs(node.left, node);
        return dfs(node.right, node);
    }   

    dfs(root, null);
    
    return root;
};