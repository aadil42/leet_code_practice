/**
 * Tree | BFS
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    
    // get the source node.
    const getSourceNode = (root) => {
        
        const dfs = (node) => {
            if(!node) return false;
            if(node.val === startValue) return node;
            return dfs(node.left) || dfs(node.right);
            return false;
        }

        return dfs(root);
    }


    const bindTree = (root) => {
        const dfs = (node, pre) => {
            if(!node) return;

            node.parent = pre;
            dfs(node.left, node);
            dfs(node.right, node);
        }

        dfs(root, null);
    }



    const getTargetNode = (sourceNode) => {
        
        const q = new Queue();
        q.enqueue(sourceNode);
        const visited = new Set();

        while(!q.isEmpty()) {

            let size = q.size();

            while(size) {
                
                const node = q.dequeue();
                visited.add(node);
                
                if(node.val === destValue) return node;
                if(node.left && !visited.has(node.left)) {
                    const nextNode = node.left;
                    nextNode.direction = "L";
                    nextNode.pre = node;
                    q.enqueue(nextNode);
                }
                if(node.right && !visited.has(node.right)) {
                    const nextNode = node.right;
                    nextNode.direction = "R";
                    nextNode.pre = node;
                    q.enqueue(nextNode);

                }
                if(node.parent && !visited.has(node.parent)) {
                    const nextNode = node.parent;
                    nextNode.direction = "U";
                    nextNode.pre = node;
                    q.enqueue(nextNode);
                }

                size--; 
            }
        }

    }

    const getReversePath = (targetNode) => {

        const dfs = (node, path) => {
            if(!node.pre) return path;
            path += node.direction;
            return dfs(node.pre, path);
        }

        return dfs(targetNode, "");
    }

    const sourceNode = getSourceNode(root);
    bindTree(root);
    const targetNode = getTargetNode(sourceNode);
    const shortestPath = getReversePath(targetNode);
    return shortestPath.split("").reverse().join("");
};