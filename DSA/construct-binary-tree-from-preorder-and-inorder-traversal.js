class TreeNode{
    constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Recursion | Tree 
 * Time O(n) |  Space O(n)
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    let currNodeIdx = 0; // this idx is for traversing preorder

    const dfs = (start, end) => {
        if(start === end)  {
            const node = new TreeNode(inorder[start]);
            currNodeIdx++;
            return node;
        }
        
        if(start > end) return null;

        let rootIdx = 0;
        for(let i = start; i < end + 1; i++) {
            if(inorder[i] === preorder[currNodeIdx]) {
                rootIdx = i;
                break;
            }
        }
        currNodeIdx++;

        const root = new TreeNode(inorder[rootIdx]);
        root.left = dfs(start, rootIdx-1);
        root.right = dfs(rootIdx+1, end);

        return root;
    }

    return dfs(0, preorder.length - 1);
};

var buildTree0 = function(preO, inO) {

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


var buildTreeR = function(preO, inO) {
    
    function goRecursive(inO, isi, iei, preO, psi, pei) {

        if(iei < isi) return null;

        let currentIndex = isi;
        while(inO[currentIndex] !== preO[psi]) {
            currentIndex++;
        }

        const root = new TreeNode(preO[psi]);
        const totalElementUntillCurrentRoot = currentIndex - isi;
       
       
        root.left = goRecursive(inO, isi, currentIndex - 1, preO, psi + 1, totalElementUntillCurrentRoot + psi);
        root.right = goRecursive(inO, currentIndex + 1, iei, preO, psi + totalElementUntillCurrentRoot + 1, pei);

        return root;
    }

    return goRecursive(inO, 0, inO.length - 1, preO, 0, preO.length - 1);
};