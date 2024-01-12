// you need appropriate data structure to run this code. If you don't have any paste this code in this editor https://leetcode.com/problems/same-tree/submissions/

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