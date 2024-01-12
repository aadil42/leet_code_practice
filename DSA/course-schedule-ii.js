/**
 * Topological Sort
 * Time O(n+m) | Space O(n)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
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