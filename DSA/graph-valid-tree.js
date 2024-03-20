/**
 * Graph | UnionFind
 * Time O(n) | Space O(n) 
 * https://www.lintcode.com/problem/178/ || This problem is not on leetcode so you must solve it on lintcode.
 * @param n: An integer
 * @param edges: a list of undirected edges
 * @return: true if it's a valid tree, or false
 */
const validTree = (n, edges) => {

    // annoying edge case || if the edges are more or less then n - 1 then either there is a cycle or there is a nodes that are not fully connected.
    if(edges.length !== n - 1) return false; 
    // if(!edges.length && n === 1) 
    // return true;

    const parent = [];
    for(let i = 0; i < n; i++) {
      parent.push(i);
    }    

    const rank = [];
    for(let i = 0; i < n; i++)  {
      rank.push(1);
    }
    
    const getParent = (node) => {

      while(parent[node] !== node) {
        node = parent[node];
      }

      return node;
    }

    const isCycle = (edge) => {
      const node1 = edge[0];
      const node2 = edge[1];
      
      const parent1 = getParent(node1);
      const parent2 = getParent(node2);

      if(parent1 === parent2) return true;

      if(rank[parent1] > rank[parent2]) {
        parent[parent2] = parent1;
        rank[parent1] += rank[parent2];
      } else {
        parent[parent1] = parent2;
        rank[parent2] += rank[parent1];
      }

      return false;
    }

    for(let i = 0; i < edges.length; i++) {
      if(isCycle(edges[i])) return false;
    }

    return true;
  }
