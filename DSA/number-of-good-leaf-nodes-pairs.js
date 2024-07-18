/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * BruteFoce | BFS | Tree 
 * Time O(n^2*10) | Space O(n)
 * https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/?envType=daily-question&envId=2024-07-18
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {

    // create parent binding
    // get all the leaf node in pre-order-traversal order.
    // try to get each node to the right of it and see if it's a good node.
    // a bfs helper function which takes src and target and gives as all the possible good nodes.

    const bindTree = (root) => {
        const dfs = (node, pre) => {
            if(!node) return;
            node.parent = pre;
            dfs(node.left, node);
            dfs(node.right, node);
        }
        dfs(root, null);
    }

    const getLeafNodes = (root) => {
        const leafNodes = [];
        const dfs = (node) => {
            if(!node.left && !node.right) {
                leafNodes.push(node);
                return;
            }
            node.left && dfs(node.left);
            node.right && dfs(node.right);
        }
        dfs(root);
        return leafNodes;
    }

    const shortestPath = (src, target, limit) => {

        const bfs = (node) => {
            const q = new Queue();
            const visited = new Set();

            q.enqueue([src, 0]);
            while(!q.isEmpty()) {
                const [node, currDistance] = q.dequeue();
                visited.add(node);
                
                if(currDistance > limit) continue;
                if(node === target) return true;

                // add neighbor nodes.
                if(node.left && !visited.has(node.left)) {
                    q.enqueue([node.left, currDistance+1]);
                }
                if(node.right && !visited.has(node.right)) {
                    q.enqueue([node.right, currDistance+1]);
                }
                if(node.parent && !visited.has(node.parent)) {
                    q.enqueue([node.parent, currDistance+1]);
                }
            }

            return false;
        }
        if(bfs(src)) return true;
        return false;
    }

    bindTree(root);
    const leafNodes = getLeafNodes(root);
    let goodPairs = 0;

    for(let i = 0; i < leafNodes.length; i++) {
        const srcNode = leafNodes[i];
        for(let j = i+1; j < leafNodes.length; j++) {
            const targetNode = leafNodes[j];
            if(shortestPath(srcNode, targetNode, distance)) {
                goodPairs++;
            }
        }
    }
    return goodPairs;
    
};