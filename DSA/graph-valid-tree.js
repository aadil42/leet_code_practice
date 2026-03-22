 /**
   * Graph | DFS
   * Time O(n) | Space O(n)
   * https://www.lintcode.com/problem/178 || This problem is not on leetcode so you must solve it on lintcode.
   * @param n: An integer
   * @param edges: a list of undirected edges
   * @return: true if it's a valid tree, or false
   */
 const validTree = (n, edges) => {

  const constrcutAdjList = (edges) => {

    const graph = {};
    for(let i = 0; i < edges.length; i++) {

        const node1 = edges[i][0];
        const node2 = edges[i][1];

        if(!graph[node1]) {
          graph[node1] = [];
        }
        if(!graph[node2]) {
          graph[node2] = [];
        }

        graph[node1].push(node2);
        graph[node2].push(node1);
    }

    return graph;
  }

  const visited = new Set();
  const graph = constrcutAdjList(edges);

  const dfs = (node, pre) => {
    if(visited.has(node)) return true;
    visited.add(node);

    const neighbors = graph[node] || [];

    for(let i = 0; i < neighbors.length; i++) {
      const nextNode = neighbors[i];
      if(nextNode === pre) continue;
      
      if(visited.has(nextNode)) return false; // has a cycle.
      dfs(nextNode, node);
    }

    return true;
  }

  if(!dfs(0,-1)) return false;
  console.log(visited.size, n);
  return visited.size === n;
}

/**
 * Graph | UnionFind
 * Time O(n) | Space O(n) 
 * https://www.lintcode.com/problem/178/ || This problem is not on leetcode so you must solve it on lintcode.
 * @param n: An integer
 * @param edges: a list of undirected edges
 * @return: true if it's a valid tree, or false
 */
const validTree1 = (n, edges) => {

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


/**
 * DFS 
 * Time O(n) | Space O(n^2) (for the space we make graph)(all nodes can be connected with all the other nodes)(making it n^2)
 * https://neetcode.io/problems/valid-tree/history?submissionIndex=2
 * @param {number} n
 * @param {number[][]} edges
 * @returns {boolean}
 */
const validTree2 = (n, edges) => {

        const makeGraph = (edges) => {
            const graph = {};

            for (let i = 0; i < edges.length; i++) {
                
                const [from1, to] = edges[i];
                if (graph[from1]) {
                    graph[from1].push(to);
                } else {
                    graph[from1] = [to];
                }

                if (graph[to]) {
                    graph[to].push(from1);
                } else {
                    graph[to] = [from1];
                }
            }

            return graph;
        }

        const graph= makeGraph(edges);
        
        const visited = new Set();

        const dfs = (node, parentNode) => {

            if (visited.has(node)) return false;
            visited.add(node);
            const children = graph[node] || [];

            for (let i = 0; i < children.length; i++) {
                const nextChild = children[i];
                if (nextChild === parentNode) continue;
                if (!dfs(nextChild, node)) return false;
            }
            return true;
        }

        if(!dfs(0, null)) return false;
        if (visited.size !== n) return false;
        return true;
}