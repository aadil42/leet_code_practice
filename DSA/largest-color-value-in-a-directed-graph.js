/**
 * 
 * Topological Sort | Kahns Algorithm | BFS
 * Time O(26*(n+m)) | Space O(26*(n+m))
 * https://leetcode.com/problems/largest-color-value-in-a-directed-graph/
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */

// this is a quite lengty and challanging problem.

// steps to take.
    // create graph /// done.
    // get indegrees of all nodes
    // run bfs with topological sort
    // create 26*(n+m) object array that will store the state of colors for each node.
    // return the max path.
var largestPathValue = function(colors, edges) {
    
    // have to traverse bfs topologically with kahns algo
    const createGraph = () => {
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

    const graph = createGraph();
    console.log(graph);
    const indegrees = {};

    // populating indegrees.
    for(const key in graph) {
        const neighbors = graph[key];
        for(let i = 0; i < neighbors.length;  i++) {
            const node = neighbors[i]; 
            indegrees[node] = (indegrees[node] && indegrees[node] + 1) || 1; 
        }
    }
    // populate indegress with 0 edges reaching nodes
    for(const key in graph) {
        if(!indegrees[key]) {
            indegrees[key] = 0;
        }
    }

    const q = new Queue();

    const hash = {};

    // add all the nodes which has 0 indegree
    for(let node in indegrees) {
        if(indegrees[node] === 0) {
            node = +node; // convert to integer
            q.enqueue(node);
            hash[node] = {};
            const color = colors[node];
            hash[node][color] = 1;
        }
    }

    // the meat of the code.
    let max = 1;
    while(!q.isEmpty()) {
        const size = q.size();

        for(let i = 0; i < size; i++) {

            const node = q.dequeue();
            const neighbors = graph[node];
            const parentState = hash[node];
            if(!neighbors) continue;

            for(let j = 0; j < neighbors.length; j++) {
                const nextNode = neighbors[j];
                const nextNodeColor = colors[nextNode];
                indegrees[nextNode] -= 1;
                const nextNodeState = hash[nextNode] || {};

                // iterate over the state

                ////////////////////////////
                /// this part is the main thing to understand.
                for(const color in parentState) {
                    if(color === nextNodeColor) {
                        const maxSoFar = (nextNodeState[color] && 
                                          Math.max(parentState[color] + 1, nextNodeState[color])) || 
                                          parentState[color] + 1;
                                          
                        nextNodeState[color] = maxSoFar;
                        max = Math.max(max, maxSoFar);
                    } else {
                        const maxSoFar = (nextNodeState[color] && 
                                          Math.max(parentState[color], nextNodeState[color])) || 
                                          parentState[color];

                        nextNodeState[color] = maxSoFar;
                        max = Math.max(max, maxSoFar);
                    }
                }

                /// if the color is brand new  and never been there in the path
                // then set that color in the path to 1. Since it's the first time we're
                // seeing this color.
                if(nextNodeState[nextNodeColor] === undefined) {
                    nextNodeState[nextNodeColor] = 1;
                }
                /////////////////////////////
                hash[nextNode] = nextNodeState;
                if(indegrees[nextNode] === 0) {
                    q.enqueue(nextNode);
                }
            }
        }
    }

    // console.log(hash);
    // there was a cycle.
    for(const key in indegrees) {
        if(indegrees[key] > 0) return -1;
    }

    return max;
};