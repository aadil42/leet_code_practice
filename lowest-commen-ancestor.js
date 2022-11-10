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



/////////////////
function findPathR(root,target) {

    const pathArr = [];
    dfs(root);

    function dfs(root) {

        if(!root) return false;
        pathArr.push(root.val);

        if(root.val === target) {
            return true;
        }

        if(dfs(root.left) || dfs(root.right)) {
            return true;
        }
        pathArr.pop();
        return false;
    }
   
    return pathArr;
}


var lowestCommonAncestorR = function(root, p, q) {

    const qPath = findPathR(root, q);
    const pPath = findPathR(root, p);

console.log(qPath, pPath);
    const maxLen = Math.max(pPath.length, qPath.length);

    for(let  i = 0; i < maxLen; i++) {
        if(pPath[i] !== qpath[i]) {
            console.log(pPath[i - 1]);
            return pPath[i - 1];
        }
    }    
};