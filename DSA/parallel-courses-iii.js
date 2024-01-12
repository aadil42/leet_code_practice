/**
 * DFS | DP
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/parallel-courses-iii/
 * 
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
    
    const graph = {}
    const memo = {}
    for(let i = 0; i < relations.length; i++) {
        const parent = relations[i][1];
        const child = relations[i][0];
        const neighbor = graph[parent] || [];
        graph[parent] = [...neighbor, child];
    }   

    const dfs = (root) => {
        if(memo[root]) return memo[root];
        const neighbor = graph[root];


        let len = 0;
        if(neighbor) {
            for(let i = 0; i < neighbor.length; i++) {
                const t = dfs(neighbor[i]);
                const currentNodeTime = time[neighbor[i]-1];
                len = Math.max(len, t);
            }
        }

        memo[root] = time[root-1] + len; 
        return memo[root];
    }

    let max = 0;
    for(let i = 1; i < n+1; i++) {
        max = Math.max(max, dfs(i));
    }
    return max;
};