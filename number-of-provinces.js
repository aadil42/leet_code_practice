/**
 * DFS
 * 
 * Time O(n) | Space O(n)
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    
    const graph = {};
    for(let i = 0; i < isConnected.length;  i++) {
        for(let j = 0; j < isConnected.length; j++) {
             if(!isConnected[i][j]) continue;
             if(graph[i]) {
                graph[i] = [...graph[i], j];
            } else {
                graph[i] = [j];
            }
        }
    }

    const visited = new Set(); 

    const dfs = (node) => {
        if(visited.has(node)) return 0;
        visited.add(node);

        const neighbor = graph[node];
        for(let i = 0; i < neighbor.length; i++) {
            if(visited.has(neighbor[i])) continue;
            dfs(neighbor[i]);
        }
        return 1;
    }
    
    let provinces = 0;
    for(const key in graph) {
        provinces += dfs(+key);
    }

    return provinces;
};