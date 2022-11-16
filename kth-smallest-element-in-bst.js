function makeInOrderArr(root) {
    const inOrderArr = [];
    
    goRecursive(root);
    function goRecursive(root) {
        if(!root) return;
        goRecursive(root.left);
        inOrderArr.push(root.val);
        goRecursive(root.right);
    }
    
    return inOrderArr;
}
var kthSmallest = function(root, k) {
    
    if(!root) return;
    const inOrderArr = makeInOrderArr(root);
    
    if(k <= inOrderArr.length) {
    return inOrderArr[k-1];
    }
    
};

var kthSmallestR = function(root, k) {

    const InArr = makeInOrderArr(root);
    return InArr[k - 1];
};