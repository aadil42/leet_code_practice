/**
 * DFS
 * Time O(n) | space O(n)
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const checkIfValid = new Map();

    function dfs(node) {
        const neighbor = graph[node];

        if(checkIfValid.has(node)) {
            return checkIfValid.get(node);
        }

        checkIfValid.set(node,false);
        for(let i = 0; i< neighbor.length; i++) {
            if(!dfs(neighbor[i])) return false;
        }
        checkIfValid.set(node,true);
        return true;
    }

    const result = [];
    for(let i = 0; i < graph.length; i++) {
        if(dfs(i)) {
            // console.log(i);
            result.push(i);
        } 
    }
    // console.log(result);
    return result;
};  