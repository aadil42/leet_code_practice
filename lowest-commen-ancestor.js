function findPath(root,target) {
    const path = [];    
    goRicursive(root, path);
    
    function goRicursive(root, curruntArr) {
    if(!root) return false;
        
    curruntArr.push(root.val);
    if(root.val === target) {
        return true;
    }
    if(goRicursive(root.left, curruntArr) || goRicursive(root.right, curruntArr)) {
       return true;
    }
    curruntArr.pop();
    return false;
    }

    return path;
}


var lowestCommonAncestor = function(root, p, q) {
    
    const pPath = findPath(root, p.val);
    const qPath = findPath(root, q.val);
   
    const maxLen = Math.max(pPath.length, qPath.length);
    let CA = 0;
    
  
    for(let i = 0; i < maxLen; i++) {
        if(pPath[i] !== qPath[i]) {
            CA = pPath[i - 1];
            break;
        }
    }

    console.log(CA);
    return CA;
    // return CA;
};

