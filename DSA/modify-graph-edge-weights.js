/**
 * Dijkstra
 * Time n*O(n*log(n)) | Space O(n^2)
 * https://leetcode.com/problems/modify-graph-edge-weights/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function(n, edges, source, destination, target) {
    
    const graph = {};

    for(let i = 0; i < edges.length; i++) {

        const [from, to, weight] = edges[i];    
        if(weight === -1)  continue;

        if(!graph[from]) {
            graph[from] = [];
        }
        if(!graph[to]) {
            graph[to] = [];
        }

        graph[from].push([to, weight]);
        graph[to].push([from, weight]);
    }

    const dijkstra = (graph, src, target) => {

        const minQueue = new MinPriorityQueue({
            compare: (a,b) => {
                return a[0]-b[0];
            }
        });

        minQueue.enqueue([0,src]);
        const visited = new Set();

        let minDistance = Infinity;
        while(!minQueue.isEmpty()) {
            const [weight, node] = minQueue.dequeue();
            
            visited.add(node);
            if(node === target) return weight

            const neighbors = graph[node] || [];

            for(let i = 0; i < neighbors.length; i++) {
                const [nextNode, nextWeight] = neighbors[i];
                if(visited.has(nextNode)) continue;
                minQueue.enqueue([weight+nextWeight, nextNode]);
            }
        }

        return Infinity;
    }

    const initialShortestPath = dijkstra(graph, source, destination);

    if(initialShortestPath < target) return [];

    if(initialShortestPath === target) {

        for(let i = 0; i < edges.length; i++) {
            const [from, to, weight] = edges[i];
            if(weight === -1) {
                edges[i][2] = 2e9;
            }
        }

        return edges;
    }

    for(let i = 0; i < edges.length; i++) {

        const [from, to, weight] = edges[i];

        if(weight !== -1) continue;

        edges[i][2] = 1;
        if(!graph[from]) {
            graph[from] = [];
        }
        if(!graph[to]) {
            graph[to] = [];
        }

        graph[from].push([to, 1]);
        graph[to].push([from, 1]);

        const shortestPath = dijkstra(graph, source, destination);

        if(shortestPath <= target) {
            edges[i][2] += target - shortestPath;

            for(let i = 0; i < edges.length; i++) {
                if(edges[i][2] === -1) {
                    edges[i][2] = 2e9;
                }
            }

            return edges;
        }
    }

    return [];
};