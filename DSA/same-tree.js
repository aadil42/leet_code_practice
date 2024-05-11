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
 * https://leetcode.com/problems/same-tree/
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    const dfs = (node1, node2) => {
        if(!node1 && !node2) return true;
        if(node1 && !node2) return false;
        if(!node1 && node2) return false;

        if(node1.val !== node2.val) return false;
        return dfs(node1.left, node2.left) && dfs(node1.right, node2.right);
    }

    return dfs(p, q);
};

// you need appropriate data structure to run this code. If you don't have any paste this code in this editor https://leetcode.com/problems/same-tree/submissions/

var isSameTree0 = function(p, q) {
    
    
    function goRecursive(p, q) {
        
        if((!p && q) || (p && !q)) return false;
        if(!p && !q) return true;
        
        if(p.val !== q.val) {
            return false;
        }   
        
       return  (goRecursive(p.left, q.left) &&  goRecursive(p.right, q.right));
    }
    
    return goRecursive(p, q);
};


// solved it second time.
var isSameTreeR = function(p, q) {
    

    const pArray = [];
    const qArray = [];

    function dfs(root, currentA)  {
        root ? currentA.push(root.val) : currentA.push('n');
        if(!root) return;

        dfs(root.left, currentA);
        dfs(root.right, currentA);
    }

    dfs(p, pArray);
    dfs(q, qArray);


    return pArray.join('') === qArray.join('');
};