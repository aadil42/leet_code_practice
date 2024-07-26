/**
 * Graph | Dijkstra
 * Time O(n^2 * n*log(n)) | Space O(n^2)
 * https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    
    const graph = {};

    for(let i = 0; i < edges.length; i++) {
        const from = edges[i][0];
        const to = edges[i][1];
        const weight = edges[i][2];

        if(!graph[from]) {
            graph[from] = [];
        }
        if(!graph[to]) {
            graph[to] = [];
        }

        graph[from].push([to, weight]);
        graph[to].push([from, weight]);
    }

    // gives shortest weighted path.
    const dijkstra = (src, target) => {

        const minPQueue = new MinPriorityQueue({
            compare: (a,b) => {
                return a[1] - b[1];
            }
        });

        minPQueue.enqueue([src, 0]);
        const visited = new Set();

        while(!minPQueue.isEmpty()) {
            const curr = minPQueue.dequeue();
            const node = curr[0];
            const weight = curr[1];
            if(node === target) return true;

            visited.add(node);
            const neighbors = graph[node] || [];
            for(let i = 0; i < neighbors.length; i++) {
                const nextNode = neighbors[i][0];
                const nextWeight = neighbors[i][1];

                if(visited.has(nextNode)) continue;
                if(weight+nextWeight > distanceThreshold) continue;
                minPQueue.enqueue([nextNode, weight+nextWeight]);
            }
        }

        return false;
    }

    let cityMapping = [];

    for(let i = 0; i < n; i++) {
        const currCities = [i];
        for(let j = 0; j < n; j++) {
            if(j===i) continue;
            const canReach = dijkstra(i,j);
            if(canReach) currCities.push(j);
        }
        cityMapping.push(currCities);
    }

    const minCities = Math.min(...cityMapping.map((cities) => cities.length)); 
    cityMapping = cityMapping.filter((cities) => {
        return cities.length === minCities;
    }); 

    return Math.max(...cityMapping.map((cities) => cities[0]));
};