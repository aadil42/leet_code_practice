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

var validPath = function(n, edges, source, destination) {
        
   if(source == destination) return true;
   const graph = makeGraph(edges); 
   return dfs(graph, source, destination);
};