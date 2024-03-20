/**
 * Graph | DFS
 * Time O(n) | Space  O(n)
 * https://www.lintcode.com/problem/3651/ || This is a premium problem so make sure to submit your code to lintcode.
 * @param n: the number of vertices
 * @param edges: the edges of undirected graph
 * @return: the number of connected components
 */
const countComponents = (n, edges) => {
    // write your code 
    
    const constructAdjList = (edges) => {
        const graph = {};

        for(let i = 0; i < edges.length; i++) {

            const node1 = edges[i][0];
            const node2 = edges[i][1];

            if(!graph[node1]) {
                graph[node1] = [];
            }
            if(!graph[node2]) {
                graph[node2] = [];
            }

            graph[node1].push(node2);
            graph[node2].push(node1);
        }

        return graph;
    }

    const  graph =  constructAdjList(edges);
    
    const visited = new Set();
    const dfs = (node) =>  {
        if(visited.has(node)) return;
        visited.add(node);

        const neighbors = graph[node] || [];

        for(let i = 0; i < neighbors.length; i++) {
            const nextNode = neighbors[i];
            dfs(nextNode);
        }
    }

    let connectedGraphs = 0;
    for(let i = 0; i < n; i++) {
        if(!visited.has(i)) {
            dfs(i);
            connectedGraphs++;
        }
    }
    return connectedGraphs;
}


// keeping this code and comment because it's  funny for me now :):)
// this solution is not tested in leetcode as this was a premium problem. And you my friend are poor like me who can't afford leetcode premium
// so make your own random test cases and test this. // it runs when I ran my custom test cases.
var countComponents1 = function (n, edges) {
    let count = 0;
    const {graph, visited} = makeGraph(edges);

    for(let i = 0; i < edges.length; i++) {
        for(let j = 0; j < edges[0].length; j++) {
            if(dfs(graph, edges[i][j], visited)) {
                count++;
            };
        }
    }

    return count;
    // console.log(graph, visited);
};


function makeGraph(edges) {
    const graph = [];
    const visited = [];
    
    for(let i = 0; i < edges.length; i++) {

        
        if(graph[edges[i][0]]) {
            graph[edges[i][0]].push(edges[i][1]);
        } else {
            graph[edges[i][0]] = [];
            graph[edges[i][0]].push(edges[i][1]);
        }

        if(graph[edges[i][1]]) {
            graph[edges[i][1]].push(edges[i][0]);
        } else {
            graph[edges[i][1]] = [];
            graph[edges[i][1]].push(edges[i][0]);
        }
    }

    for(let i = 0; i < edges.length; i++) {
        visited[edges[i][0]] = false;
        visited[edges[i][1]] = false;
    }

    return {graph, visited};
}

function dfs(graph, src, visited) {
    if(visited[src]) return false;

    visited[src] = true;
    graph[src].forEach((node) => {
        dfs(graph, node, visited);
    });

    return true;
}

console.log(countComponents(5,[[1,2],[100,101],[6,101],[9,8],[15,14]]));