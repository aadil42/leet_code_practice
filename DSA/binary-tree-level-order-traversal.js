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

var levelOrder2 = function(root) {
    if(!root) return [];
    const treeHeight = heightOfTree(root);

    const levelOrderArr = [];
    for(let i = 0; i <= treeHeight; i++) {
        levelOrderArr.push(goRecursive(root, i, []));
    }

    function goRecursive(root, level, currentArr) {
        if(!root) return currentArr;

        if(level === 0) {
            currentArr.push(root.val);
            return currentArr;
        }

        currentArr = goRecursive(root.left, level-1, currentArr);
        currentArr = goRecursive(root.right, level-1, currentArr);

        return currentArr;
    }

    return levelOrderArr;
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
 * BFS traversal
 * Time O(n^2) | Space O(n) (time is exponential because we're using array as a queue, with normal queue it would be n)
 *  https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/1937804715/
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder3 = function(root) {

    if (!root) return [];

    const queue = [root];
    const bfsTraversal = [];

    while (queue.length) {

        let len = queue.length;
        const level = [];
        while (len) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            len--;
        }

        bfsTraversal.push(level);
    }

    return bfsTraversal;
};