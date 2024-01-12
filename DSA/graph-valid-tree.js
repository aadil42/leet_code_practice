



function validTree(n, edges) {

    if(!n) return false;
    if(!edges.length) return false;

    const { graph } = makeGraph(edges);
    const visited = new Set();

    if(dfs(edges[0][0], -1, graph, visited)) {
        if(visited.size === n) return true;
    }
    return false;
}

function dfs(src, pre, graph, visited) {

    if(visited.has(src)) return false;
    visited.add(src);
    for(let i = 0; i < graph[src].length; i++) {
        if(graph[src][i] == pre) continue;        
        if(!dfs(graph[src][i], src, graph, visited)) return false;
    }

    return true;
}

function makeGraph(edges) {
    const graph = [];
    
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
    return {graph};
}

const edges = [[0,1],[0,2],[0,4],[4,9],[4,8],[2,3],[3,7],[7,5],[1,3]];
const n = 9;
console.log(validTree(n, edges));