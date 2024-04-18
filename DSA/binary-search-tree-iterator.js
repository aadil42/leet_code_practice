/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Tree | InOrder-traversal 
 * Time O(1) | Space O(n)
 * https://leetcode.com/problems/binary-search-tree-iterator/
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    
    this.inOrderArr = [];

    const inOrderTraverse = (node) => {
        if(!node) return;

        inOrderTraverse(node.left);
        this.inOrderArr.push(node.val);
        inOrderTraverse(node.right);
    }
    
    inOrderTraverse(root);

    this.inOrderArr.reverse();
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.inOrderArr.pop();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.inOrderArr.length) return true;
    return false;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
////////////////////////////////////////////////////////////////////////
/**
 * Iterator traversal.
 * Time O(1) | Space O(h). h = height of the tree.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator0 = function(root) {
    this.stack = [];
    this.addToStack(root);
};

BSTIterator0.prototype.addToStack = function(root) {

    let currentRoot = root;
    while(currentRoot) {
        // console.log(currentRoot);
        this.stack.push(currentRoot);
        currentRoot = currentRoot.left;
    }
}
/**
 * @return {number}
 */
BSTIterator0.prototype.next = function() {
    // console.log(this.stack,  this.stack[this.stack.length - 1]);
    
    const next = this.stack.pop();

    if(next.right) {
        this.addToStack(next.right);
    }
    return next.val;
};

/**
 * @return {boolean}
 */
BSTIterator0.prototype.hasNext = function() {
    return this.stack.length ? true : false;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */