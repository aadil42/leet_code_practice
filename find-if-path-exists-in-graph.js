function makeGraph(edges) {
    const graph = new Map();

    for(let i = 0; i < edges.length; i++) {
         const value = edges[i][1];
        if(graph.has(edges[i][0])) {
            const existingArray = graph.get(edges[i][0]);
            const key = edges[i][0];
            graph.set(key, [...existingArray, value]);
        } else {
            const key = edges[i][0];
            graph.set(key, [value]);
        }
    }
    return graph;
}

var validPath = function(n, edges, source, destination) {
        
   const graph = makeGraph(edges); 

};