class Solution {
    /**
     * DFS | Recursion
     * Time O(n) | Space O(n)
     * https://neetcode.io/problems/count-connected-components/history?list=blind75&submissionIndex=0
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        const createGraph = (edges) => {
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

        const graph = createGraph(edges);
        const visited = new Set();

        const dfs = (node) => {
            
            if (visited.has(node)) return;
            visited.add(node);

            const children = graph[node] || [];

            for (let i = 0; i < children.length; i++) {
                const nextChild = children[i];
                dfs(nextChild);
            }
        }
        // 0 -> 1
        // 1 -> 0, 2
        // 2 -> 1
        // 3 -> 4
        // 4 -> 3
        // 0 1 2 
        let total = 0;
        for (let i = 0; i < n; i++) {
            if (visited.has(i)) continue;
            dfs(i);
            total++;
        }
        return total;
    }
}
