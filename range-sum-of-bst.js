/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * DFS | Recursion
 * Time O(n)  | Space O(n)
 * https://leetcode.com/problems/range-sum-of-bst
 * 
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    let total = 0;

    const dfs = (node) => {
        if(!node) return;
        if(node.val >= low && node.val <= high) total += node.val;
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
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
 * InOrder Traversel | Tree
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/range-sum-of-bst/ 
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST1 = function(root, low, high) {
    
    const arr = [];

    const inOrderTraversel = (node) => {
        if(!node) return;
        inOrderTraversel(node.left);
        arr.push(node.val);
        inOrderTraversel(node.right);
    }

    inOrderTraversel(root);
    // console.log(arr);
    // console.log(arr.slice(arr.findIndex(low), arr.findIndex(high) + 1));
    return arr.slice(arr.indexOf(low), arr.indexOf(high) + 1).reduce((acc,num) => {
        return num+acc;
    }, 0); 

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
 * Binary Search
 * Time O(n*log(n)) | Space O(log(n))
 * https://leetcode.com/problems/range-sum-of-bst/ 
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST2 = function(root, low, high) {

    const bs = (node, val) => {
        if(!node) return false;
        if(node.val === val) return true;
        if(val > node.val) return bs(node.right, val);
        if(val < node.val) return bs(node.left, val);
    }

    let total = 0;
    let i = low;

    while(i < high + 1) {
        
        if(bs(root, i)) total += i;
        i++;
    }
    return total;
};