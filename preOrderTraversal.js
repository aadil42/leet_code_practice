var preorderTraversal = function(root) {
    if(!root) return [];
     const result = [];
    
    function goRecursive(root) {
        
        if(!root) return;
        result.push(root.val);
        goRecursive(root.left);
        goRecursive(root.right);
    }
    goRecursive(root);
    return result;
};