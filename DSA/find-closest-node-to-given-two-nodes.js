/**
 * Brute Force | BFS
 * Time O(n^2) | Space O(n) (because we have atmost 1 outgoing edge so each node will have only one len of array at most) 
 * https://leetcode.com/problems/find-closest-node-to-given-two-nodes/
 * 
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    
    const createGraph = () => {
        const graph = {};

        for(let i = 0; i < edges.length;  i++) {
            
            if(!graph[i]) {
                graph[i] = [];
            }

            graph[i].push(edges[i]);
        }

        return graph;
    }

    const graph = createGraph();

    const bfs = (source, target) => {
        
        const q = new Queue();
        const visited = new Set();
        q.enqueue([source, 0]);

        while(!q.isEmpty()) {
            const element = q.dequeue();
            const node = element[0];
            const distance = element[1];

            if(node === target) return distance;
            if(visited.has(node)) continue;
            visited.add(node);

            const neighbors = graph[node];
            for(let i = 0; i < (neighbors && neighbors.length); i++) {
                const nextNode = neighbors[i];
                q.enqueue([nextNode, distance+1]);
            }
        }

        return Infinity;
    }

    let minPath = Infinity;
    let minNode = -1;
    for(let i = 0; i < edges.length; i++) {
        const path1 = bfs(node1, i);
        const path2 = bfs(node2, i);

        if(Math.max(path1, path2) < minPath) {
            minPath = Math.max(path1, path2);
            minNode = i;
        }
    }

    return minNode;
};