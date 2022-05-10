//  you need to have a proper  data structure for that. If you don't have a data structure paste code here https://leetcode.com/problems/subtree-of-another-tree/submissions/
var isSameTree = function(p, q) {
    
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

var isSubtree = function(root, subRoot) {
    
  function goRecursive(root, subRoot) {
      if(!root) return false;
      if(isSameTree(root, subRoot)) return true;
      
      return (goRecursive(root.left, subRoot) || goRecursive(root.right, subRoot));
  } 
    
    return goRecursive(root, subRoot);
};