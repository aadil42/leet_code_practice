function validTree(n, edges) {
    // write your code here

    const graph = new Map();
    const visited = new Set();
    // make list based graph; 
    for(let i = 0; i < edges.length; i++) {
        const key = edges[i][0], value = edges[i][1];
        if(graph.has(key)) {
            graph.set(key, [...graph.get(key), value]);
        } else {
            graph.set(key, [value]);
        }
    }
    

    function dfs(node, pre) {

        // if the duplicate is found.
        if(visited.has(node) && node !== pre) {
            return false;
        }
        // add node to visited set
        visited.add(node);

        // if we've come to end of the node.
        if(!graph.has(node)) return true;
        
        // call dfs recursivly so we can visite other nodes
        for(let i = 0; i < graph.get(node).length; i++) {
            if(!dfs(graph.get(node)[i], node)) return false;
        }

        return true;
    }

    if(!dfs(0, -1)) return false;

    // this is because if we have other nodes that are unconected.
    return visited.size === n;
}

const n = 5, edges = [
    [0,1],
    [1,2],
    [2,3],
    [1,4]
];
console.log(validTree(n, edges));