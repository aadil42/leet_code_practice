/**
 * Tree traversal
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/find-mode-in-binary-search-tree
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var findMode = function(root) {

    const occuranceMap = new Map();

    const dfs = (node) => {
        if(!node) return 0; 

        if(occuranceMap.has(node.val)) occuranceMap.set(node.val, occuranceMap.get(node.val) + 1);
        if(!occuranceMap.has(node.val)) occuranceMap.set(node.val, 1);

        dfs(node.left);
        dfs(node.right); 
    }

    dfs(root);

    let resultStack = [];
    for(const [key, val] of occuranceMap) {
        if(val > (resultStack[resultStack.length - 1] && resultStack[resultStack.length - 1][1])) {
            resultStack = [[key, val]];
            continue;
        } 
        if(val === (resultStack[resultStack.length - 1] && resultStack[resultStack.length - 1][1]) ) {
            resultStack.push([key, val]);
            continue;
        }
        if(resultStack.length === 0) resultStack.push([key, val]);

    }

    return resultStack.map((node) => node[0]);
};

/**
 * Binary Search
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/find-mode-in-binary-search-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var findMode1 = function(root) {
    
    const countOccurance = (target) => {
        const dfs = (node) => {
            if(!node) return 0;

            if(target < node.val) return dfs(node.left);
            if(target > node.val) return dfs(node.right);
            
            return 1 + dfs(node.left) + dfs(node.right);
        }

        return dfs(root);
    }

    const modesArr = [];

    for(let i = -1 * (10**5); i < (10**5 + 1); i++) {
        modesArr.push([i, countOccurance(i)]);
    }

    modesArr.sort((a, b) => {
        return b[1] - a[1];
    });

    let i = 0;
    while(modesArr[i][1] === (modesArr[i+1] && modesArr[i+1][1])) {
        i++;
    }
    return modesArr.slice(0, i+1).map((node) => node[0]);
};