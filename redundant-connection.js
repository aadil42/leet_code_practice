    /**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    
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