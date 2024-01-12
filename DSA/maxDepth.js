var maxDepth = function(root) {
    let max = 0;
    goRecursive(root, 1);
    function goRecursive(root, count) {
        if(!root) return;
        max = Math.max(max, count);
        goRecursive(root.left, count + 1);
        goRecursive(root.right, count + 1);
    }
    
    return max;
};
