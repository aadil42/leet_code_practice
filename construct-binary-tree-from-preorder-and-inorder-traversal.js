class TreeNode{
    constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    }
}

var buildTree = function(preO, inO) {

    function goRecursive(inO, isi, iei, preO, psi, pei) {
        if(eie < isi) return null;

        let curruntIndex = isi;
        while(inO[curruntIndex] !== preO[psi]) {
            curruntIndex++;
        }

        const root = new TreeNode(preO[psi]);
        const totalElementUntilRoot = curruntIndex - isi;
        
        root.left = goRecursive(inO, isi, curruntIndex - 1, preO, psi + 1, psi + totalElementUntilRoot);
        root.right = goRecursive(inO, curruntIndex + 1, iei, preO, psi + 1 + totalElementUntilRoot, pei);
        return root;
    }

    return goRecursive(inO, 0, inO.length - 1, preO, 0, preO.length - 1);

};

const pre = [1,2,4,8,9,5,10,11,3,6,13,12,7,14,15];
const inO = [8,4,9,2,10,5,11,1,13,6,12,3,7,15,14];

buildTree(pre, inO);