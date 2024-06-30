/**
 * Time O(n^2) | Space O(n^2)
 * Graph | DFS
 * https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/ 
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    
    const child2Parent = {};

    for(let i = 0; i < edges.length; i++) {

        const parent = edges[i][0];
        const child = edges[i][1];

        if(!child2Parent[child]) {
            child2Parent[child] = [];
        }

        child2Parent[child].push(parent);
    }

    const parentsOfINode = (node, arr, visited) => {
        
        if(visited.has(node)) return arr;

        visited.add(node);
        arr.push(node);
        const neighbors = child2Parent[node] || [];
        for(let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            arr = parentsOfINode(neighbor, arr, visited);
        }
        return arr;
    }

    const result = [];
    for(let i = 0; i < n; i++) {

        const neighbors = child2Parent[i] || [];
        const parents = [];
        const visited = new Set();
        
        for(let i = 0; i < neighbors.length; i++) {
            const parent = neighbors[i];
            parents.push(...parentsOfINode(parent, [], visited));
        }

        const unique = [...new Set(parents)];
        unique.sort((a,b) => a-b);
        result.push(unique);
    }

    return result;
};