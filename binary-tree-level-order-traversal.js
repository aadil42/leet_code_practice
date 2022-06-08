var heightOfTree = function(root) {
    let maxHeight = 0;
    goRecursive(root, 0);
    function goRecursive(root, height) {
        if(!root) return;
        maxHeight = Math.max(height, maxHeight);
        goRecursive(root.left, height + 1);
        goRecursive(root.right, height + 1);
    }
    
    return maxHeight;
}
var levelOrder = function(root) {
    if(!root) return [];
   const height = heightOfTree(root);
    
    const levelOrderArr = []; 
    for(let i = 0; i < height + 1; i++) {
        levelOrderArr.push(goRecursive(root, i, []));
    }
    
    function goRecursive(root, level, levelArr) {
        if(!root) return levelArr;
        if(level === 0) {
            levelArr.push(root.val);
            return levelArr;
        } else {
          levelArr = goRecursive(root.left, level - 1, levelArr);
          levelArr = goRecursive(root.right, level - 1, levelArr);
        }
            return levelArr;
    }
    
    return levelOrderArr;
};