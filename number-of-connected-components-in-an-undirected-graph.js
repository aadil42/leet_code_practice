// this solution is not tested in leetcode as this was a premium problem. And you my friend are poor like me who can't afford leetcode premium
// so make your own random test cases and test this. // it runs when I ran my custom test cases.
var countComponents = function (n, edges) {
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