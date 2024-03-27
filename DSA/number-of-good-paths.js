/**
 * Brute Force | DFS
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/number-of-good-paths/
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function(vals, edges) {
    
    vals = vals.map((val, idx) => [idx, val]);
    const nodeValHash = {};

    // store the index-value pair so you don't have to search the whole array each time.
    for(let i = 0; i < vals.length; i++) {
        nodeValHash[vals[i][0]] = vals[i][1];
    }

    vals.sort((a,b) => a[1]-b[1]);

    const createGraph = (edges) => {
        const graph = {};

        for(let i = 0; i < edges.length; i++) {
            
            const from = edges[i][0];
            const to = edges[i][1];

            if(!graph[from]) {
                graph[from] = [];
            }

            if(!graph[to]) {
                graph[to] = [];
            }

            graph[from].push(to);
            graph[to].push(from);
        }

        return graph;
    }

    const graph = createGraph(edges);

    const dfs = (node, pre, target, limit) => {

        if(nodeValHash[node] > limit) return false;
        if(node === target) return true;

        const neighbors = graph[node];
        for(let i = 0; i < neighbors.length; i++) {
            const nextNode = neighbors[i];
            if(nextNode === pre) continue;
            if(dfs(nextNode, node, target, limit)) return true;
        }

        return false;
    }

    let goodPaths = vals.length;

    for(let i = 0; i < vals.length; i++) {
        for(let j = i+1; j < vals.length && vals[j][1] === vals[i][1]; j++) {
            if(dfs(vals[i][0], -1, vals[j][0], vals[i][1])) {
                goodPaths++;
            }
        }
    }
    
    return goodPaths;
};