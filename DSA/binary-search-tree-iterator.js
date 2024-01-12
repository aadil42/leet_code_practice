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
var BSTIterator = function(root) {
    this.stack = [];
    this.addToStack(root);
};

BSTIterator.prototype.addToStack = function(root) {

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
BSTIterator.prototype.next = function() {
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
BSTIterator.prototype.hasNext = function() {
    return this.stack.length ? true : false;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */