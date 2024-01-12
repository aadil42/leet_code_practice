var postorderTraversal = function(root) {
    if(!root) return [];
     const result = [];
    
    function goRecursive(root) {
        
        if(!root) return;
        goRecursive(root.left);
        goRecursive(root.right);
        result.push(root.val);
    }
    goRecursive(root);
    return result;
};