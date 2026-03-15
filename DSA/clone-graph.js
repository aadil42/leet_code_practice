var cloneGraph = function(node) {
    
    const visited = new Map();
    function dfs(node) {
        if(!node) return;
        if(visited.has(node)) return visited.get(node);
        
        const nodeCopy = new Node(node.val);
        visited.set(node, nodeCopy);
        for(let i = 0; i < node.neighbors.length; i++) {
            nodeCopy.neighbors.push(dfs(node.neighbors[i]));
        }
        
        return nodeCopy;
    }
    
    return dfs(node);
};

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * Recursion | DFS
 * Time O(n) | Space O(n*m) (m = number of edges)
 * https://leetcode.com/problems/clone-graph/submissions/1949297973/
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph0 = function(node) {
    
    const dfs = (cNode, node, cloneMap) => {

        if (!node) return null;
        if (cloneMap[node.val]) return cloneMap[node.val];

        cNode.val = node.val;
        cloneMap[cNode.val] = cNode;

        for (let i = 0; i < node.neighbors.length; i++) {
            const nextNode = node.neighbors[i];
            const nodeToBePushed = dfs(new _Node(), nextNode, cloneMap);
            cNode.neighbors.push(nodeToBePushed);
        }

        return cNode;
    }

    return dfs(new _Node(), node, {});
};