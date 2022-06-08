function makeInOrderArray(root) {
    const InOrderArr  = [];
        
    goRecursive(root);
    function goRecursive(root) {
        if(!root) return;
        goRecursive(root.left);
        InOrderArr.push(root.val);
        goRecursive(root.right);
    };
    return InOrderArr;
}

var isValidBST = function(root) {
    if(!root) return;
    inOrderArr = makeInOrderArray(root);
    
    for(let i = 0; i < inOrderArr.length; i++) {
        if(i+1 < inOrderArr.length && inOrderArr[i] >= inOrderArr[i+1]) {
            return false;
        }
    }
    
    return true;
};