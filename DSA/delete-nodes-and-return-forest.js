/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Tree | Hashing | DFS
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/delete-nodes-and-return-forest
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    
    // bind tree so each node has parent ref.
    // create 2 sets one for each node. and second for the  answers node.

    // get the toBeDeleted node from allnodes add it's left right child to answer.
    // make their parent node null.
    // make toBeDeleted node parent respective left/right child null.

    const bindTree = (root) => {

        const dfs = (node, pre) => {
            if(!node) return;

            node.parent = pre;
            dfs(node.left, node);
            dfs(node.right, node);

        }

        dfs(root, null);
    }


    const forest = new Set();
    forest.add(root);
    const allNodes = {}
    bindTree(root);

    const dfs = (node) => {
        if(!node) return;

        allNodes[node.val] = node;
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);

    // prune the tree
    for(let i = 0; i < to_delete.length; i++) {

        const deleteNodeVal = to_delete[i];
        const deleteNode =  allNodes[deleteNodeVal];
        
        if(deleteNode.left) {
            deleteNode.left.parent = null;
            forest.add(deleteNode.left);
            deleteNode.left = null;
        }
        if(deleteNode.right) {
            deleteNode.right.parent = null;
            forest.add(deleteNode.right);
            deleteNode.right = null;
        }   

        // if the parent node is null then it was the root node. delete it from forest
        if(deleteNode.parent === null) {
            forest.delete(deleteNode);
            continue;
        }
        
        // is the delete node left of parent.
        if(deleteNode.parent.left === deleteNode) {
            deleteNode.parent.left = null;
        }
        // is the delete node right of parent.
        if(deleteNode.parent.right === deleteNode) {
            deleteNode.parent.right = null;
        }

        deleteNode.parent = null;
    }
    
    return [...forest];
};