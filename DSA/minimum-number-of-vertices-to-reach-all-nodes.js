/**
 * Approch 
 * 1. sort topologically.
 * 2. run dfs on topologically sorted nodes.
 * 3. whenever you run dfs from a topological sorted node add that node to ans arr. 
 * 
 * DFS | Toplogical Sort
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    
    const toplogicalSortedArr = [];
    
    const graph = {};

    for(let i = 0; i < edges.length; i++) {
        const from = edges[i][0];
        const to = edges[i][1];

        if(!graph[from]) {
            graph[from] = [];
        }

        graph[from].push(to);
    }

    const visited = new Set();

    const toplogicalDfs = (node) => {
        
        if(visited.has(node)) return;
        visited.add(node);
        const neighbor = graph[node];

        for(let i = 0;  i < (neighbor && neighbor.length); i++) {
            const nextNode = neighbor[i];
            toplogicalDfs(nextNode);
        }

        toplogicalSortedArr.push(node);
    }

    for(let i = 0; i < n; i++) {
        toplogicalDfs(i);
    }

    toplogicalSortedArr.reverse();

    // clear the set because we're about to use it in this dfs now.
    visited.clear();

    const dfs = (node) => {
        
        if(visited.has(node)) return;
        visited.add(node);

        const neighbor = graph[node];
        for(let i = 0; i < (neighbor && neighbor.length); i++) {
            const nextNode = neighbor[i];
            dfs(nextNode);
        }
    }

    let minVertices = [];
    for(let i = 0; i < toplogicalSortedArr.length; i++)  {
        const node = toplogicalSortedArr[i];
        if(visited.has(node)) continue;
        minVertices.push(node);
        dfs(node);
    }

    return minVertices;
};