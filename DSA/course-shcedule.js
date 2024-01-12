var canFinish = function(numCourses, prerequisites) {
    
    const graph = new Map();
    const visited = new Set();
    // making list graph
    for(let i = 0; i < prerequisites.length; i++) {
        if(graph.has(prerequisites[i][0])) {
            const existingArr = graph.get(prerequisites[i][0]);
            graph.set(prerequisites[i][0], [...existingArr, prerequisites[i][1]]);
        } else {
            graph.set(prerequisites[i][0], [prerequisites[i][1]]);
        }
    }

   function dfs(crs) {
       if(visited.has(crs)) return false;
       if(!graph.has(crs)) return true;

       visited.add(crs);
       for(let i = 0; i < graph.get(crs).length; i++) {
           if(!dfs(graph.get(crs)[i])) return false;
       }

       visited.delete(crs);
       graph.delete(crs);

       return true;
   } 
   
   for(let i = 0; i < numCourses; i++) {
       if(!dfs(i)) return false;
   }

   return true;
};

const numCourses = 2, prerequisites = [[1,0],[0,1]];

console.log(canFinish(numCourses, prerequisites));

