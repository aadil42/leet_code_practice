/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Hashing | kind of like brute-force.
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/find-duplicate-subtrees/
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    
    const stringHash = {};

    const makePreOrderStr = (node, str) => {
        if(!node) return str + "-" + "null";
        
        const str1 = makePreOrderStr(node.left, str + "-" +node.val);
        const str2 = makePreOrderStr(node.right, str1);

        return str2;
    }

    const duplicates = [];

    const dfs = (node) => {
        if(!node) return;
        const str = makePreOrderStr(node, "");

        if(!stringHash[str]) {
            stringHash[str] = [];
        }
        
        stringHash[str].push(node);

        dfs(node.left);
        dfs(node.right);
    }   

    dfs(root);
    
    for (let key in stringHash) {
        if(stringHash[key].length > 1) duplicates.push(stringHash[key][0]);
    }

    return duplicates;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Brute force | DFS 
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/find-duplicate-subtrees/
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees0 = function(root) {
    
    const findNodes = (node, targetTree, possibleTrees) => {
        if(!node) return;
        if(node === targetTree) return;
        if(node.val === targetTree.val) {
            possibleTrees.push(node);
        }

        findNodes(node.left, targetTree, possibleTrees);
        findNodes(node.right, targetTree, possibleTrees);

        return possibleTrees;
    }

    const checkSameTree = (node1, node2) => {

        if(!node1 && !node2) return true;

        if(node1 === node2) return false;
        if(node1 && !node2) return false;
        if(!node1 && node2) return false;

        if(node1.val !== node2.val) return false;

        return checkSameTree(node1.left, node2.left) && checkSameTree(node1.right, node2.right);
    }

    const allSubTrees = [];

    const dfs = (node) => {
        if(!node) return;
        findNodes(root, node, allSubTrees);

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    const duplicateTrees = new Set();
    
    for(let i = 0; i < allSubTrees.length; i++) {
        for(let j = i+1; j < allSubTrees.length; j++) {
            if(allSubTrees[j] !== null && checkSameTree(allSubTrees[i], allSubTrees[j])) {
                allSubTrees[j] = null;
                duplicateTrees.add(allSubTrees[i]);
            }
        }
    }

    return [...duplicateTrees];
};