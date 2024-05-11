/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Brute Force
 * Time O(n^2) | space O(n)
 * https://leetcode.com/problems/subtree-of-another-tree/
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    const isSame = (node1, node2) => {
        if(!node1 && !node2) return true;
        if(!node1 && node2) return false;
        if(node1 && !node2) return false;

        if(node1.val !== node2.val) return false;

        return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
    }

    const dfs = (node) => {
        if(!node) return false;
        if(isSame(node, subRoot)) return true;

        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root);
};

//  you need to have a proper  data structure for that. If you don't have a data structure paste code here https://leetcode.com/problems/subtree-of-another-tree/submissions/

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

// time complexity is (Numberof nodes in root * numberof nodes in subRoot)
var isSubtree1 = function(root, subRoot) {
    
  function goRecursive(root, subRoot) {
      if(!root) return false;
      if(isSameTree(root, subRoot)) return true;
      
      return (goRecursive(root.left, subRoot) || goRecursive(root.right, subRoot));
  } 
    
    return goRecursive(root, subRoot);
};


// solved second time.
var isSubtreeR = function(root, subRoot) {
    
    function dfs(root, subRoot) {
        if(!root) return false;
        if(isSameTree(root, subRoot)) return true;

        // dfs(root.left, subRoot);
        // dfs(root.right, subRoot);

        return dfs(root.left, subRoot) || dfs(root.right, subRoot);
    }

    return dfs(root, subRoot);
};


// another method. aadil042 came up with it. time complexity is O(n). only the numberof nodes that are in (rootArr + subRootarr).
var isSubtree2 = function(root, subRoot) {
    
    const rootArr = [];
    const subRootArr = [];

    function dfs(root, currentArr) {
        root ? currentArr.push( "0" + root.val) : currentArr.push('n');
        if(!root) return;
     
        dfs(root.left, currentArr);
        dfs(root.right, currentArr); 
    }

    dfs(root, rootArr);
    dfs(subRoot, subRootArr);
    console.log(rootArr, subRootArr);
    return rootArr.join('').includes(subRootArr.join(''));
};