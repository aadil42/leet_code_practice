/**
 * Recursion
 * h = height of the tree;
 * Time O(h) | Space O(height of the tree)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return root;

    if(key === root.val) {
        if(!root.left) return root.right;
        if(!root.right) return root.left;

        // find the smallest val in right bst
        let curr = root.right;
        while(curr.left) {
            curr = curr.left;
        }
        // change the curr value
        root.val = curr.val;

        root.right = deleteNode(root.right, root.val);
    } else if(key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }

    return root;
};

// very good and elegent use of rcursion. amazing!!




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
 * Time  O(n) | Space O(n)
 * https://leetcode.com/problems/delete-node-in-a-bst/
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode0 = function(root, key) {
    
    if(!root) return root;

    const getTheRightMost = (node) => {
        if(!node) return null;
        if(!node.right) return node;

        return getTheRightMost(node.right);
    }

    const dfs = (node) => {
        if(!node) return false;
        if(!node.left && !node.right) return false;

        if(node.left && node.left.val === key) return node;
        if(node.right && node.right.val === key) return node;

        return dfs(node.left) || dfs(node.right);
    }

    const dummyNode = new TreeNode(null, root);

    const targetNode = dfs(dummyNode);

    if(!targetNode) return root;

    if(targetNode.left && targetNode.left.val === key) {

        const rightMostOfLeft  = getTheRightMost(targetNode.left.left);
        const rightOfTarget = targetNode.left.right;

        if(rightMostOfLeft) {
            rightMostOfLeft.right = rightOfTarget;
            targetNode.left = targetNode.left.left;
        }
        if(!rightMostOfLeft) {
            targetNode.left = rightOfTarget;
        }
    }

    if(targetNode.right && targetNode.right.val === key) {

        const rightMostOfLeft  = getTheRightMost(targetNode.right.left);
        const rightOfTarget = targetNode.right.right;
        
        if(rightMostOfLeft) {
            rightMostOfLeft.right = rightOfTarget;
            targetNode.right = targetNode.right.left;
        }
        if(!rightMostOfLeft) {
            targetNode.right = rightOfTarget;
        }
    }
    
    return dummyNode.left;
};