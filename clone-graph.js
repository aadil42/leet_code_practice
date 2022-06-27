var cloneGraph = function(node) {
    
    const visited = new Map();
    function dfs(node) {
        if(!node) return;
        if(visited.has(node)) return visited.get(node);
        
        const nodeCopy = new Node(node.val);
        visited.set(node, nodeCopy);
        for(let i = 0; i < node.neighbors.length; i++) {
            nodeCopy.neighbors.push(dfs(node.neighbors[i]));
        }
        
        return nodeCopy;
    }
    
    return dfs(node);
};