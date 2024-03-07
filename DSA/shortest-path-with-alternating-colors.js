/**
 * Graph | BFS
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/shortest-path-with-alternating-colors/
 * 
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    
    const createGraph = (edges) => {
        const graph = {};

        for(let i = 0; i < edges.length; i++) {

            const from = edges[i][0];
            const to = edges[i][1];
            
            if(!graph[from]) {
                graph[from] = [];
            }

            graph[from].push(to);
        }

        return graph;
    }

    const redGraph = createGraph(redEdges);
    const blueGraph = createGraph(blueEdges);


    const bfs = (node, target) => {

        const q = new Queue();
        q.enqueue([node, undefined]);
        let pathLen = 0;
        const visited = new Set();

        while(!q.isEmpty()) {

            const size = q.size();
            
            for(let i = 0; i < size; i++) {
                const element = q.dequeue();
                const color = element[1];
                const node = element[0];
                
                if(node === target) {
                    return pathLen;
                }
                
                const hash = `${node}-${color}`;
                if(visited.has(hash)) continue;
                visited.add(hash);

                // it means the color is not decieded yet. source node
                if(color === undefined) {
                    const neighbors1 = redGraph[node];
                    const neighbors2 = blueGraph[node];
                
                    for(let j = 0; j < (neighbors1 && neighbors1.length); j++) {
                        const nextNode = neighbors1[j];
                        q.enqueue([nextNode, false]);
                    }

                    for(let j = 0; j < (neighbors2 && neighbors2.length); j++) {
                        const nextNode = neighbors2[j];
                        q.enqueue([nextNode, true]);
                    }
                }

                // it means it's red color
                if(color === false) {
                    const neighbors = blueGraph[node];
                    for(let j = 0; j < (neighbors && neighbors.length); j++) {
                        const nextNode = neighbors[j];
                        q.enqueue([nextNode, true]);
                    }
                }

                // it means it's blue color
                if(color === true) {
                    const neighbors = redGraph[node];
                   for(let j = 0; j < (neighbors && neighbors.length); j++) {
                        const nextNode = neighbors[j];
                        q.enqueue([nextNode, false]);
                    }  
                }
            }

            pathLen++;
        }

        return -1;
    }

    const minPaths = [0];

    for(let i = 1; i < n; i++) {
        minPaths.push(bfs(0, i));
    }

    return minPaths;
};