var maxPathSum = function(root) {
  
    let max = -Infinity;
    
    function dfs(root) {
        if(!root) return 0;
        // just remember why we're taking max value between 0 and left/right 
        let left = Math.max(0, dfs(root.left));
        let right = Math.max(0, dfs(root.right));
        
        let newSum = root.val + left + right;
        if(newSum > max) {
            max = newSum;
        }
        
        return root.val + Math.max(left, right);
    }
    
    dfs(root);
    return max;
};

var maxPathSumR = function(root) {

    let max = -Infinity;
   
    function dfs(root) {
        if(!root) return 0;
   
        // taking max is really crucial.
        const left = Math.max(0, dfs(root.left));
        const right = Math.max(0, dfs(root.right));
   
       const sum = root.val +  left + right;
       max = Math.max(sum, max);
   
       return root.val + Math.max(left, right);
    } 
       dfs(root);
    return max;
   }