/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * LevelOrderTraversal | BFS
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/cousins-in-binary-tree-ii
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    
    const levelSum = [];

    const q = new Queue();
    q.enqueue(root);

    while(!q.isEmpty()) {

        let total = 0;
        const size = q.size();

        for(let i = 0; i < size; i++) {
            const node = q.dequeue();
            total += node.val;
            node.left && q.enqueue(node.left);
            node.right && q.enqueue(node.right);
        }    

        levelSum.push(total);
    }


    makeParentLink(root);

    const dfs = (node, level) => {
        if(!node) return;

        const currLevelSum = levelSum[level];

        const leftVal = (node.parent.left && node.parent.left.val) || 0;
        const rightVal = (node.parent.right && node.parent.right.val) || 0;

        if(currLevelSum - (leftVal + rightVal) >= 0) {
            node.tempVal = currLevelSum - (leftVal + rightVal);
        } else {
            node.tempVal = 0;
        }

        dfs(node.left, level+1);
        dfs(node.right, level+1);
    }

    dfs(root, 0);
    updateValue(root);
    return root;  
};

const updateValue = (root) => {
    const dfs = (node) => {
        if(!node) return;
        node.val = node.tempVal;
        delete node.tempval;
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
}

const makeParentLink = (root) => {

    const dfs = (node, parent) => {
        if(!node) return;
        
        node.parent = parent;
        dfs(node.left, node);
        dfs(node.right, node);
    }

    dfs(root, new TreeNode(null, root, root));
}