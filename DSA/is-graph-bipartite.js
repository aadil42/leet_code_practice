/**
 * DFS
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/is-graph-bipartite/
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartiteDFS = function(graph) {

    const visited = new Map();

    const dfs = (node, color) => {

        if(visited.has(node)) {
            return visited.get(node) === color;
        }
        visited.set(node, color);

        const neighbors = graph[node];
        for(let i = 0;  i < neighbors.length; i++) {
            const nextNode = neighbors[i];
            if(!dfs(nextNode, !color)) return false;
        }

        return true;
    }

    for(let i = 0; i < graph.length; i++) {
        if(!visited.has(i) && !dfs(i, true)) return false;
    }

    return true;
};

/**
 * BFS 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/is-graph-bipartite/
 * 
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartiteBFS = function(graph) {

    const visited = new Map();

    const bfs = (source) => {

        const q = new Queue();
        q.enqueue([source, true]);// [node, color]

        while(!q.isEmpty()) {

            const size = q.size();

            for(let i = 0; i < size; i++) {
                const [node, color] = q.dequeue();

                if(visited.has(node)) {
                    if(visited.get(node) !== color) return false;
                    continue;
                }

                visited.set(node, color);

                const neighbors = graph[node];
                for(let j = 0; j < neighbors.length; j++) {
                    const nextNode = neighbors[j];
                    q.enqueue([nextNode, !color]);
                }
            }
        }

        return true;
    }

    for(let i = 0; i < graph.length; i++) {
        if(!visited.has(i) && !bfs(i)) return false;
    }

    return true;
};

var isBipartite1 = function(graph) {
    const colors = {}

    for (let i = 0; i < graph.length; i++) {
        if (!colors.hasOwnProperty(i) && !dfs(i, true)) return false
    }
    
    return true
    
    function dfs(idx, color) {
        if (colors.hasOwnProperty(idx)) return color === colors[idx]
        colors[idx] = color
        
        for (const i of graph[idx]) {
            if (!dfs(i, !color)) return false
        }
        
        return true
    }
};