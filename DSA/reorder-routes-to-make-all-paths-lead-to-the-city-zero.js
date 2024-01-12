/**
 * dfs traversal.
 * Time O(n) | Space O(n)
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    
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