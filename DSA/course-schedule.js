/**
 * Topological Sort
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    // dfs topological sort.
    // if there's a cycle then return false;
    // otherwise travers n times from each node.
    // if a coure can be taken then store the result in hash so you don't have to compute it again.

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
    const takenCourses = {};

    const dfs = (node, visited) => {
        
        // there's a cycle.
        if(node in takenCourses) return takenCourses[node];

        if(visited.has(node)) return false;
        visited.add(node);
        const neighbors = graph[node] || [];
        takenCourses[node] = false;
        for(let i = 0; i < neighbors.length;  i++) {
            const nextNode = neighbors[i];
            if(!dfs(nextNode, visited)) return false;
        }
        visited.delete(node);
        takenCourses[node] = true;
        return true;
    }

    for(let i = 0; i < numCourses+1; i++) {
        if( !dfs(i, new Set()) ) return false;
    }

    return true;

};

/**
 * 
 * Topological Sort
 * https://leetcode.com/problems/course-schedule/
 * Time O(n) | Space O(n)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish1 = function(numCourses, prerequisites) {
    
    const graph = {};
    for(let i = 0; i < prerequisites.length; i++) {
        const pre = prerequisites[i][1];
        const course = prerequisites[i][0];
        if(graph[course]) {
            graph[course] = [...graph[course], pre];
        } else {
            graph[course] = [pre];
        }
    }

    const canTakeCourse = {};
    const dfs = (node) => {
        if(canTakeCourse[node] !== undefined) return canTakeCourse[node];

        const neighbor = graph[node];
        canTakeCourse[node] = false;
        for(let i = 0; i < (neighbor && neighbor.length); i++) {
            if(!dfs(neighbor[i])) return false;
        }
        canTakeCourse[node] = true;
        return true;
    }

    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i)) return false;
    }
    return true;
};