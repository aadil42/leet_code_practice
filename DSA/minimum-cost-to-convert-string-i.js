/**
 * Dijkstra | Shortest Path with Weight
 * Time O(26^2 * 2000) | Space O(2000) | [26 because there 26 letters. 2000 because there are no more than 2000 edges]
 * https://leetcode.com/problems/minimum-cost-to-convert-string-i
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, costs) {
    
    const graph = {};
    // const edgesWithWeight = cost.map((c, idx) => [original[i], changed[i], c]);
    
    for(let i = 0; i < original.length; i++) {
        const from = original[i];
        const to = changed[i];
        const cost = costs[i];

        if(!graph[from]) {
            graph[from] = [];
        }

        graph[from].push([to, cost]);
    }

    const dijkstraShortestPath = (src, destination) =>  {

        const minQ = new MinPriorityQueue({
            compare: (a,b) => {
                return a[1]-b[1];
            }
        });
        const visited = new Set();
        minQ.enqueue([src,0]);

        while(!minQ.isEmpty()) {

            const element = minQ.dequeue();
            const node = element[0];
            const cost = element[1];
            visited.add(node);

            if(node === destination) return cost;

            const neighbors = graph[node] || [];

            for(let i = 0; i < neighbors.length; i++) {
                const nextNode = neighbors[i][0];
                const nextCost = neighbors[i][1];

                if(visited.has(nextNode)) continue;
                minQ.enqueue([nextNode, cost+nextCost]);
            }
        }

        return false;
    }

    let totalMinCost = 0;
    const cache = {};

    // what if we're going from a to a or b to b?
    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(97+i);
        cache[`${char}-${char}`] = 0;
    }

    for(let i = 0; i < source.length; i++) {
        const hash = `${source[i]}-${target[i]}`;
        if(cache[hash] === undefined) {
            const minCost = dijkstraShortestPath(source[i], target[i]);
            console.log(source[i], target[i], minCost)
            if(!minCost) return -1;
            cache[hash] = minCost;
        }
        totalMinCost += cache[hash];
    }

    return totalMinCost;
};