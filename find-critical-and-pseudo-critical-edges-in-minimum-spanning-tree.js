/**
 * 
 * The answer is not getting submitted. I don't know why? it gives wrong answer for certain inputs.
 * check
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
    // if you ignore an edge and you can't form a cycle or the sum is bigger then it's a ciritical
    // if you include an edge and the sum is the same and you can form a cycle then it's a psudo critical.
    edges = edges.sort((a,b) => a[2] - b[2]);

    const find = (n, parent) => {
        while(parent[n] !== n) {
            n = parent[n];
        }
        return n;
    }

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

        for(let i = 0; i < n + 1; i++) {
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
        if(getMstSum(i) > mstSum) {
            criticalEdges.push(i);
        } else {
            // it's not criticale. Check if it's psudo critical?
            if(getMstSum(undefined, i) === mstSum) {
                psudoCriticalEdges.push(i);
            };
        }
    }

    return [criticalEdges, psudoCriticalEdges];
};

// const edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]];
const edges = [[0,1,1],[1,2,1],[0,2,1],[2,3,4],[3,4,2],[3,5,2],[4,5,2]];
const n = 6;
console.log(findCriticalAndPseudoCriticalEdges(n, edges));
//  [[0,1],[2,3,4,5]];