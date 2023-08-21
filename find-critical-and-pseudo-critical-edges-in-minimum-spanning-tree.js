/**
 * https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/
 * 
 * Minimum Spanning Tree.
 * Time O(n^2) | Space(n) 
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
    // if you ignore an edge and you can't form a cycle or the sum is bigger then it's a ciritical
    // if you include an edge and the sum is the same and you can form a cycle then it's a psudo critical.

    // keeping the original index of edge so we can correctly append it.
    for(let i = 0; i < edges.length; i++) {
        edges[i].push(i);
    }

    // sorting.
    edges = edges.sort((a,b) => a[2] - b[2]);

    // helper method
    const find = (n, parent) => {
        while(parent[n] !== n) {
            n = parent[n];
        }
        return n;
    }
    // helper method
    const unionF = (n1, n2, rank, parent) => {
        n1 = find(n1, parent);
        n2 = find(n2, parent);
    
        if(n1 === n2) return false;
        if(rank[n1] > rank[n2]) {
            rank[n1] += rank[n2];
            parent[n2] = n1;
        } else {
            rank[n2] += rank[n1];
            parent[n1] = n2;
        }
        return true;
    }

    const getMstSum = (mustNotInclude, mustInclude) => {

        const rank = [];
        const parent = [];

        for(let i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 1;
        }
        let totalSum = 0;
        let totalEdges = 0;

        if(mustInclude) {
            const node1 = edges[mustInclude][0];
            const node2 = edges[mustInclude][1];
            const weight = edges[mustInclude][2];
            totalEdges += 1;
            totalSum += weight;
            unionF(node1, node2, rank, parent);
        }

        for(let i = 0;  i < edges.length; i++) {
            if(i === mustNotInclude) continue;
            const node1 = edges[i][0];
            const node2 = edges[i][1];
            const weight = edges[i][2];
            if(unionF(node1, node2, rank, parent)) {
                totalSum += weight;
                totalEdges++;
            }; 
        }
        if(totalEdges === n - 1) return totalSum;
        return Infinity;
    }

    // get the mst sum
    const mstSum = getMstSum();
    const criticalEdges = [];
    const psudoCriticalEdges = [];

    // try excluding each edge and check for critical edge.
    for(let i = 0; i < edges.length; i++) {
        if(getMstSum(i, undefined) > mstSum) {
            criticalEdges.push(edges[i][3]);
        } else {
            // it's not criticale. Check if it's psudo critical?
            if(getMstSum(undefined, i) === mstSum) {
                psudoCriticalEdges.push(edges[i][3]);
            };
        }
    }
    return [criticalEdges, psudoCriticalEdges];
};
