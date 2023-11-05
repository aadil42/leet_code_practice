/**
 * DFS
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/find-champion-ii/
 * 
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
    
    if(n === 1) return 0;
    
    const graph = {};
    
    // we're creating a reverse graph. Meaning source are destination and destination are source.
    for(let i = 0; i < edges.length; i++) {
        const source = edges[i][0];
        const destination = edges[i][1];
        
        const neighbers = graph[destination] || [];
        graph[destination] = [...neighbers, source];
    }
    
    const visited = new Set();
    const champions = new Set();
    
    const dfs = (node) => {
        if(visited.has(node)) return;
        visited.add(node);
        
        const neighbors = graph[node];
        if(!neighbors) {
            champions.add(node);
            return;
        }
        
        for(let i = 0; i < neighbors.length; i++) {
            dfs(neighbors[i]);
        }
    }
    
    for(let i = 0; i < n; i++) {
        dfs(i);
    }
    
    
    if(champions.size === 1) return [...champions][0];
    return -1;
    
};