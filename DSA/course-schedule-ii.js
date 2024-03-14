/**
 * DFS | ToplogicalSort
 * Time O(n) | Space O(n^2)
 * https://leetcode.com/problems/course-schedule-ii/   
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
    const createGraph = (edges) => {

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

    const graph = createGraph(prerequisites);

    // set converts to array in the order the values were added.
    const topologicalOrder = new Set();
    
    for(let i = 0; i < numCourses.length; i++) {
        nodes.add(numCourses[i][0]);
        nodes.add(numCourses[i][1]);
    }

    const dfs = (node, visited) => {
        
        if(topologicalOrder.has(node)) return true;
        if(visited.has(node)) return false;

        visited.add(node);
        
        const neighbors = graph[node] || [];

        for(let i = 0; i < neighbors.length; i++) {
            const nextNode = neighbors[i];
            if(!dfs(nextNode, visited)) return false;
        }

        if(!topologicalOrder.has(node)) {
            topologicalOrder.add(node);
        }

        visited.delete(node);
        return true;
    }

    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i, new Set())) return [];
    }

    return [...topologicalOrder];
};

/**
 * Topological Sort
 * Time O(n+m) | Space O(n)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder1 = function(numCourses, prerequisites) {
    
    const visited = new Set();
    const cycle = new Set();
    const graph = new Map();
    makeGraph(prerequisites);
    function makeGraph(prerequisites) {
        for(let i = 0; i < prerequisites.length; i++) {
            const targetCourse = prerequisites[i][1];
            const baseCourse = prerequisites[i][0];
            const previouseCourse = graph.get(baseCourse) || [];
            graph.set(baseCourse, [...previouseCourse, targetCourse]);
        }
    }
    let result = [];
 
    function dfs(course) {
      if(cycle.has(course)) return false;
      if(visited.has(course)) return true;
        const neighbor = graph.get(course) || [];

        cycle.add(course);
        for(let i = 0; i < neighbor.length; i++) {
            if(!dfs(neighbor[i])) return false;
        }
        cycle.delete(course);
        visited.add(course);
        result.push(course);
        return true;
    }
    
    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i)) {
            return [];
        }
    }

    return result;
};