/**
 * DFS 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {

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
    
    const graph = createGraph(connections);
    const edgesSet = new Set();
    const visited = new Set();
    // console.log(graph);
    for(let i = 0; i < connections.length; i++) {
        const from = connections[i][0];
        const to = connections[i][1];

        edgesSet.add(`${from}-${to}`);
    }

    let minPathReorder = 0;

    const dfs = (pre, node) => {
        
        if(visited.has(node)) return;
        visited.add(node);
        l
        const edge = `${pre}-${node}`;
        if(edgesSet.has(edge)) minPathReorder++;

        const neighbors = graph[node] || [];

        for(let i = 0; i < neighbors.length; i++) {
            const nextNode = neighbors[i];
            dfs(node, nextNode);
        }
    }


    dfs(-1, 0);
    return minPathReorder;
};

/**
 * dfs traversal.
 * Time O(n) | Space O(n)
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder1 = function(n, connections) {
    
    const edges = new Set();
    const visited = new Set();
    const graph = new Map();
    let count = 0;
    // adding all true edges
    for(let i = 0; i < connections.length; i++) {
        const hash = connections[i][0] +"-"+connections[i][1];
        edges.add(hash);
    }
    // make graph
    // console.log(edges);
    for(let i = 0; i  < connections.length; i++) {
        const temp = graph.get(connections[i][0]) || [];
        const temp2 = graph.get(connections[i][1]) || [];

        graph.set(connections[i][0],[...temp, connections[i][1]]);
        graph.set(connections[i][1],[...temp2, connections[i][0]]);
    }
    // console.log(graph);
    // dfs traversal.
    function dfs(city) {
        const neighbor = graph.get(city);
        for(let i = 0; i < neighbor.length; i++) {
            singleNeighbor = neighbor[i];
            const hash = singleNeighbor +"-"+ city;
            if(visited.has(singleNeighbor)) continue;
            if(!edges.has(hash)) count++;  // this is the condition that is doing the magic.
            visited.add(singleNeighbor);
            dfs(singleNeighbor);
        }
    }

    visited.add(0);
    dfs(0);

    return count;
};