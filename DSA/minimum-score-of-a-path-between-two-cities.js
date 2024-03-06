/**
 * DFS 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    
    const createGraph = () => {
        const graph = {};

        for(let i = 0; i < roads.length; i++) {

            const from = roads[i][0];
            const to = roads[i][1];
            const distance = roads[i][2];

            if(!graph[from]) {
                graph[from] = [];
            }

            if(!graph[to]) {
                graph[to] = [];
            }

            graph[from].push([to, distance]);
            graph[to].push([from, distance]);
        }

        return graph;
    }

    const graph = createGraph();
    const visited = new Set();

    let min = Infinity;

    const dfs = (node) => {

        if(visited.has(node)) return;
        visited.add(node);

        const neighbors = graph[node];

        for(let i = 0; i < neighbors.length; i++) {
            const nextNode = neighbors[i][0];
            const distance = neighbors[i][1];
            min  = Math.min(min, distance);
            dfs(nextNode);
        }

    }

    dfs(1);
    return min;
};