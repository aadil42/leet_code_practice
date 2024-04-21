/**
 * Graph | DFS
 * Time O(n) | Space O(n^2)
 * https://leetcode.com/problems/find-if-path-exists-in-graph
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {

    const makeGraph = (edges) => {

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


    const graph = makeGraph(edges);
    const visited = new Set();
    
    const dfs = (node) => {
        if(visited.has(node)) return false;

        if(node === destination) return true;

        visited.add(node);
        const neighbors = graph[node];

        for(let i = 0; i < neighbors.length; i++) {
            const nextNode = neighbors[i];
            if(dfs(nextNode)) return true;
        }

        return false;
    }

    return dfs(source);
};

function makeGraph(edges) {
    const graph = new Map();

    for(let i = 0; i < edges.length; i++) {
         const value = edges[i][1];
         const key = edges[i][0];

         // for key
        if(graph.has(key)) {
            const existingArray = graph.get(key);
            graph.set(key, [...existingArray, value]);
        } else {
            graph.set(key, [value]);
        }

        // for value
        if(graph.has(value)) {
            const existingArray = graph.get(value);
            graph.set(value, [...existingArray, key]);
        } else {
            graph.set(value, [key]);
        }
    }
    return graph;
}

function dfs(graph, source, destination) {

    let dfsStack = [];
    const explored = new Set();
    
    dfsStack.push(source);
    explored.add(source);
   
    while(dfsStack.length) {
        let curruntNode = dfsStack.pop();
        if(curruntNode == destination) return true;
        curruntNode = graph.get(curruntNode);

        curruntNode && curruntNode
        .filter(node => !explored.has(node))
        .forEach(node => {
           dfsStack.push(node);
           explored.add(node); 
        });    
    }
    
    return false;
}

var validPath0 = function(n, edges, source, destination) {
        
   if(source == destination) return true;
   const graph = makeGraph(edges); 
   return dfs(graph, source, destination);
};