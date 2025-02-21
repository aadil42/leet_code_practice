/**
 * Tree | Set
 * https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time O(n) | Space O(n)
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    
    this.root = root;
    this.set = new Set();
    
    const dfs = (node, val) => {
        if (!node) return;
        node.val = val;
        this.set.add(val);
        dfs(node.left, val * 2 + 1);
        dfs(node.right, val * 2 + 2);
    }

    dfs(root, 0);
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    if (this.set.has(target)) return true;
    return false;
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */