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


// below solution is way more easy to grasp.
var invertTreeR = function(root) {
    
    
    function dfs(root) {
        if(!root) return root;

        dfs(root.left);
        dfs(root.right);
        swap(root);

        return root;
    }

   return dfs(root);
   
};
