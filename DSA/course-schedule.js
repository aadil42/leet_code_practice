/**
 * 
 * Topological Sort
 * https://leetcode.com/problems/course-schedule/
 * Time O(n) | Space O(n)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
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