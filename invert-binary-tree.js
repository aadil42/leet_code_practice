var swap = function(root) {
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
}


var invertTree = function(root) {
    
    function goRecursive(root) {
        if(!root) return root;
        swap(root);
        goRecursive(root.left);
        goRecursive(root.right);
        // find out why post order traversal is not working with this.
        // root.left = rightReturn;
        // root.right = leftReturn;
        return root;
    }
    
 
   return goRecursive(root);
};