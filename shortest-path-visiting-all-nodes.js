/**
 * 
 * Graph | BFS | Bit masking
 * Time (2^n) | Space O(2^n)
 * https://leetcode.com/problems/shortest-path-visiting-all-nodes/
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    
    const totalNodes = graph.length
    if(totalNodes === 1) return 0;
    const finalState = (1 << totalNodes) - 1;
    const queue = [];
    const visited = new Set();
    for(let i = 0; i < totalNodes; i++) {
        const mask = (1 << i);
        queue.push([i, mask, 0]);
    }
    
    while(queue.length) {
        const nodes = queue.length;
        let i = 0;

        while(i < nodes) {
            const [currentNode, mask, dist] = queue.shift();
            const neighbors = graph[currentNode];
            for(let i = 0; i < neighbors.length; i++) {
                const nextNode = neighbors[i];
                const nextMask = mask | (1 << nextNode);
                if(nextMask === finalState) return dist+1;
                const nextHash = `${nextNode}-${nextMask}`;
                if(visited.has(nextHash)) continue;
                visited.add(nextHash);
                queue.push([nextNode, nextMask, dist+1]);
            }
        i++;
        }
    }

    return -1;
};