/**
 * UnionFind | Graph
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/redundant-connection/
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection2nd = function(edges) {
    
    const rankArr = [];
    const parentArr = [];
    const n = edges.length;

    for (let i = 0; i < n+1; i++) {
        rankArr.push(1);
    }

    for (let i = 0; i < n+1; i++) {
        parentArr.push(i);
    }

    const getParent = (node) => {
        while (node != parentArr[node]) {
            node = parentArr[node];
        }
        return node;
    }

    const isRedundent = (node1, node2) => {

        const node1Parent = getParent(node1);
        const node2Parent = getParent(node2);

        if (node1Parent === node2Parent) return true;

        if (rankArr[node1Parent] > rankArr[node2Parent]) {
            rankArr[node1Parent] += rankArr[node2Parent];
            parentArr[node2Parent] = node1;
        } else {
            rankArr[node2Parent] += rankArr[node1Parent];
            parentArr[node1Parent] = node2;
        }

        return false;
    }
    

    for (let i = 0; i < edges.length; i++) {
        const [node1, node2] = edges[i];
        if (isRedundent(node1, node2)) return edges[i];
    }
};


/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection1st = function(edges) {
    
    const parent = [];
    const rank = new Array(edges.length + 1).fill(1);
    
    for(let i = 0; i < rank.length; i++) {
        parent.push(i);
    }
    
    function find(n) {
        let p = parent[n];
        while( p !== parent[p]) {
            p = parent[p];
        }
        return p;
    }

    function union(n1,n2) {
        const p1 = find(n1);
        const p2 = find(n2);
        if(p1 === p2) return false;
        if(rank[p1] > rank[p2]) {
            rank[p1] += rank[p2];
            parent[p2] = p1; 
        }  else {
            rank[p2] += rank[p1];
            parent[p1] = p2;
        }
        return true;
    }

    for(let i = 0; i < edges.length; i++) {
        if(!union(edges[i][0],edges[i][1])) {
            return edges[i];
        }
    }

};